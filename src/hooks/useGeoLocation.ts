import { useState, useEffect } from "react";

interface GeoLocationData {
  isUS: boolean | null;
  isLoading: boolean;
  error: string | null;
}

export function useGeoLocation(): GeoLocationData {
  const [geoData, setGeoData] = useState<GeoLocationData>({
    isUS: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check if we already have cached geolocation data
    const cachedData = localStorage.getItem("geoLocation");
    const cacheTime = localStorage.getItem("geoLocationTime");

    // Use cached data if it's less than 24 hours old
    if (cachedData && cacheTime) {
      const cacheAge = Date.now() - parseInt(cacheTime);
      const oneDayInMs = 24 * 60 * 60 * 1000;

      if (cacheAge < oneDayInMs) {
        console.log("[GeoLocation] Using cached data:", cachedData);
        setGeoData({
          isUS: cachedData === "US",
          isLoading: false,
          error: null,
        });
        return;
      }
    }

    // Fetch geolocation data with multiple fallbacks
    const fetchGeoLocation = async () => {
      console.log("[GeoLocation] Starting detection...");

      // Try multiple APIs in sequence
      const apis = [
        {
          name: "ipapi.co",
          url: "https://ipapi.co/json/",
          parser: (data: any) => data.country_code,
        },
        {
          name: "ip-api.com",
          url: "http://ip-api.com/json/?fields=countryCode",
          parser: (data: any) => data.countryCode,
        },
        {
          name: "cloudflare-trace",
          url: "https://www.cloudflare.com/cdn-cgi/trace",
          parser: (text: string) => {
            const match = text.match(/loc=([A-Z]{2})/);
            return match ? match[1] : null;
          },
        },
      ];

      for (const api of apis) {
        try {
          console.log(`[GeoLocation] Trying ${api.name}...`);
          const response = await fetch(api.url);

          if (!response.ok) {
            console.warn(`[GeoLocation] ${api.name} failed with status:`, response.status);
            continue;
          }

          let countryCode;
          if (api.name === "cloudflare-trace") {
            const text = await response.text();
            countryCode = api.parser(text);
          } else {
            const data = await response.json();
            countryCode = api.parser(data);
          }

          if (!countryCode) {
            console.warn(`[GeoLocation] ${api.name} returned no country code`);
            continue;
          }

          console.log(`[GeoLocation] Success with ${api.name}:`, countryCode);
          const isUS = countryCode === "US";

          // Cache the result
          localStorage.setItem("geoLocation", countryCode);
          localStorage.setItem("geoLocationTime", Date.now().toString());

          setGeoData({
            isUS,
            isLoading: false,
            error: null,
          });
          return;
        } catch (error) {
          console.warn(`[GeoLocation] ${api.name} error:`, error);
          continue;
        }
      }

      // If all APIs fail, use timezone as rough fallback
      console.log("[GeoLocation] All APIs failed, using timezone fallback");
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const usTimezones = [
        "America/New_York",
        "America/Chicago",
        "America/Denver",
        "America/Los_Angeles",
        "America/Phoenix",
        "America/Anchorage",
        "Pacific/Honolulu",
      ];
      const isLikelyUS = usTimezones.some((tz) => timezone.startsWith(tz.split("/")[0]));

      console.log("[GeoLocation] Timezone-based detection:", timezone, "isUS:", isLikelyUS);

      setGeoData({
        isUS: isLikelyUS,
        isLoading: false,
        error: "Using timezone fallback",
      });
    };

    fetchGeoLocation();
  }, []);

  return geoData;
}

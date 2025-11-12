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
        setGeoData({
          isUS: cachedData === "US",
          isLoading: false,
          error: null,
        });
        return;
      }
    }

    // Fetch geolocation data
    const fetchGeoLocation = async () => {
      try {
        // Using ipapi.co free API (no API key required, 30k requests/month)
        const response = await fetch("https://ipapi.co/json/");

        if (!response.ok) {
          throw new Error("Failed to fetch geolocation");
        }

        const data = await response.json();
        const countryCode = data.country_code;
        const isUS = countryCode === "US";

        // Cache the result
        localStorage.setItem("geoLocation", countryCode);
        localStorage.setItem("geoLocationTime", Date.now().toString());

        setGeoData({
          isUS,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error("Geolocation detection failed:", error);
        setGeoData({
          isUS: null,
          isLoading: false,
          error: error instanceof Error ? error.message : "Unknown error",
        });
      }
    };

    fetchGeoLocation();
  }, []);

  return geoData;
}

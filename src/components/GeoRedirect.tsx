import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGeoLocation } from "../hooks/useGeoLocation";

interface GeoRedirectProps {
  children: React.ReactNode;
}

export default function GeoRedirect({ children }: GeoRedirectProps) {
  const { isUS, isLoading, error } = useGeoLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("[GeoRedirect] State:", { isUS, isLoading, error });

    // Only redirect if we've finished loading and user is in the US
    if (!isLoading && isUS === true) {
      console.log("[GeoRedirect] Redirecting to /us");
      navigate("/us", { replace: true });
    } else if (!isLoading) {
      console.log("[GeoRedirect] Not redirecting - not in US or detection failed");
    }
  }, [isUS, isLoading, error, navigate]);

  // Always render children immediately - don't wait for geolocation
  // This ensures good FCP and Core Web Vitals
  // The redirect happens in the background if needed
  return <>{children}</>;
}

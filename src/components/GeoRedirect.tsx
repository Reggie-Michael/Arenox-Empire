import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGeoLocation } from "../hooks/useGeoLocation";

interface GeoRedirectProps {
  children: React.ReactNode;
}

export default function GeoRedirect({ children }: GeoRedirectProps) {
  const { isUS, isLoading } = useGeoLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if we've finished loading and user is in the US
    if (!isLoading && isUS === true) {
      navigate("/us", { replace: true });
    }
  }, [isUS, isLoading, navigate]);

  // Always render children immediately - don't wait for geolocation
  // This ensures good FCP and Core Web Vitals
  // The redirect happens in the background if needed
  return <>{children}</>;
}

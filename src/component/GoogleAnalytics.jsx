import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-C6LHQKCJTM";

export default function Analytics() {
  const location = useLocation();

  // Load GA script once on mount
  useEffect(() => {
    if (window.gtag) return; // already loaded

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });
  }, []);

  // Track route changes
  useEffect(() => {
    if (!window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: location.pathname,
    });
  }, [location.pathname]);

  return null; // nothing to render visually
}

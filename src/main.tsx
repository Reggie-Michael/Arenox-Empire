import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import USLanding from "./USLanding";
import GeoRedirect from "./components/GeoRedirect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/ng" element={<App />} />

          <Route
            path="/"
            element={
              <GeoRedirect>
                <App />
              </GeoRedirect>
            }
          />
          <Route path="/us" element={<USLanding />} />
          <Route path="/usa" element={<USLanding />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);

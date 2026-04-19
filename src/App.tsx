import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = decodeURIComponent(location.hash.replace("#", ""));
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        targetElement.scrollIntoView({ block: "start" });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <>
      <RouteScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <Routes>
        <Route index element={<Home />} />

        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("No se pudo encontrar el elemento raíz en el DOM");
}
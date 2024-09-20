import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import './styles/index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const rootElement = document.getElementById('root');

if (rootElement) {
  // Usa createRoot en lugar de ReactDOM.render
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
        <Router>
          <Routes>
            <Route index element={<App />} />
          </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento raíz en el DOM");
}

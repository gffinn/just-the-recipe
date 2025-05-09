import React from "react";
import ReactDOM from "react-dom/client"; // Use react-dom/client for React 18+
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // Use BrowserRouter for routing

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

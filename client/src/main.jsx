// Arquivo principal da aplicação

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const root = document.querySelector("#root");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

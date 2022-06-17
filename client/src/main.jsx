import "bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";

const root = document.querySelector("#root");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);

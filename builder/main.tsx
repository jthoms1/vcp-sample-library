"use client";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/builder-registry";
import App from "../src/components/figma-imports";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

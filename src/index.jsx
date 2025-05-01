import React from "react";
import { createRoot } from "react-dom/client";
import { Landing } from "./screens/landing";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GalleryProvider from "./assets/Context/GalleryContext.jsx";

import "wired-elements";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GalleryProvider>
        <App />
      </GalleryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

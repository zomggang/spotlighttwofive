import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Meme from "./pages/Meme";
import Lyrics from "./pages/Lyrics";
import "../src/style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<App />} />
        <Route path="/meme" element={<Meme />} />
        <Route path="/lyrics" element={<Lyrics />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
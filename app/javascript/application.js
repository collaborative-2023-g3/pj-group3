// NOTIE : このファイルは触らないでください
// Entry point for the build script in your package.json
import React from "react";
import { createRoot } from "react-dom/client";
import Top from "./pages/Top";
import { AuthRegister } from "./pages/AuthRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./templates/Header";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Top />} />
      <Route exact path="/register" element={<AuthRegister />} />
    </Routes>
  </BrowserRouter>
);

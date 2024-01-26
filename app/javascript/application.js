// Entry point for the build script in your package.json
import React from "react";
import { createRoot } from "react-dom/client";
import Top from "./pages/Top";
import { AuthLogin } from "./pages/AuthLogin";
import { AuthRegister } from "./pages/AuthRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CatsCreate } from "./pages/Cat/New";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Top />} />
      <Route exact path="/register" element={<AuthRegister />} />
      <Route exact path="/login" element={<AuthLogin />} />
      <Route exact path="/cats/create" element={<CatsCreate />} />
    </Routes>
  </BrowserRouter>
);

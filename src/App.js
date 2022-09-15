import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starred" element={<Starred />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}

export default App;

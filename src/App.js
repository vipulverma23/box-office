import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import Show from "./pages/Show"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starred" element={<Starred />} />
      <Route path="/show/:id" element={<Show />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}

export default App;

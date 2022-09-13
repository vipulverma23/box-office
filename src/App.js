import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<>Home</>} />
      <Route path="/starred" element={<>Starred</>} />
      <Route path="*" element={<>404</>}/>
    </Routes>
  );
}

export default App;

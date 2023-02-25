import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./login";
import Dashbord from "./Dashbord";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Dashbord" element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

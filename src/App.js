import React from "react";

import "./App.css";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;

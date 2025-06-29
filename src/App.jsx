import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/header/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <NavBar />
      <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
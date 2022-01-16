import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apicall from "./components/Apicall";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Apicall />
    </div>
  );
}

export default App;

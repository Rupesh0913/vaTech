import React  from 'react';
import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home"
import About from "./components/Pages/AboutPage/About"
import ContactUs from "./components/Pages/ContactUs/ContactUs"
import MainWhatWeDo from "./components/Pages/WhatWeDo/MainWhatWeDo"
import Error from "./Error"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/whatWeDo" element={< MainWhatWeDo />}/>
        <Route path="/contactus" element={< ContactUs />}/>
        <Route component={Error} />
      </Routes>
    </div>
  );
}

export default App;

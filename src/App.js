import React  from 'react';
import './Assets/Styles/App.css';
import {Route, Routes } from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About"
import ContactUs from "./Routes/ContactUs"
import MainWhatWeDo from "./Routes/MainWhatWeDo"
import Error from "./Routes/Error"

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

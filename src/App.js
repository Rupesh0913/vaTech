import React  from 'react';
import './Assets/Styles/App.css';
import {Route, Routes } from "react-router-dom";
import Home from "./Routes/Home"
import About from "./Routes/About";
import ContactUs from "./Routes/ContactUs";
import MainWhatWeDo from "./Routes/MainWhatWeDo";
import Error from "./Routes/Error";
import Header from './Layouts/Header/Header';
import Footer from './Layouts/Footer/Footer';

export default function App() {
  return (
    <div className="App">
        
    <Header/>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/whatWeDo" element={< MainWhatWeDo />}/>
        <Route path="/contactus" element={< ContactUs />}/>
        <Route component={Error} />
      </Routes>
     <Footer/>   
    </div>
  );
}


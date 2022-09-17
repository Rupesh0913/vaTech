import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./HandFmain.css"

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  const[showNav,setShowNav]=useState(false);

  return (
    <div className="main-nav">
        <div className= "logo"><h3>vaTech.</h3></div>
     
        <div className={
            showNav ? "menu mobile-menu" : "menu"
          }>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to="/WhatWeDo">What We Do</Link></li>
                <li><a herf="#">Blog</a></li> 
            </ul>
        </div>

        <div className="contact-menu">
            <ul>
            <li><Link to='/contactus'>Contact Us</Link></li>
            </ul>
            
            <div className= "hamburger-menu">
              <a href="#" onClick={()=>setShowNav(!showNav)}>
                < GiHamburgerMenu />
              </a>
            </div>
        </div>
    </div>
  )
}

export default Header
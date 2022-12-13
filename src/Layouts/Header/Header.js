import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "../../Assets/Styles/Main.css";
import "../../Assets/Styles/Header.css"
// import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from 'hamburger-react';

const Header = () => {

    const[showNav,setShowNav]=useState(false);
    const setNav = () =>{
      if(showNav){
        setShowNav(!showNav);
      }
    }
  
    return (<>
      <div className="main-nav">
          <div className= "logo">vatech.</div>
       <div className='head-container'>
          <div className={
              showNav ? "mobile-menu" : "menu"
            }>
                  <Link to='/' onClick={()=> setNav()}><div className='nav-btn'>Home</div></Link>
                  <Link to='/about' onClick={()=> setNav()}><div className='nav-btn'>About</div></Link>
                  <Link to="/WhatWeDo" onClick={()=> setNav()}><div className='nav-btn'>What We Do</div></Link>
                  <Link to="/" onClick={()=> setNav()}><div className='nav-btn'>Blog</div></Link>
                  <Link to="/contactus" className={showNav ? "showContact" : "hideContact"} onClick={()=> setNav()}><div className='nav-btn'>Contact Us</div></Link>
          </div>

          <div className='btn-container-head'>
                <Link to='/contactus'><button className="btn-2" id="btn-contact" >Contact Us</button></ Link>                
                
              
              <div className= "hamburger-menu">
                <div onClick={()=>setShowNav(!showNav)} className="hamburger-inner">
                  <Hamburger size={25}/>
                </div>
              </div>
            </div>
            </div></div>
          
         </>
      // </div>
    )
  }
  
  export default Header;
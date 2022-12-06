import React from 'react'
import '../../Assets/Styles/Home.css';
import img from "../../Assets/Images/Header-img.jpg"

const Heading = () => {
  return (
    <>
   
        <div className="heading">
            <div className="content">
                <h6><span className="span">New way  </span><span className="remaining-span">to design web products</span></h6>
                <h1>BUILDING DIGITAL PRODUCTS WITH STYLE & EXPERIENCE</h1>
                <p>Get to know how we work, who we are and what we value on this all include beautiful web pages.</p>
                <div className="btn-container">
                    <button className="btn-1">get Started</button>
                    <button className="btn-2">Know more</button>
                </div>
            </div>   
            <div className="heading-img">
                <img src={img} alt="stock-img"/>    
            </div> 
        </div>
     
    </>
  )
}

export default Heading
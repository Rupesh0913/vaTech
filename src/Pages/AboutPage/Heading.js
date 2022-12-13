import React from 'react';
import img from "../../Assets/Images/About-Head.jpg";

const Heading = () => {
  return (
    <>
   
        <div className="heading">
            <div className="content">
                <span className="remaining-span"><span className="span">who  </span> {'\u00A0'}are we</span>
                <h1>We represent a team of intellectual and ethical professionals...</h1>
                <div className="btn-container">
                    <button className="btn-1 ">Know More</button>
                </div>
            </div>   
            <div className="heading-img">
                <img src={img} alt="stock-img"/>    
            </div> 
        </div>
     
    </>
  )
}

export default Heading;
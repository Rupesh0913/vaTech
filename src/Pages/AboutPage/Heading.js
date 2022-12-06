import React from 'react';
import img from "../../Assets/Images/About-Head.jpg";

const Heading = () => {
  return (
    <>
   
        <div className="heading">
            <div className="content">
                <h6><span className="span">who  </span><span className="remaining-span">are we</span></h6>
                <h1>We represent a team of intellectual and ethical professionals...</h1>
                <div className="btn-container">
                    <button className="btn-1">Know More</button>
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
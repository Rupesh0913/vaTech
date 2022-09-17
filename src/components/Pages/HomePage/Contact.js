import React from 'react'
import Dots from '../../../images/Pattern/Dots.jpg';
// import img1 from '../../../images/officeImg.jpg';
// import rectangle from '../../../images/Pattern/Rectangle.jpg';
const Contact = ({img,  rectangle, heading,  disc}) => {
  return (
    <>
    <div className="contact">
        <div className="contact-img">
          <div className="dots"><img src={Dots} alt="dots"  /></div>
          <div className="officeImg"> <img src={img} alt="officeClip" /></div>
          <div  className="rectangle"> <img src={rectangle} alt="rectangle" /></div>
        </div>
        <div className="contact-content">
        <h1>{heading}</h1>
        <p>{disc}</p>
        <button className="contact-btn">Contact Us</button>
        </div>
    </div>
    </>
  )
}

export default Contact
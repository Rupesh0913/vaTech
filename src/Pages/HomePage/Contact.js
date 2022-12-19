import React from 'react';
import Dots from '../../Assets/Images/Pattern/Dots.jpg';
import img1 from "../../Assets/Images/officeImg.jpg";
import Rectangle from "../../Assets/Images/Pattern/Rectangle.jpg";

const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="contact-img">
          <img src={Dots} alt="dots" className="dots" />
          <img src={img1} alt="officeClip" className="officeImg" />
          <img src={Rectangle} alt="rectangle" className="rectangle" />
        </div>
        <div className="contact-content">
        <div className='contact-content-head'>Create brands ideas that can connect</div>
        <div className='contact-content-sub-head'>Get to know how we work, who we are and what we value on this all means beautiful web page</div>
        <button className="btn-2" id='btn-contactUs'>Contact Us</button>
        </div>
    </div>
    </>
  )
}

export default Contact;
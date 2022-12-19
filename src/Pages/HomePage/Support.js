import React from "react";
import img1 from "../../Assets/Images/google.jpg";
import img2 from "../../Assets/Images/sony.jpg";
import img3 from "../../Assets/Images/stack.jpg";
import img4 from "../../Assets/Images/microsoft.jpg";
import supportImg1 from "../../Assets/Images/supportImg1.jpg";
import supportImg2 from "../../Assets/Images/supportImg2.jpg";
import supportImg3 from "../../Assets/Images/supportImg3.jpg";
import supportImg4 from "../../Assets/Images/supportImg4.jpg";
import {TbRocket} from "react-icons/tb";
import {AiOutlineBulb} from "react-icons/ai";
import {FaRegHandshake} from "react-icons/fa";
import {BsTelephone} from "react-icons/bs";
import {Link} from 'react-router-dom';

const Support = () => {
  return (
    <>
      <div className="support">
        <div className="support-heading">
            We work with some of the worlds{" "}
            <span style={{ color: "blue" }}>Leading </span> companies.
          </div>
        

        <div className="img-container-company">
          <img src={img1} alt="google" />
          <img src={img2} alt="sony" />
          <img src={img3} alt="stack" />
          <img src={img4} alt="microsoft" />
        </div>
</div>
      {/* <div className="support">
        <div className="support-content">
          
            <span className="remaining-span"><span className="span">our </span> {'\u00A0'}Support System</span>
          
          <h1>The reasons of grow, we know from root</h1>
          <p>We have support staff on call 24/7 to support your needs. </p>
         
          <ul>
            <li><span className="icon"><TbRocket/>   </span>  Fast working Progress</li>
            <li><span className="icon"><AiOutlineBulb/>   </span>  Excellent Protection</li>
            <li><span className="icon"><FaRegHandshake/> </span>  Dedicated Team</li>
            <li><span className="icon"><BsTelephone/> </span> 24/7 Technical Support</li>
          </ul>
          
          <Link to='WhatWeDo'><button className="btn-1 btn-explore" >Explore all Services</button></Link>
        </div>
        <div className="support-img">
          <div className="support-img_first-div">
            <img src={supportImg1} alt="" className="supportImg1" />
            <div className="support-img_first-1_div">
              <img src={supportImg2} alt="" className="supportImg2" />
              <img src={supportImg3} alt="" className="supportImg3" />
            </div>
          </div>
          <img src={supportImg4} alt="" className="supportImg4" />
        </div>
      </div> */}
    </>
  );
};

export default Support;

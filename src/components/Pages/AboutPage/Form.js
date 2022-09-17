import React from "react";
import './MainAbout.css'
import { HiArrowNarrowRight } from "react-icons/hi";
const Form = () => {
  return (
    <>
      <div className="form-comp">
        <div className="form-content">
          <h1>
            Renovate unique Business Processes into Digitally Transformed
            solutions with vatech Technosoft!
          </h1>
          <p>
            Do you want to remove manual operations, acting as impediment to
            your business growth? Realize your ideas into reliable web and
            mobile software solutions with our professional services. Take first
            step to launch your project by filling the form.
          </p>
          <span style={{fontSize:"50px"}}><HiArrowNarrowRight /></span>
        </div>
        <div className="form">
        <div className="form-line">
            <div className="form-group">
        <input type="text" className="form-control" id="name" placeholder="Rupesh" required/>
        <label for="name" className="form-label">First Name</label>
            </div>
             <div className="form-group">
        <input type="text" className="form-control" id="lastName" placeholder="Sinha" required/>
        <label for="lastName" className="form-label">Last Name</label>
            </div>
        </div>
        
        <div className="form-line">
            <div className="form-group">
        <input type="email" className="form-control" id="email" placeholder="vatech@gmail" required/>
        <label for="email" className="form-label">Email</label>
            </div>
            <div className="form-group">
        <input type="number" className="form-control" id="number" placeholder="+91987654321" required/>
        <label for="number" className="form-label">Contact Number</label>
            </div>
        </div>

        <div className="form-group message">
        <input type="text" className="form-control" id="message" placeholder="share your querry" required/>
        <label for="message" className="form-label">Message</label>
        </div>

        <input type="submit" value="Submit" className="submit"/>
        </div>
      </div>
    </>
  );
};

export default Form;

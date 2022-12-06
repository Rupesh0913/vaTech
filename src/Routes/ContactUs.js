import React from 'react';
import '../Assets/Styles/Contact.css';

const ContactUs = () => {
  return (
    <>
    <div className="contact-us">
    <div className="contactContent">
        <h6><span className="span">Contact  </span><span className="remaining-span">Us</span></h6>
        <h1>Schedule a free consultation or fill out the form and we will follow up with you shortly.</h1>
        <p>or drop your requirement at <b> hello@vatech.com </b></p>
    </div>
    <div className="contact-Form">
        <div className="form-line">
            <div className="form-group fName">
        <input type="text" className="form-control" id="name" placeholder="Rupesh" required/>
        <label for="name" className="form-label">First Name</label>
            </div>
             <div className="form-group lName">
        <input type="text" className="form-control" id="lastName" placeholder="Sinha" required/>
        <label for="lastName" className="form-label">Last Name</label>
            </div>
        </div>
        
        <div className="form-line">
            <div className="form-group email">
        <input type="email" className="form-control" id="email" placeholder="vatech@gmail" required/>
        <label for="email" className="form-label">Email</label>
            </div>
            <div className="form-group number">
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
  )
}

export default ContactUs;
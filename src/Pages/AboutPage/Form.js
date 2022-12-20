import React from "react";
import '../../Assets/Styles/About.css';
import {HiArrowNarrowRight} from "react-icons/hi";
const Form = () => {
    return (
        <>
            <div className="form-comp-blue">
                <div className="form-content-blue">
                    <div className="form-header-blue">
                        Renovate unique Business Processes into Digitally Transformed
                                    solutions with vatech Technosoft!
                    </div>
                    <div className="form-desc-blue">
                        Do you want to remove manual operations, acting as impediment to
                                    your business growth? Realize your ideas into reliable web and
                                    mobile software solutions with our professional services. Take first
                                    step to launch your project by filling the form.
                    </div>
                    <span className="arrow-form-blue"
                        style={
                            {fontSize: "50px"}
                    }><HiArrowNarrowRight/></span>
                </div>
                <div className="form-blue">
                    <div className="form-line-blue">
                        <div className="form-group-blue">
                            <input type="text" className="form-control-blue" id="name" placeholder="Rupesh" required/>
                            <label for="name" className="form-label-blue">First Name</label>
                        </div>
                        <div className="form-group-blue">
                            <input type="text" className="form-control-blue" id="lastName" placeholder="Sinha" required/>
                            <label for="lastName" className="form-label-blue">Last Name</label>
                        </div>
                    </div>

                    <div className="form-line-blue">
                        <div className="form-group-blue">
                            <input type="email" className="form-control-blue" id="email" placeholder="vatech@gmail" required/>
                            <label for="email" className="form-label-blue">Email</label>
                        </div>
                        <div className="form-group-blue">
                            <input type="number" className="form-control-blue" id="number" placeholder="+91987654321" required/>
                            <label for="number" className="form-label-blue">Contact Number</label>
                        </div>
                    </div>

                    <div className="form-group-blue message-blue">
                        <input type="text" className="form-control-blue" id="message" placeholder="share your querry" required/>
                        <label for="message" className="form-label-blue">Message</label>
                    </div>

                    <input type="submit" value="Submit" className="submit-blue"/>
                </div>
            </div>
        </>
    );
};

export default Form;

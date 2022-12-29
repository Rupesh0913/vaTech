import React from 'react';
import '../../Assets/Styles/Home.css';
import img from "../../Assets/Images/Header-img.jpg";

const Heading = () => {
    return (
        <>
            <div className="heading">
                <div className="content">
                    <div className='content-text'>
                        <span className="remaining-span">
                            <span className="span">New way
                            </span>
                            {'\u00A0'}
                            to design web products</span>
                        <div className='content-head-text'>BUILDING DIGITAL PRODUCTS WITH STYLE & EXPERIENCE</div>
                        <div className='content-sub-head-text'>Get to know how we work, who we are and what we value on this all include beautiful web pages.</div>
                    </div>
                    <div className="btn-container">
                        <button className="btn-1">Get Started</button>
                        <button className="btn-2" id='btn-knowMore'>Know More</button>
                    </div>
                </div>
                <div className="heading-img">
                    <img src={img}
                        alt="stock-img"/>
                </div>
            </div>

        </>
    )
}

export default Heading;

import React from 'react'
import './WhatWeDo.css'
import Carousel from 'react-bootstrap/Carousel';

const WhatWeDo = ({ img1, img2, img3, img4, img5, alt1, alt2, alt3, alt4, heading, description }) => {
    return (
        <div className="whatwedo-container">
            <div className="whatwedo_image-section">
                <img src={img1} alt={alt1} />
                <img src={img2} alt={alt2} />
                <img src={img3} alt={alt3} />
            </div>
            <div className="whatwedo_tabs-container">
                <div className="whatwedo_tabs-section">
                    <div className="whatwedo_tabs-heading">
                        <h2>{heading}</h2>
                    </div>
                    <div className="whatwedo_tabs-description">
                        <p>{description}</p>
                    </div>
                    <div className="whatwedo_tabs-list"> 
                            <ul>
                                <li>hii</li>
                                <li>hii</li>
                                <li>hii</li>
                                <li>hii</li>
                                <li>hii</li>
                            </ul>
                    </div>
                </div>
                <div className="whatwedo_tabs-img">
                    <div className="whatwedo_tabs-img_section">
                        <img src={img4} alt={alt4} />
                        <div className="whatwedo_tabs-carousal_section">
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default WhatWeDo
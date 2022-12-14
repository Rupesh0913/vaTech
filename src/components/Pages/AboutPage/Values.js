import React from 'react'
import img1 from "../../../images/google.jpg";
import img2 from "../../../images/sony.jpg";
import img3 from "../../../images/stack.jpg";
import img4 from "../../../images/microsoft.jpg";
import Service from "../HomePage/Srvices"
import {aboutValue} from "../HomePage/data/Data"
const Values = () => {
  return (
    <> 
     <div className="support_head">
    <div className="support_heading">
      <p>
        We work with some of the worlds{" "}
        <span style={{ color: "blue" }}>Leading </span> companies.
      </p>
    </div>

    <div className="img">
      <img src={img1} alt="google" />
      <img src={img2} alt="sony" />
      <img src={img3} alt="stack" />
      <img src={img4} alt="microsoft" />
    </div>
  </div>
  <Service {...aboutValue}/>
  </>
  )
}

export default Values
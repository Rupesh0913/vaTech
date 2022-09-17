import React from 'react'
import img from '../../../images/Progress.png'

const Progress = () => {
  return (
    <>
    <div className="progress">
        <div className="progress-img">
            <img src={img} alt="progress" />
        </div>
        <div className="progress-content">
        <div className="first">
            <h1>100%</h1>
            <p>We have 100% of client satisfaction level</p>
        </div>
        <div className="second">
            <h1>250%</h1>
            <p>we have massive growth rate of 250%</p>
        </div>
        <div className="third">
            <h1>5.0</h1>
            <p>We have rating of 5 star in top rating sites</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Progress
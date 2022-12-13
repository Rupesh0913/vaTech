import React from 'react'

const Srvices = ({span1,span2,heading,icon1,icon2,icon3,icon4,icon5,icon6,iconTitle1,iconTitle2,
                  iconTitle3,iconTitle4,iconTitle5,iconTitle6,button,Img1,Img2, spanRight1,
                  spanRight2, HeadingRight, DiscRight}) => {
  return (
    <>
    <div className="services">
        <div className="services-content">
        <h6>
             <span className="remaining-span"><span className="span">{span1} </span>{'\u00A0'}{span2}</span>
          </h6>
          <h1>{heading}</h1>
     
          <ul>
            <li><span className="icon">{icon1} </span>{iconTitle1}</li>
            <li><span className="icon">{icon2}</span> {iconTitle2}</li>
            <li><span className="icon">{icon3} </span> {iconTitle3}</li>
            <li><span className="icon">{icon4}</span> {iconTitle4}</li>
            <li><span className="icon">{icon5} </span> {iconTitle5}</li>
            <li><span className={icon6==='' ? 'noDisplay':'icon'}>{icon6} </span> {iconTitle6}</li>
          </ul>
        
          <button className="btn-support">{button}</button>
        </div>
        <div className="services-img-content">
            <div className="services-img">
                <img src={Img1} alt="Img1"/>
                <img src={Img2} alt="Img2"/>
            </div>
            <div className="services-img-text">
            <h6>
            <span className="span">{spanRight1} </span> <span className={spanRight2==='' ? 'noDisplay':'remaining-span'}>{spanRight2}</span>
          </h6>
          <h1>{HeadingRight}</h1>
          <p>{DiscRight}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Srvices
import React from 'react';
import Heading from '../Pages/AboutPage/Heading';
import Values from '../Pages/AboutPage/Values';
import Form from '../Pages/AboutPage/Form';
import { contactBottom} from "../Pages/HomePage/data/Data";
import Contact from  "../Pages/HomePage/Contact";
import Support from '../Pages/HomePage/Support';
import img1 from "../Assets/Images/officeImg.jpg";
import img2 from "../Assets/Images/contactImg.jpg"
import Rectangle1 from "../Assets/Images/Pattern/Rectangle.jpg"
import Rectangle2 from "../Assets/Images/Pattern/Rectangle2.jpg"

const About = () => {
  return (
    <>
    <div className='main-box' id='main-box-about'>
      <Heading/>
      <Values/>
      {/* <Support/> */}  </div>
      <Form/>
      
    <div className='main-box'>
        <Contact img={img2} Rectangle={Rectangle2} headText="What is Agile Development?" subHeadText="Get to know how we work, who we are and what we value on this all means beautiful web page"/>
      </div>
    </>
  )
}

export default About;
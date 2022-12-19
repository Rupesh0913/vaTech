import React from 'react';
import Heading from '../Pages/HomePage/Heading';
import Support from '../Pages/HomePage/Support';
import Progress from '../Pages/HomePage/Progress';
import Contact from '../Pages/HomePage/Contact';
// import {contactTop,  contactBottom} from "../Pages/HomePage/data/Data";
import {homeService} from "../Pages/HomePage/data/Data";
import Services from '../Pages/HomePage/Services';

import img1 from "../Assets/Images/officeImg.jpg";
import img2 from "../Assets/Images/contactImg.jpg"
import Rectangle1 from "../Assets/Images/Pattern/Rectangle.jpg"
import Rectangle2 from "../Assets/Images/Pattern/Rectangle2.jpg"


const Home = () => {
  return (
    <>
    <div className="main-box">
        <Heading/>
         <Support/>
        <Progress/>
        <Contact img={img1} Rectangle={Rectangle1} headText="Create brands ideas that can connect" subHeadText="Get to know how we work, who we are and what we value on this all means beautiful web page"/>
        <Services {...homeService}/>
        <Contact img={img2} Rectangle={Rectangle2} headText="What is Agile Development?" subHeadText="Get to know how we work, who we are and what we value on this all means beautiful web page"/>
        </div>
    </>
  )
}

export default Home;
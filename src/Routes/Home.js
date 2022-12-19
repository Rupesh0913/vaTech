import React from 'react';
import Heading from '../Pages/HomePage/Heading';
import Support from '../Pages/HomePage/Support';
import Progress from '../Pages/HomePage/Progress';
import Contact from '../Pages/HomePage/Contact';
import {contactTop,  contactBottom} from "../Pages/HomePage/data/Data";
import {homeService} from "../Pages/HomePage/data/Data";
import Services from '../Pages/HomePage/Services';

const Home = () => {
  return (
    <>
    <div className="main-box">
        <Heading/>
         <Support/>
        {/*<Progress/>
        <Contact {...contactTop}/>
        <Services {...homeService}/>
        <Contact {...contactBottom}/> */}
        </div>
    </>
  )
}

export default Home;
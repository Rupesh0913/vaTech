import React from 'react';
import Heading from '../Pages/AboutPage/Heading';
import Values from '../Pages/AboutPage/Values';
import Form from '../Pages/AboutPage/Form';
import { contactBottom} from "../Pages/HomePage/data/Data";
import Contact from  "../Pages/HomePage/Contact";

const About = () => {
  return (
    <>
      <Heading/>
      <Values/>
      <Form/>
      <Contact {... contactBottom} />
    </>
  )
}

export default About;
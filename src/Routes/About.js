import React from 'react'
import Footer from '../Layouts/Footer/Footer'
import Header from '../Layouts/Header/Header'
import Heading from '../Pages/AboutPage/Heading';
import Values from '../Pages/AboutPage/Values';
import Form from '../Pages/AboutPage/Form';
import { contactBottom} from "../Pages/HomePage/data/Data";
import Contact from  "../Pages/HomePage/Contact";

const About = () => {
  return (
    <>
    <Header/>
      <Heading/>
      <Values/>
      <Form/>
      <Contact {... contactBottom} />
    <Footer/>
    </>
  )
}

export default About;
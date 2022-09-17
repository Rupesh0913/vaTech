import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import Heading from './Heading'

import Values from './Values'
import Form from './Form'

import { contactBottom} from "../HomePage/data/Data"
import Contact from '../HomePage/Contact'

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

export default About
import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'
import Heading from './Heading'
import Support from './Support'
import Progress from './Progress'
import Contact from './Contact'
import {contactTop,  contactBottom} from "./data/Data"
import {homeService} from "./data/Data"
import Services from './Srvices'

const Home = () => {
  return (
    <>
     <Header/>
        <Heading/>
        <Support/>
        <Progress/>
        <Contact {...contactTop}/>
        <Services {...homeService}/>
        <Contact {...contactBottom}/>
     <Footer/>   
    </>
  )
}

export default Home
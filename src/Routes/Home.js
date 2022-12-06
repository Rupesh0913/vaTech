import React from 'react'
import Header from '../Layouts/Header/Header'
import Footer from '../Layouts/Footer/Footer'
import Heading from '../Pages/HomePage/Heading'
import Support from '../Pages/HomePage/Support'
import Progress from '../Pages/HomePage/Progress'
import Contact from '../Pages/HomePage/Contact'
import {contactTop,  contactBottom} from "../Pages/HomePage/data/Data"
import {homeService} from "../Pages/HomePage/data/Data"
import Services from '../Pages/HomePage/Srvices'

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
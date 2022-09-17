import React from 'react'
import Header from '../../Header'
import WhatWeDo from './WhatWeDo'
import {WhatWeDoService , WhatWeDoIndustries , WhatWeDoTechnologies} from '../HomePage/data/Data' 
import Footer from '../../Footer'

const MainWhatWeDo = () => {
  return (
    <>
    <Header />
        <WhatWeDo {...WhatWeDoService}/>
    <Footer/>
    </>
  )
}

export default MainWhatWeDo
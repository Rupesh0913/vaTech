import React from 'react'
import Header from '../Layouts/Header/Header'
import WhatWeDo from '../Pages/WhatWeDo/WhatWeDo'
import {WhatWeDoService , WhatWeDoIndustries , WhatWeDoTechnologies} from '../Pages/HomePage/data/Data'; 
import Footer from '../Layouts/Footer/Footer'

const MainWhatWeDo = () => {
  return (
    <>

        <WhatWeDo {...WhatWeDoService}/>
    </>
  )
}

export default MainWhatWeDo;
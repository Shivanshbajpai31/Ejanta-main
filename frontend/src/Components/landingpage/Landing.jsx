import React from 'react'
import Firstrow from './Firstrow'
import './Landing.css'
import Secondrow from './Secondrow'
import Footers from '../Footer/Footer'

function Landing() {
  return (
    <>
    <div className='firstrowcontainer'>
    <Firstrow/>
    <Secondrow/>
    
    </div>
    <Footers/>
    </>
  )
}

export default Landing

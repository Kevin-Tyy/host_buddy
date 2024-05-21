import React from 'react'
import CustomPage from './hero'
import Rating from './rating'
import Plan from './plan'
import Support from '@/components/Support'
import Location from './Location'
import Form from './form'

const page = () => {
  return (
    <div>
        <div><CustomPage/></div>
        <div className='pt-12 pb-32'><Rating/></div>   
        <div><Plan/></div>
        <div className='pt-12'><Support/></div>
        <div className='pt-52'><Location/></div>
       <div className='pt-52'>
        <Form/>
       </div>
       
         </div>
  )
}

export default page
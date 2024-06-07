import React from 'react'
import HeroHosting from './Hero'
import Ratingpanel from './Rating'

import Plan2 from './plan2'
import Support from './Support'
import Location from './Location'
import ContactForm from './form'
import { NavBar } from '@/components'
import Ratingpanel2 from './Ratingpanel'

const page = () => {
  return (
    <main className="overflow-hidden">
      <NavBar className="text-white" />
{/* hero page  */}
      <section>
        <HeroHosting/>
        </section>
        {/* rating panel  */}
        <section>
        <div className="space-y-10 2xl:space-y-32 ">
        <div className="2xl:flex xl:flex bl:flex lg:flex md:flex hidden"><Ratingpanel2/></div> 
        <div className="p-4 2xl:hidden xl:hidden bl:hidden lg:hidden md:hidden flex"> <Ratingpanel /></div> 
          <Plan2/>
        </div>
      </section>
        <section>
      <Support/>
    </section>
        
    <div className='pt-20 2xl:pt-40'><Location/>
    </div>
       <div className='pt-20 2xl:pt-44'>
        <ContactForm/>
       </div>
     </main>
  )
}

export default page
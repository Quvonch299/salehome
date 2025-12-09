import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'

export default function Header() {
  return (
    <div className='Header'>
        <Navbar/>
        <Hero/>
        <Services/>
            
    </div>
  )
}

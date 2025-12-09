import React from 'react'
import PriceCard from '../components/sections/PriceCard'
import WhatWeCheck from '../components/sections/WhatWeCheck'
import Videos from '../components/sections/Videos'
import ChecklistForm from '../components/sections/ChecklistForm'
import ContactForm from '../components/sections/ContactForm'
import Footer from '../components/sections/Footer'
import Header from '@/components/sections/Header'

export default function page() {
  return (
    <>
     
     <Header/>
      <PriceCard />
      <WhatWeCheck />
      <Videos />
      <ChecklistForm />
      <ContactForm />
      <Footer />
    </>
  )
}

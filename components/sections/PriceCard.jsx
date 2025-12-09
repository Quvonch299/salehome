import Image from 'next/image'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

export default function PriceCard() {
  return (
    <div className="">
      <div className="grid grid-cols-2 max-w-7xl mx-auto gap-4 max-sm:grid-cols-1 max-sm:px-4">
        <div className="relative">
          <Image 
            src="/sectionp1.png"  
            alt="Section 1" 
            width={600}            
            height={400} 
            className="w-full h-auto rounded-lg"  
          />
          <div className="absolute top-1/2 -left-4 bg-[#BF9E77] h-14 w-14 max-sm:h-8 max-sm:w-8 rounded-full flex items-center justify-center text-[#FFF]   -translate-y-1/2">
            <FaArrowLeft size={34} className="max-sm:size-[22px]" />
          </div>
          <div className="absolute top-1/2 -right-4 bg-[#BF9E77] h-12 w-12 max-sm:h-8 max-sm:w-8 rounded-full flex items-center justify-center text-[#FFF]   -translate-y-1/2 max-sm:flex hidden">
            <FaArrowRight size={28} className="max-sm:size-[22px]" />
          </div>
        </div>
        <div className="relative max-sm:hidden">
          <Image 
            src="/sectionp2.png"
            alt="Section 2" 
            width={600} 
            height={400} 
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-1/2 -right-14 bg-[#BF9E77] h-14 w-14 rounded-full flex items-center justify-center text-[#FFF] transform -translate-x-1/2 -translate-y-1/2">
            <FaArrowRight size={34} />
          </div>
        </div>

      </div>
    </div>
  )
}

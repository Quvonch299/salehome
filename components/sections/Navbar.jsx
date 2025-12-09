import React from 'react'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  return (
    <div className='pt-[32px] max-sm:pt-4 max-sm:pb-4 max-sm:bg-[#FFFF]'>
        <div className='max-w-7xl m-auto flex justify-between items-center max-sm:px-4'>
            <div>
                <span className='flex gap-4 items-center '>
<FaLocationDot size={34}  />
<h2 className='text-[24px]  max-sm:hidden'>Гид по недвижимости</h2>
                </span>

            </div>
           <div className='text-[#654D31] font-bold flex gap-14 max-sm:gap-[16px]'>

  <a 
    href="tel:+79782212688"
    className="flex gap-[6px] items-center hover:underline"
  >
    <FaPhone size={24} />
    <h2 className='font-semibold text-[18px] leading-[100%] tracking-[0%] max-sm:hidden'>
      +7 978 221 26 88
    </h2>
  </a>
<a target='blank'
  href="momiovquvonch2@gmail.com"
  className="flex gap-[6px] items-center hover:underline"
>
  <MdEmail size={24} />
  <h2 className='font-semibold text-[18px] leading-[100%] tracking-[0%] max-sm:hidden'>
    momiovquvonch2@gmail.com
  </h2>
</a>


</div>
            <div>
                <button className='w-[224px] h-[64px] max-sm:w-[192px] max-sm:h-[56px] max-sm:text-[16px] text-[#654D31] border rounded-[15px] bg-[#FFFF] border-[2px]'>Заказать звонок</button>
            </div>
        </div>
    </div>
  )
}

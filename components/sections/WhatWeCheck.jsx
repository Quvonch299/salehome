import Image from 'next/image'
import React from 'react'

export default function WhatWeCheck() {
  return (
   <div className='mt-[255px] max-sm:mt-[104px] bg-[#F0EAE3] rounded-[20px] pt-[32px]
    h-[318px] max-sm:h-auto max-sm:pb-[19px] max-sm:ml-4 max-sm:mr-4 '>

  <div className='max-w-7xl m-auto flex justify-between items-center 
      max-sm:flex-col max-sm:text-center max-sm:px-4'>

    <div className='max-sm:w-full'>
      <h2 className='text-[48px] max-sm:text-[28px]  font-bold text-[#654D31]'>
        Оставьте заявку <br className='hidden max-sm:flex'/> и получите чек-лист <br />
        по покупке недвижимости
      </h2>

      <form className='flex gap-[24px] mt-[32px] 
          max-sm:flex-col max-sm:gap-3 max-sm:w-full'>

        <input 
          className='bg-white w-[324px] h-[64px] px-[16px] py-[21px] rounded-[15px] 
              border-[#BF9E7769] border font-bold
              max-sm:w-full max-sm:h-[52px] max-sm:text-[14px]' 
          type="text" placeholder='Имя'
        />

        <input 
          className='bg-white w-[324px] h-[64px] px-[16px] py-[21px] rounded-[15px] 
              border-[#BF9E7769] border font-bold
              max-sm:w-full max-sm:h-[52px] max-sm:text-[14px]' 
          type="text" placeholder='Номер телефона'
        />

        <input 
          className='bg-[#BF9E77] w-[324px] h-[64px] rounded-[15px] text-white font-bold
              max-sm:w-full max-sm:h-[52px] max-sm:text-[14px]' 
          type="submit" value="Получить чек-лист"
        />
      </form>
    </div>

    {/* IMAGE MOBILE */}
    <div className='max-sm:mt-10 max-sm:flex max-sm:justify-center'>
      <Image
        src='/sectionbook.png'
        width={642}
        height={483}
        alt='Section'
        className='object-contain max-sm:w-[260px]'
      />
    </div>

  </div>
</div>
  )
}
   
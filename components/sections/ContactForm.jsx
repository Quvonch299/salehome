import Image from 'next/image'
import React from 'react'

export default function ContactForm() {
  return (
    <div className='mt-[255px] bg-[#F0EAE3] rounded-[20px] pt-8
        h-[318px] max-sm:h-auto max-sm:pb-10  max-sm:mr-4 max-sm:ml-4'>

      <div className='max-w-7xl m-auto flex justify-between items-center
          max-sm:flex-col max-sm:text-center max-sm:px-4'>
        <div className='max-sm:w-full'>
          <h2 className='text-[48px] font-bold text-[#654D31]
              max-sm:text-[22px] max-sm:leading-[28px]'>
            Оставьте заявку и получите<br className='max-sm:hidden' />
            консультацию по недвижимости
          </h2>
          <form className='flex gap-6 mt-8
              max-sm:flex-col max-sm:gap-3 max-sm:w-full'>
            <input
              className='bg-white w-[324px] h-16 px-4 py-[21px]
                  rounded-[15px] border-[#BF9E7769] border font-bold
                  max-sm:w-full max-sm:h-[52px] max-sm:text-[14px]'
              type='text'
              placeholder='Имя'
            />
            <input
              className='bg-white w-[324px] h-16 px-4 py-[21px]
                  rounded-[15px] border-[#BF9E7769] border font-bold
                  max-sm:w-full max-sm:h-[52px] max-sm:text-[14px]'
              type='text'
              placeholder='Номер телефона'
            />
            <input
              className='bg-[#BF9E77] w-[324px] h-16 rounded-[15px] text-white font-bold
                  max-sm:w-full max-sm:h-[52px] max-sm:text-[14px]'
              type='submit'
              value='Получить чек-лист'
            />
          </form>
        </div>
        <div className='max-sm:mt-10 max-sm:flex max-sm:justify-center'>
          <Image
            src={'/people.png'}
            width={522}
            height={522}
            alt='Section'
            className='object-contain max-sm:w-[260px]'
          />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>

      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>

        <div>
          <div className='flex justify-start items-center mr-4 gap-2'>
            <img src={assets.favicon} alt="logo" className='w-7 sm:w-5'/>
            <p className='text-xl text-black font-semibold cursor-pointer'>Narrato</p>
          </div>
            <p className='max-w-[410px] mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt nihil expedita at ut! Hic voluptas possimus quas rem eius harum facilis, autem maiores debitis odio odit aliquam officia magni.
            </p>
        </div>

        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>
                {section.title}
              </h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover-underline transition'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        Copyright 2025 &copy; - Narrato - All rights Reserved
      </p>
    </div>
  )
}

export default Footer
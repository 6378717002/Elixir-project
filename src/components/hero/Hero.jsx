import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
    <div className='absolute top-[35%] grid gap-[14px] w-[60%] left-[90px]'>
      <h1 className='text-[70px] font-montserrat font-bold text-[#2a3855]'>Helping Leaders</h1>
      <p className='text-[30px] font-montserrat leading-[40px] text-[#2a3855]'>We look forward to help you in taking your <br /> company to new height.</p>
      <div className='flex gap-[20px] mt-[24px]'>
        <button className='bg-[#2a3855] flex items-center justify-center gap-[6px] rounded-[4px] py-[10px] px-[40px] text-white text-[16px] font-bold'>Read More<FaAngleRight className='mt-[2px]' />
        </button>
        <button className='bg-[#fdd428] flex items-center justify-center gap-[6px] rounded-[4px] py-[10px] px-[40px] text-[16px] font-bold'>Contact us<FaAngleRight className='mt-[2px]' />
        </button>
      </div>
    </div>
    </>
  )
}

export default Hero

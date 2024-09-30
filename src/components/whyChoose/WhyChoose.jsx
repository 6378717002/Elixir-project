import React from 'react'
import Heading from '../../Utility/Heading'
import imgwhy from '../../assets/why-choose-us.jpg'
import { FaCommentDots,FaPalette } from "react-icons/fa6";
import { RiTimerFill } from "react-icons/ri";


const WhyChoose = () => {
  return (
    <>
    <div className='max-w-full py-[120px]'>
    <Heading heading = {'Why Choose Elixir'}/>
        <div className='max-w-[1140px] px-[16px] mx-auto grid grid-cols-2 mt-[80px]'>
            <div>
            <img src={imgwhy} alt="" className='rounded-[10px]' />
            </div>
            <div className='px-[60px] grid gap-[32px] items-center '>
            <div className=''>
          <div className='flex items-center gap-[10px]'><FaCommentDots className='text-[28px] text-[#2a3855]' /><h2 className='text-[22px] font-bold text-[#2a3855] font-montserrat'>We Are Professional</h2></div>
          <div className='mt-[12px]' ><p className='text-[16px] font-[400] text-[#6a6a6a] font-montserrat'>We resource, train, speak, mentor and encourage; marketplace leaders, business owners and career professionals to be effective in the workplace.</p></div>
            </div>
            <div className=''>
          <div className='flex items-center gap-[10px]'><FaPalette  className='text-[28px] text-[#2a3855]' /><h2 className='text-[22px] font-bold text-[#2a3855] font-montserrat'>We Are Creative</h2></div>
          <div className='mt-[12px]' ><p className='text-[16px] font-[400] text-[#6a6a6a] font-montserrat'>With so many factors to consider when deciding how to characterize your company , wouldn’t it be great to have a group of forward-thinking, well-informed individuals on board who know what they’re doing?</p></div>
            </div>
            <div className=''>
          <div className='flex items-center gap-[10px]'><RiTimerFill  className='text-[28px] text-[#2a3855]' /><h2 className='text-[22px] font-bold text-[#2a3855] font-montserrat'>24/7 Great Support</h2></div>
          <div className='mt-[12px]' ><p className='text-[16px] font-[400] text-[#6a6a6a] font-montserrat'>Design clever and compelling marketing strategies, improve product positioning, and drive conversion rates, Elixir is all time available to guide you.</p></div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WhyChoose
import React from 'react'
import Heading from '../../Utility/Heading'
import img from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import { HiArrowLongRight } from "react-icons/hi2";
import { IoCaretBackOutline,IoChatbox,IoCall } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";

const Services = () => {
  return (
    <>
    <div className='max-w-full bg-[#fafafa] py-[120px]'>
        <div>
        <Heading heading={'Our Services'}/>
        </div>
        <div className='max-w-[1140px] mx-auto px-[16px] pt-[60px] grid grid-cols-2 items-center justify-center'>
            <div>
                <img src={img} alt="" className='rounded-[10px_0px_0px_0px]'/>
                <IoCaretBackOutline />
            </div>
            <div className=' flex flex-col justify-center px-[60px] bg-[white] h-full'>
                <h1 className='text-[24px] text-[#2a3855] font-montserrat font-bold'>Business Consulting</h1>
                <p className='text-[16px] text-[gray] my-[16px] '>As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.</p>
                <div>
                <button className='flex justify-center items-center cursor-pointer text-[18px] text-[#2a3855] font-medium'>Learn more<HiArrowLongRight className='mt-[4px] ml-[8px] text-[24px]'/></button>
                </div>
            </div>
        </div>
        <div className='max-w-[1140px] mx-auto px-[16px]  grid grid-cols-2 items-center justify-center'>
            <div className=' flex flex-col justify-center px-[60px] bg-[white] h-full'>
                <h1 className='text-[24px] text-[#2a3855] font-montserrat font-bold'>Tax consulting</h1>
                <p className='text-[16px] text-[gray] my-[16px] '>Elixir serves clients across the country and around the world as they navigate an increasingly complex tax landscape. Our tax professionals draw on deep experience and industry-specific knowledge to deliver clients the insights and innovation they need.</p>
                <div>
                <button className='flex justify-center items-center cursor-pointer text-[18px] text-[#2a3855] font-medium'>Learn more<HiArrowLongRight className='mt-[4px] ml-[8px] text-[24px]'/></button>
                </div>
            </div>
            <div>
                <img src={img7} alt="" />
            </div>
        </div>
        <div className='max-w-[1140px] mx-auto px-[16px]  grid grid-cols-2 items-center justify-center'>
            <div>
                <img src={img8} alt="" className='rounded-[0px_0px_0px_10px]'/>
            </div>
            <div className=' flex flex-col justify-center px-[60px] bg-[white] h-full'>
                <h1 className='text-[24px] text-[#2a3855] font-montserrat font-bold'>Advisory</h1>
                <p className='text-[16px] text-[gray] my-[16px] '>To help you understand what this road looks like, we surveyed 1165 digital marketers across Europe and North America to explore current trends and priorities in digital marketing.</p>
                <div>
                <button className='flex justify-center items-center cursor-pointer text-[18px] text-[#2a3855] font-medium'>Learn more<HiArrowLongRight className='mt-[4px] ml-[8px] text-[24px]'/></button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-3 max-w-[1140px] mx-auto px-[16px] gap-[100px] mt-[90px]'>
        <div>
          <div className='flex items-center gap-[10px]'><FaCreditCard  className='text-[28px] text-[#2a3855]' /><h2 className='text-[22px] font-bold text-[#2a3855] font-montserrat'>Awesome Team</h2></div>
          <div className='mt-[12px]' ><p className='text-[16px] font-[400] text-[#6a6a6a] font-montserrat'>Before talking destination, we shine a spotlight across your organization
          to fully understand it.</p></div>
        </div>
        <div>
          <div className='flex items-center gap-[10px]'><IoChatbox className='text-[28px] text-[#2a3855]' /><h2 className='text-[22px] font-bold text-[#2a3855] font-montserrat'>Excellent Support</h2></div>
          <div className='mt-[12px]' ><p className='text-[16px] font-[400] text-[#6a6a6a] font-montserrat'>If you face any trouble, you can always let our dedicated support team help you. They are ready for you 24/7.</p></div>
        </div>
        <div>
          <div className='flex items-center gap-[10px]'><IoCall className='text-[28px] text-[#2a3855]' /><h2 className='text-[22px] font-bold text-[#2a3855] font-montserrat'>Faster Performance</h2></div>
          <div className='mt-[12px]' ><p className='text-[16px] font-[400] text-[#6a6a6a] font-montserrat'>We develop a systematic well-ordered process of analysis, from concept through implementation.</p></div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Services
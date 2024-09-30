import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall,IoIosTime } from "react-icons/io";
import logo from '../../assets/logo-dark.png'
import { FaAngleDown } from "react-icons/fa";



const Header = () => {
  return (
    <>
    <div className="bg-[url('https://prium.github.io/elixir/v3.0.0/assets/img/header-6.jpg')] h-screen max-w-full bg-cover bg-bottom-left">
    <div className=''> 
    <section className='w-full bg-[#2a3855]'>
        <div className='max-w-[1140px] px-[16px] py-[16px] m-auto grid grid-cols-2 items-center justify-between'>
           <div className='flex items-center justify-start gap-[24px]'>
            <div className='flex items-center justify-center gap-[8px] text-white text-[12px] font-medium font-montserrat'><FaLocationDot className='text-[16px] text-[#fdd428]'/>1010 Avenue, New York, NY 10018 US. </div>
            <div  className='flex items-center justify-center gap-[8px] text-white text-[12px] font-medium font-montserrat'><IoIosCall className='text-[16px] text-[#fdd428]'/>212 386 5575, 212 386 5576</div>
           </div>
           <div className='flex items-center justify-end gap-[8px] text-white text-[12px] font-medium font-montserrat'><IoIosTime className='text-[16px] text-[#fdd428]'/>Mon-Sat, 8.00-18.00. Sunday CLOSED</div>
        </div>
    </section>
    <header className='w-full sticky top-0  bg-[#ffffffda] z-10 shadow-md '>
        <div className='max-w-[1140px] mx-auto  px-[16px] grid  grid-cols-2 '>
            <div className='flex items-center gap-[36px]'>
            <img src={logo} alt="" />
            <ul className='flex gap-[20px] text-[16px] relative font-semibold text-[#2a3855]'>
                <li className='flex items-center group cursor-pointer py-[20px]'>Home<FaAngleDown  className='mt-[4px] ml-[4px]'/>  
                    <ul className='absolute top-[90%] hidden group-hover:block z-10 left-[-10px] bg-[white] drop-shadow-lg  w-[160px] p-[10px]'>
                        <li className='mb-1 text-[14px]'>Slider Header</li>
                        <li className='mb-1 text-[14px]'>Slider Classic</li>
                        <li className='mb-1 text-[14px]'>Static Header</li>
                        <li className='mb-1 text-[14px]'>Static Classic</li>
                        <li className='mb-1 text-[14px]'>Youtube Background</li>
                        <li className='mb-1 text-[14px]'>Youtube Classic</li>
                        <li className='mb-1 text-[14px]'>Self-Hosted Video</li>
                        <li className='mb-1 text-[14px]'>Self-Hosted Classic</li>
                    </ul>
                </li>
                <li className='flex items-center py-[20px] group relative cursor-pointer '>Pages<FaAngleDown className='mt-[4px] ml-[4px]'/>
                <ul className='absolute top-[90%] hidden group-hover:block z-10 left-[-10px] bg-[white] drop-shadow-lg  w-[150px] p-[10px]'>
                        <li className='mb-1 text-[14px]'>Services</li>
                        <li className='mb-1 text-[14px]'>About</li>
                        <li className='mb-1 text-[14px]'>Alumni</li>
                        <li className='mb-1 text-[14px]'>Blank page</li>
                        <li className='mb-1 text-[14px]'>404 Page</li>
                        <li className='mb-1 text-[14px]'>Login</li>
                        <li className='mb-1 text-[14px]'>Registration</li>
                    </ul>
                </li>
                <li className='flex items-center py-[20px] group relative cursor-pointer'>News<FaAngleDown className='mt-[4px] ml-[4px] group relative'/>
                <ul className='absolute top-[90%] hidden group-hover:block z-10 left-[-10px] bg-[white] drop-shadow-lg  w-[150px] p-[10px]'>
                        <li className='mb-1 text-[14px]'>News Room</li>
                        <li className='mb-1 text-[14px]'>Singlge Room</li>
                    </ul>
                </li>
                <li className='flex items-center py-[20px] group relative cursor-pointer'>Elements<FaAngleDown className='mt-[4px] ml-[4px]'/>
                <ul className='absolute top-[90%] hidden group-hover:block z-10 left-[-10px] bg-[white] drop-shadow-lg  w-[150px] p-[10px]'>
                        <li className='mb-1 text-[14px]'>Buttons</li>
                        <li className='mb-1 text-[14px]'>Colors</li>
                        <li className='mb-1 text-[14px]'>Google map</li>
                        <li className='mb-1 text-[14px]'>Grid</li>
                        <li className='mb-1 text-[14px]'>Icons</li>
                        <li className='mb-1 text-[14px]'>Layout Helpers</li>
                        <li className='mb-1 text-[14px]'>Modal Video</li>
                        <li className='mb-1 text-[14px]'>Swiper</li>
                        <li className='mb-1 text-[14px]'>Typography</li>
                    </ul>
                </li>
                <li className='flex items-center py-[20px] cursor-pointer'>Contact</li>
            </ul>
            </div>
            <div className='flex justify-end py-[20px]'>
                <button className='bg-[transparent] border-[solid] border-[2px] border-[#2a3855] rounded-[50px] p-[4px_16px] hover:bg-[#2a3855] hover:text-[white] text-[14px] font-bold text-[#2a3855]'>purchase</button>
            </div>
        </div>
    </header>
    </div>
    </div> 
    </>
  )
}

export default Header
import React from 'react'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'

const GalleryLogo = () => {
  return (
    <>
    <div className='max-w-full bg-[#f2f2f2] py-[100px]'>
        <div className='max-w-[1140px] mx-auto px-[16px] grid grid-cols-6 items-center'>
            <img src={logo1} alt=""  className='mr-[20px]'/>
            <img src={logo2} alt="" className='mr-[20px]'/>
            <img src={logo3} alt="" className='mr-[20px]'/>
            <img src={logo4} alt="" className='mr-[20px]'/>
            <img src={logo5} alt="" className='mr-[20px]'/>
            <img src={logo6} alt="" className='mr-[20px]'/>
        </div>
    </div>
    </>
  )
}

export default GalleryLogo
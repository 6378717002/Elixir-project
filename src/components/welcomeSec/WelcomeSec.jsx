import React from 'react'
import Shape from '../../Utility/Shape'
import { FaChartBar,FaBell,FaLightbulb,FaPlay,FaUsers,FaComments,FaBolt  } from "react-icons/fa";
import imgvideo from '../../assets/screenshot-2.jpg'
import Heading from '../../Utility/Heading';

const WelcomeSec = () => {
  return (
    <>
    <div className='max-w-full bg-[white] py-[120px]'>
      <div className='flex flex-col items-center gap-[12px]'>
      <h1 className='text-[38px] font-bold font-montserrat text-[#2a3855]'>Welcome to the Elixir</h1>
      <p className='text-[16px] text-center text-[#6a6a6a]'>Get expert consultancy and support with Elixir, an advisory firm <br /> that stand by your side always.</p>
      <Shape/>
      </div>

      <div className='max-w-[1140px] mx-auto py-[100px] px-[16px] grid grid-cols-4 gap-[60px]'>
      <div className='flex flex-col justify-center  items-center text-center gap-[20px]'>
        <div className='w-[100px] h-[100px] bg-[#fafafa] border-[solid] border-[1px] border-[gray] rounded-[50%] flex justify-center items-center'><FaChartBar className='text-[38px] text-[#2a3855]'/> </div>
        <div>
        <h2 className='text-[24px] text-[#2a3855] font-bold'>Business Consulting</h2>
          <p className='mt-[8px] text-[16px] text-[gray]'>Solution for every business related problems, readily
          and skillfully.</p>
        </div>
      </div>
      <div className='flex flex-col justify-center  items-center text-center gap-[20px]'>
        <div className='w-[100px] h-[100px] bg-[#fafafa] border-[solid] border-[1px] border-[gray] rounded-[50%] flex justify-center items-center'><FaBell className='text-[38px] text-[#2a3855]'/></div>
        <div>
        <h2 className='text-[24px] text-[#2a3855] font-bold'>Risk Management</h2>
          <p className='mt-[8px] text-[16px] text-[gray]'>Calculate every possible risk in your business, take
          control over them.</p>
        </div>
      </div>
      <div className='flex flex-col justify-center  items-center text-center gap-[20px]'>
        <div className='w-[100px] h-[100px] bg-[#fafafa] border-[solid] border-[1px] border-[gray] rounded-[50%] flex justify-center items-center'><FaLightbulb className='text-[38px] text-[#2a3855]' />
        </div>
        <div>
        <h2 className='text-[24px] text-[#2a3855] font-bold'>Market Research
        </h2>
          <p className='mt-[8px] text-[16px] text-[gray]'>Know the market before taking any step, reduce
          risks before you go.</p>
        </div>
      </div>
      <div className='flex flex-col justify-center  items-center text-center gap-[20px]'>
        <div className='w-[100px] h-[100px] bg-[#fafafa] border-[solid] border-[1px] border-[gray] rounded-[50%] flex justify-center items-center'><FaChartBar className='text-[38px] text-[#2a3855]'/> </div>
        <div>
        <h2 className='text-[24px] text-[#2a3855] font-bold'>Quality Services</h2>
          <p className='mt-[8px] text-[16px] text-[gray]'>Experience unparalleled service, from beginning
          to final construction.</p>
        </div>
      </div>
      </div>
      
      <div className='max-w-[1140px] mx-auto px-[16px] relative'>
        <img src={imgvideo} alt="" />
        <div className='w-[100px] h-[100px] bg-[#ffffff8c] flex justify-center items-center rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <div className='w-[80px] h-[80px] bg-[#ffffff] flex justify-center items-center rounded-[50%]'><FaPlay className='text-[20px] text-[#2a3855]' /></div>
        </div>
      </div>

      <div className='max-w-[1140px] mx-auto px-[16px] grid grid-cols-3 py-[60px] gap-[100px]'>
        <div>
          <div className='flex items-center gap-[10px]'><FaUsers className='text-[28px] text-[#2a3855]' /><h2 className='text-[22px] font-bold text-[#2a3855] font-montserrat'>Awesome Team</h2></div>
          <div className='mt-[12px]' ><p className='text-[16px] font-[400] text-[#6a6a6a] font-montserrat'>Before talking destination, we shine a spotlight across your organization
          to fully understand it.</p></div>
        </div>
        <div>
          <div className='flex items-center gap-[10px]'><FaComments className='text-[28px] text-[#2a3855]' /><h2 className='text-[22px] font-bold text-[#2a3855] font-montserrat'>Excellent Support</h2></div>
          <div className='mt-[12px]' ><p className='text-[16px] font-[400] text-[#6a6a6a] font-montserrat'>If you face any trouble, you can always let our dedicated support team help you. They are ready for you 24/7.</p></div>
        </div>
        <div>
          <div className='flex items-center gap-[10px]'><FaBolt className='text-[28px] text-[#2a3855]' /><h2 className='text-[22px] font-bold text-[#2a3855] font-montserrat'>Faster Performance</h2></div>
          <div className='mt-[12px]' ><p className='text-[16px] font-[400] text-[#6a6a6a] font-montserrat'>We develop a systematic well-ordered process of analysis, from concept through implementation.</p></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WelcomeSec

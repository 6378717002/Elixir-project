import React from 'react'
import checkmark from '../../assets/checkmark.png'

const SecPoint = () => {
  return (
    <>
    <div className='max-w-full bg-[#01164379] h-[90vh]'>
    <div className='max-w-[1140px] h-[90vh]  mx-auto px-[16px] grid justify-start items-center'> 
      <div className='flex items-start gap-[20px]'>
        <div>
        <img src={checkmark} alt="" className='w-[60px] mt-[8px] ' />
        </div>
        <h1 className='text-[52px] font-bold leading-[62px] text-white'><span className='text-[52px] font-bold text-[#fdd428]'>Take the right step,</span><br />
        do the big things.</h1>
        </div>
    <div className='pl-[56px] flex gap-[80px] justify-between '>
        <div>
            <h1 className='text-[52px] text-white font-bold '>52</h1>
            <h2 className='text-[16px] font-bold text-white'>Cases Solved</h2>
        </div>
        <div>
            <h1 className='text-[52px] text-white font-bold '>164</h1>
            <h2 className='text-[16px] font-bold text-white'>Trained Experts</h2>
        </div>
        <div>
            <h1 className='text-[52px] text-white font-bold '>38</h1>
            <h2 className='text-[16px] font-bold text-white'>Branches</h2>
        </div>
        <div>
            <h1 className='text-[52px] text-white font-bold '>100</h1>
            <h2 className='text-[16px] font-bold text-white'>Satisfied Clients</h2>
        </div>
       
    </div>
    </div>
    </div>
    </>
  )
}

export default SecPoint
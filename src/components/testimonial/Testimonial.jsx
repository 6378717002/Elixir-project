import React from 'react'
import client from '../../assets/client1.png'

const Testimonial = () => {
  return (
    <>
    <div className='max-w-full py-[120px]'>
        <div className='max-w-[1140px] mx-auto px-[16px] flex justify-center gap-[40px]'>
            <div>
            <img src={client} alt="" className='rounded-[10px]'/>
            </div>
            <div className='w-[60%] grid items-center'>
                <p className='text-[22px] text-[#6a6a6a] '>Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
               <div className='mt-[16px]'>
                <h4 className='text-[#2a3855] text-[18px] font-bold'>Michael Clarke</h4>
                <p className='text-[#6a6a6a] text-[16px]'>CEO, A.E.T Institute</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial
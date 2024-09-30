import React from 'react'

const Form = () => {
  return (
   <>
   <div className=' max-w-full bg-[#2a3855]'>
    <div className='max-w-[1140px] px-[16px] mx-auto grid grid-cols-[30%_68%] justify-between py-[120px]'>
        <div className='border-[solid] border-[2px] border-[yellow] rounded-[10px] py-[40px] px-[20px]'>
            <h1 className='text-[30px] font-bold text-center text-white'>Request a call back</h1>
            <p className='text-[16px] text-[white] text-center pt-[18px]'>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also email us if you would prefer.</p>
        </div>
        <div className=' px-[40px] flex flex-col justify-center'>
            <form >
                <div className=' '>
                <h2 className='mb-[32px] text-[24px] font-bold text-white'>I would like to discuss:</h2>
                <div className='grid grid-cols-2 gap-[32px]'>
                <input type="text" placeholder='Your Name' className='py-[14px] pl-[10px] text-[14px] rounded-[6px]' />
                <input type="text" placeholder='Phone Number' className='py-[14px] pl-[10px] text-[14px] rounded-[6px]' />
                <input type="text" placeholder='Subject' className='py-[14px] pl-[10px] text-[14px] rounded-[6px]' />
                <button className='bg-[#fdd428] text-[14px] font-semibold rounded-[6px]'>Submit</button>
                </div>
                </div>
            </form>
        </div>
    </div>
   </div>
   </>
  )
}

export default Form
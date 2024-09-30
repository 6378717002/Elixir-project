import React from 'react'
import Heading from '../../Utility/Heading'
import port1 from '../../assets/portrait-1.jpg'
import port3 from '../../assets/portrait-3.jpg'
import port4 from '../../assets/portrait-4.jpg'
import port5 from '../../assets/portrait-5.jpg'
import port6 from '../../assets/portrait-6.jpg'
import port7 from '../../assets/portrait-7.jpg'


const Leadership = () => {
  return (
    <>
    <div className='max-w-full py-[120px]'>
        <Heading heading={'Global leadership'}/>
        <div className='max-w-[1140px] mx-auto grid grid-cols-3 gap-[36px] pt-[80px]'>
            <Man img={<img src={port1} alt="" className='rounded-[14px_14px_0px_0px]' />} title={'Reenal Scott'} mintitle={'Advertising Consultant'} desc={'Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only.'}/>
            <Man img={<img src={port3} alt="" className='rounded-[14px_14px_0px_0px]' />} title={'Thomas Anderson'} mintitle={'Change Management Consultant'} desc={'As the VP of People, Thomas’s focus lies in the development and optimization of talent retention.'}/>
            <Man img={<img src={port4} alt="" className='rounded-[14px_14px_0px_0px]' />} title={'Lily Anderson'} mintitle={'Activation Consultant'} desc={'Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions ofr users.'}/>
            <Man img={<img src={port5} alt="" className='rounded-[14px_14px_0px_0px]' />} title={'John Snow'} mintitle={'Business Analyst'} desc={'John has overseen the meteoric growth while protecting scaling its uniquely creative and culture.'}/>
            <Man img={<img src={port6} alt="" className='rounded-[14px_14px_0px_0px]' />} title={'Legartha Mantana'} mintitle={'Brand Management Consultant'} desc={'As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects.'}/>
            <Man img={<img src={port7} alt="" className='rounded-[14px_14px_0px_0px]' />} title={'Ragner Lothbrok'} mintitle={'Business Consultant'} desc={'Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming.'}/>
        </div>
    </div>
    </>
  )
}

export default Leadership


const Man =({img,title,mintitle, desc})=>{
    return(
        <div className='shadow-md rounded-[14px_14px_14px_14px]'>
            <span>{img}</span>
            <div className='p-[20px]'>
                <h2 className='text-[22px] font-bold text-center text-[#2a3855]'>{title}</h2>
                <h3 className='text-center text-[14px] mt-[2px] text-[#6a6a6a]'>{mintitle}</h3>
                <p className='text-center text-[16px] mt-[16px] text-[#6a6a6a]'>{desc}</p>
            </div>

        </div>
    )
}
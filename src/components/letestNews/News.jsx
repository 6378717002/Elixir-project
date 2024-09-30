import React from 'react'
import Heading from '../../Utility/Heading'
import { HiArrowLongRight } from "react-icons/hi2";
import img9 from '../../assets/9.jpg'
import img10 from '../../assets/10.jpg'
import img11 from '../../assets/11.jpg'

const News = () => {
  return (
    <>
    <div className='max-w-full pt-[120px]'>
        <Heading heading={'Latest News'}/>
        <div className='max-w-[1140px] mx-auto grid grid-cols-3 gap-[30px] my-[80px]'>
          <Card  img={<img src={img9} alt="" className='rounded-[10px_10px_0px_0px]'/>} title={'Tax impacts of lease mean accounting change'} smtitle={'By Paul O Sullivian'} desc={'HMRC released a consultation document to flag some potential tax impacts that a forthcoming change...'}/>  
          <Card  img={<img src={img10} alt="" className='rounded-[10px_10px_0px_0px]'/>} title={'What brexit means for data protection law'} smtitle={'By Enrico Ambrosi'} desc={'Assuming that the referendum is not ignored completely, there are two possible futures for the UK...'}/>  
          <Card  img={<img src={img11} alt="" className='rounded-[10px_10px_0px_0px]' />} title={'The growing meanace of social engineering fraud'} smtitle={'By Robson'} desc={'Social engineering involves the collection of information from various sources about a target...'}/>  
        
        </div>
    </div>
    </>
  )
}

export default News


const Card = ({title,img,desc,smtitle})=>{
    return (
        <>
            <div className='shadow-md'>
            <span>{img}</span>
            <div className='p-[30px]'>
                <h2 className='text-[24px]  text-[#2a3855] font-bold leading-[28px]'>{title}</h2>
                <h3 className=' text-[16px] mt-[8px] text-[#6a6a6a] '>{smtitle}</h3>
                <p className='text-[16px] mt-[16px] my-[12px] text-[#6a6a6a]'>{desc}</p>
                <div>
                <button className='flex justify-center items-center cursor-pointer text-[18px] text-[#2a3855] font-medium'>Learn more<HiArrowLongRight className='mt-[4px] ml-[8px] text-[24px]'/></button>
                </div>
            </div>
            </div>
        </>
    )
}
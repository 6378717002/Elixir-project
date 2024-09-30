import React from 'react'
import Heading from '../../Utility/Heading'
import sharing from '../../assets/sharing.png'
import mail from '../../assets/mail.png'
import target from '../../assets/target.png'
import globe from '../../assets/world-globe.png'
import money from '../../assets/money.png'
import data from '../../assets/data-analytics.png'


const Things = () => {
  return (
    <>
    <div className='max-w-full py-[120px]'>
        <Heading heading={'Things You Get'}/>
        <div className='max-w-[1140px] mx-auto grid grid-cols-3 gap-[100px] py-[80px]'>
        <div>
        <Section img={<img src={sharing} className='w-[37px]' alt=""/>} title={'Creative Support'}description={'We transform brands, grow businesses, and tell brand and product stories in a most creative way.'} />
        </div>
        <div>
        <Section img={<img src={mail} className='w-[37px]' alt=""/>} title={'Creating Experiences'}description={'We cover a large range of creative platforms and digital projects with one purpose: to create experiences.'} />
        </div>
        <div>
        <Section img={<img src={target} className='w-[37px]' alt=""/>} title={'Product Consulting'}description={'We guide you through the pipelines that generate new products with higher potential and lower risk.'} />
        </div>
        <div>
        <Section img={<img src={globe} className='w-[37px]' alt=""/>} title={'Business Boosting'}description={'We provide energy-efficient and environmentally conservative solutions to our clients to boost their business.'} />
        </div>
        <div>
        <Section img={<img src={money} className='w-[37px]' alt=""/>} title={'Strategic Approach'}description={'Based on solid strategic framework and real, relevant research, we create prototypes, not presentations.'} />
        </div>
        <div>
        <Section img={<img src={data} className='w-[37px]' alt=""/>} title={'Logistic Consulting'}description={'We work buy side and sell side to give our clienrts hard hitting answers and focus hard on best opportunities.'} />
        </div>
        </div>
    </div>
    </>
  )
}

export default Things


const Section =({img,title,description})=>{
    return (
        <>
        <div className='flex flex-col items-center text-center gap-[10px]'>
            <span>{img}</span>
            <h1 className='text-[24px] text-[#2a3855] font-bold'>{title}</h1>
            <p className='text-[16px] text-[#6a6a6a]'>{description}</p>
        </div>
        </>
    )
}
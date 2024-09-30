import React from 'react'
import Shape from './Shape'


const Heading = ({heading}) => {
  return (
    <>
    <div><h1 className=' flex flex-col items-center justify-center text-[38px] text-center text-[#2a3855] font-bold gap-[12px] font-montserrat'>{heading}<Shape/></h1>
    </div>
    </>
  )
}

export default Heading
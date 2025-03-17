import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-fit'>
        <Image className='w-full h-150' src="/Hero.png" alt='' width={1500} height={100} />
        <div className='w-200 text-center flex flex-col gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h2 className='font-bold text-[50px]'>Services Details</h2>
            <p>Transform your space with our professional painting and repair solutions. At Dhannvantri Paint Services, we offer high-quality, durable, and aesthetically appealing painting solutions tailored to your needs.</p>
        </div>
    </div>
  )
}

export default Hero
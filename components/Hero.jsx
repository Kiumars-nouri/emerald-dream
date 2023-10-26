import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import herol from "@public/assets/herol.jpg"
import heror from "@public/assets/heror.jpg"


const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-center w-full mt-[-85px]'>

        <div className='max-2xl:w-full lx:h-[720px] relative hero'>
            <Image priority={true} src={herol} width={1500} alt='to the shopping' />
            <Link className='font-bold absolute left-[17%] bottom-[15%]
             bg-[#d5e8b8] rounded-lg py-2 px-4 lg:px-8'
            href='/Products' >Products</Link>
        </div>

        <div className='max-2xl:w-full lx:h-[720px] relative hero'>
            <Image priority={true} src={heror} width={1500} alt='to the shopping' />  
            <Link href='/Products' className='font-bold absolute right-[22%] bottom-[15%] bg-[#d5e8b8] rounded-lg py-2 px-4 lg:px-8'
            >Details</Link>
        </div>

    </section>
  )
}

export default Hero
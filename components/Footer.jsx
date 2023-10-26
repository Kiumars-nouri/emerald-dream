import Image from 'next/image'

const Footer = () => {
  return (
    <section className="flex xl:flex-row flex-col xl:justify-between justify-center pl-[16px] xl:pl-0 pr-[16px] xl:pr-0  
    bg-[#d7d7d7] py-8 mt-[120px]">
           <div className="flex justify-center items-center xl:ml-[10%]">
            <h1 className='font-bold xl:text-[2rem] text-[1.5rem] hgradient'>Emerald</h1>
            <Image src='/assets/logo.png' alt='emerald_dream' width={64} height={64}/>
            <h1 className='font-bold xl:text-[2rem] text-[1.5rem] hgradient'>Dream</h1>
        </div>

        <div className="flex justify-center items-center">
            <ul className='footer gap-y-2 flex flex-col justify-between items-center'>
                <li><a href="mailto:kiumars90@yahoo.com?subject=more%20information">info@emerald-dream.com</a></li>
                <li><a href='tel:123456789'>123456789</a></li>
            </ul>
        </div>

        <div>
            <ul className='footer font-bold flex flex-col justify-between items-center'>The house of Emerald Dream
                <li>Contact & FAQ</li>
                <li>Careers</li>
                <li>Terms & Policies</li>
            </ul>
        </div>

        <div className='xl:mr-[10%] flex flex-col  items-center'>
            <p className='text-[1.5rem] mt-4 xl:mt-0 justify-self-start font-bold'>Our socials</p>
            <div className='flex flex-row justify-center items-center gap-x-4 mt-4 '>
            <a href='https://www.instagram.com/' target='_blank'><Image src='/assets/instagram.png' alt='instagram' width={32} height={32} /></a>
            <a href='https://www.facebook.com/' target='_blank'><Image src='/assets/facebook.png' alt='facebook' width={32} height={32} /></a>
            <a href='https://www.linkedin.com/' target='_blank'><Image src='/assets/linkedin.png' alt='linkedin' width={32} height={32} /></a>
            <a href='https://twitter.com/?lang=en' target='_blank'><Image src='/assets/twitter.png' alt='twitter' width={32} height={32} /></a>
            </div>
        </div>
        
    </section>
  )
}

export default Footer
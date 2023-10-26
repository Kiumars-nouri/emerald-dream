import Image from 'next/image'

const Goals = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse lg:mx-[10%] 2xl:mx-[20%] mx-4
    lg:gap-8 gap-4 items-center justify-center mt-[120px]">
       
        <div className="flex-1 fade">
            <h1 className="lg:text-[2.5rem] text-[1.5rem] font-bold hgradient">
                Earth, is our home
            </h1>

            <p className="text-[1rem] text-justify text-[#d7d7d7]">
            we are dedicated to fashion with a conscience. As an eco-friendly fashion company, we prioritize sustainability 
            at every step of our journey. Our clothing is crafted using ethically sourced, organic materials and environmentally
             responsible production methods. We're committed to reducing our carbon footprint and promoting fair labor practices. 
             Join us in embracing a stylish, eco-conscious lifestyle that makes a positive impact on our planet.</p>
        </div>

        <div className="flex-1">
            <Image src="/assets/eco-friendly.jpg" width={750} height={1000} alt="emerald_dream_famous_model" 
            className="border-[2px] border-[#d5e8b8] p-2"/>
        </div>

    </section>
  )
}

export default Goals
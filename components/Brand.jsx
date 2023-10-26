import Image from "next/image"


const Brand = () => {
  return (
    <section className="grid lg:grid-cols-2 lg:mx-[10%] 2xl:mx-[20%] mx-4
    lg:gap-8 gap-4 items-start justify-center mt-[120px]">
       
        <div className="fade">
            <h1 className="lg:text-[2.5rem] text-[2rem] font-bold hgradient">
                Emerald Dream,
            </h1>
            <p className="lg:text-[1.5rem] text-[1.5rem] text-[#d7d7d7]">
            Redefining Elegance
            </p>
            <p className="text-[1rem] text-justify text-[#d7d7d7]">
            Emerald Dream is a fashion sensation that redefines elegance. Our designs blend classic sophistication with 
            contemporary style, inspiring confidence in every step. Committed to sustainability, we craft ethically sourced, 
            eco-friendly fashion that leaves a lasting impression. Join us in a world where fashion meets fantasy, and let your unique style shine.</p>
        </div>

        <div className="row-start-1 lg:col-start-2 lg:row-span-2">
            <Image src="/assets/hero.jpg" width={750} height={1000} alt="emerald_dream_famous_model" 
            className="border-[2px] border-[#d5e8b8] p-2"/>
        </div>

        <div className="lg:mt-8 mt-[120px] lg:col-start-1 lg:row-span-2">
            <Image src="/assets/autumn.jpg" width={750} height={1000} alt="emerald_dream_famous_model" 
            className="border-[2px] border-[#d5e8b8] p-2"/>
        </div>
       
        <div className="lg:mb-6 fade">
            <h1 className="lg:text-[2.5rem] text-[2rem] font-bold hgradient">
            Autumn Collection
            </h1>
            <p className="lg:text-[1.5rem] text-[1.5rem] text-[#d7d7d7]">
            Nature's Elegance Unveiled
            </p>
            <p className="text-[1rem] text-justify text-[#d7d7d7]">
            Our Autumn Collection captures the rich tapestry of the season, blending earthy tones and cozy textures. 
            From warm knits to tailored coats, each piece is a reflection of nature's beauty. Embrace the crisp air in style with 
            our thoughtfully curated collection that seamlessly transitions from day to night. Discover the essence of autumn with
             Emerald Dream and step into a world of timeless elegance.</p>
        </div>

    </section>
  )
}

export default Brand
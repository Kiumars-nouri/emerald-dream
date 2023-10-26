import Image from 'next/image'
import  Link from "next/link";

const accessories = [
  {
    img: "/assets/accessories/sunglasses/sunglasses.jpg",
    text: "Sun Glasses",
  },
  {
    img: "/assets/accessories/bag/bag.jpg",
    text: "Bag",
  },
  {
    img: "/assets/accessories/belt/belt.jpg",
    text: "Belt",
  },
  {
    img: "/assets/accessories/gloves/gloves.jpg",
    text: "Gloves",
  },
]

const page = () => {
  return (
    <section className=" lg:mx-[10%] mx-4 flex flex-col lg:gap-8 gap-4 items-center justify-center">
      <div>

        <div className='flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-8 gap-4 fade'>
          <div className='max-2xl:flex-1'>
            <h1 className="lg:text-[2.5rem] text-[2rem] font-bold hgradient">Sustainable Style</h1>
            <p className="lg:text-[1.5rem] text-[1.5rem] text-[#d7d7d7]">Timeless Elegance</p>
            <p className="text-[1rem] text-justify text-[#d7d7d7] 2xl:w-[480px]">
            Our collection of eco-conscious accessories, including bags, sunglasses, gloves, and belts, embodies the perfect blend of fashion and 
            sustainability. Crafted from upcycled materials and designed for durability, each piece is a statement of conscious elegance. 
            These accessories not only reduce waste but also showcase your commitment to a greener planet. Elevate your style with eco-friendly 
            choices that make a positive impact—choose our sustainable accessories and embrace a timeless, eco-conscious fashion statement.</p>
          </div>

          <div className='max-2xl:flex-1'>
          <Image className="border-[2px] border-[#d5e8b8] p-2"
          src="/assets/accessories/accessories.png" width={500} height={750} alt="jeweleris" />
          </div>
        </div>

        <div className='flex flex-row flex-wrap lg:gap-2 xl:gap-4 gap-4 justify-center items-center mt-[90px]'>

        {accessories.map(item=>{
            return(
              <Link key={item.text} className='bg-[#172b0d] text-[#d7d7d7] text-center text-[1.2rem] border-[2px] border-[#d5e8b8]' href="/Products">
              <Image src={item.img} width={400} height={300} alt={item.text} className="h-[192px] object-cover"/>{item.text}</Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default page
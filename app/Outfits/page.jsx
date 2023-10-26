import Image from 'next/image'
import  Link from "next/link";

const outfit = [
  {
    img: "/assets/outfit/dress/dress.jpg",
    text: "Dress",
  },
  {
    img: "/assets/outfit/pant/pant.jpg",
    text: "Pant",
  },
  {
    img: "/assets/outfit/skirt/skirt.jpg",
    text: "Skirts",
  },
  {
    img: "/assets/outfit/shirt/shirt.jpg",
    text: "Shirts",
  },
  {
    img: "/assets/outfit/coat/coat.jpg",
    text: "Coats",
  },
]

const page = () => {
  return (
    <section className=" md:mx-[10%] mx-4 flex flex-col gap-8 items-center justify-center">
      <div>

        <div className='flex md:flex-row flex-col-reverse items-center justify-center d:gap-8 gap-4 fade'>
          <div className='max-2xl:flex-1'>
            <h1 className="md:text-[2.5rem] text-[2rem] font-bold hgradient">Fashion</h1>
            <p className="md:text-[1.5rem] text-[1.5rem] text-[#d7d7d7]">That Cares for the Planet</p>
            <p className="text-[1rem] text-justify text-[#d7d7d7] 2xl:w-[480px]">
            Our eco-conscious clothing line redefines fashion with sustainability in mind. Crafted from recycled materials and designed for 
            longevity, our outfits not only reduce environmental impact but also make a lasting style statement. Versatile and durable, 
            these pieces are meant to be worn time and again, reducing the need for fast fashion. Embrace a more sustainable wardrobe 
            without compromising on style—choose eco-friendly and reusable outfits today and be part of the solution for a greener tomorrow.</p>
          </div>

          <div className='max-2xl:flex-1 flex justify-end'>
          <Image className="border-[2px] border-[#d5e8b8] p-2"
          src="/assets/outfit/outfit.jpg" width={500} height={500} alt="jeweleris" />
          </div>
        </div>

        <div className='flex flex-row flex-wrap gap-8 md:gap-4 justify-center items-center mt-[90px]'>

        {outfit.map(item=>{
          return(
            <Link key={item.text} className='bg-[#172b0d] h-[530px] text-[#d7d7d7] text-center text-[1.2rem] border-[2px] border-[#d5e8b8]' href="/Products">
            <Image src={item.img} width={350} height={500} alt={item.text} className="h-[490px] object-cover"/>{item.text}</Link>
          )
        })}

        </div>

      </div>
    </section>
  )
}

export default page
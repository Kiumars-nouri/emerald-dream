import Image from 'next/image'
import  Link from "next/link";

const jewel = [
  {
    img: "/assets/jewel/necklace/necklace.jpg",
    text: "Necklace",
  },
  {
    img: "/assets/jewel/ring/ring.jpg",
    text: "Ring",
  },
  {
    img: "/assets/jewel/earing/earing.jpg",
    text: "Earing",
  },
  {
    img: "/assets/jewel/bracelet/bracelet.jpg",
    text: "Bracelet",
  },
]

const page = () => {
  return (
    <section className=" md:mx-[10%] mx-4 flex flex-col md:gap-8 gap-4 items-center justify-center">
      <div>

        <div className='flex md:flex-row flex-col-reverse items-center justify-center d:gap-8 gap-4 fade'>
          <div className='max-2xl:flex-1'>
            <h1 className="md:text-[2.5rem] text-[2rem] font-bold hgradient">Timeless Elegance</h1>
            <p className="md:text-[1.5rem] text-[1.5rem] text-[#d7d7d7]">in Every Precious Stone</p>
            <p className="text-[1rem] text-justify text-[#d7d7d7] 2xl:w-[480px]">
              At Jewels and Jade, we specialize in curating exquisite jewelry pieces that showcase the beauty and allure of precious gemstones, 
              particularly the coveted jade. Our collection reflects a harmonious blend of tradition and modern design, creating timeless pieces that 
              transcend generations. Whether it's for a special occasion or everyday luxury, our jewelry exudes elegance and sophistication. 
              Discover the world of timeless beauty and craftsmanship at Jewels and Jade, where each piece tells a story of exceptional craftsmanship 
              and enduring beauty.</p>
          </div>

          <div className='max-2xl:flex-1'>
          <Image className="border-[2px] border-[#d5e8b8] p-2"
          src="/assets/jewel/jewel.jpg" width={500} height={750} alt="jeweleris" />
          </div>
        </div>

        <div className='flex flex-row flex-wrap lg:gap-4 xl:gap-4 gap-4 justify-center items-center mt-[90px]'>

          {jewel.map(item=>{
            return(
              <Link key={item.text} className='bg-[#172b0d] text-[#d7d7d7] text-center text-[1.1rem] border-[2px] border-[#d5e8b8]' href="/Products">
              <Image src={item.img} width={400} height={300} alt={item.text} className="h-[192px] object-cover"/>{item.text}</Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default page
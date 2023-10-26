"use client"

import Link from 'next/link'
import Image from "next/image"
import { useEffect, useState } from 'react'
import left from "@public/assets/left.png"
import right from "@public/assets/right.png"
import { motion } from 'framer-motion'


const  Page = () =>{
    const [products, setProducts] = useState()
    const [search, setSearch] = useState("")

        const getProducts =  async() =>{
        try {  
            const res = await fetch("/api/products")
            const data = await res.json();
    
            setProducts(data) 
        } catch (error) {
            console.log(error)
        }}

        useEffect(()=>{
            getProducts();
         },[])



    //Consts for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 9;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = products?.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(products?.length / recordsPerPage);
    const [pageNumbers, setPageNumbers] = useState([])
    const pages = ()=>{ if(products){setPageNumbers([...Array(nPage + 1).keys()].slice(1))}}
    useEffect(()=>{
        pages();
     },[products])
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    function prePage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
            setMaxPageNumberLimit(maxPageNumberLimit - 1);
            setMinPageNumberLimit(minPageNumberLimit - 1);  
        }
        document.getElementById("products").scrollIntoView({behavior : "smooth"})
    }
    
    function nextPage(){
        if(currentPage !== nPage){
            setCurrentPage(currentPage + 1)
            setMaxPageNumberLimit(maxPageNumberLimit + 1);
            setMinPageNumberLimit(minPageNumberLimit + 1);  
        }
        document.getElementById("products").scrollIntoView({behavior : "smooth"})
    }
    
    function changePage(id){
        setCurrentPage(id);
        document.getElementById("products").scrollIntoView({behavior : "smooth"})
    }

    //searching fetched data
    const handleSearch = async() => {
        if(search){
            const res = await fetch("/api/products")
            const data = await res.json();

            const searchedProduct = data.filter((product)=>
            product.id.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search) ||
            product.name.toLowerCase().includes(search) 
            );

            setSearch("");
            setProducts(searchedProduct);

        } else{
            const res = await fetch("/api/products")
            const data = await res.json();

            setSearch("");
            setProducts(data);
        }}
    
    
  return (
    <section id='products' className="2xl:mx-[20%] lg:mx-[10%] mx-4 lg:gap-8 gap-4 items-center justify-center scroll-mt-[120px]">

        <div className='text-center mb-8'>
        <form onSubmit={e => { e.preventDefault()}} className='flex justify-center items-center'>
            <label className='mt-0'>
                <input type='text' placeholder='Search' className='rounded-r-[0] border-r-0 searchbar' 
                onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
            </label>
            <button onClick={handleSearch}
            className='font-bold text-[24px] md:w-[150px] w-[150px] h-[50px]
              bg-[#172b0d] text-[#d7d7d7] rounded-r-[20px]'>
            Search
            </button>
        </form>
        </div>

        <div className='grid 2xl:justify-start justify-start items-center xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {records && records.map((item, i) =>{
                return(
                    <motion.div initial={{opacity: 0, rotateY: 180}} animate={{ rotateY: 360, opacity: 1 }}
                    transition={{ duration: 1, delay: .3 + i*.5 }}
                    key={item.id} 
                    className='bg-[#172b0d] text-[1.5rem] text-[#d7d7d7] border-[2px] border-[#d5e8b8] p-2 rotate-180'>

                    <Link href={`/Products/${item.id}`}>
                        <Image src={item.img} alt={item.name} priority={item.id==="necklace-01" ? true : false}
                        height={400} width={330} className='h-[400px] w-full'/>
                    </Link>

                    <Link href={`/Products/${item.id}`} className='py-1 px-4'>{item.name}</Link>

                    <div className='flex justify-between items-center pt-1 pb-4 px-4'>
                        <p>${item.price}</p>
                        <Link href={`/Products/${item.id}`} className='flex items-center gap-1 underline underline-offset-4'>Add to 
                            <Image src="/assets/cart.png" alt='add_to_cart' height={22} width={22}/>
                        </Link>
                    </div>

                    </motion.div>
                )
            })}
        </div>

        <div className='pt-8 text-[#d7d7d7] text-[18px]'>
        <ul className='flex justify-center items-center'>

            <li className='paginate'>
                <button onClick={prePage}>
                    <Image src={left} alt='back' className='w-4 h-4'/>
                </button>
            </li>


            {pageNumbers.map((n)=>{
                if(n < maxPageNumberLimit+1 && n > minPageNumberLimit){
                return(
                <li key={n} className={`paginate paginate-li flex justify-center items-center text-[#d7d7d7]
                ${n === currentPage ? "gem" : "bg-[#172b0d]"}`}>
                   <button onClick={()=>changePage(n)}>{n}</button>
                </li>);
                } else {
                    return null;
                }
            })}

            <li className='paginate'>
                <button onClick={nextPage}>
                    <Image src={right} alt='back' className='w-4 h-4'/>
                </button>
            </li>
        </ul>
      </div>    

    </section>
  )
}


export default Page


 
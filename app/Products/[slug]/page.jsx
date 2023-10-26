"use client"

import {usePathname} from 'next/navigation'
import { useSession, signIn } from 'next-auth/react'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { CartContext } from '@components/CartContext'
import { useContext } from 'react'



export default function Page(){
  const [products, seetProducts] = useState([])
  const { data: session } = useSession();
  const {cartItem, setCartItem} = useContext(CartContext)


  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();

    seetProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  
  const router = usePathname();
  const product = products.find((item) => router.includes(item.id))

  const addToCartHandler = async () =>{
    if(session){
    try{      
      const res = await fetch("/api/cart", 
      {
        method: "POST",
        body: JSON.stringify({
          cart: product._id,
          img: product.img,
          id: product.id,
          price: product.price,
          userId: session?.user.id,
        })
      }) 
      setCartItem((prev)=> prev +=1)  
   } catch(error){
      console.log(error)
   }}
   else if(!session){
    signIn("google")
   }}

   
  if(!product){
    return(
      <section className="flex xl:flex-row flex-col xl:mx-[10%] 2xl:mx-[20%] mx-4
      xl:gap-8 gap-4 items-center justify-center">
  
        <div className="max-2xl:flex-1">
          <Link href="/Products" 
          className=" text-[#d5e8b8] py-2 px-4 bg-[#172b0d] border-[2px] border-[#d5e8b8] rounded-lg">
            Back to Products</Link>
        <div className="border-[2px] border-[#d5e8b8] p-2 md:w-[600px] w-[370px] md:h-[500px] h-[500px]"></div>

        </div>
  
        <div className="text-[#d7d7d7] text-[2rem] my-8 xl:w-[780px] lg:w-[570px]
        flex flex-col justify-between self-stretch h-100% max-2xl:flex-1">
  
          <div className='w-[100%]'>
          <h1><span className="font-semibold">Product id:</span></h1>
          <p><span className="font-semibold">Category:</span></p>
          <p><span className="font-semibold">Materials:</span></p>
          </div>
  
          <div className="self-end justify-self-end text-center">
            <p>Price: $</p>
            <button className="btn py-2 px-4 bg-[#172b0d] border-[2px] border-[#d5e8b8] rounded-lg">
              Add To Cart</button>
          </div>
        </div>
  
      </section>
    )
  }  




  return (
    <section className="flex xl:flex-row flex-col xl:mx-[10%] mx-4
    xl:gap-8 gap-4 items-center justify-center">

      <div className="max-2xl:flex-1">
        <Link href="/Products" 
        className=" text-[#d5e8b8] py-2 px-4 bg-[#172b0d] border-[2px] border-[#d5e8b8] rounded-lg">
          Back to Products</Link>
      <Image src={product.img} height={1000} width={600} alt={product.name} 
      className="border-[2px] border-[#d5e8b8] p-2 w-[600px] h-[500px]"/>
      </div>

      <div className="text-[#d7d7d7] text-[2rem] my-8 xl:w-[780px] lg:w-[570px]
      flex flex-col justify-between xl:self-stretch h-100% max-2xl:flex-1">

        <div className='w-[100%]'>
        <h1><span className="font-semibold">Product id:</span> {product.id}</h1>
        <p><span className="font-semibold">Category:</span> {product.category}</p>
        <p><span className="font-semibold">Materials:</span> {product.material}</p>
        </div>

        <div className="self-end justify-self-end text-center">
          <p>Price: ${product.price}</p>
          <button onClick={addToCartHandler} className="btn py-2 px-4 bg-[#172b0d] border-[2px] border-[#d5e8b8] rounded-lg">
            {session ? "Add to Cart" : "Sing in First"}</button>
        </div>
      </div>

    </section>
  )
}


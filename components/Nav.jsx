"use client"

import  Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { signIn, signOut, useSession, getProviders} from "next-auth/react"
import { CartContext } from '@components/CartContext'
import { useContext } from 'react'
import {navJewel, navOutfit, navAccessories} from "@utils/navLinks"


const Nav = () => {
  const {cartItem} = useContext(CartContext)
  const [toggle, setToggle] = useState(false)
  const [sidebar, setSidebar] = useState(true)
  const [profile, setProfile] = useState(false)
  const [cartNumber, setCartNumber] = useState()
  const handleClick =() => {setToggle((prev)=> !prev)};

 const {data: session} = useSession()
  const [providers, setProviders] = useState(null)

  useEffect(()=>{
    const setUpProvider = async() => {
        const response = await getProviders();

        setProviders(response)
    }

    setUpProvider();
  }, [])


  
      const fetchCart = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/cart`);
    const data = await response.json();

    setCartNumber(data)
     }

     useEffect(()=>{
     if(session?.user.id) fetchCart();
  },[session?.user.id, cartItem])

    


  return (
  <nav className={`z-10 flex justify-between fixed top-0 left-0 pl-[16px] xl:pl-0 pr-[16px] xl:pr-0 w-[100vw] bg-[#d7d7d7]`}>
    
    <div className="nav_index flex items-center xl:ml-[10%] z-10">
        <h1 className='font-bold xl:text-[2rem] text-[1.5rem] hgradient'>Emerald</h1>
        <Image src='/assets/logo.png' alt='emerald_dream' width={64} height={64} className="z-10"/>
        <h1 className='font-bold xl:text-[2rem] text-[1.5rem] hgradient'>Dream</h1>
    </div>


    <div className="nav_index flex justify-center items-center mr-[10%]">
       <ul className="list-non xl:flex hidden items-center">
          <li><Link href="/" className="pr-8">Home Page</Link></li>

          
          <li>
            <Link className="px-8" href="/Jeweleries">Jeweleries</Link>

            <ul className="mt-[36px] min-w-[100%] justify-center items-center bg-[#d7d7d7] nav-menu
            w-full px-8 py-8 gap-x-8">
            {navJewel.map(item=>{
              return(
              <li key={item.text}><Link href="/Products">
              <Image src={item.img} alt="jade_necklace" width={160} height={120} className="h-[120px] object-cover"/>{item.text} </Link>
              </li>
              )
            })}
            </ul>             
          </li>

          <li>
            <Link className="px-8" href="/Outfits">Outfits</Link>

            <ul className="mt-[36px] min-w-[100%] justify-center items-center bg-[#d7d7d7] nav-menu
            w-full px-8 py-8 gap-x-8">
              {navOutfit.map(item=>{
              return(
              <li key={item.text}><Link href="/Products">
              <Image src={item.img} alt="jade_necklace" width={160} height={120} className="h-[120px] object-cover"/>{item.text} </Link>
              </li>
              )
            })}
            </ul>   
          </li>

          <li>
            <Link className="px-8" href="/Accessories">Accessories</Link>

            <ul className="mt-[36px] min-w-[100%] justify-center items-center bg-[#d7d7d7] nav-menu
            w-full px-8 py-8 gap-x-8">
              {navAccessories.map(item=>{
              return(
              <li key={item.text}><Link href="/Products">
              <Image src={item.img} alt="jade_necklace" width={160} height={120} className="h-[120px] object-cover"/>{item.text} </Link>
              </li>
              )
            })}
            </ul> 
          </li>
         </ul>

       
       {session?.user ? <div className="xl:flex hidden items-center justify-center gap-x-2">
           <Link href="/Cart" className="text-[red] font-bold cart flex text-[1.25rem]">
            <Image alt="cart" src="/assets/nav-cart.png" width={24} height={24}/>{cartNumber ? cartNumber.length : ""}</Link>
           <Image className="rounded-full" onClick={()=> setProfile((prev)=>!prev)}
           src={session?.user.image} width={36} height={36} alt="user_icon" />
           {profile && 
            <motion.div initial={{y: -200}} animate={{y:0}} transition={{duration: 1}}
            className="fixed flex flex-col top-[56px] px-8 gap-y-4 py-4 w-full left-0 items-end bg-[#d7d7d7]">
                <Link onClick={()=> setProfile((prev)=>!prev)} className="mr-[10%]" href="/Profile" >My Profile</Link>
                <button className="mr-[10%]" onClick={signOut}>Sing Out</button>
            </motion.div>}
           </div> : 
           (<>{providers && <div className="xl:flex hidden self-center py-2 px-4 bg-[#172b0d] text-white rounded-lg">
            <button onClick={()=> signIn("google")}>Sing In</button></div>}</>)}
       
       </div>

       



        <div className="xl:hidden flex">
          <Image src={toggle ? "/assets/close.png" : "/assets/menu.png"} alt="menu" width={32} height={32}
          className="mt-[8px] object-contain"
          onClick={handleClick}
          />

       
          <div className={`${toggle ? 'flex sidebar' : 'hidden'} fixed flex-col top-[56px] 
          right-0 min-w-[240px] min-h-[100%] bg-[#d7d7d7] pr-4 pt-8`}>
       
  
            {sidebar && 
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, delay: .2}}
            className="flex flex-col">

           {session?.user ? <div className="self-end flex mb-8 gap-x-2">
           <Link href="/Cart" onClick={handleClick} className="text-[red] font-bold cart flex text-[1.5rem]">
            <Image alt="cart" src="/assets/nav-cart.png" width={24} height={24}/>{cartNumber ? cartNumber.length : ""}</Link>
            <Link href="/Profile" onClick={handleClick}>
             <Image className="rounded-full" src={session?.user.image} width={36} height={36} alt="user"/>
            </Link>
           </div> : 
           (<>{providers && <div className="self-end mb-8 py-2 px-4 bg-[#172b0d] text-white rounded-lg">
            <button onClick={()=> signIn("google")}>Sing In</button></div>}</>)}


            <ul className="list-non items-end h-[100%] gap-y-8 flex flex-col">
            <li className="text-[#000] p-0"><Link href="/" onClick={handleClick}>Home Page</Link></li>

            <li className="text-[#000] p-0">
                <Link href="/Jeweleries" onClick={handleClick}>Jeweleries</Link></li>

            <li className="text-[#000] p-0">
                <Link href="/Outfits" onClick={handleClick}>Outfits</Link></li>

            <li className="text-[#000] p-0"> 
                <Link href="/Accessories" onClick={handleClick}>Accessories</Link></li>

            </ul>

            {session?.user && <div className="self-end mt-8 py-2 px-4 bg-[#172b0d] text-white rounded-lg">
            <button onClick={signOut}>Sign Out</button></div>}
            </motion.div>}
             
          </div>  
        </div>     
  </nav>
  )}

export default Nav
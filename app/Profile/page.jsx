"use client"

import {useSession} from "next-auth/react"
import Image from "next/image"
import UserInfo from "@components/UserInfo"
import { useEffect, useState } from "react"


const page = () => {
    const {data: session} = useSession()
    const [info, setInfo] = useState({fullname: "", country: "", city: "", zip: "", phone: ""})
    const [edit, setEdit] = useState(true)
    const [userOrder, setUserOrder] = useState()


    // Updating user info ---------------------
    const userInfoHandler = async (e) =>{
      e.preventDefault()
      if(session){
      try{      
        const res = await fetch(`/api/users/${session?.user.id}/profile`, 
        {
          method: "PATCH",
          body: JSON.stringify({
            fullname: info.fullname,
            country: info.country,
            city: info.city,
            zip: info.zip,
            phone: info.phone,
          })
        }) 
     } catch(error){
        console.log(error)
     }} 
     setEdit(prev => !prev)
    }


    //-----------------------------------
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/profile`);
      const data = await response.json();
  
      setInfo(data)
       }
  
       useEffect(()=>{
       if(session?.user.id) fetchUser();
    },[session?.user.id])


    //------------------------------------
    const fetchOrder = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/order`);
      const data = await response.json();
  
      setUserOrder(data)
       }
  
       useEffect(()=>{
       if(session?.user.id) fetchOrder();
    },[session?.user.id])


    //making order items unique ---------
    const uniqueOrder = userOrder?.reduce((accumulator, current) => {
      if (!accumulator.find((item) => item.id === current.id)) {
        accumulator.push(current);
      }
      return accumulator;
    }, []);



  return (
    <section className="flex flex-col lg:flex-row lg:mx-[10%] 2xl:mx-[20%] mx-4 lg:gap-8 gap-4 items-start justify-center text-[#d7d7d7]">

      <div className="flex flex-col lg:gap-8 gap-4 items-start max-lg:items-center justify-center">

        <div className="flex flex-col items-center justify-center text-[2rem] bg-[#172b0d] rounded-lg p-4">
            <Image src={session?.user.image} height={90} width={90} alt="user_picture" className="rounded-full" />
            <p>{session?.user.email}</p>
        </div>

        {edit ? (<div className="flex flex-col items-start text-[1.5rem] p-4 justify-center bg-[#172b0d] rounded-lg w-full">
            <h1 className="text-[2rem] font-bold self-center">User Information</h1>
            <p>Full Name: {info.fullname}</p>
            <p>Country: {info.country}</p>
            <p>City: {info.city}</p>
            <p>Zip: {info.zip}</p>
            <p>Phone: {info.phone}</p>
            <button onClick={()=> setEdit(prev => !prev)}
            className="mt-8 py-2 px-16 bg-[#172b0d] border-[2px] border-[#d5e8b8] rounded-lg self-end">Edit</button>
        </div>) :

       ( <UserInfo 
        info={info}
        setInfo={setInfo}
        userInfoHandler={userInfoHandler}
        />)}
      </div>

      <div className="flex flex-col gap-4 items-center justify-center w-full">
      <h1 className="text-[2rem] font-bold self-center">Active Orders</h1>        
        {userOrder && uniqueOrder.map(item=>{return(
            <div key={item._id} className="flex justify-between items-center w-full
            lg:text-[2rem] text-[1.3rem] bg-[#172b0d] rounded-lg pr-4 border-2 border-[#d5e8b8]">

                <div className="flex justify-between items-center gap-x-4">
                <Image src={item.img} height={90} width={90} alt={item.id} className="w-[90px] h-[90px] rounded-l-lg"/>
                <h1>{item.id}  ({userOrder.filter(order => order.id===item.id).length}x)</h1>
                </div>
            </div>
            )})}
            </div>


    </section>
  )
}

export default page
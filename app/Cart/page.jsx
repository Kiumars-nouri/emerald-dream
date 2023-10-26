"use client"

import  Link from "next/link";
import Image from "next/image"
import { useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { useSession} from "next-auth/react"
import { CartContext } from '@components/CartContext'
import { useContext } from 'react'
import GooglePayButton from "@google-pay/button-react";
import { useRouter } from 'next/navigation'




const page = () => {  
  
    const {data: session} = useSession()
    const [userCart, setUserCart] = useState()
    const {cartItem, setCartItem} = useContext(CartContext)
    const [userInfo, setUserInfo] = useState()    
    const [gpayInfo, setGpayInfo] = useState()
    const router = useRouter()




    //getting user info, address, ... -------
    const fetchUserInfo = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/profile`);
      const data = await response.json();
  
      setUserInfo(data)
       }
  
       useEffect(()=>{
       if(session?.user.id) fetchUserInfo();
    },[session?.user.id, cartItem])


    //fetching items in the user cart-------
    const fetchCart = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/cart`);
        const data = await response.json();
    
        setUserCart(data)
         }
    
         useEffect(()=>{
         if(session?.user.id) fetchCart();
      },[session?.user.id, cartItem])



      //removing items in the cart --------
      const removeHandler = async(item) =>{
        const confirmed = confirm("Delete this item?")

        if(confirmed){
            try{
                await fetch(`/api/cart/${item._id.toString()}`,
                {method: "DELETE"}
                )

                setCartItem((prev)=> prev +=1)
            } catch(error){
                console.log(error)
            }
        }
      }


      //making cart items unique ---------
      const uniqueCart = userCart?.reduce((accumulator, current) => {
        if (!accumulator.find((item) => item.id === current.id)) {
          accumulator.push(current);
        }
        return accumulator;
      }, []);


      const paymenyAutorised = async() =>{
        if(gpayInfo === "SUCCESS"){
        try{      
          const res = await fetch(`/api/order`, 
          {
            method: "POST",
            body: JSON.stringify({
              cart: userCart
            })
          }) 
          setCartItem((prev)=> prev +=1)  
       } catch(error){
          console.log(error)
       }

       try{
        const response = await fetch(`/api/users/${session?.user.id}/cart`,
        {
          method: "DELETE"
        });
        setCartItem((prev)=> prev +=1)
        router.push('/Profile')
       }catch(err){
        console.log(err)
       }
      }}

      useEffect(() => {
        paymenyAutorised()
      }, [gpayInfo])
      
      
  //no items in the cart --------------------
  if(userCart?.length === 0){
     return(
         <div className="flex flex-col items-center text-[3rem] text-[#d7d7d7]">
            <h1>Your Cart is emty</h1>
            <Link className="underline decoration-[#172b0d]" href="/Products">Back to shopping?</Link>
         </div>
        )}


  //showing the cart -----------
  return (
    <section className="flex flex-col xl:flex-row xl:mx-[10%] 2xl:mx-[20%] mx-4
     xl:gap-8 gap-4 items-center justify-center">

        <div className="flex flex-col gap-4 items-center justify-center w-full">
        {userCart && uniqueCart.map(item=>{return(
            <div key={item._id} className="flex justify-between items-center w-full
            xl:text-[2rem] text-[1.3rem] text-[#d7d7d7] bg-[#172b0d] rounded-lg pr-4 border-2 border-[#d5e8b8]">

                <div className="flex justify-between items-center gap-x-4">
                <Image src={item.img} height={90} width={90} alt={item.id} className="w-[90px] h-[90px] rounded-l-lg"/>
                <h1>{item.id}  ({userCart.filter(cart => cart.id===item.id).length}x)</h1>
                </div>

                <div className="flex justify-between items-center gap-x-4">
                <p>${item.price}</p>
                <button onClick={()=> removeHandler(item)}>
                    <Image src="/assets/remove.png" height={36} width={36} alt="remove_item" />
                </button>
                </div>
            </div>
            )})}
            </div>

            <div className="flex flex-col gap-6 self-start bg-[#172b0d] rounded-lg p-8 border-2 border-[#d5e8b8] 
            xl:text-[2rem] text-[1.3rem] text-[#d7d7d7] xl:w-[50%] w-full xl:mt-0 mt-16">
                <p>Items in cart: {userCart?.length}</p>
                <p>Total Price: ${userCart?.reduce((a, c) => a + c.price, 0)}</p>
  

         <div id="gpay" className="self-center">
            <GooglePayButton
              environment="TEST"
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: "CARD",
                    parameters: {
                      allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                      allowedCardNetworks: ["MASTERCARD", "VISA"],
                    },
                    tokenizationSpecification: {
                       type: "PAYMENT_GATEWAY",
                       parameters: {
                         gateway: "example",
                         gatewayMerchantId: "exampleGatewayMerchantId",
                       },
                     },
                   },
                     ],
                     merchantInfo: {
                       merchantId: "12345678901234567890",
                       merchantName: "Demo Merchant",
                     },
                    transactionInfo: {
                      totalPriceStatus: "FINAL",
                      totalPriceLabel: "Total",
                      totalPrice: `${userCart?.reduce((a, c) => a + c.price, 0)}`,
                      currencyCode: "USD",
                      countryCode: "US",
                    },
                    shippingAddressRequired: true,
                    callbackIntents: ["PAYMENT_AUTHORIZATION"],
                  }}
                  onLoadPaymentData={(paymentRequest) => {
                    // console.log(paymentRequest)
                  }}
                  onPaymentAuthorized={paymentData =>{
                    console.log(paymentData);
                    setGpayInfo("SUCCESS");
                    return { transactionState: 'SUCCESS'}
                  }}          
                  existingPaymentMethodRequired='false'
                  buttonColor="black"
                  buttonType="buy"
                  buttonSizeMode="fill"
                  style={{width: 270, height: 48}}
              >
              </GooglePayButton>
              </div>
            </div>


    </section>
  )
}

export default page

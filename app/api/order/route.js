import { connectToDB } from "@utils/database"
import Order from "@models/order"

export const POST = async(request) =>{
    const {cart} = await request.json()

    try{
        await connectToDB();


        cart.forEach(element => {
           const newOrder = new Order({
            creator: element.creator ,
            cart: element.cart ,
            img: element.img ,
            id: element.id ,
            price: element.price ,
        })
         newOrder.save() 
         return new Response(JSON.stringify(newOrder), {status: 201})
        });
  
    } catch(error){
        return new Response("failed to send to cart")
    }
}
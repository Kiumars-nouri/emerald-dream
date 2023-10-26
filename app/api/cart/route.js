import { connectToDB } from "@utils/database"
import Cart from "@models/cart";

export const POST = async(request) =>{
    const {userId, cart, img, id, price} = await request.json()

    try{
        await connectToDB();
        const newCart = new Cart({creator: userId, cart, img, id, price})

        await newCart.save()
        return new Response(JSON.stringify(newCart), {status: 201})
    } catch(error){
        return new Response("failed to send to cart")
    }
}
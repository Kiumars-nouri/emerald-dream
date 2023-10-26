import Cart from "@models/cart";
import { connectToDB } from "@utils/database";

export const GET = async (request, {params}) => {
    try {
        await connectToDB()

        const carts = await Cart.find({
            creator: params.id
        })

        return new Response(JSON.stringify(carts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all items in cart", { status: 500 })
    }
} 



export const DELETE = async (request, {params}) => {
    try {
        await connectToDB()

        const carts = await Cart.deleteMany({
            creator: params.id
        })

        return new Response(JSON.stringify(carts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all items in cart", { status: 500 })
    }
} 
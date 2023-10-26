import Order from "@models/order";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const order = await Order.find({
            creator: params.id
        })

        return new Response(JSON.stringify(order), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}



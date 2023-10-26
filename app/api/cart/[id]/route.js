import Cart from "@models/cart";
import { connectToDB } from "@utils/database";


export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        await Cart.findByIdAndRemove(params.id);

        return new Response("Cart deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Cart", { status: 500 });
    }
};
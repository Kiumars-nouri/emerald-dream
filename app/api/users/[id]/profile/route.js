import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const user = await User.findById(params.id)
        if (!user) return new Response("User Not Found", { status: 404 });

        return new Response(JSON.stringify(user), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { fullname, country, city, zip, phone } = await request.json();

    try {
        await connectToDB();

        const existingUser = await User.findById(params.id);

        if (!existingUser) {
            return new Response("user not found", { status: 404 });
        }

        existingUser.fullname = fullname;
        existingUser.country = country;
        existingUser.city = city;
        existingUser.zip = zip;
        existingUser.phone = phone;


        await existingUser.save();

        return new Response("Successfully updated the user info", { status: 200 });
    } catch (error) {
        return new Response("Error Updating user info", { status: 500 });
    }
};

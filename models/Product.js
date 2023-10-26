import {Schema, model, models} from "mongoose";

const productSchema = new Schema(
{   category:{type: String, required: true},
    id:{type: String, required: true, unique: true},
    name:{type: String, required: true},
    price:{type: Number, required: true},
    material:{type: String, required: true},
},

{
    timestamps: true
}
)

const Product = models.Product || model("Product", productSchema);

export default Product;
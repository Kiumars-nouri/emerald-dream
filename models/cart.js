import {Schema, models, model} from "mongoose"

const CartSchema = new Schema({
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    cart: {
      type: String,
      required: [true, 'Cart is required.'],
    },
    img: {
      type: String,
      required: [true, 'img is required.'],
    },
    id: {
      type: String,
      required: [true, 'id is required.'],
    },
    price: {
      type: Number,
      required: [true, 'price is required.'],
    },
  });
  
  const Cart = models.Cart || model('Cart', CartSchema);
  
  export default Cart;
import {Schema, models, model} from "mongoose"

const OrderSchema = new Schema({
    creator: {
      type: String,
      required: [true, 'Creator is required.'],
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
  
  const Order = models.Order || model('Order', OrderSchema);
  
  export default Order;
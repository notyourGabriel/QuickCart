import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true, ref: "User"},
    items: [{
        products: {type: String, required: true, ref: "Products"},
        quantity: {type: Number, required: true}
    }],
    amount: {type: Number, required: true},
    address: {type: String, ref: "Address", required: true},
    status: {type: String, required: true, default: "Order Placed"},
    date : {type: Date, required: true},
})

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema)

export default Order;
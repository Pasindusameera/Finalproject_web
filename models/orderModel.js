const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  itemID: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  address: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      itemID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required: true,
      },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

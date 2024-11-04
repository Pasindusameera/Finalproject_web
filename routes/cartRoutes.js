const express = require("express");
const router = express.Router();
const {
  addItemToCart,
  getCartItems,
  removeItemFromCart,
  reduceItemQuantity,
} = require("../controllers/cartController");

router.post("/add", addItemToCart);
router.get("/:userID", getCartItems);
router.delete("/remove", removeItemFromCart);
router.put("/reduce", reduceItemQuantity); // New route to reduce quantity

module.exports = router;

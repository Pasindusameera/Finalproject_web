const express = require("express");
const router = express.Router();
const {
  addItemToWishlist,
  getWishlistItems,
  removeItemFromWishlist,
} = require("../controllers/wishlistController");

router.post("/add", addItemToWishlist);
router.get("/:userID", getWishlistItems);
router.delete("/remove", removeItemFromWishlist);

module.exports = router;

const Wishlist = require("../models/wishlistModel");

// Add item to wishlist
const addItemToWishlist = async (req, res) => {
  const { userID, itemID } = req.body;
  try {
    const wishlist = await Wishlist.findOne({ userID });
    if (wishlist) {
      if (!wishlist.items.includes(itemID)) {
        wishlist.items.push(itemID); // Add item if not already in wishlist
        await wishlist.save();
      }
    } else {
      const newWishlist = new Wishlist({ userID, items: [itemID] });
      await newWishlist.save();
    }
    res.status(201).json({ message: "Item added to wishlist" });
  } catch (error) {
    res.status(500).json({ error: "Error adding item to wishlist" });
  }
};

// Get all wishlist items for a user
const getWishlistItems = async (req, res) => {
  const { userID } = req.params;
  try {
    const wishlist = await Wishlist.findOne({ userID }).populate("items");
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ error: "Error fetching wishlist items" });
  }
};

// Remove item from wishlist
const removeItemFromWishlist = async (req, res) => {
  const { userID, itemID } = req.body;
  try {
    const wishlist = await Wishlist.findOne({ userID });
    wishlist.items = wishlist.items.filter(
      (item) => item.toString() !== itemID
    );
    await wishlist.save();
    res.status(200).json({ message: "Item removed from wishlist" });
  } catch (error) {
    res.status(500).json({ error: "Error removing item from wishlist" });
  }
};

module.exports = {
  addItemToWishlist,
  getWishlistItems,
  removeItemFromWishlist,
};

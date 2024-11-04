const Cart = require("../models/cartModel");

// Add an item to the cart
const addItemToCart = async (req, res) => {
  const { userID, itemID, quantity } = req.body;
  try {
    const cart = await Cart.findOne({ userID });
    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.itemID.toString() === itemID
      );
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity; // Update quantity if item exists
      } else {
        cart.items.push({ itemID, quantity }); // Add new item to cart
      }
      await cart.save();
    } else {
      const newCart = new Cart({ userID, items: [{ itemID, quantity }] });
      await newCart.save();
    }
    res.status(201).json({ message: "Item added to cart" });
  } catch (error) {
    res.status(500).json({ error: "Error adding item to cart" });
  }
};

// Get all cart items for a user
const getCartItems = async (req, res) => {
  const { userID } = req.params;
  try {
    const cart = await Cart.findOne({ userID }).populate("items.itemID");
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cart items" });
  }
};

// Remove an item from the cart
const removeItemFromCart = async (req, res) => {
  const { userID, itemID } = req.body;
  try {
    const cart = await Cart.findOne({ userID });
    cart.items = cart.items.filter((item) => item.itemID.toString() !== itemID);
    await cart.save();
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "Error removing item from cart" });
  }
};


const reduceItemQuantity = async (req, res) => {
  const { userID, itemID, quantity } = req.body; // `quantity` specifies how much to reduce by

  try {
    
    const cart = await Cart.findOne({ userID });

    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.itemID.toString() === itemID
      );

      if (itemIndex > -1) {
        // Check if reducing quantity will make it zero or negative
        const newQuantity = cart.items[itemIndex].quantity - quantity;

        if (newQuantity <= 0) {
          // If quantity is zero or less, remove the item from the cart
          cart.items.splice(itemIndex, 1);
        } else {
          // Otherwise, just update the quantity
          cart.items[itemIndex].quantity = newQuantity;
        }

        await cart.save();
        return res.status(200).json({ message: "Item quantity updated", cart });
      } else {
        return res.status(404).json({ error: "Item not found in cart" });
      }
    } else {
      return res.status(404).json({ error: "Cart not found" });
    }
  } catch (error) {
    console.error("Error reducing item quantity:", error);
    res.status(500).json({ error: "Error reducing item quantity" });
  }
};

module.exports = {
  addItemToCart,
  getCartItems,
  removeItemFromCart,
  reduceItemQuantity,
};

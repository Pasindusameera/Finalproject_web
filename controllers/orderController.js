const Order = require("../models/orderModel");

// Add a new order
const addOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      customerName: req.body.customerName,
      itemID: req.body.itemID,
      quantity: req.body.quantity,
      totalPrice: req.body.totalPrice,
      address: req.body.address,
    });

    // Save the order 
    await newOrder.save();
    res.status(201).json({ message: "Order added successfully!" });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while adding the order." });
  }
};

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: "An error occurred while retrieving orders." });
  }
};

module.exports = {
  addOrder,
  getOrders,
};

const Item = require("../models/itemModel");

// Function to fetch all items
const getItems = async (req, res) => {
    try {
        const items = await Item.find(); 
        res.status(200).json(items); 
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Error fetching items" });
    }
};

// Function to add new item 
const addItem = async (req, res) => {
    const { name, price, details } = req.body; 

    const newItem = new Item({ name, price, details }); 

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(500).json({ message: "Error adding item", error: error.message }); // Include error message
    }
};

// Function to update an item
const updateItem = async (req, res) => {
    try {
        const { id } = req.params; // 
        const updateData = req.body; // Update the item with new data

        const updatedItem = await Item.findByIdAndUpdate(id, updateData, { new: true }); // Update the item

        if (!updatedItem) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.json(updatedItem); // Return updated item
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Function to delete an item
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.status(204).send(); 
    } catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { addItem, getItems, updateItem, deleteItem };

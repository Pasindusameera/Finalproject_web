const express = require('express');
const { addItem, getItems, updateItem, deleteItem } = require('../controllers/itemController');
const router = express.Router();

// add a new item
router.post('/', addItem);

//  fetch all items
router.get('/', getItems);

// update an existing item by ID
router.put('/:id', updateItem);

// DELETE 
router.delete('/:id', deleteItem);

module.exports = router;

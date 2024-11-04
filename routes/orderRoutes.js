const express = require("express");
const router = express.Router();
const { addOrder, getOrders } = require("../controllers/orderController");


router.post("/add", addOrder);
router.get("/", getOrders);

module.exports = router;

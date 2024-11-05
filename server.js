// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { registerUser, loginUser } = require("./controllers/userController");
const itemRoutes = require("./routes/itemRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", (err) => {
  console.error("MongoDB connection error", err);
});
db.once("open", () => {
  console.log("MongoDB is connected");
});

// Routes
app.post("/register", registerUser);
app.post("/login", loginUser);

// Change the API base path for items to match your Flutter fetch call
app.use("/items", itemRoutes); // Corrected to "/items" for direct access
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

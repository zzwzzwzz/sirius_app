require("dotenv").config();

const express = require('express');
const cors = require('cors');
const emotionRoutes = require('./routes/emotionRoutes'); // Import emotion routes

const mongoose = require("mongoose");

 

// check
console.log("MONGO_URI:", process.env.MONGO_URI);
const MONGO_URI = process.env.MONGO_URI;

// Initialize the app
const app = express();

// Set up middleware
app.use(cors());  // Allow frontend requests
app.use(express.json());  // Middleware to parse JSON requests

// Routes
app.use('/api/emotions', emotionRoutes); // Use the emotion tracking routes

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, this is the back-end of your web app!');
});

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


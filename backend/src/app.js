const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const emotionRoutes = require('./routes/emotionRoutes'); // Import emotion routes

// Load environment variables
dotenv.config();

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

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
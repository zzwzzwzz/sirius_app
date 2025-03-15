const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Set up middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, this is the back-end of your web app!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

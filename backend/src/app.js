require("dotenv").config();


const express = require('express');
const path = require("path");
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
app.use(express.static(path.resolve(__dirname, "../../public"))); // Serve static files

// Sample route
app.get('/', (req, res) => {
    res.sendFile(this.path.resolve(__dirname, '../public/checkHistory.html'));
});

app.get('/Questions', (req, res) => {
    res.sendFile(this.path.resolve(__dirname, '../public/guidingQuestion.html'));
});

app.get('/identifyEmo', (req, res) => {
    res.sendFile(this.path.resolve(__dirname, '../public/identifyEmo.html'));
});

app.get('/', (req, res) => {
    res.sendFile(this.path.resolve(__dirname, '../public/sirius_app/public/reflection.html'));
});

app.get('/', (req, res) => {
    res.sendFile(this.path.resolve(__dirname, '../public/sirius_app/public/show-gift'));
});

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

//api to save user submission
app.post("/log", async (req, res) => {
    try {
        const { eventId, selection, description, category, sliders } = req.body;

        const newEvent = new Event({ eventId, selection, description, category, sliders });
        await newEvent.save();

        res.status(201).json({ message: "Event data saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error saving event data" });
    }
});
    
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


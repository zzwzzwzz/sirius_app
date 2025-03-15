let emotions = []; // Temporary in-memory storage (replace with DB later)

const Emotion = require("../models/Emotion");

// Log a new emotion to MongoDB
const logEmotion = async (req, res) => {
    try {
        const { emotion } = req.body;

        // Create and save the emotion to MongoDB
        const newEmotion = new Emotion({ emotion });
        await newEmotion.save();

        res.status(201).json({ message: "Emotion logged successfully", emotion: newEmotion });
    } catch (error) {
        res.status(500).json({ error: "Failed to log emotion", details: error.message });
    }
};

// Delete all emotions 
const deleteAllEmotions = async (req, res) => {
    try {
        await Emotion.deleteMany({}); // Delete all documents (tuples)
        res.json({ message: "All emotions deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete emotions", details: error.message });
    }
};

module.exports = { logEmotion, deleteAllEmotions };
let emotions = []; // Temporary in-memory storage (replace with DB later)

const Emotion = require("../models/Emotion");

// Log a new emotion to MongoDB
const logEmotion = async (req, res) => {
    try {
        const { emotion, triggerEvent, physicalReactions, reflection } = req.body;

        // Create and save the emotion to MongoDB
        const newEmotion = new Emotion({ emotion, triggerEvent, physicalReactions, reflection });
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

// Get all emotions
const getAllEmotions = async (req, res) => {
    try {
        const emotions = await Emotion.find({}); // Fetch all documents
        res.json(emotions);
    } catch (error) {
        console.error("❌ Error fetching emotions:", error);
        res.status(500).json({ error: "Failed to fetch emotions", details: error.message });
    }
};

// Get all uncompleted emotions (where reflection is missing)
const getUncompletedEmotions = async (req, res) => {
    try {
        const uncompletedEmotions = await Emotion.find({ 
            $or: [{ reflection: null }, { reflection: "" }] // Find missing or empty reflections
        });
        res.json(uncompletedEmotions);
    } catch (error) {
        console.error("❌ Error fetching uncompleted emotions:", error);
        res.status(500).json({ error: "Failed to fetch uncompleted emotions", details: error.message });
    }
};

module.exports = { logEmotion, deleteAllEmotions, getAllEmotions, getUncompletedEmotions };
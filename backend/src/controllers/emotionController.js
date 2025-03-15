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


// Get all records with the same emotion
const getEmotionsByType = async (req, res) => {
    try {
        const { emotion } = req.params; // Get the emotion from the URL
        const matchingEmotions = await Emotion.find({ emotion: emotion }); // Find all records with this emotion

        if (matchingEmotions.length === 0) {
            return res.status(404).json({ message: "No records found for this emotion." });
        }

        res.json(matchingEmotions);
    } catch (error) {
        console.error("❌ Error fetching emotions by type:", error);
        res.status(500).json({ error: "Failed to fetch emotions", details: error.message });
    }
};

// Update reflection for a specific emotion record
const updateReflection = async (req, res) => {
    try {
        let id = req.params.id; // Get record's unique ID from URL
        const { reflection } = req.body; // Get the new reflection from request body
        if (id.startsWith(':')) {
            id = id.substring(1); // Remove the colon
        }

        // Ensure reflection is provided
        if (!reflection) {
            return res.status(400).json({ error: "Reflection field is required" });
        }

        // Find the record by ID and update the reflection field
        const updatedEmotion = await Emotion.findByIdAndUpdate(
            id,
            { reflection: reflection },
            { new: true } // Return the updated document
        );

        if (!updatedEmotion) {
            return res.status(404).json({ error: "Emotion record not found" });
        }

        res.json({ message: "Reflection updated successfully", emotion: updatedEmotion });
    } catch (error) {
        console.error("❌ Error updating reflection:", error);
        res.status(500).json({ error: "Failed to update reflection", details: error.message });
    }
};

module.exports = { logEmotion, deleteAllEmotions, getAllEmotions, getUncompletedEmotions, getEmotionsByType, updateReflection };
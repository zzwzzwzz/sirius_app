let emotions = []; // Temporary in-memory storage (replace with DB later)

const Emotion = require("../models/Emotion");

// Log a new emotion to MongoDB only with emotion input
const logEmotion = async (req, res) => {
    //console.log("Incoming request body:", req.body); // Debugging line
    try {
        const { emotion } = req.body;
        //console.log("Extracted emotion:", emotion); // Log the extracted emotion

        // Create and save the emotion to MongoDB
        const newEmotion = new Emotion({ emotion });
        //console.log("Extracted emotion:", emotion); // Log the extracted emotion
        await newEmotion.save();
        //console.log("Extracted emotion:", emotion); // Log the extracted emotion

        res.status(201).json({ message: "Emotion logged successfully", emotion: newEmotion });
    } catch (error) {
        res.status(500).json({ error: "Failed to log emotion", details: error.message });
    }
};

// Update emotion with trigger and physicalReaction
const updateTriAndPhy = async (req, res) => {
    try {
        let id = req.params.id; // Get record's unique ID from URL
        const { triggerEvent, physicalReactions } = req.body; // Get the new reflection from request body

        // Ensure triggerEvent is provided
        if (!triggerEvent) {
            return res.status(400).json({ error: "Trigger event field is required" });
        }

        // Ensure physical reactions is provided
        if (!physicalReactions) {
            return res.status(400).json({ error: "Physical reactions field is required" });
        }

        // Find the record by ID and update the fields
        const updatedEmotion = await Emotion.findByIdAndUpdate(
            id,
            {
                triggerEvent: triggerEvent,
                physicalReactions: physicalReactions
            },
            { new: true } // Return the updated document
        );

        if (!updatedEmotion) {
            return res.status(404).json({ error: "Emotion record not found" });
        }

        res.json({ message: "Details updated successfully", emotion: updatedEmotion });
    } catch (error) {
        console.error("❌ Error updating details:", error);
        res.status(500).json({ error: "Failed to update details", details: error.message });
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

// Get the newest reflection of the same emotion
const getGift = async (req, res) => {
    try {
        const { emotion } = req.params; // Get the emotion from the URL

        console.log(`Looking for reflections with emotion: '${emotion}'`);

        // Debug: Check what emotions exist in the database
        const allEmotions = await Emotion.distinct('emotion');
        console.log('All emotions in database:', allEmotions);


        // // debug findOne
        // const emotionsWithRef = await Emotion.findOne(
        //     { emotion: emotion, reflection: { $exists: true, $ne: "" } }
        // )
        //     .sort({ timestamp: -1})
        //     .exec();
        // console.log("what i found:" + emotionsWithRef);

        // // Find the latest record with the given emotion and a non-empty reflection
        // const latestEmotion = await Emotion.findOne(
        //     { emotion: emotion, reflection: { $exists: true, $ne: "" } } // Ensure reflection exists and is not empty
        // )
        //     .sort({ timestamp: -1 }) // Sort by timestamp in descending order (newest first)
        //     .exec();

        const matchingEmotions = await Emotion.find({ emotion: emotion })
            .sort({ timestamp: -1 }) // Sort by newest first
            .exec();
        const latestEmotion = matchingEmotions.find(e => e.reflection && e.reflection.trim() !== "");

        if (!latestEmotion) {
            return res.status(404).json({ message: "You haven't stored any reflections yet, but that's okay! 🌱 Every moment is a new chance to grow. Why not take a deep breath and write your first reflection today? 💙" });
        }
        console.log("gift found: " + latestEmotion);

        res.json({ reflection: latestEmotion.reflection });
    } catch (error) {
        console.error("❌ Error fetching latest reflection by emotion:", error);
        res.status(500).json({ error: "Failed to fetch latest reflection", details: error.message });
    }
}

// Update reflection for a specific emotion record
const updateReflection = async (req, res) => {
    try {
        let id = req.params.id; // Get record's unique ID from URL
        const { reflection } = req.body; // Get the new reflection from request body

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

module.exports = { logEmotion, updateTriAndPhy, deleteAllEmotions, getAllEmotions, getUncompletedEmotions, getEmotionsByType, getGift, updateReflection };
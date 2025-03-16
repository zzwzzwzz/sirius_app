const mongoose = require("mongoose");

const allowedReactions = [
    "increased heart rate",
    "shaking"
];

const allowedEmotions = [
    "Happy",
    "Sad",
    "Jealous"
];

const emotionSchema = new mongoose.Schema({
    emotion: { type: String, enum: allowedEmotions, required: true },
    triggerEvent: { type: String, default: "" },
    physicalReactions: { 
        type: [String], // An array of strings
        enum: allowedReactions, // Restrict values to predefined list
        default: []
    },
    reflection: { type: String, default: null },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Emotion", emotionSchema);

const mongoose = require("mongoose");

const allowedReactions = [
    "increased heart rate",
    "shaking"
];

const allowedEmotions = [
    "happy",
    "sad",
    "jealous"
];

const emotionSchema = new mongoose.Schema({
    emotion: { type: String, enum: allowedEmotions, required: true },
    triggerEvent: { type: String, required: true },
    physicalReactions: { 
        type: [String], // An array of strings
        enum: allowedReactions, // Restrict values to predefined list
        required: true
    },
    reflection: { type: String },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Emotion", emotionSchema);

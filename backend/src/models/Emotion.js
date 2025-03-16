const mongoose = require("mongoose");

const allowedReactions = [
    "increased heart rate",
    "shaking"
];

const allowedEmotions = [
    "Happy", "Sad", "Excited", "Angry", "Nervous", "Calm", "Surprised", "Frustrated",
    "Joyful", "Anxious", "Jealous", "Guilty", "Lonely", "Grateful", "Overwhelmed",
    "Confident", "Embarrassed", "Proud", "Hopeful", "Regretful", "Rejected", "Worried",
    "Loving", "Shy", "Disappointed", "Optimistic", "Resentful", "Hesitant"
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

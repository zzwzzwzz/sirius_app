const mongoose = require("mongoose");

const allowedReactions = [
    'Racing heart',
    'Sweating',
    'Shaking',
    'Tight chest',
    'Lump in throat',
    'Hot/cold flashes',
    'Fatigue',
    'Nausea',
    'Dizziness'
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
    physicalReactions: [{
        reaction: { type: String, enum: allowedReactions, required: true }, // The reaction name
        intensity: { type: Number, min: 0, max: 10, required: true } // Intensity level (0-10)
    }],
    reflection: { type: String, default: null },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Emotion", emotionSchema);

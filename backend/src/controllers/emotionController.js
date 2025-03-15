let emotions = []; // Temporary in-memory storage (replace with DB later)

// Log a new emotion
const logEmotion = (req, res) => {
    const { emotion, userId } = req.body;
    const newEmotion = { id: emotions.length + 1, userId, emotion, timestamp: new Date() };
    emotions.push(newEmotion);
    res.status(201).json({ message: "Emotion logged successfully", emotion: newEmotion });
    
};

module.exports = { logEmotion };
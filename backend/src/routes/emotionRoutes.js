const express = require('express');
const { logEmotion, deleteAllEmotions } = require("../controllers/emotionController");

const router = express.Router();

// Sample API endpoint
router.get('/data', (req, res) => {
    res.json({ message: 'Here is some sample data from the back-end!' });
});

router.post("/log", logEmotion); // Log an emotion

router.delete("/deleteAll", deleteAllEmotions);

module.exports = router;

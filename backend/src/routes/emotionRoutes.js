const express = require('express');
const { logEmotion, deleteAllEmotions, getAllEmotions, getUncompletedEmotions, getEmotionsByType } = require("../controllers/emotionController");

const router = express.Router();

// Sample API endpoint
router.get('/data', (req, res) => {
    res.json({ message: 'Here is some sample data from the back-end!' });
});

router.post("/log", logEmotion); // Log an emotion

router.delete("/deleteAll", deleteAllEmotions); // delete all documents

router.get("/all", getAllEmotions); // fetch all documents

router.get("/uncompleted", getUncompletedEmotions); // fetch all documents without reflection

router.get("/type/:emotion", getEmotionsByType); // fetch all past records under same emotion

module.exports = router;

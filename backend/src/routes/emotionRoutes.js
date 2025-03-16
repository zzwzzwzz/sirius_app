const express = require('express');
const { logEmotion, updateTriAndPhy, deleteAllEmotions, getAllEmotions, getUncompletedEmotions, getEmotionsByType, updateReflection, getGift } = require("../controllers/emotionController");

const router = express.Router();

// Sample API endpoint
router.get('/data', (req, res) => {
    res.json({ message: 'Here is some sample data from the back-end!' });
});

router.post("/log", logEmotion); // Log an emotion

router.put("/updateTriAndPhy", updateTriAndPhy); // update trigger event and physical reactions

router.delete("/deleteAll", deleteAllEmotions); // delete all documents

router.get("/all", getAllEmotions); // fetch all documents

router.get("/uncompleted", getUncompletedEmotions); // fetch all documents without reflection

router.get("/type/:emotion", getEmotionsByType); // fetch all past records under same emotion

router.get("/unwrap/:emotion", getGift);

router.put("/updateReflection", updateReflection); // update reflection of a record with specific id

module.exports = router;

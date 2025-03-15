const express = require('express');
const router = express.Router();

// Sample API endpoint
router.get('/data', (req, res) => {
    res.json({ message: 'Here is some sample data from the back-end!' });
});

module.exports = router;

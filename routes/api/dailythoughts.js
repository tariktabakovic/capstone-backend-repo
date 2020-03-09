const express = require('express');
const router = express.Router();

// DailyThought model
const DailyThought = require('../../models/DailyThoughts');

// @route GET api/dailythoughts
// @desc Get All dailythoughts
// @access Public

router.get('/', (req, res)=> {
    DailyThought.find()
        .sort({date: -1})
        .then(DailyThoughts => res.json(DailyThoughts))
});

module.exports = router;
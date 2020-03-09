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

// @route POST api/dailythoughts
// @desc Create a dailythought
// @access Public

router.post('/', (req, res)=> {
    const newDailyThought = new DailyThought({
        name: req.body.name
    });
    newDailyThought.save().then(DailyThought => res.json(DailyThought));
});

module.exports = router;
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

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
// @access Private

router.post('/', auth, (req, res)=> {
    const newDailyThought = new DailyThought({
        name: req.body.name
    });
    newDailyThought.save().then(DailyThought => res.json(DailyThought));
});

// @route POST api/dailythoughts/:id
// @desc Delete a dailythought
// @access Private

router.delete('/:id', auth, (req, res)=> {
    DailyThought.findById(req.params.id)
        .then(DailyThought => DailyThought.remove().then(()=>res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});
    
module.exports = router;
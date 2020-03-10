const express = require('express');
const router = express.Router();
// User Model
const User = require('../../models/User');


/**
 * @route   POST api/users
 * @desc    Get all users
 * @access  Private
 */

router.post('/', (req, res) =>{
    res.send('register');
})

module.exports = router;
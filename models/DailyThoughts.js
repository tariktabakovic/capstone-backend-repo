const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DailyThoughtSchema = new Schema ({
    thought: {
        type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
    }
})
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import {Schema, model} from 'mongoose';

// Create Schema
const DailyThoughtSchema = new Schema ({
    name: {
            type: String,
            required: true
        },
    date: {
        type: Date,
        default: Date.now
    }
});

// const DailyThought = model('dailythought', DailyThoughtSchema);
// export default DailyThought;
module.exports = DailyThought = mongoose.model('dailythought', DailyThoughtSchema);
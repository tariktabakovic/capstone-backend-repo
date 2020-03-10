const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const config = require('config');

app.use(express.json());
app.use(bodyParser.json());

// DB Config
const db = config.get('mongoURI');

// DB connect
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(()=> console.log('Mongo DB connected'))
    .catch(err=> console.log(err))

// Use Routes
app.use('/api/dailythoughts', require('./routes/api/dailythoughts'));
app.use('/api/users', require('./routes/api/users'));

const port=process.env.PORT || 5000;

// app.use('/api/users', require('./routes/api/users'));

app.listen(port, ()=> console.log(`Server started on port ${port}`))


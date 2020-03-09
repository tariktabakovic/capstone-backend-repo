const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

const dailythoughts = require('./routes/api/dailythoughts');

app.use(express.json());
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// DB connect
mongoose
    .connect(db)
    .then(()=> console.log('Mongo DB connected'))
    .catch(err=> console.log(err))
    
const port=process.env.PORT || 5000;

app.use('/api/users', require('./routes/api/users'));

app.listen(port, ()=> console.log(`Server started on port ${port}`))


const express = require('express');
const mongoose = require('mogoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const PORT = 3000; 
const app = express();

let pool = new pg.Pool ({
    user: 'tarik',
    database: 'capstone-database',
    password: 'tarik',
    host: 'localhost',
    port: 5432,
    max: 10
});

pool.connect((err, db, done)=> {
    if(err){
        return console.log(err);
    } 
    else {
        db.query('SELECT * from users', (err, table) => {
            done();
            if(err){
                return console.log(err)
            }
            else{
                console.log(table.rows)
            }
        })
    }
})


app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// 
mongoose
    .connect(db)
    .then(()=> console.log('Mongo DB connected'))
    .catch(err=> console.log(err))
    
const port=process.env.PORT || 5000;


app.listen(port, ()=> console.log(`Server started on port ${port}`))


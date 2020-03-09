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
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/new-account', function(request, respnse){
    console.log(request.body);
});
app.listen(PORT, () => console.log('listening on port' + PORT)); 
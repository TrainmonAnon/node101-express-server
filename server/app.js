// import files and packages up here
const express = require('express');
const logger = require('morgan');

const data = require('./data.json');

// create your express server below
var app = express();

// add your routes and middleware below
app.get('/', (req, res) => {
    res.send('index');
});

app.get('/data', (req, res) => {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
});

app.use(logger('dev'));

// finally export the express application
module.exports = app;

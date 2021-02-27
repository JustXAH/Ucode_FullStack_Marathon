// load the things we need
const express = require('express');
const app = express();

const PORT = 8000;

const normal = require('./normal-router')
const quantum = require('./quantum-router')

const normalTime = normal.calculateTime();
const quantumTime = quantum.calculateTime();

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// index page
app.get('/', (req, res) => {
    res.render('./index')
});

// normal time page
app.get('/normal_time', (req, res) => {
    res.render('normal', {
        year: normalTime.years(),
        month: normalTime.months(),
        day: normalTime.days()
    });
});

// quantum time page
app.get('/quantum_time', (req, res) => {
    res.render('quantum', {
        year: quantumTime[0],
        month: quantumTime[1],
        day: quantumTime[2]
    });
});
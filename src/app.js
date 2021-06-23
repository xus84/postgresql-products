const express = require('express');
const app = express();
const IndexRoutes = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('hello bots')
})

app.use(IndexRoutes);



module.exports = app;
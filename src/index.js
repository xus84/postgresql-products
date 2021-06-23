const express = require('express');

const app = express();

app.listen('4000')
app.get('/', (req, res) => {
    res.send('hello bots')
})
console.log('Server on Port 4000')

module.exports = app;
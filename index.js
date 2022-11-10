require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Dentrexa server on running")
});

app.listen(port, (req, res) => {
    console.log(`Dentrexa server runnig on ${port}`);
})
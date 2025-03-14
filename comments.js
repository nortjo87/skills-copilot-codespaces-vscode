// Create web server

const express = require('express');
const app = express();
const port = 3000;

const comments = require('./comments');

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
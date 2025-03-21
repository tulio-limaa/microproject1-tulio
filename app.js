const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the JSON data
app.get('/data/data.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'data.json'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

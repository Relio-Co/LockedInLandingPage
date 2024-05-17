const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 80;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CSV Writer
const csvWriter = createCsvWriter({
    path: 'waitlist.csv',
    header: [
        {id: 'email', title: 'Email'}
    ],
    append: true
});

// Routes
app.post('/api/waitlist', (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).send('Email is required');
    }

    csvWriter.writeRecords([{ email }])
        .then(() => {
            res.status(200).send('Email added to waitlist');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error adding email to waitlist');
        });
});

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

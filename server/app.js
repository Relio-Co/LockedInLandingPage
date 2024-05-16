const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const csvWriter = createCsvWriter({
    path: 'waitlist.csv',
    header: [
        {id: 'email', title: 'Email'}
    ],
    append: true
});

app.post('/api/waitlist', (req, res) => {
    const email = req.body.email;

    csvWriter.writeRecords([{ email }])
        .then(() => {
            res.status(200).send('Email added to waitlist');
        })
        .catch(error => {
            res.status(500).send('Error adding email to waitlist');
        });
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

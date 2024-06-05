const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CSV Writer
const csvWriter = createCsvWriter({
    path: 'waitlist.csv',
    header: [
        {id: 'email', title: 'Email'},
        {id: 'timestamp', title: 'Timestamp'}
    ],
    append: true
});

// Route to get blog posts
app.get('/api/blog', (req, res) => {
    fs.readFile(path.join(__dirname, 'blogData.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading blog data');
        }
        res.send(JSON.parse(data));
    });
});

// Route to get a single blog post by ID
app.get('/api/blog/:id', (req, res) => {
    fs.readFile(path.join(__dirname, 'blogData.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading blog data');
        }
        const blogPosts = JSON.parse(data);
        const post = blogPosts.find(p => p.id === req.params.id);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.send(post);
    });
});

// Route to add new blog posts
app.post('/api/blog', (req, res) => {
    const newPost = req.body;
    if (!newPost.title || !newPost.content || !newPost.id) {
        return res.status(400).send('Title, content, and ID are required');
    }

    fs.readFile(path.join(__dirname, 'blogData.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading blog data');
        }

        const blogPosts = JSON.parse(data);
        blogPosts.push(newPost);

        fs.writeFile(path.join(__dirname, 'blogData.json'), JSON.stringify(blogPosts, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving blog post');
            }
            res.status(200).send('Blog post added successfully!');
        });
    });
});

// Routes
app.post('/api/waitlist', (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).send('Email is required');
    }

    const timestamp = new Date().toISOString();
    
    csvWriter.writeRecords([{ email, timestamp }])
        .then(() => {
            res.status(200).send('Email added to waitlist!');
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

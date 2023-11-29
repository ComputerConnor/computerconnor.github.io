const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Create SQLite database and table
const db = new sqlite3.Database('raffle.db');
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY, name TEXT, email TEXT)');
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Define paths using path.join for better cross-platform compatibility
const indexPath = path.join(__dirname, 'views', 'index.html');
const pickRandomPath = path.join(__dirname, 'views', 'pick_random.html');

app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.get('/pick_random', (req, res) => {
    res.sendFile(pickRandomPath);
});

app.get('/view_entries', (req, res) => {
    db.all('SELECT * FROM entries ORDER BY name ASC', (err, rows) => {
        if (err) {
            console.error('Error retrieving entries:', err);
            res.status(500).json({ message: 'An error occurred. Please try again later.' });
        } else {
            res.json({ entries: rows });
        }
    });
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    // Insert data into the database
    db.run('INSERT INTO entries (name, email) VALUES (?, ?)', [name, email], (err) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ message: 'An error occurred. Please try again later.' });
        } else {
            res.json({ message: 'Form submitted successfully! You are now entered into the raffle.' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

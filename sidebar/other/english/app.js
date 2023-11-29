const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Create SQLite database and table
const db = new sqlite3.Database('raffle.db');
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY, name TEXT, email TEXT)');
});

app.use(bodyParser.json());
app.use(express.static('public'));

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

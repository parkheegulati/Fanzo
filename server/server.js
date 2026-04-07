const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    } else {
        db.serialize(() => {
            // Create Users Table
            db.run(`CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                points INTEGER DEFAULT 0,
                isSeasonMember BOOLEAN DEFAULT false
            )`);
            
            // Insert dummy user if not exists
            db.run(`INSERT OR IGNORE INTO users (username, points, isSeasonMember) VALUES ('john_doe', 1250, true)`);
        });
    }
});

// Mock IoT Data for Density
let densities = {
    'North Gate': 'green',
    'South Gate': 'red',
    'East Gate': 'yellow',
    'West Gate': 'green',
    'Section 101-105 Concessions': 'yellow',
    'Section 106-110 Restrooms': 'green',
};

setInterval(() => {
    const keys = Object.keys(densities);
    const statuses = ['green', 'yellow', 'red'];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    densities[randomKey] = randomStatus;
}, 5000);

// API Routes

// 1. Auth Endpoint
app.post('/api/auth/login', (req, res) => {
    const { username } = req.body;
    
    if (!username) {
        return res.status(400).json({ error: "Username is required" });
    }

    // In a real application, perform password verification here. Demo auto-registers/verifies username.
    const normalizedUsername = username.toLowerCase().replace(/[^a-z0-9_]/g, '');

    db.get('SELECT * FROM users WHERE username = ?', [normalizedUsername], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        
        if (row) {
            // Existing user
            res.json({ message: "Login successful", user: row, token: "mock_jwt_token_123" });
        } else {
            // Auto register for demo purposes
            db.run('INSERT INTO users (username, points) VALUES (?, ?)', [normalizedUsername, 500], function(err) {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ message: "Registered new user", user: { id: this.lastID, username: normalizedUsername, points: 500, isSeasonMember: false }, token: "mock_jwt_token_123" });
            });
        }
    });
});

// 2. Fetch User Profile
app.get('/api/users/:username', (req, res) => {
    const { username } = req.params;
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "User not found" });
        res.json(row);
    });
});

// 3. Stadium Live Density Endpoint
app.get('/api/stadium/density', (req, res) => {
    // Send current density snapshot
    res.json(densities);
});

// 4. Group Sync Endpoint
app.get('/api/social/friends', (req, res) => {
    // In a real app this would query the friendship table. Mocking for demonstration realness.
    res.json([
        { name: 'Sarah Jenkins', location: 'Section 104, Row G', isHere: true, avatar: 'SJ' },
        { name: 'Mike Torres', location: 'North Gate Concessions', isHere: true, avatar: 'MT' },
        { name: 'Alex Rivera', location: 'Arriving in 10 mins', isHere: false, avatar: 'AR' }
    ]);
});

// === Production Deployment Configuration ===
// Serve static React frontend files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all route to serve React's index.html for unknown routes (Client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Run
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Create 'users' table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

module.exports = db;

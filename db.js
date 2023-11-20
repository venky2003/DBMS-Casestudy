const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'casetudy1.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      f_name TEXT,
      i_name TEXT,
      password TEXT,
      gender TEXT,
      martial TEXT,
      DOB DATE,
      ans TEXT,
      Mobile TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      train_no TEXT,
      train_name TEXT,
      origin TEXT,
      destination TEXT,
      arrival TIME,
      doj DATE,
      class TEXT,
      tatkal INTEGER,
      seat_type TEXT
    )
  `);
});

module.exports = db;

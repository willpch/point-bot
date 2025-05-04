const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./pontos.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS pontos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      data TEXT,
      pontos INTEGER
    )
  `);
});

module.exports = db;

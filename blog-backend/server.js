// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db'); // Import the database connection

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Route to get posts, with optional category filtering
app.get('/api/posts', (req, res) => {
  const { category } = req.query;
  let sql = 'SELECT * FROM posts';

  if (category) {
    sql += ' WHERE category = ?';
  }

  db.query(sql, [category], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Other routes remain the same

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
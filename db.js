// db.js
const mysql = require('mysql2');

// Create the connection to the database
const connection = mysql.createConnection({
  host: 'localhost',     // Replace with your database host
  user: 'root',          // Replace with your database user
  password: 'yourpassword',  // Replace with your database password
  database: 'blog'       // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;
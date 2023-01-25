const mysql = require('mysql2/promise');

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'gifts_santa',
    port: 3307,
    namedPlaceholders: true,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  module.exports = {
    conn
  }

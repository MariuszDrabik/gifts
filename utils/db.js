import mysqlPromise from "mysql2/promise.js";


const conn = await mysqlPromise.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'gifts_santa',
    port: 3307,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  export {
    conn
  }

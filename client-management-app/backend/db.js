const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // your MySQL username
  password: 'Welcome123',        // your MySQL password
  database: 'client_managmysqement'
});

connection.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL connected');
});

module.exports = connection;

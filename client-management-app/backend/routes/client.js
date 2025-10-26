const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all clients
router.get('/', (req, res) => {
  db.query('SELECT * FROM clients', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add new client
router.post('/', (req, res) => {
  const { client_name, project_name, contact_email } = req.body;
  db.query(
    'INSERT INTO clients (client_name, project_name, contact_email) VALUES (?, ?, ?)',
    [client_name, project_name, contact_email],
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, ...req.body });
    }
  );
});

module.exports = router;

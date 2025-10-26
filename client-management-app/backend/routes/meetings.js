const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query(
    'SELECT m.*, c.client_name FROM meetings m JOIN clients c ON m.client_id = c.client_id',
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

router.post('/', (req, res) => {
  const { client_id, meeting_date, topic } = req.body;
  db.query(
    'INSERT INTO meetings (client_id, meeting_date, topic) VALUES (?, ?, ?)',
    [client_id, meeting_date, topic],
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, ...req.body });
    }
  );
});

module.exports = router;

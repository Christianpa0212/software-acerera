const db = require('../config/db/db');

const runQuery = (sql, params = [], res, single = false) => {
  db.query(sql, params, (err, rows) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }

    if (single && rows.length === 0) {
      return res.status(404).json({ error: 'No encontrado' });
    }

    return res.json(single ? rows[0] : rows);
  });
};

module.exports = runQuery;

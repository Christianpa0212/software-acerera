const db = require('../config/db/db');

const callProcedure = (procedureCall, params = [], res, successMsg = 'Operación exitosa') => {
  db.query(procedureCall, params, (err) => {
    if (err) {
      console.error('Error al ejecutar SP:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }

    return res.json({ message: successMsg });
  });
};

module.exports = callProcedure;

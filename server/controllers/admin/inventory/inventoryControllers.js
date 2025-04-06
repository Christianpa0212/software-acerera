const runQuery = require('../../../utils/queryHandler');

// GET - Inventario en eLon
exports.getLeonInventory = (req, res) => {
  runQuery('SELECT * FROM view_inventario_leon', [], res);
};

// GET - Inventario Salamanca
exports.getSalamancaInventory = (req, res) => {
  runQuery('SELECT * FROM view_inventario_salamanca', [], res);
};

// GET - Inventario Celaya
exports.getCelayaInventory = (req, res) => {
  runQuery('SELECT * FROM view_inventario_celaya', [], res);
};

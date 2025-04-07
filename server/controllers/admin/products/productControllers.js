const runQuery = require('../../../utils/queryHandler');
const callProcedure = require('../../../utils/procedureCaller');

// GET - Todos los productos
exports.getAllProducts = (req, res) => {
  runQuery('SELECT * FROM view_productos_admin', [], res);
};

// GET - Producto por ID
exports.getProductById = (req, res) => {
  const { id } = req.params;
  runQuery('SELECT * FROM view_producto_detalle WHERE id_product = ?', [id], res, true);
};

// POST - Crear producto
exports.createProduct = (req, res) => {
  const {
    product_name,
    classification,
    caliber,
    measure,
    base_price_kg,
    description
  } = req.body;

  const sql = 'CALL create_producto(?, ?, ?, ?, ?, ?)';
  const params = [
    product_name,
    classification,
    caliber,
    measure,
    base_price_kg,
    description
  ];

  callProcedure(sql, params, res);
};


// PUT - Actuallizar producto
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const {
    product_name,
    classification,
    caliber,
    measure,
    base_price_kg,
    description
  } = req.body;

  callProcedure(
    'CALL update_producto(?, ?, ?, ?, ?, ?)',
    [id, product_name, classification, caliber, measure, base_price_kg, description],
    res
  );
};

// DELETE - Eliminar producto
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  callProcedure('CALL delete_producto(?)', [id], res);
};

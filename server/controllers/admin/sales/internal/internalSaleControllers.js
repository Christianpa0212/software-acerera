const runQuery = require('../../../../utils/queryHandler');
const callProcedure = require('../../../../utils/procedureCaller');

// GET Todas
exports.getAllInternalSales = (req, res) => {
  runQuery('SELECT * FROM view_ventas_internas', [], res);
};

// GET Detalle
exports.getInternalSaleById = (req, res) => {
  const { id } = req.params;
  runQuery('SELECT * FROM view_detalle_venta_interna WHERE id_sale = ?', [id], res);
};

// POST Nueva Venta
exports.registerInternalSale = (req, res) => {
  const {
    id_client,
    created_by,
    id_branch,
    payment_method,
    total_amount,
    productos
  } = req.body;

  const sql = 'CALL registrar_venta_interna(?, ?, ?, ?, ?, ?)';
  const params = [
    id_client,
    created_by,
    id_branch,
    payment_method,
    total_amount,
    JSON.stringify(productos)
  ];

  callProcedure(sql, params, res);
};

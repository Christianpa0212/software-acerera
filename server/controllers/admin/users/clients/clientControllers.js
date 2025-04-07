const runQuery = require('../../../../utils/queryHandler');
const callProcedure = require('../../../../utils/procedureCaller');

//Todos los clientes
exports.getAllClients = (req, res) => {
  runQuery('SELECT * FROM view_clientes_admin', [], res);
};

//Cliente por id
exports.getClientById = (req, res) => {
  const { id } = req.params;
  runQuery('SELECT * FROM view_cliente_detalle WHERE id_client = ?', [id], res, true);
};

//Crear Cliente
exports.createClient = (req, res) => {
  const {
    first_name,
    paternal_name,
    maternal_name,
    phone_number,
    email,
    password,
    birth_date,
    client_type_id,
    price_type_id,
    agent_id,
    address,
    has_credit,
    credit_limit
  } = req.body;

  const sql = 'CALL create_cliente(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const params = [
    first_name,
    paternal_name,
    maternal_name,
    phone_number,
    email,
    password,
    birth_date,
    client_type_id,
    price_type_id,
    agent_id,
    address,
    has_credit,
    credit_limit
  ];

  callProcedure(sql, params, res, 'Cliente registrado correctamente');
};

//Actualizar cliente
exports.updateClient = (req, res) => {
  const { id } = req.params;
  const {
    first_name, paternal_name, maternal_name,
    phone_number, email, birth_date,
    client_type_id, price_type_id,
    agent_id, address, has_credit,
    credit_limit, credit_available
  } = req.body;

  callProcedure(
    'CALL update_cliente(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      id, first_name, paternal_name, maternal_name,
      phone_number, email, birth_date,
      client_type_id, price_type_id,
      agent_id, address, has_credit,
      credit_limit, credit_available
    ],
    res
  );
};

//Eliminar cliente
exports.deleteClient = (req, res) => {
  const { id } = req.params;
  callProcedure('CALL delete_cliente(?)', [id], res);
};

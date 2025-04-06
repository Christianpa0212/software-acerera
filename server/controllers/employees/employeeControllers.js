const runQuery = require('../../utils/queryHandler');
const callProcedure = require('../../utils/procedureCaller');

//Todos los empleados
exports.getAllEmployees = (req, res) => {
  runQuery('SELECT * FROM view_empleados_admin', [], res);
};

//Empleado por id
exports.getEmployeeById = (req, res) => {
  const { id } = req.params;
  runQuery('SELECT * FROM view_empleado_detalle WHERE id_employee = ?', [id], res, true);
};

//Editar empleado
exports.updateEmployee = (req, res) => {
  const { id } = req.params;
  const {
    first_name, paternal_name, maternal_name,
    phone_number, email, birth_date, role_id, branch_id
  } = req.body;

  callProcedure('CALL update_empleado(?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [id, first_name, paternal_name, maternal_name, phone_number, email, birth_date, role_id, branch_id],
    res,
  );
};

//Eliminar empleados
exports.deleteEmployee = (req, res) => {
  const { id } = req.params;
  callProcedure('CALL delete_empleado(?)', [id], res,);
};
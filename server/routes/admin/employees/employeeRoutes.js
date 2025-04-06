const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');
const { isAdmin } = require('../middlewares/authMiddleware');

// GET - Lista de empleados
router.get('/', isAdmin, employeeController.getAllEmployees);

// GET - Empleado por ID
router.get('/:id', isAdmin, employeeController.getEmployeeById);

// PUT - Actualizar empleado
router.put('/:id', isAdmin, employeeController.updateEmployee);

// DELETE - Eliminar emplseodo
router.delete('/:id', isAdmin, employeeController.deleteEmployee);

module.exports = router;

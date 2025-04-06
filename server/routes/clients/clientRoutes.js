const express = require('express');
const router = express.Router();

const clientController = require('../../../controllers');
const { isAdmin } = require('../middlewares/authMiddleware');

// GET - All clients
router.get('/', isAdmin, clientController.getAllClients);

// GET - Cliente por ID
router.get('/:id', isAdmin, clientController.getClientById);

// PUT - Actualizar cliente
router.put('/:id', isAdmin, clientController.updateClient);

// DELETE - Eliminar cleinte
router.delete('/:id', isAdmin, clientController.deleteClient);

module.exports = router;

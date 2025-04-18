const express = require('express');
const router = express.Router();

const clientController = require('../../../../controllers/admin/users/clients/clientControllers');
const { isAdmin } = require('../../../../middlewares/authMiddleware');

// GET - All clients
router.get('/', isAdmin, clientController.getAllClients);

// GET - Cliente por ID
router.get('/:id', isAdmin, clientController.getClientById);

// POST - crear cliente
router.get('/', isAdmin, clientController.createClient);

// PUT - Actualizar cliente
router.put('/:id', isAdmin, clientController.updateClient);

// DELETE - Eliminar cleinte
router.delete('/:id', isAdmin, clientController.deleteClient);

module.exports = router;

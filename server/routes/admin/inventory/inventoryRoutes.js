const express = require('express');
const router = express.Router();

const inventoryController = require('../../../controllers/admin/inventory/inventoryController');
const { isAdmin } = require('../../../middlewares/authMiddleware');

// Todas las rutas protegidas solo para admin
router.get('/leon', isAdmin, inventoryController.getLeonInventory);
router.get('/salamanca', isAdmin, inventoryController.getSalamancaInventory);
router.get('/celaya', isAdmin, inventoryController.getCelayaInventory);

module.exports = router;

const express = require('express');
const router = express.Router();

const internalSalesController = require('../../../../controllers/admin/sales/internal/internalSalesController');
const { isAdmin } = require('../../../../middlewares/authMiddleware');

// Ver todas las ventas internas
router.get('/', isAdmin, internalSalesController.getAllInternalSales);

// Ver detalle de una venta interna
router.get('/:id', isAdmin, internalSalesController.getInternalSaleById);

// Registrar una nueva venta interna
router.post('/', isAdmin, internalSalesController.registerInternalSale);

module.exports = router;

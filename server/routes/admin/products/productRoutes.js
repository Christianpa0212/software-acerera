const express = require('express');
const router = express.Router();

const productController = require('../../../controllers/admin/products/productController');
const { isAdmin } = require('../../../middlewares/authMiddleware');

// GET - Todos los productos
router.get('/', isAdmin, productController.getAllProducts);

// GET - Producto por id
router.get('/:id', isAdmin, productController.getProductById);

// PUT - Actualizar producto
router.put('/:id', isAdmin, productController.updateProduct);

// DELETE - eliminar producto
router.delete('/:id', isAdmin, productController.deleteProduct);

module.exports = router;

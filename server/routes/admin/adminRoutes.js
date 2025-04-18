const employeeRoutes = require('./users/employees/employeeRoutes');
const clientRoutes = require('./users/clients/clientRoutes');
const productRoutes = require('./products/productRoutes');
const inventoryRoutes = require('./inventory/inventoryRoutes');
const internalSaleRoutes = require('./sales/internalSaleRoutes');

app.use('/api/employees', employeeRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/products', productRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/sales', internalSaleRoutes);


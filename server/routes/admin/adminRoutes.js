const employeeRoutes = require('./users/employees/employeeRoutes');
const clientRoutes = require('./users/clients/clientRoutes');
const productRoutes = require('./products/productRoutes');

app.use('/api/employees', employeeRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/products', productRoutes);
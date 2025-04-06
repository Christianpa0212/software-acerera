const employeeRoutes = require('./users/employees/employeeRoutes');
const clientRoutes = require('./users/clients/clientRoutes');

app.use('/api/employees', employeeRoutes);
app.use('/api/clients', clientRoutes);

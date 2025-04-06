require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');

//Importación de la base de datos
require('./config/db/db');

const app = express();

//Middlewares de seguridad
app.use(helmet());
app.use(xss()); 
app.use(cors());    
app.use(morgan('dev'));  
app.use(express.json()); 

//anti-bruteforce
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

<<<<<<< HEAD
//Rutas de prueba o principales
=======
//Rutas de prueba
>>>>>>> 9ea0c9a6f3f489beb78eafa2341be27450fd22c7
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

//Inicializa el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto: ${PORT}`);
});

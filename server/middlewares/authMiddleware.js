//Middleware para verificar que es admin
exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      return next();
    }
    return res.status(403).json({ error: 'Acceso denegado: solo administradores' });
  };
  
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== 'production') {
  const { JWT_SECRET } = process.env;
} else {
  const JWT_SECRET = 'secreto';
}

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  const error = function () {
    res.status(403).send({ message: 'Se requiere autorización' });
  };

  if (!authorization || !authorization.startsWith('Bearer')) return error();

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = await jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return error();
  }

  req.user = payload;
  next();
};

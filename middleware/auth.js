const jwt = require('jsonwebtoken');
const config = require('config');

auth = (req, res, next) => {
  const currentJwt = req.header('x-auth-token');
  if (!currentJwt) return res.status(401).json({ message: 'Authorization denied (No token). ' });
  try {
    const decoded = jwt.verify(currentJwt, config.get('jwtSecret'));
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: 'Invalid token.' });
  }
}

module.exports = auth;
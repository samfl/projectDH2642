const jwt = require('jsonwebtoken');
const config = require('config');

auth = (req, res, next) => {

  // Get the current token from the x-auth-token header
  const currentJwt = req.header('x-auth-token');

  // token guard
  if (!currentJwt)
    return res.status(401).json({ message: 'Authorization denied (No token). ' });

  try {
    // Verify token
    const decoded = jwt.verify(currentJwt, config.get('jwtSecret'));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: 'Invalid token.' });
  }
}

module.exports = auth;
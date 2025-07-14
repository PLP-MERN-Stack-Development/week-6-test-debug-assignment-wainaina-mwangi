const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
}

module.exports = { generateToken };

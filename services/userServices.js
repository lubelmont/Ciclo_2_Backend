const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const errorMessage = 'El usuario o contraseña son incorrectos';

const userService = {
  
  async loginUserByEmail(email, password) {

    const user = await userModel.findByEmail(email);
    if (!user) {
      throw new Error(errorMessage);  
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error(errorMessage);
    }

    const userPayload = { id: user.id, email: user.email };

    const token = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1h' });
    
    console.log('Generated Token:', token); // Verificar el token generado
    if (!token) {
      throw new Error('Error al generar el token');
    }

    return token;
  },

  
};

module.exports = userService;


const { pool } = require('../config/database');

const User = {
  
  
   async findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    return rows[0];
  },


};

module.exports = User;

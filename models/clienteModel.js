const { pool } = require('../config/database');


// limite = 10, offset = 0 = Clientes de 1 al 10
// limite = 10, offset = 10 = Clientes de 11 al 20
// limite = 10, offset = 20 = Clientes de 21 al 30

  const getAllClientes = async (limite = 10, offset = 0) => {
    console.log(`Límite: ${limite}, Offset: ${offset}`);
    const [rows] = await pool.query('SELECT id, nombre, apellido, email, telefono FROM clientes LIMIT ? OFFSET ?', [limite, offset]);
    return rows;
  }

  const createCliente = async (cliente) => {
    const { nombre, apellido, email, telefono } = cliente;
    const [result] = await pool.query('INSERT INTO clientes (nombre, apellido, email, telefono) VALUES (?, ?, ?, ?)', [nombre, apellido, email, telefono]);
    return { id: result.insertId, ...cliente };
  }


module.exports = {
  getAllClientes, 
  createCliente
};

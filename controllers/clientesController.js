const clientesService = require('../services/clientesServices');


const getAllClientes = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query; // Obtener página y límite desde query params, valores por defecto
    const offset = (page - 1) * limit; // Calcular el offset
    console.log(`Límite: ${limit}, Offset: ${offset}`);

    const clientes = await clientesService.getAllClientes(parseInt(limit), parseInt(offset));
    res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    res.status(500).json({ message: 'Error al obtener los clientes' });
  }
};

const createCliente = async (req, res) => {
  try {
    const nuevoCliente = req.body;
    const clienteCreado = await clientesService.createCliente(nuevoCliente);
    res.status(201).json(clienteCreado);
  } catch (error) {
    console.error('Error al crear el cliente:', error);
    res.status(500).json({ message: 'Error al crear el cliente' });
  }
};

module.exports = {
  getAllClientes,
  createCliente
};
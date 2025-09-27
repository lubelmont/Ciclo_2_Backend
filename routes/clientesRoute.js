const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');



/**
 * @swagger
 * /api/v1/clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     description: Retorna una lista paginada de clientes activos
 *     tags:
 *       - Clientes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Número de página
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Número de elementos por página
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida exitosamente
 */
router.get('/api/v1/clientes', clientesController.getAllClientes);



/** * @swagger
 * /api/v1/clientes:
 *   post:
 *     summary: Crear un nuevo cliente
 *     description: Crea un nuevo cliente en la base de datos
 *     tags:
 *       - Clientes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               email:
 *                 type: string
 *               telefono:
 *                 type: string
 *             required:
 *               - nombre
 *               - apellido
 *               - email
 *               - telefono
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 */
router.post('/api/v1/clientes', clientesController.createCliente);
    


module.exports = router;
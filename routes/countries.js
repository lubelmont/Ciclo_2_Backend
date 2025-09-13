
const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countriesController');






/**
 * @swagger
 * /api/v1/getAllAmericaCountries:
 *   get:
 *     summary: Obtiene todos los países de América (versión 1)
 *     description: Retorna una lista completa de países del continente americano en formato de array de strings
 *     tags:
 *       - Países v1
 *     responses:
 *       200:
 *         description: Lista de países americanos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   description: Versión de la API
 *                   example: "v1"
 *                 data:
 *                   type: array
 *                   description: Array de nombres de países americanos
 *                   items:
 *                     type: string
 *                   example: ["Estados Unidos", "Canadá", "México", "Brasil", "Argentina"]
 *             examples:
 *               ejemplo_exitoso:
 *                 summary: Respuesta exitosa con países de América
 *                 value:
 *                   version: "v1"
 *                   data: [
 *                     "Estados Unidos",
 *                     "Canadá", 
 *                     "México",
 *                     "Brasil",
 *                     "Argentina",
 *                     "Chile",
 *                     "Colombia",
 *                     "Perú"
 *                   ]
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Error interno del servidor"
 *       404:
 *         description: No se encontraron países
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "No se encontraron países americanos"
 */
router.get('/api/v1/getAllAmericaCountries', countriesController.getAllAmericaCountries);




/**
 * @swagger
 * /api/v1/getAmericaCountriesNames:
 *   get:
 *     summary: Obtiene solo los nombres de países de América (versión 1)
 *     description: Retorna únicamente los nombres de países del continente americano en formato de array de strings simplificado
 *     tags:
 *       - Países v1
 *     responses:
 *       200:
 *         description: Lista de nombres de países americanos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   description: Versión de la API
 *                   example: "v1"
 *                 data:
 *                   type: array
 *                   description: Array de nombres de países americanos únicamente
 *                   items:
 *                     type: string
 *                   example: ["Estados Unidos", "Canadá", "México", "Brasil", "Argentina"]
 *             examples:
 *               ejemplo_exitoso:
 *                 summary: Respuesta exitosa con nombres de países
 *                 value:
 *                   version: "v1"
 *                   data: [
 *                     "Estados Unidos",
 *                     "Canadá", 
 *                     "México",
 *                     "Brasil",
 *                     "Argentina",
 *                     "Chile",
 *                     "Colombia",
 *                     "Perú",
 *                     "Venezuela",
 *                     "Uruguay"
 *                   ]
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Error interno del servidor"
 *       404:
 *         description: No se encontraron nombres de países
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "No se encontraron nombres de países americanos"
 */
router.get('/api/v1/getAmericaCountriesNames', countriesController.getAmericaCountriesNames);





/**
 * @swagger
 * /api/v1/getAmericaCountriesList:
 *   get:
 *     summary: Obtiene lista de países de América con banderas (versión 1)
 *     description: Retorna una lista de países del continente americano con nombre y URL de la bandera en formato de objetos
 *     tags:
 *       - Países v1
 *     responses:
 *       200:
 *         description: Lista de países americanos con banderas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   description: Versión de la API
 *                   example: "v1"
 *                 data:
 *                   type: array
 *                   description: Array de objetos de países con nombres y banderas
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Nombre común del país
 *                         example: "United States"
 *                       flag:
 *                         type: string
 *                         format: uri
 *                         description: URL de la imagen de la bandera del país
 *                         example: "https://flagcdn.com/w320/us.png"
 *             examples:
 *               ejemplo_exitoso:
 *                 summary: Respuesta exitosa con países y banderas
 *                 value:
 *                   version: "v1"
 *                   data: [
 *                     {
 *                       "name": "United States",
 *                       "flag": "https://flagcdn.com/w320/us.png"
 *                     },
 *                     {
 *                       "name": "Canada", 
 *                       "flag": "https://flagcdn.com/w320/ca.png"
 *                     },
 *                     {
 *                       "name": "Mexico",
 *                       "flag": "https://flagcdn.com/w320/mx.png"
 *                     },
 *                     {
 *                       "name": "Brazil",
 *                       "flag": "https://flagcdn.com/w320/br.png"
 *                     },
 *                     {
 *                       "name": "Argentina",
 *                       "flag": "https://flagcdn.com/w320/ar.png"
 *                     }
 *                   ]
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Error interno del servidor"
 *       404:
 *         description: No se encontraron países
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "No se encontraron países americanos"
 */
router.get('/api/v1/getAmericaCountriesList', countriesController.getAmericaCountriesList);


/**
 * @swagger
 * /api/v1/getAmericaCountriesByCCA2/{cca2}:
 *   get:
 *     summary: Obtiene un país de América por su código CCA2 (versión 1)
 *     description: Retorna los detalles de un país del continente americano utilizando su código CCA2 en formato de objeto
 *     tags:
 *       - Países v1
 *     parameters:
 *       - in: path
 *         name: cca2
 *         required: true
 *         schema:
 *           type: string
 *         description: Código CCA2 del país (por ejemplo, "US" para Estados Unidos)
 *     responses:
 *       200:
 *         description: Detalles del país americano obtenidos exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   description: Versión de la API
 *                   example: "v1"
 *                 data:
 *                   type: object
 *                   description: Objeto con detalles del país
 *                   properties:
 *                     name:
 *                       type: object
 *                       properties:
 *                         common:
 *                           type: string
 *                           description: Nombre común del país
 *                           example: "United States"
 *                         official:
 *                           type: string
 *                           description: Nombre oficial del país
 *                           example: "United States of America"
 *                     cca2:
 *                       type: string
 *                       description: Código CCA2 del país
 *                       example: "US"
 *                     flags:
 *                       type: object
 *                       properties:
 *                         png:
 *                           type: string
 *                           format: uri
 *                           description: URL de la imagen de la bandera del país en formato PNG
 *                           example: "https://flagcdn.com/w320/us.png"
 *             examples:
 *               ejemplo_exitoso:
 *                 summary: Respuesta exitosa
 *                 value:
 *                   version: "v1"
 *                   data:
 *                     name:
 *                       common: "United States"
 *                       official: "United States of America"
 *                     cca2: "US"
 *                     flags:
 *                       png: "https://flagcdn.com/w320/us.png"   
 */
router.get('/api/v1/getAmericaCountriesByCCA2/:cca2', countriesController.getAmericaCountriesByCCA2);



/**
 * @swagger
 * /api/v2/paises:
 *   get:
 *     summary: Obtiene la lista de países (versión 2)
 *     description: Retorna una lista de países en formato de Lista de objetos con estructura mejorada
 *     tags:
 *       - Países v2
 *     responses:
 *       200:
 *         description: Lista de países obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 version:
 *                   type: string
 *                   description: Versión de la API
 *                   example: "v2"
 *                 data:
 *                   type: array
 *                   description: Array de objetos de países
 *                   items:
 *                     type: object
 *                     properties:
 *                       nombre:
 *                         type: string
 *                         description: Nombre del país
 *                         example: "Usuario1"
 *             examples:
 *               ejemplo_exitoso:
 *                 summary: Respuesta exitosa
 *                 value:
 *                   version: "v2"
 *                   data: 
 *                     - nombre: "Usuario1"
 *                     - nombre: "Usuario2"
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Error interno del servidor"
 */
router.get('/api/v2/paises', (req, res) => {
  res.json({ version: "v2", data: [{ nombre: "Usuario1"}, {nombre: "Usuario2"}]});
});



module.exports = router;//Exportar el router

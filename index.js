//Importaciones
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const countryRoutes = require('./routes/countries');
const clientesRoute = require('./routes/clientesRoute');
const authRoute = require('./routes/authRoute');
const {version, name} = require('./package.json');
const { testConnection } = require('./config/database');
const { authenticateToken } = require('./middlewares/authMiddleware');
const {  validateAppIdentifier, validateApiKey, } = require('./middlewares/apiKeyMiddleware');





//Configuraciones
const app = express();
const PORT = 3000;

//Middlewares JSON
app.use(express.json());

// Middleware para debuggear todas las peticiones
app.use((req, res, next) => {
  console.log(`🔍 ${req.method} ${req.path} - Body:`, req.body);
  next();
});





//Carga de documentación Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Consulta de Paises",
      version: "1.0.0",
      description: "Esta es una API para consultar paises",
      contact: {
        name: "Arnulfo Rodriguez",
        email: "arnulfo@example.com"
      }
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    securuity: [{ bearerAuth: [] }],
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Rutas

//End point helth check
app.get('/', (req, res) => {
  
  res.status(200).json(
    {status: 'ok',
      service: name,
      version: version,
      timestamp: new Date().toISOString()
    }
  );
  
});

app.use(validateAppIdentifier, validateApiKey);

//Usar las rutas definidas en routes/countries.js
app.use(countryRoutes);

//Rutas de usuario (registro, login) - ESTAS DEBEN IR PRIMERO (SIN AUTENTICACIÓN)
console.log('Registrando rutas de autenticación...');
app.use(authRoute);

//Usar las rutas definidas en routes/clientesRoute.js
app.use(authenticateToken, clientesRoute);


// Comentar esta línea que causa error
// const password = 'mi_contraseña_segura';
// console.log(bcrypt.hashSync(password, 10));

//Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Swagger en http://localhost:${PORT}/api-docs`);


  testConnection();
});

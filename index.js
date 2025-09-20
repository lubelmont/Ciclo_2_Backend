//Importaciones
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const countryRoutes = require('./routes/countries');
const clientesRoute = require('./routes/clientesRoute');
const {version, name} = require('./package.json');
const { testConnection } = require('./config/database');



//Configuraciones
const app = express();
const PORT = 3000;

//Middlewares JSON
app.use(express.json());


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

app.use(countryRoutes);
 //Usar las rutas definidas en routes/countries.js
app.use(clientesRoute);
 //Usar las rutas definidas en routes/clientesRoute.js

//Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Swagger en http://localhost:${PORT}/api-docs`);


  testConnection();
});

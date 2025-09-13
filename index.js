//Importaciones
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const countryRoutes = require('./routes/countries');




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
app.get('/', (req, res) => {
    
    res.json(paisesAmerica);
    //res.send('Hola Mundo desde Express - Saludos');
});

app.use(countryRoutes); //Usar las rutas definidas en routes/countries.js





//Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log('Swagger en http://localhost:3000/api-docs');
});

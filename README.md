# Consulta de Países - Backend API

Este es un servicio de backend desarrollado con Express.js que proporciona una API REST para consultar información de países.

## 📋 Descripción

El proyecto incluye:
- API REST con Express.js
- Múltiples versiones de endpoints (v1 y v2)
- Documentación con Swagger
- Estructura simple y escalable

## 🚀 Instalación

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (viene incluido con Node.js)

### Pasos de instalación

1. **Clona o descarga el proyecto**
   ```bash
   # Si tienes el proyecto en Git
   git clone <url-del-repositorio>
   cd Express
   
   # O si descargaste los archivos, navega a la carpeta
   cd /ruta/hacia/tu/proyecto
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor**
   ```bash
   node index.js
   ```

4. **Verifica que el servidor esté funcionando**
   - Abre tu navegador y ve a: http://localhost:3000
   - Deberías ver el mensaje: "Hola Mundo desde Express - Saludos"

## 🛠️ Scripts disponibles

### Ejecutar el servidor
```bash
npm start
```

### Ejecutar en modo desarrollo (opcional)
Si quieres agregar nodemon para desarrollo automático:
```bash
npm install -D nodemon
```
Luego agrega este script en `package.json`:
```json
"dev": "nodemon index.js"
```
Y ejecuta:
```bash
npm run dev
```

## 📚 API Endpoints

### Endpoint principal
- **GET** `/` - Página de bienvenida
  - Respuesta: Mensaje de saludo

### API de países

#### Versión 1
- **GET** `/api/v1/paises` 
  - Respuesta: Lista simple de usuarios
  ```json
  {
    "version": "v1",
    "data": ["Usuario1", "Usuario2"]
  }
  ```

#### Versión 2
- **GET** `/api/v2/paises`
  - Respuesta: Lista de objetos con nombres
  ```json
  {
    "version": "v2", 
    "data": [
      {"nombre": "Usuario1"}, 
      {"nombre": "Usuario2"}
    ]
  }
  ```

## 🧪 Probar la API

### Usando curl
```bash
# Endpoint principal
curl http://localhost:3000/

# API v1
curl http://localhost:3000/api/v1/paises

# API v2
curl http://localhost:3000/api/v2/paises
```

### Usando un navegador
- http://localhost:3000/
- http://localhost:3000/api/v1/paises
- http://localhost:3000/api/v2/paises

## 📦 Dependencias

Este proyecto utiliza las siguientes dependencias:

- **express** (^5.1.0) - Framework web para Node.js
- **swagger-jsdoc** (^6.2.8) - Generación de documentación Swagger desde JSDoc
- **swagger-ui-express** (^5.0.1) - Interfaz web para Swagger

## 🔧 Configuración

### Puerto del servidor
El servidor se ejecuta por defecto en el puerto 3000. Puedes cambiarlo modificando la variable `PORT` en `index.js`:

```javascript
const PORT = 3000; // Cambia aquí el puerto
```

### Variables de entorno (opcional)
Para usar variables de entorno, puedes instalar dotenv:
```bash
npm install dotenv
```

## 📝 Estructura del proyecto

```
/
├── index.js          # Archivo principal del servidor
├── package.json      # Configuración del proyecto y dependencias
└── README.md         # Este archivo
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## ✍️ Autor

**Arnulfo Rodriguez**

## 🆘 Solución de problemas

### Error: puerto en uso
Si obtienes un error que dice que el puerto está en uso:
1. Cambia el puerto en `index.js`
2. O termina el proceso que está usando el puerto 3000

### Error: módulos no encontrados
Si obtienes errores de módulos no encontrados:
1. Asegúrate de haber ejecutado `npm install`
2. Verifica que estés en la carpeta correcta del proyecto

### Error de permisos
En algunos sistemas, puede ser necesario usar `sudo` para instalar paquetes globalmente:
```bash
sudo npm install -g <paquete>
```

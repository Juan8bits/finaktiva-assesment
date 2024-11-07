const express = require('express');
// const { initializeDatabase } = require('./infrastructure/database/config');
// const setupRoutes = require('./interfaces/http/routes');
const config = require('./config');

// Configuración de la aplicación
const app = express();
app.use(express.json());

// Inicialización de la base de datos
initializeDatabase()
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
        process.exit(1); // Salida en caso de error grave de conexión
    });

// Configuración de rutas
setupRoutes(app);

// Exportar la aplicación configurada (sin iniciar el servidor)
module.exports = app;
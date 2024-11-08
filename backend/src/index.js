const express = require('express');
const dependencyManager = require('./application/dependencyManager');
const routes = require('./interfaces/http/routes');
// const { initializeDatabase } = require('./infrastructure/database/config');
// const setupRoutes = require('./interfaces/http/routes');
const config = require('./config');

const createExpressServer = async () => {
    const app = express();
    app.use(express.json());

    const services = await dependencyManager(config)
    routes(app, config, services)

    return app;
}
module.exports = createExpressServer();
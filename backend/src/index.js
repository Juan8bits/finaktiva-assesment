const express = require('express');
const dependencyManager = require('./application/dependencyManager');
const routes = require('./interfaces/http/routes');
const config = require('./config');
const basicHttp = require("./application/domain/utils/basicHttp");
const { controllerErrorHandler } = require('./application/loaders/errorHandler');

const createExpressServer = async () => {
    const app = express();
    app.use(express.json());

    const services = await dependencyManager(config)
    await basicHttp(app, config)
    routes(app, config, services)
    // error handler
    app.use(controllerErrorHandler(config))

    return app;
}
module.exports = createExpressServer;
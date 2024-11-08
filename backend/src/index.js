const express = require('express');
const dependencyManager = require('./application/dependencyManager');
const routes = require('./interfaces/http/routes');
const config = require('./config');
const basicHttp = require("./application/domain/utils/basicHttp");

const createExpressServer = async () => {
    const app = express();
    app.use(express.json());

    const services = await dependencyManager(config)
    await basicHttp(app, config)
    routes(app, config, services)

    return app;
}
module.exports = createExpressServer;
const express = require('express')
const log = require('./logs')

module.exports = (app, config, services) => {
    const route = express.Router()
    log(route, config, services)

    app.use(config.api.prefix, route)

    return app
}
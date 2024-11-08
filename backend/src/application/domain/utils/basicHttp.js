const compression = require('compression')
const RateLimit = require('express-rate-limit')
const express = require('express')
const cors = require('cors')

const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }
    // fallback to standard filter function
    return compression.filter(req, res)
}

/**
 * These functions add the basics of HTTP configuration:
 *  > Compression
 *  > Cookie Session
 *  > Express Session
 *  > CORS
 *  > Body Parser
 *  > Rate Limit
 * @param {object} app ExpressJS app instance
 * @param config Environment variables
 */
const basicHttp = async (app, config) => {
    app.use(cors())

    // parse application/x-www-form-urlencoded
    app.use(
        express.urlencoded({
            extended: true,
            limit: '500Mb',
            parameterLimit: 1000000
        })
    )
    // parse application/json
    app.use(
        express.json({
            limit: '500Mb'
        })
    )

    app.use(compression({ filter: shouldCompress }))

    const limiter = RateLimit({
        ...config.rateLimit
    })
    app.use(limiter)
    // There isn't necessary to define express sessions configurations
    // app.use(
    //     expressSession({
    //         ...config.expressSession
    //     })
    // )
    app.set('trust proxy', 1)
    return app
}

module.exports = basicHttp
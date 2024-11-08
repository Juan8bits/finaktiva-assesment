const { GeneralError } = require('../domain/utils/error/errors')

const controllerErrorHandler = () => (err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }

    const isCustom = err instanceof GeneralError

    const status = (isCustom && err.getStatusCode()) || err.status || 500
    const errorCode = (isCustom && err.getErrorCode()) || err.status || 500
    const message =
        (isCustom && err.getMessage(errorCode)) ||
        (isCustom && err.constructor.name) ||
        err.message

    const responseObject = {
        message,
        errorCode
    }

    console.error(
        `${status} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
    )

    if (err.errors) responseObject.errors = err.errors

    // return the error json
    res.status(status).json(responseObject)
}

const functionErrorHandler = () => (error, newError) => {
    if (error instanceof GeneralError) {
        throw error
    }
    let message = null
    message = error.stack
    console.error(message || error.message)
    throw newError
}

module.exports = {
    controllerErrorHandler,
    functionErrorHandler
}

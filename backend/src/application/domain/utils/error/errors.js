const dictionary = require('./dictionary');

class GeneralError extends Error {
    constructor(errorCode) {
        super()
        this.errorCode = errorCode || 500
    }

    getStatusCode() {
        if (this.constructor.name === 'BadRequestError') {
            return 400
        }
        if (this.constructor.name === 'ValidationError') {
            return 400
        }
        if (this.constructor.name === 'UnauthorizedError') {
            return 401
        }
        if (this.constructor.name === 'ForbiddenError') {
            return 403
        }
        if (this.constructor.name === 'NotFoundError') {
            return 404
        }
        if (this.constructor.name === 'ServerError') {
            return 500
        }
        return 500
    }

    getErrorCode() {
        return this.errorCode
    }

    getMessage(code) {
        return dictionary[code] || this.constructor.name
    }
}

class ValidationError extends GeneralError {}
class UnauthorizedError extends GeneralError {}
class NotFoundError extends GeneralError {}
class ServerError extends GeneralError {}
class ForbiddenError extends GeneralError {}
class BadRequestError extends GeneralError {}

module.exports = {
    GeneralError,
    ValidationError,
    UnauthorizedError,
    NotFoundError,
    ServerError,
    ForbiddenError,
    BadRequestError
}
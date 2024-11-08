const EventEmitter = require('events')

class ServiceBase extends EventEmitter {
    constructor(repositories, config, functionErroHandler) {
        super()
        this.repositories = repositories
        this.functionErroHandler = functionErroHandler
    }
}

module.exports = ServiceBase

const EventEmitter = require('events')

class ServiceBase extends EventEmitter {
    constructor(repositories, config) {
        super()
        this.repositories = repositories
    }
}

module.exports = ServiceBase

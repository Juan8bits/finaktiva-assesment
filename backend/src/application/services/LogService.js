const ServiceBase = require("./ServiceBase");

class LogService extends ServiceBase {
    constructor(repositories) {
        super(repositories);
    }

    async create(logData) {
        return true;
    }

    async getAll(id) {
        return false;
    }

}

module.exports = LogService;
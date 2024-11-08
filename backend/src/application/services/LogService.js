const ServiceBase = require("./ServiceBase");

class LogService extends ServiceBase {
    constructor(repositories, config) {
        super(repositories, config);
        this.config = config
    }

    async create(logData) {
        return this.repositories.LogRepository.create(logData);
    }

    async getAll({ page, perPage }) {
        return this.repositories.LogRepository.findAll({ offset: perPage * (page - 1), limit: perPage});
    }

}

module.exports = LogService;
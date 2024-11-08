const ServiceBase = require("./ServiceBase");
const {ServerError} = require("../domain/utils/error/errors");

class LogService extends ServiceBase {
    constructor(repositories, config, functionErroHandler) {
        super(repositories, config, functionErroHandler);
        this.config = config
    }

    async create(logData) {
        try {
            if (!logData.fromApp)
                logData.fromApp = false
            return this.repositories.LogRepository.create(logData);
        } catch (error) {
            return this.functionErroHandler(error, new ServerError(10001))
        }
    }

    async getAll({ type, fromApp, page, perPage }) {
        try {
            const conditions = {
                ...(type && { type }),
                ...(fromApp && { fromApp }),
            }

            return this.repositories.LogRepository.findAll({
                ...(conditions && {conditions}),
                offset: perPage * (page - 1),
                limit: perPage
            });
        } catch (error) {
            return this.functionErroHandler(error, new ServerError(10001))
        }
    }

}

module.exports = LogService;
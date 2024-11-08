const BaseRepositoryInterface = require("./BaseRepository.interface");
const {ServerError} = require("../../../application/domain/utils/error/errors");

class LogsRepository extends BaseRepositoryInterface {

    async create(logData) {
        try {
            const newLog = await this.adapterModel.create(logData)
            return new this.domainModel(newLog)
        } catch (error) {
            return this.functionErrorHandler(error, new ServerError(20001))
        }
    }

    async findAll({ conditions, properties, order, limit, offset }) {
        try {
            const logs = await this.adapterModel.findAll({
                ...(conditions && { where: conditions }),
                ...(properties && { attributes: properties }),
                ...(order && { order }),
                ...(limit && { limit }),
                ...(offset && { offset })
            })
            return logs.map((log) => new this.domainModel(log))
        } catch (error) {
            return this.functionErrorHandler(error, new ServerError(20001))
        }
    }

}

module.exports = LogsRepository;
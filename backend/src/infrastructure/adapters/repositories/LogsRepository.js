const BaseRepositoryInterface = require("./BaseRepository.interface");

class LogsRepository extends BaseRepositoryInterface {

    async create(logData) {
        const newLog = await this.adapterModel.create(logData)
        return new this.domainModel(newLog)
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
            throw new Error(`Failed to find log data. ${error}`);
        }
    }

}

module.exports = LogsRepository;
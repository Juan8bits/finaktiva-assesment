const LogsRepositoryInterface = require("./LogsRepository.interface");

class LogsRepository extends LogsRepositoryInterface{
    async create(logData) {
        const newLog = await this.adapterModel.create(logData);
        return new this.domainModel()
    }

    async findALL() {
        return this.adapterModel.findAll();
    }

}

module.exports = LogsRepository;
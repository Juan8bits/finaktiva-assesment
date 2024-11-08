const BaseRepositoryInterface = require("./BaseRepository.interface");

class LogsRepositoryInterface extends BaseRepositoryInterface{
    create(logData) {
        throw new Error("Method not implemented.");
    }

    findAll() {
        throw new Error("Method not implemented.");
    }
}

module.exports = LogsRepositoryInterface;
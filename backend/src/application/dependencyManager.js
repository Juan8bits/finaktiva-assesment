const { Log } = require('./domain/models')
const { LogModel } = require('../infrastructure/adapters/database/models')
const { LogsRepository } = require('../infrastructure/adapters/repositories')
const { LogService } = require('./services')
const { DataTypes} = require("sequelize")
const initializeDatabase = require("../infrastructure/adapters/database/config");

// Injection implementations
module.exports = async (config) => {
    try {
        const sequelize = await initializeDatabase(config)
        const adapterModels = {
            logs: LogModel(sequelize, DataTypes),
        }

        const repositories = {
            sequelize,
            LogRepository: new LogsRepository(
                adapterModels.logs,
                Log,
            ),
        }

        const services = {
            LogService: new LogService(
                repositories,
                config
            )
        }
        return services
    } catch (error) {
        throw new Error(
            `There was an error when trying to wire dependencies. ${error.stack}`
        )
    }
};

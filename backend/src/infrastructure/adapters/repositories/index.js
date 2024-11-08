// Infrastructure models are the adaptors who define how data it's going to be presented and how to interact with the database throw Sequelize.
// Repositories are the bridge between domain model and infrastructure model. Convert from one to another and make persistence operations.
// Interfaces makes that every repository that extends from and interface should overwrite defined methods in the interface, otherwise it will throw error.
const LogsRepository = require('./LogsRepository')

module.exports = {
    LogsRepository,
}
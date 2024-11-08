const { Sequelize } = require('sequelize');
/**
 * Function to initialize sequelize with db connection
 * @param {Object} config - Config variables
 * @returns {Promise} - Sequelize session
 */
const initializeDatabase = async (config) => {
    const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
        host: config.db.host,
        port: config.db.port,
        dialect: 'postgres',
        timezone: config.db.timezone,
        logQueryParameters: config.environment === "development",
    })

    try {
        await sequelize.authenticate()
        console.info('Connection to the database has been established successfully.')
        return sequelize
    } catch (error) {
        throw new Error(`Unable to connect to the PostgreSQL database:${error}`)
    }
};
module.exports = initializeDatabase;
require('dotenv').config()

const config = {
  development: {
    username: process.env.PG_USER || 'admin',
    password: process.env.PG_PASSWORD || 'admin',
    database: process.env.DB_NAME || 'registration',
    host: process.env.PG_MIGRATION_HOST || 'postgres',
    port: process.env.PG_DEV_PORT || 5432,
    dialect: 'postgres',
    timezone: process.env.PG_TIMEZONE || 'UTC',
    seederStorage: 'sequelize'
  },
  production: {
    username: process.env.PG_DEV_USERNAME,
    password: process.env.PG_DEV_PASSWORD,
    database: process.env.PG_DEV_DATABASE,
    host: process.env.PG_DEV_HOST,
    port: process.env.PG_DEV_PORT,
    dialect: 'postgres',
    timezone: process.env.PG_TIMEZONE,
    seederStorage: 'sequelize'
  },
}

module.exports = config

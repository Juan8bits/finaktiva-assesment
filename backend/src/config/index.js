require('dotenv').config();
const config = {
    environment: process.env.NODE_ENV || 'development',
    api: {
        prefix: process.env.API_PREFIX || '/api/v1.0/',
    },
    port: process.env.PORT || 4000,
    db: {
        host: process.env.DB_HOST || 'postgres',
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'admin', // Burned because the test
        password: process.env.DB_PASSWORD || 'admin', // Burned because the test
        database: process.env.DB_NAME || 'registration',
        timezone: process.env.PG_TIMEZONE || 'UTC'
    },
};

module.exports = config;
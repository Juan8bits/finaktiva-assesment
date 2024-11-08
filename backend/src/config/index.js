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
    rateLimit: {
        windowMs: process.env.RATE_LIMIT_TIME || 15 * 60 * 1000, // 15 minutes
        max: process.env.RATE_LIMIT_REQ || 10000, // limit each IP to 100 requests per windowMs. Higher value for stress test
        delayMs: 0 // disable delaying - full speed until the max limit is reached
    }
};

module.exports = config;
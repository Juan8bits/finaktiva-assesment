require('dotenv').config();

const config = {
    port: process.env.PORT || 4000,
    db: {
        host: process.env.DB_HOST || "postgres",
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || "admin",
        password: process.env.DB_PASSWORD || "admin",
        database: process.env.DB_NAME || "finaktiva-assesment",
    },
    environment: process.env.NODE_ENV || 'development',
};

module.exports = config;
const app = require('./index');
const config = require('./config');
require('./index').then((app) => {
    app.listen(config.port, (err) => {
        if (err) {
            process.exit(1)
        }
        console.info(`Server running on http://localhost:${config.port}${config.api.prefix}status`);
    })
})
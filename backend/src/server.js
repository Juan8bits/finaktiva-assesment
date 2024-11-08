const cluster = require('cluster');
const os = require('os');
const config = require('./config');
const createExpressServer = require('./index');

const numCPUs = os.cpus().length;
console.info(`CPU's available: ${numCPUs}.`)

const startWorker = async () => {
    const app = await createExpressServer();
    app.listen(config.port, () => {
        console.info(`Server running on http://localhost:${config.port}${config.api.prefix}status`);
    });
};

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);

    // Create a worker per Cpu Core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork(); // Reboot a worker when die
    });

} else {
    startWorker().catch((err) => {
        console.error('Error starting worker:', err);
        process.exit(1);
    });
}
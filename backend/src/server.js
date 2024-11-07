const app = require('./index');
const config = require('./config');

const PORT = config.port

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
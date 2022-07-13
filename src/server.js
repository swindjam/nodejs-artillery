const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 1234;

app.use(bodyParser.json({limit: '10mb'}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.post('/json', (req, res) => {
    res.json(req.body);
    res.end();
});

app.listen(port, () => {
    console.log('info', `App listening on port ${port}`, {});
});

const shutdown = (exitCode) => {
    console.log('info', 'Server shutting down', {});
    dataSource.disconnectFromDB();
    process.exit(exitCode + 128);
};

process.on('SIGINT', () => {
    shutdown(2);
});
process.on('SIGABRT', () => {
    shutdown(6);
});
process.on('SIGTERM', () => {
    shutdown(15);
});
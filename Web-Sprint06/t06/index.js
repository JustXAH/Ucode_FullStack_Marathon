const express = require('express');
const app = express();
const path = require('path');
const ip = require('ip');
const os = require('os');
const url = require('url');

app.get('/', (req, res) => {
    res.send(req.useragent);

    const queryObject = JSON.stringify(url.parse(req.url,true).query);

    console.log(`A a name of file of the executed script: ${path.basename(__filename)}\n` +
        `Arguments passed to the script: ${process.argv.slice(2)}\n` +
        `IP address of the server: ${ip.address()}\n` +
        `A name of host that invokes the current script: ${os.hostname()}\n` +
        `A name and a version of the information protocol: ${req.protocol}\n` +
        `A query method: ${req.method}\n` +
        `User-Agent information: ${req.headers["user-agent"]}\n` +
        `IP address of the client: ${ip.address()}\n` +
        `A list of parameters passed by URL: ${queryObject}\n`);
});

app.listen(8000);

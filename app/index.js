const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());

const headers = {
    'Authorization': `${process.env.APIKEY}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

const agent = new https.Agent({
    rejectUnauthorized: false
});

require('./server.js')(app, headers, tenant, agent);

app.listen(process.env.PORT, () => {
    console.log(`API server running on http://localhost:${process.env.PORT}`);
});
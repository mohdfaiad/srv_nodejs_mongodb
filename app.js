const express = require('express');
const app = express();
const base = require('./controllers/config/database/base');
const server = require('./controllers/config/server/server')(app);
const ContractSchema = require('./controllers/contract/contract_schema');

app.use('/api', ContractSchema);

module.exports = app;
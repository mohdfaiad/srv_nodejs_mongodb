const express = require('express');
const app = express();
const base = require('./controllers/config/database/base');
const server = require('./controllers/config/server/server')(app);
const ContractSchema = require('./controllers/contract/contract_schema');
const ClientSchema = require('./controllers/views/client/client_schema');
const ServerSchema = require('./controllers/server/server_schema');
const DesktopCloudSchema = require('./controllers/desktopcloud/desktopcloud_schema');

//Pages EJS
require('./controllers/views/home/index')(app);
require('./controllers/views/about/about')(app);

app.set('view engine', 'ejs');

app.use('/api', ContractSchema);
app.use('/api', ClientSchema);
app.use('/api', ServerSchema);
app.use('/api', DesktopCloudSchema);

module.exports = app;
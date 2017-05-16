const express = require('express');
const app = express();
const base = require('./controllers/config/database/base');
const server = require('./controllers/config/server/server')(app);

//Routes
const ContractSchema = require('./controllers/router/contract/contract_schema');
const ClientSchema = require('./controllers/router/client/client_schema');
const ClientUser = require('./controllers/router/client/client_user');
const ServerSchema = require('./controllers/router/server/server_schema');
const DesktopCloudSchema = require('./controllers/router/desktopcloud/desktopcloud_schema');
const ExamSchema = require('./controllers/router/exam/exam_schema');

//Pages EJS
require('./controllers/views/home/index')(app);
require('./controllers/views/about/about')(app);

app.set('view engine', 'ejs');

app.use('/api', ContractSchema);
app.use('/api', ClientSchema);
app.use('/api', ServerSchema);
app.use('/api', DesktopCloudSchema);
app.use('/api', ClientUser);
app.use('/api', ExamSchema);

module.exports = app;
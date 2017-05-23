const express = require('express');
const app = express();
const router = express.Router();
const base = require('./controllers/config/database/base');
const server = require('./controllers/config/server/server')(app);

//Routes
const ContractSchema = require('./controllers/router/contract/contract');
const ClientSchema = require('./controllers/router/client/client');
const ServerSchema = require('./controllers/router/server/server');
const DesktopCloudSchema = require('./controllers/router/dskcloud/dskcloud');
const ExamSchema = require('./controllers/router/exam/exam');
const EnterpriseSchema = require('./controllers/router/enterprise/enterprise');
const UserDesktop = require('./controllers/router/user_dskcloud/user_dskcloud');

//Pages EJS
require('./controllers/views/home/index')(app);
require('./controllers/views/about/about')(app);

app.set('view engine', 'ejs');

app.use('/api', ContractSchema);
app.use('/api', ClientSchema);
app.use('/api', ServerSchema);
app.use('/api', DesktopCloudSchema);
app.use('/api', ExamSchema);
app.use('/api', EnterpriseSchema);
app.use('/api', UserDesktop);

module.exports = app;
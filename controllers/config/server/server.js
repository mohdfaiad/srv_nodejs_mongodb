const app = require('../../../app');
const serverCors = require('./cors');
const port = process.env.PORT || 9080;

 module.exports = function (app) {

     app.listen(port, function () {

         console.log('Server listening on port: ' + port)
     });

     app.use(serverCors);
 };
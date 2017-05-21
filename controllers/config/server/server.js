const file = require('fs');
const app = require('../../../index');
const serverCors = require('./cors');

module.exports = function (app) {
    file.readFile('././data/srv_nodejs', (err, data) => {
        if (err)
            throw err;

        const port = process.env.PORT || 9080; //parseInt(data)

        app.listen(port, function () {
            console.log('Server listening : ' + port)
        });

        app.use(serverCors);
    });
};
// const file = require('fs');
const app = require('../../../app');
const serverCors = require('./cors');


module.exports = function (app) {

    const port = process.env.PORT || 9080;

    app.listen(port, function () {

        console.log('Server listening : ' + port)
    });

    app.use(serverCors);

    // file.readFile('././data/srv_nodejs', (err, data) => {
    //
    //     if (err) throw err;
    //
    //     const port = process.env.PORT || parseInt(data);
    //
    //     app.listen(port, function () {
    //
    //         console.log('Server listening : ' + port)
    //     });
    //
    //     app.use(serverCors);
    // });
};
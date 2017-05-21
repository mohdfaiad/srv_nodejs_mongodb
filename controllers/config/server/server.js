const serverCors = require('./cors');

module.exports = function (app) {
    const port = process.env.PORT || 3080;
    app.listen(port, function () {
        console.log('Server listening : ' + port)
    });

    app.use(serverCors);
};
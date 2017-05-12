const file = require('fs');
const mongoose = require('mongoose');

file.readFile('././data/srv_mongodb', (err, data) => {

    if (err) throw err;

    mongoose.connect(data, function () {

        console.log('Server MongoDB   : ' + data)
    });
});
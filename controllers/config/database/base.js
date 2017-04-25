const mongoose = require('mongoose');
const url = 'mongodb://10.211.55.7:27017/cloud_database';

mongoose.connect(url, function () {

    console.log('Server database on: ' + url)
});
const mongoose = require('mongoose');
const url = 'mongodb://54.233.82.242:27017/cloud_database';

mongoose.connect(url, function () {

    console.log('Server database on: ' + url)
});
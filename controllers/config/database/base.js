// const file = require('fs');
const base = require('./base_address');
const base_address = base.database;
const mongoose = require('mongoose');

mongoose.connect(base_address, function () {
    console.log('Server MongoDB   : ' + base_address)
});

const mongoose = require('mongoose');

const ServerSchema = new mongoose.Schema ({

    srv_contract_id: {type: Object, required: true},
    srv_name: {type: String, required: true, uppercase: true},
    srv_address: {type: String, required: true, lowercase: true},
    srv_username: {type: String, required: true},
    srv_password: {type: String},
    srv_port: {type: String, required: true},
    srv_data_registration: {type: Date, default: Date.now(), required: true},
    srv_status: {type: String, required: true, enum: ['E', 'D'], value: 'E', uppercase: true} //E: Enable, D: Disable
});

mongoose.model('server', ServerSchema);

module.exports = mongoose.model('server');
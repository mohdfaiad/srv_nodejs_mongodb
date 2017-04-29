const mongoose = require('mongoose');

const ClientUserSchema = {

    cli_usr_name: {type: String, required: true, uppercase: true},
    cli_usr_username: {type: String, required: true, lowercase: true},
    cli_usr_password: {type: String, required: true},
    cli_usr_date_birth: {type: Date, required: true},
    cli_usr_date_registration: {type: Date, default: Date.now(),required: true},
    cli_usr_status: {type: String, required: true, enum: ['E', 'D'], value: 'E', uppercase: true} //E: Enable, D: Disable
};

const ClientSchema = new mongoose.Schema ({

    cli_contract_id: {type: Object, required: true},
    cli_register: {type: String, required: true, enum: ['E', 'P'], uppercase: true}, //E: Enterprise, P: Private
    cli_first_name: {type: String, required: true, uppercase: true},
    cli_last_name: {type: String, required: true, uppercase: true},
    cli_full_name: {type: String, required: true, uppercase: true},
    cli_email: {type: String, required: true, lowercase: true},
    cli_phone1: {type: String, required: true, },
    cli_data_birth: {type: Date, required: true},
    cli_data_registration: {type: Date, default: Date.now(), required: true},
    cli_status: {type: String, required: true, enum: ['E', 'D'], value: 'E', uppercase: true}, //E: Enable, D: Disable
    cli_usr: [ClientUserSchema]
});

mongoose.model('client', ClientSchema);

module.exports = mongoose.model('client');
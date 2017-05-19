const mongoose = require('mongoose');

const ContractUserSchema = {

    ctr_usr_name: {type: String, required: true, uppercase: true},
    ctr_usr_username: {type: String, required: true, lowercase: true},
    ctr_usr_password: {type: String, required: true},
    ctr_usr_date_birth: {type: Date, required: true},
    ctr_usr_date_registration: {type: Date, default: Date.now(),required: true},
    ctr_usr_status: {type: String, required: true, enum: ['E', 'D'], value: 'E', uppercase: true} //E: Enable, D: Disable
};

const ContractSchema = new mongoose.Schema ({

    ctr_first_name: {type: String, required: true, uppercase: true},
    ctr_last_name: {type: String, required: true, uppercase: true},
    ctr_full_name: {type: String, required: true, uppercase: true},
    ctr_email: {type: String, required: true, lowercase: true},
    ctr_phone1: {type: String, required: true, },
    ctr_data_birth: {type: Date, required: true},
    ctr_data_registration: {type: Date, default: Date.now(), required: true},
    ctr_status: {type: String, required: true, enum: ['E', 'D'], value: 'E', uppercase: true}, //E: Enable, D: Disable
    ctr_usr: [ContractUserSchema]
});

mongoose.model('contract', ContractSchema);

module.exports = mongoose.model('contract');
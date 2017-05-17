const mongoose = require('mongoose');

const EnterpriseSchema = new mongoose.Schema ({

    ent_contract_id: {type: Object, required: true},
    ent_full_name: {type: String, required: true, uppercase: true},
    ent_email: {type: String, required: true, lowercase: true},
    ent_phone1: {type: String, required: true, },
    ent_data_open: {type: Date, required: true},
    ent_data_registration: {type: Date, default: Date.now(), required: true},
    ent_status: {type: String, required: true, enum: ['E', 'D'], value: 'E', uppercase: true}, //E: Enable, D: Disable
});

mongoose.model('enterprise', EnterpriseSchema);

module.exports = mongoose.model('enterprise');
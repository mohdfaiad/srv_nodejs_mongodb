const mongoose = require('mongoose');

const DesktopCloudSchema = new mongoose.Schema ({
    dsk_contract_id: {type: Object, required: true},
    dsk_cli_usr_username: {type: String, required: true, lowercase: true},
    dsk_username: {type: String, required: true, lowercase: true},
    dsk_password: {type: String, required: true},
    dsk_address: {type: String, required: true, lowercase: true},
    dsk_port: {type: String, required: true},
    dsk_system: {type: String, required: true, uppercase: true},
    dsk_status: {type: String, required: true, enum: ['E', 'D'], default: 'E', uppercase: true},
    dsk_data_registration: {type: Date, default: Date.now(), required: true}
});

mongoose.model('dskcloud', DesktopCloudSchema);
module.exports = mongoose.model('dskcloud');
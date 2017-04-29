const mongoose = require('mongoose');

const DesktopCloudSchema = new mongoose.Schema ({

    dsk_cli_usr_id: {type: Object, required: true},
    dsk_data_registration: {type: Date, default: Date.now(), required: true},
    dsk_status: {type: String, required: true, enum: ['E', 'D'], default: 'E', uppercase: true} //E: Enable, D: Disable
});

mongoose.model('desktopcloud', DesktopCloudSchema);

module.exports = mongoose.model('desktopcloud');
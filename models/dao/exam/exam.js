const mongoose = require('mongoose');
const ExamSchema = new mongoose.Schema ({
    exm_contract_id: {type: Object, required: true},
    exm_name: {type: String, required: true, uppercase: true},
    exm_status: {type: String, required: true, enum: ['E', 'D'], value: 'E', uppercase: true},
    exm_data_registration: {type: Date, default: Date.now(), required: true}
});

mongoose.model('exam', ExamSchema);
module.exports = mongoose.model('exam');
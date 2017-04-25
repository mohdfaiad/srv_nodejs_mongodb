const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ContractSchema = require('../../models/dao/contract/contract_schema');

router.use(bodyParser.urlencoded({extended: true}));

router.post('/contract', function (req, res) {

    ContractSchema.create(

        {
            ctr_first_name: req.body.ctr_first_name,
            ctr_last_name: req.body.ctr_last_name,
            ctr_full_name: req.body.ctr_full_name,
            ctr_email: req.body.ctr_email,
            ctr_phone1: req.body.ctr_phone1,
            ctr_data_birth: req.body.ctr_data_birth,
            ctr_status: req.body.ctr_status

        },

        function (err, contract) {

            if (err) return res.status(500).send(err);
            res.status(200).send(contract)
        }
    );
});

router.get('/contract', function (req, res) {

    ContractSchema.find({}, function (err, contracts) {

        if (err) return res.status(500).send(err);
        res.status(200).send(contracts);
    });
});

module.exports = router;
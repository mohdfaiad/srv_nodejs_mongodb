const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/contract/contract_schema');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/contract', function (req, res) {

    Schema.find(function (err, contracts) {

        if (err) return res.status(500).send(err);
        res.status(200).send(contracts);
    });
});

router.post('/contract', function (req, res) {

    const contract = new Schema(req.body);

    contract.save(function (err, contract) {

        if (err) return res.status(500).send(err);
        res.status(200).send(contract)
    });
});

router.put('/contract/:contract_id', function (req, res) {

    Schema.findById(req.params.contract_id, function (err, contract) {

            contract.save(function (err) {

                if (err) return res.status(500).send(err);
                res.status(200).send(contract);
            })
        }
    );
});

router.delete('/contract/:contract_id', function (req, res) {

    Schema.remove({_id: req.params.contract_id}, function (err, contract) {

            if (err) return res.status(500).send(err);
            res.status(200).send(contract);
        }
    );
});

module.exports = router;
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/enterprise/enterprise');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/enterprise', function (req, res) {
    Schema.find({}, function (err, enterprises) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(enterprises);
    });
});

router.post('/enterprise', function (req, res) {
    const enterprise = new Schema(req.body);
    enterprise.save(function (err, enterprise) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(enterprise)
    });
});

router.put('/enterprise/:enterprise_id', function (req, res) {
    Schema.update({_id: req.params.enterprise_id}, req.body, function (err, enterprise) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(enterprise);
    });
});

router.delete('/enterprise/:enterprise_id', function (req, res) {
    Schema.remove({_id: req.params.enterprise_id}, function (err, enterprise) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(enterprise);
    });
});

module.exports = router;
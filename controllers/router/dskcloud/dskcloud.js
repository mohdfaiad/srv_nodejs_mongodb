const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/dskcloud/dskcloud');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/dskcloud', function (req, res) {
    Schema.find({}, function (err, dskcloud) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(dskcloud);
    });
});

router.post('/dskcloud', function (req, res) {
    const dskcloud = new Schema(req.body);
    dskcloud.save(function (err, dskcloud) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(dskcloud)
    });
});

router.put('/dskcloud/:dskcloud_id', function (req, res) {
    Schema.update({_id: req.params.dskcloud_id}, req.body, function (err, dskcloud) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(dskcloud);
    });
});

router.delete('/dskcloud/:dskcloud_id', function (req, res) {
    Schema.remove({_id: req.params.dskcloud_id}, function (err, dskcloud) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(dskcloud);
    });
});

router.get('/dskcloud/count', function (req, res) {
    Schema.find().count({}, function (err, dskcloud) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send({dskcloud});
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Schema = require('../../../models/dao/client/client');

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/client', function (req, res) {
    Schema.find({}, function (err, client) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(client);
    });
});

router.post('/client', function (req, res) {
    const client = new Schema(req.body);
    client.save(function (err, client) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(client)
    });
});

router.put('/client/:client_id', function (req, res) {
    // Schema.findByIdAndUpdate({_id: req.params.client_id}, req.body, function (err, client) {
    //     client.save(function (err) {
    //         if (err)
    //             return res.status(500).send(err);
    //         res.status(200).send(client);
    //     })
    // });
    Schema.update({_id: req.params.client_id}, req.body, function (err, client) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(client);
    });
});

router.delete('/client/:client_id', function (req, res) {
    Schema.remove({_id: req.params.client_id}, function (err, client) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(client);
    });
});

router.get('/client/count', function (req, res) {
    Schema.find().count({}, function (err, client) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send({client});
    });
});

module.exports = router;
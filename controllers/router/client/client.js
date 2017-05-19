const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/client/client');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/client', function (req, res) {
    Schema.find({}, function (err, clients) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(clients);
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

module.exports = router;
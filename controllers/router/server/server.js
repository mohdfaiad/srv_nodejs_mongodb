const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/server/server');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/server', function (req, res) {
    Schema.find(function (err, servers) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(servers);
    });
});

router.post('/server', function (req, res) {
    const server = new Schema(req.body);
    server.save(function (err, server) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(server)
    });
});

router.put('/server/:server_id', function (req, res) {
    Schema.update({_id: req.params.server_id}, req.body, function (err, server) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(server);
    });
});

router.delete('/server/:server_id', function (req, res) {
    Schema.remove({_id: req.params.server_id}, function (err, server) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(server);
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/server/server_schema');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/server', function (req, res) {

    const server = new Schema(req.body);

    server.save(function (err, server) {

        if (err) return res.status(500).send(err);
        res.status(200).send(server)
    });
});

router.get('/server', function (req, res) {

    Schema.find(function (err, servers) {

        if (err) return res.status(500).send(err);
        res.status(200).send(servers);
    });
});

module.exports = router;
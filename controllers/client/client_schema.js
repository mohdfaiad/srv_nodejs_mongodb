const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../models/dao/client/client_schema');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/client', function (req, res) {

    const client = new Schema(req.body);

    client.save(function (err, client) {

        if (err) return res.status(500).send(err);
        res.status(200).send(client)
    });
});

router.get('/client', function (req, res) {

    Schema.find({}, function (err, clients) {

        if (err) return res.status(500).send(err);
        res.status(200).send(clients);
    });
});

router.get('/client/user/:username/:password', function (req, res) {

    Schema.find(

        {
            'cli_usr.cli_usr_password': req.params.password,
            'cli_usr.cli_usr_username': req.params.username

        }, function (err, users) {

            if (err) return res.status(500).send(err);
            res.status(200).send(users);

            console.log(users)
        });
});

module.exports = router;
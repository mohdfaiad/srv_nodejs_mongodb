const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/client/client_schema');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/client/user/:username/:password', function (req, res) {

    const username = req.params.username;
    const password = req.params.password;

    Schema.find({

            'cli_usr.cli_usr_password': password,
            'cli_usr.cli_usr_username': username

        }, function (err, users) {

            if (err) return res.status(500).send(err);
            res.status(200).send(users);

            console.log(users)
        });
});

module.exports = router;
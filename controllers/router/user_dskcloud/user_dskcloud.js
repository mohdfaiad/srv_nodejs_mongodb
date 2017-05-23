const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/client/client');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/dskcloud/user/:username/:password', function (req, res) {
    const username = req.params.username;
    const password = req.params.password;

    Schema.aggregate([
        {
            $match: {
                'cli_usr.cli_usr_username': username,
                'cli_usr.cli_usr_password': password
            }
        }, {
            $lookup: {
                from: 'dskclouds',
                localField: 'cli_email',
                foreignField: 'dsk_cli_usr_username',
                as: 'user_dskcloud'
            }
        }], function (err, user) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send(user);
    });
});

module.exports = router;

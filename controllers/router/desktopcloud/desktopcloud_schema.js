const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/desktopcloud/desktopcloud_schema');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/desktopcloud', function (req, res) {

    const desktopcloud = new Schema(req.body);

    desktopcloud.save(function (err, desktopcloud) {

        if (err) return res.status(500).send(err);
        res.status(200).send(desktopcloud)
    });
});

router.get('/desktopcloud', function (req, res) {

    Schema.find(function (err, desktopscloud) {

        if (err) return res.status(500).send(err);
        res.status(200).send(desktopscloud);
    });
});

module.exports = router;
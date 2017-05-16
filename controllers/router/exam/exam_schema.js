const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Schema = require('../../../models/dao/exam/exam_schema');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/exam', function (req, res) {

    const exam = new Schema(req.body);

    exam.save(function (err, exam) {

        if (err) return res.status(500).send(err);
        res.status(200).send(exam)
    });
});

router.get('/exam', function (req, res) {

    Schema.find({

    }, function (err, exams) {

        if (err) return res.status(500).send(err);
        res.status(200).send(exams);
    });
});

module.exports = router;
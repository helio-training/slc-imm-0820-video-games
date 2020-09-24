const express = require('express');
const router = express.Router();

const db = require('../../data/mongo');

/* GET games listing. */
router.get('/', function (req, res, next) {
    const info = {
        query: { },
        collection: req.app.locals.collectionVideoGames
    }
    db.readAll(info)
        .then((videoGames) => {
            res.json(videoGames);
        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/', function(req, res, next) {
    const info = {
        doc: req.body,
        collection: req.app.locals.collectionVideoGames
    }
    db.createOne(info)
        .then((data) => {
            res.json(data.ops[0]);
        })
        .catch(err => {
            console.log(err);
        })
});

/* GET games listing. */
router.get('/:key/:value', function (req, res, next) {
    const key = req.params.key;
    const value = parseInt(req.params.value);
    const info = {
        query: { [key] : value },
        collection: req.app.locals.collectionVideoGames
    }
    db.readAll(info)
        .then((videoGames) => {
            res.json(videoGames);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;

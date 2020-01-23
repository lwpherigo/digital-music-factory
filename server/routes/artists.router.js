const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const bodyParser = require('body-parser');
// const AWS = require('aws-sdk');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req, res) => {
    const queryText = `SELECT "id", "stage_name", "bio", "profile_pic" FROM "artists"`;
    pool.query(queryText)
        .then((response) => { res.send(response.rows); })
        .catch((err) => {
            console.log('Error with SELECT artists query: ', err);
            res.sendStatus(500);
        });
});

router.get('/selected/:id', (req, res) => {
    const artistId = req.params.id;
    const queryText = `SELECT * FROM "artists" WHERE "artists"."id" = $1;`;
    pool.query(queryText, [artistId])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('ERROR with SELECTING one Artist: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;
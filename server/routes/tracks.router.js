const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

/* GET songs for Trending Page */
router.get('/', (req, res) => {
    const queryText = `SELECT "title", "stage_name", "genre", "path" FROM "tracks" 
                            JOIN "artists" ON "artists"."id" = "tracks"."artist_id"`;
    pool.query(queryText)
        .then((response) => { res.send(response.rows); })
        .catch((err) => {
            console.log('Error with SELECT tracks query: ', err);
            res.sendStatus(500);
        });
});

/* GET for Results Page */
router.get('/search/:keyword', (req, res, next) => {
    let keyword;
    keyword = req.params.keyword;
    const queryText = `SELECT "title", "stage_name", "genre" FROM "tracks" 
                            JOIN "artists" ON "artists"."id" = "tracks"."artist_id"
                            WHERE "stage_name" LIKE '%${keyword}%'
                            OR "title" LIKE '%${keyword}%';`
    pool.query(queryText)
        .then((response) => { res.send(response.rows); })
        .catch((err) => {
            console.log('Error with SELECT results query: ', err);
            res.sendStatus(500);
        });
});

/* POST route template */
router.post('/search/process', (req, res) => {
    let keyword = req.body.keyword;
    console.log(keyword);
    res.redirect('/search');
});

module.exports = router;
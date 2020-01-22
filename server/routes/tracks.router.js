const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

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
    const queryText = `SELECT "title", "stage_name", "genre", "path" FROM "tracks" 
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

router.get('/download', (req, res) => {
    AWS.config.update(
        {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
    );

    const s3FileKey = 'Dark Horse w: Taylor DONE.wav';
    const s3 = new AWS.S3();
    s3.getObject(
        { Bucket: "dmf-bucket", Key: s3FileKey },
        function (error, data) {
            if (error != null) {
              console.log("Failed to retrieve an object: ", error);
              res.sendStatus(500);
            } else {
                console.log("AWS S3 data ", data);
                res.send({
                    s3: data,
                    fileName: s3FileKey
                });
            }
          }
    )
        // .then((response) => { res.send(response.rows); })
        // .catch((err) => {
        //     console.log('Error with SELECT for download query: ', err);
        //     res.sendStatus(500);
        // });
});

/* POST route template */
// router.post('/search/process', (req, res) => {
//     let keyword = req.body.keyword;
//     console.log(keyword);
//     res.redirect('/search');
// });

module.exports = router;
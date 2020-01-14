const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* GET route template */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM tracks`;
    pool.query(queryText)
        .then((response) => { res.send(response.rows); })
        .catch((err) => {
            console.log('Error with SELECT tracks query: ', err);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {

});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
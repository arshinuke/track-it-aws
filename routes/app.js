const express = require('express');
const router = express.Router();

const url = require('url');
const queryString = require('querystring');

/* Redirect to destination url*/
router.get('/redirect/', function (req, res, next) {

    let redirectUrl = null;
    const parsedUrl = url.parse(req.url);
    let parsedQueryString = queryString.parse(parsedUrl.query); // parsing to avoid protocol, slash, port etc.,

    for (const [key, value] of Object.entries(parsedQueryString)) {
       res.cookie(key, value);
        console.log('testing'+ key + ' .....'+ value);
       // res.setHeader('redirect', value);
        if (key === 'destUrl') {
            redirectUrl = value;
        }
    }
    res.redirect(redirectUrl);

});

module.exports = router;
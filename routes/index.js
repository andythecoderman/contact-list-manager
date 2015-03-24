"use strict"
var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/contacts', function(req, res, next) {
  //- Return List of customers from /data/sample-data.json
    res.setHeader('Content-Type', 'application/json');
    fs.createReadStream('data/sample-data.json').pipe(res);
});

module.exports = router;

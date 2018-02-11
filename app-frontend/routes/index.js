var path = require('path');
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/index', function(req, res) {
    fs.readFile('views/index.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.get('/list', function(req, res) {
    fs.readFile('views/listReport.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});


module.exports = router;

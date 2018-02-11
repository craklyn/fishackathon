var path = require('path');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var Web3 = require('web3');

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

router.get('/invasive', function(req, res) {
    fs.readFile('views/invasiveSpecies.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.use('/static', express.static(path.join(__dirname, 'public')))


module.exports = router;

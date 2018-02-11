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

router.get('/invasive', function(req, res) {
    fs.readFile('views/invasiveSpecies.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.get('/page1', function(req, res) {
    fs.readFile('views/page1.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.get('/page2', function(req, res) {
    fs.readFile('views/page2.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.get('/page3', function(req, res) {
    fs.readFile('views/page3.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.get('/page4', function(req, res) {
    fs.readFile('views/page4.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.get('/page5', function(req, res) {
    fs.readFile('views/page5.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.get('/page6', function(req, res) {
    fs.readFile('views/page6.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.get('/page7', function(req, res) {
    fs.readFile('views/page7.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});

router.get('/page8', function(req, res) {
    fs.readFile('views/page8.html', function (err, html) {
         res.writeHeader(200, {"Content-Type": 'text/html'});
         res.write(html);
         res.end();
    });
});



router.use('/static', express.static(path.join(__dirname, 'public')))


module.exports = router;

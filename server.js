// Dependencies ----------------------------------------------------------------
const fs            = require('fs');
const http          = require('http');
const https         = require('https');
const express       = require('express');
const compress      = require('compression');
const cors          = require('cors');
const path          = require('path');
const expressLess   = require('express-less');
const expressBabel  = require('express-babelify-middleware')


// Constants -------------------------------------------------------------------
global.rootdir      = __dirname + '/';

const http_port     = 80;
const https_port    = 443;
const app           = express();
const https_options = {
  key:  fs.readFileSync('./keys/key.pem'),
  cert: fs.readFileSync('./keys/cert.cert')
};


// Server's settings -----------------------------------------------------------
// Access-Control-Allow-Origin: *
app.use(cors());
// Gzip compression
app.use(compress({threshold: 512}));
// Hiding information about yourself
app.disable('x-powered-by');

// Static dir
app.use(express.static(rootdir + '/public'));

// Onfly-compilation less
app.use('/css', expressLess(rootdir + '/src/less', {
    debug:    true,
    compress: true
}));

// Onfly-compilation js
app.use('/js/main.js', expressBabel(rootdir + '/src/js/main.js', {
    minify: true
}));

// Including jade
app.set('views', path.join(rootdir + '/src'));
app.set('view engine', 'jade');
app.enable('view cache');
// Code prettify
app.locals.pretty = true;

// Routing ---------------------------------------------------------------------
// Index page
app.get('/', function (req, res) {
    res.render('index', {});
});
// Sitemap
app.get('/sitemap.xml', function (req, res) {
    var stat = fs.statSync(rootdir + '/src/sitemap.jade');
    var d = new Date(stat.mtime);

    res.setHeader('Content-type', 'application/xml; charset=utf-8');
    res.render('sitemap', {
        lastmod: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    });
});


// Starting server -------------------------------------------------------------
http.createServer(app).listen(http_port);
https.createServer(https_options, app).listen(https_port);

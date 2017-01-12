// Dependencies ----------------------------------------------------------------
const fs            = require('fs');
const http          = require('http');
const https         = require('https');
const compress      = require('compression');
const cors          = require('cors');
const path          = require('path');
const express       = require('express');
const expressLess   = require('express-less');
const httpsRedirect = require('express-https-redirect');
const slash         = require('express-slash');
const coffee        = require('coffee-middleware');

const routes        = require('./routes');

// Init ------------------------------------------------------------------------
const http_port  = 80;
const https_port = 443;
const app        = express();
const local      = !!~process.argv.indexOf('--local');

var https_options = local ? {} : {
    key:  fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.cert')
}

// Server's settings -----------------------------------------------------------
// Access-Control-Allow-Origin: *
app.use(cors());
// Gzip compression
app.use(compress({threshold: 512}));
// Hiding information about yourself
app.disable('x-powered-by');

// https redirect
!local && app.use('/', httpsRedirect());

// Static dir
app.use(express.static('./public'));

// Onfly-compilation less
app.use('/css', expressLess('./src/less', {
    debug:    true,
    compress: true
}));

// Onfly-compilation js
app.use('/js', coffee({
    src: './src/coffee',
    compress: true
}));

// Including jade
app.set('views', path.join('./src/jade'));
app.set('view engine', 'jade');
app.enable('view cache');
// Code prettify
app.locals.pretty = true;

// Routing ---------------------------------------------------------------------
app.use('/', routes);

// Fix shashes in url
app.use(slash());

// Listen ports ----------------------------------------------------------------
http.createServer(app).listen(http_port);
!local && https.createServer(https_options, app).listen(https_port);

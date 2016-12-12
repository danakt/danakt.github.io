// Dependencies ----------------------------------------------------------------
const express       = require('express');
const compress      = require('compression');
const cors          = require('cors');
const path          = require('path');
const expressLess   = require('express-less');
const expressBabel  = require('express-babelify-middleware')


// Constants -------------------------------------------------------------------
global.rootdir = __dirname + '/';

const port = 3000;
const app  = express();

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
// Code prettify
app.locals.pretty = true;

// Render jade pages
app.get('/', function (req, res) {
  res.render('index', {
      title:   'Hey',
      message: 'Hello there!'
  });
});

// Listen port
app.listen(port);

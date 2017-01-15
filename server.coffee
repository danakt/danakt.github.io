# Dependencies ----------------------------------------------------------------
fs            = require 'fs'
path          = require 'path'
http          = require 'http'
https         = require 'https'
compress      = require 'compression'
cors          = require 'cors'
express       = require 'express'
expressLess   = require 'express-less'
httpsRedirect = require 'express-https-redirect'
slash         = require 'express-slash'
coffee        = require 'coffee-middleware'

routes        = require './routes'

# Init -------------------------------------------------------------------------
app   = express()
local = Boolean ~process.argv.indexOf('--local')
port  =
    http:  80
    https: 443

https_options = if local then {} else
    key:  fs.readFileSync('./keys/key.pem')
    cert: fs.readFileSync('./keys/cert.cert')

# Server's settings ------------------------------------------------------------
app.use(cors())                            # Access-Control-Allow-Origin: *
app.use(compress(threshold: 512))          # Gzip compression
app.disable('x-powered-by')                # Hiding info about yourself
if !local
    app.use('/', httpsRedirect())          # redirect to https

app.use(express.static('./public'))        # Static dir

app.use('/css', expressLess(               # Onfly-compilation less
    './src/less',
        debug: true
        compress: true
))

app.use('/js', coffee(                     # Onfly-compilation js
    src: './src/coffee'
))

app.set('views', path.join('./src/jade'))  # Including jade
app.set('view engine', 'jade')
app.enable('view cache')
app.locals.pretty = true                   # Code prettify

# Routing ----------------------------------------------------------------------
app.use('/', routes)
app.use(slash())                           # Fix shashes in url

# Listen ports -----------------------------------------------------------------
http.createServer(app).listen(port.http)   # http

if !local
    https.createServer(https_options, app)
        .listen(port.https)                # https

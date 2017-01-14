express = require 'express'
router  = express.Router()

# Index page -------------------------------------------------------------------
router.get '/', (req, res) ->
    res.render 'index', {}
    return

# Sitemap ----------------------------------------------------------------------
router.get '/sitemap.xml', (req, res) ->
    stat = fs.statSync('./src/jade/sitemap.jade')
    d = new Date(stat.mtime)

    res.setHeader 'Content-type', 'application/xml; charset=utf-8'
    res.render(
        'sitemap',
        lastmod: "#{d.getFullYear()}-#{d.getMonth() + 1}-#{d.getDate()}"
    )
    return

# Export module ----------------------------------------------------------------
module.exports = router

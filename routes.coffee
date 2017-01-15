express = require 'express'
router  = express.Router()

# Index page -------------------------------------------------------------------
router.get('/', (req, res) ->
    res.render('index', {})
    return
)

# Sitemap ----------------------------------------------------------------------
router.get('/sitemap.xml', (req, res) ->
    stat    = fs.statSync('./src/jade/sitemap.jade')
    date    = new Date(stat.mtime)
    lastmod = "#{date.getFullYear()}-#{date.getMonth() + 1}-#{date.getDate()}"

    res.setHeader('Content-type', 'application/xml; charset=utf-8')
    res.render('sitemap', lastmod: lastmod)

    return
)

# Export module ----------------------------------------------------------------
module.exports = router

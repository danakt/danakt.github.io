const router = require('express').Router();

// Index page ------------------------------------------------------------------
router.get('/', (req, res) => {
    res.render('index', {});
});

// Sitemap ---------------------------------------------------------------------
router.get('/sitemap.xml', (req, res) => {
    var stat = fs.statSync('./src/jade/sitemap.jade');
    var d = new Date(stat.mtime);

    res.setHeader('Content-type', 'application/xml; charset=utf-8');
    res.render('sitemap', {
        lastmod: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    });
});

// Export module ---------------------------------------------------------------
module.exports = router;

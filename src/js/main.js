// Global variables ------------------------------------------------------------
var $ = {
    doc:        document,
    name:       '#name',
    video:      '#bgvid',
    videowrap:  '.bgvideo',
    glitch:     '.glitch',

    getElementsByTagName: function(tag) {
        return Array.prototype.slice.call(
            $.doc.getElementsByTagName(tag)
        )
    },
    querySelectorAll: function(query) {
        return Array.prototype.slice.call(
            $.doc.querySelectorAll(query)
        )
    },
    getElementById: function(id) {
        return $.doc.getElementById(id)
    },
    querySelector: function(query) {
        return $.doc.querySelector(query)
    }
};

// Dom ready -------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Updating variables with elements
    updateDOM($);
    // Glitch background video
    videoGlitchStart();
});

// Updating the $ object with elements -----------------------------------------
function updateDOM($) {
    for(var el in $) {
        if(typeof $[el] !== 'string')
            continue;

        var isID = ($[el][0] === '#' && ~$[el].indexOf(' '));
        if(isID) $[el][0] = '';

        var method = isID ? 'getElementById' : 'querySelector';
        $[el] = $[method]($[el]);
    }

    $.body = $.doc.body;
}

// Background video glitch -----------------------------------------------------
function videoGlitchStart() {
    var glitchInterval;
    var glitchTimeout;

    // Run glitch
    setTimeout(runGlitch, ~~(Math.random() * 5e3))

    // Runing random glitch
    function runGlitch() {
        clearTimeout(glitchTimeout);
        showGlitch();

        setTimeout(hideGlitch, Math.random() * 700 + 70);
        glitchTimeout = setTimeout(runGlitch, ~~(Math.random() * 1e4));
    }

    // Show glitch
    function showGlitch() {
        clearInterval(glitchInterval);

        var setRandomGlitchBg = () => {
            var randInt = ~~(Math.random() * 4);
            $.videowrap.setAttribute('id', 'glitch' + randInt);

            var lRange = 50;
            $.querySelectorAll('.glitch span').forEach(function(el) {
                el.style.visibility = 'visible';
                el.style.left    = (Math.random() * lRange - lRange / 2) +'px';
                el.style.opacity = Math.random() * .5;
                el.style.filter  = el.style.webkitFilter =
                    'blur('+ ~~Math.random() +'px)';
            });
            $.glitch.style.opacity = Math.random() * .6;
            $.glitch.style.filter  = $.glitch.style.webkitFilter =
                'blur('+ ~~Math.random() +'px)';
        }

        setRandomGlitchBg();
        glitchInterval = setInterval(setRandomGlitchBg, 33);
    };

    // Hide glitch
    function hideGlitch(){
        clearInterval(glitchInterval);
        $.videowrap.removeAttribute('id');

        $.querySelectorAll('.glitch span').forEach(function(el) {
            el.style.visibility = 'hidden';
            el.style.opacity = el.style.left = el.style.top = 0;
            el.style.filter  = 'blur(0)';
        });
        $.glitch.style.opacity = 1;
        $.glitch.style.filter = 'blur(0)';
    }

    // Runing video end glitch
    $.video.addEventListener('ended', function(event) {
        showGlitch();

        setTimeout(() => {
            hideGlitch();
            $.video.play();
        }, 300);

        glitchTimeout = setTimeout(runGlitch, ~~(Math.random() * 1e4));
    });
}

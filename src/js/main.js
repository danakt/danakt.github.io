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
function ready() {
    // Updating variables with elements
    updateDOM($);
    // Shuffle name
    // shuffleText($.name, {speed: 150, charDelay: 30, startDelay: 500});
    // Glitch background video
    videoGlitchStart();
}

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

// Shuffle text effect ---------------------------------------------------------
function shuffleText(el, settings) {
    clearInterval(el.shuffleInterval);
    clearInterval(el.writeInterval);

    settings = settings || {};

    settings.speed      = settings.speed      || 60;
    settings.charDelay  = settings.charDelay  || 20;
    settings.startDelay = settings.startDelay || settings.charDelay;

    el.storeText = el.storeText || el.innerHTML;

    var chars = '!@$%^&_+"?:;~`_qwertyuiopasdfghjklzxcvbnm1234567890';
    var writedHTML = '';

    el.shuffleInterval = setInterval(function() {
        var strLen = settings.write
            ? +settings.write
            : el.storeText.length - writedHTML.length;
        el.innerHTML = (
            writedHTML +
            Array(strLen)
                .fill('')
                .map(char => chars[~~(Math.random() * chars.length)])
                .join('')
        ).substr(0, el.storeText.length);

    }, settings.charDelay);

    el.startDelay = setTimeout(function() {
        el.writeInterval = setInterval(function() {
            if(writedHTML.length === el.storeText.length) {
                clearInterval(el.shuffleInterval);
                clearInterval(el.writeInterval);
            }

            writedHTML += el.storeText[writedHTML.length];
        }, settings.speed);
    }, settings.startDelay);
}

// Binding shuffle links -------------------------------------------------------
function bindShuffleLinks() {
    $.getElementsByTagName('a').forEach(el => {
        if(~el.className.indexOf('active'))
            return;

        el.addEventListener('mouseover', () => {
            shuffleText(el, {speed: 50})
        });

        el.addEventListener('mouseout', () => {
            clearInterval(el.shuffleInterval);
            clearInterval(el.writeInterval);

            el.innerHTML = el.storeText || el.innerHTML;
        });
    });
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

// Listeners -------------------------------------------------------------------

// DOM Ready lestener
document.addEventListener('DOMContentLoaded', ready);

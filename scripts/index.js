var Glitch = (function () {
    function Glitch() {
        var _this = this;
        this.nameElement = document.getElementById('name');
        this.videoElement = document.getElementById('bgvid');
        this.videoWrapElement = document.getElementsByClassName('bgvideo')[0];
        this.glitchNameElement = document.getElementsByClassName('glitch')[0];
        this.glitchNameFrames = [].slice.call(document.querySelectorAll('.glitch span'));
        setTimeout(function () {
            _this.runGlitch();
        }, this.getRandomInt(5000));
        this.videoElement.addEventListener('ended', function (event) {
            _this.showGlitch();
            setTimeout(function () {
                _this.hideGlitch();
                _this.videoElement.play();
            }, 300);
            _this.glitchTimeout = _this.setTimeout(function () {
                _this.runGlitch();
            }, _this.getRandomInt(1e4));
        });
    }
    Glitch.prototype.runGlitch = function () {
        var _this = this;
        clearTimeout(this.glitchTimeout);
        this.showGlitch();
        setTimeout(function () {
            _this.hideGlitch();
        }, this.getRandomInt(700) + 70);
        this.glitchTimeout = this.setTimeout(function () {
            _this.runGlitch();
        }, this.getRandomInt(1e4));
    };
    Glitch.prototype.showGlitch = function () {
        var _this = this;
        clearInterval(this.glitchInterval);
        this.randomizeGlitchFrame();
        this.glitchInterval = this.setInterval(function () {
            _this.randomizeGlitchFrame();
        }, 33);
    };
    Glitch.prototype.randomizeGlitchFrame = function () {
        var _this = this;
        var randInt = this.getRandomInt(4);
        var lRange = 50;
        this.videoWrapElement.setAttribute('id', 'glitch' + randInt);
        this.glitchNameFrames.forEach(function (frameElement) {
            _this.applyStyles(frameElement, {
                visibility: 'visible',
                left: Math.random() * lRange - (lRange / 2) + 'px',
                opacity: String(Math.random() * .5),
                filter: 'blur(' + Math.random() + 'px)',
                webkitFilter: 'blur(' + Math.random() + 'px)',
            });
        });
        this.applyStyles(this.glitchNameElement, {
            opacity: String(Math.random() * .6),
            filter: 'blur(' + Math.random() + 'px)',
            webkitFilter: 'blur(' + Math.random() + 'px)',
        });
    };
    Glitch.prototype.hideGlitch = function () {
        var _this = this;
        clearInterval(this.glitchInterval);
        this.videoWrapElement.removeAttribute('id');
        this.glitchNameFrames.forEach(function (el) {
            _this.applyStyles(el, {
                visibility: 'hidden',
                opacity: el.style.left = el.style.top = '0',
                filter: 'blur(0)',
            });
        });
        this.applyStyles(this.glitchNameElement, {
            opacity: '1',
            filter: 'blur(0)',
        });
    };
    Glitch.prototype.applyStyles = function (element, styles) {
        for (var prop in styles) {
            element.style[prop] = styles[prop];
        }
    };
    Glitch.prototype.getRandomInt = function (max) {
        return Math.random() * max | 0;
    };
    Glitch.prototype.setTimeout = function (handler, time) {
        var timerId = setTimeout(handler, time);
        return Number(timerId);
    };
    Glitch.prototype.setInterval = function (handler, time) {
        var timerId = setInterval(handler, time);
        return Number(timerId);
    };
    return Glitch;
}());

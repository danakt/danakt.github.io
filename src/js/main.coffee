# Global variables -------------------------------------------------------------
$ =
    doc:       document
    name:      '#name'
    video:     '#bgvid'
    videowrap: '.bgvideo'
    glitch:    '.glitch'
    getElementsByTagName: (tag) ->
        Array::slice.call($.doc.getElementsByTagName(tag))
    querySelectorAll: (query) ->
        Array::slice.call($.doc.querySelectorAll(query))
    getElementById: (id) ->
        $.doc.getElementById(id)
    querySelector: (query) ->
        $.doc.querySelector(query)

# Updating the $ object with elements ------------------------------------------
updateDOM = ($) ->
    for el of $
        if typeof $[el] != 'string'
            continue

        isID = $[el][0] == '#' and ~$[el].indexOf(' ')
        if isID
            $[el][0] = ''

        method = if isID then 'getElementById' else 'querySelector'
        $[el] = $[method]($[el])

    $.body = $.doc.body
    return

# Background video glitch ------------------------------------------------------
videoGlitchStart = ->
    glitchInterval = null
    glitchTimeout  = null

    # Runing random glitch
    runGlitch = ->
        clearTimeout(glitchTimeout)
        showGlitch()
        setTimeout(hideGlitch, Math.random() * 700 + 70)
        glitchTimeout = setTimeout(runGlitch, ~~(Math.random() * 1e4))
        return

    # Show glitch
    showGlitch = ->
        clearInterval(glitchInterval)

        setRandomGlitchBg = ->
            randInt = ~~(Math.random() * 4)
            $.videowrap.setAttribute('id', 'glitch' + randInt)

            lRange = 50
            $.querySelectorAll('.glitch span').forEach (el) ->
                el.style.visibility = 'visible'
                el.style.left = Math.random() * lRange - (lRange / 2) + 'px'
                el.style.opacity = Math.random() * .5
                el.style.filter = el.style.webkitFilter =
                    'blur(' + ~~Math.random() + 'px)'
                return

            $.glitch.style.opacity = Math.random() * .6
            $.glitch.style.filter  = $.glitch.style.webkitFilter =
                'blur(' + ~~Math.random() + 'px)'
            return

        setRandomGlitchBg()
        glitchInterval = setInterval(setRandomGlitchBg, 33)
        return

    # Hide glitch
    hideGlitch = ->
        clearInterval(glitchInterval)
        $.videowrap.removeAttribute('id')
        $.querySelectorAll('.glitch span').forEach (el) ->
            el.style.visibility = 'hidden'
            el.style.opacity    = el.style.left = el.style.top = 0
            el.style.filter     = 'blur(0)'
            return

        $.glitch.style.opacity = 1
        $.glitch.style.filter  = 'blur(0)'
        return

    # Run glitch
    setTimeout(runGlitch, ~~(Math.random() * 5e3))

    # Runing video end glitch
    $.video.addEventListener('ended', (event) ->
        showGlitch()
        setTimeout (->
            hideGlitch()
            $.video.play()
            return
        ), 300

        glitchTimeout = setTimeout(runGlitch, ~~(Math.random() * 1e4))
        return
    )
    return

# Dom ready --------------------------------------------------------------------
document.addEventListener 'DOMContentLoaded', ->
    # Updating variables with elements
    updateDOM($)
    # Glitch background video
    videoGlitchStart()
    return

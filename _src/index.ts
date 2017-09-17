class Glitch {
    private nameElement:        HTMLHeadingElement
    private videoElement:       HTMLVideoElement
    private videoWrapElement:   HTMLDivElement
    private glitchNameElement:  HTMLHeadingElement
    private glitchNameFrames:   HTMLSpanElement[]

    private glitchInterval:     number
    private glitchTimeout:      number

    constructor() {
        this.nameElement       = <HTMLHeadingElement>document.getElementById('name')
        this.videoElement      = <HTMLVideoElement>document.getElementById('bgvid')
        this.videoWrapElement  = <HTMLDivElement>document.getElementsByClassName('bgvideo')[0]
        this.glitchNameElement = <HTMLHeadingElement>document.getElementsByClassName('glitch')[0]
        this.glitchNameFrames  = <HTMLSpanElement[]>[].slice.call(document.querySelectorAll('.glitch span'))

        // Запуск глитч-анимации
        setTimeout(() => {
            this.runGlitch()
        }, this.getRandomInt(5000))

        // Обработка окончания видео
        this.videoElement.addEventListener('ended', event => {
            this.showGlitch()

            setTimeout(() => {
                this.hideGlitch()
                this.videoElement.play()
            }, 300)

            this.glitchTimeout = this.setTimeout(() => {
                this.runGlitch()
            }, this.getRandomInt(1e4))
        })
    }

    /** Запускает глитч-анимацию */
    private runGlitch(): void {
        clearTimeout(this.glitchTimeout)
        this.showGlitch()

        setTimeout(() => {
            this.hideGlitch()
        }, this.getRandomInt(700) + 70)

        this.glitchTimeout = this.setTimeout(() => {
            this.runGlitch()
        }, this.getRandomInt(1e4))
    }

    /** Отображает глитч-анимацию */
    private showGlitch(): void {
        clearInterval(this.glitchInterval)

        this.randomizeGlitchFrame()

        this.glitchInterval = this.setInterval(() => {
            this.randomizeGlitchFrame()
        }, 33)
    }

    /** Обновляет кадр глитч-анимации */
    private randomizeGlitchFrame(): void {
        const randInt: number = this.getRandomInt(4)
        const lRange: number  = 50

        this.videoWrapElement.setAttribute('id', 'glitch' + randInt);

        this.glitchNameFrames.forEach(frameElement => {
            this.applyStyles(frameElement, {
                visibility:     'visible',
                left:           Math.random() * lRange - (lRange / 2) + 'px',
                opacity:        String(Math.random() * .5),
                filter:         'blur(' + Math.random() + 'px)',
                webkitFilter:   'blur(' + Math.random() + 'px)',
            })
        })

        this.applyStyles(this.glitchNameElement, {
            opacity:        String(Math.random() * .6),
            filter:         'blur(' + Math.random() + 'px)',
            webkitFilter:   'blur(' + Math.random() + 'px)',
        })
    }

    /** Скрывает глитч-анимацию */
    private hideGlitch(): void {
        clearInterval(this.glitchInterval)

        this.videoWrapElement.removeAttribute('id')
        this.glitchNameFrames.forEach(el => {
            this.applyStyles(el, {
                visibility: 'hidden',
                opacity:    el.style.left = el.style.top = '0',
                filter:     'blur(0)',
            })
        })

        this.applyStyles(this.glitchNameElement, {
            opacity: '1',
            filter:  'blur(0)',
        })
    }

    /**
     * Применяет стили к элементу
     * @param {HTMLElement} element — html-элемент
     * @param {Object}      styles  — объект со стилями
     */
    private applyStyles(element: HTMLElement, styles: { [prop: string]: null | string }): void {
        for (let prop in styles) {
            element.style[prop] = styles[prop]
        }
    }

    /**
     * Генерирует случайное целого число от нуля до указанного в параметрах
     * @param  {number} max — максимальное значение
     * @return {number}     — случайное целое число
     */
    private getRandomInt(max: number): number {
        return Math.random() * max | 0
    }

    /**
     * Устанавливает таймер
     * @return {number} — id таймера
     */
    private setTimeout(handler: Function, time: number) {
        const timerId = setTimeout(handler, time)

        return Number(timerId)
    }

    /**
     * Устанавливает интервал
     * @return {number} — id интервала
     */
    private setInterval(handler: Function, time: number) {
        const timerId = setInterval(handler, time)

        return Number(timerId)
    }
}

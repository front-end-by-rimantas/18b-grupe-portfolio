class Achievements {
    constructor(params) {
        this.selector = params.selector;
        this.insertionPosition = params.insertionPosition || 'beforeend';
        this.data = params.data;

        this.DOM = null;
        this.achievementsDOM = null;
        this.achievementsValueDOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
        this.scrollAnimation();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        let HTML = '';

        for (let ach of this.data) {
            HTML += `<div class="achievement col-3 col-lg-6 col-sm-12">
                        <div class="title">${ach.title}</div>
                        <div class="value">0</div>
                        <div class="subtitle">${ach.subtitle}</div>
                    </div>`;
        }

        this.DOM.insertAdjacentHTML(this.insertionPosition, HTML);
        this.achievementsDOM = this.DOM.querySelectorAll('.achievement');
        this.achievementsValueDOM = this.DOM.querySelectorAll('.achievement > .value');
    }

    scrollAnimation() {
        const screenBottomY = scrollY + innerHeight;

        for (let i = 0; i < this.data.length; i++) {
            const ach = this.achievementsValueDOM[i];

            if (ach.dataset.run) {
                continue;
            }
            const achBottomY = ach.offsetTop + ach.offsetHeight;
            if (achBottomY < screenBottomY) {
                ach.dataset.run = true;

                let currentValue = 0;
                const finalValue = this.data[i].value;
                const timeAmount = 1;                   // seconds
                const fps = 24;                         // frames per second
                let step = 0;
                const totalSteps = timeAmount * fps;

                const timer = setInterval(() => {
                    step++;
                    currentValue = Math.ceil(finalValue / totalSteps * step);
                    this.achievementsValueDOM[i].innerText = currentValue;

                    if (currentValue >= finalValue) {
                        clearInterval(timer);
                    }
                }, 1000 / fps);
            }
        }
    }

    addEvents() {
        addEventListener('scroll', () => {
            this.scrollAnimation();
        })
    }
}

export { Achievements }
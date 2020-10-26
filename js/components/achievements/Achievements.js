class Achievements {
    constructor(params) {
        console.log(params);
        this.selector = params.selector;
        this.insertionPosition = params.insertionPosition || 'beforeend';
        this.data = params.data;

        this.DOM = null;

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
                        <div class="value">${ach.value}</div>
                        <div class="subtitle">${ach.subtitle}</div>
                    </div>`;
        }

        this.DOM.insertAdjacentHTML(this.insertionPosition, HTML);
    }

    scrollAnimation() {
        const achievements = this.DOM.querySelectorAll('.achievement');
        const screenBottomY = scrollY + innerHeight;

        for (let ach of achievements) {
            const achBottomY = ach.offsetTop + ach.offsetHeight;
            if (achBottomY < screenBottomY) {
                console.log('Run counter...');
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
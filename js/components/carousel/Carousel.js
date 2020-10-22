class Carousel {
    constructor(params) {
        this.data = params.data;
        this.renderEngine = params.renderEngine;
        this.itemPerView = params.itemPerView || 1;

        this.DOM = null;
        this.listDOM = null;

        this.contentObj = new this.renderEngine(this.data);
        this.contentHTML = this.contentObj.generateHTML();

        console.log(this.data);

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.data.selector);
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    render() {
        const total = this.data.data.length;
        const dotsCount = total - this.itemPerView;
        let dotsHTML = '<div class="dot active"></div>';
        dotsHTML += '<div class="dot"></div>'.repeat(dotsCount > 0 ? dotsCount : 0);

        const listWidth = 100 * total / this.itemPerView;

        this.DOM.innerHTML = `<div class="carousel">
                                <div class="content">
                                    <div class="list" style="width: ${listWidth}%;">
                                        ${this.contentHTML}
                                    </div>
                                </div>
                                <div class="actions">${dotsHTML}</div>
                            </div>`;

        this.listDOM = this.DOM.querySelector('.content > .list');
    }

    addEvents() {
        // paspaudus taskiukus turi judeti/slinktis turinys

        // keiciantis ekrano plociui, reikia pakeisti rodomu elementu plocius
        // infinity..1000 : 3
        // 999..600 : 2
        // 599..0 : 1
        const breakpoints = [800];

        addEventListener('resize', () => {
            let itemsPerView = 1;
            for (let width of breakpoints) {
                if (width < innerWidth) {
                    itemsPerView++;
                }
            }

            const total = this.data.data.length;
            const listWidth = 100 * total / itemsPerView;

            this.listDOM.style.width = listWidth + '%';
        })
    }
}

export { Carousel }
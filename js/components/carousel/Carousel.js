import { Actions } from './Actions.js';
import { List } from './List.js';

class Carousel {
    constructor(params) {
        this.data = params.data;
        this.renderEngine = params.renderEngine;
        this.breakpoints = params.breakpoints;

        this.DOM = null;
        this.listDOM = null;
        this.actionsDOM = null;
        this.activeItem = 0;
        this.itemPerView = 1;

        this.contentObj = new this.renderEngine(this.data);
        this.contentHTML = this.contentObj.generateHTML();

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
        this.updateListWidth();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.data.selector);
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    renderDots() {
        const total = this.data.data.length;
        let dotsCount = total - this.itemPerView;
        dotsCount = dotsCount > 0 ? dotsCount : 0;

        let dotsHTML = '';
        for (let i = 0; i <= dotsCount; i++) {
            const active = this.activeItem === i ? 'active' : '';
            dotsHTML += `<div class="dot ${active}" data-index="${i}"></div>`;
        }

        return dotsHTML;
    }

    render() {
        this.DOM.innerHTML = `<div class="carousel">
                                <div class="content">
                                    <div class="list" style="width: 100%;">
                                        ${this.contentHTML}
                                    </div>
                                </div>
                                <div class="actions">${this.renderDots()}</div>
                            </div>`;

        this.listDOM = this.DOM.querySelector('.content > .list');
        this.actionsDOM = this.DOM.querySelector('.actions');
    }

    updateListWidth() {
        // keiciantis ekrano plociui, reikia pakeisti rodomu elementu plocius
        // infinity..1000 : 3
        // 999..600 : 2
        // 599..0 : 1
        let itemsPerView = 1;
        for (let width of this.breakpoints) {
            if (width < innerWidth) {
                itemsPerView++;
            }
        }

        this.itemPerView = itemsPerView;

        const total = this.data.data.length;
        const listWidth = 100 * total / itemsPerView;

        this.listDOM.style.width = listWidth + '%';
        this.actionsDOM.innerHTML = this.renderDots();
        this.dotClick();
    }

    dotClick() {
        const dots = this.actionsDOM.querySelectorAll('.dot');
        for (let dot of dots) {
            dot.addEventListener('click', () => {
                dots[this.activeItem].classList.remove('active');
                const index = parseInt(dot.dataset.index);
                this.activeItem = index;
                dots[this.activeItem].classList.add('active');
                const diff = -100 / this.data.data.length * this.activeItem;
                this.listDOM.style.transform = `translateX(${diff}%)`;
            })
        }
    }

    addEvents() {
        // paspaudus taskiukus turi judeti/slinktis turinys
        this.dotClick();

        window.addEventListener('resize', () => {
            this.updateListWidth();
        });
    }
}

export { Carousel }
class Carousel {
    constructor(params) {
        this.data = params.data;
        this.renderEngine = params.renderEngine;

        this.DOM = null;

        this.contentObj = new this.renderEngine();
        this.contentHTML = this.contentObj.generateHTML();

        console.log(this.data);

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
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
        this.DOM.innerHTML = `<div class="carousel">
                                ${this.contentHTML}
                            </div>`;
    }
}

export { Carousel }
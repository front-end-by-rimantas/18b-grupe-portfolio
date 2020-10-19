import { Logo } from './Logo.js';

class Header {
    constructor(params) {
        this.selector = params.selector;
        this.langs = params.lang;
        this.logo = params.logo;
        this.menu = params.menu;
        this.search = params.search;

        this.DOM = null;

        this.render();
    }

    /**
     * Generuoja viso header elemento HTML.
     */
    generateHTML() {
        const logo = new Logo();
        const logoHTML = logo.generateHTML();

        // const menu = new Menu();
        // const menuHTML = menu.generateHTML();

        return logoHTML;
    }

    /**
     * Selector validacija ir DOM vietos radimas
     */
    isValidSelector() {
        const DOM = document.querySelector(this.selector);

        if (DOM) {
            this.DOM = DOM;
            return true;
        }

        return false;
    }

    /**
     * Header HTML istatyti i DOM
     */
    render() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.DOM.innerHTML = this.generateHTML();
    }
}

export { Header }
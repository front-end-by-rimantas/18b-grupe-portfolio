import { Logo } from './Logo.js';
import { Menu } from './Menu.js';
import { Search } from './Search.js';
import { LanguagesSwitcher } from './LanguagesSwitcher.js';

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
     * @returns {string} Bendras header HTML
     */
    generateHTML() {
        const logo = new Logo(this.logo);
        const logoHTML = logo.generateHTML();

        const menu = new Menu(this.menu);
        const menuHTML = menu.generateHTML();

        const langs = new LanguagesSwitcher(this.langs);
        const langsHTML = langs.generateHTML();

        const search = new Search(this.search);
        const searchHTML = search.generateHTML();

        return logoHTML + menuHTML + langsHTML + searchHTML;
    }

    /**
     * Selector validacija ir DOM vietos radimas
     * @returns {boolean} Ar validus selector ir atnaujina this.DOM reiksme
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
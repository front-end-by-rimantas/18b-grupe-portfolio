import { Ad } from './Ad.js';
import { Logo } from './Logo.js';
import { Menu } from './Menu.js';
import { Search } from './Search.js';
import { LanguagesSwitcher } from './LanguagesSwitcher.js';

class Header {
    constructor(params) {
        this.selector = params.selector;
        this.ad = params.ad;
        this.langs = params.lang;
        this.logo = params.logo;
        this.menu = params.menu;
        this.search = params.search;

        this.adObj = new Ad(this.ad);
        this.logoObj = new Logo(this.logo);
        this.menuObj = new Menu(this.menu);
        this.langsObj = new LanguagesSwitcher(this.langs);
        this.searchObj = new Search(this.search);

        this.DOM = null;

        this.render();
        this.addEvents();
    }

    /**
     * Generuoja viso header elemento HTML.
     * @returns {string} Bendras header HTML
     */
    generateHTML() {
        const adHTML = this.adObj.generateHTML();
        const logoHTML = this.logoObj.generateHTML();
        const menuHTML = this.menuObj.generateHTML();
        const langsHTML = this.langsObj.generateHTML();
        const searchHTML = this.searchObj.generateHTML();

        return `${adHTML}
                <div class="header-bottom">
                    ${logoHTML}
                    <i class="fa fa-bars"></i>
                    <div class="menu-content">
                        ${menuHTML}
                        ${langsHTML}
                        ${searchHTML}
                    </div>
                </div>`;
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

        this.langsObj.addEvents();
    }

    addEvents() {
        const adVisibilityHeight = 200;
        const adDOM = this.DOM.querySelector('.ad');

        addEventListener('scroll', () => {
            if (scrollY > adVisibilityHeight) {
                adDOM.classList.add('remove');
            } else {
                adDOM.classList.remove('remove');
            }
        })
    }
}

export { Header }
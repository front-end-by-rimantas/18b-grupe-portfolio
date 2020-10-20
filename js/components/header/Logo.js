
class Logo {
    /**
     * Headeryje naudojama logo kurianti klase
     */
    constructor(params) {
        this.desktop = params.desktop || '';
        this.mobile = params.mobile || '';
    }

    isValid() {
        if (typeof this.desktop !== 'string') {
            return false;
        }
        if (typeof this.mobile !== 'string') {
            return false;
        }
        if (this.desktop === '' && this.mobile === '') {
            return false;
        }

        return true;
    }

    /**
     * Generuoja logo elemento HTML.
     */
    generateHTML() {
        if (!this.isValid()) {
            return '';
        }
        let logo = this.desktop;
        if (logo === '') {
            logo = this.mobile;
        }
        // TODO: reik atvaizduoti abi versijas, t.y. ir desktop img, ir mobile img (del responsive design)
        return `<img class="logo" src="${logo}" alt="Logo">`;
    }
}

export { Logo }
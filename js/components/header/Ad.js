class Ad {
    /**
     * Headeryje naudojama ad kurianti klase
     */
    constructor(params) {
        this.followingText = params.followingText;
        this.link = params.link;
    }

    isValid() {
        return true;
    }

    /**
     * Generuoja ad elemento HTML.
     */
    generateHTML() {
        if (!this.isValid()) {
            return '';
        }
        return `<div class="ad">
                    <a href="${this.link.href}">${this.link.text}</a>
                    <p>${this.followingText}</p>
                </div>`;
    }
}

export { Ad }
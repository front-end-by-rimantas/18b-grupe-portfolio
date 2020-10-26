class LanguagesSwitcher {
    constructor(params) {
        this.activeLang = localStorage.getItem('mitech-lang') || params.activeLang;
        this.imgPath = params.imgPath;
        this.langList = params.langList;

        this.DOM = null;
    }

    /**
     * Generuoja logo elemento HTML.
     */
    generateHTML() {
        let langsHTML = '';
        let activeLangFullName = '';
        for (let lang of this.langList) {
            if (lang.name === this.activeLang) {
                activeLangFullName = lang.fullName;
            } else {
                langsHTML += `<div class="lang-item" data-lang="${lang.name}">
                                <img src="${this.imgPath}${lang.flag}" alt="Language flag">
                                <span class="name">${lang.fullName}</span>
                            </div>`;
            }
        }

        return `<div class="lang-switch">
                    <div class="selected-lang">
                        <img src="${this.imgPath}${this.activeLang}.png" alt="Language flag">
                        <span class="name">${activeLangFullName}</span>
                        <span class="fa fa-angle-down"></span>
                    </div>
                    <div class="lang-list">${langsHTML}</div>
                </div>`;
    }

    addEvents() {
        this.DOM = document.querySelector('.lang-switch');
        const langs = this.DOM.querySelectorAll('.lang-item');

        for (let lang of langs) {
            lang.addEventListener('click', (e) => {
                const parent = e.target.closest('.lang-item');
                const clickedLang = parent.dataset.lang;
                localStorage.setItem('mitech-lang', clickedLang);
                location.reload();
            })
        }
    }
}

export { LanguagesSwitcher }
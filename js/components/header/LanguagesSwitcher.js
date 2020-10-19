class LanguagesSwitcher {
    constructor() {

    }

    /**
     * Generuoja logo elemento HTML.
     */
    generateHTML() {
        return `<div class="lang-switch">
                    <div class="selected-lang">
                        <img src="#" alt="Language flag">
                        <span class="name">English</span>
                        <span class="fa fa-angle-down"></span>
                    </div>
                    <div class="lang-list">
                        <div class="lang-item">
                            <img src="#" alt="Language flag">
                            <span class="name">Lietuvių</span>
                        </div>
                        <div class="lang-item">
                            <img src="#" alt="Language flag">
                            <span class="name">Pycckuu</span>
                        </div>
                    </div>
                </div>`;
    }
}

export { LanguagesSwitcher }
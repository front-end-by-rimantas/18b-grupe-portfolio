class Search {
    constructor() {

    }

    /**
     * Generuoja logo elemento HTML.
     */
    generateHTML() {
        return `<div class="search">
                    <input type="text" placeholder="Search">
                    <i class="fa fa-search"></i>
                </div>`;
    }
}

export { Search }
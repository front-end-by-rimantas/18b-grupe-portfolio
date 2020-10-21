class Menu {
    constructor(params) {
        this.data = params;
    }

    generateMenuItem() {

    }

    generateMenu(data) {
        let HTML = '';
        for (let item of data) {
            HTML += `<div class="menu-item">
                        <div class="top">
                            <span class="name">${item.text}</span>
                            ${!item.subMenu ? '' : '<span class="fa fa-angle-down"></span>'}
                        </div>`;
            if (item.subMenu) {
                HTML += '<div class="dropdown">';
                HTML += this.generateMenu(item.subMenu);
                HTML += '</div>';
            }
            HTML += '</div>';
        }
        return HTML;
    }

    /**
     * Generuoja logo elemento HTML.
     */
    generateHTML() {
        return `<nav>${this.generateMenu(this.data)}</nav>`;
    }
}

export { Menu }
class Menu {
    constructor() {

    }

    /**
     * Generuoja logo elemento HTML.
     */
    generateHTML() {
        return `<nav>
                    <div class="menu-item">
                        <div class="top">
                            <span class="name">Home</span>
                            <span class="fa fa-angle-down"></span>
                        </div>
                        <div class="dropdown">
                            <div class="menu-item">
                                <div class="top">
                                    <span class="name">Infotechno</span>
                                    <span class="fa fa-angle-down"></span>
                                </div>
                            </div>
                            <div class="menu-item">
                                <div class="top">
                                    <span class="name">Processing</span>
                                    <span class="fa fa-angle-down"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="top">
                            <span class="name">Company</span>
                            <span class="fa fa-angle-down"></span>
                        </div>
                        <div class="dropdown">
                            <div class="menu-item">
                                <div class="top">
                                    <span class="name">Infotechno</span>
                                    <span class="fa fa-angle-down"></span>
                                </div>
                            </div>
                            <div class="menu-item">
                                <div class="top">
                                    <span class="name">Processing</span>
                                    <span class="fa fa-angle-down"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>`;
    }
}

export { Menu }
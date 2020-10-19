const headerData = {
    selector: '#main_header',
    logo: {
        desktop: './img/logo.png',
        mobile: './img/logo-mobile.png',
    },
    lang: {
        imgPath: './img/lang-flags/',
        activeLang: 'en',
        langList: [
            {
                name: 'en',
                fullName: 'English',
                flag: 'en-flag.jpg'
            },
            {
                name: 'lt',
                fullName: 'Lietuvių',
                flag: 'lt-flag.jpg'
            },
            {
                name: 'ru',
                fullName: 'Pycckuu',
                flag: 'ru-flag.jpg'
            },
        ]
    },
    menu: [
        {
            text: 'Home',
            link: '#',
            subMenuType: 'normal',
            subMenu: [
                {
                    text: 'Infotechno',
                    link: '#',
                },
                {
                    text: 'Processing',
                    link: '#',
                },
            ],
        },
        {
            text: 'Company',
            link: '#',
            subMenuType: 'normal',
            subMenu: [
                {
                    text: 'About us',
                    link: '#',
                    subMenuType: 'normal',
                    subMenu: [
                        {
                            text: 'Vilnius',
                            link: '#',
                        },
                        {
                            text: 'Kaunas',
                            link: '#',
                        },
                    ],
                },
                {
                    text: 'Contact us',
                    link: '#',
                },
            ],
        },
        {
            text: 'IT Solutions',
            link: '#',
            subMenuType: 'normal',
            subMenu: [
                {
                    text: 'IT services',
                    link: '#',
                },
                {
                    text: 'Industries',
                    link: '#',
                },
            ],
        },
        {
            text: 'Elements',
            link: '#',
            subMenuType: 'megamenu',
        },
        {
            text: 'Case Studies',
            link: '#',
            subMenuType: 'normal',
            subMenu: [
                {
                    text: 'Case study 1',
                    link: '#',
                },
                {
                    text: 'Case study 2',
                    link: '#',
                },
            ],
        },
        {
            text: 'Blog',
            link: '#',
            subMenuType: 'normal',
            subMenu: [
                {
                    text: 'New posts',
                    link: '#',
                },
                {
                    text: 'New projects',
                    link: '#',
                },
                {
                    text: 'New stuff',
                    link: '#',
                },
            ],
        },
    ],
    search: {
        icon: {
            faClass: 'fa fa-search',
            visible: true
        },
        placeholder: 'Search...',
    }
}

export { headerData }
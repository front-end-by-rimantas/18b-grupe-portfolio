const servicesData = {
    selector: '#services_block',
    imagePath: './img/services/',
    services: [
        {
            image: 'service-1.png',
            imageAlt: 'Design image',
            // title: 'IT Design',
            description: 'We provide the most responsive and functional IT design for companies and businesses worldwide.',
            link: '#',
            active: true
        },
        {
            image: 'service-2.png',
            imageAlt: 'Management image',
            title: 'IT Management',
            description: 'It’s possible to simultaneously manage and transform information from one server to another.',
            link: '#',
            active: true
        },
        {
            image: 'service-2.png',
            imageAlt: 'Malku skaldymas image',
            title: 'Malku skaldymas',
            description: 'It’s possible to simultaneously manage and transform information from one server to another.',
            link: '#',
            active: false
        },
        {
            image: 'service-3.png',
            imageAlt: 'Data Security image',
            title: 'Data Security',
            description: 'Back up your database, store in a safe and secure place while still maintaining its accessibility.',
            link: '#',
            active: true
        }
    ]
}

export { servicesData }
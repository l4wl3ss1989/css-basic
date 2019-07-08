const RETRIVE_HEADER_NAV_ITEMS = {
    classRef: 'header',
    links: [
        {
            name: 'Packages',
            link: '/packages',
            exact: true        
        },
        {
            name: 'Customers',
            link: '/customers',
            exact: true       
        },
        {
            name: 'Start Hosting',
            link: '/start-hosting',
            exact: true,        
            cta: true
        }
    ]
};


const RETRIVE_FOOTER_NAV_ITEMS = {
    classRef: 'footer',
    links: [
        {
            name: 'Support',
            link: '/support',
            exact: true
        },
        {
            name: 'Terms of Use',
            link: '/terms-of-use',
            exact: true
        },
    ],
}

export {RETRIVE_HEADER_NAV_ITEMS, RETRIVE_FOOTER_NAV_ITEMS };
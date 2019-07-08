//Retrive from server for security
const RETRIVE_PLANS = [
    {
        name: 'FREE',
        price: 0,
        desc: 'For hobby projects or small teams.',
        featured: false,
        assets: [
            '1 Workspace',
            'Unlimited Traffic',
            '10GB Storage',
            'Basic Support',
        ]
    },
    {
        name: 'PLUS',
        price: 29,
        desc: 'For ambitious projects.',
        featured: true,
        assets: [
            '5 Workspaces',
            'Unlimited Traffic',
            '100GB Storage',
            'Plus Support',
        ]
    },
    {
        name: 'PREMIUM',
        price: 99,
        desc: 'Your enterprise solution.',
        featured: false,
        assets: [
            '10 Workspaces',
            'Unlimited Traffic',
            'Unlimited Storage',
            'Priority Support',
        ]
    }
];

const RETRIVE_PACKAGES_PLANS = [    
    {
        name: 'PLUS',
        title: 'The most popular choice of our customers.',
        desc: 'Benefit from increased storage and faster support to ensure that your mission-critical data and applications are always available!'
    },
    {
        name: 'FREE',
        title: 'An extremely solid start into our hosting world.',
        desc: 'Get started immediately at zero cost!'
    },
    {
        name: 'PREMIUM',
        title: 'All your enterprise needs. Instant support, guaranteed uptime.',
        desc: 'The best solution for small to large enterprises. Because hosting shouldn\'t be in the way!'
    }
];

export { RETRIVE_PLANS, RETRIVE_PACKAGES_PLANS };
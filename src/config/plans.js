//Retrive from server for security
const RETRIVE_PLANS = [
    {
        name: 'FREE',
        price: 0,
        desc: 'For hobby projects or small teams.',
        assets: [
            '1 Workspace',
            'Unlimited Traffic',
            '10GB Storage',
            'Basic Support',
        ]
    },
    {
        name: 'RECOMENTED',
        price: 29,
        desc: 'For ambitious projects.',
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
        assets: [
            '10 Workspaces',
            'Unlimited Traffic',
            'Unlimited Storage',
            'Priority Support',
        ]
    }
];

export { RETRIVE_PLANS };
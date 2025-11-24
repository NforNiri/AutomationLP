
export default {
    routes: [
        {
            method: 'GET',
            path: '/landing-page',
            handler: 'landing-page.find',
            config: {
                auth: false,
            },
        },
        {
            method: 'PUT',
            path: '/landing-page',
            handler: 'landing-page.update',
            config: {
                auth: false,
            },
        },
    ],
};

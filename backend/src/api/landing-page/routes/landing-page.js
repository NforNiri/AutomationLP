/**
 * landing-page router
 */

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/landing-page',
            handler: 'landing-page.find',
            config: {
                auth: false,
            },
        },
    ],
};

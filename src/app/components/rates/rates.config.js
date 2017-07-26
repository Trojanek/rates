const name = 'rates';

const config = ($stateProvider) => {
    $stateProvider
        .state(name, {
            url: `/${name}?base`,
            views: {
                'content': {
                    template: `<${name}></${name}>`,
                },
            },
        });
};

config.$inject = [
    '$stateProvider',
];

export default config;

export { name };

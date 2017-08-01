const config = ($locationProvider, $urlRouterProvider, $mdThemingProvider, appConstants) => {
    $locationProvider.html5Mode(appConstants.router.html5Mode);
    $urlRouterProvider.otherwise(`/rates?base=${appConstants.currencies.defaultBase}`);
    $mdThemingProvider
        .theme('default')
        .primaryPalette(appConstants.theme.primary)
        .accentPalette(appConstants.theme.accent);
};

config.$inject = [
    '$locationProvider',
    '$urlRouterProvider',
    '$mdThemingProvider',
    'appConstants',
];

export default config;

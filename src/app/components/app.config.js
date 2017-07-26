const config = ($locationProvider, $urlRouterProvider, $mdThemingProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/rates?base=USD');
    $mdThemingProvider
        .theme('default')
        .primaryPalette('red')
        .accentPalette('green');
};

config.$inject = [
    '$locationProvider',
    '$urlRouterProvider',
    '$mdThemingProvider',
];

export default config;

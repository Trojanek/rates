import ApiService from './api.service';

const module = angular
    .module('app.services', [

    ])
    .service('apiService', ApiService);

export default module.name;

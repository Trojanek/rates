class ApiService {
    constructor($http, $q, appConstants) {
        _.assign(this, {
            $http,
            $q,
            appConstants,
        });
    }
    call(method, url, { data = {}, params = {} } = {}) {
        const deferred = this.$q.defer();
        this.$http({
            method,
            url,
            data,
            params,
        })
        .then(deferred.resolve, deferred.reject);
        return deferred.promise;
    }
    getRates(date = this.appConstants.api.rates.defaultDate, query = { base: this.appConstants.currencies.defaultBase}) {
        const url = this.appConstants.api.rates.url;
        return this.call('get', `${url}${date}`, { params: query });
    }
    getCountries(query = {}) {
        const url = this.appConstants.api.countries.url;
        return this.call('get', `${url}`, { params: query });
    }
}

ApiService.$inject = [
    '$http',
    '$q',
    'appConstants',
];

export default ApiService;

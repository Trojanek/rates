class RatesService {
    constructor($q, moment, appConstants, apiService) {
        _.assign(this, {
            $q,
            moment,
            appConstants,
            apiService,
            defaultBase: appConstants.currencies.defaultBase,
        });
    }
    getData(base = this.defaultBase) {
        const {
            $q,
            moment,
            apiService,
        } = this;
        const deferred = $q.defer();
        const ratesPromise = this.getRates(base);
        const countriesPromise = apiService.getCountries();
        $q
            .all([
                ratesPromise,
                countriesPromise,
            ])
            .then(([ratesData, { data: countriesData }]) => {
                const {
                    prevRates,
                    latestRates,
                } = ratesData;
                const dataTable = [];
                latestRates.rates[base] = 1;
                prevRates.rates[base] = 1;

                countriesData.forEach((item) => {
                    const symbol = _.get(item, 'currencies[0].code');
                    const latestRate = _.get(latestRates, `rates[${symbol}]`);
                    const prevRate = _.get(prevRates, `rates[${symbol}]`);
                    if (latestRate) {
                        const change = (prevRate / latestRate - 1);
                        dataTable.push([item.alpha2Code, `${item.name} (${symbol})`, change, 1 / latestRate]);
                    }
                });
                this.lastUpdate = moment();
                deferred.resolve({
                    dataTable,
                    countriesData,
                    prevRates,
                    latestRates,
                });

            });
        return deferred.promise;
    }
    getRates(base = this.defaultBase) {
        const {
            $q,
            moment,
            apiService,
        } = this;
        const deferred = $q.defer();
        const result = {};
        apiService.getRates('latest', { base })
            .then(({ data: latestRates }) => {
                const prevDate = moment(latestRates.date).add(- 1, 'd').format('YYYY-MM-DD');
                result.latestRates = latestRates;
                return apiService.getRates(prevDate, { base });
            })
            .then(({ data: prevRates }) => {
                result.prevRates = prevRates;
                deferred.resolve(result);
            });
        return deferred.promise;
    }
}

RatesService.$inject = [
    '$q',
    'moment',
    'appConstants',
    'apiService',
];

export default RatesService;

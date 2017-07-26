class controller {
    constructor($stateParams, ratesService, appConstants) {
        _.assign(this, {
            $stateParams,
            ratesService,
            appConstants,
        });
    }
    $onInit() {
        this.base = this.getBase();
        this.getData(this.base);
    }
    getData(base) {
        const {
            ratesService,
            appConstants,
        } = this;
        ratesService.getData(base).then((data) => {
            console.log(data);

            this.data = data;
            this.chart = _.cloneDeep(appConstants.chart);
            this.chart.data = this.chart.data.concat(data.dataTable);
            this.lastUpdate = ratesService.lastUpdate;
        });
    }
    getBase() {
        let base = this.$stateParams.base;
        const validBase = _.includes(this.appConstants.validBases, base);
        if (!validBase) {
            base = this.appConstants.api.rates.defaultBase;
        }
        return base;
    }

    selectCountry(selectedItem) {
        if (selectedItem) {
            this.country = _.find(this.data.countriesData, { alpha2Code: this.chart.data[selectedItem.row + 1][0] });
            // console.log(this.data.latestRates.rates);
            // this.data.lastRates.rates
            console.log(this.country);
        } else {
            delete this.country;
        }
    };

}

controller.$inject = [
    '$stateParams',
    'ratesService',
    'appConstants',
];

export default controller;

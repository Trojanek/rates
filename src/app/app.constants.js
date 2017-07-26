const appConstants = {
    chart: {
        type: 'GeoChart',
        data: [
            ['', 'Name', 'Change', 'Last Price'],
        ],
        options: {
            // region: 151,
            width: 800,
            height: 600,
            chartArea: {
                left: 0,
                top:0,
                bottom:0,
            },
            colorAxis: {
                colors: ['#F44336', 'white', '#8BC34A'],
                maxValue: 0.005,
                minValue: - 0.005,
            },
            datalessRegionColor: '#B0BEC5',
            backgroundColor: '#E3F2FD',
            displayMode: 'regions',
            legend: 'none',
        },
        formatters: {
            number : [
                {
                    columnNum: 2,
                    pattern: '#,##0.000%'
                }
            ]
        }
    },
    api: {
        rates: {
            url: 'http://api.fixer.io/',
            defaultDate: 'latest',
            defaultBase: 'USD',
        },
        countries: {
            url: 'https://restcountries.eu/rest/v2/all',
        }

    },
    validBases: [
        'USD',
        'EUR',
        'JPY',
        'CHF',
    ],
};

export default appConstants;

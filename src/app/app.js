import './app.scss';
import 'angular-material/angular-material.min.css';

import 'angular';
import 'lodash';

import ngMaterial from 'angular-material';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import uiRouter from '@uirouter/angularjs';
import moment from 'moment';
import angularMoment from 'angular-moment';

import Components from './components/';
import Services from './services/';
import googlechart from './googlechart/';

import AppComponent from './components/app.component';
import appConfig from './components/app.config';
import appConstants from './app.constants';


const app = angular
    .module('app', [
        ngMaterial,
        ngAnimate,
        ngAria,
        ngMessages,
        uiRouter,
        angularMoment,
        googlechart,
        Components,
        Services,
    ])
    .component('app', AppComponent)
    .constant('appConstants', appConstants)
    .config(appConfig);

export default app;

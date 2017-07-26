import config, { name } from './rates.config';
import controller from './rates.controller';
import template from './rates.template.html';
import service from './rates.service';

const component = {
    template,
    controller,
};

const module = angular
    .module(`app.components.${name}`, [

    ])
    .component(`${name}`, component)
    .service(`${name}Service`, service)
    .config(config)
    .name;

export default module;

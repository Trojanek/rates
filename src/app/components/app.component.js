import template from './app.template.html';

class AppController {
    constructor() {
        this.info = 'jestem!';
    }
}

AppController.$inject = [

];

const AppComponent = {
    template,
    controller: AppController,
};

export default AppComponent;

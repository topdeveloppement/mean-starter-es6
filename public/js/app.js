angular.module('app', ['ngRoute'])
        .service('phoneService', phoneService)
        .controller('mainController', mainController)
        .config(routes)
        ;

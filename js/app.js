var pfCounterModule = angular.module('pfCounter', ['ngRoute']);


pfCounterModule.config(function($routeProvider){
    
    $routeProvider.when('/', {
        controller: 'ContagemController',
        templateUrl: '../template/pf/addPF.html'
    }).otherwise({
        redirectTo: '/'
    });
    
});
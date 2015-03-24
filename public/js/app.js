'use strict';

// declare top-level module which depends on filters,and services
var myApp = angular.module('myApp', [
    'ngRoute',
    'contactsServices'
]);

myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl:'views/home.html',
        controller : 'CustomerCtrl'
    });

     // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo:'/'
    });
}]);
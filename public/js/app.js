'use strict';

// declare top-level module which depends on filters,and services
var myApp = angular.module('myApp', [
    'ngRoute',
    'contactsServices',
    'angularUtils.directives.dirPagination'
]);

myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl:'views/contacts.html',
        controller : 'CustomerCtrl'
    });

    $routeProvider.when('/detail', {
        templateUrl:'views/detail.html',
        controller : 'CustomerCtrl'
    });

     // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo:'/'
    });
}]);
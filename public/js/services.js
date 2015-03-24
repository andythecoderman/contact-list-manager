var contactsServices = angular.module('contactsServices', []);
contactsServices.factory('Contacts', function($rootScope, $http) {
    return{
        get: function(callback){
            $http.get('/contacts').success(function(data) {
                callback(data);
            });
        }
    };
});

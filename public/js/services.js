var contactsServices = angular.module('contactsServices', []);
contactsServices.factory('Contacts', function($rootScope, $http) {
    return{
        get: function(callback){
            $http.get('/contacts').success(function(data) {
                callback(data);
            });
        },
        selectedContact : null  //- Maintains currently selected detail view contact since there is no ID for routing
    };
});


var CustomerCtrl = myApp.controller('CustomerCtrl', ['$scope', '$routeParams', '$http', 'Contacts', function ($scope, $routeParams, $http, Contacts) {
    Contacts.get(function(data){
        $scope.contacts = data;
    });
}]);

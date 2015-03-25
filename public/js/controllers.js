
var CustomerCtrl = myApp.controller(
    'CustomerCtrl',
    ['$scope', '$routeParams', '$http', '$filter', '$location', 'Contacts',
        function ($scope, $routeParams, $http, $filter, $location, Contacts) {

    $scope.searchNameText = '';
    $scope.searchStateText = '';
    $scope.recPerPage = 10;
    $scope.selectedContact = Contacts.selectedContact;

    $scope.openDetail = function(contact){
        Contacts.selectedContact = contact;
        $location.path('detail');
    }

    Contacts.get(function(data){
        $scope.contacts = data;
    });

    $scope.applySearchFilter = function(contact) {
        var nameMatch = $scope.searchNameText.trim().toLowerCase();
        var stateMatch = $scope.searchStateText.trim().toLowerCase();

        var doesNameMatch = contains(contact.first_name.toLowerCase(), nameMatch) ||
            contains(contact.last_name.toLowerCase(), nameMatch);

        var doesStateMatch =  contains(contact.state.toLowerCase(), stateMatch);

        //- Return record by default otherwise apply filter result
        //- Only apply filter if search box is used
        var itemMatches = true;
        if(nameMatch.length > 0){
            itemMatches &= doesNameMatch;
        }
        //- Only search on two letter state code or full state name
        if(stateMatch.length > 1) {
            itemMatches &= doesStateMatch;
        }
        return itemMatches;
    };

    function contains(checkString, match){
        return checkString.indexOf(match) > -1;
    }
}]);

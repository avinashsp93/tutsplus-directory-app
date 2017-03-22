angular.module('ContactsApp')
.controller('ListController', ['$scope', 'ContactService', function ($scope, ContactService) {
    console.log('In controller');;

    $scope.loadTable = function () {
        $scope.contacts = ContactService.empDetails();
        console.log($scope.contacts);
    };

    $scope.fields = ['first_name', 'last_name'];
    $scope.query = "";

    $scope.sort = function (field) {
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    };

    $scope.sort.field = 'first_name';
    $scope.sort.order = false;
}]);

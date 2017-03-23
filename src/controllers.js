angular.module('ContactsApp')
.controller('MainController', function () {

})

.controller('ListController', ['$scope', 'ContactService', function ($scope, ContactService) {
    console.log('In controller');

    ContactService.empDetails().then(function(response){
        $scope.contacts = response.data;
    }, function(error) {
        console.log(error);
    });

    $scope.fields = ['first_name', 'last_name'];
    $scope.query = "";

    $scope.sort = function (field) {
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    };

    $scope.sort.field = 'first_name';
    $scope.sort.order = false;
}]);

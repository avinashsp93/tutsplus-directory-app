angular.module('ContactsApp')
.controller('MainController', function () {

})

.controller('ListController', ['$scope', 'ContactService', '$location', function ($scope, ContactService, $location) {
    console.log('In controller');

    $scope.fields = ['first_name', 'last_name'];
    $scope.query = "";

    $scope.sort = function (field) {
        $scope.sort.field = field;
        $scope.sort.order = !$scope.sort.order;
    };

    $scope.sort.field = 'first_name';
    $scope.sort.order = false;

    ContactService.empDetails().then(function(response){
        $scope.contacts = response.data;
        console.log($scope.contacts);
    }, function(error) {
        console.log(error);
    });

    $scope.show = function (id) {
        console.log("Under construction "+ (parseInt(id)+1));
        $location.url('/contact/' +(parseInt(id)+1))
    }
}])

.controller('NewController', ['$scope', 'ContactService', '$location', function ($scope, ContactService, $location) {
    var Contact = function (firstName, lastName, address, dateOfBirth, cellPhone, email, userid) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.cellPhone = cellPhone;
        this.email = email;
        this.userid = userid;
    };

    $scope.contact = new Contact({
        firstName: ['', 'text'],
        lastName: ['', 'text'],
        address: ['', 'text'],
        dateOfBirth: ['', 'date'],
        cellPhone: ['', 'tel'],
        email: ['', 'email'],
        userid: ['', 'text'],
    });

    $scope.save = function () {
        if($scope.newContact.$invalid) {
            $scope.$broadcast('record:invalid');
        } else {
            $scope.contact.$save();
            $location.url('/contacts');
        }
    }
}])

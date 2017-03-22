var app = angular.module('ContactsApp', [])

app.controller('ListController', ['$scope', 'ContactSer', function ($scope, ContactService) {
    console.log('In controller');;
    var result = ContactService.empDetails();
}]);

app.service('contactSer', function($http){
  console.log('In service');
  var empDetails = function(){
    var data = undefined;
    $http({
      method: 'POST',
      url: 'php/middleware.php',
      data: $.param({
        "flag":"populateEmployeeDetails",
      }),
      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
    }).then(function(response){
      data = response.data;
      console.log(data);
    }, function(error) {
      data = error;
    });
    return data;
  }
});

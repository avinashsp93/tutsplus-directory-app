angular.module('ContactsApp')
.service('ContactService', ['$http', function($http){
  console.log('In service');
  this.empDetails = function(){
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
          console.log(error);
      });
      return data;
}]);

angular.module('ContactsApp')
.service('ContactService', ['$http', function($http){
  console.log('In service');
  //this.contact;
  this.empDetails = function(){
      var data = undefined;
     return $http({
          method: 'POST',
          url: 'php/middleware.php',
          data: $.param({
              "flag":"populateEmployeeDetails",
          }),
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
      });
      //return this.contact;
  }
}]);

angular.module('ContactsApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/contacts', {
                controller: 'ListController',
                templateUrl: 'views/list.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.hashPrefix('');
    });

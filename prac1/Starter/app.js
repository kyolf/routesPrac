var myApp = angular.module('myApp', ['ngRoute']);

//After adding ngRoute dependency, you can do $routeProvider
//$routeProvider allows us to specify particular routes
myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'pages/main.html',
    controller: 'mainController'
  })
  .when('/second', {
    templateUrl:'pages/second.html',
    controller: 'secondController'
  });
});

myApp.controller('mainController', ['$scope', '$location', '$log',
  function($scope, $location, $log) {
    
    //$location.path() gets the hash everytime it changes
    $log.info($location.path());
    $scope.name = 'hi';
  }
]);

myApp.controller('secondController', ['$scope', function($scope) {
  $scope.name = 'bye';
}]);

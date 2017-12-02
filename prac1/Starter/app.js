var myApp = angular.module('myApp', ['ngRoute']);

//After adding ngRoute dependency, you can do $routeProvider
//$routeProvider allows us to specify particular routes

//Routes allow you to download a piece of page 
//not the whole page.(only need to be done once)
myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:'pages/main.html',
    controller: 'mainController'
  })
  .when('/second', {
    templateUrl:'pages/second.html',
    controller: 'secondController'
  })
  .when('/second/:num', {
    templateUrl:'pages/second.html',
    controller: 'secondController'
  });
});


//Most Angular services, modules, (w.e gets injected) are singletons (one and only object)
//It saves memory space
//It is a singleton because it is there to fulfill the same purpose.
//Custom services are singletons

//Scope, on the otherhand, is an exception and is not a singleton.
//When a scope is injected into the controller, a child scope is created
//from the root scope.
myApp.controller('mainController', ['$scope', '$location', '$log',
  function($scope, $location, $log) {
    
    //$location.path() gets the hash everytime it changes
    $log.info($location.path());
    $scope.name = 'hi';
  }
]);

myApp.controller('secondController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.name = 'bye';
  $scope.num = $routeParams.num || 1;
}]);

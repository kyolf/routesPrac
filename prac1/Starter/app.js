var myApp = angular.module('myApp', []);

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

'use strict';

/**
 * @ngdoc function
 * @name tpMeteoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tpMeteoApp
 */
angular.module('tpMeteoApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var friends = [
        {name:'John', age:25},
        {name:'Mary', age:40},
        {name:'Peter', age:85}
      ];

      $scope.removeFirst = function() {
        $scope.friends.shift();
      };

      $scope.updateAge = function() {
        $scope.friends.forEach(function(el) {
          el.age = el.age + 5;
        });
      };

      $scope.copy = function() {
        $scope.friends = angular.copy($scope.friends);
      };

      $scope.reset = function() {
        $scope.friends = angular.copy(friends);
      };

      $scope.reset();
  })
  .controller('BadController', function($scope) {
  $scope.a = 1;
  $scope.b = 2;
})
// Unlike BadController, GoodController1 and GoodController2 will not fail to be instantiated,
// due to using explicit annotations using the array style and $inject property, respectively.
.controller('GoodController1', ['$scope', function($scope) {
  $scope.a = 1;
  $scope.b = 2;
}])
.controller('GoodController2', GoodController2);
function GoodController2($scope) {
  $scope.name = 'World';
}
GoodController2.$inject = ['$scope'];

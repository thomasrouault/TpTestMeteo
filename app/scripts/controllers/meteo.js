'use strict';

/**
 * @ngdoc function
 * @name tpMeteoApp.controller:MeteoCtrl
 * @description
 * # MeteoCtrl
 * Controller of the tpMeteoApp
 */
angular.module('tpMeteoApp')
  .controller('MeteoCtrl', function ($scope, $http) {
	  $http.get('http://localhost:8080/weather').
	            then(function(response) {
	                $scope.meteo = response.data;
	            });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    
    /*$http({
    	  method: 'GET',
    	  url: 'http://localhost:8080/weather'
    	}).then(function successCallback(response) {
    		$scope.meteo = response.data;
    	  }, function errorCallback(response) {
    		  alert("error");
    	  });*/
  });
/*angular.module('tpMeteoApp', [])
.controller('MeteoCtrl', function ($scope, $http) {
  $http.get('http://localhost:8080/weather').
          then(function(response) {
              $scope.meteo = response.data;
          }); 
});*/
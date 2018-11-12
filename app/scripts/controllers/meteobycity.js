/**
 * @ngdoc function
 * @name tpMeteoApp.controller:MeteoByCityCtrl
 * @description
 * # MeteoByCityCtrl
 * Controller of the tpMeteoApp
 */
angular.module('tpMeteoApp')

  .controller('MeteoByCityCtrl', function ($scope, $http) {
	  $http.get('http://localhost:8080/weatherByCity/Nantes').
	            then(function(response) {
	               $scope.meteobycity = response.data;
	    			//$scope.ville = 'Nantes';
	            });
	  
	  
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
  })
  //.$inject = ['$scope'];

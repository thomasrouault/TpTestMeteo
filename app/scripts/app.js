'use strict';

/**
 * @ngdoc overview
 * @name tpMeteoApp
 * @description
 * # tpMeteoApp
 *
 * Main module of the application.
 */
angular
  .module('tpMeteoApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/meteo', {
        templateUrl: 'views/meteo.html',
        controller: 'MeteoCtrl',
        controllerAs: 'meteo'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

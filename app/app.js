'use strict';

var ctsPreScreenApp = angular.module('ctsPreScreenApp', [
  'ngRoute',
  'homeController'
]);


ctsPreScreenApp.config(['$routeProvider', function($routeProvider) {
      $routeProvider.
      when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
      }).
	  otherwise({redirectTo: '/home'});
}]);

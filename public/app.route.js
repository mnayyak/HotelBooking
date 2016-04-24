var publicAppRoute = angular.module('appRoute', ['ngRoute']);

publicAppRoute.config(function ($routeProvider) {
	// body...
	$routeProvider

	.when('/user', {
		templateUrl: '/view/hotels.html'
	});
});
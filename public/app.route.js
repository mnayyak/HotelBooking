var publicAppRoute = angular.module('appRoute', ['ngRoute', 'mainController']);

publicAppRoute.config(function ($routeProvider) {
	// body...
	$routeProvider

	.when('/keyPad', {
		templateUrl: '/view/keyPad.html'
	});
});
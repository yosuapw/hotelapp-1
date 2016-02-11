define(function(require) {
	var angular = require('angular');
	require('angularUiRouter');
	require('ocLazyLoad');
	
	var app = angular.module('myApp', ['ui.router', 'oc.lazyLoad']);

	app.init = function() {	
		angular.element(document).ready(function() {	
			angular.bootstrap(document, ['myApp']);
		});
	}
 	
	app.controller('AboutController', ['$scope', function($scope) {
		
	}]);
	app.controller('NewsController', ['$scope', function($scope) {
		
	}]);
	app.controller('MailUsController', ['$scope', function($scope) {
		
	}]);

	app.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('home');
		
		$ocLazyLoadProvider.config({
			loadedModules: ['myApp'], 
			modules: [{
		         name: 'bookingController',
		         files: ['app/controller/booking-controller.js']
	         },{
		         name: 'homeController',
		         files: ['app/controller/home-controller.js']
	         }],
			asyncLoader: true
		});
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'template/home.html',
				controller: 'HomeController',
				resolve: {
					lazy: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load('homeController');
					}]
				}
			})
			.state('about', {
				url: '/about',
				templateUrl: 'template/about.html',
				controller: 'AboutController'
			})
			.state('booking', {
				url: '/booking',
				controller: 'BookingController',
				templateUrl: '/template/booking.html',
				resolve: {
					lazy: ['$ocLazyLoad', function($ocLazyLoad) {
						return $ocLazyLoad.load('bookingController');
					}]
				}
			})
			.state('news', {
				url: '/',
				templateUrl: 'template/news.html',
				controller: 'NewsController'
			})
			.state('mailUs', {
				url: '/mailUs',
				template: 'template/mail-us.html',
				controller: 'MailUsController'
			});
	}]);
	
	return app;
	
});
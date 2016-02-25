define(['angularUiRouter', 'ocLazyLoad', 'angular', 'topDestination', 'jquery', 
        'text!./../../css/style.css', 'text!./../../css/bootstrap.css'], function(angularUiRouter, ocLazyLoad, angular, topDestination) {
	
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

    app.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

	app.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', '$controllerProvider',  
	            function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider, $controllerProvider) {
		
		$urlRouterProvider.otherwise('home');
		
		app.registerController = $controllerProvider.register;
		
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
		
		/*var states = {
				body: {
						templateUrl: 'template/home.html',
						controller: 'HomeController',
						resolve: {
							loadModule: ['$ocLazyLoad', '$q', function($ocLazyLoad, $q) {
								var deferred = $q.defer();
								require(['homeController'], function() {
									$ocLazyLoad.inject('myApp.Home');
		                            deferred.resolve();
								})
		                        return deferred.promise;
							}]
						}
				}
				
		}*/
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'template/home.html',
				controller: 'HomeController',
				resolve: {
					loadModule: ['$ocLazyLoad', '$q', function($ocLazyLoad, $q) {
						var deferred = $q.defer();
						require(['homeController'], function() {
							$ocLazyLoad.inject('myApp.Home');
                            deferred.resolve();
						})
                        return deferred.promise;
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
	
	app.directive('topDestination', topDestination);
	
	return app;
	
});
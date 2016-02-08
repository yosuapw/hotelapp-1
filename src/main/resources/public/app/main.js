require.config({
	paths: {
		angular 			: '../js/angular',
		angularUiRouter 	: '../js/angular-ui-router',
		bootstrap 			: '../js/bootstrap',
		easing 				: '../js/easing',
		jFCore				: '../js/JFCore',
		jFForms				: '../js/JFForms',
		jquery				: '../js/jquery-2.1.4',
		jqueryUi			: '../js/jquery-ui',
		modernizr			: '../js/modernizr.custom',
		moveTop				: '../js/move-top',
		ocLazyLoad			: '../js/ocLazyLoad',
		responsiveSlides	: '../js/responsiveslides.min'
	}
});


require(['angular', 'angularUiRouter', 'bootstrap', 'easing', 'jFCore', 'jFForms', 'jquery',
         'jqueryUi', 'modernizr', 'moveTop', 'ocLazyLoad', 'responsiveSlides'], function() {
	
	angular.module('myApp', ['ui.router', 'oc.lazyLoad']);

	var app = angular.module('myApp');
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

	angular.element(document).ready(function() {	
		angular.bootstrap(document, ['myApp']);
	});
	
});



/*app.directive('topDestination', function() {

	return {
		restrict: 'A',
        replace: true,
        transclude: true,
		scope: {
		},
		templateUrl: "app/directive/top-destination.html",
		controller: function($scope) {
			if(!$scope.models) {
				$scope.models = 
					[{
						url: 'images/6.jpg',
						title: 'Vestibulum auctor',
						detail: 'Morbi id felis porttitor tellus viverra pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices .'
					},
					{
						url: 'images/3.jpg',
						title: 'Vestibulum auctor',
						detail: 'Morbi id felis porttitor tellus viverra pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices .'
					},
					{
						url: 'images/2.jpg',
						title: 'Vestibulum auctor',
						detail: 'Morbi id felis porttitor tellus viverra pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices .'
					},
					{
						url: 'images/4.jpg',
						title: 'Vestibulum auctor',
						detail: 'Morbi id felis porttitor tellus viverra pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices .'
					}]
					
				
			};
			
		}
	}
	
});*/
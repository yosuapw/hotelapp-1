angular.module('myApp', ['ui.router']);

var app = angular.module('myApp');

app.controller('HomeController', ['$scope', function($scope) {
	
}]);
app.controller('AboutController', ['$scope', function($scope) {
	
}]);
app.controller('BookingController', ['$scope', function($scope) {
	
}]);
app.controller('NewsController', ['$scope', function($scope) {
	
}]);
app.controller('MailUsController', ['$scope', function($scope) {
	
}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('home');
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'template/home.html',
			controller: 'HomeController'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'template/about.html',
			controller: 'AboutController'
		})
		.state('booking', {
			url: '/booking',
			templateUrl: 'template/booking.html',
			controller: 'BookingController'
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
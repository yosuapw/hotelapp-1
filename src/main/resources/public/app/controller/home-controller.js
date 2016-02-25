define(['topDestination'], function(topDestination) {
	require(['responsiveSlidesHome', 'responsiveSlides'], function () {
		angular.module('myApp.Home', []);
		angular.module('myApp.Home').controller('HomeController', ['$scope', function($scope) {
		 	$scope.asd = 'haloo';	
		}]);
		//angular.module('myApp.Home').directive('topDestination', topDestination);
	});
});
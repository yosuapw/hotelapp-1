define(['text!./directive/top-destination/top-destination.html'],  function(topDestinationTemplate) {
	'use strict';
	return function() {
		return {
			restrict: 'A',
	        replace: true,
	        transclude: true,
			scope: {
			},
			template: topDestinationTemplate,
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
		}
});
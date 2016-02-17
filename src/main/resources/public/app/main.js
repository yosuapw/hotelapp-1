require.config({
    map: {
        '*': {
            'text': '../js/text'
        }
    },
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
		responsiveSlides	: '../js/responsiveslides.min',
		indexJs				: '../js/index',
		
		app					: './app',
		topDestination		: './directive/top-destination/top-destination',
		
		
		homeController		: './controller/home-controller'
	},
	shim: {
		bootstrap			: {
			deps 	: ['jquery']
		},
		jFForms				: {
			deps 	: ['jFCore']
		},
		easing				: {
			deps 	: ['jquery']
		},
		indexJs				: {
			deps 	: ['jquery']
		},
		moveTop				: {
			deps 	: ['jquery']
		},
		angularUiRouter		: {
			deps 	: ['angular'],
			exports : 'angular'
		},
		ocLazyLoad			: {
			deps 	: ['angular'],
			exports : 'angular'
		},
		angular				: {
			exports	: 'angular'
		}
	}
});


require(['app'], function (app) {
	  app.init();
	});

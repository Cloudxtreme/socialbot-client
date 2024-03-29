/* jshint node: true */

module.exports = function(environment) {
	var ENV = {
		modulePrefix: 'socialbot-client',
		environment: environment,
		baseURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		},

		contentSecurityPolicy: {
			'script-src': "'self' 'unsafe-eval' http://*:35729",
			'font-src': "'self' http://fonts.gstatic.com",
			'connect-src': "'self' http://localhost:8888 ws://localhost:8888",
			'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
		}
	};

	if (environment === 'development') {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;

		ENV.APP.LOG_TRANSITIONS = true;
		ENV.APP.API_HOST = 'http://localhost:8888';
		ENV.APP.API_VERSION = 'v1';
		ENV.APP.SOCKET_IO_SERVER = 'http://localhost:8888';
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {
		//
	}

	return ENV;
};

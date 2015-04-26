import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function () {
	this.route('dashboard', { path: '/' });
	this.resource('bots', function () {

		// TODO: new

		this.route('bot', { path: '/:id' }, function () {

			// TODO: edit
		});
	});
});

export default Router;

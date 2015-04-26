import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function () {
	this.route('dashboard', { path: '/' });
	this.resource('bots', function () {
		this.route('create', { path: '/create' });
		this.route('bot', { path: '/:id' }, function () {
			this.route('edit');
		});
	});
});

export default Router;

import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
	// Web socket connection.
	connection: null,

	// Web socket client identifier.
	wsClientId: null,

	setup: function () {
		this.set('connection', window.io(config.APP.SOCKET_IO_SERVER));
	}.on('init')
});

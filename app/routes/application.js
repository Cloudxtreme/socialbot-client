import Ember from 'ember';

export default Ember.Route.extend({
	registerSocketEvents: function () {
		var connection = this.socket.connection;

		connection.on('connection', function (data) {
			this.socket.set('wsClientId', data.wsClientId);
		}.bind(this));

		connection.on('push', function (data) {
			var store = this.store;
			var modelName = data.model;
			var type = data.type;
			var payload = data.data;
			var record = null;

			switch (type) {
				case 'create': // Fall through
				case 'update':
					record = store.normalize(modelName, payload);

					store.push(modelName, record);
					this.notify.info(modelName + ' was ' + type + 'd');

					break;

				case 'delete':
					store.find(modelName, payload).then(function (record) {
						record.deleteRecord();

						this.notify.info(modelName + ' was ' + type + 'd!');
					}.bind(this));

					break;
			}
		}.bind(this));

	}.on('init')
});

import DS from 'ember-data';
import config from '../config/environment';

var appConfig = config.APP;

export default DS.RESTAdapter.extend({
	host: appConfig.API_HOST,

	namespace: appConfig.API_VERSION,

	ajax: function (url, type, hash) {
		var wsClientId = this.socket.get('wsClientId');

		// On DELETE the hash object is undefined.
		if (wsClientId && !hash) {
			hash = {};
		}

		if (wsClientId && hash) {
			hash.data = hash.data || {};
			hash.data.wsClientId = wsClientId;
		}

		return this._super(url, type, hash);
	}
});

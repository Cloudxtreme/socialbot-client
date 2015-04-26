import DS from 'ember-data';
import config from '../config/environment';

var appConfig = config.APP;

export default DS.RESTAdapter.extend({
	host: appConfig.API_HOST,
	namespace: appConfig.API_VERSION
});

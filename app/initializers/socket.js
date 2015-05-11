export function initialize(container, application) {
	application.inject('route', 'socket', 'service:socket');
	application.inject('adapter', 'socket', 'service:socket');
}

export default {
	name: 'socket',

	initialize: initialize
};

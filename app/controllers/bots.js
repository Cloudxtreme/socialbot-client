import Ember from 'ember';

export default Ember.ArrayController.extend({
	hasBots: function () {
		var length = this.get('model.length');

		if (!length) {
			this.transitionToRoute('bots.create');
		}

		return length;
	}.property('model.length')
});

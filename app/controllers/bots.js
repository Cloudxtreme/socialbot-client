import Ember from 'ember';

export default Ember.ArrayController.extend({
	hasBots: function () {
		return this.get('model.length');
	}.property('model.length')
});

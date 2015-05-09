import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		update: function () {
			var bot = this.model;

			bot.set('name', bot.get('name'));
			bot.save().then(function () {
				this.notify.success('Bot updated!');
				this.transitionToRoute('bots.bot');
			}.bind(this));

			// TODO: error handling
		},

		cancel: function () {
			this.transitionToRoute('bots.bot');
		}
	}
});

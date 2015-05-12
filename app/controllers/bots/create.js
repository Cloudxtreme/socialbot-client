import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		create: function () {
			var bot = this.store.createRecord('bot', {
				name: this.get('name'),
				description: this.get('description'),
				type: 'stream'
			});

			bot.save().then(function (bot) {
				this.notify.success('Bot created!');

				this.set('name', '');
				this.set('description', '');

				this.transitionToRoute('bots.bot', bot);
			}.bind(this));

			// TODO: error handling
		}
	}
});

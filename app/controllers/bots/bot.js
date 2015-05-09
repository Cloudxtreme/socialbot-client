import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		edit: function () {
			this.transitionToRoute('bots.bot.edit');
		},

		delete: function () {
			var bot = this.model;

			bot.deleteRecord();
			bot.save().then(function () {
				this.store.find('bot').then(function (bots) {
					this.notify.success('Bot deleted!');

					if (bots.get('length')) {
						this.transitionToRoute('bots.index');
					} else {
						this.transitionToRoute('bots.create');
					}
				}.bind(this));

				// TODO: error handling

			}.bind(this));

			// TODO: error handling
		}
	}
});

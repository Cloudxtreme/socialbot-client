export default function(){
	this.transition(
		this.fromRoute('dashboard'),
		this.toRoute('bots'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('bots.bot'),
		this.toRoute('bots.create'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('bots.bot'),
		this.toRoute('bots.index'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
		this.fromRoute('bots.bot.index'),
		this.toRoute('bots.bot.edit'),
		this.use('toLeft'),
		this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('bots.bot'),
		this.toRoute('bots.bot.edit'),
		this.use('toDown'),
		this.reverse('toUp')
	);
}

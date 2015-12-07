// Nouns
var humans = [
	{
		name: 'Ada Lovelace',
		bananas: [{state: 'ripe'}]
	}
];
var monkeys = [
	/* ... */
];
var robots = [
	{
		name: 'Johnny Five',
		bananas: [{state: 'ripe'}]
	}
];
// Verbs
function grabBanana(state, model) {
	model.bananas.push({state: state});
}
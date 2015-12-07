// Primate "superclass"
function Primate(bananas) {
	this.bananas = bananas || [];
}
Primate.prototype.grabBanana = function (state) {
	this.bananas.push({state: state});
};
// Monkey "class"
function Monkey(name, bananas) {
	this.bananas = bananas || [];
	this.name = name || 'John Doe';
}
Monkey.prototype = new Primate();
Monkey.prototype.climb = function () { /* ... */ };
// Human "class"
function Human(name, bananas) {
	this.bananas = bananas || [];
	this.name = name || 'John Doe';
}
Human.prototype = new Primate();
Human.prototype.walk = function () { /* ... */ };
// Instances
var george = new Primate('Curious George', [{state: 'unripe'}]);
var alice = new Primate('Alice the Dancer', [{state: 'ripe'}]);
var ada = new Human('Ada Lovelace', [{state: 'ripe'}]);
var albert = new Human('Albert Einstein', [{state: 'overripe'}]);
/*
 * Product Owner says, "We want a robot named Johnny Five to be able to grab a
 * banana and have a name too!!!!"
 */
// Todo "class" ...

// Reminder "Class"
function Reminder(options) {
	this.title = options.name || 'untitled';
	this.description = options.description || '';
	this.state = 'notDue';
	this.id = this._createUniqueId(); // Just used a "private" function
}

// Add all implementation details to Reminders
Reminder.prototype = new Todo(); // Just destroyed the constructor reference
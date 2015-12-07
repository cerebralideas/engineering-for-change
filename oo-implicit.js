// Sample prototype method from Todo
Todo.prototype.archive = function archive() {
	var self = this;
	this._saveToArchiveService(this.id, function cb(err, response) {
		self.state = response.body.todo.state;
	});
};
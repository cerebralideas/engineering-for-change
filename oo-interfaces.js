

// In the beginning
function Todo(options) {
	this.title = options.name || 'untitled';
	this.description = options.description || '';
	this.state = 'open';
}

Todo.prototype.complete = function complete() {};
Todo.prototype.remove = function remove() {};



// In the end
function Todo(options) {
	this.title = options.name || 'untitled';
	this.labels = options.labels || [];
	this.description = options.description || '';
	this.state = 'open';
	this.id = this._createUniqueId();
}

Todo.prototype._createUniqueId = function _createUniqueId (){ /* ... */};
Todo.prototype._serviceCb = function _serviceCb() { /* ... */};
Todo.prototype._saveToArchiveService = function _saveToArchiveService() { /* ... */};
Todo.prototype._todoLabelMapper = function _todoLabelMapper() { /* ... */};
Todo.prototype._todoStateEnum = function _todoStateEnum() { /* ... */};
Todo.prototype.archive = function archive() { /* ... */};
Todo.prototype.complete = function complete() { /* ... */};
Todo.prototype.addLabel = function addLabel() { /* ... */};
Todo.prototype.remove = function remove() { /* ... */};
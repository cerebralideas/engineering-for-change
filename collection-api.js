function collectionApi(collection) {

	collection = collection || [];

	function init(arr) {
		collection = arr;
	}
	function create(obj) {
		collection.push(model);
	}
	function read(id) {
		if (id === -1) {
			return collection;
		}
		id = parseInt(id, 10);
		return collection[id];
	}
	function update(id, obj) {
		collection[id] = obj;
	}
	function remove(id) {
		delete collection[id];
	}

	return {
		init: init,
		create: create,
		read: read,
		update: update,
		remove: remove
	};
}

var myCollection = collectionApi();
myCollection.init([
	{name: 'justin'},
	{name: 'ben'},
	{name: 'venkat'}
]);

console.log(myCollection.read(0));

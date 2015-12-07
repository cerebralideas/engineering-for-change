// Sample method
function archive(id) {
	return saveToArchiveService(id, function (err, response) {
		return response.body.todo.state;
	});
};
function todoFactory() {

	// Private Functions
	function createUniqueId () { /* ... */ }
	function serviceCb() { /* ... */ }
	function saveToArchiveService() { /* ... */ }
	function todoLabelMapper() { /* ... */ }
	function todoStateEnum() { /* ... */ }

	// Public Functions
	function archive() { /* ... */ }
	function complete() { /* ... */ }
	function addLabel() { /* ... */ }
	function remove() { /* ... */ }

	// Export public API
	return {
		archive: archive,
		complete: complete,
		addLabel: addLabel,
		remove: remove
	}
}
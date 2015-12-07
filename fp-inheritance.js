
// Utility Functions
function createUniqueId () { /* ... */ }
function serviceCb() { /* ... */ }
// ...

function todoFactory() {

	// Export public API
	return {
		archive: archive,
		complete: complete,
		addLabel: addLabel,
		remove: remove
	}
}

function reminderFactory() {

	// Private unique functions
	function calculateDate() { /* ... */ }

	// Public unique functions
	function snooze() { /* ... */ }

	// Export public API
	return {
		archive: archive,
		snooze: snooze,
		complete: complete,
		addLabel: addLabel,
		remove: remove
	}
}
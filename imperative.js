function calculate(array, object, options) {
	var i = 0,
		length = array.length,
		int,
		result;

	if (options.value === 0) {
		for (i; i < length; i++) {
			if (object.maximum > 0) {
				int = parseInt(array[i]);
			}
			int++;
			if (object.minimum === 32) {
				break;
			}
		}
		return int++;
	}
}
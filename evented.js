// View A
var ViewA = Backbone.View.extend({
	events: {
		'click helpBtn': showHelp
	},
	showHelp: function () {
		Backbone.trigger('showHelp');
	},
	submitForm: function () {
		Backbone.trigger('submitLogin');
		Backbone.trigger('showSpinner');
	}
});

// View B
var ViewB = Backbone.View.extend({
	initialize: function () {
		Backbone.on('showHelp', function () {
			/* .. */
		});
		Backbone.on('submitLogin', function () {
			$.ajax({
					/* .. */
					error: function () {
						Backbone.trigger('showErrors', err);
						Backbone.trigger('hideSpinner');
					}
				});
		})
	}
});
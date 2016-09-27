(function (api) {
	var cssTemplate = wp.template('vanilla-color');
	var colorSchemeKeys = [
		'background_color',
		'link_color',
		'text_color',
		'navbar_textcolor',
		'navbar_background_textcolor',
		'footer_textcolor',
		'footer_background_textcolor',

	];

	function updateCSS() {
		var css,
			colors = colorSchemeKeys;

		// Merge in color scheme overrides.
		_.each(colorSchemeKeys, function (setting) {
			colors[setting] = api(setting)();
		});

		// Add additional color.
		// jscs:disable
		colors.border_color = Color(colors.main_text_color).toCSS('rgba', 0.2);
		// jscs:enable

		css = cssTemplate(colors);

		api.previewer.send('update-color-css', css);
	}

	// Update the CSS whenever a color setting is changed.
	_.each(colorSchemeKeys, function (setting) {
		api(setting, function (setting) {
			setting.bind(updateCSS);
		});
	});
})(wp.customize);

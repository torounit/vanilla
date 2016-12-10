(function (api) {
	var cssTemplate = wp.template('vanilla-color');
	var colorSchemeKeys = [
		'background_color',
		'link_color',
		'text_color',
		'header_textcolor',
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

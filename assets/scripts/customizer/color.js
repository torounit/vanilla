(function (api) {
	var cssTemplate = wp.template('vanilla-color');
	var colorSchemeKeys = [
		'background_color',
		'link_color',
		'text_color',
		'header_textcolor',
		'navbar_textcolor',
		'navbar_background_color',
		'archive_header_textcolor',
		'archive_header_background_color',
		'post_thumbnail_background_color',
		'footer_textcolor',
		'footer_background_color',

	];

	function updateCSS() {
		var css,
			colors = colorSchemeKeys;

		// Merge in color scheme overrides.
		_.each(colorSchemeKeys, function (setting) {
			var color = api(setting)();
			if( !color ) {
				if ( setting.indexOf('background_color') ) {
					color = 'transparent'
				}
				else {
					color = 'inherit'
				}
			}
			colors[setting] = color;
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

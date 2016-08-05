( function( api ) {
	var cssTemplate = wp.template( 'vanilla-color' );
	console.log( cssTemplate );
	var colorSchemeKeys = [
			'background_color',
			'post_background_color',
			'post_link_color',
			'post_text_color',
		],
		colorSettings = [
			'background_color',
			'post_background_color',
			'post_link_color',
			'post_text_color',
		];


	function updateCSS() {
		var css,
			colors = colorSchemeKeys;

		// Merge in color scheme overrides.
		_.each( colorSettings, function( setting ) {
			console.log(setting,api( setting ));
			colors[ setting ] = api( setting )();
		} );

		// Add additional color.
		// jscs:disable
		colors.border_color = Color( colors.main_text_color ).toCSS( 'rgba', 0.2 );
		// jscs:enable

		css = cssTemplate( colors );
		console.log( css);

		api.previewer.send( 'update-color-css', css );
	}

	// Update the CSS whenever a color setting is changed.
	_.each( colorSettings, function( setting ) {
		api( setting, function( setting ) {
			setting.bind( updateCSS );
		} );
	} );
} )( wp.customize );

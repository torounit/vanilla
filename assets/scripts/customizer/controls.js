/**
 * Live-update changed settings in real time in the Customizer preview.
 */

( function( $ ) {
	var api = wp.customize;
	console.log(api)
	api.bind( 'ready', function() {
		"use strict";
		//Detect when the front page sections section is expanded (or closed) so we can adjust the preview accordingly.
		api.section( 'theme_options', function( section ) {
			section.expanded.bind( function( isExpanding ) {

				// Value of isExpanding will = true if you're entering the section, false if you're leaving it.
				api.previewer.send( 'section-highlight', { expanded: isExpanding });
			} );
		} );
	});

} )( jQuery );

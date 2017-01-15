/**
 * Live-update changed settings in real time in the Customizer preview.
 */

( function( $ ) {
	var style = $( '#vanilla-color-css' ),
		api = wp.customize;

	if ( ! style.length ) {
		style = $( 'head' ).append( '<style type="text/css" id="vanilla-color-css" />' )
			.find( '#vanilla-color-css' );
	}

	// Color Scheme CSS.
	api.bind( 'preview-ready', function() {
		api.preview.bind( 'update-color-css', function( css ) {
			style.html( css );
			//$("#vanilla-color-css").remove();
		} );
	} );

	// Site title.
	api( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );

	// Site tagline.
	api( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Add custom-background-image body class when background image is added.
	api( 'background_image', function( value ) {
		value.bind( function( to ) {
			$( 'body' ).toggleClass( 'custom-background-image', '' !== to );
		} );
	} );


	// Header text color.
	api( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.custom-header__branding' ).css({
					clip: 'rect(1px, 1px, 1px, 1px)',
					position: 'absolute'
				});
				// Add class for different logo styles if title and description are hidden.
				$( 'body' ).addClass( 'title-tagline-hidden' );
			} else {

				// Check if the text color has been removed and use default colors in theme stylesheet.
				if ( ! to.length ) {
					$( '#vanilla-custom-header-styles' ).remove();
				}
				// $( '.custom-header__branding' ).css({
				// 	clip: 'auto',
				// 	position: 'relative'
				// });
				$( '.custom-header' ).css({
					color: to
				});
				// Add class for different logo styles if title and description are visible.
				$( 'body' ).removeClass( 'title-tagline-hidden' );
			}
		});
	});

	// Whether a header image is available.
	function hasHeaderImage() {
		var image = api( 'header_image' )();
		return '' !== image && 'remove-header' !== image;
	}


	// Toggle a body class if a custom header exists.
	$.each( [ 'header_image' ], function( index, settingId ) {
		wp.customize( settingId, function( setting ) {
			setting.bind(function() {
				if ( hasHeaderImage() ) {
					$( ".custom-header" ).addClass( 'custom-header--has-image' );
				} else {
					$( ".custom-header" ).removeClass( 'custom-header--has-image' );
				}
			} );
		} );
	} );



} )( jQuery );

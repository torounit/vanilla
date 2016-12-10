<?php
/**
 * Header image settings.
 *
 * @package vanilla
 */

/**
 * Register custom header support.
 */
function vanilla_custom_header() {

	add_theme_support( 'custom-header', apply_filters( 'vanilla_custom_header_args', array(
		'width'              => 1920,
		'height'             => 960,
		'flex-height'        => true,
		'wp-head-callback'   => 'vanilla_header_style',
		'default-text-color' => '',
	) ) );
}
add_action( 'after_setup_theme', 'vanilla_custom_header' );

/**
 * Show css for background-image.
 */
function vanilla_header_background() {
	echo '<style type="text/css" id="vanilla-header-image-style-css">';
	if ( 'blank' != get_header_textcolor() ) {
		$css = '.custom-header { color: #' . get_header_textcolor() . ' !important; }';
		echo wp_kses( $css, array() );
	}
	echo '</style>';
}
add_action( 'wp_head', 'vanilla_header_background', 11 );


if ( ! function_exists( 'vanilla_header_style' ) ) :

	/**
	 * Render style for disable title and description.
	 */
	function vanilla_header_style() {

		if ( ! display_header_text() ) :?>
			<style type="text/css" id="vanilla-header-css">

				.custom-header .site-title,
				.custom-header .site-description {
					clip: rect(1px, 1px, 1px, 1px);
					position: absolute;
				}
			</style>
			<?php
		endif;
	}
endif;

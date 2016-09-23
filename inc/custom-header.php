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
		'width'              => 2000,
		'height'             => 300,
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
	$css = '';
	if ( get_header_image() ) {
		?>
		<style type="text/css">
			.masthead::before,
			.masthead::after {
				display: block !important;
			}
		</style>
		<?php
		$css = '#masthead { background-image: url(' . esc_url( get_header_image() ) . ') !important; }';
	}
	echo '<style type="text/css" id="vanilla-header-image-style-css">' . wp_kses( $css, array() ) . '</style>';
}
add_action( 'wp_head', 'vanilla_header_background', 11 );


if ( ! function_exists( 'vanilla_header_style' ) ) :

	/**
	 * Render style for disable title and description.
	 */
	function vanilla_header_style() {

		if ( ! display_header_text() and ! get_header_image() ) :?>
			<style type="text/css" id="vanilla-header-css">
				.masthead::before,
				.masthead::after {
					display: none;
				}

				.masthead__title,
				.masthead__description {
					clip: rect(1px, 1px, 1px, 1px);
					position: absolute;
				}
			</style>
			<?php
		elseif ( ! display_header_text() ) :?>
			<style type="text/css" id="vanilla-header-css">

				.masthead__title,
				.masthead__description {
					clip: rect(1px, 1px, 1px, 1px);
					position: absolute;
				}
			</style>
			<?php
		endif;
	}
endif;

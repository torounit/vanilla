<?php
/**
 * Header image settings.
 *
 * @package vanilla
 */

/**
 * Register custom header support.
 */
function vanilla_custom_header_setup() {

	add_theme_support( 'custom-header', apply_filters( 'vanilla_custom_header_args', array(
		'default-image'      => get_parent_theme_file_uri( '/assets/images/header.jpg' ),
		'width'              => 1920,
		'height'             => 960,
		'flex-height'        => true,
		'video'              => true,
		'wp-head-callback'   => 'vanilla_header_style',
	) ) );

	register_default_headers( array(
		'default-image' => array(
			'url'           => '%s/assets/images/header.jpg',
			'thumbnail_url' => '%s/assets/images/header.jpg',
			'description'   => __( 'Default Header Image', 'twentyseventeen' ),
		),
	) );
}
add_action( 'after_setup_theme', 'vanilla_custom_header_setup' );

/**
 * Custom header callback.
 */
function vanilla_header_style() {
	$header_text_color = get_header_textcolor();

	if ( get_theme_support( 'custom-header', 'default-text-color' ) === $header_text_color ) {
		return;
	}

	// If we get this far, we have custom styles. Let's do this.
	?>
	<style id="vanilla-custom-header-styles" type="text/css">
		<?php
			// Has the text been hidden?
			if ( 'blank' === $header_text_color ) :
		?>
		.site-title,
		.site-description {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		}
		<?php
		// If the user has set a custom color for the text use that.
			else :
		?>
		.custom-header {
			color: #<?php echo esc_attr( $header_text_color ); ?>;
		}
		<?php endif; ?>
	</style>
	<?php
}

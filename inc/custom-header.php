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
		'default-image'      => get_parent_theme_file_uri( '/assets/images/default-header.jpg' ),
		'width'              => 1920,
		'height'             => 1200,
		'flex-height'        => true,
		'video'              => true,
		'default-text-color' => '#ffffff',
		'header-text'            => true,
		'wp-head-callback'   => 'vanilla_header_style',
	) ) );

	register_default_headers( array(
		'default-image' => array(
			'url'           => '%s/assets/images/default-header.jpg',
			'thumbnail_url' => '%s/assets/images/default-header.jpg',
			'description'   => __( 'Default Header Image', 'vanilla' ),
		),
		'vanilla' => array(
			'url'           => '%s/assets/images/vanilla.jpg',
			'thumbnail_url' => '%s/assets/images/vanilla.jpg',
			'description'   => __( 'Ice cream', 'vanilla' ),
		),
		'parlor' => array(
			'url'           => '%s/assets/images/parlor.jpg',
			'thumbnail_url' => '%s/assets/images/parlor.jpg',
			'description'   => __( 'Ice cream parlor', 'vanilla' ),
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
		.custom-header__branding {
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

<?php
/**
 * Theme customizer settings.
 *
 * @package vanilla
 */

/**
 * Color settings.
 *
 * @return array
 */
function vanilla_get_customize_color_settings() {
	return array(
		'text_color'                      => array(
			'label'    => __( 'Post text color', 'vanilla' ),
			'selector' => 'body',
			'property' => 'color',
			'default'  => '#000000',
		),
		'link_color'                      => array(
			'label'    => __( 'Link color', 'vanilla' ),
			'selector' => 'a',
			'property' => 'color',
			'default'  => '#337ab7',
		),
		'navbar_textcolor'                => array(
			'label'    => __( 'Navigation bar text color', 'vanilla' ),
			'selector' => '.navbar',
			'property' => 'color',
			'default'  => '#000000',
		),
		'navbar_background_color'         => array(
			'label'    => __( 'Navigation bar background color', 'vanilla' ),
			'selector' => '.navbar',
			'property' => 'background-color',
			'default'  => '#ffffff',
		),
		'archive_header_textcolor'        => array(
			'label'    => __( 'Archive header text color', 'vanilla' ),
			'selector' => '.archive-header',
			'property' => 'color',
			'default'  => '#ffffff',
		),
		'archive_header_background_color' => array(
			'label'    => __( 'Archive header background color', 'vanilla' ),
			'selector' => '.archive-header',
			'property' => 'background-color',
			'default'  => '#666666',
		),
		'post_thumbnail_background_color' => array(
			'label'    => __( 'Post thumbnail background color', 'vanilla' ),
			'selector' => '.post-thumbnail,.gallery-icon',
			'property' => 'background-color',
			'default'  => '#eeeeee',
		),
		'footer_textcolor'                => array(
			'label'    => __( 'Footer text color', 'vanilla' ),
			'selector' => '.site-footer',
			'property' => 'color',
			'default'  => '#000000',
		),
		'footer_background_color'         => array(
			'label'    => __( 'Footer background color', 'vanilla' ),
			'selector' => '.site-footer',
			'property' => 'background-color',
			'default'  => '#ffffff',
		),
	);
}

/**
 * Adds postMessage support for site title and description for the Customizer.
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 */
function vanilla_customize_register( WP_Customize_Manager $wp_customize ) {

	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'            => '.site-title a',
			'container_inclusive' => false,
			'render_callback'     => 'vanilla_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'            => '.site-description',
			'container_inclusive' => false,
			'render_callback'     => 'vanilla_customize_partial_blogdescription',
		) );

	}

	foreach ( vanilla_get_customize_color_settings() as $key => $param ) {

		// Add page background color setting and control.
		$wp_customize->add_setting( $key, array(
			'default'           => $param['default'],
			'sanitize_callback' => 'sanitize_hex_color',
			'transport'         => 'postMessage',
		) );

		$control = new WP_Customize_Color_Control( $wp_customize, $key, array(
			'label'   => $param['label'],
			'section' => 'colors',
		) );

		$wp_customize->add_control( $control );

	}
}

add_action( 'customize_register', 'vanilla_customize_register', 11 );

/**
 * Add front page panel section.
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 */
function vanilla_setup_theme_options_panel( WP_Customize_Manager $wp_customize ) {

	$wp_customize->add_panel( 'theme_options', array(
		'title'    => __( 'Theme Options', 'vanilla' ),
		'priority' => 130, // Before Additional CSS.
	) );

	vanilla_setup_theme_options_front_page_section( $wp_customize );
	vanilla_setup_theme_options_navbar_section( $wp_customize );
}

add_action( 'customize_register', 'vanilla_setup_theme_options_panel', 12 );

/**
 * Add front page panel section.
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 */
function vanilla_setup_theme_options_front_page_section( WP_Customize_Manager $wp_customize ) {

	/**
	 * Theme options.
	 */
	$wp_customize->add_section( 'front_page', array(
		'title' => __( 'Front Page', 'vanilla' ),
		'panel' => 'theme_options',
	) );

	/**
	 * Filter number of front page sections in Twenty Seventeen.
	 *
	 * @since Twenty Seventeen 1.0
	 *
	 * @param $num_sections integer
	 */
	$num_sections = apply_filters( 'vanilla_front_page_sections', 4 );

	// Create a setting and control for each of the sections available in the theme.
	for ( $i = 1; $i < ( 1 + $num_sections ); $i ++ ) {
		$wp_customize->add_setting( 'panel_' . $i, array(
			'default'           => false,
			'sanitize_callback' => 'absint',
			'transport'         => 'postMessage',
		) );

		/* @noinspection SqlNoDataSourceInspection */
		$wp_customize->add_control( 'panel_' . $i, array(
			/* translators: %d is the front page section number */
			'label'           => sprintf( __( 'Front Page Section %d Content', 'vanilla' ), $i ),
			'description'     => ( 1 !== $i ? '' : __( 'Select pages to feature in each area from the dropdowns. Add an image to a section by setting a featured image in the page editor. Empty sections will not be displayed.', 'vanilla' ) ),
			'section'         => 'front_page',
			'type'            => 'dropdown-pages',
			'allow_addition'  => true,
			'active_callback' => 'vanilla_is_static_front_page',
		) );

		$wp_customize->selective_refresh->add_partial( 'panel_' . $i, array(
			'selector'            => '#panel' . $i,
			'render_callback'     => 'vanilla_front_page_section',
			'container_inclusive' => true,
		) );
	}

	$wp_customize->add_setting( 'posts_layout_on_front_page', array(
		'default'           => 'list',
		'sanitize_callback' => 'vanilla_sanitize_posts_layout_on_front_page',
		'transport'         => 'postMessage',
	) );

	$wp_customize->add_control( 'posts_layout_on_front_page', array(
		'label'           => __( 'Posts Layout on Front Page', 'vanilla' ),
		'description'     => __( 'Select style for posts list', 'vanilla' ),
		'section'         => 'front_page',
		'type'            => 'radio',
		'choices'         => array(
			'list'  => __( 'list', 'vanilla' ),
			'block' => __( 'block', 'vanilla' ),
		),
		'active_callback' => 'vanilla_is_static_front_page',
	) );
}

/**
 * Add body class for customizer.
 *
 * @param String $classes body_class parts.
 *
 * @return array
 */
function vanilla_customizer_postlist_body_class( $classes ) {
	if ( 'block' == get_theme_mod( 'posts_layout_on_front_page' ) ) {
		$classes[] = 'postlist-style-block';
	} else {
		$classes[] = 'postlist-style-list';
	}

	return $classes;
}

add_filter( 'body_class', 'vanilla_customizer_postlist_body_class' );

/**
 * Add Navbar section.
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 */
function vanilla_setup_theme_options_navbar_section( WP_Customize_Manager $wp_customize ) {

	$wp_customize->add_section( 'navbar', array(
		'title' => __( 'Navbar', 'vanilla' ),
		'panel' => 'theme_options',
	) );

	$wp_customize->add_setting( 'navbar_transparent_at_front_page', array(
		'default'           => 0,
		'sanitize_callback' => 'absint',
		'transport'         => 'postMessage',
	) );

	$wp_customize->add_control( 'navbar_transparent_at_front_page', array(
		'label'   => __( 'Transparent Navbar at Front Page', 'vanilla' ),
		'section' => 'navbar',
		'type'    => 'checkbox',
	) );

	$wp_customize->add_setting( 'navbar_transparent_at_post_with_thumbnail', array(
		'default'           => 0,
		'sanitize_callback' => 'absint',
		'transport'         => 'postMessage',
	) );

	$wp_customize->add_control( 'navbar_transparent_at_post_with_thumbnail', array(
		'label'   => __( 'Transparent Navbar on Post with Thumbnail', 'vanilla' ),
		'section' => 'navbar',
		'type'    => 'checkbox',
	) );
}

/**
 * Add body class for for navbar.
 *
 * @param String $classes body_class parts.
 *
 * @return array
 */
function vanilla_customizer_navbar_body_class( $classes ) {
	if ( is_front_page() && get_theme_mod( 'navbar_transparent_at_front_page' ) ) {
		$classes[] = 'navbar-transparent';
	}

	if ( is_singular() && has_post_thumbnail() ) {
		$classes[] = 'singular-with-thumbnail';

		if ( get_theme_mod( 'navbar_transparent_at_post_with_thumbnail' ) ) {
			$classes[] = 'navbar-transparent';
		}
	}

	return $classes;
}

add_filter( 'body_class', 'vanilla_customizer_navbar_body_class' );


/**
 * Return whether we're previewing the front page and it's a static page.
 *
 * @return bool
 */
function vanilla_is_static_front_page() {
	return ( is_front_page() && ! is_home() );
}

/**
 * Create css block.
 *
 * @param string $selector CSS selector.
 * @param string $property CSS property name.
 * @param string $value CSS value.
 *
 * @return string
 */
function vanilla_create_css( $selector, $property, $value ) {
	return sprintf(
		'%1$s { %2$s: %3$s; }',
		$selector,
		$property,
		$value
	);
}

/**
 * Sanitize the posts_layout_on_front_page options.
 *
 * @param string $input input value.
 *
 * @return string
 */
function vanilla_sanitize_posts_layout_on_front_page( $input ) {
	$valid = array(
		'list'  => __( 'list', 'vanilla' ),
		'block' => __( 'block', 'vanilla' ),
	);

	if ( array_key_exists( $input, $valid ) ) {
		return $input;
	}

	return '';
}

/**
 * Register custom inline css.
 */
function vanilla_color_css() {

	foreach ( vanilla_get_customize_color_settings() as $key => $param ) {
		$value = get_theme_mod( $key );
		if ( $value ) {
			$css = vanilla_create_css( $param['selector'], $param['property'], $value );
		} else {
			$css = vanilla_create_css( $param['selector'], $param['property'], $param['default'] );
		}

		wp_add_inline_style( 'vanilla-style', $css );
	}

}

add_action( 'wp_enqueue_scripts', 'vanilla_color_css', 11 );

/**
 * Customizer default value.
 */
function vanilla_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Customizer default value.
 */
function vanilla_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Register script for customizer.
 */
function vanilla_customize_preview_js() {
	wp_enqueue_script( 'vanilla-customize-preview', get_template_directory_uri() . '/assets/scripts/customizer/preview.js', array( 'customize-preview' ), '1.0.0', true );
}

add_action( 'customize_preview_init', 'vanilla_customize_preview_js' );

/**
 * Load dynamic logic for the customizer controls area.
 */
function vanilla_customize_controls_js() {
	wp_enqueue_script( 'vanilla-customize-controls', get_template_directory_uri() . '/assets/scripts/customizer/controls.js', array(), '1.0.0', true );
}

add_action( 'customize_controls_enqueue_scripts', 'vanilla_customize_controls_js' );


/**
 * Customizer default value.
 */
function vanilla_customize_control_js() {
	wp_enqueue_script( 'vanilla-customize-color', get_template_directory_uri() . '/assets/scripts/customizer/color.js', array(
		'customize-controls',
		'customize-preview',
		'iris',
		'underscore',
		'wp-util',
	), '1.0.0', true );
}

add_action( 'customize_controls_enqueue_scripts', 'vanilla_customize_control_js' );


/**
 * Render script for customizer preview
 */
function vanilla_color_scheme_css_template() {

	$settings = vanilla_get_customize_color_settings();
	?>
	<script type="text/html" id="tmpl-vanilla-color">
		<?php
		foreach ( $settings as $key => $setting ) {
			echo '<# if ( data.' . esc_js( $key ) . ' ) { #>';
			echo esc_js( vanilla_create_css( $setting['selector'], $setting['property'], '{{ data.' . $key . ' }}' ) );
			echo '<# } #>';
		}
		?>
	</script>
	<?php
}

add_action( 'customize_controls_print_footer_scripts', 'vanilla_color_scheme_css_template' );

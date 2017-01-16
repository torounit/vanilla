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
		'text_color'                  => array(
			'label'    => __( 'Post text color', 'vanilla' ),
			'selector' => 'body',
			'property' => 'color',
			'default'  => '#000000',
		),
		'link_color'                  => array(
			'label'    => __( 'Link color', 'vanilla' ),
			'selector' => 'a',
			'property' => 'color',
			'default'  => '#337ab7',
		),
		'navbar_textcolor'            => array(
			'label'    => __( 'Navigation bar text color', 'vanilla' ),
			'selector' => '.app-layout__header',
			'property' => 'color',
			'default'  => '#000000',
		),
		'navbar_background_color' => array(
			'label'    => __( 'Navigation bar background color', 'vanilla' ),
			'selector' => '.app-layout__header',
			'property' => 'background-color',
			'default'  => '#ffffff',
		),
		'archive_header_textcolor'            => array(
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
		'footer_textcolor'            => array(
			'label'    => __( 'Footer text color', 'vanilla' ),
			'selector' => '.site-footer',
			'property' => 'color',
			'default'  => '#000000',
		),
		'footer_background_color' => array(
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

	$wp_customize->get_setting( 'blogname' )->transport          = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport   = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport  = 'postMessage';

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
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 */
function vanilla_setup_theme_options_section( WP_Customize_Manager $wp_customize ) {
	/**
	 * Theme options.
	 */
	$wp_customize->add_section( 'theme_options', array(
		'title'    => __( 'Theme Options', 'vanilla' ),
		'priority' => 130, // Before Additional CSS.
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
	for ( $i = 1; $i < ( 1 + $num_sections ); $i++ ) {
		$wp_customize->add_setting( 'panel_' . $i, array(
			'default'           => false,
			'sanitize_callback' => 'absint',
			'transport'         => 'postMessage',
		) );

		$wp_customize->add_control( 'panel_' . $i, array(
			/* translators: %d is the front page section number */
			'label'          => sprintf( __( 'Front Page Section %d Content', 'vanilla' ), $i ),
			//'description'    => ( 1 !== $i ? '' : __( 'Select pages to feature in each area from the dropdowns. Add an image to a section by setting a featured image in the page editor. Empty sections will not be displayed.', 'vanilla' ) ),
			'section'        => 'theme_options',
			'type'           => 'dropdown-pages',
			'allow_addition' => true,
			'active_callback' => function(){
				return ( is_front_page() && ! is_home() );
			}
		) );

		$wp_customize->selective_refresh->add_partial( 'panel_' . $i, array(
			'selector'            => '#panel' . $i,
			'render_callback'     => 'vanilla_front_page_section',
			'container_inclusive' => true,
		) );
	}
}
add_action( 'customize_register', 'vanilla_setup_theme_options_section', 12 );


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
 * Register custom inline css.
 */
function vanilla_color_css() {

	foreach ( vanilla_get_customize_color_settings() as $key => $param ) {
		if ( $value = get_theme_mod( $key ) ) {
			$css = vanilla_create_css( $param['selector'], $param['property'], $value );
			wp_add_inline_style( 'vanilla-style', $css );
		}
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

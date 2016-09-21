<?php


function vanilla_get_customize_color_settings() {
	return array(
		'masthead_textcolor'       => array(
			'label' => __( 'Header Text Color', 'vanilla' ),
			'selector' => '.masthead__title, .masthead__description',
			'property' => 'color',
			// 'default'  => '#333333',
		),
		'masthead_background_textcolor'       => array(
			'label' => __( 'Header Background Color', 'vanilla' ),
			'selector' => '.masthead',
			'property' => 'background-color',
			// 'default'  => '#ffffff',
		),
		'navbar_textcolor'       => array(
			'label' => __( 'Navigation Bar Text Color', 'vanilla' ),
			'selector' => '.navbar',
			'property' => 'color',
			// 'default'  => '#333333',
		),
		'navbar_background_textcolor'       => array(
			'label' => __( 'Navigation Bar Background Color', 'vanilla' ),
			'selector' => '.navbar',
			'property' => 'background-color',
			// 'default'  => '#ffffff',
		),
		'text_color'       => array(
			'label' => __( 'Post Text Color', 'vanilla' ),
			'selector' => 'body',
			'property' => 'color',
			// 'default'  => '#333333',
		),
		'link_color'       => array(
			'label' => __( 'Link Color', 'vanilla' ),
			'selector' => 'a',
			'property' => 'color',
			// 'default'  => '#337ab7',
		),

	);
}

/**
 * Adds postMessage support for site title and description for the Customizer.
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 */
function vanilla_customize_register( $wp_customize ) {

	$wp_customize->remove_control( 'header_textcolor' );

	$wp_customize->get_setting( 'blogname' )->transport        = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';
	$wp_customize->get_setting( 'header_image' )->transport = 'postMessage';
	$wp_customize->get_setting( 'header_image_data' )->transport = 'postMessage';

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

		$wp_customize->selective_refresh->add_partial( 'header_image_data', array(
			'selector'            => '#vanilla-header-image-style-css',
			'container_inclusive' => true,
			'render_callback'     => 'vanilla_header_background',
		) );

	}

	foreach ( vanilla_get_customize_color_settings() as $key => $param ) {

		// Add page background color setting and control.
		$wp_customize->add_setting( $key, array(
			'default'           => '',
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
 * @param $selector
 * @param $property
 * @param $value
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


function vanilla_color_css() {

	foreach ( vanilla_get_customize_color_settings() as $key => $param ) {

		if ( $value = get_theme_mod( $key ) ) {
			$css = vanilla_create_css( $param['selector'], $param['property'], $value );
			wp_add_inline_style( 'vanilla-style', $css );
		}
	}

}

add_action( 'wp_enqueue_scripts', 'vanilla_color_css', 11 );


function vanilla_customize_partial_blogname() {
	bloginfo( 'name' );
}

function vanilla_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

function vanilla_customize_control_js() {
	wp_enqueue_script( 'vanilla-customize-color', get_template_directory_uri() . '/assets/scripts/customizer/color.js', array(
		'customize-controls',
		'iris',
		'underscore',
		'wp-util',
	), '1.0.0', true );
}

add_action( 'customize_controls_enqueue_scripts', 'vanilla_customize_control_js' );

function vanilla_customize_preview_js() {
	wp_enqueue_script( 'vanilla-customize-preview', get_template_directory_uri() . '/assets/scripts/customizer/preview.js', array( 'customize-preview' ), '1.0.0', true );
}

add_action( 'customize_preview_init', 'vanilla_customize_preview_js' );



function vanilla_color_scheme_css_template() {

	$settings = vanilla_get_customize_color_settings();
	?>
	<script type="text/html" id="tmpl-vanilla-color">
		<?php
		foreach ( $settings as $key => $setting ) {
			echo '<# if ( data.'. esc_js( $key ) .' ) { #>';
			echo esc_js( vanilla_create_css( $setting['selector'], $setting['property'], '{{ data.'. $key .' }}' ) );
			echo '<# } #>';
		}
		?>
	</script>
	<?php
}
add_action( 'customize_controls_print_footer_scripts', 'vanilla_color_scheme_css_template' );
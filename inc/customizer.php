<?php

/**
 * Adds postMessage support for site title and description for the Customizer.
 *
 * @since Twenty Sixteen 1.0
 *
 * @param WP_Customize_Manager $wp_customize The Customizer object.
 */
function vanilla_customize_register( $wp_customize ) {

// $wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
// $wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
//
// if ( isset( $wp_customize->selective_refresh ) ) {
// $wp_customize->selective_refresh->add_partial( 'blogname', array(
// 'selector' => '.site-title a',
// 'container_inclusive' => false,
// 'render_callback' => 'vanilla_customize_partial_blogname',
// ) );
// $wp_customize->selective_refresh->add_partial( 'blogdescription', array(
// 'selector' => '.site-description',
// 'container_inclusive' => false,
// 'render_callback' => 'vanilla_customize_partial_blogdescription',
// ) );
// }
	// Add page background color setting and control.
	$wp_customize->add_setting( 'page_background_color', array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_hex_color',
		// 'transport'         => 'postMessage',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'page_background_color', array(
		'label'       => __( 'Page Background Color', 'vanilla' ),
		'section'     => 'colors',
	) ) );

	// Add link color setting and control.
	$wp_customize->add_setting( 'link_color', array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_hex_color',
		// 'transport'         => 'postMessage',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'link_color', array(
		'label'       => __( 'Link Color', 'vanilla' ),
		'section'     => 'colors',
	) ) );

	// Add main text color setting and control.
	$wp_customize->add_setting( 'main_text_color', array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_hex_color',
		// 'transport'         => 'postMessage',
	) );

	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'main_text_color', array(
		'label'       => __( 'Main Text Color', 'vanilla' ),
		'section'     => 'colors',
	) ) );

}
add_action( 'customize_register', 'vanilla_customize_register', 11 );


function vanilla_page_background_color_css() {
	$page_background_color = get_theme_mod( 'page_background_color' );

	if ( ! $page_background_color ) {
		return;
	}
	$css = '
		.entry {
			background-color: %1$s;
		}
	';

	wp_add_inline_style( 'vanilla-style', sprintf( $css, $page_background_color ) );
}
add_action( 'wp_enqueue_scripts', 'vanilla_page_background_color_css', 11 );

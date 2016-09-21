<?php

add_action( 'after_setup_theme', 'vanilla_custom_header' );

function vanilla_custom_header() {

	add_theme_support( 'custom-header', apply_filters( 'vanilla_custom_header_args', array(
		'width'              => 2000,
		'height'             => 300,
		'flex-height'        => true,
		'wp-head-callback'   => 'vanilla_header_style',
		'default-text-color' => '',
	) ) );
}

function vanilla_header_background() {

	if ( get_header_image() ) {
		$css = '.musthead { background-image: url(' . esc_url( get_header_image() ) . '); }';
		wp_add_inline_style( 'vanilla-style', $css );
	}
}
add_action( 'wp_enqueue_scripts', 'vanilla_header_background', 11 );


if ( ! function_exists( 'vanilla_header_style' ) ) :

	function vanilla_header_style() {

		if ( ! display_header_text() ) :?>
			<style type="text/css" id="vanilla-header-css">

				.musthead__title,
				.musthead__description {
					clip: rect(1px, 1px, 1px, 1px);
					position: absolute;
				}
			</style>
			<?php
		endif;
	}
endif; // vanilla_header_style

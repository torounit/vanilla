<?php

add_action( 'after_setup_theme', 'vanilla_custom_background' );

function vanilla_custom_background() {

	add_theme_support( 'custom-background', apply_filters( 'vanilla_custom_background_args', array(
		'default-color'    => 'ffffff',
		'default-image'    => '',
		'wp-head-callback' => '_custom_background_cb',
	) ) );

}

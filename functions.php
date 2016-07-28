<?php
/**
 * components functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package vanilla
 */

if ( ! function_exists( 'vanilla_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function vanilla_setup() {

		load_theme_textdomain( 'vanilla', get_template_directory() . '/languages' );
		get_site_icon_url();
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );

		add_image_size( 'vanilla-featured-image', 1000, 9999 );

		register_nav_menus( array(
			'primary' => esc_html__( 'Primary Menu', 'vanilla' ),
		) );

		/**
		 * Add support for core custom logo.
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 150,
			'width'       => 150,
			'flex-width'  => true,
			'flex-height' => true,
		) );

		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		add_theme_support( 'post-formats', array(
			'aside',
			'image',
			'video',
			'quote',
			'link',
		) );
	}
endif;
add_action( 'after_setup_theme', 'vanilla_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * @global int $content_width
 */
function vanilla_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'vanilla_content_width', 1000 );
}

add_action( 'after_setup_theme', 'vanilla_content_width', 0 );


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function vanilla_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'vanilla' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}

add_action( 'widgets_init', 'vanilla_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function vanilla_scripts() {
	wp_enqueue_style( 'vanilla-style', get_stylesheet_uri(), array( 'dashicons' ) );
	wp_enqueue_script( 'vanilla-bundle', get_template_directory_uri() . '/bundle.js', array(
		'jquery',
		'underscore'
	), '1.0.0', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}

add_action( 'wp_enqueue_scripts', 'vanilla_scripts' );

require 'inc/custom-header.php';
require 'inc/custom-background.php';
require 'inc/customizer.php';

require 'inc/template-tags.php';


<?php
/**
 * Components functions and definitions.
 *
 * @package vanilla
 */

if ( ! function_exists( 'vanilla_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function vanilla_setup() {

		load_theme_textdomain( 'vanilla', get_template_directory() . '/languages' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_editor_style( get_stylesheet_uri() );

		add_image_size( 'vanilla-featured-image', 1920, 960, true );

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

		// Indicate widget sidebars can use selective refresh in the Customizer.
		add_theme_support( 'customize-selective-refresh-widgets' );
	}
endif;
add_action( 'after_setup_theme', 'vanilla_setup' );


if ( ! function_exists( 'vanilla_excerpt_more' ) && ! is_admin() ) :
	/**
	 * Replaces "[...]" (appended to automatically generated excerpts) with ...
	 *
	 * @return string an ellipsis.
	 */
	function vanilla_excerpt_more() {
		return '&hellip;';
	}

	add_filter( 'excerpt_more', 'vanilla_excerpt_more' );
endif;


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
		'name'          => esc_html__( 'The head of site main area', 'vanilla' ),
		'id'            => 'site-main-head-widget',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h4 class="widget-title widget__title">',
		'after_title'   => '</h4>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'The tail of site main area', 'vanilla' ),
		'id'            => 'site-main-tail-widget',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h4 class="widget-title widget__title">',
		'after_title'   => '</h4>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Footer primary widget area', 'vanilla' ),
		'id'            => 'footer-primary-widget',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h4 class="widget-title widget__title">',
		'after_title'   => '</h4>',
	) );

	$column        = apply_filters( 'vanilla_footer_secondary_widget_column', 1 );
	$column_small  = apply_filters( 'vanilla_footer_secondary_widget_column_small', 2 );
	$column_medium = apply_filters( 'vanilla_footer_secondary_widget_column_medium', 3 );
	$column_large  = apply_filters( 'vanilla_footer_secondary_widget_column_large', 4 );
	$class_name    = sprintf(
		'grid__u grid__u--grow grid__u--1_%d grid__u--small--1_%d grid__u--medium--1_%d grid__u--large--1_%d',
		$column,
		$column_small,
		$column_medium,
		$column_large
	);
	register_sidebar( array(
		'name'          => esc_html__( 'Footer secondary widget area', 'vanilla' ),
		'id'            => 'footer-secondary-widget',
		'description'   => '',
		'before_widget' => '<div class="' . esc_attr( $class_name ) . '"><section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section></div>',
		'before_title'  => '<h4 class="widget-title widget__title">',
		'after_title'   => '</h4>',
	) );
}

add_action( 'widgets_init', 'vanilla_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function vanilla_scripts() {
	$theme   = wp_get_theme( get_template() );
	$version = $theme->get( 'Version' );
	if ( is_child_theme() ) {
		wp_enqueue_style( get_template() . '-style', get_template_directory_uri() . '/style.css', array( 'dashicons' ), $version );
	}
	wp_enqueue_style( get_stylesheet() . '-style', get_stylesheet_uri(), array( 'dashicons' ), $version );
	wp_enqueue_script( 'vanilla-script', get_template_directory_uri() . '/bundle.js', array(
		'jquery',
		'underscore',
	), $version, true );
	wp_localize_script( 'vanilla-script', 'screenReaderText', array(
		'expand'   => __( 'expand child menu', 'vanilla' ),
		'collapse' => __( 'collapse child menu', 'vanilla' ),
	) );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}

add_action( 'wp_enqueue_scripts', 'vanilla_scripts' );

require dirname( __FILE__ ) . '/inc/custom-background.php';
require dirname( __FILE__ ) . '/inc/customizer.php';
require dirname( __FILE__ ) . '/inc/custom-header.php';
require dirname( __FILE__ ) . '/inc/template-tags.php';


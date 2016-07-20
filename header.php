<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package components-portfolio-portfolio
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site [ app-layout ]" data-app-layout-header=".app-layout__header" data-app-layout-content=".app-layout__content" data-app-layout-scroll-area="window">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'components-portfolio' ); ?></a>

	<div class="app-layout__header band band--highlight"  aria-hidden="false">
		<div class="container">
			<header id="masthead" class="site-header wpheader" role="banner">
				<div class="site-branding">
					<h1 class="site-title [ wpheader__title ]"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<p class="site-description"><?php bloginfo( 'description' ); ?></p>
				</div><!-- .site-branding -->
				<?php the_custom_logo(); ?>

			</header>
		</div>

	</div>

	<div id="content" class="site-content [ app-layout__content ]">




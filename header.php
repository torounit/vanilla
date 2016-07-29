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
<nav class="drawer"
	 data-drawer
	 data-drawer-container-selector="body"
	 id="primary-menu"
	 aria-expanded="false">

	<div class="drawer__body primary-menu">

		<?php wp_nav_menu( [
			'theme_location' => 'primary',
			'menu_class' => 'primary-menu__links',
		] );?>


	</div>
</nav>
<div id="page" class="site [ app-layout app-layout--disable ]" data-app-layout-header=".app-layout__header" data-app-layout-spacer=".site-header" data-app-layout-scroll-area="window">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'components-portfolio' ); ?></a>

	<div class="app-layout__header" aria-hidden="false">
		<div class="">

			<div class="container navbar">
				<div  class="navbar__branding">
					<div class="navbar__logo">
						<?php the_custom_logo(); ?>
					</div>
				</div>



				<button class="navbar__drawer-button" aria-controls="#primary-menu" aria-expanded="false" >
					<span class="hamburger-button"><span class="hamburger-button__bars"></span></span>
					<span class="screen-reader-text">menu</span>
				</button>
			</div>

		</div>

	</div>

	<div id="content" class="site-content [ app-layout__content ]">

		<header id="masthead" class="site-header" role="banner">
			<div class="container">
				<div class="site-branding">
					<h1 class="site-title [ site-branding__title ]"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<p class="site-description [ site-branding__description ]"><?php bloginfo( 'description' ); ?></p>
				</div><!-- .site-branding -->

			</div>


		</header>



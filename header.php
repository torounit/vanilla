<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package vanilla
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
	 role="navigation"
	 data-drawer
	 data-drawer-container-selector="body"
	 id="primary-menu"
	 aria-expanded="false">

	<div class="drawer__body primary-menu">

		<?php wp_nav_menu( array(
			'theme_location' => 'primary',
			'menu_class' => 'primary-menu__links',
		) );?>


	</div>
</nav>

<div id="page" class="site [ app-layout app-layout--disable ]" data-app-layout-header=".app-layout__header" data-app-layout-spacer=".app-layout__spacer" data-app-layout-scroll-area="window">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'vanilla' ); ?></a>
	<header class="app-layout__header" aria-hidden="false" role="banner">
		<div class="navbar container">
			<div  class="navbar__branding">
				<div class="site-branding">
					<div class="site-branding__logo"><?php the_custom_logo(); ?></div>
					<?php if ( is_front_page() ) : ?>
					<h1 class="site-branding__name site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php else : ?>
						<p class="site-branding__name site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
					<?php endif;?>
				</div>
			</div>

			<button class="navbar__drawer-button" aria-controls="#primary-menu" aria-expanded="false" >
				<span class="hamburger-button"><span class="hamburger-button__bars"></span></span>
				<span class="screen-reader-text">menu</span>
			</button>
		</div>

	</header>

	<div id="content" class="site-content [ app-layout__content ]">

		<?php if ( is_front_page() ) : ?>
			<div id="masthead" class="app-layout__spacer custom-header <?php if ( get_header_image() ) : ?> custom-header--has-image <?php endif;?>" role="banner">
				<div class="custom-header__media custom-header-media ">
					<?php the_custom_header_markup();?>
				</div>
				<div class="custom-header__branding">
					<div class="container">
						<p class="site-title [ custom-header__title ]"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
						<p class="site-description [ custom-header__description ]"><?php bloginfo( 'description' ); ?></p>
					</div>
				</div>
			</div>
		<?php else : ?>
			<div class="app-layout__spacer"></div>
		<?php endif;?>
		<div class="content-area">





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

	<div class="drawer__body side-menu">

		<?php wp_nav_menu( [
			'theme_location' => 'primary',
			'menu_class' => 'side-menu__links',
		] );?>


	</div>
</nav>
<div id="page" class="site [ app-layout app-layout--disable ]" data-app-layout-header=".app-layout__header" data-app-layout-content=".app-layout__content" data-app-layout-scroll-area="window">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'components-portfolio' ); ?></a>

	<div class="app-layout__header"  aria-hidden="false">
		<div class="container">
			<header id="masthead" class="site-header [ wpheader ]" role="banner">

				<div class="navbar">
					<div  class="navbar__branding">
						<div class="site-branding">
							<h1 class="site-title [ site-branding__title ]"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
							<p class="site-description [ site-branding__description ]"><?php bloginfo( 'description' ); ?></p>
						</div><!-- .site-branding -->
						<?php the_custom_logo(); ?>

					</div>

					<a href="#" class="navbar__drawer-button" aria-controls="#primary-menu" aria-expanded="false" >
						<span class="hamburger-button"><span class="hamburger-button__bars"></span></span>menu
					</a>
				</div>




			</header>
		</div>

	</div>

	<div id="content" class="site-content [ app-layout__content ]">




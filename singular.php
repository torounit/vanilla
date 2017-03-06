<?php
/**
 * The main template file.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package vanilla
 */

get_header(); ?>
	<div id="primary">
		<main id="main" class="site-main" role="main">
			<?php do_action( 'vanilla_site_main_prepend' ); ?>

			<?php
			if ( have_posts() ) :
				while ( have_posts() ) : the_post();

					get_template_part( 'template-parts/content' );

				endwhile;

			endif; ?>

			<?php if ( is_front_page() ) : ?>
				<?php
				/**
				 * Filter number of front page sections in Twenty Seventeen.
				 *
				 * @since Twenty Seventeen 1.0
				 *
				 * @param $num_sections integer
				 */
				$num_sections = apply_filters( 'vanilla_front_page_sections', 4 );
				global $vanillacounter;

				// Create a setting and control for each of the sections available in the theme.
				for ( $i = 1; $i < ( 1 + $num_sections ); $i ++ ) {
					$vanillacounter = $i;
					vanilla_front_page_section( null, $i );
				}
				?>
			<?php endif; ?>

			<?php if ( is_active_sidebar( 'site-main-tail-widget' ) ) : ?>
				<div class="container">
					<?php dynamic_sidebar( 'site-main-tail-widget' ); ?>
				</div>
			<?php endif; ?>

			<?php do_action( 'vanilla_site_main_append' ); ?>
		</main>
	</div>
<?php
get_footer();

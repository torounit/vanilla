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
			<?php
			if ( have_posts() ) :
				while ( have_posts() ) : the_post();

					get_template_part( 'template-parts/content' );

				endwhile;

			endif; ?>

		</main>
	</div>
<?php
get_footer();

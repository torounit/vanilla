<?php
/**
 * The main template file.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package vanilla
 */

get_header(); ?>
	<div id="primary" class="content-area">
		<main id="main" class="container site-main" role="main">
			<?php do_action( 'vanilla_site_main_prepend' );?>

			<?php
			if ( have_posts() ) :?>
				<section>
					<header class="container">
						<h1 class="site-main__title "><?php the_archive_title(); ?></h1>
						<p><?php term_description();?></p>
					</header>
					<?php
					while ( have_posts() ) : the_post(); ?>

						<?php get_template_part( 'template-parts/content');?>

						<?php

					endwhile;
					?>
					<?php
					the_posts_pagination( [
						'prev_text' => '<span class="pagination__arrow pagination__arrow_prev"><span class="screen-reader-text">Prev</span></span>',
						'next_text' => '<span class="pagination__arrow pagination__arrow_next"><span class="screen-reader-text">Next</span></span>',
						'before_page_number' => '<span class="pagination__numbers">',
						'after_page_number' => '</span>',

					] ); ?>

				</section>
				<?php

			else :
				//for not found.

			endif; ?>

		</main>
	</div>
<?php
get_footer();

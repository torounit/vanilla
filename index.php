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
		<main id="main" class="site-main" role="main">
			<?php do_action( 'vanilla_site_main_prepend' );?>

			<?php
			if ( have_posts() ) :?>
				<section>
					<div class="container">
						<header class="main-header">
							<h1 class="main-header__title"><?php the_archive_title(); ?></h1>
							<?php echo term_description();?>
						</header>
					</div>

					<?php
					while ( have_posts() ) : the_post();
						get_template_part( 'template-parts/content' );
					endwhile;

					the_posts_pagination( [
						'prev_text' => '<span class="pagination__arrow dashicons dashicons-arrow-left-alt2"></span><span class="screen-reader-text">Prev</span>',
						'next_text' => '<span class="pagination__arrow dashicons dashicons-arrow-right-alt2"></span><span class="screen-reader-text">Next</span>',
						'before_page_number' => '<span class="pagination__numbers">',
						'after_page_number' => '</span>',

					] ); ?>

				</section>
				<?php

			else :
				get_template_part( 'template-parts/content', 'none' );
			endif; ?>

		</main>
	</div>
<?php
get_footer();

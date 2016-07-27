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
			<div class="container">
				<?php
				if ( have_posts() ) :
					if ( is_home() && ! is_front_page() ) : ?>
						<header>
							<h1 class="site-main__title screen-reader-text"><?php single_post_title(); ?></h1>

						</header>
						<?php
					endif;

					while ( have_posts() ) : the_post(); ?>

						<article id="post-<?php the_ID(); ?>" <?php post_class("entry"); ?>>
							<?php if ( get_the_post_thumbnail() ) : ?>
								<div class="post-thumbnail">
									<a href="<?php the_permalink(); ?>">
										<?php the_post_thumbnail( 'vanilla-featured-image' ); ?>
									</a>
								</div>
							<?php endif; ?>

							<header class="entry-header entry__header">
								<h1 class="entry-title entry__title"><?php the_title( '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a>' ); ?></h1>
								<div class="entry__meta">
									<?php vanilla_posted_on();?>
								</div>

							</header>
							<div class="entry-content entry__content">
								<?php
								the_content();

								wp_link_pages( array(
									'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'vanilla' ),
									'after'  => '</div>',
								) );
								?>
							</div>

						</article><!-- #post-## -->

						<?php

					endwhile;
					?>
					<div class="pagination">
						<?php
						the_posts_pagination( [
							'prev_text' => '<span class="pagination__arrow pagination__arrow_prev"><span class="screen-reader-text">Prev</span></span>',
							'next_text' => '<span class="pagination__arrow pagination__arrow_next"><span class="screen-reader-text">Next</span></span>',
						]);?>
					</div>


					<?php



				else :
					//for not found.

				endif; ?>

			</div>

		</main>
	</div>
<?php
get_footer();

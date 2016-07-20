<?php
/**
 * The main template file.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package vanilla-portfolio
 */

get_header(); ?>
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<?php
			if ( have_posts() ) :
				if ( is_home() && ! is_front_page() ) : ?>
					<header>
						<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
					</header>
					<?php
				endif;

				while ( have_posts() ) : the_post(); ?>

					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<?php if ( get_the_post_thumbnail() ) : ?>
							<div class="post-thumbnail">
								<a href="<?php the_permalink(); ?>">
									<?php the_post_thumbnail( 'vanilla-featured-image' ); ?>
								</a>
							</div>
						<?php endif; ?>
						<div class="container">
							<header class="entry-header">
								<?php the_title( '<h1 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h1>' ); ?>

							</header>
							<div class="entry-content">
								<?php
								the_content();

								wp_link_pages( array(
									'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'vanilla' ),
									'after'  => '</div>',
								) );
								?>
							</div>

							<div class="entry-meta">
								<?php vanilla_posted_on();?>
							</div>

						</div>


					</article><!-- #post-## -->

					<?php

				endwhile;

				the_posts_navigation();

			else :
				//for not found.

			endif; ?>

		</main>
	</div>
<?php
get_footer();

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
			?>
				<?php if ( ! is_front_page() ) : ?>
					<header class="archive-header">
						<div class="container">
							<?php if ( is_search() ) : ?>
								<h1 class="archive-header__title"><?php printf( esc_html__( 'Search Results for: %s', 'vanilla' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
							<?php elseif ( is_home() ) : ?>
								<h1 class="archive-header__title"><?php single_post_title(); ?></h1>
							<?php else : ?>
								<h1 class="archive-header__title"><?php the_archive_title(); ?></h1>
								<?php echo term_description(); ?>
							<?php endif; ?>

						</div>
					</header>
				<?php endif; ?>

				<?php
				while ( have_posts() ) :
the_post();
					get_template_part( 'template-parts/content' );
				endwhile;

				the_posts_pagination( array(
					'prev_text'          => '<span class="pagination__arrow dashicons dashicons-arrow-left-alt2"></span><span class="screen-reader-text">Prev</span>',
					'next_text'          => '<span class="pagination__arrow dashicons dashicons-arrow-right-alt2"></span><span class="screen-reader-text">Next</span>',
					'before_page_number' => '<span class="pagination__numbers">',
					'after_page_number'  => '</span>',

				) );
				?>

				<?php

			else :
				get_template_part( 'template-parts/content', 'none' );
			endif;
			?>

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

<article id="post-<?php the_ID(); ?>" <?php post_class( "entry" ); ?>>
	<?php if ( get_the_post_thumbnail() ) : ?>
		<div class="post-thumbnail entry__featured-image">
			<a href="<?php the_permalink(); ?>">
				<?php the_post_thumbnail( 'vanilla-featured-image' ); ?>
			</a>
		</div>
	<?php endif; ?>

	<div class="entry__body">

		<header class="entry-header entry__header">
			<h1 class="entry-title entry__title"><?php the_title( '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a>' ); ?></h1>
			<div class="entry__meta">
				<?php vanilla_posted_on(); ?>
			</div>
		</header>

		<div class="entry-content entry__content">
			<?php
			if (is_singular()) {
				the_content();

				wp_link_pages( array(
					'before' => '<div class="page-links pagination">',
					'after'  => '</div>',
					'link_before' => '<span class="pagination__numbers">',
					'link_after'  => '</span>',

				) );
			}
			else {
				the_excerpt();
			}
			?>

		</div>

	</div>


</article><!-- #post-## -->
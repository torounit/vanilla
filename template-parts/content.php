<?php
/**
 * Template part for content.
 *
 * @package vanilla
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'entry' ); ?>>
	<?php if ( get_the_post_thumbnail() ) : ?>
		<div class="post-thumbnail entry__featured-image">
			<?php if ( is_singular() ) : ?>
				<?php the_post_thumbnail( 'vanilla-featured-image' ); ?>
			<?php else : ?>
				<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'vanilla-featured-image' ); ?></a>
			<?php endif; ?>

		</div>
	<?php endif; ?>

	<div class="entry__body container">

		<header class="entry-header entry__header">
			<?php
			if ( is_sticky() && is_home() && ! is_paged() ) :
			?>
				<div class="sticky-post">
					<span class="dashicons dashicons-admin-post"></span>
					<?php esc_html_e( 'Featured', 'vanilla' ); ?>
				</div>

				<?php
			elseif ( in_array( get_post_type(), array( 'post', 'attachment' ) ) ) :
			?>

				<p class="entry__posted-on posted-on">
					<span class="dashicons dashicons-calendar"></span>
					<span class="screen-reader-text"><?php echo esc_html_x( 'Posted on', 'Used before publish date.', 'vanilla' ); ?></span>
					<time class="entry-date published" datetime="<?php the_time( 'c' ); ?>"><?php echo get_the_date(); ?></time>
				</p>

				<?php
			endif;
			?>

			<?php if ( is_singular() && ! is_front_page() ) : ?>
				<h1 class="entry-title entry__title"><?php the_title(); ?></h1>
			<?php elseif ( is_singular() && is_front_page() ) : ?>
				<h2 class="entry-title entry__title"><?php the_title(); ?></h2>
			<?php else : ?>
				<h2 class="entry-title entry__title"><?php the_title( '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a>' ); ?></h2>
			<?php endif; ?>

			<div class="entry__meta">
				<?php vanilla_entry_meta(); ?>
			</div>
		</header>

		<div class="entry-content entry__content">
			<?php
			if ( is_singular() ) :
				the_content();

				wp_link_pages( array(
					'before'      => '<div class="page-links pagination">',
					'after'       => '</div>',
					'link_before' => '<span class="pagination__numbers">',
					'link_after'  => '</span>',

				) );
			else :
				the_excerpt();
				?>
				<p><a href="<?php the_permalink(); ?>" class="read-more"><?php /* translators: Continue reading 'post title'. */  printf( wp_kses_post( __( 'Continue reading <span class="screen-reader-text">%1$s</span>', 'vanilla' ) ), esc_attr( strip_tags( get_the_title() ) ) ); ?></a></p>
				<?php
			endif;
			?>

			<?php vanilla_entry_footer(); ?>
		</div>
		<?php
		if ( is_singular() && ( comments_open() || get_comments_number() ) ) :
		?>
			<?php comments_template(); ?>
		<?php endif; ?>

	</div>


</article><!-- #post-## -->

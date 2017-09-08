<?php
/**
 * Template part for content.
 *
 * @package vanilla
 */

global $vanillacounter;

?>

<article id="panel<?php echo esc_attr( $vanillacounter ); ?>" <?php post_class( 'entry panel' ); ?>>
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
			<h2 class="entry-title entry__title"><?php the_title(); ?></h2>
		</header>
		<div class="entry-content entry__content">

			<?php
			// Show recent blog posts if is blog posts page (Note that get_option returns a string, so we're casting the result as an int).
			if ( get_the_ID() === (int) get_option( 'page_for_posts' ) ) :
			?>

				<?php
				// Show four most recent posts.
				$recent_posts = new WP_Query( array(
					'post_status'         => 'publish',
					'ignore_sticky_posts' => true,
					'no_found_rows'       => true,
				) );
				?>

				<?php if ( $recent_posts->have_posts() ) : ?>

					<div class="postlist">
						<?php
						while ( $recent_posts->have_posts() ) :
							$recent_posts->the_post();
							?>
							<article class="postlist__item" itemscope itemtype="http://schema.org/Article">
								<time class="postlist__pubdate" itemprop="datePublished" content="<?php the_time( 'c' ); ?>"><?php the_time( 'Y.m.d' ); ?></time>
								<meta itemprop="dateModified" content="<?php the_modified_date( 'c' ); ?>">
								<h5 class="postlist__title"><a href="<?php the_permalink(); ?>"><span itemprop="headline"><?php the_title(); ?></span></a></h5>
							</article>
							<?php
						endwhile;
						wp_reset_postdata();
						?>
					</div>
				<?php endif; ?>

			<?php else : ?>
				<?php
				the_content( /* translators: %s: Name of current post */ sprintf(
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'vanilla' ),
					get_the_title()
				) );
				?>
			<?php endif; ?>

		</div>
	</div>


</article><!-- #post-## -->

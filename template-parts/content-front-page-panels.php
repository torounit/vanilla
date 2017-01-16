<?php
/**
 * Template part for content.
 *
 * @package vanilla
 */
global $vanillacounter;
?>

<article id="panel<?php echo $vanillacounter; ?>" <?php post_class( 'entry panel' ); ?>>
	<?php if ( get_the_post_thumbnail() ) : ?>
		<div class="post-thumbnail entry__featured-image">
			<?php if ( is_singular() ) : ?>
				<?php the_post_thumbnail( 'vanilla-featured-image' ); ?>
			<?php else : ?>
				<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'vanilla-featured-image' ); ?></a>
			<?php endif;?>

		</div>
	<?php endif; ?>

	<div class="entry__body container">

		<header class="entry-header entry__header">
			<h2 class="entry-title entry__title"><?php the_title(); ?></h2>
		</header>
		<div class="entry-content entry__content">

			<?php
			// Show recent blog posts if is blog posts page (Note that get_option returns a string, so we're casting the result as an int).
			if ( get_the_ID() === (int) get_option( 'page_for_posts' )  ) : ?>

				<?php // Show four most recent posts.
				$recent_posts = new WP_Query( array(
					'posts_per_page'      => 3,
					'post_status'         => 'publish',
					'ignore_sticky_posts' => true,
					'no_found_rows'       => true,
				) );
				?>

				<?php if ( $recent_posts->have_posts() ) : ?>

					<div class="recent-posts">
						<ul>
							<?php
							while ( $recent_posts->have_posts() ) : $recent_posts->the_post();
								?>
								<li class="postList__item" itemscope
								    itemtype="http://schema.org/Article">
									<time class="p-postList__pubdate"
									      itemprop="datePublished" content="<?php the_time( 'c' ); ?>"><?php the_time( 'Y.m.d' ); ?></time>
									<meta itemprop="dateModified" content="<?php the_modified_date( 'c' );?>">
									<a href="<?php the_permalink(); ?>"><span itemprop="headline"><?php the_title(); ?></span></a></li>
								<?php
							endwhile;
							wp_reset_postdata();
							?>							
						</ul>

					</div><!-- .recent-posts -->
				<?php endif; ?>

			<?php else : ?>
				<?php
				/* translators: %s: Name of current post */
				the_content( sprintf(
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'twentyseventeen' ),
					get_the_title()
				) );
				?>
			<?php endif; ?>

		</div>
	</div>


</article><!-- #post-## -->

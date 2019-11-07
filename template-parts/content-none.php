<?php
/**
 * Template part for displaying a message that posts cannot be found.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package vanilla
 */

?>

<section class="entry">
	<div class="entry__body container">
		<header class="entry-header entry__header">
			<h1 class="entry-title entry__title"><?php esc_html_e( 'Nothing Found', 'vanilla' ); ?></h1>
		</header>

		<div class="entry-content entry__content">
			<?php
			if ( is_home() && current_user_can( 'publish_posts' ) ) :
				?>

				<p>
				<?php
				/* translators: add post link. */
				printf(
					wp_kses(
						__( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'vanilla' ),
						array(
							'a' => array(
								'href' => array(),
							),
						)
					),
					esc_url( admin_url( 'post-new.php' ) )
				);
				?>
</p>

			<?php elseif ( is_search() ) : ?>

				<p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'vanilla' ); ?></p>
				<?php
				get_search_form();

			else :
				?>

				<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'vanilla' ); ?></p>
				<?php
				get_search_form();

			endif;
			?>
		</div>
	</div>
</section>

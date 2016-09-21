<?php
/**
 * The template for displaying comments.
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package vanilla
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<section id="comments" class="comments-area">

	<?php
	// You can start editing here -- including this comment!
	if ( have_comments() ) : ?>
		<h4 class="comments-area__title">
			<?php
			printf( // WPCS: XSS OK.
				esc_html( _nx( 'One thought on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', get_comments_number(), 'comments title', 'vanilla' ) ),
				number_format_i18n( get_comments_number() ),
				'<span>' . get_the_title() . '</span>'
			);
			?>
		</h4>

		<div class="comment-list">
			<?php
			wp_list_comments( array(
				'style'      => 'div',
				'short_ping' => true,
			) );
			?>
		</div>

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
			<nav id="comment-nav-above" class="navigation comment-navigation" role="navigation">
				<h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'vanilla' ); ?></h2>
				<div class="pagination pagination--small">
					<?php
					paginate_comments_links( array(
						'prev_text' => '<span class="pagination__arrow dashicons dashicons-arrow-left-alt2"></span><span class="screen-reader-text">Prev</span>',
						'next_text' => '<span class="pagination__arrow dashicons dashicons-arrow-right-alt2"></span><span class="screen-reader-text">Next</span>',
						'before_page_number' => '<span class="pagination__numbers">',
						'after_page_number' => '</span>',
					) );
					?>
				</div>
			</nav>
		<?php endif; // Check for comment navigation. ?>

		<?php
	endif; // Check for have_comments().

	// If comments are closed and there are comments, let's leave a little note, shall we?
	if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>

		<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'vanilla' ); ?></p>
		<?php
	endif;

	comment_form();
	?>

</section><!-- #comments -->

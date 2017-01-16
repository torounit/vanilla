<?php
/**
 * Custom template tags.
 *
 * @package vanilla
 */

if ( ! function_exists( 'vanilla_entry_meta' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time and author.
	 */
	function vanilla_entry_meta() {
		echo '<p class="entry-meta">';

		$format = get_post_format();
		if ( current_theme_supports( 'post-formats', $format ) ) {
			printf( '<span class="entry-format entry-meta__item">%1$s<a href="%2$s">%3$s</a></span>',
				sprintf( '<span>%s </span>', esc_html_x( 'Format', 'Used before post format.', 'vanilla' ) ),
				esc_url( get_post_format_link( $format ) ),
				esc_html( get_post_format_string( $format ) )
			);
		}

		if ( 'post' == get_post_type() ) {
			if ( is_singular() || is_multi_author() ) {
				printf( '<span class="byline entry-meta__item"><span class="author vcard"><span class="entry-meta__icon dashicons dashicons-admin-users"></span><span class="screen-reader-text">%1$s </span><a class="url fn n" href="%2$s">%3$s</a></span></span>',
					esc_html_x( 'Author', 'Used before post author name.', 'vanilla' ),
					esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
					get_the_author()
				);
			}

			$categories_list = get_the_category_list( esc_html_x( ', ', 'Used between list items, there is a space after the comma.', 'vanilla' ) );
			if ( $categories_list ) {
				printf( '<span class="cat-links entry-meta__item"><span class="entry-meta__icon dashicons dashicons-category"></span><span class="screen-reader-text">%1$s </span>%2$s</span>',
					esc_html_x( 'Categories', 'Used before category names.', 'vanilla' ),
					wp_kses( $categories_list, wp_kses_allowed_html( 'post' ) )
				);
			}

			$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'Used between list items, there is a space after the comma.', 'vanilla' ) );
			if ( $tags_list ) {
				printf( '<span class="tags-links entry-meta__item"><span class="entry-meta__icon dashicons dashicons-tag"></span><span class="screen-reader-text">%1$s </span>%2$s</span>',
					esc_html_x( 'Tags', 'Used before tag names.', 'vanilla' ),
					wp_kses( $tags_list, wp_kses_allowed_html( 'post' ) )
				);
			}
		}

		if ( is_attachment() && wp_attachment_is_image() ) {
			// Retrieve attachment metadata.
			$metadata = wp_get_attachment_metadata();

			printf( '<span class="full-size-link entry-meta__item"><span class="screen-reader-text">%1$s </span><a href="%2$s">%3$s &times; %4$s</a></span>',
				esc_html_x( 'Full size', 'Used before full size attachment link.', 'vanilla' ),
				esc_url( wp_get_attachment_url() ),
				esc_html( $metadata['width'] ),
				esc_html( $metadata['height'] )
			);
		}

		if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link entry-meta__item">';
			echo '<span class="entry-meta__icon dashicons dashicons-admin-comments"></span>';
			comments_popup_link( sprintf( __( 'Leave a comment<span class="screen-reader-text"> on %s</span>', 'vanilla' ), get_the_title() ) );
			echo '</span>';
		}

		echo '</p>';
	}
endif;

if ( ! function_exists( 'vanilla_entry_footer' ) ) :
	/**
	 * Prints HTML with meta information for the categories, tags and comments.
	 */
	function vanilla_entry_footer() {

		if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link">';
			comments_popup_link( esc_html__( 'Leave a comment', 'vanilla' ), esc_html__( '1 Comment', 'vanilla' ), esc_html__( '% Comments', 'vanilla' ) );
			echo '</span>';
		}

		edit_post_link( sprintf( esc_html__( 'Edit %s', 'vanilla' ), the_title( '<span class="screen-reader-text">"', '"</span>', false ) ), '<span class="edit-link">', '</span>' );
	}
endif;


/**
 * Show front page section.
 *
 * @param WP_Customize_Partial|null $partial WP_Customize_Partial object.
 * @param int                       $id      panel ID.
 */
function vanilla_front_page_section( $partial = null, $id = 0  ) {

	if ( is_a( $partial, 'WP_Customize_Partial' ) ) {
		// Find out the id and set it up during a selective refresh.
		global $vanillacounter;
		$id = str_replace( 'panel_', '', $partial->id );
		$vanillacounter = $id;
	}

	if ( get_theme_mod( 'panel_' . $id ) ) {
		global $post;
		$panel_post = get_post( get_theme_mod( 'panel_' . $id ) );
		// @codingStandardsIgnoreStart
		$post = $panel_post;
		// @codingStandardsIgnoreEnd
		setup_postdata( $post );
		get_template_part( 'template-parts/content', 'front-page-panels' );

		wp_reset_postdata();
	} elseif ( is_customize_preview() ) {
		// The output placeholder anchor.
		?>
		<article class="entry panel panel--placeholder" id="panel<?php echo esc_attr( $id );?>">
			<div class="entry__body container">
				<div class="panel__content"><?php echo esc_html( sprintf( __( 'Front Page Section %1$s Placeholder', 'vanilla' ), $id ) );?></div>
			</div>
		</article>
		<?php
	}
}

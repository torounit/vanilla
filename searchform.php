<?php
/**
 * Search form for our theme.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package vanilla
 */

?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label>
		<span class="screen-reader-text"><?php esc_attr_e( 'Search for:', 'vanilla' ) ?></span>
		<input type="search" class="search-field" placeholder="<?php esc_attr_e( 'Search &hellip;', 'vanilla' ) ?>" value="<?php echo get_search_query() ?>" name="s" title="<?php esc_attr_e( 'Search for:', 'vanilla' ) ?>"/>
	</label>
	<button type="submit" class="search-submit">
		<span class="dashicons dashicons-search"></span>
		<span class="screen-reader-text"><?php esc_html_e( 'Search', 'vanilla' ) ?></span>
	</button>
</form>

<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package vanilla
 */

?>
</div>
</div>
<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="site-footer__body">
		<div class="container">
			<?php dynamic_sidebar( 'footer-primary-widget' ); ?>

			<?php if ( is_active_sidebar( 'footer-secondary-widget' ) ) : ?>
				<div class="grid">
					<?php dynamic_sidebar( 'footer-secondary-widget' ); ?>
				</div>
			<?php endif; ?>

			<p class="text-small">
				<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'vanilla' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'vanilla' ), 'WordPress' ); ?></a>
				<span class="sep"> | </span>
				<?php
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'vanilla' ), 'Vanilla', '<a href="' . esc_url( __( 'https://torounit.com', 'vanilla' ) ) . '" target="_blank">' . esc_html__( 'Toro_Unit', 'vanilla' ) . '</a>' );
				?>
			</p>
		</div>
	</div>

</footer>
</div>
<?php wp_footer(); ?>

</body>
</html>

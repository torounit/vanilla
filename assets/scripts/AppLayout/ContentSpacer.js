import $ from 'jquery';

export default class ContentSpacer {
	/**
	 *
	 * @param {jQuery} $el
	 */
	constructor( $el ) {
		this.$el = $el;
		let header = $el.data('app-layout-header');
		let content = $el.data('app-layout-spacer');

		this.$header = $( header );
		this.$content = $( content );
		this.on();
	}

	on() {
		$(window).on( 'load resize', () => {
			this.setPadding()
		} );
	}

	setPadding() {
		this.$content.css({paddingTop: this.getHeaderHeight() + 'px'});
	}

	getHeaderHeight() {

		return this.$header.height();
	}
}
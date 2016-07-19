import $ from 'jquery';
import _ from 'underscore';


export default class ContentSpacer {
	/**
	 *
	 * @param {jQuery} $el
	 */
	constructor( $el ) {
		this.$el = $el;
		let header = $el.data('app-layout-header');
		let content = $el.data('app-layout-content');

		this.$header = $( header );
		this.$content = $( content );
		this.on();
	}

	on() {
		$(window).on( 'load resize', () => this.setPadding() );
	}

	setPadding() {
		console.log('set');
		this.$content.css({paddingTop: this.getHeaderHeight() + 'px'});
	}

	getHeaderHeight() {

		return this.$header.height();
	}
}
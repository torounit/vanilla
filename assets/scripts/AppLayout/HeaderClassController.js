import $ from 'jquery';
import _ from 'underscore';


export default class AppLayoutClassController {
	/**
	 *
	 * @param $el
	 * @param classString
	 * @param threshold クラスの設定をするためのスクロール位置
	 */
	constructor( $el, classString, threshold ) {
		this.classString = classString;
		this.threshold = threshold;
		this.$el = $el;
		let header = $el.data('app-layout-header');
		let content = $el.data('app-layout-scroll-area');
		this.$header = $( header );
		if ( content && content != 'window' ) {
			this.$content = $( content );
		}
		else {
			this.$content = $( window );
		}

		this.initialize();
		this.toggleClass();
		this.on();
	}

	initialize() {
		//for override
	}

	on() {
		this.$content.on( 'scroll resize', _.throttle(function(){
			this.toggleClass();
		}, 1 ).bind(this) );
	}

	toggleClass() {
		if( this.isExceedsThreshold() ) {
			this.$header.addClass( this.classString );
		}
		else {
			this.$header.removeClass( this.classString );
		}
	}

	getThreshold() {
		if( typeof this.threshold  == "function" ) {
			return this.threshold();
		}
		else {
			return this.threshold;
		}
	}

	isExceedsThreshold() {
		let scrollTop = this.$content.scrollTop();
		return ( scrollTop > this.getThreshold() );

	}
}


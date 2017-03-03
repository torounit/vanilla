import HeaderClassController from './HeaderClassController';

export default class extends HeaderClassController {

	initialize() {
		this.scrollPos = this.getScrollPosition();
	}

	getScrollPosition() {
		return this.$content.scrollTop();
	}

	toggleClass() {
		let currentPos = this.getScrollPosition();

		if( ! this.isExceedsThreshold() ) {
			this.$header.removeClass( this.classString );
			this.$header.attr('aria-hidden', 'false');
		}
		else if(  currentPos - this.scrollPos > 5 ) {
			//scroll to down
			this.$header.addClass( this.classString );
			this.$header.attr('aria-hidden', 'true');
		}
		else if (  currentPos - this.scrollPos < - 5 ) {
			//scroll to up
			this.$header.removeClass( this.classString );
			this.$header.attr('aria-hidden', 'false');
		}

		this.scrollPos = currentPos;
	}

}

import $ from 'jquery';
import _ from 'underscore';
import Drawer from './Drawer';
import HeaderClassController from './AppLayout/HeaderClassController';
import HeaderEscaper from './AppLayout/HeaderEscaper';
import ContentSpacer from './AppLayout/ContentSpacer';
import './skip-link-focus-fix';

$(function() {
	$("[data-drawer]").each(function(){
		new Drawer($(this));
	});
});

$(function() {

	let $toplevelMenuItems = $('.primary-menu .menu-item-has-children, .primary-menu .page_item_has_children');
	// Add dropdown toggle that displays child menu items.
	let $dropdownToggle = $( '<button />', {
		'class': 'dropdown-toggle',
		'aria-expanded': false
	} ).append( $( '<span />', {
		'class': 'screen-reader-text',
		text: screenReaderText.expand
	} ) );

	$toplevelMenuItems.children('a').after( $dropdownToggle );


	$(".primary-menu .sub-menu, .primary-menu .children").each(function () {
		$(this).attr('aria-expanded',"false");
	});

	$toplevelMenuItems.find('.dropdown-toggle').on( 'click', function (event) {
		let self = $(this);
		let expanded = '';
		if( 'true' == self.attr('aria-expanded')  ) {
			expanded = 'false';
			self.find('.screen-reader-text').text(screenReaderText.expand);
		}
		else {
			expanded = 'true';
			self.find('.screen-reader-text').text(screenReaderText.collapse);
		}
		self.attr('aria-expanded', expanded);

		self.siblings('.sub-menu,.children').attr('aria-expanded', expanded);
	})

});


$(function() {
	let $window = $(window);
	let $appLayout = $(".app-layout");
	let $navbar = $('.navbar');
	$window.on( 'load resize', () => {
		$appLayout.find(".app-layout__header").removeClass("app-layout__header--static");
	} );
	new HeaderClassController( $appLayout, "app-layout__header--fixed", 46 );
	new HeaderEscaper( $appLayout, "app-layout__header--escape", 128 );
	new ContentSpacer( $appLayout );


	$window.on( 'scroll resize', _.throttle(function(){
		if( $window.scrollTop() > 64 ) {
			$navbar.addClass( 'navbar--opaque' );
		}
		else {
			$navbar.removeClass( 'navbar--opaque' );
		}
	}, 1 ) );

});


import $ from 'jquery';
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

	let $toplevelMenuItems = $('.menu-item-has-children, .page_item_has_children');
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

	let $appLayout = $(".app-layout");
	$(window).on( 'load resize', () => {
		$appLayout.removeClass("app-layout--disable");
	} );
	new HeaderClassController( $appLayout, "app-layout__header--fixed", 46 );
	new HeaderEscaper( $appLayout, "app-layout__header--escape", 64 );
	new ContentSpacer( $appLayout );

});


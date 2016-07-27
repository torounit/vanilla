

import $ from 'jquery';

import Drawer from './Drawer';
import HeaderClassController from './AppLayout/HeaderClassController';
import HeaderEscaper from './AppLayout/HeaderEscaper';
import ContentSpacer from './AppLayout/ContentSpacer'

$(function() {


	$("[data-drawer]").each(function(){
		new Drawer($(this));
	});

	$("[data-page-top]").click(function() {
		var speed;
		speed = 800;
		$("html, body").animate({
			scrollTop: 0
		}, speed, "easeOutExpo");
		return false;
	});

	$(".sub-menu,.children").each(function () {
		//set default height for animation
		let height = $(this).height();
		$(this).height( height );

		$(this).attr('aria-expanded',"false");
	}).on( 'click', function (event) {
		event.stopPropagation();
		if( 'true' == $(this).attr('aria-expanded')  ) {
			$(this).attr('aria-expanded',"false");
		}
		else {
			$(this).attr('aria-expanded',"true");
		}

	});


	let $appLayout = $(".app-layout");
	$(window).on( 'load resize', () => {
		$appLayout.removeClass("app-layout--disable");
	} );
	new HeaderClassController( $appLayout, "app-layout__header--fixed", 46 );
	new HeaderEscaper( $appLayout, "app-layout__header--escape", 150 );
	new ContentSpacer( $appLayout );



});

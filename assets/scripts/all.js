

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

	let $appLayout = $(".app-layout");
	new HeaderClassController( $appLayout, "app-layout__header--fixed", 46 );
	new HeaderEscaper( $appLayout, "app-layout__header--escape", 150 );
	new ContentSpacer( $appLayout );



});

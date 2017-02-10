import $ from 'jquery';

export default class Drawer {

	constructor($el) {
		this.$el = $el;
		this.$container = $($el.data("drawer-container-selector"));
		this.id = $el.attr('id');
		this.$controller = $( '[aria-controls="#'+this.id+'" ]' );
		this.$container.addClass("drawer-container");
		this.on();

	}

	on() {
		this.$controller.on('click', this.toggle.bind(this));

		this.$el.on('click', this.close.bind(this));
		this.$el.children().on('click', function(event){
			event.stopPropagation();
		})

		$(document).on('keyup', (event) => {
			if (event.keyCode == 27) {
				this.close();
			}
		})
	}

	toggle(event) {
		event.preventDefault();
		if ( this.$el.attr('aria-expanded') == "false" ) {
			this.open();
		} else {
			this.close();
		}
	}

	open() {
		this.$el.attr('aria-expanded',"true");
		this.$el.attr('aria-hidden',"false");
		this.$controller.attr('aria-expanded',"true");
		this.$container.addClass("is-drawer-open");


	}

	close() {
		this.$el.attr('aria-expanded',"false");
		this.$el.attr('aria-hidden',"true");
		this.$controller.attr('aria-expanded',"false");
		this.$container.removeClass("is-drawer-open");
	}

	static init() {
		$("[data-drawer]").each(function(){
			new Drawer($(this));
		});
	}
}
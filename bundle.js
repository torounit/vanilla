(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentSpacer = function () {
	/**
  *
  * @param {jQuery} $el
  */
	function ContentSpacer($el) {
		_classCallCheck(this, ContentSpacer);

		this.$el = $el;
		var header = $el.data('app-layout-header');
		var content = $el.data('app-layout-spacer');

		this.$header = (0, _jquery2.default)(header);
		this.$content = (0, _jquery2.default)(content);
		this.on();
	}

	_createClass(ContentSpacer, [{
		key: 'on',
		value: function on() {
			var _this = this;

			(0, _jquery2.default)(window).on('load resize', function () {
				_this.setPadding();
			});
		}
	}, {
		key: 'setPadding',
		value: function setPadding() {
			this.$content.css({ paddingTop: this.getHeaderHeight() + 'px' });
		}
	}, {
		key: 'getHeaderHeight',
		value: function getHeaderHeight() {

			return this.$header.height();
		}
	}]);

	return ContentSpacer;
}();

exports.default = ContentSpacer;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppLayoutClassController = function () {
	/**
  *
  * @param $el
  * @param classString
  * @param threshold クラスの設定をするためのスクロール位置
  */
	function AppLayoutClassController($el, classString, threshold) {
		_classCallCheck(this, AppLayoutClassController);

		this.classString = classString;
		this.threshold = threshold;
		this.$el = $el;
		var header = $el.data('app-layout-header');
		var content = $el.data('app-layout-scroll-area');
		this.$header = (0, _jquery2.default)(header);
		if (content && content != 'window') {
			this.$content = (0, _jquery2.default)(content);
		} else {
			this.$content = (0, _jquery2.default)(window);
		}

		this.initialize();
		this.on();
	}

	_createClass(AppLayoutClassController, [{
		key: 'initialize',
		value: function initialize() {
			//for override
		}
	}, {
		key: 'on',
		value: function on() {
			this.$content.on('scroll resize', _underscore2.default.throttle(function () {
				this.toggleClass();
			}, 1).bind(this));
		}
	}, {
		key: 'toggleClass',
		value: function toggleClass() {
			if (this.isExceedsThreshold()) {
				this.$header.addClass(this.classString);
			} else {
				this.$header.removeClass(this.classString);
			}
		}
	}, {
		key: 'getThreshold',
		value: function getThreshold() {
			if (typeof this.threshold == "function") {
				return this.threshold();
			} else {
				return this.threshold;
			}
		}
	}, {
		key: 'isExceedsThreshold',
		value: function isExceedsThreshold() {
			var scrollTop = this.$content.scrollTop();
			return scrollTop > this.getThreshold();
		}
	}]);

	return AppLayoutClassController;
}();

exports.default = AppLayoutClassController;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HeaderClassController = require('./HeaderClassController');

var _HeaderClassController2 = _interopRequireDefault(_HeaderClassController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_HeaderClassControlle) {
	_inherits(_class, _HeaderClassControlle);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'initialize',
		value: function initialize() {
			this.scrollPos = this.getScrollPosition();
		}
	}, {
		key: 'getScrollPosition',
		value: function getScrollPosition() {
			return this.$content.scrollTop();
		}
	}, {
		key: 'toggleClass',
		value: function toggleClass() {
			var currentPos = this.getScrollPosition();

			if (!this.isExceedsThreshold()) {
				this.$header.removeClass(this.classString);
				this.$header.attr('aria-hidden', 'false');
			} else if (Math.abs(currentPos - this.scrollPos) > 30) {
				if (currentPos > this.scrollPos) {
					this.$header.addClass(this.classString);
					this.$header.attr('aria-hidden', 'true');
				} else {
					this.$header.removeClass(this.classString);
					this.$header.attr('aria-hidden', 'false');
				}
			}

			this.scrollPos = currentPos;
		}
	}]);

	return _class;
}(_HeaderClassController2.default);

exports.default = _class;

},{"./HeaderClassController":2}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Drawer = function () {
	function Drawer($el) {
		_classCallCheck(this, Drawer);

		this.$el = $el;
		this.$container = (0, _jquery2.default)($el.data("drawer-container-selector"));
		this.id = $el.attr('id');
		this.$controller = (0, _jquery2.default)('[aria-controls="' + this.id + '" ]');
		this.$container.addClass("drawer-container");
		this.on();
	}

	_createClass(Drawer, [{
		key: 'on',
		value: function on() {
			var _this = this;

			this.$controller.on('click', this.toggle.bind(this));
			this.$el.on('click', this.close.bind(this));
			this.$el.children().on('click', function (event) {
				event.stopPropagation();
			});

			(0, _jquery2.default)(document).on('keyup', function (event) {
				if (event.keyCode == 27) {
					_this.close();
				}
			});

			this.$el.on('transitionend', this.transitionend.bind(this));
		}
	}, {
		key: 'transitionend',
		value: function transitionend() {
			this.$el.removeClass('is-animated');
		}
	}, {
		key: 'toggle',
		value: function toggle(event) {
			event.preventDefault();
			if (this.$el.attr('aria-expanded') == "false") {
				this.open();
			} else {
				this.close();
			}
		}
	}, {
		key: 'open',
		value: function open() {
			this.$el.addClass('is-animated');
			this.$el.attr('aria-expanded', "true");
			this.$el.attr('aria-hidden', "false");
			this.$controller.attr('aria-expanded', "true");
			this.$container.addClass("is-drawer-open");
		}
	}, {
		key: 'close',
		value: function close() {
			this.$el.addClass('is-animated');
			this.$el.attr('aria-expanded', "false");
			this.$el.attr('aria-hidden', "true");
			this.$controller.attr('aria-expanded', "false");
			this.$container.removeClass("is-drawer-open");
		}
	}], [{
		key: 'init',
		value: function init() {
			(0, _jquery2.default)("[data-drawer]").each(function () {
				new Drawer((0, _jquery2.default)(this));
			});
		}
	}]);

	return Drawer;
}();

exports.default = Drawer;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
(function (global){
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _Drawer = require('./Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _HeaderClassController = require('./AppLayout/HeaderClassController');

var _HeaderClassController2 = _interopRequireDefault(_HeaderClassController);

var _HeaderEscaper = require('./AppLayout/HeaderEscaper');

var _HeaderEscaper2 = _interopRequireDefault(_HeaderEscaper);

var _ContentSpacer = require('./AppLayout/ContentSpacer');

var _ContentSpacer2 = _interopRequireDefault(_ContentSpacer);

require('./skip-link-focus-fix');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(function () {

	(0, _jquery2.default)("[data-drawer]").each(function () {
		new _Drawer2.default((0, _jquery2.default)(this));
	});

	(0, _jquery2.default)(".primary-menu .sub-menu, .primary-menu .children").each(function () {
		//set default height for animation
		// let height = $(this).height();
		// $(this).height( height );

		(0, _jquery2.default)(this).attr('aria-expanded', "false");
	}).on('click', function (event) {
		event.stopPropagation();
		if ('true' == (0, _jquery2.default)(this).attr('aria-expanded')) {
			(0, _jquery2.default)(this).attr('aria-expanded', "false");
		} else {
			(0, _jquery2.default)(this).attr('aria-expanded', "true");
		}
	}).find('a').on('click', function (event) {
		event.stopPropagation();
	});

	(0, _jquery2.default)('.menu-item-has-children, .page_item_has_children').find('a').focusin(function () {
		(0, _jquery2.default)(this).parent().find('.sub-menu, .children').attr('aria-expanded', "true");
	});

	var $appLayout = (0, _jquery2.default)(".app-layout");
	(0, _jquery2.default)(window).on('load resize', function () {
		$appLayout.removeClass("app-layout--disable");
	});
	new _HeaderClassController2.default($appLayout, "app-layout__header--fixed", 46);
	new _HeaderEscaper2.default($appLayout, "app-layout__header--escape", 150);
	new _ContentSpacer2.default($appLayout);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./AppLayout/ContentSpacer":1,"./AppLayout/HeaderClassController":2,"./AppLayout/HeaderEscaper":3,"./Drawer":4,"./skip-link-focus-fix":6}],6:[function(require,module,exports){
'use strict';

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
	var isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
	    isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
	    isIe = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

	if ((isWebkit || isOpera || isIe) && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function () {
			var id = location.hash.substring(1),
			    element;

			if (!/^[A-z0-9_-]+$/.test(id)) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvQ29udGVudFNwYWNlci5qcyIsImFzc2V0cy9zY3JpcHRzL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlci5qcyIsImFzc2V0cy9zY3JpcHRzL0RyYXdlci5qcyIsImFzc2V0cy9zY3JpcHRzL2J1bmRsZS5qcyIsImFzc2V0cy9zY3JpcHRzL3NraXAtbGluay1mb2N1cy1maXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFcUIsYTtBQUNwQjs7OztBQUlBLHdCQUFhLEdBQWIsRUFBbUI7QUFBQTs7QUFDbEIsT0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLE1BQUksU0FBUyxJQUFJLElBQUosQ0FBUyxtQkFBVCxDQUFiO0FBQ0EsTUFBSSxVQUFVLElBQUksSUFBSixDQUFTLG1CQUFULENBQWQ7O0FBRUEsT0FBSyxPQUFMLEdBQWUsc0JBQUcsTUFBSCxDQUFmO0FBQ0EsT0FBSyxRQUFMLEdBQWdCLHNCQUFHLE9BQUgsQ0FBaEI7QUFDQSxPQUFLLEVBQUw7QUFDQTs7Ozt1QkFFSTtBQUFBOztBQUNKLHlCQUFFLE1BQUYsRUFBVSxFQUFWLENBQWMsYUFBZCxFQUE2QixZQUFNO0FBQ2xDLFVBQUssVUFBTDtBQUNBLElBRkQ7QUFHQTs7OytCQUVZO0FBQ1osUUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixFQUFDLFlBQVksS0FBSyxlQUFMLEtBQXlCLElBQXRDLEVBQWxCO0FBQ0E7OztvQ0FFaUI7O0FBRWpCLFVBQU8sS0FBSyxPQUFMLENBQWEsTUFBYixFQUFQO0FBQ0E7Ozs7OztrQkE1Qm1CLGE7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7O0lBR3FCLHdCO0FBQ3BCOzs7Ozs7QUFNQSxtQ0FB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QyxJQUE4RCxPQUFPLGdCQUExRSxFQUE2RjtBQUM1RixTQUFPLGdCQUFQLENBQXlCLFlBQXpCLEVBQXVDLFlBQVc7QUFDakQsT0FBSSxLQUFLLFNBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBeUIsQ0FBekIsQ0FBVDtBQUFBLE9BQ0MsT0FERDs7QUFHQSxPQUFLLENBQUksZ0JBQWdCLElBQWhCLENBQXNCLEVBQXRCLENBQVQsRUFBd0M7QUFDdkM7QUFDQTs7QUFFRCxhQUFVLFNBQVMsY0FBVCxDQUF5QixFQUF6QixDQUFWOztBQUVBLE9BQUssT0FBTCxFQUFlO0FBQ2QsUUFBSyxDQUFJLHdDQUF3QyxJQUF4QyxDQUE4QyxRQUFRLE9BQXRELENBQVQsRUFBNkU7QUFDNUUsYUFBUSxRQUFSLEdBQW1CLENBQUMsQ0FBcEI7QUFDQTs7QUFFRCxZQUFRLEtBQVI7QUFDQTtBQUNELEdBakJELEVBaUJHLEtBakJIO0FBa0JBO0FBQ0QsQ0F6QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFNwYWNlciB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGVsICkge1xuXHRcdHRoaXMuJGVsID0gJGVsO1xuXHRcdGxldCBoZWFkZXIgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1oZWFkZXInKTtcblx0XHRsZXQgY29udGVudCA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LXNwYWNlcicpO1xuXG5cdFx0dGhpcy4kaGVhZGVyID0gJCggaGVhZGVyICk7XG5cdFx0dGhpcy4kY29udGVudCA9ICQoIGNvbnRlbnQgKTtcblx0XHR0aGlzLm9uKCk7XG5cdH1cblxuXHRvbigpIHtcblx0XHQkKHdpbmRvdykub24oICdsb2FkIHJlc2l6ZScsICgpID0+IHtcblx0XHRcdHRoaXMuc2V0UGFkZGluZygpXG5cdFx0fSApO1xuXHR9XG5cblx0c2V0UGFkZGluZygpIHtcblx0XHR0aGlzLiRjb250ZW50LmNzcyh7cGFkZGluZ1RvcDogdGhpcy5nZXRIZWFkZXJIZWlnaHQoKSArICdweCd9KTtcblx0fVxuXG5cdGdldEhlYWRlckhlaWdodCgpIHtcblxuXHRcdHJldHVybiB0aGlzLiRoZWFkZXIuaGVpZ2h0KCk7XG5cdH1cbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwTGF5b3V0Q2xhc3NDb250cm9sbGVyIHtcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAkZWxcblx0ICogQHBhcmFtIGNsYXNzU3RyaW5nXG5cdCAqIEBwYXJhbSB0aHJlc2hvbGQg44Kv44Op44K544Gu6Kit5a6a44KS44GZ44KL44Gf44KB44Gu44K544Kv44Ot44O844Or5L2N572uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGVsLCBjbGFzc1N0cmluZywgdGhyZXNob2xkICkge1xuXHRcdHRoaXMuY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZztcblx0XHR0aGlzLnRocmVzaG9sZCA9IHRocmVzaG9sZDtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHRsZXQgaGVhZGVyID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtaGVhZGVyJyk7XG5cdFx0bGV0IGNvbnRlbnQgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1zY3JvbGwtYXJlYScpO1xuXHRcdHRoaXMuJGhlYWRlciA9ICQoIGhlYWRlciApO1xuXHRcdGlmICggY29udGVudCAmJiBjb250ZW50ICE9ICd3aW5kb3cnICkge1xuXHRcdFx0dGhpcy4kY29udGVudCA9ICQoIGNvbnRlbnQgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLiRjb250ZW50ID0gJCggd2luZG93ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdFx0dGhpcy5vbigpO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHQvL2ZvciBvdmVycmlkZVxuXHR9XG5cblx0b24oKSB7XG5cdFx0dGhpcy4kY29udGVudC5vbiggJ3Njcm9sbCByZXNpemUnLCBfLnRocm90dGxlKGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLnRvZ2dsZUNsYXNzKCk7XG5cdFx0fSwgMSApLmJpbmQodGhpcykgKTtcblx0fVxuXG5cdHRvZ2dsZUNsYXNzKCkge1xuXHRcdGlmKCB0aGlzLmlzRXhjZWVkc1RocmVzaG9sZCgpICkge1xuXHRcdFx0dGhpcy4kaGVhZGVyLmFkZENsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0VGhyZXNob2xkKCkge1xuXHRcdGlmKCB0eXBlb2YgdGhpcy50aHJlc2hvbGQgID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdHJldHVybiB0aGlzLnRocmVzaG9sZCgpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnRocmVzaG9sZDtcblx0XHR9XG5cdH1cblxuXHRpc0V4Y2VlZHNUaHJlc2hvbGQoKSB7XG5cdFx0bGV0IHNjcm9sbFRvcCA9IHRoaXMuJGNvbnRlbnQuc2Nyb2xsVG9wKCk7XG5cdFx0cmV0dXJuICggc2Nyb2xsVG9wID4gdGhpcy5nZXRUaHJlc2hvbGQoKSApO1xuXG5cdH1cbn1cblxuIiwiaW1wb3J0IEhlYWRlckNsYXNzQ29udHJvbGxlciBmcm9tICcuL0hlYWRlckNsYXNzQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSGVhZGVyQ2xhc3NDb250cm9sbGVyIHtcblxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMuc2Nyb2xsUG9zID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuXHR9XG5cblx0Z2V0U2Nyb2xsUG9zaXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGNvbnRlbnQuc2Nyb2xsVG9wKCk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygpIHtcblx0XHRsZXQgY3VycmVudFBvcyA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcblxuXHRcdGlmKCAhIHRoaXMuaXNFeGNlZWRzVGhyZXNob2xkKCkgKSB7XG5cdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdHRoaXMuJGhlYWRlci5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXHRcdH1cblx0XHRlbHNlIGlmKCBNYXRoLmFicyggY3VycmVudFBvcyAtIHRoaXMuc2Nyb2xsUG9zICkgPiAzMCApIHtcblx0XHRcdGlmICggY3VycmVudFBvcyA+IHRoaXMuc2Nyb2xsUG9zICkge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIuYWRkQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxQb3MgPSBjdXJyZW50UG9zO1xuXHR9XG5cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlciB7XG5cblx0Y29uc3RydWN0b3IoJGVsKSB7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0dGhpcy4kY29udGFpbmVyID0gJCgkZWwuZGF0YShcImRyYXdlci1jb250YWluZXItc2VsZWN0b3JcIikpO1xuXHRcdHRoaXMuaWQgPSAkZWwuYXR0cignaWQnKTtcblx0XHR0aGlzLiRjb250cm9sbGVyID0gJCggJ1thcmlhLWNvbnRyb2xzPVwiJyt0aGlzLmlkKydcIiBdJyApO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyhcImRyYXdlci1jb250YWluZXJcIik7XG5cdFx0dGhpcy5vbigpO1xuXG5cdH1cblxuXHRvbigpIHtcblx0XHR0aGlzLiRjb250cm9sbGVyLm9uKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuJGVsLm9uKCdjbGljaycsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kZWwuY2hpbGRyZW4oKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KVxuXG5cdFx0JChkb2N1bWVudCkub24oJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMuJGVsLm9uKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uZW5kLmJpbmQodGhpcykpO1xuXHR9XG5cblx0dHJhbnNpdGlvbmVuZCgpIHtcblx0XHR0aGlzLiRlbC5yZW1vdmVDbGFzcygnaXMtYW5pbWF0ZWQnKTtcblx0fVxuXG5cdHRvZ2dsZShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKCB0aGlzLiRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT0gXCJmYWxzZVwiICkge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuJGVsLmFkZENsYXNzKCdpcy1hbmltYXRlZCcpO1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwidHJ1ZVwiKTtcblx0XHR0aGlzLiRlbC5hdHRyKCdhcmlhLWhpZGRlbicsXCJmYWxzZVwiKTtcblx0XHR0aGlzLiRjb250cm9sbGVyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwidHJ1ZVwiKTtcblx0XHR0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoXCJpcy1kcmF3ZXItb3BlblwiKTtcblxuXG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLiRlbC5hZGRDbGFzcygnaXMtYW5pbWF0ZWQnKTtcblx0XHR0aGlzLiRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtaGlkZGVuJyxcInRydWVcIik7XG5cdFx0dGhpcy4kY29udHJvbGxlci5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImlzLWRyYXdlci1vcGVuXCIpO1xuXHR9XG5cblx0c3RhdGljIGluaXQoKSB7XG5cdFx0JChcIltkYXRhLWRyYXdlcl1cIikuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0bmV3IERyYXdlcigkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vRHJhd2VyJztcbmltcG9ydCBIZWFkZXJDbGFzc0NvbnRyb2xsZXIgZnJvbSAnLi9BcHBMYXlvdXQvSGVhZGVyQ2xhc3NDb250cm9sbGVyJztcbmltcG9ydCBIZWFkZXJFc2NhcGVyIGZyb20gJy4vQXBwTGF5b3V0L0hlYWRlckVzY2FwZXInO1xuaW1wb3J0IENvbnRlbnRTcGFjZXIgZnJvbSAnLi9BcHBMYXlvdXQvQ29udGVudFNwYWNlcic7XG5pbXBvcnQgJy4vc2tpcC1saW5rLWZvY3VzLWZpeCc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblxuXHQkKFwiW2RhdGEtZHJhd2VyXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0bmV3IERyYXdlcigkKHRoaXMpKTtcblx0fSk7XG5cblx0JChcIi5wcmltYXJ5LW1lbnUgLnN1Yi1tZW51LCAucHJpbWFyeS1tZW51IC5jaGlsZHJlblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQvL3NldCBkZWZhdWx0IGhlaWdodCBmb3IgYW5pbWF0aW9uXG5cdFx0Ly8gbGV0IGhlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XG5cdFx0Ly8gJCh0aGlzKS5oZWlnaHQoIGhlaWdodCApO1xuXG5cdFx0JCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHR9KS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYoICd0cnVlJyA9PSAkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSAgKSB7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcInRydWVcIik7XG5cdFx0fVxuXG5cdH0pLmZpbmQoJ2EnKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH0pXG5cblx0JCgnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4sIC5wYWdlX2l0ZW1faGFzX2NoaWxkcmVuJykuZmluZCgnYScpLmZvY3VzaW4oZnVuY3Rpb24gKCkge1xuXHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLnN1Yi1tZW51LCAuY2hpbGRyZW4nKS5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcInRydWVcIik7XG5cdH0pXG5cblxuXHRsZXQgJGFwcExheW91dCA9ICQoXCIuYXBwLWxheW91dFwiKTtcblx0JCh3aW5kb3cpLm9uKCAnbG9hZCByZXNpemUnLCAoKSA9PiB7XG5cdFx0JGFwcExheW91dC5yZW1vdmVDbGFzcyhcImFwcC1sYXlvdXQtLWRpc2FibGVcIik7XG5cdH0gKTtcblx0bmV3IEhlYWRlckNsYXNzQ29udHJvbGxlciggJGFwcExheW91dCwgXCJhcHAtbGF5b3V0X19oZWFkZXItLWZpeGVkXCIsIDQ2ICk7XG5cdG5ldyBIZWFkZXJFc2NhcGVyKCAkYXBwTGF5b3V0LCBcImFwcC1sYXlvdXRfX2hlYWRlci0tZXNjYXBlXCIsIDE1MCApO1xuXHRuZXcgQ29udGVudFNwYWNlciggJGFwcExheW91dCApO1xuXG5cblxufSk7XG4iLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlzV2Via2l0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICd3ZWJraXQnICkgPiAtMSxcblx0XHRpc09wZXJhICA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnb3BlcmEnICkgID4gLTEsXG5cdFx0aXNJZSAgICAgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ21zaWUnICkgICA+IC0xO1xuXG5cdGlmICggKCBpc1dlYmtpdCB8fCBpc09wZXJhIHx8IGlzSWUgKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKCAxICksXG5cdFx0XHRcdGVsZW1lbnQ7XG5cblx0XHRcdGlmICggISAoIC9eW0EtejAtOV8tXSskLy50ZXN0KCBpZCApICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRpZiAoIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGlmICggISAoIC9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KCBlbGVtZW50LnRhZ05hbWUgKSApICkge1xuXHRcdFx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAtMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSApO1xuXHR9XG59KSgpO1xuIl19

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
		this.$controller = (0, _jquery2.default)('[aria-controls="#' + this.id + '" ]');
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
			this.$el.attr('aria-expanded', "true");
			this.$el.attr('aria-hidden', "false");
			this.$controller.attr('aria-expanded', "true");
			this.$container.addClass("is-drawer-open");
		}
	}, {
		key: 'close',
		value: function close() {
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

	(0, _jquery2.default)('.menu-item-has-children').find('a').focusin(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvQ29udGVudFNwYWNlci5qcyIsImFzc2V0cy9zY3JpcHRzL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlci5qcyIsImFzc2V0cy9zY3JpcHRzL0RyYXdlci5qcyIsImFzc2V0cy9zY3JpcHRzL2J1bmRsZS5qcyIsImFzc2V0cy9zY3JpcHRzL3NraXAtbGluay1mb2N1cy1maXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFcUIsYTtBQUNwQjs7OztBQUlBLHdCQUFhLEdBQWIsRUFBbUI7QUFBQTs7QUFDbEIsT0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLE1BQUksU0FBUyxJQUFJLElBQUosQ0FBUyxtQkFBVCxDQUFiO0FBQ0EsTUFBSSxVQUFVLElBQUksSUFBSixDQUFTLG1CQUFULENBQWQ7O0FBRUEsT0FBSyxPQUFMLEdBQWUsc0JBQUcsTUFBSCxDQUFmO0FBQ0EsT0FBSyxRQUFMLEdBQWdCLHNCQUFHLE9BQUgsQ0FBaEI7QUFDQSxPQUFLLEVBQUw7QUFDQTs7Ozt1QkFFSTtBQUFBOztBQUNKLHlCQUFFLE1BQUYsRUFBVSxFQUFWLENBQWMsYUFBZCxFQUE2QixZQUFNO0FBQ2xDLFVBQUssVUFBTDtBQUNBLElBRkQ7QUFHQTs7OytCQUVZO0FBQ1osUUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixFQUFDLFlBQVksS0FBSyxlQUFMLEtBQXlCLElBQXRDLEVBQWxCO0FBQ0E7OztvQ0FFaUI7O0FBRWpCLFVBQU8sS0FBSyxPQUFMLENBQWEsTUFBYixFQUFQO0FBQ0E7Ozs7OztrQkE1Qm1CLGE7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7O0lBR3FCLHdCO0FBQ3BCOzs7Ozs7QUFNQSxtQ0FB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QVUsU0FBUyxjQUFULENBQXlCLEVBQXpCLENBQVY7O0FBRUEsT0FBSyxPQUFMLEVBQWU7QUFDZCxRQUFLLENBQUksd0NBQXdDLElBQXhDLENBQThDLFFBQVEsT0FBdEQsQ0FBVCxFQUE2RTtBQUM1RSxhQUFRLFFBQVIsR0FBbUIsQ0FBQyxDQUFwQjtBQUNBOztBQUVELFlBQVEsS0FBUjtBQUNBO0FBQ0QsR0FqQkQsRUFpQkcsS0FqQkg7QUFrQkE7QUFDRCxDQXpCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50U3BhY2VyIHtcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkZWwgKSB7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0bGV0IGhlYWRlciA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LWhlYWRlcicpO1xuXHRcdGxldCBjb250ZW50ID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtc3BhY2VyJyk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKCBoZWFkZXIgKTtcblx0XHR0aGlzLiRjb250ZW50ID0gJCggY29udGVudCApO1xuXHRcdHRoaXMub24oKTtcblx0fVxuXG5cdG9uKCkge1xuXHRcdCQod2luZG93KS5vbiggJ2xvYWQgcmVzaXplJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRQYWRkaW5nKClcblx0XHR9ICk7XG5cdH1cblxuXHRzZXRQYWRkaW5nKCkge1xuXHRcdHRoaXMuJGNvbnRlbnQuY3NzKHtwYWRkaW5nVG9wOiB0aGlzLmdldEhlYWRlckhlaWdodCgpICsgJ3B4J30pO1xuXHR9XG5cblx0Z2V0SGVhZGVySGVpZ2h0KCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5oZWlnaHQoKTtcblx0fVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBMYXlvdXRDbGFzc0NvbnRyb2xsZXIge1xuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRlbFxuXHQgKiBAcGFyYW0gY2xhc3NTdHJpbmdcblx0ICogQHBhcmFtIHRocmVzaG9sZCDjgq/jg6njgrnjga7oqK3lrprjgpLjgZnjgovjgZ/jgoHjga7jgrnjgq/jg63jg7zjg6vkvY3nva5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkZWwsIGNsYXNzU3RyaW5nLCB0aHJlc2hvbGQgKSB7XG5cdFx0dGhpcy5jbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nO1xuXHRcdHRoaXMudGhyZXNob2xkID0gdGhyZXNob2xkO1xuXHRcdHRoaXMuJGVsID0gJGVsO1xuXHRcdGxldCBoZWFkZXIgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1oZWFkZXInKTtcblx0XHRsZXQgY29udGVudCA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LXNjcm9sbC1hcmVhJyk7XG5cdFx0dGhpcy4kaGVhZGVyID0gJCggaGVhZGVyICk7XG5cdFx0aWYgKCBjb250ZW50ICYmIGNvbnRlbnQgIT0gJ3dpbmRvdycgKSB7XG5cdFx0XHR0aGlzLiRjb250ZW50ID0gJCggY29udGVudCApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuJGNvbnRlbnQgPSAkKCB3aW5kb3cgKTtcblx0XHR9XG5cblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0XHR0aGlzLm9uKCk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdC8vZm9yIG92ZXJyaWRlXG5cdH1cblxuXHRvbigpIHtcblx0XHR0aGlzLiRjb250ZW50Lm9uKCAnc2Nyb2xsIHJlc2l6ZScsIF8udGhyb3R0bGUoZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMudG9nZ2xlQ2xhc3MoKTtcblx0XHR9LCAxICkuYmluZCh0aGlzKSApO1xuXHR9XG5cblx0dG9nZ2xlQ2xhc3MoKSB7XG5cdFx0aWYoIHRoaXMuaXNFeGNlZWRzVGhyZXNob2xkKCkgKSB7XG5cdFx0XHR0aGlzLiRoZWFkZXIuYWRkQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHR9XG5cdH1cblxuXHRnZXRUaHJlc2hvbGQoKSB7XG5cdFx0aWYoIHR5cGVvZiB0aGlzLnRocmVzaG9sZCAgPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhyZXNob2xkKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhyZXNob2xkO1xuXHRcdH1cblx0fVxuXG5cdGlzRXhjZWVkc1RocmVzaG9sZCgpIHtcblx0XHRsZXQgc2Nyb2xsVG9wID0gdGhpcy4kY29udGVudC5zY3JvbGxUb3AoKTtcblx0XHRyZXR1cm4gKCBzY3JvbGxUb3AgPiB0aGlzLmdldFRocmVzaG9sZCgpICk7XG5cblx0fVxufVxuXG4iLCJpbXBvcnQgSGVhZGVyQ2xhc3NDb250cm9sbGVyIGZyb20gJy4vSGVhZGVyQ2xhc3NDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBIZWFkZXJDbGFzc0NvbnRyb2xsZXIge1xuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0dGhpcy5zY3JvbGxQb3MgPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG5cdH1cblxuXHRnZXRTY3JvbGxQb3NpdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy4kY29udGVudC5zY3JvbGxUb3AoKTtcblx0fVxuXG5cdHRvZ2dsZUNsYXNzKCkge1xuXHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuXG5cdFx0aWYoICEgdGhpcy5pc0V4Y2VlZHNUaHJlc2hvbGQoKSApIHtcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYoIE1hdGguYWJzKCBjdXJyZW50UG9zIC0gdGhpcy5zY3JvbGxQb3MgKSA+IDMwICkge1xuXHRcdFx0aWYgKCBjdXJyZW50UG9zID4gdGhpcy5zY3JvbGxQb3MgKSB7XG5cdFx0XHRcdHRoaXMuJGhlYWRlci5hZGRDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFBvcyA9IGN1cnJlbnRQb3M7XG5cdH1cblxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2VyIHtcblxuXHRjb25zdHJ1Y3RvcigkZWwpIHtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHR0aGlzLiRjb250YWluZXIgPSAkKCRlbC5kYXRhKFwiZHJhd2VyLWNvbnRhaW5lci1zZWxlY3RvclwiKSk7XG5cdFx0dGhpcy5pZCA9ICRlbC5hdHRyKCdpZCcpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIgPSAkKCAnW2FyaWEtY29udHJvbHM9XCIjJyt0aGlzLmlkKydcIiBdJyApO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyhcImRyYXdlci1jb250YWluZXJcIik7XG5cdFx0dGhpcy5vbigpO1xuXG5cdH1cblxuXHRvbigpIHtcblx0XHR0aGlzLiRjb250cm9sbGVyLm9uKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy4kZWwub24oJ2NsaWNrJywgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLiRlbC5jaGlsZHJlbigpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pXG5cblx0XHQkKGRvY3VtZW50KS5vbigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5rZXlDb2RlID09IDI3KSB7XG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0dG9nZ2xlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoIHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PSBcImZhbHNlXCIgKSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kZWwuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtaGlkZGVuJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyhcImlzLWRyYXdlci1vcGVuXCIpO1xuXG5cblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0dGhpcy4kZWwuYXR0cignYXJpYS1oaWRkZW4nLFwidHJ1ZVwiKTtcblx0XHR0aGlzLiRjb250cm9sbGVyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0dGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiaXMtZHJhd2VyLW9wZW5cIik7XG5cdH1cblxuXHRzdGF0aWMgaW5pdCgpIHtcblx0XHQkKFwiW2RhdGEtZHJhd2VyXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRuZXcgRHJhd2VyKCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi9EcmF3ZXInO1xuaW1wb3J0IEhlYWRlckNsYXNzQ29udHJvbGxlciBmcm9tICcuL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXInO1xuaW1wb3J0IEhlYWRlckVzY2FwZXIgZnJvbSAnLi9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlcic7XG5pbXBvcnQgQ29udGVudFNwYWNlciBmcm9tICcuL0FwcExheW91dC9Db250ZW50U3BhY2VyJztcbmltcG9ydCAnLi9za2lwLWxpbmstZm9jdXMtZml4JztcblxuJChmdW5jdGlvbigpIHtcblxuXG5cdCQoXCJbZGF0YS1kcmF3ZXJdXCIpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRuZXcgRHJhd2VyKCQodGhpcykpO1xuXHR9KTtcblxuXHQkKFwiLnByaW1hcnktbWVudSAuc3ViLW1lbnUsIC5wcmltYXJ5LW1lbnUgLmNoaWxkcmVuXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdC8vc2V0IGRlZmF1bHQgaGVpZ2h0IGZvciBhbmltYXRpb25cblx0XHQvLyBsZXQgaGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcblx0XHQvLyAkKHRoaXMpLmhlaWdodCggaGVpZ2h0ICk7XG5cblx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdH0pLm9uKCAnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiggJ3RydWUnID09ICQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcpICApIHtcblx0XHRcdCQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcsXCJmYWxzZVwiKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwidHJ1ZVwiKTtcblx0XHR9XG5cblx0fSkuZmluZCgnYScpLm9uKCAnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fSlcblxuXHQkKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicpLmZpbmQoJ2EnKS5mb2N1c2luKGZ1bmN0aW9uICgpIHtcblx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5zdWItbWVudSwgLmNoaWxkcmVuJykuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHR9KVxuXG5cdGxldCAkYXBwTGF5b3V0ID0gJChcIi5hcHAtbGF5b3V0XCIpO1xuXHQkKHdpbmRvdykub24oICdsb2FkIHJlc2l6ZScsICgpID0+IHtcblx0XHQkYXBwTGF5b3V0LnJlbW92ZUNsYXNzKFwiYXBwLWxheW91dC0tZGlzYWJsZVwiKTtcblx0fSApO1xuXHRuZXcgSGVhZGVyQ2xhc3NDb250cm9sbGVyKCAkYXBwTGF5b3V0LCBcImFwcC1sYXlvdXRfX2hlYWRlci0tZml4ZWRcIiwgNDYgKTtcblx0bmV3IEhlYWRlckVzY2FwZXIoICRhcHBMYXlvdXQsIFwiYXBwLWxheW91dF9faGVhZGVyLS1lc2NhcGVcIiwgMTUwICk7XG5cdG5ldyBDb250ZW50U3BhY2VyKCAkYXBwTGF5b3V0ICk7XG5cblxuXG59KTtcbiIsIi8qKlxuICogRmlsZSBza2lwLWxpbmstZm9jdXMtZml4LmpzLlxuICpcbiAqIEhlbHBzIHdpdGggYWNjZXNzaWJpbGl0eSBmb3Iga2V5Ym9hcmQgb25seSB1c2Vycy5cbiAqXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxuICovXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNXZWJraXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ3dlYmtpdCcgKSA+IC0xLFxuXHRcdGlzT3BlcmEgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdvcGVyYScgKSAgPiAtMSxcblx0XHRpc0llICAgICA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnbXNpZScgKSAgID4gLTE7XG5cblx0aWYgKCAoIGlzV2Via2l0IHx8IGlzT3BlcmEgfHwgaXNJZSApICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoIDEgKSxcblx0XHRcdFx0ZWxlbWVudDtcblxuXHRcdFx0aWYgKCAhICggL15bQS16MC05Xy1dKyQvLnRlc3QoIGlkICkgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdGlmICggZWxlbWVudCApIHtcblx0XHRcdFx0aWYgKCAhICggL14oPzphfHNlbGVjdHxpbnB1dHxidXR0b258dGV4dGFyZWEpJC9pLnRlc3QoIGVsZW1lbnQudGFnTmFtZSApICkgKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC50YWJJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxlbWVudC5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlICk7XG5cdH1cbn0pKCk7XG4iXX0=

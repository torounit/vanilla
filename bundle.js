(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
			}, 300).bind(this));
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
			this.$controller.on('click', this.toggle.bind(this));

			this.$el.on('click', this.close.bind(this));
			this.$el.children().on('click', function (event) {
				event.stopPropagation();
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
			this.$controller.attr('aria-expanded', "true");
			this.$container.addClass("is-drawer-open");
		}
	}, {
		key: 'close',
		value: function close() {
			this.$el.attr('aria-expanded', "false");
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

	(0, _jquery2.default)("[data-page-top]").click(function () {
		var speed;
		speed = 800;
		(0, _jquery2.default)("html, body").animate({
			scrollTop: 0
		}, speed, "easeOutExpo");
		return false;
	});

	(0, _jquery2.default)(".sub-menu,.children").each(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvQ29udGVudFNwYWNlci5qcyIsImFzc2V0cy9zY3JpcHRzL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlci5qcyIsImFzc2V0cy9zY3JpcHRzL0RyYXdlci5qcyIsImFzc2V0cy9zY3JpcHRzL2FsbC5qcyIsImFzc2V0cy9zY3JpcHRzL3NraXAtbGluay1mb2N1cy1maXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7OztJQUdxQixhO0FBQ3BCOzs7O0FBSUEsd0JBQWEsR0FBYixFQUFtQjtBQUFBOztBQUNsQixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsTUFBSSxTQUFTLElBQUksSUFBSixDQUFTLG1CQUFULENBQWI7QUFDQSxNQUFJLFVBQVUsSUFBSSxJQUFKLENBQVMsbUJBQVQsQ0FBZDs7QUFFQSxPQUFLLE9BQUwsR0FBZSxzQkFBRyxNQUFILENBQWY7QUFDQSxPQUFLLFFBQUwsR0FBZ0Isc0JBQUcsT0FBSCxDQUFoQjtBQUNBLE9BQUssRUFBTDtBQUNBOzs7O3VCQUVJO0FBQUE7O0FBQ0oseUJBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYyxhQUFkLEVBQTZCLFlBQU07QUFDbEMsVUFBSyxVQUFMO0FBQ0EsSUFGRDtBQUdBOzs7K0JBRVk7QUFDWixRQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEVBQUMsWUFBWSxLQUFLLGVBQUwsS0FBeUIsSUFBdEMsRUFBbEI7QUFDQTs7O29DQUVpQjs7QUFFakIsVUFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQVA7QUFDQTs7Ozs7O2tCQTVCbUIsYTs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7SUFHcUIsd0I7QUFDcEI7Ozs7OztBQU1B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QUFDQSw2QkFBbUIsVUFBbkIsRUFBK0IsNEJBQS9CLEVBQTZELEdBQTdEO0FBQ0EsNkJBQW1CLFVBQW5CO0FBSUEsQ0E1Q0Q7Ozs7Ozs7QUNWQTs7Ozs7OztBQU9BLENBQUUsWUFBVztBQUNaLEtBQUksV0FBVyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMkMsUUFBM0MsSUFBd0QsQ0FBQyxDQUF4RTtBQUFBLEtBQ0MsVUFBVyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMkMsT0FBM0MsSUFBd0QsQ0FBQyxDQURyRTtBQUFBLEtBRUMsT0FBVyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMkMsTUFBM0MsSUFBd0QsQ0FBQyxDQUZyRTs7QUFJQSxLQUFLLENBQUUsWUFBWSxPQUFaLElBQXVCLElBQXpCLEtBQW1DLFNBQVMsY0FBNUMsSUFBOEQsT0FBTyxnQkFBMUUsRUFBNkY7QUFDNUYsU0FBTyxnQkFBUCxDQUF5QixZQUF6QixFQUF1QyxZQUFXO0FBQ2pELE9BQUksS0FBSyxTQUFTLElBQVQsQ0FBYyxTQUFkLENBQXlCLENBQXpCLENBQVQ7QUFBQSxPQUNDLE9BREQ7O0FBR0EsT0FBSyxDQUFJLGdCQUFnQixJQUFoQixDQUFzQixFQUF0QixDQUFULEVBQXdDO0FBQ3ZDO0FBQ0E7O0FBRUQsYUFBVSxTQUFTLGNBQVQsQ0FBeUIsRUFBekIsQ0FBVjs7QUFFQSxPQUFLLE9BQUwsRUFBZTtBQUNkLFFBQUssQ0FBSSx3Q0FBd0MsSUFBeEMsQ0FBOEMsUUFBUSxPQUF0RCxDQUFULEVBQTZFO0FBQzVFLGFBQVEsUUFBUixHQUFtQixDQUFDLENBQXBCO0FBQ0E7O0FBRUQsWUFBUSxLQUFSO0FBQ0E7QUFDRCxHQWpCRCxFQWlCRyxLQWpCSDtBQWtCQTtBQUNELENBekJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50U3BhY2VyIHtcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkZWwgKSB7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0bGV0IGhlYWRlciA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LWhlYWRlcicpO1xuXHRcdGxldCBjb250ZW50ID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtc3BhY2VyJyk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKCBoZWFkZXIgKTtcblx0XHR0aGlzLiRjb250ZW50ID0gJCggY29udGVudCApO1xuXHRcdHRoaXMub24oKTtcblx0fVxuXG5cdG9uKCkge1xuXHRcdCQod2luZG93KS5vbiggJ2xvYWQgcmVzaXplJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRQYWRkaW5nKClcblx0XHR9ICk7XG5cdH1cblxuXHRzZXRQYWRkaW5nKCkge1xuXHRcdHRoaXMuJGNvbnRlbnQuY3NzKHtwYWRkaW5nVG9wOiB0aGlzLmdldEhlYWRlckhlaWdodCgpICsgJ3B4J30pO1xuXHR9XG5cblx0Z2V0SGVhZGVySGVpZ2h0KCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5oZWlnaHQoKTtcblx0fVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBMYXlvdXRDbGFzc0NvbnRyb2xsZXIge1xuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRlbFxuXHQgKiBAcGFyYW0gY2xhc3NTdHJpbmdcblx0ICogQHBhcmFtIHRocmVzaG9sZCDjgq/jg6njgrnjga7oqK3lrprjgpLjgZnjgovjgZ/jgoHjga7jgrnjgq/jg63jg7zjg6vkvY3nva5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkZWwsIGNsYXNzU3RyaW5nLCB0aHJlc2hvbGQgKSB7XG5cdFx0dGhpcy5jbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nO1xuXHRcdHRoaXMudGhyZXNob2xkID0gdGhyZXNob2xkO1xuXHRcdHRoaXMuJGVsID0gJGVsO1xuXHRcdGxldCBoZWFkZXIgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1oZWFkZXInKTtcblx0XHRsZXQgY29udGVudCA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LXNjcm9sbC1hcmVhJyk7XG5cdFx0dGhpcy4kaGVhZGVyID0gJCggaGVhZGVyICk7XG5cdFx0aWYgKCBjb250ZW50ICYmIGNvbnRlbnQgIT0gJ3dpbmRvdycgKSB7XG5cdFx0XHR0aGlzLiRjb250ZW50ID0gJCggY29udGVudCApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuJGNvbnRlbnQgPSAkKCB3aW5kb3cgKTtcblx0XHR9XG5cblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0XHR0aGlzLm9uKCk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdC8vZm9yIG92ZXJyaWRlXG5cdH1cblxuXHRvbigpIHtcblx0XHR0aGlzLiRjb250ZW50Lm9uKCAnc2Nyb2xsIHJlc2l6ZScsIF8udGhyb3R0bGUoZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMudG9nZ2xlQ2xhc3MoKTtcblx0XHR9LCAzMDAgKS5iaW5kKHRoaXMpICk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygpIHtcblx0XHRpZiggdGhpcy5pc0V4Y2VlZHNUaHJlc2hvbGQoKSApIHtcblx0XHRcdHRoaXMuJGhlYWRlci5hZGRDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdH1cblx0fVxuXG5cdGdldFRocmVzaG9sZCgpIHtcblx0XHRpZiggdHlwZW9mIHRoaXMudGhyZXNob2xkICA9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aHJlc2hvbGQoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aHJlc2hvbGQ7XG5cdFx0fVxuXHR9XG5cblx0aXNFeGNlZWRzVGhyZXNob2xkKCkge1xuXHRcdGxldCBzY3JvbGxUb3AgPSB0aGlzLiRjb250ZW50LnNjcm9sbFRvcCgpO1xuXHRcdHJldHVybiAoIHNjcm9sbFRvcCA+IHRoaXMuZ2V0VGhyZXNob2xkKCkgKTtcblxuXHR9XG59XG5cbiIsIlxuaW1wb3J0IEhlYWRlckNsYXNzQ29udHJvbGxlciBmcm9tICcuL0hlYWRlckNsYXNzQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSGVhZGVyQ2xhc3NDb250cm9sbGVyIHtcblxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMuc2Nyb2xsUG9zID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuXHR9XG5cblx0Z2V0U2Nyb2xsUG9zaXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGNvbnRlbnQuc2Nyb2xsVG9wKCk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygpIHtcblx0XHRsZXQgY3VycmVudFBvcyA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcblxuXHRcdGlmKCAhIHRoaXMuaXNFeGNlZWRzVGhyZXNob2xkKCkgKSB7XG5cdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdHRoaXMuJGhlYWRlci5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXHRcdH1cblx0XHRlbHNlIGlmKCBNYXRoLmFicyggY3VycmVudFBvcyAtIHRoaXMuc2Nyb2xsUG9zICkgPiAzMCApIHtcblx0XHRcdGlmICggY3VycmVudFBvcyA+IHRoaXMuc2Nyb2xsUG9zICkge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIuYWRkQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxQb3MgPSBjdXJyZW50UG9zO1xuXHR9XG5cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlciB7XG5cblx0Y29uc3RydWN0b3IoJGVsKSB7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0dGhpcy4kY29udGFpbmVyID0gJCgkZWwuZGF0YShcImRyYXdlci1jb250YWluZXItc2VsZWN0b3JcIikpO1xuXHRcdHRoaXMuaWQgPSAkZWwuYXR0cignaWQnKTtcblx0XHR0aGlzLiRjb250cm9sbGVyID0gJCggJ1thcmlhLWNvbnRyb2xzPVwiIycrdGhpcy5pZCsnXCIgXScgKTtcblx0XHR0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoXCJkcmF3ZXItY29udGFpbmVyXCIpO1xuXHRcdHRoaXMub24oKTtcblxuXHR9XG5cblx0b24oKSB7XG5cdFx0dGhpcy4kY29udHJvbGxlci5vbignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMuJGVsLm9uKCdjbGljaycsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kZWwuY2hpbGRyZW4oKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KVxuXHR9XG5cblx0dG9nZ2xlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoIHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PSBcImZhbHNlXCIgKSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kZWwuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyhcImlzLWRyYXdlci1vcGVuXCIpO1xuXG5cblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0dGhpcy4kY29udHJvbGxlci5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImlzLWRyYXdlci1vcGVuXCIpO1xuXHR9XG5cblx0c3RhdGljIGluaXQoKSB7XG5cdFx0JChcIltkYXRhLWRyYXdlcl1cIikuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0bmV3IERyYXdlcigkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxufSIsIlxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vRHJhd2VyJztcbmltcG9ydCBIZWFkZXJDbGFzc0NvbnRyb2xsZXIgZnJvbSAnLi9BcHBMYXlvdXQvSGVhZGVyQ2xhc3NDb250cm9sbGVyJztcbmltcG9ydCBIZWFkZXJFc2NhcGVyIGZyb20gJy4vQXBwTGF5b3V0L0hlYWRlckVzY2FwZXInO1xuaW1wb3J0IENvbnRlbnRTcGFjZXIgZnJvbSAnLi9BcHBMYXlvdXQvQ29udGVudFNwYWNlcic7XG5pbXBvcnQgJy4vc2tpcC1saW5rLWZvY3VzLWZpeCc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblxuXHQkKFwiW2RhdGEtZHJhd2VyXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0bmV3IERyYXdlcigkKHRoaXMpKTtcblx0fSk7XG5cblx0JChcIltkYXRhLXBhZ2UtdG9wXVwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHR2YXIgc3BlZWQ7XG5cdFx0c3BlZWQgPSA4MDA7XG5cdFx0JChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG5cdFx0XHRzY3JvbGxUb3A6IDBcblx0XHR9LCBzcGVlZCwgXCJlYXNlT3V0RXhwb1wiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdCQoXCIuc3ViLW1lbnUsLmNoaWxkcmVuXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdC8vc2V0IGRlZmF1bHQgaGVpZ2h0IGZvciBhbmltYXRpb25cblx0XHQvLyBsZXQgaGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcblx0XHQvLyAkKHRoaXMpLmhlaWdodCggaGVpZ2h0ICk7XG5cblx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdH0pLm9uKCAnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiggJ3RydWUnID09ICQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcpICApIHtcblx0XHRcdCQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcsXCJmYWxzZVwiKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwidHJ1ZVwiKTtcblx0XHR9XG5cblx0fSk7XG5cblxuXHRsZXQgJGFwcExheW91dCA9ICQoXCIuYXBwLWxheW91dFwiKTtcblx0JCh3aW5kb3cpLm9uKCAnbG9hZCByZXNpemUnLCAoKSA9PiB7XG5cdFx0JGFwcExheW91dC5yZW1vdmVDbGFzcyhcImFwcC1sYXlvdXQtLWRpc2FibGVcIik7XG5cdH0gKTtcblx0bmV3IEhlYWRlckNsYXNzQ29udHJvbGxlciggJGFwcExheW91dCwgXCJhcHAtbGF5b3V0X19oZWFkZXItLWZpeGVkXCIsIDQ2ICk7XG5cdG5ldyBIZWFkZXJFc2NhcGVyKCAkYXBwTGF5b3V0LCBcImFwcC1sYXlvdXRfX2hlYWRlci0tZXNjYXBlXCIsIDE1MCApO1xuXHRuZXcgQ29udGVudFNwYWNlciggJGFwcExheW91dCApO1xuXG5cblxufSk7XG4iLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlzV2Via2l0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICd3ZWJraXQnICkgPiAtMSxcblx0XHRpc09wZXJhICA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnb3BlcmEnICkgID4gLTEsXG5cdFx0aXNJZSAgICAgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ21zaWUnICkgICA+IC0xO1xuXG5cdGlmICggKCBpc1dlYmtpdCB8fCBpc09wZXJhIHx8IGlzSWUgKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKCAxICksXG5cdFx0XHRcdGVsZW1lbnQ7XG5cblx0XHRcdGlmICggISAoIC9eW0EtejAtOV8tXSskLy50ZXN0KCBpZCApICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRpZiAoIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGlmICggISAoIC9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KCBlbGVtZW50LnRhZ05hbWUgKSApICkge1xuXHRcdFx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAtMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSApO1xuXHR9XG59KSgpO1xuIl19

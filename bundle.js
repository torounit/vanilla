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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvQ29udGVudFNwYWNlci5qcyIsImFzc2V0cy9zY3JpcHRzL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlci5qcyIsImFzc2V0cy9zY3JpcHRzL0RyYXdlci5qcyIsImFzc2V0cy9zY3JpcHRzL2FsbC5qcyIsImFzc2V0cy9zY3JpcHRzL3NraXAtbGluay1mb2N1cy1maXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7OztJQUdxQixhO0FBQ3BCOzs7O0FBSUEsd0JBQWEsR0FBYixFQUFtQjtBQUFBOztBQUNsQixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsTUFBSSxTQUFTLElBQUksSUFBSixDQUFTLG1CQUFULENBQWI7QUFDQSxNQUFJLFVBQVUsSUFBSSxJQUFKLENBQVMsbUJBQVQsQ0FBZDs7QUFFQSxPQUFLLE9BQUwsR0FBZSxzQkFBRyxNQUFILENBQWY7QUFDQSxPQUFLLFFBQUwsR0FBZ0Isc0JBQUcsT0FBSCxDQUFoQjtBQUNBLE9BQUssRUFBTDtBQUNBOzs7O3VCQUVJO0FBQUE7O0FBQ0oseUJBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYyxhQUFkLEVBQTZCLFlBQU07QUFDbEMsVUFBSyxVQUFMO0FBQ0EsSUFGRDtBQUdBOzs7K0JBRVk7QUFDWixRQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEVBQUMsWUFBWSxLQUFLLGVBQUwsS0FBeUIsSUFBdEMsRUFBbEI7QUFDQTs7O29DQUVpQjs7QUFFakIsVUFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQVA7QUFDQTs7Ozs7O2tCQTVCbUIsYTs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7SUFHcUIsd0I7QUFDcEI7Ozs7OztBQU1B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QUMsQ0FBeEU7QUFBQSxLQUNDLFVBQVcsVUFBVSxTQUFWLENBQW9CLFdBQXBCLEdBQWtDLE9BQWxDLENBQTJDLE9BQTNDLElBQXdELENBQUMsQ0FEckU7QUFBQSxLQUVDLE9BQVcsVUFBVSxTQUFWLENBQW9CLFdBQXBCLEdBQWtDLE9BQWxDLENBQTJDLE1BQTNDLElBQXdELENBQUMsQ0FGckU7O0FBSUEsS0FBSyxDQUFFLFlBQVksT0FBWixJQUF1QixJQUF6QixLQUFtQyxTQUFTLGNBQTVDLElBQThELE9BQU8sZ0JBQTFFLEVBQTZGO0FBQzVGLFNBQU8sZ0JBQVAsQ0FBeUIsWUFBekIsRUFBdUMsWUFBVztBQUNqRCxPQUFJLEtBQUssU0FBUyxJQUFULENBQWMsU0FBZCxDQUF5QixDQUF6QixDQUFUO0FBQUEsT0FDQyxPQUREOztBQUdBLE9BQUssQ0FBSSxnQkFBZ0IsSUFBaEIsQ0FBc0IsRUFBdEIsQ0FBVCxFQUF3QztBQUN2QztBQUNBOztBQUVELGFBQVUsU0FBUyxjQUFULENBQXlCLEVBQXpCLENBQVY7O0FBRUEsT0FBSyxPQUFMLEVBQWU7QUFDZCxRQUFLLENBQUksd0NBQXdDLElBQXhDLENBQThDLFFBQVEsT0FBdEQsQ0FBVCxFQUE2RTtBQUM1RSxhQUFRLFFBQVIsR0FBbUIsQ0FBQyxDQUFwQjtBQUNBOztBQUVELFlBQVEsS0FBUjtBQUNBO0FBQ0QsR0FqQkQsRUFpQkcsS0FqQkg7QUFrQkE7QUFDRCxDQXpCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFNwYWNlciB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGVsICkge1xuXHRcdHRoaXMuJGVsID0gJGVsO1xuXHRcdGxldCBoZWFkZXIgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1oZWFkZXInKTtcblx0XHRsZXQgY29udGVudCA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LXNwYWNlcicpO1xuXG5cdFx0dGhpcy4kaGVhZGVyID0gJCggaGVhZGVyICk7XG5cdFx0dGhpcy4kY29udGVudCA9ICQoIGNvbnRlbnQgKTtcblx0XHR0aGlzLm9uKCk7XG5cdH1cblxuXHRvbigpIHtcblx0XHQkKHdpbmRvdykub24oICdsb2FkIHJlc2l6ZScsICgpID0+IHtcblx0XHRcdHRoaXMuc2V0UGFkZGluZygpXG5cdFx0fSApO1xuXHR9XG5cblx0c2V0UGFkZGluZygpIHtcblx0XHR0aGlzLiRjb250ZW50LmNzcyh7cGFkZGluZ1RvcDogdGhpcy5nZXRIZWFkZXJIZWlnaHQoKSArICdweCd9KTtcblx0fVxuXG5cdGdldEhlYWRlckhlaWdodCgpIHtcblxuXHRcdHJldHVybiB0aGlzLiRoZWFkZXIuaGVpZ2h0KCk7XG5cdH1cbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwTGF5b3V0Q2xhc3NDb250cm9sbGVyIHtcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAkZWxcblx0ICogQHBhcmFtIGNsYXNzU3RyaW5nXG5cdCAqIEBwYXJhbSB0aHJlc2hvbGQg44Kv44Op44K544Gu6Kit5a6a44KS44GZ44KL44Gf44KB44Gu44K544Kv44Ot44O844Or5L2N572uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGVsLCBjbGFzc1N0cmluZywgdGhyZXNob2xkICkge1xuXHRcdHRoaXMuY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZztcblx0XHR0aGlzLnRocmVzaG9sZCA9IHRocmVzaG9sZDtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHRsZXQgaGVhZGVyID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtaGVhZGVyJyk7XG5cdFx0bGV0IGNvbnRlbnQgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1zY3JvbGwtYXJlYScpO1xuXHRcdHRoaXMuJGhlYWRlciA9ICQoIGhlYWRlciApO1xuXHRcdGlmICggY29udGVudCAmJiBjb250ZW50ICE9ICd3aW5kb3cnICkge1xuXHRcdFx0dGhpcy4kY29udGVudCA9ICQoIGNvbnRlbnQgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLiRjb250ZW50ID0gJCggd2luZG93ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdFx0dGhpcy5vbigpO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHQvL2ZvciBvdmVycmlkZVxuXHR9XG5cblx0b24oKSB7XG5cdFx0dGhpcy4kY29udGVudC5vbiggJ3Njcm9sbCByZXNpemUnLCBfLnRocm90dGxlKGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLnRvZ2dsZUNsYXNzKCk7XG5cdFx0fSwgMSApLmJpbmQodGhpcykgKTtcblx0fVxuXG5cdHRvZ2dsZUNsYXNzKCkge1xuXHRcdGlmKCB0aGlzLmlzRXhjZWVkc1RocmVzaG9sZCgpICkge1xuXHRcdFx0dGhpcy4kaGVhZGVyLmFkZENsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0VGhyZXNob2xkKCkge1xuXHRcdGlmKCB0eXBlb2YgdGhpcy50aHJlc2hvbGQgID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdHJldHVybiB0aGlzLnRocmVzaG9sZCgpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnRocmVzaG9sZDtcblx0XHR9XG5cdH1cblxuXHRpc0V4Y2VlZHNUaHJlc2hvbGQoKSB7XG5cdFx0bGV0IHNjcm9sbFRvcCA9IHRoaXMuJGNvbnRlbnQuc2Nyb2xsVG9wKCk7XG5cdFx0cmV0dXJuICggc2Nyb2xsVG9wID4gdGhpcy5nZXRUaHJlc2hvbGQoKSApO1xuXG5cdH1cbn1cblxuIiwiXG5pbXBvcnQgSGVhZGVyQ2xhc3NDb250cm9sbGVyIGZyb20gJy4vSGVhZGVyQ2xhc3NDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBIZWFkZXJDbGFzc0NvbnRyb2xsZXIge1xuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0dGhpcy5zY3JvbGxQb3MgPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG5cdH1cblxuXHRnZXRTY3JvbGxQb3NpdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy4kY29udGVudC5zY3JvbGxUb3AoKTtcblx0fVxuXG5cdHRvZ2dsZUNsYXNzKCkge1xuXHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuXG5cdFx0aWYoICEgdGhpcy5pc0V4Y2VlZHNUaHJlc2hvbGQoKSApIHtcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYoIE1hdGguYWJzKCBjdXJyZW50UG9zIC0gdGhpcy5zY3JvbGxQb3MgKSA+IDMwICkge1xuXHRcdFx0aWYgKCBjdXJyZW50UG9zID4gdGhpcy5zY3JvbGxQb3MgKSB7XG5cdFx0XHRcdHRoaXMuJGhlYWRlci5hZGRDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFBvcyA9IGN1cnJlbnRQb3M7XG5cdH1cblxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2VyIHtcblxuXHRjb25zdHJ1Y3RvcigkZWwpIHtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHR0aGlzLiRjb250YWluZXIgPSAkKCRlbC5kYXRhKFwiZHJhd2VyLWNvbnRhaW5lci1zZWxlY3RvclwiKSk7XG5cdFx0dGhpcy5pZCA9ICRlbC5hdHRyKCdpZCcpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIgPSAkKCAnW2FyaWEtY29udHJvbHM9XCIjJyt0aGlzLmlkKydcIiBdJyApO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyhcImRyYXdlci1jb250YWluZXJcIik7XG5cdFx0dGhpcy5vbigpO1xuXG5cdH1cblxuXHRvbigpIHtcblx0XHR0aGlzLiRjb250cm9sbGVyLm9uKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy4kZWwub24oJ2NsaWNrJywgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLiRlbC5jaGlsZHJlbigpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pXG5cdH1cblxuXHR0b2dnbGUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICggdGhpcy4kZWwuYXR0cignYXJpYS1leHBhbmRlZCcpID09IFwiZmFsc2VcIiApIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLiRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcInRydWVcIik7XG5cdFx0dGhpcy4kY29udHJvbGxlci5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcInRydWVcIik7XG5cdFx0dGhpcy4kY29udGFpbmVyLmFkZENsYXNzKFwiaXMtZHJhd2VyLW9wZW5cIik7XG5cblxuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy4kZWwuYXR0cignYXJpYS1leHBhbmRlZCcsXCJmYWxzZVwiKTtcblx0XHR0aGlzLiRjb250cm9sbGVyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0dGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiaXMtZHJhd2VyLW9wZW5cIik7XG5cdH1cblxuXHRzdGF0aWMgaW5pdCgpIHtcblx0XHQkKFwiW2RhdGEtZHJhd2VyXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRuZXcgRHJhd2VyKCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG59IiwiXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi9EcmF3ZXInO1xuaW1wb3J0IEhlYWRlckNsYXNzQ29udHJvbGxlciBmcm9tICcuL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXInO1xuaW1wb3J0IEhlYWRlckVzY2FwZXIgZnJvbSAnLi9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlcic7XG5pbXBvcnQgQ29udGVudFNwYWNlciBmcm9tICcuL0FwcExheW91dC9Db250ZW50U3BhY2VyJztcbmltcG9ydCAnLi9za2lwLWxpbmstZm9jdXMtZml4JztcblxuJChmdW5jdGlvbigpIHtcblxuXG5cdCQoXCJbZGF0YS1kcmF3ZXJdXCIpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRuZXcgRHJhd2VyKCQodGhpcykpO1xuXHR9KTtcblxuXHQkKFwiLnByaW1hcnktbWVudSAuc3ViLW1lbnUsIC5wcmltYXJ5LW1lbnUgLmNoaWxkcmVuXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdC8vc2V0IGRlZmF1bHQgaGVpZ2h0IGZvciBhbmltYXRpb25cblx0XHQvLyBsZXQgaGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcblx0XHQvLyAkKHRoaXMpLmhlaWdodCggaGVpZ2h0ICk7XG5cblx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdH0pLm9uKCAnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiggJ3RydWUnID09ICQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcpICApIHtcblx0XHRcdCQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcsXCJmYWxzZVwiKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwidHJ1ZVwiKTtcblx0XHR9XG5cblx0fSk7XG5cblxuXHRsZXQgJGFwcExheW91dCA9ICQoXCIuYXBwLWxheW91dFwiKTtcblx0JCh3aW5kb3cpLm9uKCAnbG9hZCByZXNpemUnLCAoKSA9PiB7XG5cdFx0JGFwcExheW91dC5yZW1vdmVDbGFzcyhcImFwcC1sYXlvdXQtLWRpc2FibGVcIik7XG5cdH0gKTtcblx0bmV3IEhlYWRlckNsYXNzQ29udHJvbGxlciggJGFwcExheW91dCwgXCJhcHAtbGF5b3V0X19oZWFkZXItLWZpeGVkXCIsIDQ2ICk7XG5cdG5ldyBIZWFkZXJFc2NhcGVyKCAkYXBwTGF5b3V0LCBcImFwcC1sYXlvdXRfX2hlYWRlci0tZXNjYXBlXCIsIDE1MCApO1xuXHRuZXcgQ29udGVudFNwYWNlciggJGFwcExheW91dCApO1xuXG5cblxufSk7XG4iLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlzV2Via2l0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICd3ZWJraXQnICkgPiAtMSxcblx0XHRpc09wZXJhICA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnb3BlcmEnICkgID4gLTEsXG5cdFx0aXNJZSAgICAgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ21zaWUnICkgICA+IC0xO1xuXG5cdGlmICggKCBpc1dlYmtpdCB8fCBpc09wZXJhIHx8IGlzSWUgKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKCAxICksXG5cdFx0XHRcdGVsZW1lbnQ7XG5cblx0XHRcdGlmICggISAoIC9eW0EtejAtOV8tXSskLy50ZXN0KCBpZCApICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRpZiAoIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGlmICggISAoIC9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KCBlbGVtZW50LnRhZ05hbWUgKSApICkge1xuXHRcdFx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAtMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSApO1xuXHR9XG59KSgpO1xuIl19

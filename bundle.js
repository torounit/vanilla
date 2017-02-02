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
	}).find('a').on('click', function (event) {
		event.stopPropagation();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvQ29udGVudFNwYWNlci5qcyIsImFzc2V0cy9zY3JpcHRzL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlci5qcyIsImFzc2V0cy9zY3JpcHRzL0RyYXdlci5qcyIsImFzc2V0cy9zY3JpcHRzL2J1bmRsZS5qcyIsImFzc2V0cy9zY3JpcHRzL3NraXAtbGluay1mb2N1cy1maXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7OztJQUdxQixhO0FBQ3BCOzs7O0FBSUEsd0JBQWEsR0FBYixFQUFtQjtBQUFBOztBQUNsQixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsTUFBSSxTQUFTLElBQUksSUFBSixDQUFTLG1CQUFULENBQWI7QUFDQSxNQUFJLFVBQVUsSUFBSSxJQUFKLENBQVMsbUJBQVQsQ0FBZDs7QUFFQSxPQUFLLE9BQUwsR0FBZSxzQkFBRyxNQUFILENBQWY7QUFDQSxPQUFLLFFBQUwsR0FBZ0Isc0JBQUcsT0FBSCxDQUFoQjtBQUNBLE9BQUssRUFBTDtBQUNBOzs7O3VCQUVJO0FBQUE7O0FBQ0oseUJBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYyxhQUFkLEVBQTZCLFlBQU07QUFDbEMsVUFBSyxVQUFMO0FBQ0EsSUFGRDtBQUdBOzs7K0JBRVk7QUFDWixRQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEVBQUMsWUFBWSxLQUFLLGVBQUwsS0FBeUIsSUFBdEMsRUFBbEI7QUFDQTs7O29DQUVpQjs7QUFFakIsVUFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQVA7QUFDQTs7Ozs7O2tCQTVCbUIsYTs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7Ozs7Ozs7SUFHcUIsd0I7QUFDcEI7Ozs7OztB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Q1BBOzs7Ozs7O0FBT0EsQ0FBRSxZQUFXO0FBQ1osS0FBSSxXQUFXLFVBQVUsU0FBVixDQUFvQixXQUFwQixHQUFrQyxPQUFsQyxDQUEyQyxRQUEzQyxJQUF3RCxDQUFDLENBQXhFO0FBQUEsS0FDQyxVQUFXLFVBQVUsU0FBVixDQUFvQixXQUFwQixHQUFrQyxPQUFsQyxDQUEyQyxPQUEzQyxJQUF3RCxDQUFDLENBRHJFO0FBQUEsS0FFQyxPQUFXLFVBQVUsU0FBVixDQUFvQixXQUFwQixHQUFrQyxPQUFsQyxDQUEyQyxNQUEzQyxJQUF3RCxDQUFDLENBRnJFOztBQUlBLEtBQUssQ0FBRSxZQUFZLE9BQVosSUFBdUIsSUFBekIsS0FBbUMsU0FBUyxjQUE1QyxJQUE4RCxPQUFPLGdCQUExRSxFQUE2RjtBQUM1RixTQUFPLGdCQUFQLENBQXlCLFlBQXpCLEVBQXVDLFlBQVc7QUFDakQsT0FBSSxLQUFLLFNBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBeUIsQ0FBekIsQ0FBVDtBQUFBLE9BQ0MsT0FERDs7QUFHQSxPQUFLLENBQUksZ0JBQWdCLElBQWhCLENBQXNCLEVBQXRCLENBQVQsRUFBd0M7QUFDdkM7QUFDQTs7QUFFRCxhQUFVLFNBQVMsY0FBVCxDQUF5QixFQUF6QixDQUFWOztBQUVBLE9BQUssT0FBTCxFQUFlO0FBQ2QsUUFBSyxDQUFJLHdDQUF3QyxJQUF4QyxDQUE4QyxRQUFRLE9BQXRELENBQVQsRUFBNkU7QUFDNUUsYUFBUSxRQUFSLEdBQW1CLENBQUMsQ0FBcEI7QUFDQTs7QUFFRCxZQUFRLEtBQVI7QUFDQTtBQUNELEdBakJELEVBaUJHLEtBakJIO0FBa0JBO0FBQ0QsQ0F6QkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRTcGFjZXIge1xuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuXHQgKi9cblx0Y29uc3RydWN0b3IoICRlbCApIHtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHRsZXQgaGVhZGVyID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtaGVhZGVyJyk7XG5cdFx0bGV0IGNvbnRlbnQgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1zcGFjZXInKTtcblxuXHRcdHRoaXMuJGhlYWRlciA9ICQoIGhlYWRlciApO1xuXHRcdHRoaXMuJGNvbnRlbnQgPSAkKCBjb250ZW50ICk7XG5cdFx0dGhpcy5vbigpO1xuXHR9XG5cblx0b24oKSB7XG5cdFx0JCh3aW5kb3cpLm9uKCAnbG9hZCByZXNpemUnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFBhZGRpbmcoKVxuXHRcdH0gKTtcblx0fVxuXG5cdHNldFBhZGRpbmcoKSB7XG5cdFx0dGhpcy4kY29udGVudC5jc3Moe3BhZGRpbmdUb3A6IHRoaXMuZ2V0SGVhZGVySGVpZ2h0KCkgKyAncHgnfSk7XG5cdH1cblxuXHRnZXRIZWFkZXJIZWlnaHQoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy4kaGVhZGVyLmhlaWdodCgpO1xuXHR9XG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcExheW91dENsYXNzQ29udHJvbGxlciB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJGVsXG5cdCAqIEBwYXJhbSBjbGFzc1N0cmluZ1xuXHQgKiBAcGFyYW0gdGhyZXNob2xkIOOCr+ODqeOCueOBruioreWumuOCkuOBmeOCi+OBn+OCgeOBruOCueOCr+ODreODvOODq+S9jee9rlxuXHQgKi9cblx0Y29uc3RydWN0b3IoICRlbCwgY2xhc3NTdHJpbmcsIHRocmVzaG9sZCApIHtcblx0XHR0aGlzLmNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmc7XG5cdFx0dGhpcy50aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0bGV0IGhlYWRlciA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LWhlYWRlcicpO1xuXHRcdGxldCBjb250ZW50ID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtc2Nyb2xsLWFyZWEnKTtcblx0XHR0aGlzLiRoZWFkZXIgPSAkKCBoZWFkZXIgKTtcblx0XHRpZiAoIGNvbnRlbnQgJiYgY29udGVudCAhPSAnd2luZG93JyApIHtcblx0XHRcdHRoaXMuJGNvbnRlbnQgPSAkKCBjb250ZW50ICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy4kY29udGVudCA9ICQoIHdpbmRvdyApO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHRcdHRoaXMub24oKTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Ly9mb3Igb3ZlcnJpZGVcblx0fVxuXG5cdG9uKCkge1xuXHRcdHRoaXMuJGNvbnRlbnQub24oICdzY3JvbGwgcmVzaXplJywgXy50aHJvdHRsZShmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy50b2dnbGVDbGFzcygpO1xuXHRcdH0sIDEgKS5iaW5kKHRoaXMpICk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygpIHtcblx0XHRpZiggdGhpcy5pc0V4Y2VlZHNUaHJlc2hvbGQoKSApIHtcblx0XHRcdHRoaXMuJGhlYWRlci5hZGRDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdH1cblx0fVxuXG5cdGdldFRocmVzaG9sZCgpIHtcblx0XHRpZiggdHlwZW9mIHRoaXMudGhyZXNob2xkICA9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aHJlc2hvbGQoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aHJlc2hvbGQ7XG5cdFx0fVxuXHR9XG5cblx0aXNFeGNlZWRzVGhyZXNob2xkKCkge1xuXHRcdGxldCBzY3JvbGxUb3AgPSB0aGlzLiRjb250ZW50LnNjcm9sbFRvcCgpO1xuXHRcdHJldHVybiAoIHNjcm9sbFRvcCA+IHRoaXMuZ2V0VGhyZXNob2xkKCkgKTtcblxuXHR9XG59XG5cbiIsIlxuaW1wb3J0IEhlYWRlckNsYXNzQ29udHJvbGxlciBmcm9tICcuL0hlYWRlckNsYXNzQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSGVhZGVyQ2xhc3NDb250cm9sbGVyIHtcblxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMuc2Nyb2xsUG9zID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuXHR9XG5cblx0Z2V0U2Nyb2xsUG9zaXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGNvbnRlbnQuc2Nyb2xsVG9wKCk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygpIHtcblx0XHRsZXQgY3VycmVudFBvcyA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcblxuXHRcdGlmKCAhIHRoaXMuaXNFeGNlZWRzVGhyZXNob2xkKCkgKSB7XG5cdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdHRoaXMuJGhlYWRlci5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXHRcdH1cblx0XHRlbHNlIGlmKCBNYXRoLmFicyggY3VycmVudFBvcyAtIHRoaXMuc2Nyb2xsUG9zICkgPiAzMCApIHtcblx0XHRcdGlmICggY3VycmVudFBvcyA+IHRoaXMuc2Nyb2xsUG9zICkge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIuYWRkQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxQb3MgPSBjdXJyZW50UG9zO1xuXHR9XG5cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlciB7XG5cblx0Y29uc3RydWN0b3IoJGVsKSB7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0dGhpcy4kY29udGFpbmVyID0gJCgkZWwuZGF0YShcImRyYXdlci1jb250YWluZXItc2VsZWN0b3JcIikpO1xuXHRcdHRoaXMuaWQgPSAkZWwuYXR0cignaWQnKTtcblx0XHR0aGlzLiRjb250cm9sbGVyID0gJCggJ1thcmlhLWNvbnRyb2xzPVwiIycrdGhpcy5pZCsnXCIgXScgKTtcblx0XHR0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoXCJkcmF3ZXItY29udGFpbmVyXCIpO1xuXHRcdHRoaXMub24oKTtcblxuXHR9XG5cblx0b24oKSB7XG5cdFx0dGhpcy4kY29udHJvbGxlci5vbignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcblxuXHRcdHRoaXMuJGVsLm9uKCdjbGljaycsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kZWwuY2hpbGRyZW4oKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KVxuXHR9XG5cblx0dG9nZ2xlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoIHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PSBcImZhbHNlXCIgKSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kZWwuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyhcImlzLWRyYXdlci1vcGVuXCIpO1xuXG5cblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0dGhpcy4kY29udHJvbGxlci5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImlzLWRyYXdlci1vcGVuXCIpO1xuXHR9XG5cblx0c3RhdGljIGluaXQoKSB7XG5cdFx0JChcIltkYXRhLWRyYXdlcl1cIikuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0bmV3IERyYXdlcigkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vRHJhd2VyJztcbmltcG9ydCBIZWFkZXJDbGFzc0NvbnRyb2xsZXIgZnJvbSAnLi9BcHBMYXlvdXQvSGVhZGVyQ2xhc3NDb250cm9sbGVyJztcbmltcG9ydCBIZWFkZXJFc2NhcGVyIGZyb20gJy4vQXBwTGF5b3V0L0hlYWRlckVzY2FwZXInO1xuaW1wb3J0IENvbnRlbnRTcGFjZXIgZnJvbSAnLi9BcHBMYXlvdXQvQ29udGVudFNwYWNlcic7XG5pbXBvcnQgJy4vc2tpcC1saW5rLWZvY3VzLWZpeCc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblxuXHQkKFwiW2RhdGEtZHJhd2VyXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0bmV3IERyYXdlcigkKHRoaXMpKTtcblx0fSk7XG5cblx0JChcIi5wcmltYXJ5LW1lbnUgLnN1Yi1tZW51LCAucHJpbWFyeS1tZW51IC5jaGlsZHJlblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQvL3NldCBkZWZhdWx0IGhlaWdodCBmb3IgYW5pbWF0aW9uXG5cdFx0Ly8gbGV0IGhlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XG5cdFx0Ly8gJCh0aGlzKS5oZWlnaHQoIGhlaWdodCApO1xuXG5cdFx0JCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHR9KS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYoICd0cnVlJyA9PSAkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSAgKSB7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcInRydWVcIik7XG5cdFx0fVxuXG5cdH0pLmZpbmQoJ2EnKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH0pO1xuXG5cdGxldCAkYXBwTGF5b3V0ID0gJChcIi5hcHAtbGF5b3V0XCIpO1xuXHQkKHdpbmRvdykub24oICdsb2FkIHJlc2l6ZScsICgpID0+IHtcblx0XHQkYXBwTGF5b3V0LnJlbW92ZUNsYXNzKFwiYXBwLWxheW91dC0tZGlzYWJsZVwiKTtcblx0fSApO1xuXHRuZXcgSGVhZGVyQ2xhc3NDb250cm9sbGVyKCAkYXBwTGF5b3V0LCBcImFwcC1sYXlvdXRfX2hlYWRlci0tZml4ZWRcIiwgNDYgKTtcblx0bmV3IEhlYWRlckVzY2FwZXIoICRhcHBMYXlvdXQsIFwiYXBwLWxheW91dF9faGVhZGVyLS1lc2NhcGVcIiwgMTUwICk7XG5cdG5ldyBDb250ZW50U3BhY2VyKCAkYXBwTGF5b3V0ICk7XG5cblxuXG59KTtcbiIsIi8qKlxuICogRmlsZSBza2lwLWxpbmstZm9jdXMtZml4LmpzLlxuICpcbiAqIEhlbHBzIHdpdGggYWNjZXNzaWJpbGl0eSBmb3Iga2V5Ym9hcmQgb25seSB1c2Vycy5cbiAqXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxuICovXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNXZWJraXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ3dlYmtpdCcgKSA+IC0xLFxuXHRcdGlzT3BlcmEgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdvcGVyYScgKSAgPiAtMSxcblx0XHRpc0llICAgICA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnbXNpZScgKSAgID4gLTE7XG5cblx0aWYgKCAoIGlzV2Via2l0IHx8IGlzT3BlcmEgfHwgaXNJZSApICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoIDEgKSxcblx0XHRcdFx0ZWxlbWVudDtcblxuXHRcdFx0aWYgKCAhICggL15bQS16MC05Xy1dKyQvLnRlc3QoIGlkICkgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdGlmICggZWxlbWVudCApIHtcblx0XHRcdFx0aWYgKCAhICggL14oPzphfHNlbGVjdHxpbnB1dHxidXR0b258dGV4dGFyZWEpJC9pLnRlc3QoIGVsZW1lbnQudGFnTmFtZSApICkgKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC50YWJJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxlbWVudC5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlICk7XG5cdH1cbn0pKCk7XG4iXX0=

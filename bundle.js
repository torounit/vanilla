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
		if (content && content !== 'window') {
			this.$content = (0, _jquery2.default)(content);
		} else {
			this.$content = (0, _jquery2.default)(window);
		}

		this.initialize();
		this.toggleClass();
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
			this.$content.on('load scroll resize', _underscore2.default.throttle(function () {
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
			if (typeof this.threshold === "function") {
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
			} else if (currentPos - this.scrollPos > 5) {
				//scroll to down
				this.$header.addClass(this.classString);
				this.$header.attr('aria-hidden', 'true');
			} else if (currentPos - this.scrollPos < -5) {
				//scroll to up
				this.$header.removeClass(this.classString);
				this.$header.attr('aria-hidden', 'false');
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

},{}],6:[function(require,module,exports){
(function (global){
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

var _underscore2 = _interopRequireDefault(_underscore);

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
});

(0, _jquery2.default)(function () {

	var $toplevelMenuItems = (0, _jquery2.default)('.primary-menu .menu-item-has-children, .primary-menu .page_item_has_children');
	// Add dropdown toggle that displays child menu items.
	var $dropdownToggle = (0, _jquery2.default)('<button />', {
		'class': 'dropdown-toggle',
		'aria-expanded': false
	}).append((0, _jquery2.default)('<span />', {
		'class': 'screen-reader-text',
		text: screenReaderText.expand
	}));

	$toplevelMenuItems.children('a').after($dropdownToggle);

	(0, _jquery2.default)(".primary-menu .sub-menu, .primary-menu .children").each(function () {
		(0, _jquery2.default)(this).attr('aria-expanded', "false");
	});

	$toplevelMenuItems.find('.dropdown-toggle').on('click', function (event) {
		var self = (0, _jquery2.default)(this);
		var expanded = '';
		if ('true' == self.attr('aria-expanded')) {
			expanded = 'false';
			self.find('.screen-reader-text').text(screenReaderText.expand);
		} else {
			expanded = 'true';
			self.find('.screen-reader-text').text(screenReaderText.collapse);
		}
		self.attr('aria-expanded', expanded);

		self.siblings('.sub-menu,.children').attr('aria-expanded', expanded);
	});
});

(0, _jquery2.default)(function () {
	var $window = (0, _jquery2.default)(window);
	var $appLayout = (0, _jquery2.default)(".app-layout");
	var $navbar = (0, _jquery2.default)('.navbar');
	$window.on('load resize', function () {
		$appLayout.find(".app-layout__header").removeClass("app-layout__header--static");
	});
	new _HeaderClassController2.default($appLayout, "app-layout__header--fixed", 46);
	new _HeaderEscaper2.default($appLayout, "app-layout__header--escape", 128);
	new _ContentSpacer2.default($appLayout);

	function setOpaque() {
		if ($window.scrollTop() > 64) {
			$navbar.addClass('navbar--opaque');
		} else {
			$navbar.removeClass('navbar--opaque');
		}
	}
	setOpaque();
	$window.on('load scroll resize', _underscore2.default.throttle(function () {
		setOpaque();
	}, 10));
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./AppLayout/ContentSpacer":1,"./AppLayout/HeaderClassController":2,"./AppLayout/HeaderEscaper":3,"./Drawer":4,"./skip-link-focus-fix":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvQ29udGVudFNwYWNlci5qcyIsImFzc2V0cy9zY3JpcHRzL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlci5qcyIsImFzc2V0cy9zY3JpcHRzL0RyYXdlci5qcyIsImFzc2V0cy9zY3JpcHRzL3NraXAtbGluay1mb2N1cy1maXguanMiLCJhc3NldHMvc2NyaXB0cy90aGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztJQUVxQixhO0FBQ3BCOzs7O0FBSUEsd0JBQWEsR0FBYixFQUFtQjtBQUFBOztBQUNsQixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsTUFBSSxTQUFTLElBQUksSUFBSixDQUFTLG1CQUFULENBQWI7QUFDQSxNQUFJLFVBQVUsSUFBSSxJQUFKLENBQVMsbUJBQVQsQ0FBZDs7QUFFQSxPQUFLLE9BQUwsR0FBZSxzQkFBRyxNQUFILENBQWY7QUFDQSxPQUFLLFFBQUwsR0FBZ0Isc0JBQUcsT0FBSCxDQUFoQjtBQUNBLE9BQUssRUFBTDtBQUNBOzs7O3VCQUVJO0FBQUE7O0FBQ0oseUJBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYyxhQUFkLEVBQTZCLFlBQU07QUFDbEMsVUFBSyxVQUFMO0FBQ0EsSUFGRDtBQUdBOzs7K0JBRVk7QUFDWixRQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEVBQUMsWUFBWSxLQUFLLGVBQUwsS0FBeUIsSUFBdEMsRUFBbEI7QUFDQTs7O29DQUVpQjtBQUNqQixVQUFPLEtBQUssT0FBTCxDQUFhLE1BQWIsRUFBUDtBQUNBOzs7Ozs7a0JBM0JtQixhOzs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7Ozs7OztJQUdxQix3QjtBQUNwQjs7Ozs7O0FBTUEsbUNBQWEsR0FBYixFQUFrQixXQUFsQixFQUErQixTQUEvQixFQUEyQztBQUFBOztBQUMxQyxPQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDQSxPQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsTUFBSSxTQUFTLElBQUksSUFBSixDQUFTLG1CQUFULENBQWI7QUFDQSxNQUFJLFVBQVUsSUFBSSxJQUFKLENBQVMsd0JBQVQsQ0FBZDtBQUNBLE9BQUssT0FBTCxHQUFlLHNCQUFHLE1BQUgsQ0FBZjtBQUNBLE1BQUssV0FBVyxZQUFZLFFBQTVCLEVBQXVDO0FBQ3RDLFFBQUssUUFBTCxHQUFnQixzQkFBRyxPQUFILENBQWhCO0FBQ0EsR0FGRCxNQUVPO0FBQ04sUUFBSyxRQUFMLEdBQWdCLHNCQUFHLE1BQUgsQ0FBaEI7QUFDQTs7QUFFRCxPQUFLLFVBQUw7QUFDQSxPQUFLLFdBQUw7QUFDQSxPQUFLLEVBQUw7QUFDQTs7OzsrQkFFWTtBQUNaO0FBQ0E7Ozt1QkFFSTtBQUNKLFFBQUssUUFBTCxDQUFjLEVBQWQsQ0FBa0Isb0JBQWxCLEVBQXdDLHFCQUFFLFFBQUYsQ0FBVyxZQUFVO0FBQzVELFNBQUssV0FBTDtBQUNBLElBRnVDLEVBRXJDLENBRnFDLEVBRWpDLElBRmlDLENBRTVCLElBRjRCLENBQXhDO0FBR0E7OztnQ0FFYTtBQUNiLE9BQUksS0FBSyxrQkFBTCxFQUFKLEVBQWdDO0FBQy9CLFNBQUssT0FBTCxDQUFhLFFBQWIsQ0FBdUIsS0FBSyxXQUE1QjtBQUNBLElBRkQsTUFHSztBQUNKLFNBQUssT0FBTCxDQUFhLFdBQWIsQ0FBMEIsS0FBSyxXQUEvQjtBQUNBO0FBQ0Q7OztpQ0FFYztBQUNkLE9BQUksT0FBTyxLQUFLLFNBQVosS0FBMEIsVUFBOUIsRUFBMkM7QUFDMUMsV0FBTyxLQUFLLFNBQUwsRUFBUDtBQUNBLElBRkQsTUFHSztBQUNKLFdBQU8sS0FBSyxTQUFaO0FBQ0E7QUFDRDs7O3VDQUVvQjtBQUNwQixPQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsU0FBZCxFQUFoQjtBQUNBLFVBQVMsWUFBWSxLQUFLLFlBQUwsRUFBckI7QUFFQTs7Ozs7O2tCQXpEbUIsd0I7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUljO0FBQ1osUUFBSyxTQUFMLEdBQWlCLEtBQUssaUJBQUwsRUFBakI7QUFDQTs7O3NDQUVtQjtBQUNuQixVQUFPLEtBQUssUUFBTCxDQUFjLFNBQWQsRUFBUDtBQUNBOzs7Z0NBRWE7QUFDYixPQUFJLGFBQWEsS0FBSyxpQkFBTCxFQUFqQjs7QUFFQSxPQUFJLENBQUUsS0FBSyxrQkFBTCxFQUFOLEVBQWtDO0FBQ2pDLFNBQUssT0FBTCxDQUFhLFdBQWIsQ0FBMEIsS0FBSyxXQUEvQjtBQUNBLFNBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsYUFBbEIsRUFBaUMsT0FBakM7QUFDQSxJQUhELE1BSUssSUFBSyxhQUFhLEtBQUssU0FBbEIsR0FBOEIsQ0FBbkMsRUFBdUM7QUFDM0M7QUFDQSxTQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXVCLEtBQUssV0FBNUI7QUFDQSxTQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLGFBQWxCLEVBQWlDLE1BQWpDO0FBQ0EsSUFKSSxNQUtBLElBQU0sYUFBYSxLQUFLLFNBQWxCLEdBQThCLENBQUUsQ0FBdEMsRUFBMEM7QUFDOUM7QUFDQSxTQUFLLE9BQUwsQ0FBYSxXQUFiLENBQTBCLEtBQUssV0FBL0I7QUFDQSxTQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLGFBQWxCLEVBQWlDLE9BQWpDO0FBQ0E7O0FBRUQsUUFBSyxTQUFMLEdBQWlCLFVBQWpCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CRjs7Ozs7Ozs7SUFFcUIsTTtBQUVwQixpQkFBWSxHQUFaLEVBQWlCO0FBQUE7O0FBQ2hCLE9BQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxPQUFLLFVBQUwsR0FBa0Isc0JBQUUsSUFBSSxJQUFKLENBQVMsMkJBQVQsQ0FBRixDQUFsQjtBQUNBLE9BQUssRUFBTCxHQUFVLElBQUksSUFBSixDQUFTLElBQVQsQ0FBVjtBQUNBLE9BQUssV0FBTCxHQUFtQixzQkFBRyxxQkFBbUIsS0FBSyxFQUF4QixHQUEyQixLQUE5QixDQUFuQjtBQUNBLE9BQUssVUFBTCxDQUFnQixRQUFoQixDQUF5QixrQkFBekI7QUFDQSxPQUFLLEVBQUw7QUFFQTs7Ozt1QkFFSTtBQUFBOztBQUNKLFFBQUssV0FBTCxDQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQTdCO0FBQ0EsUUFBSyxHQUFMLENBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFoQixDQUFyQjtBQUNBLFFBQUssR0FBTCxDQUFTLFFBQVQsR0FBb0IsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBUyxLQUFULEVBQWU7QUFDOUMsVUFBTSxlQUFOO0FBQ0EsSUFGRDs7QUFJQSx5QkFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBQyxLQUFELEVBQVc7QUFDbEMsUUFBSSxNQUFNLE9BQU4sSUFBaUIsRUFBckIsRUFBeUI7QUFDeEIsV0FBSyxLQUFMO0FBQ0E7QUFDRCxJQUpEOztBQU1BLFFBQUssR0FBTCxDQUFTLEVBQVQsQ0FBWSxlQUFaLEVBQTZCLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUE3QjtBQUNBOzs7a0NBRWU7QUFDZixRQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLGFBQXJCO0FBQ0E7Ozt5QkFFTSxLLEVBQU87QUFDYixTQUFNLGNBQU47QUFDQSxPQUFLLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxlQUFkLEtBQWtDLE9BQXZDLEVBQWlEO0FBQ2hELFNBQUssSUFBTDtBQUNBLElBRkQsTUFFTztBQUNOLFNBQUssS0FBTDtBQUNBO0FBQ0Q7Ozt5QkFFTTtBQUNOLFFBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsYUFBbEI7QUFDQSxRQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsZUFBZCxFQUE4QixNQUE5QjtBQUNBLFFBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxhQUFkLEVBQTRCLE9BQTVCO0FBQ0EsUUFBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLGVBQXRCLEVBQXNDLE1BQXRDO0FBQ0EsUUFBSyxVQUFMLENBQWdCLFFBQWhCLENBQXlCLGdCQUF6QjtBQUdBOzs7MEJBRU87QUFDUCxRQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLGFBQWxCO0FBQ0EsUUFBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGVBQWQsRUFBOEIsT0FBOUI7QUFDQSxRQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxFQUE0QixNQUE1QjtBQUNBLFFBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixlQUF0QixFQUFzQyxPQUF0QztBQUNBLFFBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixnQkFBNUI7QUFDQTs7O3lCQUVhO0FBQ2IseUJBQUUsZUFBRixFQUFtQixJQUFuQixDQUF3QixZQUFVO0FBQ2pDLFFBQUksTUFBSixDQUFXLHNCQUFFLElBQUYsQ0FBWDtBQUNBLElBRkQ7QUFHQTs7Ozs7O2tCQS9EbUIsTTs7Ozs7OztBQ0ZyQjs7Ozs7OztBQU9BLENBQUUsWUFBVztBQUNaLEtBQUksV0FBVyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMkMsUUFBM0MsSUFBd0QsQ0FBQyxDQUF4RTtBQUFBLEtBQ0MsVUFBVyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMkMsT0FBM0MsSUFBd0QsQ0FBQyxDQURyRTtBQUFBLEtBRUMsT0FBVyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMkMsTUFBM0MsSUFBd0QsQ0FBQyxDQUZyRTs7QUFJQSxLQUFLLENBQUUsWUFBWSxPQUFaLElBQXVCLElBQXpCLEtBQW1DLFNBQVMsY0FBNUMsSUFBOEQsT0FBTyxnQkFBMUUsRUFBNkY7QUFDNUYsU0FBTyxnQkFBUCxDQUF5QixZQUF6QixFQUF1QyxZQUFXO0FBQ2pELE9BQUksS0FBSyxTQUFTLElBQVQsQ0FBYyxTQUFkLENBQXlCLENBQXpCLENBQVQ7QUFBQSxPQUNDLE9BREQ7O0FBR0EsT0FBSyxDQUFJLGdCQUFnQixJQUFoQixDQUFzQixFQUF0QixDQUFULEVBQXdDO0FBQ3ZDO0FBQ0E7O0FBRUQsYUFBVSxTQUFTLGNBQVQsQ0FBeUIsRUFBekIsQ0FBVjs7QUFFQSxPQUFLLE9BQUwsRUFBZTtBQUNkLFFBQUssQ0FBSSx3Q0FBd0MsSUFBeEMsQ0FBOEMsUUFBUSxPQUF0RCxDQUFULEVBQTZFO0FBQzVFLGFBQVEsUUFBUixHQUFtQixDQUFDLENBQXBCO0FBQ0E7O0FBRUQsWUFBUSxLQUFSO0FBQ0E7QUFDRCxHQWpCRCxFQWlCRyxLQWpCSDtBQWtCQTtBQUNELENBekJEOzs7Ozs7QUNQQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLHNCQUFFLFlBQVc7QUFDWix1QkFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLFlBQVU7QUFDakMsdUJBQVcsc0JBQUUsSUFBRixDQUFYO0FBQ0EsRUFGRDtBQUdBLENBSkQ7O0FBTUEsc0JBQUUsWUFBVzs7QUFFWixLQUFJLHFCQUFxQixzQkFBRSw4RUFBRixDQUF6QjtBQUNBO0FBQ0EsS0FBSSxrQkFBa0Isc0JBQUcsWUFBSCxFQUFpQjtBQUN0QyxXQUFTLGlCQUQ2QjtBQUV0QyxtQkFBaUI7QUFGcUIsRUFBakIsRUFHbEIsTUFIa0IsQ0FHVixzQkFBRyxVQUFILEVBQWU7QUFDMUIsV0FBUyxvQkFEaUI7QUFFMUIsUUFBTSxpQkFBaUI7QUFGRyxFQUFmLENBSFUsQ0FBdEI7O0FBUUEsb0JBQW1CLFFBQW5CLENBQTRCLEdBQTVCLEVBQWlDLEtBQWpDLENBQXdDLGVBQXhDOztBQUdBLHVCQUFFLGtEQUFGLEVBQXNELElBQXRELENBQTJELFlBQVk7QUFDdEUsd0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxlQUFiLEVBQTZCLE9BQTdCO0FBQ0EsRUFGRDs7QUFJQSxvQkFBbUIsSUFBbkIsQ0FBd0Isa0JBQXhCLEVBQTRDLEVBQTVDLENBQWdELE9BQWhELEVBQXlELFVBQVUsS0FBVixFQUFpQjtBQUN6RSxNQUFJLE9BQU8sc0JBQUUsSUFBRixDQUFYO0FBQ0EsTUFBSSxXQUFXLEVBQWY7QUFDQSxNQUFJLFVBQVUsS0FBSyxJQUFMLENBQVUsZUFBVixDQUFkLEVBQTRDO0FBQzNDLGNBQVcsT0FBWDtBQUNBLFFBQUssSUFBTCxDQUFVLHFCQUFWLEVBQWlDLElBQWpDLENBQXNDLGlCQUFpQixNQUF2RDtBQUNBLEdBSEQsTUFJSztBQUNKLGNBQVcsTUFBWDtBQUNBLFFBQUssSUFBTCxDQUFVLHFCQUFWLEVBQWlDLElBQWpDLENBQXNDLGlCQUFpQixRQUF2RDtBQUNBO0FBQ0QsT0FBSyxJQUFMLENBQVUsZUFBVixFQUEyQixRQUEzQjs7QUFFQSxPQUFLLFFBQUwsQ0FBYyxxQkFBZCxFQUFxQyxJQUFyQyxDQUEwQyxlQUExQyxFQUEyRCxRQUEzRDtBQUNBLEVBZEQ7QUFnQkEsQ0FuQ0Q7O0FBc0NBLHNCQUFFLFlBQVc7QUFDWixLQUFJLFVBQVUsc0JBQUUsTUFBRixDQUFkO0FBQ0EsS0FBSSxhQUFhLHNCQUFFLGFBQUYsQ0FBakI7QUFDQSxLQUFJLFVBQVUsc0JBQUUsU0FBRixDQUFkO0FBQ0EsU0FBUSxFQUFSLENBQVksYUFBWixFQUEyQixZQUFNO0FBQ2hDLGFBQVcsSUFBWCxDQUFnQixxQkFBaEIsRUFBdUMsV0FBdkMsQ0FBbUQsNEJBQW5EO0FBQ0EsRUFGRDtBQUdBLHFDQUEyQixVQUEzQixFQUF1QywyQkFBdkMsRUFBb0UsRUFBcEU7QUFDQSw2QkFBbUIsVUFBbkIsRUFBK0IsNEJBQS9CLEVBQTZELEdBQTdEO0FBQ0EsNkJBQW1CLFVBQW5COztBQUVBLFVBQVMsU0FBVCxHQUFzQjtBQUNyQixNQUFJLFFBQVEsU0FBUixLQUFzQixFQUExQixFQUErQjtBQUM5QixXQUFRLFFBQVIsQ0FBa0IsZ0JBQWxCO0FBQ0EsR0FGRCxNQUdLO0FBQ0osV0FBUSxXQUFSLENBQXFCLGdCQUFyQjtBQUNBO0FBQ0Q7QUFDRDtBQUNBLFNBQVEsRUFBUixDQUFZLG9CQUFaLEVBQWtDLHFCQUFFLFFBQUYsQ0FBVyxZQUFVO0FBQ3REO0FBQ0EsRUFGaUMsRUFFL0IsRUFGK0IsQ0FBbEM7QUFJQSxDQXhCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50U3BhY2VyIHtcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkZWwgKSB7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0bGV0IGhlYWRlciA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LWhlYWRlcicpO1xuXHRcdGxldCBjb250ZW50ID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtc3BhY2VyJyk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKCBoZWFkZXIgKTtcblx0XHR0aGlzLiRjb250ZW50ID0gJCggY29udGVudCApO1xuXHRcdHRoaXMub24oKTtcblx0fVxuXG5cdG9uKCkge1xuXHRcdCQod2luZG93KS5vbiggJ2xvYWQgcmVzaXplJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRQYWRkaW5nKClcblx0XHR9ICk7XG5cdH1cblxuXHRzZXRQYWRkaW5nKCkge1xuXHRcdHRoaXMuJGNvbnRlbnQuY3NzKHtwYWRkaW5nVG9wOiB0aGlzLmdldEhlYWRlckhlaWdodCgpICsgJ3B4J30pO1xuXHR9XG5cblx0Z2V0SGVhZGVySGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLiRoZWFkZXIuaGVpZ2h0KCk7XG5cdH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBMYXlvdXRDbGFzc0NvbnRyb2xsZXIge1xuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRlbFxuXHQgKiBAcGFyYW0gY2xhc3NTdHJpbmdcblx0ICogQHBhcmFtIHRocmVzaG9sZCDjgq/jg6njgrnjga7oqK3lrprjgpLjgZnjgovjgZ/jgoHjga7jgrnjgq/jg63jg7zjg6vkvY3nva5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkZWwsIGNsYXNzU3RyaW5nLCB0aHJlc2hvbGQgKSB7XG5cdFx0dGhpcy5jbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nO1xuXHRcdHRoaXMudGhyZXNob2xkID0gdGhyZXNob2xkO1xuXHRcdHRoaXMuJGVsID0gJGVsO1xuXHRcdGxldCBoZWFkZXIgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1oZWFkZXInKTtcblx0XHRsZXQgY29udGVudCA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LXNjcm9sbC1hcmVhJyk7XG5cdFx0dGhpcy4kaGVhZGVyID0gJCggaGVhZGVyICk7XG5cdFx0aWYgKCBjb250ZW50ICYmIGNvbnRlbnQgIT09ICd3aW5kb3cnICkge1xuXHRcdFx0dGhpcy4kY29udGVudCA9ICQoIGNvbnRlbnQgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kY29udGVudCA9ICQoIHdpbmRvdyApO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHRcdHRoaXMudG9nZ2xlQ2xhc3MoKTtcblx0XHR0aGlzLm9uKCk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdC8vZm9yIG92ZXJyaWRlXG5cdH1cblxuXHRvbigpIHtcblx0XHR0aGlzLiRjb250ZW50Lm9uKCAnbG9hZCBzY3JvbGwgcmVzaXplJywgXy50aHJvdHRsZShmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy50b2dnbGVDbGFzcygpO1xuXHRcdH0sIDEgKS5iaW5kKHRoaXMpICk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygpIHtcblx0XHRpZiggdGhpcy5pc0V4Y2VlZHNUaHJlc2hvbGQoKSApIHtcblx0XHRcdHRoaXMuJGhlYWRlci5hZGRDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdH1cblx0fVxuXG5cdGdldFRocmVzaG9sZCgpIHtcblx0XHRpZiggdHlwZW9mIHRoaXMudGhyZXNob2xkID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aHJlc2hvbGQoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aHJlc2hvbGQ7XG5cdFx0fVxuXHR9XG5cblx0aXNFeGNlZWRzVGhyZXNob2xkKCkge1xuXHRcdGxldCBzY3JvbGxUb3AgPSB0aGlzLiRjb250ZW50LnNjcm9sbFRvcCgpO1xuXHRcdHJldHVybiAoIHNjcm9sbFRvcCA+IHRoaXMuZ2V0VGhyZXNob2xkKCkgKTtcblxuXHR9XG59XG5cbiIsImltcG9ydCBIZWFkZXJDbGFzc0NvbnRyb2xsZXIgZnJvbSAnLi9IZWFkZXJDbGFzc0NvbnRyb2xsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEhlYWRlckNsYXNzQ29udHJvbGxlciB7XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLnNjcm9sbFBvcyA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcblx0fVxuXG5cdGdldFNjcm9sbFBvc2l0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLiRjb250ZW50LnNjcm9sbFRvcCgpO1xuXHR9XG5cblx0dG9nZ2xlQ2xhc3MoKSB7XG5cdFx0bGV0IGN1cnJlbnRQb3MgPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG5cblx0XHRpZiggISB0aGlzLmlzRXhjZWVkc1RocmVzaG9sZCgpICkge1xuXHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0XHR0aGlzLiRoZWFkZXIuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiggIGN1cnJlbnRQb3MgLSB0aGlzLnNjcm9sbFBvcyA+IDUgKSB7XG5cdFx0XHQvL3Njcm9sbCB0byBkb3duXG5cdFx0XHR0aGlzLiRoZWFkZXIuYWRkQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdHRoaXMuJGhlYWRlci5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCAgY3VycmVudFBvcyAtIHRoaXMuc2Nyb2xsUG9zIDwgLSA1ICkge1xuXHRcdFx0Ly9zY3JvbGwgdG8gdXBcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxQb3MgPSBjdXJyZW50UG9zO1xuXHR9XG5cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlciB7XG5cblx0Y29uc3RydWN0b3IoJGVsKSB7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0dGhpcy4kY29udGFpbmVyID0gJCgkZWwuZGF0YShcImRyYXdlci1jb250YWluZXItc2VsZWN0b3JcIikpO1xuXHRcdHRoaXMuaWQgPSAkZWwuYXR0cignaWQnKTtcblx0XHR0aGlzLiRjb250cm9sbGVyID0gJCggJ1thcmlhLWNvbnRyb2xzPVwiJyt0aGlzLmlkKydcIiBdJyApO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyhcImRyYXdlci1jb250YWluZXJcIik7XG5cdFx0dGhpcy5vbigpO1xuXG5cdH1cblxuXHRvbigpIHtcblx0XHR0aGlzLiRjb250cm9sbGVyLm9uKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuJGVsLm9uKCdjbGljaycsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kZWwuY2hpbGRyZW4oKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9KVxuXG5cdFx0JChkb2N1bWVudCkub24oJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuXHRcdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMuJGVsLm9uKCd0cmFuc2l0aW9uZW5kJywgdGhpcy50cmFuc2l0aW9uZW5kLmJpbmQodGhpcykpO1xuXHR9XG5cblx0dHJhbnNpdGlvbmVuZCgpIHtcblx0XHR0aGlzLiRlbC5yZW1vdmVDbGFzcygnaXMtYW5pbWF0ZWQnKTtcblx0fVxuXG5cdHRvZ2dsZShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKCB0aGlzLiRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT0gXCJmYWxzZVwiICkge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuJGVsLmFkZENsYXNzKCdpcy1hbmltYXRlZCcpO1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwidHJ1ZVwiKTtcblx0XHR0aGlzLiRlbC5hdHRyKCdhcmlhLWhpZGRlbicsXCJmYWxzZVwiKTtcblx0XHR0aGlzLiRjb250cm9sbGVyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwidHJ1ZVwiKTtcblx0XHR0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoXCJpcy1kcmF3ZXItb3BlblwiKTtcblxuXG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLiRlbC5hZGRDbGFzcygnaXMtYW5pbWF0ZWQnKTtcblx0XHR0aGlzLiRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtaGlkZGVuJyxcInRydWVcIik7XG5cdFx0dGhpcy4kY29udHJvbGxlci5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImlzLWRyYXdlci1vcGVuXCIpO1xuXHR9XG5cblx0c3RhdGljIGluaXQoKSB7XG5cdFx0JChcIltkYXRhLWRyYXdlcl1cIikuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0bmV3IERyYXdlcigkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxufSIsIi8qKlxuICogRmlsZSBza2lwLWxpbmstZm9jdXMtZml4LmpzLlxuICpcbiAqIEhlbHBzIHdpdGggYWNjZXNzaWJpbGl0eSBmb3Iga2V5Ym9hcmQgb25seSB1c2Vycy5cbiAqXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxuICovXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgaXNXZWJraXQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ3dlYmtpdCcgKSA+IC0xLFxuXHRcdGlzT3BlcmEgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdvcGVyYScgKSAgPiAtMSxcblx0XHRpc0llICAgICA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnbXNpZScgKSAgID4gLTE7XG5cblx0aWYgKCAoIGlzV2Via2l0IHx8IGlzT3BlcmEgfHwgaXNJZSApICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoIDEgKSxcblx0XHRcdFx0ZWxlbWVudDtcblxuXHRcdFx0aWYgKCAhICggL15bQS16MC05Xy1dKyQvLnRlc3QoIGlkICkgKSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdGlmICggZWxlbWVudCApIHtcblx0XHRcdFx0aWYgKCAhICggL14oPzphfHNlbGVjdHxpbnB1dHxidXR0b258dGV4dGFyZWEpJC9pLnRlc3QoIGVsZW1lbnQudGFnTmFtZSApICkgKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC50YWJJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxlbWVudC5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlICk7XG5cdH1cbn0pKCk7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vRHJhd2VyJztcbmltcG9ydCBIZWFkZXJDbGFzc0NvbnRyb2xsZXIgZnJvbSAnLi9BcHBMYXlvdXQvSGVhZGVyQ2xhc3NDb250cm9sbGVyJztcbmltcG9ydCBIZWFkZXJFc2NhcGVyIGZyb20gJy4vQXBwTGF5b3V0L0hlYWRlckVzY2FwZXInO1xuaW1wb3J0IENvbnRlbnRTcGFjZXIgZnJvbSAnLi9BcHBMYXlvdXQvQ29udGVudFNwYWNlcic7XG5pbXBvcnQgJy4vc2tpcC1saW5rLWZvY3VzLWZpeCc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cdCQoXCJbZGF0YS1kcmF3ZXJdXCIpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRuZXcgRHJhd2VyKCQodGhpcykpO1xuXHR9KTtcbn0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG5cdGxldCAkdG9wbGV2ZWxNZW51SXRlbXMgPSAkKCcucHJpbWFyeS1tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLCAucHJpbWFyeS1tZW51IC5wYWdlX2l0ZW1faGFzX2NoaWxkcmVuJyk7XG5cdC8vIEFkZCBkcm9wZG93biB0b2dnbGUgdGhhdCBkaXNwbGF5cyBjaGlsZCBtZW51IGl0ZW1zLlxuXHRsZXQgJGRyb3Bkb3duVG9nZ2xlID0gJCggJzxidXR0b24gLz4nLCB7XG5cdFx0J2NsYXNzJzogJ2Ryb3Bkb3duLXRvZ2dsZScsXG5cdFx0J2FyaWEtZXhwYW5kZWQnOiBmYWxzZVxuXHR9ICkuYXBwZW5kKCAkKCAnPHNwYW4gLz4nLCB7XG5cdFx0J2NsYXNzJzogJ3NjcmVlbi1yZWFkZXItdGV4dCcsXG5cdFx0dGV4dDogc2NyZWVuUmVhZGVyVGV4dC5leHBhbmRcblx0fSApICk7XG5cblx0JHRvcGxldmVsTWVudUl0ZW1zLmNoaWxkcmVuKCdhJykuYWZ0ZXIoICRkcm9wZG93blRvZ2dsZSApO1xuXG5cblx0JChcIi5wcmltYXJ5LW1lbnUgLnN1Yi1tZW51LCAucHJpbWFyeS1tZW51IC5jaGlsZHJlblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdH0pO1xuXG5cdCR0b3BsZXZlbE1lbnVJdGVtcy5maW5kKCcuZHJvcGRvd24tdG9nZ2xlJykub24oICdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGxldCBzZWxmID0gJCh0aGlzKTtcblx0XHRsZXQgZXhwYW5kZWQgPSAnJztcblx0XHRpZiggJ3RydWUnID09IHNlbGYuYXR0cignYXJpYS1leHBhbmRlZCcpICApIHtcblx0XHRcdGV4cGFuZGVkID0gJ2ZhbHNlJztcblx0XHRcdHNlbGYuZmluZCgnLnNjcmVlbi1yZWFkZXItdGV4dCcpLnRleHQoc2NyZWVuUmVhZGVyVGV4dC5leHBhbmQpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGV4cGFuZGVkID0gJ3RydWUnO1xuXHRcdFx0c2VsZi5maW5kKCcuc2NyZWVuLXJlYWRlci10ZXh0JykudGV4dChzY3JlZW5SZWFkZXJUZXh0LmNvbGxhcHNlKTtcblx0XHR9XG5cdFx0c2VsZi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQpO1xuXG5cdFx0c2VsZi5zaWJsaW5ncygnLnN1Yi1tZW51LC5jaGlsZHJlbicpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBleHBhbmRlZCk7XG5cdH0pXG5cbn0pO1xuXG5cbiQoZnVuY3Rpb24oKSB7XG5cdGxldCAkd2luZG93ID0gJCh3aW5kb3cpO1xuXHRsZXQgJGFwcExheW91dCA9ICQoXCIuYXBwLWxheW91dFwiKTtcblx0bGV0ICRuYXZiYXIgPSAkKCcubmF2YmFyJyk7XG5cdCR3aW5kb3cub24oICdsb2FkIHJlc2l6ZScsICgpID0+IHtcblx0XHQkYXBwTGF5b3V0LmZpbmQoXCIuYXBwLWxheW91dF9faGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwiYXBwLWxheW91dF9faGVhZGVyLS1zdGF0aWNcIik7XG5cdH0gKTtcblx0bmV3IEhlYWRlckNsYXNzQ29udHJvbGxlciggJGFwcExheW91dCwgXCJhcHAtbGF5b3V0X19oZWFkZXItLWZpeGVkXCIsIDQ2ICk7XG5cdG5ldyBIZWFkZXJFc2NhcGVyKCAkYXBwTGF5b3V0LCBcImFwcC1sYXlvdXRfX2hlYWRlci0tZXNjYXBlXCIsIDEyOCApO1xuXHRuZXcgQ29udGVudFNwYWNlciggJGFwcExheW91dCApO1xuXG5cdGZ1bmN0aW9uIHNldE9wYXF1ZSAoKSB7XG5cdFx0aWYoICR3aW5kb3cuc2Nyb2xsVG9wKCkgPiA2NCApIHtcblx0XHRcdCRuYXZiYXIuYWRkQ2xhc3MoICduYXZiYXItLW9wYXF1ZScgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkbmF2YmFyLnJlbW92ZUNsYXNzKCAnbmF2YmFyLS1vcGFxdWUnICk7XG5cdFx0fVxuXHR9XG5cdHNldE9wYXF1ZSgpO1xuXHQkd2luZG93Lm9uKCAnbG9hZCBzY3JvbGwgcmVzaXplJywgXy50aHJvdHRsZShmdW5jdGlvbigpe1xuXHRcdHNldE9wYXF1ZSgpXG5cdH0sIDEwICkgKTtcblxufSk7XG5cbiJdfQ==

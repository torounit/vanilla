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

	var $toplevelMenuItems = (0, _jquery2.default)('.menu-item-has-children, .page_item_has_children');
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

	var $appLayout = (0, _jquery2.default)(".app-layout");
	(0, _jquery2.default)(window).on('load resize', function () {
		$appLayout.removeClass("app-layout--disable");
	});
	new _HeaderClassController2.default($appLayout, "app-layout__header--fixed", 46);
	new _HeaderEscaper2.default($appLayout, "app-layout__header--escape", 150);
	new _ContentSpacer2.default($appLayout);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./AppLayout/ContentSpacer":1,"./AppLayout/HeaderClassController":2,"./AppLayout/HeaderEscaper":3,"./Drawer":4,"./skip-link-focus-fix":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvQ29udGVudFNwYWNlci5qcyIsImFzc2V0cy9zY3JpcHRzL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlci5qcyIsImFzc2V0cy9zY3JpcHRzL0RyYXdlci5qcyIsImFzc2V0cy9zY3JpcHRzL3NraXAtbGluay1mb2N1cy1maXguanMiLCJhc3NldHMvc2NyaXB0cy90aGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztJQUVxQixhO0FBQ3BCOzs7O0FBSUEsd0JBQWEsR0FBYixFQUFtQjtBQUFBOztBQUNsQixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsTUFBSSxTQUFTLElBQUksSUFBSixDQUFTLG1CQUFULENBQWI7QUFDQSxNQUFJLFVBQVUsSUFBSSxJQUFKLENBQVMsbUJBQVQsQ0FBZDs7QUFFQSxPQUFLLE9BQUwsR0FBZSxzQkFBRyxNQUFILENBQWY7QUFDQSxPQUFLLFFBQUwsR0FBZ0Isc0JBQUcsT0FBSCxDQUFoQjtBQUNBLE9BQUssRUFBTDtBQUNBOzs7O3VCQUVJO0FBQUE7O0FBQ0oseUJBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYyxhQUFkLEVBQTZCLFlBQU07QUFDbEMsVUFBSyxVQUFMO0FBQ0EsSUFGRDtBQUdBOzs7K0JBRVk7QUFDWixRQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEVBQUMsWUFBWSxLQUFLLGVBQUwsS0FBeUIsSUFBdEMsRUFBbEI7QUFDQTs7O29DQUVpQjs7QUFFakIsVUFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQVA7QUFDQTs7Ozs7O2tCQTVCbUIsYTs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7Ozs7Ozs7SUFHcUIsd0I7QUFDcEI7Ozs7OztBQU1BLG1DQUFhLEdBQWIsRUFBa0IsV0FBbEIsRUFBK0IsU0FBL0IsRUFBMkM7QUFBQTs7QUFDMUMsT0FBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EsT0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsT0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLE1BQUksU0FBUyxJQUFJLElBQUosQ0FBUyxtQkFBVCxDQUFiO0FBQ0EsTUFBSSxVQUFVLElBQUksSUFBSixDQUFTLHdCQUFULENBQWQ7QUFDQSxPQUFLLE9BQUwsR0FBZSxzQkFBRyxNQUFILENBQWY7QUFDQSxNQUFLLFdBQVcsV0FBVyxRQUEzQixFQUFzQztBQUNyQyxRQUFLLFFBQUwsR0FBZ0Isc0JBQUcsT0FBSCxDQUFoQjtBQUNBLEdBRkQsTUFHSztBQUNKLFFBQUssUUFBTCxHQUFnQixzQkFBRyxNQUFILENBQWhCO0FBQ0E7O0FBRUQsT0FBSyxVQUFMO0FBQ0EsT0FBSyxFQUFMO0FBQ0E7Ozs7K0JBRVk7QUFDWjtBQUNBOzs7dUJBRUk7QUFDSixRQUFLLFFBQUwsQ0FBYyxFQUFkLENBQWtCLGVBQWxCLEVBQW1DLHFCQUFFLFFBQUYsQ0FBVyxZQUFVO0FBQ3ZELFNBQUssV0FBTDtBQUNBLElBRmtDLEVBRWhDLENBRmdDLEVBRTVCLElBRjRCLENBRXZCLElBRnVCLENBQW5DO0FBR0E7OztnQ0FFYTtBQUNiLE9BQUksS0FBSyxrQkFBTCxFQUFKLEVBQWdDO0FBQy9CLFNBQUssT0FBTCxDQUFhLFFBQWIsQ0FBdUIsS0FBSyxXQUE1QjtBQUNBLElBRkQsTUFHSztBQUNKLFNBQUssT0FBTCxDQUFhLFdBQWIsQ0FBMEIsS0FBSyxXQUEvQjtBQUNBO0FBQ0Q7OztpQ0FFYztBQUNkLE9BQUksT0FBTyxLQUFLLFNBQVosSUFBMEIsVUFBOUIsRUFBMkM7QUFDMUMsV0FBTyxLQUFLLFNBQUwsRUFBUDtBQUNBLElBRkQsTUFHSztBQUNKLFdBQU8sS0FBSyxTQUFaO0FBQ0E7QUFDRDs7O3VDQUVvQjtBQUNwQixPQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsU0FBZCxFQUFoQjtBQUNBLFVBQVMsWUFBWSxLQUFLLFlBQUwsRUFBckI7QUFFQTs7Ozs7O2tCQXpEbUIsd0I7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUljO0FBQ1osUUFBSyxTQUFMLEdBQWlCLEtBQUssaUJBQUwsRUFBakI7QUFDQTs7O3NDQUVtQjtBQUNuQixVQUFPLEtBQUssUUFBTCxDQUFjLFNBQWQsRUFBUDtBQUNBOzs7Z0NBRWE7QUFDYixPQUFJLGFBQWEsS0FBSyxpQkFBTCxFQUFqQjs7QUFFQSxPQUFJLENBQUUsS0FBSyxrQkFBTCxFQUFOLEVBQWtDO0FBQ2pDLFNBQUssT0FBTCxDQUFhLFdBQWIsQ0FBMEIsS0FBSyxXQUEvQjtBQUNBLFNBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsYUFBbEIsRUFBaUMsT0FBakM7QUFDQSxJQUhELE1BSUssSUFBSSxLQUFLLEdBQUwsQ0FBVSxhQUFhLEtBQUssU0FBNUIsSUFBMEMsRUFBOUMsRUFBbUQ7QUFDdkQsUUFBSyxhQUFhLEtBQUssU0FBdkIsRUFBbUM7QUFDbEMsVUFBSyxPQUFMLENBQWEsUUFBYixDQUF1QixLQUFLLFdBQTVCO0FBQ0EsVUFBSyxPQUFMLENBQWEsSUFBYixDQUFrQixhQUFsQixFQUFpQyxNQUFqQztBQUNBLEtBSEQsTUFJSztBQUNKLFVBQUssT0FBTCxDQUFhLFdBQWIsQ0FBMEIsS0FBSyxXQUEvQjtBQUNBLFVBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsYUFBbEIsRUFBaUMsT0FBakM7QUFDQTtBQUNEOztBQUVELFFBQUssU0FBTCxHQUFpQixVQUFqQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkY7Ozs7Ozs7O0lBRXFCLE07QUFFcEIsaUJBQVksR0FBWixFQUFpQjtBQUFBOztBQUNoQixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsT0FBSyxVQUFMLEdBQWtCLHNCQUFFLElBQUksSUFBSixDQUFTLDJCQUFULENBQUYsQ0FBbEI7QUFDQSxPQUFLLEVBQUwsR0FBVSxJQUFJLElBQUosQ0FBUyxJQUFULENBQVY7QUFDQSxPQUFLLFdBQUwsR0FBbUIsc0JBQUcscUJBQW1CLEtBQUssRUFBeEIsR0FBMkIsS0FBOUIsQ0FBbkI7QUFDQSxPQUFLLFVBQUwsQ0FBZ0IsUUFBaEIsQ0FBeUIsa0JBQXpCO0FBQ0EsT0FBSyxFQUFMO0FBRUE7Ozs7dUJBRUk7QUFBQTs7QUFDSixRQUFLLFdBQUwsQ0FBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQixDQUE3QjtBQUNBLFFBQUssR0FBTCxDQUFTLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBckI7QUFDQSxRQUFLLEdBQUwsQ0FBUyxRQUFULEdBQW9CLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVMsS0FBVCxFQUFlO0FBQzlDLFVBQU0sZUFBTjtBQUNBLElBRkQ7O0FBSUEseUJBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQUMsS0FBRCxFQUFXO0FBQ2xDLFFBQUksTUFBTSxPQUFOLElBQWlCLEVBQXJCLEVBQXlCO0FBQ3hCLFdBQUssS0FBTDtBQUNBO0FBQ0QsSUFKRDs7QUFNQSxRQUFLLEdBQUwsQ0FBUyxFQUFULENBQVksZUFBWixFQUE2QixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBN0I7QUFDQTs7O2tDQUVlO0FBQ2YsUUFBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixhQUFyQjtBQUNBOzs7eUJBRU0sSyxFQUFPO0FBQ2IsU0FBTSxjQUFOO0FBQ0EsT0FBSyxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsZUFBZCxLQUFrQyxPQUF2QyxFQUFpRDtBQUNoRCxTQUFLLElBQUw7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLLEtBQUw7QUFDQTtBQUNEOzs7eUJBRU07QUFDTixRQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLGFBQWxCO0FBQ0EsUUFBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGVBQWQsRUFBOEIsTUFBOUI7QUFDQSxRQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsYUFBZCxFQUE0QixPQUE1QjtBQUNBLFFBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixlQUF0QixFQUFzQyxNQUF0QztBQUNBLFFBQUssVUFBTCxDQUFnQixRQUFoQixDQUF5QixnQkFBekI7QUFHQTs7OzBCQUVPO0FBQ1AsUUFBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixhQUFsQjtBQUNBLFFBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxlQUFkLEVBQThCLE9BQTlCO0FBQ0EsUUFBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGFBQWQsRUFBNEIsTUFBNUI7QUFDQSxRQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsZUFBdEIsRUFBc0MsT0FBdEM7QUFDQSxRQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsZ0JBQTVCO0FBQ0E7Ozt5QkFFYTtBQUNiLHlCQUFFLGVBQUYsRUFBbUIsSUFBbkIsQ0FBd0IsWUFBVTtBQUNqQyxRQUFJLE1BQUosQ0FBVyxzQkFBRSxJQUFGLENBQVg7QUFDQSxJQUZEO0FBR0E7Ozs7OztrQkEvRG1CLE07Ozs7Ozs7QUNGckI7Ozs7Ozs7QUFPQSxDQUFFLFlBQVc7QUFDWixLQUFJLFdBQVcsVUFBVSxTQUFWLENBQW9CLFdBQXBCLEdBQWtDLE9BQWxDLENBQTJDLFFBQTNDLElBQXdELENBQUMsQ0FBeEU7QUFBQSxLQUNDLFVBQVcsVUFBVSxTQUFWLENBQW9CLFdBQXBCLEdBQWtDLE9BQWxDLENBQTJDLE9BQTNDLElBQXdELENBQUMsQ0FEckU7QUFBQSxLQUVDLE9BQVcsVUFBVSxTQUFWLENBQW9CLFdBQXBCLEdBQWtDLE9BQWxDLENBQTJDLE1BQTNDLElBQXdELENBQUMsQ0FGckU7O0FBSUEsS0FBSyxDQUFFLFlBQVksT0FBWixJQUF1QixJQUF6QixLQUFtQyxTQUFTLGNBQTVDLElBQThELE9BQU8sZ0JBQTFFLEVBQTZGO0FBQzVGLFNBQU8sZ0JBQVAsQ0FBeUIsWUFBekIsRUFBdUMsWUFBVztBQUNqRCxPQUFJLEtBQUssU0FBUyxJQUFULENBQWMsU0FBZCxDQUF5QixDQUF6QixDQUFUO0FBQUEsT0FDQyxPQUREOztBQUdBLE9BQUssQ0FBSSxnQkFBZ0IsSUFBaEIsQ0FBc0IsRUFBdEIsQ0FBVCxFQUF3QztBQUN2QztBQUNBOztBQUVELGFBQVUsU0FBUyxjQUFULENBQXlCLEVBQXpCLENBQVY7O0FBRUEsT0FBSyxPQUFMLEVBQWU7QUFDZCxRQUFLLENBQUksd0NBQXdDLElBQXhDLENBQThDLFFBQVEsT0FBdEQsQ0FBVCxFQUE2RTtBQUM1RSxhQUFRLFFBQVIsR0FBbUIsQ0FBQyxDQUFwQjtBQUNBOztBQUVELFlBQVEsS0FBUjtBQUNBO0FBQ0QsR0FqQkQsRUFpQkcsS0FqQkg7QUFrQkE7QUFDRCxDQXpCRDs7Ozs7O0FDUEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsc0JBQUUsWUFBVzs7QUFFWix1QkFBRSxlQUFGLEVBQW1CLElBQW5CLENBQXdCLFlBQVU7QUFDakMsdUJBQVcsc0JBQUUsSUFBRixDQUFYO0FBQ0EsRUFGRDtBQUlBLENBTkQ7O0FBU0Esc0JBQUUsWUFBVzs7QUFFWixLQUFJLHFCQUFxQixzQkFBRSxrREFBRixDQUF6QjtBQUNBO0FBQ0EsS0FBSSxrQkFBa0Isc0JBQUcsWUFBSCxFQUFpQjtBQUN0QyxXQUFTLGlCQUQ2QjtBQUV0QyxtQkFBaUI7QUFGcUIsRUFBakIsRUFHbEIsTUFIa0IsQ0FHVixzQkFBRyxVQUFILEVBQWU7QUFDMUIsV0FBUyxvQkFEaUI7QUFFMUIsUUFBTSxpQkFBaUI7QUFGRyxFQUFmLENBSFUsQ0FBdEI7O0FBUUEsb0JBQW1CLFFBQW5CLENBQTRCLEdBQTVCLEVBQWlDLEtBQWpDLENBQXdDLGVBQXhDOztBQUdBLHVCQUFFLGtEQUFGLEVBQXNELElBQXRELENBQTJELFlBQVk7QUFDdEUsd0JBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxlQUFiLEVBQTZCLE9BQTdCO0FBQ0EsRUFGRDs7QUFJQSxvQkFBbUIsSUFBbkIsQ0FBd0Isa0JBQXhCLEVBQTRDLEVBQTVDLENBQWdELE9BQWhELEVBQXlELFVBQVUsS0FBVixFQUFpQjtBQUN6RSxNQUFJLE9BQU8sc0JBQUUsSUFBRixDQUFYO0FBQ0EsTUFBSSxXQUFXLEVBQWY7QUFDQSxNQUFJLFVBQVUsS0FBSyxJQUFMLENBQVUsZUFBVixDQUFkLEVBQTRDO0FBQzNDLGNBQVcsT0FBWDtBQUNBLFFBQUssSUFBTCxDQUFVLHFCQUFWLEVBQWlDLElBQWpDLENBQXNDLGlCQUFpQixNQUF2RDtBQUNBLEdBSEQsTUFJSztBQUNKLGNBQVcsTUFBWDtBQUNBLFFBQUssSUFBTCxDQUFVLHFCQUFWLEVBQWlDLElBQWpDLENBQXNDLGlCQUFpQixRQUF2RDtBQUNBO0FBQ0QsT0FBSyxJQUFMLENBQVUsZUFBVixFQUEyQixRQUEzQjs7QUFFQSxPQUFLLFFBQUwsQ0FBYyxxQkFBZCxFQUFxQyxJQUFyQyxDQUEwQyxlQUExQyxFQUEyRCxRQUEzRDtBQUNBLEVBZEQ7QUFnQkEsQ0FuQ0Q7O0FBc0NBLHNCQUFFLFlBQVc7O0FBRVosS0FBSSxhQUFhLHNCQUFFLGFBQUYsQ0FBakI7QUFDQSx1QkFBRSxNQUFGLEVBQVUsRUFBVixDQUFjLGFBQWQsRUFBNkIsWUFBTTtBQUNsQyxhQUFXLFdBQVgsQ0FBdUIscUJBQXZCO0FBQ0EsRUFGRDtBQUdBLHFDQUEyQixVQUEzQixFQUF1QywyQkFBdkMsRUFBb0UsRUFBcEU7QUFDQSw2QkFBbUIsVUFBbkIsRUFBK0IsNEJBQS9CLEVBQTZELEdBQTdEO0FBQ0EsNkJBQW1CLFVBQW5CO0FBRUEsQ0FWRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50U3BhY2VyIHtcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkZWwgKSB7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0bGV0IGhlYWRlciA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LWhlYWRlcicpO1xuXHRcdGxldCBjb250ZW50ID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtc3BhY2VyJyk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKCBoZWFkZXIgKTtcblx0XHR0aGlzLiRjb250ZW50ID0gJCggY29udGVudCApO1xuXHRcdHRoaXMub24oKTtcblx0fVxuXG5cdG9uKCkge1xuXHRcdCQod2luZG93KS5vbiggJ2xvYWQgcmVzaXplJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRQYWRkaW5nKClcblx0XHR9ICk7XG5cdH1cblxuXHRzZXRQYWRkaW5nKCkge1xuXHRcdHRoaXMuJGNvbnRlbnQuY3NzKHtwYWRkaW5nVG9wOiB0aGlzLmdldEhlYWRlckhlaWdodCgpICsgJ3B4J30pO1xuXHR9XG5cblx0Z2V0SGVhZGVySGVpZ2h0KCkge1xuXG5cdFx0cmV0dXJuIHRoaXMuJGhlYWRlci5oZWlnaHQoKTtcblx0fVxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBMYXlvdXRDbGFzc0NvbnRyb2xsZXIge1xuXHQvKipcblx0ICpcblx0ICogQHBhcmFtICRlbFxuXHQgKiBAcGFyYW0gY2xhc3NTdHJpbmdcblx0ICogQHBhcmFtIHRocmVzaG9sZCDjgq/jg6njgrnjga7oqK3lrprjgpLjgZnjgovjgZ/jgoHjga7jgrnjgq/jg63jg7zjg6vkvY3nva5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCAkZWwsIGNsYXNzU3RyaW5nLCB0aHJlc2hvbGQgKSB7XG5cdFx0dGhpcy5jbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nO1xuXHRcdHRoaXMudGhyZXNob2xkID0gdGhyZXNob2xkO1xuXHRcdHRoaXMuJGVsID0gJGVsO1xuXHRcdGxldCBoZWFkZXIgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1oZWFkZXInKTtcblx0XHRsZXQgY29udGVudCA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LXNjcm9sbC1hcmVhJyk7XG5cdFx0dGhpcy4kaGVhZGVyID0gJCggaGVhZGVyICk7XG5cdFx0aWYgKCBjb250ZW50ICYmIGNvbnRlbnQgIT0gJ3dpbmRvdycgKSB7XG5cdFx0XHR0aGlzLiRjb250ZW50ID0gJCggY29udGVudCApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuJGNvbnRlbnQgPSAkKCB3aW5kb3cgKTtcblx0XHR9XG5cblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0XHR0aGlzLm9uKCk7XG5cdH1cblxuXHRpbml0aWFsaXplKCkge1xuXHRcdC8vZm9yIG92ZXJyaWRlXG5cdH1cblxuXHRvbigpIHtcblx0XHR0aGlzLiRjb250ZW50Lm9uKCAnc2Nyb2xsIHJlc2l6ZScsIF8udGhyb3R0bGUoZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMudG9nZ2xlQ2xhc3MoKTtcblx0XHR9LCAxICkuYmluZCh0aGlzKSApO1xuXHR9XG5cblx0dG9nZ2xlQ2xhc3MoKSB7XG5cdFx0aWYoIHRoaXMuaXNFeGNlZWRzVGhyZXNob2xkKCkgKSB7XG5cdFx0XHR0aGlzLiRoZWFkZXIuYWRkQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHR9XG5cdH1cblxuXHRnZXRUaHJlc2hvbGQoKSB7XG5cdFx0aWYoIHR5cGVvZiB0aGlzLnRocmVzaG9sZCAgPT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhyZXNob2xkKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhyZXNob2xkO1xuXHRcdH1cblx0fVxuXG5cdGlzRXhjZWVkc1RocmVzaG9sZCgpIHtcblx0XHRsZXQgc2Nyb2xsVG9wID0gdGhpcy4kY29udGVudC5zY3JvbGxUb3AoKTtcblx0XHRyZXR1cm4gKCBzY3JvbGxUb3AgPiB0aGlzLmdldFRocmVzaG9sZCgpICk7XG5cblx0fVxufVxuXG4iLCJpbXBvcnQgSGVhZGVyQ2xhc3NDb250cm9sbGVyIGZyb20gJy4vSGVhZGVyQ2xhc3NDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBIZWFkZXJDbGFzc0NvbnRyb2xsZXIge1xuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0dGhpcy5zY3JvbGxQb3MgPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG5cdH1cblxuXHRnZXRTY3JvbGxQb3NpdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy4kY29udGVudC5zY3JvbGxUb3AoKTtcblx0fVxuXG5cdHRvZ2dsZUNsYXNzKCkge1xuXHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuXG5cdFx0aWYoICEgdGhpcy5pc0V4Y2VlZHNUaHJlc2hvbGQoKSApIHtcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYoIE1hdGguYWJzKCBjdXJyZW50UG9zIC0gdGhpcy5zY3JvbGxQb3MgKSA+IDMwICkge1xuXHRcdFx0aWYgKCBjdXJyZW50UG9zID4gdGhpcy5zY3JvbGxQb3MgKSB7XG5cdFx0XHRcdHRoaXMuJGhlYWRlci5hZGRDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0XHR0aGlzLiRoZWFkZXIuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFBvcyA9IGN1cnJlbnRQb3M7XG5cdH1cblxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2VyIHtcblxuXHRjb25zdHJ1Y3RvcigkZWwpIHtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHR0aGlzLiRjb250YWluZXIgPSAkKCRlbC5kYXRhKFwiZHJhd2VyLWNvbnRhaW5lci1zZWxlY3RvclwiKSk7XG5cdFx0dGhpcy5pZCA9ICRlbC5hdHRyKCdpZCcpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIgPSAkKCAnW2FyaWEtY29udHJvbHM9XCInK3RoaXMuaWQrJ1wiIF0nICk7XG5cdFx0dGhpcy4kY29udGFpbmVyLmFkZENsYXNzKFwiZHJhd2VyLWNvbnRhaW5lclwiKTtcblx0XHR0aGlzLm9uKCk7XG5cblx0fVxuXG5cdG9uKCkge1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIub24oJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kZWwub24oJ2NsaWNrJywgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLiRlbC5jaGlsZHJlbigpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pXG5cblx0XHQkKGRvY3VtZW50KS5vbigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5rZXlDb2RlID09IDI3KSB7XG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy4kZWwub24oJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25lbmQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHR0cmFuc2l0aW9uZW5kKCkge1xuXHRcdHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdpcy1hbmltYXRlZCcpO1xuXHR9XG5cblx0dG9nZ2xlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoIHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PSBcImZhbHNlXCIgKSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kZWwuYWRkQ2xhc3MoJ2lzLWFuaW1hdGVkJyk7XG5cdFx0dGhpcy4kZWwuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtaGlkZGVuJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyhcImlzLWRyYXdlci1vcGVuXCIpO1xuXG5cblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJGVsLmFkZENsYXNzKCdpcy1hbmltYXRlZCcpO1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0dGhpcy4kZWwuYXR0cignYXJpYS1oaWRkZW4nLFwidHJ1ZVwiKTtcblx0XHR0aGlzLiRjb250cm9sbGVyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0dGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiaXMtZHJhd2VyLW9wZW5cIik7XG5cdH1cblxuXHRzdGF0aWMgaW5pdCgpIHtcblx0XHQkKFwiW2RhdGEtZHJhd2VyXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRuZXcgRHJhd2VyKCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG59IiwiLyoqXG4gKiBGaWxlIHNraXAtbGluay1mb2N1cy1maXguanMuXG4gKlxuICogSGVscHMgd2l0aCBhY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZCBvbmx5IHVzZXJzLlxuICpcbiAqIExlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0LmlvL3ZXZHIyXG4gKi9cbiggZnVuY3Rpb24oKSB7XG5cdHZhciBpc1dlYmtpdCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnd2Via2l0JyApID4gLTEsXG5cdFx0aXNPcGVyYSAgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ29wZXJhJyApICA+IC0xLFxuXHRcdGlzSWUgICAgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdtc2llJyApICAgPiAtMTtcblxuXHRpZiAoICggaXNXZWJraXQgfHwgaXNPcGVyYSB8fCBpc0llICkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZyggMSApLFxuXHRcdFx0XHRlbGVtZW50O1xuXG5cdFx0XHRpZiAoICEgKCAvXltBLXowLTlfLV0rJC8udGVzdCggaWQgKSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblxuXHRcdFx0aWYgKCBlbGVtZW50ICkge1xuXHRcdFx0XHRpZiAoICEgKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kudGVzdCggZWxlbWVudC50YWdOYW1lICkgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblx0fVxufSkoKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vRHJhd2VyJztcbmltcG9ydCBIZWFkZXJDbGFzc0NvbnRyb2xsZXIgZnJvbSAnLi9BcHBMYXlvdXQvSGVhZGVyQ2xhc3NDb250cm9sbGVyJztcbmltcG9ydCBIZWFkZXJFc2NhcGVyIGZyb20gJy4vQXBwTGF5b3V0L0hlYWRlckVzY2FwZXInO1xuaW1wb3J0IENvbnRlbnRTcGFjZXIgZnJvbSAnLi9BcHBMYXlvdXQvQ29udGVudFNwYWNlcic7XG5pbXBvcnQgJy4vc2tpcC1saW5rLWZvY3VzLWZpeCc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cblx0JChcIltkYXRhLWRyYXdlcl1cIikuZWFjaChmdW5jdGlvbigpe1xuXHRcdG5ldyBEcmF3ZXIoJCh0aGlzKSk7XG5cdH0pO1xuXG59KTtcblxuXG4kKGZ1bmN0aW9uKCkge1xuXG5cdGxldCAkdG9wbGV2ZWxNZW51SXRlbXMgPSAkKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiwgLnBhZ2VfaXRlbV9oYXNfY2hpbGRyZW4nKTtcblx0Ly8gQWRkIGRyb3Bkb3duIHRvZ2dsZSB0aGF0IGRpc3BsYXlzIGNoaWxkIG1lbnUgaXRlbXMuXG5cdGxldCAkZHJvcGRvd25Ub2dnbGUgPSAkKCAnPGJ1dHRvbiAvPicsIHtcblx0XHQnY2xhc3MnOiAnZHJvcGRvd24tdG9nZ2xlJyxcblx0XHQnYXJpYS1leHBhbmRlZCc6IGZhbHNlXG5cdH0gKS5hcHBlbmQoICQoICc8c3BhbiAvPicsIHtcblx0XHQnY2xhc3MnOiAnc2NyZWVuLXJlYWRlci10ZXh0Jyxcblx0XHR0ZXh0OiBzY3JlZW5SZWFkZXJUZXh0LmV4cGFuZFxuXHR9ICkgKTtcblxuXHQkdG9wbGV2ZWxNZW51SXRlbXMuY2hpbGRyZW4oJ2EnKS5hZnRlciggJGRyb3Bkb3duVG9nZ2xlICk7XG5cblxuXHQkKFwiLnByaW1hcnktbWVudSAuc3ViLW1lbnUsIC5wcmltYXJ5LW1lbnUgLmNoaWxkcmVuXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdCQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcsXCJmYWxzZVwiKTtcblx0fSk7XG5cblx0JHRvcGxldmVsTWVudUl0ZW1zLmZpbmQoJy5kcm9wZG93bi10b2dnbGUnKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0bGV0IHNlbGYgPSAkKHRoaXMpO1xuXHRcdGxldCBleHBhbmRlZCA9ICcnO1xuXHRcdGlmKCAndHJ1ZScgPT0gc2VsZi5hdHRyKCdhcmlhLWV4cGFuZGVkJykgICkge1xuXHRcdFx0ZXhwYW5kZWQgPSAnZmFsc2UnO1xuXHRcdFx0c2VsZi5maW5kKCcuc2NyZWVuLXJlYWRlci10ZXh0JykudGV4dChzY3JlZW5SZWFkZXJUZXh0LmV4cGFuZCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZXhwYW5kZWQgPSAndHJ1ZSc7XG5cdFx0XHRzZWxmLmZpbmQoJy5zY3JlZW4tcmVhZGVyLXRleHQnKS50ZXh0KHNjcmVlblJlYWRlclRleHQuY29sbGFwc2UpO1xuXHRcdH1cblx0XHRzZWxmLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBleHBhbmRlZCk7XG5cblx0XHRzZWxmLnNpYmxpbmdzKCcuc3ViLW1lbnUsLmNoaWxkcmVuJykuYXR0cignYXJpYS1leHBhbmRlZCcsIGV4cGFuZGVkKTtcblx0fSlcblxufSk7XG5cblxuJChmdW5jdGlvbigpIHtcblxuXHRsZXQgJGFwcExheW91dCA9ICQoXCIuYXBwLWxheW91dFwiKTtcblx0JCh3aW5kb3cpLm9uKCAnbG9hZCByZXNpemUnLCAoKSA9PiB7XG5cdFx0JGFwcExheW91dC5yZW1vdmVDbGFzcyhcImFwcC1sYXlvdXQtLWRpc2FibGVcIik7XG5cdH0gKTtcblx0bmV3IEhlYWRlckNsYXNzQ29udHJvbGxlciggJGFwcExheW91dCwgXCJhcHAtbGF5b3V0X19oZWFkZXItLWZpeGVkXCIsIDQ2ICk7XG5cdG5ldyBIZWFkZXJFc2NhcGVyKCAkYXBwTGF5b3V0LCBcImFwcC1sYXlvdXRfX2hlYWRlci0tZXNjYXBlXCIsIDE1MCApO1xuXHRuZXcgQ29udGVudFNwYWNlciggJGFwcExheW91dCApO1xuXG59KTtcblxuIl19

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
	var $appLayout = (0, _jquery2.default)(".app-layout");
	(0, _jquery2.default)(window).on('load resize', function () {
		$appLayout.find(".app-layout__header").removeClass("app-layout__header--static");
	});
	new _HeaderClassController2.default($appLayout, "app-layout__header--fixed", 32);
	new _HeaderEscaper2.default($appLayout, "app-layout__header--escape", 64);
	new _ContentSpacer2.default($appLayout);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./AppLayout/ContentSpacer":1,"./AppLayout/HeaderClassController":2,"./AppLayout/HeaderEscaper":3,"./Drawer":4,"./skip-link-focus-fix":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvQ29udGVudFNwYWNlci5qcyIsImFzc2V0cy9zY3JpcHRzL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlci5qcyIsImFzc2V0cy9zY3JpcHRzL0RyYXdlci5qcyIsImFzc2V0cy9zY3JpcHRzL3NraXAtbGluay1mb2N1cy1maXguanMiLCJhc3NldHMvc2NyaXB0cy90aGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztJQUVxQixhO0FBQ3BCOzs7O0FBSUEsd0JBQWEsR0FBYixFQUFtQjtBQUFBOztBQUNsQixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsTUFBSSxTQUFTLElBQUksSUFBSixDQUFTLG1CQUFULENBQWI7QUFDQSxNQUFJLFVBQVUsSUFBSSxJQUFKLENBQVMsbUJBQVQsQ0FBZDs7QUFFQSxPQUFLLE9BQUwsR0FBZSxzQkFBRyxNQUFILENBQWY7QUFDQSxPQUFLLFFBQUwsR0FBZ0Isc0JBQUcsT0FBSCxDQUFoQjtBQUNBLE9BQUssRUFBTDtBQUNBOzs7O3VCQUVJO0FBQUE7O0FBQ0oseUJBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYyxhQUFkLEVBQTZCLFlBQU07QUFDbEMsVUFBSyxVQUFMO0FBQ0EsSUFGRDtBQUdBOzs7K0JBRVk7QUFDWixRQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWtCLEVBQUMsWUFBWSxLQUFLLGVBQUwsS0FBeUIsSUFBdEMsRUFBbEI7QUFDQTs7O29DQUVpQjs7QUFFakIsVUFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQVA7QUFDQTs7Ozs7O2tCQTVCbUIsYTs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7Ozs7Ozs7SUFHcUIsd0I7QUFDcEI7Ozs7OztBQU1BLG1DQUFh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RCxPQUFoRCxFQUF5RCxVQUFVLEtBQVYsRUFBaUI7QUFDekUsTUFBSSxPQUFPLHNCQUFFLElBQUYsQ0FBWDtBQUNBLE1BQUksV0FBVyxFQUFmO0FBQ0EsTUFBSSxVQUFVLEtBQUssSUFBTCxDQUFVLGVBQVYsQ0FBZCxFQUE0QztBQUMzQyxjQUFXLE9BQVg7QUFDQSxRQUFLLElBQUwsQ0FBVSxxQkFBVixFQUFpQyxJQUFqQyxDQUFzQyxpQkFBaUIsTUFBdkQ7QUFDQSxHQUhELE1BSUs7QUFDSixjQUFXLE1BQVg7QUFDQSxRQUFLLElBQUwsQ0FBVSxxQkFBVixFQUFpQyxJQUFqQyxDQUFzQyxpQkFBaUIsUUFBdkQ7QUFDQTtBQUNELE9BQUssSUFBTCxDQUFVLGVBQVYsRUFBMkIsUUFBM0I7O0FBRUEsT0FBSyxRQUFMLENBQWMscUJBQWQsRUFBcUMsSUFBckMsQ0FBMEMsZUFBMUMsRUFBMkQsUUFBM0Q7QUFDQSxFQWREO0FBZ0JBLENBbkNEOztBQXNDQSxzQkFBRSxZQUFXO0FBQ1osS0FBSSxhQUFhLHNCQUFFLGFBQUYsQ0FBakI7QUFDQSx1QkFBRSxNQUFGLEVBQVUsRUFBVixDQUFjLGFBQWQsRUFBNkIsWUFBTTtBQUNsQyxhQUFXLElBQVgsQ0FBZ0IscUJBQWhCLEVBQXVDLFdBQXZDLENBQW1ELDRCQUFuRDtBQUNBLEVBRkQ7QUFHQSxxQ0FBMkIsVUFBM0IsRUFBdUMsMkJBQXZDLEVBQW9FLEVBQXBFO0FBQ0EsNkJBQW1CLFVBQW5CLEVBQStCLDRCQUEvQixFQUE2RCxFQUE3RDtBQUNBLDZCQUFtQixVQUFuQjtBQUVBLENBVEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFNwYWNlciB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gJGVsXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGVsICkge1xuXHRcdHRoaXMuJGVsID0gJGVsO1xuXHRcdGxldCBoZWFkZXIgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1oZWFkZXInKTtcblx0XHRsZXQgY29udGVudCA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LXNwYWNlcicpO1xuXG5cdFx0dGhpcy4kaGVhZGVyID0gJCggaGVhZGVyICk7XG5cdFx0dGhpcy4kY29udGVudCA9ICQoIGNvbnRlbnQgKTtcblx0XHR0aGlzLm9uKCk7XG5cdH1cblxuXHRvbigpIHtcblx0XHQkKHdpbmRvdykub24oICdsb2FkIHJlc2l6ZScsICgpID0+IHtcblx0XHRcdHRoaXMuc2V0UGFkZGluZygpXG5cdFx0fSApO1xuXHR9XG5cblx0c2V0UGFkZGluZygpIHtcblx0XHR0aGlzLiRjb250ZW50LmNzcyh7cGFkZGluZ1RvcDogdGhpcy5nZXRIZWFkZXJIZWlnaHQoKSArICdweCd9KTtcblx0fVxuXG5cdGdldEhlYWRlckhlaWdodCgpIHtcblxuXHRcdHJldHVybiB0aGlzLiRoZWFkZXIuaGVpZ2h0KCk7XG5cdH1cbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwTGF5b3V0Q2xhc3NDb250cm9sbGVyIHtcblx0LyoqXG5cdCAqXG5cdCAqIEBwYXJhbSAkZWxcblx0ICogQHBhcmFtIGNsYXNzU3RyaW5nXG5cdCAqIEBwYXJhbSB0aHJlc2hvbGQg44Kv44Op44K544Gu6Kit5a6a44KS44GZ44KL44Gf44KB44Gu44K544Kv44Ot44O844Or5L2N572uXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciggJGVsLCBjbGFzc1N0cmluZywgdGhyZXNob2xkICkge1xuXHRcdHRoaXMuY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZztcblx0XHR0aGlzLnRocmVzaG9sZCA9IHRocmVzaG9sZDtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHRsZXQgaGVhZGVyID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtaGVhZGVyJyk7XG5cdFx0bGV0IGNvbnRlbnQgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1zY3JvbGwtYXJlYScpO1xuXHRcdHRoaXMuJGhlYWRlciA9ICQoIGhlYWRlciApO1xuXHRcdGlmICggY29udGVudCAmJiBjb250ZW50ICE9ICd3aW5kb3cnICkge1xuXHRcdFx0dGhpcy4kY29udGVudCA9ICQoIGNvbnRlbnQgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLiRjb250ZW50ID0gJCggd2luZG93ICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdFx0dGhpcy5vbigpO1xuXHR9XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHQvL2ZvciBvdmVycmlkZVxuXHR9XG5cblx0b24oKSB7XG5cdFx0dGhpcy4kY29udGVudC5vbiggJ3Njcm9sbCByZXNpemUnLCBfLnRocm90dGxlKGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLnRvZ2dsZUNsYXNzKCk7XG5cdFx0fSwgMSApLmJpbmQodGhpcykgKTtcblx0fVxuXG5cdHRvZ2dsZUNsYXNzKCkge1xuXHRcdGlmKCB0aGlzLmlzRXhjZWVkc1RocmVzaG9sZCgpICkge1xuXHRcdFx0dGhpcy4kaGVhZGVyLmFkZENsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0VGhyZXNob2xkKCkge1xuXHRcdGlmKCB0eXBlb2YgdGhpcy50aHJlc2hvbGQgID09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdHJldHVybiB0aGlzLnRocmVzaG9sZCgpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnRocmVzaG9sZDtcblx0XHR9XG5cdH1cblxuXHRpc0V4Y2VlZHNUaHJlc2hvbGQoKSB7XG5cdFx0bGV0IHNjcm9sbFRvcCA9IHRoaXMuJGNvbnRlbnQuc2Nyb2xsVG9wKCk7XG5cdFx0cmV0dXJuICggc2Nyb2xsVG9wID4gdGhpcy5nZXRUaHJlc2hvbGQoKSApO1xuXG5cdH1cbn1cblxuIiwiaW1wb3J0IEhlYWRlckNsYXNzQ29udHJvbGxlciBmcm9tICcuL0hlYWRlckNsYXNzQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgSGVhZGVyQ2xhc3NDb250cm9sbGVyIHtcblxuXHRpbml0aWFsaXplKCkge1xuXHRcdHRoaXMuc2Nyb2xsUG9zID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuXHR9XG5cblx0Z2V0U2Nyb2xsUG9zaXRpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuJGNvbnRlbnQuc2Nyb2xsVG9wKCk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygpIHtcblx0XHRsZXQgY3VycmVudFBvcyA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcblxuXHRcdGlmKCAhIHRoaXMuaXNFeGNlZWRzVGhyZXNob2xkKCkgKSB7XG5cdFx0XHR0aGlzLiRoZWFkZXIucmVtb3ZlQ2xhc3MoIHRoaXMuY2xhc3NTdHJpbmcgKTtcblx0XHRcdHRoaXMuJGhlYWRlci5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXHRcdH1cblx0XHRlbHNlIGlmKCAgY3VycmVudFBvcyAtIHRoaXMuc2Nyb2xsUG9zID4gNSApIHtcblx0XHRcdC8vc2Nyb2xsIHRvIGRvd25cblx0XHRcdHRoaXMuJGhlYWRlci5hZGRDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdFx0dGhpcy4kaGVhZGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoICBjdXJyZW50UG9zIC0gdGhpcy5zY3JvbGxQb3MgPCAtIDUgKSB7XG5cdFx0XHQvL3Njcm9sbCB0byB1cFxuXHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0XHR0aGlzLiRoZWFkZXIuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbFBvcyA9IGN1cnJlbnRQb3M7XG5cdH1cblxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2VyIHtcblxuXHRjb25zdHJ1Y3RvcigkZWwpIHtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHR0aGlzLiRjb250YWluZXIgPSAkKCRlbC5kYXRhKFwiZHJhd2VyLWNvbnRhaW5lci1zZWxlY3RvclwiKSk7XG5cdFx0dGhpcy5pZCA9ICRlbC5hdHRyKCdpZCcpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIgPSAkKCAnW2FyaWEtY29udHJvbHM9XCInK3RoaXMuaWQrJ1wiIF0nICk7XG5cdFx0dGhpcy4kY29udGFpbmVyLmFkZENsYXNzKFwiZHJhd2VyLWNvbnRhaW5lclwiKTtcblx0XHR0aGlzLm9uKCk7XG5cblx0fVxuXG5cdG9uKCkge1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIub24oJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy4kZWwub24oJ2NsaWNrJywgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLiRlbC5jaGlsZHJlbigpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0pXG5cblx0XHQkKGRvY3VtZW50KS5vbigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5rZXlDb2RlID09IDI3KSB7XG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy4kZWwub24oJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25lbmQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHR0cmFuc2l0aW9uZW5kKCkge1xuXHRcdHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdpcy1hbmltYXRlZCcpO1xuXHR9XG5cblx0dG9nZ2xlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAoIHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnKSA9PSBcImZhbHNlXCIgKSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy4kZWwuYWRkQ2xhc3MoJ2lzLWFuaW1hdGVkJyk7XG5cdFx0dGhpcy4kZWwuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtaGlkZGVuJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcyhcImlzLWRyYXdlci1vcGVuXCIpO1xuXG5cblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJGVsLmFkZENsYXNzKCdpcy1hbmltYXRlZCcpO1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0dGhpcy4kZWwuYXR0cignYXJpYS1oaWRkZW4nLFwidHJ1ZVwiKTtcblx0XHR0aGlzLiRjb250cm9sbGVyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdFx0dGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiaXMtZHJhd2VyLW9wZW5cIik7XG5cdH1cblxuXHRzdGF0aWMgaW5pdCgpIHtcblx0XHQkKFwiW2RhdGEtZHJhd2VyXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRuZXcgRHJhd2VyKCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG59IiwiLyoqXG4gKiBGaWxlIHNraXAtbGluay1mb2N1cy1maXguanMuXG4gKlxuICogSGVscHMgd2l0aCBhY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZCBvbmx5IHVzZXJzLlxuICpcbiAqIExlYXJuIG1vcmU6IGh0dHBzOi8vZ2l0LmlvL3ZXZHIyXG4gKi9cbiggZnVuY3Rpb24oKSB7XG5cdHZhciBpc1dlYmtpdCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnd2Via2l0JyApID4gLTEsXG5cdFx0aXNPcGVyYSAgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ29wZXJhJyApICA+IC0xLFxuXHRcdGlzSWUgICAgID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICdtc2llJyApICAgPiAtMTtcblxuXHRpZiAoICggaXNXZWJraXQgfHwgaXNPcGVyYSB8fCBpc0llICkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaWQgPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZyggMSApLFxuXHRcdFx0XHRlbGVtZW50O1xuXG5cdFx0XHRpZiAoICEgKCAvXltBLXowLTlfLV0rJC8udGVzdCggaWQgKSApICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblxuXHRcdFx0aWYgKCBlbGVtZW50ICkge1xuXHRcdFx0XHRpZiAoICEgKCAvXig/OmF8c2VsZWN0fGlucHV0fGJ1dHRvbnx0ZXh0YXJlYSkkL2kudGVzdCggZWxlbWVudC50YWdOYW1lICkgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50LmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSwgZmFsc2UgKTtcblx0fVxufSkoKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vRHJhd2VyJztcbmltcG9ydCBIZWFkZXJDbGFzc0NvbnRyb2xsZXIgZnJvbSAnLi9BcHBMYXlvdXQvSGVhZGVyQ2xhc3NDb250cm9sbGVyJztcbmltcG9ydCBIZWFkZXJFc2NhcGVyIGZyb20gJy4vQXBwTGF5b3V0L0hlYWRlckVzY2FwZXInO1xuaW1wb3J0IENvbnRlbnRTcGFjZXIgZnJvbSAnLi9BcHBMYXlvdXQvQ29udGVudFNwYWNlcic7XG5pbXBvcnQgJy4vc2tpcC1saW5rLWZvY3VzLWZpeCc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cdCQoXCJbZGF0YS1kcmF3ZXJdXCIpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRuZXcgRHJhd2VyKCQodGhpcykpO1xuXHR9KTtcbn0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG5cdGxldCAkdG9wbGV2ZWxNZW51SXRlbXMgPSAkKCcucHJpbWFyeS1tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLCAucHJpbWFyeS1tZW51IC5wYWdlX2l0ZW1faGFzX2NoaWxkcmVuJyk7XG5cdC8vIEFkZCBkcm9wZG93biB0b2dnbGUgdGhhdCBkaXNwbGF5cyBjaGlsZCBtZW51IGl0ZW1zLlxuXHRsZXQgJGRyb3Bkb3duVG9nZ2xlID0gJCggJzxidXR0b24gLz4nLCB7XG5cdFx0J2NsYXNzJzogJ2Ryb3Bkb3duLXRvZ2dsZScsXG5cdFx0J2FyaWEtZXhwYW5kZWQnOiBmYWxzZVxuXHR9ICkuYXBwZW5kKCAkKCAnPHNwYW4gLz4nLCB7XG5cdFx0J2NsYXNzJzogJ3NjcmVlbi1yZWFkZXItdGV4dCcsXG5cdFx0dGV4dDogc2NyZWVuUmVhZGVyVGV4dC5leHBhbmRcblx0fSApICk7XG5cblx0JHRvcGxldmVsTWVudUl0ZW1zLmNoaWxkcmVuKCdhJykuYWZ0ZXIoICRkcm9wZG93blRvZ2dsZSApO1xuXG5cblx0JChcIi5wcmltYXJ5LW1lbnUgLnN1Yi1tZW51LCAucHJpbWFyeS1tZW51IC5jaGlsZHJlblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwiZmFsc2VcIik7XG5cdH0pO1xuXG5cdCR0b3BsZXZlbE1lbnVJdGVtcy5maW5kKCcuZHJvcGRvd24tdG9nZ2xlJykub24oICdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGxldCBzZWxmID0gJCh0aGlzKTtcblx0XHRsZXQgZXhwYW5kZWQgPSAnJztcblx0XHRpZiggJ3RydWUnID09IHNlbGYuYXR0cignYXJpYS1leHBhbmRlZCcpICApIHtcblx0XHRcdGV4cGFuZGVkID0gJ2ZhbHNlJztcblx0XHRcdHNlbGYuZmluZCgnLnNjcmVlbi1yZWFkZXItdGV4dCcpLnRleHQoc2NyZWVuUmVhZGVyVGV4dC5leHBhbmQpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGV4cGFuZGVkID0gJ3RydWUnO1xuXHRcdFx0c2VsZi5maW5kKCcuc2NyZWVuLXJlYWRlci10ZXh0JykudGV4dChzY3JlZW5SZWFkZXJUZXh0LmNvbGxhcHNlKTtcblx0XHR9XG5cdFx0c2VsZi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZXhwYW5kZWQpO1xuXG5cdFx0c2VsZi5zaWJsaW5ncygnLnN1Yi1tZW51LC5jaGlsZHJlbicpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBleHBhbmRlZCk7XG5cdH0pXG5cbn0pO1xuXG5cbiQoZnVuY3Rpb24oKSB7XG5cdGxldCAkYXBwTGF5b3V0ID0gJChcIi5hcHAtbGF5b3V0XCIpO1xuXHQkKHdpbmRvdykub24oICdsb2FkIHJlc2l6ZScsICgpID0+IHtcblx0XHQkYXBwTGF5b3V0LmZpbmQoXCIuYXBwLWxheW91dF9faGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwiYXBwLWxheW91dF9faGVhZGVyLS1zdGF0aWNcIik7XG5cdH0gKTtcblx0bmV3IEhlYWRlckNsYXNzQ29udHJvbGxlciggJGFwcExheW91dCwgXCJhcHAtbGF5b3V0X19oZWFkZXItLWZpeGVkXCIsIDMyICk7XG5cdG5ldyBIZWFkZXJFc2NhcGVyKCAkYXBwTGF5b3V0LCBcImFwcC1sYXlvdXRfX2hlYWRlci0tZXNjYXBlXCIsIDY0ICk7XG5cdG5ldyBDb250ZW50U3BhY2VyKCAkYXBwTGF5b3V0ICk7XG5cbn0pO1xuXG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvQ29udGVudFNwYWNlci5qcyIsImFzc2V0cy9zY3JpcHRzL0FwcExheW91dC9IZWFkZXJDbGFzc0NvbnRyb2xsZXIuanMiLCJhc3NldHMvc2NyaXB0cy9BcHBMYXlvdXQvSGVhZGVyRXNjYXBlci5qcyIsImFzc2V0cy9zY3JpcHRzL0RyYXdlci5qcyIsImFzc2V0cy9zY3JpcHRzL2J1bmRsZS5qcyIsImFzc2V0cy9zY3JpcHRzL3NraXAtbGluay1mb2N1cy1maXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFcUIsYTtBQUNwQjs7OztBQUlBLHdCQUFhLEdBQWIsRUFBbUI7QUFBQTs7QUFDbEIsT0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLE1BQUksU0FBUyxJQUFJLElBQUosQ0FBUyxtQkFBVCxDQUFiO0FBQ0EsTUFBSSxVQUFVLElBQUksSUFBSixDQUFTLG1CQUFULENBQWQ7O0FBRUEsT0FBSyxPQUFMLEdBQWUsc0JBQUcsTUFBSCxDQUFmO0FBQ0EsT0FBSyxRQUFMLEdBQWdCLHNCQUFHLE9BQUgsQ0FBaEI7QUFDQSxPQUFLLEVBQUw7QUFDQTs7Ozt1QkFFSTtBQUFBOztBQUNKLHlCQUFFLE1BQUYsRUFBVSxFQUFWLENBQWMsYUFBZCxFQUE2QixZQUFNO0FBQ2xDLFVBQUssVUFBTDtBQUNBLElBRkQ7QUFHQTs7OytCQUVZO0FBQ1osUUFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixFQUFDLFlBQVksS0FBSyxlQUFMLEtBQXlCLElBQXRDLEVBQWxCO0FBQ0E7OztvQ0FFaUI7O0FBRWpCLFVBQU8sS0FBSyxPQUFMLENBQWEsTUFBYixFQUFQO0FBQ0E7Ozs7OztrQkE1Qm1CLGE7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7O0lBR3FCLHdCO0FBQ3BCOzs7Ozs7QUFNQSxtQ0FB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OztBQU9BLENBQUUsWUFBVztBQUNaLEtBQUksV0FBVyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMkMsUUFBM0MsSUFBd0QsQ0FBQyxDQUF4RTtBQUFBLEtBQ0MsVUFBVyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMkMsT0FBM0MsSUFBd0QsQ0FBQyxDQURyRTtBQUFBLEtBRUMsT0FBVyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMkMsTUFBM0MsSUFBd0QsQ0FBQyxDQUZyRTs7QUFJQSxLQUFLLENBQUUsWUFBWSxPQUFaLElBQXVCLElBQXpCLEtBQW1DLFNBQVMsY0FBNUMsSUFBOEQsT0FBTyxnQkFBMUUsRUFBNkY7QUFDNUYsU0FBTyxnQkFBUCxDQUF5QixZQUF6QixFQUF1QyxZQUFXO0FBQ2pELE9BQUksS0FBSyxTQUFTLElBQVQsQ0FBYyxTQUFkLENBQXlCLENBQXpCLENBQVQ7QUFBQSxPQUNDLE9BREQ7O0FBR0EsT0FBSyxDQUFJLGdCQUFnQixJQUFoQixDQUFzQixFQUF0QixDQUFULEVBQXdDO0FBQ3ZDO0FBQ0E7O0FBRUQsYUFBVSxTQUFTLGNBQVQsQ0FBeUIsRUFBekIsQ0FBVjs7QUFFQSxPQUFLLE9BQUwsRUFBZTtBQUNkLFFBQUssQ0FBSSx3Q0FBd0MsSUFBeEMsQ0FBOEMsUUFBUSxPQUF0RCxDQUFULEVBQTZFO0FBQzVFLGFBQVEsUUFBUixHQUFtQixDQUFDLENBQXBCO0FBQ0E7O0FBRUQsWUFBUSxLQUFSO0FBQ0E7QUFDRCxHQWpCRCxFQWlCRyxLQWpCSDtBQWtCQTtBQUNELENBekJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRTcGFjZXIge1xuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuXHQgKi9cblx0Y29uc3RydWN0b3IoICRlbCApIHtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHRsZXQgaGVhZGVyID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtaGVhZGVyJyk7XG5cdFx0bGV0IGNvbnRlbnQgPSAkZWwuZGF0YSgnYXBwLWxheW91dC1zcGFjZXInKTtcblxuXHRcdHRoaXMuJGhlYWRlciA9ICQoIGhlYWRlciApO1xuXHRcdHRoaXMuJGNvbnRlbnQgPSAkKCBjb250ZW50ICk7XG5cdFx0dGhpcy5vbigpO1xuXHR9XG5cblx0b24oKSB7XG5cdFx0JCh3aW5kb3cpLm9uKCAnbG9hZCByZXNpemUnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFBhZGRpbmcoKVxuXHRcdH0gKTtcblx0fVxuXG5cdHNldFBhZGRpbmcoKSB7XG5cdFx0dGhpcy4kY29udGVudC5jc3Moe3BhZGRpbmdUb3A6IHRoaXMuZ2V0SGVhZGVySGVpZ2h0KCkgKyAncHgnfSk7XG5cdH1cblxuXHRnZXRIZWFkZXJIZWlnaHQoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy4kaGVhZGVyLmhlaWdodCgpO1xuXHR9XG59IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcExheW91dENsYXNzQ29udHJvbGxlciB7XG5cdC8qKlxuXHQgKlxuXHQgKiBAcGFyYW0gJGVsXG5cdCAqIEBwYXJhbSBjbGFzc1N0cmluZ1xuXHQgKiBAcGFyYW0gdGhyZXNob2xkIOOCr+ODqeOCueOBruioreWumuOCkuOBmeOCi+OBn+OCgeOBruOCueOCr+ODreODvOODq+S9jee9rlxuXHQgKi9cblx0Y29uc3RydWN0b3IoICRlbCwgY2xhc3NTdHJpbmcsIHRocmVzaG9sZCApIHtcblx0XHR0aGlzLmNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmc7XG5cdFx0dGhpcy50aHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0bGV0IGhlYWRlciA9ICRlbC5kYXRhKCdhcHAtbGF5b3V0LWhlYWRlcicpO1xuXHRcdGxldCBjb250ZW50ID0gJGVsLmRhdGEoJ2FwcC1sYXlvdXQtc2Nyb2xsLWFyZWEnKTtcblx0XHR0aGlzLiRoZWFkZXIgPSAkKCBoZWFkZXIgKTtcblx0XHRpZiAoIGNvbnRlbnQgJiYgY29udGVudCAhPSAnd2luZG93JyApIHtcblx0XHRcdHRoaXMuJGNvbnRlbnQgPSAkKCBjb250ZW50ICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy4kY29udGVudCA9ICQoIHdpbmRvdyApO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHRcdHRoaXMub24oKTtcblx0fVxuXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Ly9mb3Igb3ZlcnJpZGVcblx0fVxuXG5cdG9uKCkge1xuXHRcdHRoaXMuJGNvbnRlbnQub24oICdzY3JvbGwgcmVzaXplJywgXy50aHJvdHRsZShmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy50b2dnbGVDbGFzcygpO1xuXHRcdH0sIDEgKS5iaW5kKHRoaXMpICk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygpIHtcblx0XHRpZiggdGhpcy5pc0V4Y2VlZHNUaHJlc2hvbGQoKSApIHtcblx0XHRcdHRoaXMuJGhlYWRlci5hZGRDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuJGhlYWRlci5yZW1vdmVDbGFzcyggdGhpcy5jbGFzc1N0cmluZyApO1xuXHRcdH1cblx0fVxuXG5cdGdldFRocmVzaG9sZCgpIHtcblx0XHRpZiggdHlwZW9mIHRoaXMudGhyZXNob2xkICA9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aHJlc2hvbGQoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aHJlc2hvbGQ7XG5cdFx0fVxuXHR9XG5cblx0aXNFeGNlZWRzVGhyZXNob2xkKCkge1xuXHRcdGxldCBzY3JvbGxUb3AgPSB0aGlzLiRjb250ZW50LnNjcm9sbFRvcCgpO1xuXHRcdHJldHVybiAoIHNjcm9sbFRvcCA+IHRoaXMuZ2V0VGhyZXNob2xkKCkgKTtcblxuXHR9XG59XG5cbiIsImltcG9ydCBIZWFkZXJDbGFzc0NvbnRyb2xsZXIgZnJvbSAnLi9IZWFkZXJDbGFzc0NvbnRyb2xsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIEhlYWRlckNsYXNzQ29udHJvbGxlciB7XG5cblx0aW5pdGlhbGl6ZSgpIHtcblx0XHR0aGlzLnNjcm9sbFBvcyA9IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcblx0fVxuXG5cdGdldFNjcm9sbFBvc2l0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLiRjb250ZW50LnNjcm9sbFRvcCgpO1xuXHR9XG5cblx0dG9nZ2xlQ2xhc3MoKSB7XG5cdFx0bGV0IGN1cnJlbnRQb3MgPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG5cblx0XHRpZiggISB0aGlzLmlzRXhjZWVkc1RocmVzaG9sZCgpICkge1xuXHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0XHR0aGlzLiRoZWFkZXIuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiggTWF0aC5hYnMoIGN1cnJlbnRQb3MgLSB0aGlzLnNjcm9sbFBvcyApID4gMzAgKSB7XG5cdFx0XHRpZiAoIGN1cnJlbnRQb3MgPiB0aGlzLnNjcm9sbFBvcyApIHtcblx0XHRcdFx0dGhpcy4kaGVhZGVyLmFkZENsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0XHRcdHRoaXMuJGhlYWRlci5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy4kaGVhZGVyLnJlbW92ZUNsYXNzKCB0aGlzLmNsYXNzU3RyaW5nICk7XG5cdFx0XHRcdHRoaXMuJGhlYWRlci5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsUG9zID0gY3VycmVudFBvcztcblx0fVxuXG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3ZXIge1xuXG5cdGNvbnN0cnVjdG9yKCRlbCkge1xuXHRcdHRoaXMuJGVsID0gJGVsO1xuXHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoJGVsLmRhdGEoXCJkcmF3ZXItY29udGFpbmVyLXNlbGVjdG9yXCIpKTtcblx0XHR0aGlzLmlkID0gJGVsLmF0dHIoJ2lkJyk7XG5cdFx0dGhpcy4kY29udHJvbGxlciA9ICQoICdbYXJpYS1jb250cm9scz1cIiMnK3RoaXMuaWQrJ1wiIF0nICk7XG5cdFx0dGhpcy4kY29udGFpbmVyLmFkZENsYXNzKFwiZHJhd2VyLWNvbnRhaW5lclwiKTtcblx0XHR0aGlzLm9uKCk7XG5cblx0fVxuXG5cdG9uKCkge1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIub24oJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG5cblx0XHR0aGlzLiRlbC5vbignY2xpY2snLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuJGVsLmNoaWxkcmVuKCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSlcblx0fVxuXG5cdHRvZ2dsZShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKCB0aGlzLiRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJykgPT0gXCJmYWxzZVwiICkge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHRoaXMuJGVsLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwidHJ1ZVwiKTtcblx0XHR0aGlzLiRjb250cm9sbGVyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLFwidHJ1ZVwiKTtcblx0XHR0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoXCJpcy1kcmF3ZXItb3BlblwiKTtcblxuXG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLiRlbC5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHRcdHRoaXMuJGNvbnRyb2xsZXIuYXR0cignYXJpYS1leHBhbmRlZCcsXCJmYWxzZVwiKTtcblx0XHR0aGlzLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoXCJpcy1kcmF3ZXItb3BlblwiKTtcblx0fVxuXG5cdHN0YXRpYyBpbml0KCkge1xuXHRcdCQoXCJbZGF0YS1kcmF3ZXJdXCIpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdG5ldyBEcmF3ZXIoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cbn0iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IERyYXdlciBmcm9tICcuL0RyYXdlcic7XG5pbXBvcnQgSGVhZGVyQ2xhc3NDb250cm9sbGVyIGZyb20gJy4vQXBwTGF5b3V0L0hlYWRlckNsYXNzQ29udHJvbGxlcic7XG5pbXBvcnQgSGVhZGVyRXNjYXBlciBmcm9tICcuL0FwcExheW91dC9IZWFkZXJFc2NhcGVyJztcbmltcG9ydCBDb250ZW50U3BhY2VyIGZyb20gJy4vQXBwTGF5b3V0L0NvbnRlbnRTcGFjZXInO1xuaW1wb3J0ICcuL3NraXAtbGluay1mb2N1cy1maXgnO1xuXG4kKGZ1bmN0aW9uKCkge1xuXG5cblx0JChcIltkYXRhLWRyYXdlcl1cIikuZWFjaChmdW5jdGlvbigpe1xuXHRcdG5ldyBEcmF3ZXIoJCh0aGlzKSk7XG5cdH0pO1xuXG5cdCQoXCIucHJpbWFyeS1tZW51IC5zdWItbWVudSwgLnByaW1hcnktbWVudSAuY2hpbGRyZW5cIikuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0Ly9zZXQgZGVmYXVsdCBoZWlnaHQgZm9yIGFuaW1hdGlvblxuXHRcdC8vIGxldCBoZWlnaHQgPSAkKHRoaXMpLmhlaWdodCgpO1xuXHRcdC8vICQodGhpcykuaGVpZ2h0KCBoZWlnaHQgKTtcblxuXHRcdCQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcsXCJmYWxzZVwiKTtcblx0fSkub24oICdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmKCAndHJ1ZScgPT0gJCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJykgICkge1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLWV4cGFuZGVkJyxcImZhbHNlXCIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdCQodGhpcykuYXR0cignYXJpYS1leHBhbmRlZCcsXCJ0cnVlXCIpO1xuXHRcdH1cblxuXHR9KS5maW5kKCdhJykub24oICdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9KTtcblxuXHRsZXQgJGFwcExheW91dCA9ICQoXCIuYXBwLWxheW91dFwiKTtcblx0JCh3aW5kb3cpLm9uKCAnbG9hZCByZXNpemUnLCAoKSA9PiB7XG5cdFx0JGFwcExheW91dC5yZW1vdmVDbGFzcyhcImFwcC1sYXlvdXQtLWRpc2FibGVcIik7XG5cdH0gKTtcblx0bmV3IEhlYWRlckNsYXNzQ29udHJvbGxlciggJGFwcExheW91dCwgXCJhcHAtbGF5b3V0X19oZWFkZXItLWZpeGVkXCIsIDQ2ICk7XG5cdG5ldyBIZWFkZXJFc2NhcGVyKCAkYXBwTGF5b3V0LCBcImFwcC1sYXlvdXRfX2hlYWRlci0tZXNjYXBlXCIsIDE1MCApO1xuXHRuZXcgQ29udGVudFNwYWNlciggJGFwcExheW91dCApO1xuXG5cblxufSk7XG4iLCIvKipcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cbiAqXG4gKiBIZWxwcyB3aXRoIGFjY2Vzc2liaWxpdHkgZm9yIGtleWJvYXJkIG9ubHkgdXNlcnMuXG4gKlxuICogTGVhcm4gbW9yZTogaHR0cHM6Ly9naXQuaW8vdldkcjJcbiAqL1xuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlzV2Via2l0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoICd3ZWJraXQnICkgPiAtMSxcblx0XHRpc09wZXJhICA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCAnb3BlcmEnICkgID4gLTEsXG5cdFx0aXNJZSAgICAgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZiggJ21zaWUnICkgICA+IC0xO1xuXG5cdGlmICggKCBpc1dlYmtpdCB8fCBpc09wZXJhIHx8IGlzSWUgKSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKCAxICksXG5cdFx0XHRcdGVsZW1lbnQ7XG5cblx0XHRcdGlmICggISAoIC9eW0EtejAtOV8tXSskLy50ZXN0KCBpZCApICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRpZiAoIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGlmICggISAoIC9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KCBlbGVtZW50LnRhZ05hbWUgKSApICkge1xuXHRcdFx0XHRcdGVsZW1lbnQudGFiSW5kZXggPSAtMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSApO1xuXHR9XG59KSgpO1xuIl19

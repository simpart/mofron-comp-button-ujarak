require('mofron-parts-button');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   UjarakBtn.js
	 * @brief  ujarak button class
	 * @author simpart
	 */

	mofron.parts.UjarakBtn = function (_mofron$parts$Button) {
	    _inherits(_class, _mofron$parts$Button);

	    function _class(txt, clr, hvr_clr) {
	        _classCallCheck(this, _class);

	        try {
	            var _clr = clr === undefined ? null : clr;
	            var _hvr_clr = hvr_clr === undefined ? null : hvr_clr;

	            if (null !== _clr && 'object' !== (typeof _clr === 'undefined' ? 'undefined' : _typeof(_clr)) || null !== _hvr_clr && 'object' !== (typeof _hvr_clr === 'undefined' ? 'undefined' : _typeof(_hvr_clr))) {
	                throw new Error('invalid parameter');
	            }

	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, [txt, _clr, _hvr_clr]));
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                var clr = prm[1];
	                if (null === prm[1]) {
	                    clr = new mofron.util.Color();
	                }
	                var hvr_clr = prm[2];
	                if (null === prm[2]) {
	                    hvr_clr = new mofron.util.Color(55, 71, 79);
	                }

	                var rgb = clr.getRgba();
	                if (null !== rgb && 290 > rgb[0] + rgb[1] + rgb[2]) {
	                    var txt = null;
	                    if ('string' === typeof prm[0]) {
	                        txt = new mofron.parts.Text(prm[0]);
	                    } else if ('object' === _typeof(prm[0])) {
	                        txt = prm[1];
	                    }
	                    txt.color(new mofron.util.Color(255, 255, 255));
	                }
	                _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'initContents', this).call(this, vd, prm[0]);

	                if (false === mofron.parts.UjarakBtn_exec) {
	                    this.addStyleTag(clr, hvr_clr);
	                    mofron.parts.UjarakBtn_exec = true;
	                }

	                this.getTarget().addClname('mof-parts-ujarakbtn');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'addStyleTag',
	        value: function addStyleTag(clr, hvr_clr) {
	            try {
	                var _mofron$util$getStyle;

	                var hc = new mofron.util.HeadConts('style');
	                hc.addConts(mofron.util.getStyleConts('.mof-parts-ujarakbtn', {
	                    'display': 'block',
	                    'margin': '0px',
	                    'border': '1px solid',
	                    'background': clr.getStyle(),
	                    'position': 'relative',
	                    'z-index': '1',

	                    '-webkit-backface-visibility': 'hidden',
	                    '-moz-backface-visibility': 'hidden',
	                    'backface-visibility': 'hidden',

	                    //'-moz-osx-font-smoothing' : 'grayscale'  ,
	                    //'-webkit-font-smoothing'  : 'antialiased',

	                    '-webkit-transition': 'border-color 0.4s, color 0.4s',
	                    '-moz-transition': 'border-color 0.4s, color 0.4s',
	                    '-o-transition': 'border-color 0.4s, color 0.4s',
	                    'transition': 'border-color 0.4s, color 0.4s',

	                    '-webkit-transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)',
	                    '-moz-transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)',
	                    '-o-transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)',
	                    '-ms-transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)',
	                    'transition-timing-function': 'cubic-bezier(0.2, 1, 0.3, 1)'
	                }));

	                hc.addConts(mofron.util.getStyleConts('.mof-parts-ujarakbtn:focus', { 'outline': 'none' }));

	                hc.addConts(mofron.util.getStyleConts('.mof-parts-ujarakbtn:before', (_mofron$util$getStyle = {
	                    'content': "''",
	                    'position': 'absolute',
	                    'top': '0',
	                    'left': '0',
	                    'width': '100%',
	                    'height': '100%',
	                    'background': hvr_clr.getStyle(),
	                    'z-index': '-1',
	                    'opacity': '0',

	                    '-webkit-transform': 'scale3d(0.7, 1, 1)',
	                    '-moz-transition': 'scale3d(0.7, 1, 1)',
	                    '-o-transition': 'scale3d(0.7, 1, 1)',
	                    'transform': 'scale3d(0.7, 1, 1)',
	                    '-webkit-transition': '-webkit-transform 0.4s, opacity 0.4s'
	                }, _defineProperty(_mofron$util$getStyle, '-moz-transition', '-moz-transform 0.4s, opacity 0.4s'), _defineProperty(_mofron$util$getStyle, '-o-transition', '-o-transform 0.4s, opacity 0.4s'), _defineProperty(_mofron$util$getStyle, 'transition', 'transform 0.4s, opacity 0.4s'), _defineProperty(_mofron$util$getStyle, '-webkit-transition-timing-function', 'cubic-bezier(0.2, 1, 0.3, 1)'), _defineProperty(_mofron$util$getStyle, '-moz-transition-timing-function', 'cubic-bezier(0.2, 1, 0.3, 1)'), _defineProperty(_mofron$util$getStyle, '-o-transition-timing-function', 'cubic-bezier(0.2, 1, 0.3, 1)'), _defineProperty(_mofron$util$getStyle, '-ms-transition-timing-function', 'cubic-bezier(0.2, 1, 0.3, 1)'), _defineProperty(_mofron$util$getStyle, 'transition-timing-function', 'cubic-bezier(0.2, 1, 0.3, 1)'), _mofron$util$getStyle)));

	                var rgb = hvr_clr.getRgba();
	                var hvr_txt_clr = null;
	                if (null !== rgb && 290 > rgb[0] + rgb[1] + rgb[2]) {
	                    hvr_txt_clr = new mofron.util.Color(255, 255, 255);
	                } else {
	                    hvr_txt_clr = new mofron.util.Color(0, 0, 0);
	                }
	                hc.addConts(mofron.util.getStyleConts('.mof-parts-ujarakbtn:hover', {
	                    'color': hvr_txt_clr.getStyle(),
	                    'border-color': hvr_clr.getStyle()
	                }));

	                hc.addConts(mofron.util.getStyleConts('.mof-parts-ujarakbtn:hover::before', {
	                    'opacity': '1',
	                    '-webkit-transform': 'translate3d(0, 0, 0)',
	                    '-moz-transition': 'translate3d(0, 0, 0)',
	                    '-o-transition': 'translate3d(0, 0, 0)',
	                    'transform': 'translate3d(0, 0, 0)'
	                }));

	                hc.pushTag();
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'width',
	        value: function width(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                var btn = this.getTarget();
	                if (null === _val) {
	                    return btn.getStyle('min-width');
	                }
	                if ('number' != typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                btn.setStyle('min-width', _val + 'px');
	                btn.setStyle('max-width', _val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Button);

	mofron.parts.UjarakBtn_exec = false;

/***/ }
/******/ ]);

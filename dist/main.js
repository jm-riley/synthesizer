/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/context.js":
/*!************************!*\
  !*** ./src/context.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst AudioContext = window.AudioContext || window.webkitAudioContext;\nconst context = new AudioContext();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (context);\n\n\n//# sourceURL=webpack:///./src/context.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oscillator */ \"./src/oscillator.js\");\n/* harmony import */ var _synth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./synth */ \"./src/synth.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // document.querySelector('button').addEventListener('click', function() {\n  //   const osc1 = new Oscillator(440, 'sine');\n  //   // const osc2 = new Oscillator(440, 'square');\n  // });\n  new _synth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/keymappings.js":
/*!****************************!*\
  !*** ./src/keymappings.js ***!
  \****************************/
/*! exports provided: keymappings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keymappings\", function() { return keymappings; });\nconst keymappings = {\n  '65': 130.8128, //c3\n  '87': 138.5913, //c#3\n  '83': 146.8324, //d3\n  '69': 155.5635, //d#3\n  '68': 164.8128, //e3\n  '70': 174.6141, //f3\n  '84': 184.9972, //f#3\n  '71': 195.9977, //g3\n  '89': 207.6523, //g#3\n  '72': 220.0, //a3,\n  '85': 233.0819, //a#3\n  '74': 246.9417, // b3\n  '75': 261.6256 //c4\n};\n\n\n//# sourceURL=webpack:///./src/keymappings.js?");

/***/ }),

/***/ "./src/oscillator.js":
/*!***************************!*\
  !*** ./src/oscillator.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Oscillator; });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ \"./src/context.js\");\n\n\nclass Oscillator {\n  constructor(freq, type) {\n    this.osc = _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createOscillator();\n    this.osc.type = type;\n    this.gain = _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createGain();\n    this.osc.frequency.value = freq;\n    this.osc.connect(this.gain);\n    // this.gain.connect(context.destination);\n    const gainControl = document.getElementById(`${type}-gain`);\n    this.gain.gain.setValueAtTime(gainControl.value, _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime);\n    gainControl.addEventListener('input', e => this.handleGainChange(e));\n  }\n\n  handleGainChange(e) {\n    // this.gain.gain.value = e.target.value;\n    this.gain.gain.setValueAtTime(e.target.value, _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/oscillator.js?");

/***/ }),

/***/ "./src/synth.js":
/*!**********************!*\
  !*** ./src/synth.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Synth; });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ \"./src/context.js\");\n/* harmony import */ var _oscillator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oscillator */ \"./src/oscillator.js\");\n/* harmony import */ var _keymappings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keymappings */ \"./src/keymappings.js\");\n\n\n\n\nclass Synth {\n  constructor() {\n    window.addEventListener('keydown', e => this.handleDown(e));\n    window.addEventListener('keyup', e => this.handleUp(e));\n    const keyboardKeys = document.getElementsByClassName('keys');\n    Array.from(keyboardKeys).forEach(key => {\n      key.addEventListener('mousedown', e => this.handleDown(e));\n      key.addEventListener('mouseup', e => this.handleUp(e));\n    });\n    this.handleDown = this.handleDown.bind(this);\n    this.handleUp = this.handleUp.bind(this);\n    this.play = this.play.bind(this);\n    this.handleFilterChange = this.handleFilterChange.bind(this);\n    this.oscillators = {};\n    this.filter = _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createBiquadFilter();\n    this.gain = _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createGain();\n    this.gain.connect(this.filter);\n    this.gain.gain.setValueAtTime(0, _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime);\n\n    this.filter.connect(_context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].destination);\n    this.attackControl = document.getElementById('attack');\n    this.releaseControl = document.getElementById('release');\n    const filterControl = document.getElementById('lpf');\n\n    // this.gain.linearRampToValueAtTime(0, context.currentTime + this.attackTime + this.releaseTime);\n    this.filter.frequency.setValueAtTime(\n      filterControl.value,\n      _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime\n    );\n    filterControl.addEventListener('input', e => this.handleFilterChange(e));\n    // gainControls = document.getElementsByClassName('gain-slider')\n    // gainControls.addEventListener('change', e => this.handleGainChange(e))\n  }\n\n  handleFilterChange(e) {\n    this.filter.frequency.setValueAtTime(e.target.value, _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime);\n  }\n\n  handleDown(e) {\n    const key = e.type === 'keydown' ? e.which.toString() : e.target.id;\n    // console.log(keymappings);\n    const attackTime = parseFloat(this.attackControl.value);\n    if (_keymappings__WEBPACK_IMPORTED_MODULE_2__[\"keymappings\"][key] && !this.oscillators[key]) {\n      this.gain.gain.cancelScheduledValues(_context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime);\n      this.gain.gain.setValueAtTime(0, _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime);\n      document.getElementById(key).classList.add('pressed');\n      this.play(key);\n      this.gain.gain.linearRampToValueAtTime(\n        1,\n        _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime + attackTime\n      );\n    }\n  }\n\n  handleUp(e) {\n    // const key = e.which.toString();\n    const key = e.type === 'keyup' ? e.which.toString() : e.target.id;\n    if (_keymappings__WEBPACK_IMPORTED_MODULE_2__[\"keymappings\"][key]) {\n      document.getElementById(key).classList.remove('pressed');\n      const releaseTime = parseFloat(this.releaseControl.value);\n      this.gain.gain.linearRampToValueAtTime(\n        0,\n        _context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime + releaseTime\n      );\n      this.oscillators[key].forEach(osc => {\n        osc.osc.stop(_context__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentTime + releaseTime);\n      });\n      delete this.oscillators[key];\n    }\n  }\n\n  play(key) {\n    const freq = _keymappings__WEBPACK_IMPORTED_MODULE_2__[\"keymappings\"][key];\n    const osc1 = new _oscillator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](freq, 'sine');\n    const osc2 = new _oscillator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](freq, 'sawtooth');\n    const osc3 = new _oscillator__WEBPACK_IMPORTED_MODULE_1__[\"default\"](freq, 'square');\n    const oscillators = [osc1, osc2, osc3];\n    // const attackTime = parseFloat(this.attackControl.value);\n    // this.gain.gain.cancelScheduledValues(context.currentTime);\n    // this.gain.gain.setValueAtTime(0, context.currentTime);\n\n    oscillators.forEach(osc => {\n      osc.gain.connect(this.gain);\n      osc.osc.start();\n    });\n    // this.gain.gain.setValueAtTime(0, context.currentTime);\n    // this.gain.gain.linearRampToValueAtTime(1, context.currentTime + attackTime);\n    this.oscillators[key] = oscillators;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/synth.js?");

/***/ })

/******/ });
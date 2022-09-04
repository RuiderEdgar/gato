/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ \"./node_modules/core-js/modules/es.parse-int.js\");\n/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.mjs */ \"./src/game.mjs\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _assets_icons_github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/github.png */ \"./src/assets/icons/github.png\");\n/* harmony import */ var _assets_icons_reload_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/reload.png */ \"./src/assets/icons/reload.png\");\n/* harmony import */ var _assets_icons_score_board_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/score-board.png */ \"./src/assets/icons/score-board.png\");\n/* harmony import */ var _assets_icons_tache_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/tache.png */ \"./src/assets/icons/tache.png\");\n/* harmony import */ var _assets_icons_circulo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/circulo.png */ \"./src/assets/icons/circulo.png\");\n\n\n\n\n\n\n\n\nwindow.addEventListener('load', () => {\n  //LocalStogare para saber si se entra por primera vez a la pagina\n  if (!sessionStorage.getItem('ingreso')) {\n    sessionStorage.setItem('red', 0);\n    sessionStorage.setItem('blue', 0); // establecer el sessionStorage en 1 para que no se vuelva a cumplir la condicion\n\n    sessionStorage.setItem('ingreso', 1);\n    localStorage.setItem('tiroRed', true);\n    localStorage.setItem('tiroBlue', false);\n  }\n\n  ;\n  document.querySelector('.header-tablero').style.display = 'none'; //Para el puntaje actual\n\n  document.querySelector('#redScore').innerHTML = sessionStorage.getItem('red');\n  document.querySelector('#blueScore').innerHTML = sessionStorage.getItem('blue'); //Para mostrar o no el boton de reiniciar el puntaje\n\n  if (parseInt(sessionStorage.getItem('red')) > 0 || parseInt(sessionStorage.getItem('blue')) > 0) {\n    document.querySelector('.container-btn-reboot').style.display = 'flex';\n  } //Construyendo el tablero\n\n\n  const buildTablero = () => {\n    var divGame = document.querySelector('#game');\n\n    for (let i = 1; i <= 9; i++) {\n      var casilla = document.createElement('button');\n      casilla.classList.add('casilla');\n      casilla.setAttribute(\"id\", \"no\".concat(i));\n      var imageTurnTache = document.createElement('img');\n      imageTurnTache.classList.add('imageTurnTache');\n      imageTurnTache.setAttribute(\"id\", \"imageTurnTache\".concat(i));\n      imageTurnTache.setAttribute(\"src\", './assets/icons/tache.png');\n      var imageTurnCirculo = document.createElement('img');\n      imageTurnCirculo.classList.add('imageTurnCirculo');\n      imageTurnCirculo.setAttribute(\"id\", \"imageTurnCirculo\".concat(i));\n      imageTurnCirculo.setAttribute(\"src\", './assets/icons/circulo.png');\n      casilla.appendChild(imageTurnTache);\n      casilla.appendChild(imageTurnCirculo);\n      divGame.appendChild(casilla);\n    }\n\n    ;\n  };\n\n  const btnTwoPlayers = document.querySelector('#twoPlayers'); //Boton dos jugadores escuchando\n\n  btnTwoPlayers.addEventListener('click', () => {\n    const reloadBtn = document.querySelector('#btn-retry'); //Boton reload escuchando\n\n    reloadBtn.addEventListener('click', () => {\n      window.location.reload();\n    });\n    btnTwoPlayers.style.display = 'none';\n    btnBot.style.display = 'none';\n    document.querySelector('.header-tablero').style.display = 'grid';\n    document.querySelector('#tablero').classList.remove('container-btn');\n    document.querySelector('#game').style.display = 'grid';\n    document.querySelector('#turno').innerHTML = JSON.parse(localStorage.getItem('tiroRed')) ? 'Empieza Tache' : 'Empieza Circulo';\n    JSON.parse(localStorage.getItem('tiroRed')) ? document.querySelector('#turno').classList.add('red') : document.querySelector('#turno').classList.add('blue');\n    buildTablero();\n    (0,_game_mjs__WEBPACK_IMPORTED_MODULE_1__.game)();\n  });\n  const btnBot = document.querySelector('#bot');\n  btnBot.addEventListener('click', () => {\n    btnTwoPlayers.style.display = 'none';\n    btnBot.style.display = 'none';\n    const reloadBtn = document.querySelector('#btn-retry'); //Boton reload escuchando\n\n    reloadBtn.addEventListener('click', () => {\n      window.location.reload();\n    });\n    btnTwoPlayers.style.display = 'none';\n    btnBot.style.display = 'none';\n    document.querySelector('.header-tablero').style.display = 'grid';\n    document.querySelector('#tablero').classList.remove('container-btn');\n    document.querySelector('#game').style.display = 'grid';\n    document.querySelector('#turno').innerHTML = JSON.parse(localStorage.getItem('tiroRed')) ? 'Empieza Tache' : 'Empieza Circulo';\n    document.querySelector('#txtBluePlayer').innerHTML = \"Bot 🤖\";\n    JSON.parse(localStorage.getItem('tiroRed')) ? document.querySelector('#turno').classList.add('red') : document.querySelector('#turno').classList.add('blue');\n    buildTablero();\n    (0,_game_mjs__WEBPACK_IMPORTED_MODULE_1__.gameBot)();\n  }); //Reset score\n\n  const resetbtn = document.querySelector('#resetScore');\n  resetbtn.addEventListener('click', () => {\n    sessionStorage.setItem('red', 0);\n    sessionStorage.setItem('blue', 0);\n    window.location.reload();\n  });\n});\n\n//# sourceURL=webpack://gato/./src/index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f);\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ ((module) => {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar trim = (__webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js/internals/string-trim.js\").trim);\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar $parseInt = global.parseInt;\nvar hex = /^[+-]?0[Xx]/;\nvar FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\nmodule.exports = FORCED ? function parseInt(string, radix) {\n  var S = trim(String(string));\n  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));\n} : $parseInt;\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/number-parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = (__webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf);\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.5',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js/internals/whitespaces.js\");\n\nvar whitespace = '[' + whitespaces + ']';\nvar ltrim = RegExp('^' + whitespace + whitespace + '*');\nvar rtrim = RegExp(whitespace + whitespace + '*$');\n\n// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation\nvar createMethod = function (TYPE) {\n  return function ($this) {\n    var string = String(requireObjectCoercible($this));\n    if (TYPE & 1) string = string.replace(ltrim, '');\n    if (TYPE & 2) string = string.replace(rtrim, '');\n    return string;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.{ trimLeft, trimStart }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart\n  start: createMethod(1),\n  // `String.prototype.{ trimRight, trimEnd }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend\n  end: createMethod(2),\n  // `String.prototype.trim` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trim\n  trim: createMethod(3)\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ ((module) => {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module) => {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("// a string of all valid unicode whitespaces\n// eslint-disable-next-line max-len\nmodule.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/internals/whitespaces.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ \"./node_modules/core-js/internals/number-parse-int.js\");\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\n$({ global: true, forced: parseInt != parseIntImplementation }, {\n  parseInt: parseIntImplementation\n});\n\n\n//# sourceURL=webpack://gato/./node_modules/core-js/modules/es.parse-int.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./root.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/root.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --blue-shadow-clear: rgba(24, 133, 194, 0.3);\\n    --blue-shadow-strong: rgba(24, 133, 194, 0.4);\\n    --blue-gradient: linear-gradient(to bottom right, #0b404d, #298ea6);\\n    --blue-gradient-btn: linear-gradient(to bottom right, rgba(17, 78, 112, 0.974), rgba(24, 132, 194, 0.996));\\n    --black-gradient: linear-gradient(to bottom right, #333333, #121212);\\n    --box-shadow: 0px 2px 10px rgba(8, 9, 10, 0.3), 0px 4px 20px rgba(0, 0, 0, 0.4);\\n    --box-shadow-btn: 0px 2px 10px var(--blue-shadow-clear), 0px 4px 20px var(--blue-shadow-strong);\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n\\nhtml {\\n    font-size: 62.5%;\\n    min-width: 32rem;\\n}\\n\\nbody {\\n    height: 100vh;\\n    background: var(--blue-gradient);\\n    min-width: 320px;\\n}\\n\\nheader {\\n    display: flex;\\n    height: 4rem;\\n    background: var(--black-gradient);\\n    min-width: 320px;\\n    min-height: 35px;\\n}\\n\\n.title {\\n    color: white;\\n    margin: auto auto;\\n    font-size: var(--title);\\n}\\n\\n.container-logo-github {\\n    position: static;\\n    top: 0;\\n    right: 0;\\n    border-left: 4rem solid transparent;\\n    border-top: 3.5rem solid white;\\n    border-bottom: 3rem solid transparent;\\n}\\n\\n.icon-github {\\n    width: 2.2rem;\\n    position: absolute;\\n    transform: rotate(45deg);\\n    top: 0;\\n    right: 0;\\n    -webkit-transform: rotate(45deg);\\n    -moz-transform: rotate(45deg);\\n    -ms-transform: rotate(45deg);\\n    -o-transform: rotate(45deg);\\n    transition: background-position 500ms 0ms;\\n    -webkit-transition: background-position 500ms 0ms;\\n    -moz-transition: background-position 500ms 0ms;\\n    -ms-transition: background-position 500ms 0ms;\\n    -o-transition: background-position 500ms 0ms;\\n}\\n\\n.icon-github:hover {\\n    background: linear-gradient(to bottom right, #0b404d, #298ea6);\\n    border-radius: 50%;\\n    -webkit-border-radius: 50%;\\n    -moz-border-radius: 50%;\\n    -ms-border-radius: 50%;\\n    -o-border-radius: 50%;\\n    background-position: 2rem;\\n}\\n\\n\\n/*------------------Tablero----------------*/\\n\\n.container-tablero {\\n    background-color: var(--backgorund-color-tablero);\\n    margin: 2rem 2rem;\\n    height: 28rem;\\n    box-shadow: var(--box-shadow);\\n}\\n\\n.tablero {\\n    height: 100%;\\n    width: 100%;\\n    min-width: 280px;\\n    background-color: #d4d106;\\n}\\n\\n.container-btn {\\n    display: flex;\\n}\\n\\n\\n/*dispocision de las casillas*/\\n\\n.game {\\n    display: none;\\n    grid-template-columns: repeat(3, 5rem);\\n    gap: 1rem;\\n    width: fit-content;\\n    height: fit-content;\\n    margin: auto auto;\\n    background: var(--blue-gradient-btn);\\n    border: #0b404d 1px solid;\\n}\\n\\n.victory {\\n    display: none;\\n    margin: auto auto;\\n    font-size: var(--subtitle);\\n    font-weight: bold;\\n}\\n\\n.red {\\n    color: #FF5440;\\n}\\n\\n.blue {\\n    color: rgb(0, 81, 255);\\n}\\n\\n\\n/*Botones: 2 jugadores - bot*/\\n\\n.btn-start {\\n    margin: auto auto;\\n    width: 11rem;\\n    height: 3.5rem;\\n    min-width: 93px;\\n    min-height: 28px;\\n    font-size: var(--details);\\n    box-shadow: var(--box-shadow);\\n    background: var(--blue-gradient-btn);\\n    border: 1px solid rgba(24, 133, 194);\\n    color: white;\\n    border-radius: 6px;\\n    -webkit-border-radius: 6px;\\n    -moz-border-radius: 6px;\\n    -ms-border-radius: 6px;\\n    -o-border-radius: 6px;\\n    cursor: pointer;\\n    font-weight: bold;\\n    transition: color 2s 100ms, background-position 1s ease, font-size 100ms 0ms;\\n    -webkit-transition: color 2s 100ms, background-position 1s ease, font-size 100ms 0ms;\\n    -moz-transition: color 2s 100ms, background-position 1s ease, font-size 100ms 0ms;\\n    -ms-transition: color 2s 100ms, background-position 1s ease, font-size 100ms 0ms;\\n    -o-transition: color 2s 100ms, background-position 1s ease, font-size 100ms 0ms;\\n}\\n\\n.btn-start:hover {\\n    background-position: 9.4rem;\\n}\\n\\n.btn-start:active {\\n    font-size: 1.45rem;\\n}\\n\\n*----------Casillas-----------*/ .game {\\n    display: none;\\n    background-color: var(--board-color);\\n    padding: 1rem 0 1.5rem;\\n    border-radius: 15px 15px 10px 10px;\\n    margin: 3rem 5px;\\n    grid-template: repeat(6, 1fr) / repeat(7, 1fr);\\n    column-gap: 0px;\\n    row-gap: 6px;\\n    justify-items: center;\\n    -webkit-border-radius: 15px 15px 10px 10px;\\n    -moz-border-radius: 15px 15px 10px 10px;\\n    -ms-border-radius: 15px 15px 10px 10px;\\n    -o-border-radius: 15px 15px 10px 10px;\\n}\\n\\n.casilla {\\n    border: none;\\n    height: 6rem;\\n    width: 5rem;\\n    background: #d4d106;\\n    cursor: pointer;\\n    background-size: auto;\\n}\\n\\n.imageTurnCirculo,\\n.imageTurnTache {\\n    width: 3rem;\\n    height: 3rem;\\n}\\n\\n.game button img {\\n    display: none;\\n}\\n\\n\\n/* -----------Header tablero------------------- */\\n\\n.header-tablero {\\n    grid-template-columns: repeat(4, 5rem);\\n    justify-content: space-between;\\n    margin-bottom: 1rem;\\n    height: 5rem;\\n}\\n\\n.one {\\n    grid-column-start: 1;\\n    grid-column-end: 2;\\n}\\n\\n.two {\\n    text-align: center;\\n    grid-column-start: 2;\\n    grid-column-end: 4;\\n}\\n\\n.header-tablero button {\\n    height: 4rem;\\n    width: 4rem;\\n}\\n\\n.header-tablero button img {\\n    height: 3rem;\\n    width: 3rem;\\n}\\n\\n.turno {\\n    font-size: var(--subtitle);\\n    margin-top: 1rem;\\n    font-weight: bold;\\n}\\n\\n\\n/*------------------Score------------------*/\\n\\n.score {\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n}\\n\\n.container-score {\\n    display: grid;\\n    grid-template-columns: 50% 50%;\\n    text-align: center;\\n    width: 90%;\\n    margin: 0 auto;\\n    background: inherit;\\n    background-color: rgba(61, 30, 30, 0.15);\\n    backdrop-filter: blur(1rem);\\n}\\n\\n.team {\\n    color: white;\\n    font-size: var(--body-text);\\n}\\n\\n.redPlayer {\\n    background-color: var(--red-player) !important;\\n    color: white !important;\\n    font-weight: bold;\\n    padding: 0 1rem;\\n    border-radius: 5px;\\n}\\n\\n.bluePlayer {\\n    background-color: var(--yellow-player) !important;\\n    color: black;\\n    font-weight: bold;\\n    padding: 0 1rem;\\n    border-radius: 5px;\\n}\\n\\n.draw {\\n    color: black;\\n    font-size: var(--title) !important;\\n    padding: 0 2rem;\\n}\\n\\n.score-icon {\\n    width: 4rem;\\n    margin: auto;\\n}\\n\\n.container-btn-reboot {\\n    display: none;\\n    flex-direction: column;\\n}\\n\\n.txt-reboot {\\n    margin: auto;\\n}\\n\\n.btn-reboot {\\n    display: flex;\\n    width: 5rem;\\n    height: 5rem;\\n    margin: auto;\\n    border-radius: 20%;\\n    -webkit-border-radius: 20%;\\n    -moz-border-radius: 20%;\\n    -ms-border-radius: 20%;\\n    -o-border-radius: 20%;\\n}\\n\\n.txt {\\n    font-size: var(--details);\\n    font-weight: bold;\\n    color: var(--txt-color);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gato/./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/root.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    /*font size for html = fontsize 62.5%*/\\n    --smallest: 1.2rem;\\n    --details: 1.3rem;\\n    /*up to 1.4 or 14px*/\\n    --body-text: 1.6rem;\\n    /*up to 1.8 or 18px*/\\n    --subtitle: 1.8rem;\\n    /*up to 2.0*/\\n    --title: 2.4rem;\\n    /*up to 2.8*/\\n    --header: 3.2rem;\\n    /*up to 1.8*/\\n}\\n\\n@media (min-width: 768px) {\\n     :root {\\n        --smallest: 1.6rem;\\n        --details: 1.6rem;\\n        /*up to 1.8 or 18px*/\\n        --body-text: 2rem;\\n        /*up to 2.1 or 21px*/\\n        --subtitle: 2.1rem;\\n        /*up to 2.4*/\\n        --title: 3.4rem;\\n        /*up to 3.8*/\\n        --header: 4rem;\\n        /*up to 4.8*/\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gato/./src/css/root.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://gato/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gato/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/icons/circulo.png":
/*!**************************************!*\
  !*** ./src/assets/icons/circulo.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/assets/icons/circulo.png\");\n\n//# sourceURL=webpack://gato/./src/assets/icons/circulo.png?");

/***/ }),

/***/ "./src/assets/icons/github.png":
/*!*************************************!*\
  !*** ./src/assets/icons/github.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/assets/icons/github.png\");\n\n//# sourceURL=webpack://gato/./src/assets/icons/github.png?");

/***/ }),

/***/ "./src/assets/icons/reload.png":
/*!*************************************!*\
  !*** ./src/assets/icons/reload.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/assets/icons/reload.png\");\n\n//# sourceURL=webpack://gato/./src/assets/icons/reload.png?");

/***/ }),

/***/ "./src/assets/icons/score-board.png":
/*!******************************************!*\
  !*** ./src/assets/icons/score-board.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/assets/icons/score-board.png\");\n\n//# sourceURL=webpack://gato/./src/assets/icons/score-board.png?");

/***/ }),

/***/ "./src/assets/icons/tache.png":
/*!************************************!*\
  !*** ./src/assets/icons/tache.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/assets/icons/tache.png\");\n\n//# sourceURL=webpack://gato/./src/assets/icons/tache.png?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gato/./src/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gato/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gato/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gato/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gato/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gato/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gato/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/game.mjs":
/*!**********************!*\
  !*** ./src/game.mjs ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game),\n/* harmony export */   \"gameBot\": () => (/* binding */ gameBot)\n/* harmony export */ });\n//Game with two players\nconst game = () => {\n    const columns = {\n        column1: [\n            { casilla: document.querySelector('#no1'), tiro: 'null', noCasilla: 1 },\n            { casilla: document.querySelector('#no4'), tiro: 'null', noCasilla: 4 },\n            { casilla: document.querySelector('#no7'), tiro: 'null', noCasilla: 7 },\n        ],\n        column2: [\n            { casilla: document.querySelector('#no2'), tiro: 'null', noCasilla: 2 },\n            { casilla: document.querySelector('#no5'), tiro: 'null', noCasilla: 5 },\n            { casilla: document.querySelector('#no8'), tiro: 'null', noCasilla: 8 },\n        ],\n        column3: [\n            { casilla: document.querySelector('#no3'), tiro: 'null', noCasilla: 3 },\n            { casilla: document.querySelector('#no6'), tiro: 'null', noCasilla: 6 },\n            { casilla: document.querySelector('#no9'), tiro: 'null', noCasilla: 9 },\n        ]\n    };\n    event(columns, columns.column1);\n    event(columns, columns.column2);\n    event(columns, columns.column3);\n}\n\nconst event = (columns, column) => {\n    for (let i = 0; i < column.length; i++) {\n        column[i].casilla.addEventListener('click', () => {\n            if (column[i].tiro == 'null') {\n                //Turnos\n                if (JSON.parse(localStorage.getItem('tiroRed'))) {\n                    column[i].tiro = 'red';\n                    localStorage.setItem('tiroRed', false);\n                    localStorage.setItem('tiroBlue', true);\n                    column[i].casilla.disabled = 'true';\n                    column[i].casilla.style.cursor = 'default';\n                    document.querySelector(`#imageTurnTache${column[i].noCasilla}`).style.display = \"inline\";\n                    document.querySelector('#turno').classList.remove('red')\n                    document.querySelector('#turno').classList.add('blue')\n                    document.querySelector('#turno').innerHTML = 'Turno Circulo'\n                } else if (JSON.parse(localStorage.getItem('tiroBlue'))) {\n                    column[i].tiro = 'blue';\n                    localStorage.setItem('tiroRed', true);\n                    localStorage.setItem('tiroBlue', false);\n                    column[i].casilla.disabled = true;\n                    column[i].casilla.style.cursor = 'default';\n                    document.querySelector(`#imageTurnCirculo${column[i].noCasilla}`).style.display = \"inline\";\n                    document.querySelector('#turno').classList.remove('blue');\n                    document.querySelector('#turno').classList.add('red');\n                    document.querySelector('#turno').innerHTML = 'Turno Tache';\n                }\n                victoria(columns);\n            }\n        });\n    }\n}\n\nconst victoria = (columns) => {\n    let lleno = false;\n    var arrayColumns = [columns.column1, columns.column2, columns.column3];\n    var aplanado = arrayColumns.flat()\n    var arrayCasillas = [];\n    for (let i in aplanado) {\n        arrayCasillas.push(aplanado[i].tiro)\n    }\n    lleno = arrayCasillas.includes('null') ? false : true;\n    //por filas\n    if (columns.column1[0].tiro == 'red' && columns.column2[0].tiro == 'red' && columns.column3[0].tiro == 'red') {\n        victoriaRed();\n    } else if (columns.column1[0].tiro == 'blue' && columns.column2[0].tiro == 'blue' && columns.column3[0].tiro == 'blue') {\n        victoriaBlue();\n    } else if (columns.column1[1].tiro == 'red' && columns.column2[1].tiro == 'red' && columns.column3[1].tiro == 'red') {\n        victoriaRed();\n    } else if (columns.column1[1].tiro == 'blue' && columns.column2[1].tiro == 'blue' && columns.column3[1].tiro == 'blue') {\n        victoriaBlue();\n    } else if (columns.column1[2].tiro == 'red' && columns.column2[2].tiro == 'red' && columns.column3[2].tiro == 'red') {\n        victoriaRed();\n    } else if (columns.column1[2].tiro == 'blue' && columns.column2[2].tiro == 'blue' && columns.column3[2].tiro == 'blue') {\n        victoriaBlue();\n    }\n    //por columnas\n    else if (columns.column1[0].tiro == 'red' && columns.column1[1].tiro == 'red' && columns.column1[2].tiro == 'red') {\n        victoriaRed();\n    } else if (columns.column1[0].tiro == 'blue' && columns.column1[1].tiro == 'blue' && columns.column1[2].tiro == 'blue') {\n        victoriaBlue();\n    } else if (columns.column2[0].tiro == 'red' && columns.column2[1].tiro == 'red' && columns.column2[2].tiro == 'red') {\n        victoriaRed();\n    } else if (columns.column2[0].tiro == 'blue' && columns.column2[1].tiro == 'blue' && columns.column2[2].tiro == 'blue') {\n        victoriaBlue();\n    } else if (columns.column3[0].tiro == 'red' && columns.column3[1].tiro == 'red' && columns.column3[2].tiro == 'red') {\n        victoriaRed();\n    } else if (columns.column3[0].tiro == 'blue' && columns.column3[1].tiro == 'blue' && columns.column3[2].tiro == 'blue') {\n        victoriaBlue();\n    }\n    //por diagonal\n    else if (columns.column1[0].tiro == 'red' && columns.column2[1].tiro == 'red' && columns.column3[2].tiro == 'red') {\n        victoriaRed();\n    } else if (columns.column1[0].tiro == 'blue' && columns.column2[1].tiro == 'blue' && columns.column3[2].tiro == 'blue') {\n        victoriaBlue();\n    } else if (columns.column1[2].tiro == 'red' && columns.column2[1].tiro == 'red' && columns.column3[0].tiro == 'red') {\n        victoriaRed();\n    } else if (columns.column1[2].tiro == 'blue' && columns.column2[1].tiro == 'blue' && columns.column3[0].tiro == 'blue') {\n        victoriaBlue();\n    } else if (lleno) {\n        draw();\n    }\n}\n\n\n//Para no repetir lo que pasa cuando un jugador gana\nconst victoriaRed = () => {\n    sessionStorage.setItem('RedWin', (parseInt(sessionStorage.getItem('RedWin')) + 1));\n    //Aumentando el score\n    if (parseInt(sessionStorage.getItem('RedWin')) === 1) {\n        sessionStorage.setItem('RedWin', 3);\n        sessionStorage.setItem('red', (parseInt(sessionStorage.getItem('red')) + 1));\n        document.querySelector('#redScore').innerHTML = sessionStorage.getItem('red');\n    }\n    document.querySelector('#turno').classList.remove('blue');\n    document.querySelector('#turno').classList.add('red');\n    document.querySelector('#turno').innerHTML = 'Gana el Rojo';\n    var casillas = document.getElementsByClassName('casilla');\n    //Desactivando las demas casillas\n    for (let i = 0; i < casillas.length; i++) {\n        casillas[i].disabled = true;\n        casillas[i].style.cursor = 'default';\n    }\n    //game over\n    localStorage.setItem('gameOver', true);\n\n}\nconst victoriaBlue = () => {\n    sessionStorage.setItem('BlueWin', (parseInt(sessionStorage.getItem('BlueWin')) + 1));\n    //Aumentando el score\n    if (parseInt(sessionStorage.getItem('BlueWin')) === 1) {\n        sessionStorage.setItem('blue', (parseInt(sessionStorage.getItem('blue')) + 1));\n        document.querySelector('#blueScore').innerHTML = sessionStorage.getItem('blue');\n    }\n    document.querySelector('#turno').classList.remove('red');\n    document.querySelector('#turno').classList.add('blue');\n    document.querySelector('#turno').innerHTML = 'Gana el Azul';\n    var casillas = document.getElementsByClassName('casilla');\n    //Desactivando las demas casillas\n    for (let i = 0; i < casillas.length; i++) {\n        casillas[i].disabled = true;\n        casillas[i].style.cursor = 'default';\n    }\n\n    //game over\n    localStorage.setItem('gameOver', true);\n}\nconst draw = () => {\n    //game over\n    localStorage.setItem('gameOver', true);\n    document.querySelector('#turno').classList.remove('red');\n    document.querySelector('#turno').classList.remove('blue');\n    document.querySelector('#turno').classList.add('draw');\n    document.querySelector('#turno').style.display = 'flex';\n    document.querySelector('#turno').innerHTML = 'Empate';\n    var casillas = document.getElementsByClassName('casilla');\n    //Desactivando las demas casillas\n    for (let i = 0; i < casillas.length; i++) {\n        casillas[i].disabled = true;\n        casillas[i].style.cursor = 'default';\n    }\n}\n\n//game with bot\nconst gameBot = () => {\n    sessionStorage.setItem('RedWin', 0)\n    sessionStorage.setItem('BlueWin', 0)\n    localStorage.setItem('gameOver', false);\n    localStorage.setItem('tiroRed', true);\n    localStorage.setItem('tiroBlue', false);\n    const columns = {\n        column1: [\n            { casilla: document.querySelector('#no1'), tiro: 'null', noCasilla: 1 },\n            { casilla: document.querySelector('#no4'), tiro: 'null', noCasilla: 4 },\n            { casilla: document.querySelector('#no7'), tiro: 'null', noCasilla: 7 },\n        ],\n        column2: [\n            { casilla: document.querySelector('#no2'), tiro: 'null', noCasilla: 2 },\n            { casilla: document.querySelector('#no5'), tiro: 'null', noCasilla: 5 },\n            { casilla: document.querySelector('#no8'), tiro: 'null', noCasilla: 8 },\n        ],\n        column3: [\n            { casilla: document.querySelector('#no3'), tiro: 'null', noCasilla: 3 },\n            { casilla: document.querySelector('#no6'), tiro: 'null', noCasilla: 6 },\n            { casilla: document.querySelector('#no9'), tiro: 'null', noCasilla: 9 },\n        ]\n    };\n    eventBot(columns, columns.column1);\n    eventBot(columns, columns.column2);\n    eventBot(columns, columns.column3);\n}\n\nconst eventBot = (columns, column) => {\n    for (let i = 0; i < column.length; i++) {\n        column[i].casilla.addEventListener('click', () => {\n            if (column[i].tiro == 'null') {\n                //Turnos\n                if (JSON.parse(localStorage.getItem('tiroRed'))) {\n                    column[i].tiro = 'red';\n                    localStorage.setItem('tiroRed', false);\n                    localStorage.setItem('tiroBlue', true);\n                    column[i].casilla.disabled = 'true';\n                    column[i].casilla.style.cursor = 'default';\n                    document.querySelector(`#imageTurnTache${column[i].noCasilla}`).style.display = \"inline\";\n                    document.querySelector('#turno').classList.remove('red');\n                    document.querySelector('#turno').classList.add('blue');\n                    document.querySelector('#turno').innerHTML = 'Turno Circulo';\n                    //tiro bot (el tiro del bot se hace del turno del jugador ya que estamos en un addEventListen y se ejecuta despues de todos los cambios del tiro del jugador)\n                    //Evaluamos si el juego ya ha terminado\n                    if (JSON.parse(localStorage.getItem('gameOver')) === false) {\n                        //Creamos una funcion para que el bot tire\n                        setTimeout(() => {\n                            tiroBot(columns);\n                        }, 200);\n                    }\n                }\n                //\"turno\" bot - para el cambio del tiro\n                else if (JSON.parse(localStorage.getItem('tiroBlue'))) {\n                    //Evalua en caso de victoria despues del tiro\n                    //Conservamos los cambios que se hacen cuando se tira\n                    column[i].tiro = 'blue';\n                    localStorage.setItem('tiroRed', true);\n                    localStorage.setItem('tiroBlue', false);\n                    column[i].casilla.disabled = true;\n                    column[i].casilla.style.cursor = 'default';\n                    document.querySelector(`#imageTurnCirculo${column[i].noCasilla}`).style.display = \"inline\";\n                    document.querySelector('#turno').classList.remove('blue');\n                    document.querySelector('#turno').classList.add('red');\n                    document.querySelector('#turno').innerHTML = 'Turno Tache';\n                }\n            }\n        });\n    }\n}\n\nconst tiroBot = (columns) => {\n    let bandera = false;\n    //tomar el objeto con las columnas\n    const arrayColumns = [columns.column1, columns.column2, columns.column3];\n    //El tiro al azar\n    var tiroAzarColumna = Math.floor(Math.random() * 3);\n    var tiroAzarCasilla = Math.floor(Math.random() * 3);\n    //Evaluar si ya termino el juego y no entre en bucle\n    if (JSON.parse(localStorage.getItem('gameOver')) === false) {\n        //evaluar si no esta ocupada\n        if (arrayColumns[tiroAzarColumna][tiroAzarCasilla].tiro === \"null\") {\n            arrayColumns[tiroAzarColumna][tiroAzarCasilla].casilla.click();\n        } else if (arrayColumns[tiroAzarColumna][tiroAzarCasilla].tiro !== \"null\") {\n            //Evaluar si ya terminó el juego para que no entre en un bucle recursivo\n            victoria(columns);\n            if (JSON.parse(localStorage.getItem('gameOver')) === true) {\n                bandera = true;\n            }\n            //funcion recursiva\n            tiroBot(columns);\n        }\n    }\n    //Todo Quitar esto y arreglar de otra manera el score con banderas\n    //No aumente en medida el score\n\n    if (!bandera) {\n        victoria(columns);\n    }\n}\n\n//# sourceURL=webpack://gato/./src/game.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
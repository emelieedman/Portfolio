module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Head/index.jsx":
/*!******************************************!*\
  !*** ./components/common/Head/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/common/Head/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* This is the html <header> element which you'll need
your site to have to comply with web standards.
This is NOT a visual header */

const Head = ({
  title,
  description
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("meta", {
  charSet: "UTF-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, title || ''), __jsx("meta", {
  name: "description",
  content: description || '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, inititial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Poppins&display=swap",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("link", {
  rel: "shortcut icon",
  type: "image/x-icon",
  href: "/favicon.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/layouts/DefaultLayout/index.js":
/*!***************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/layouts/DefaultLayout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleReset.scss */ "./components/layouts/DefaultLayout/styleReset.scss");
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styleReset_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Head */ "./components/common/Head/index.jsx");
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/layouts/DefaultLayout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


/* components */



const DefaultLayout = props => {
  const title = 'Hyper Island FED21';
  const description = 'Kick-off template for FED21 students';
  return __jsx("div", {
    className: (_styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default.a, _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pageWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_common_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    description: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/layouts/DefaultLayout/index.scss":
/*!*****************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/layouts/DefaultLayout/styleReset.scss":
/*!**********************************************************!*\
  !*** ./components/layouts/DefaultLayout/styleReset.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/modules/App/App.jsx":
/*!****************************************!*\
  !*** ./components/modules/App/App.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadlineModule_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HeadlineModule/index */ "./components/modules/HeadlineModule/index.jsx");
/* harmony import */ var _Collage_Collage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Collage/Collage */ "./components/modules/Collage/Collage.jsx");
/* harmony import */ var _Project_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Project/Project */ "./components/modules/Project/Project.jsx");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors */ "./components/modules/App/colors.js");
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/modules/App/App.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const App = ({
  headlineModuleData,
  collageData,
  projectData
}) => {
  const {
    0: colorIndex,
    1: setColorIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: backgroundColorIndex,
    1: setBackgroundColorIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: singleColorIndex,
    1: setSingleColorIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const color = _colors__WEBPACK_IMPORTED_MODULE_4__["titleColors"][colorIndex];
  const backgroundColor = _colors__WEBPACK_IMPORTED_MODULE_4__["backgroundColors"][backgroundColorIndex];
  const singleColor = _colors__WEBPACK_IMPORTED_MODULE_4__["singleColors"][singleColorIndex];

  function changeColor() {
    // if (colorIndex < titleColors.length - 1) {
    //   setColorIndex(colorIndex + 1);
    // } else {
    //   setColorIndex(0);
    // }
    setColorIndex((colorIndex + 1) % _colors__WEBPACK_IMPORTED_MODULE_4__["titleColors"].length);
  }

  function changeBackgroundColor() {
    setBackgroundColorIndex((backgroundColorIndex + 1) % _colors__WEBPACK_IMPORTED_MODULE_4__["backgroundColors"].length);
  }

  function changeSingleColor() {
    setSingleColorIndex((singleColorIndex + 1) % _colors__WEBPACK_IMPORTED_MODULE_4__["singleColors"].length);
  }

  console.log(projectData);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_HeadlineModule_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: headlineModuleData.title,
    subtitle: headlineModuleData.subtitle,
    button: headlineModuleData.button,
    changeBackgroundColor: changeBackgroundColor,
    changeColor: changeColor,
    changeSingleColor: changeSingleColor,
    backgroundColor: backgroundColor,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(_Collage_Collage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: collageData.title,
    project: collageData.project,
    project2: collageData.project2,
    project3: collageData.project3,
    project4: collageData.project4,
    project5: collageData.project5,
    changeSingleColor: changeSingleColor,
    singleColor: singleColor,
    backgroundColor: backgroundColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx(_Project_Project__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: projectData.Title,
    subtitle: projectData.subtitle,
    paragraph: projectData.Paragraph,
    image: projectData.Image,
    subtitle2: projectData.subtitle2,
    paragraph2: projectData.paragraph2,
    image2: projectData.image2,
    subtitle3: projectData.subtitle3,
    paragraph3: projectData.paragraph3,
    image3: projectData.image3,
    subtitle4: projectData.subtitle4,
    paragraph4: projectData.paragraph4,
    image4: projectData.image4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/modules/App/colors.js":
/*!******************************************!*\
  !*** ./components/modules/App/colors.js ***!
  \******************************************/
/*! exports provided: titleColors, backgroundColors, singleColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleColors", function() { return titleColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundColors", function() { return backgroundColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleColors", function() { return singleColors; });
const titleColors = [{
  background: 'linear-gradient(to right, #000000 335px, #FFFFFF 335px, #FFFFFF 990px, #000000 990px)',
  ['-webkit-text-fill-color']: 'transparent',
  ['-webkit-background-clip']: 'text'
}, {
  background: 'linear-gradient(to right, #000000 335px, #BBFFF2 335px, #BBFFF2 990px, #000000 990px)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text'
}, {
  background: 'linear-gradient(to right, #000000 335px, #FFFDCD 335px, #FFFDCD 990px, #000000 990px)',
  ['-webkit-text-fill-color']: 'transparent',
  ['-webkit-background-clip']: 'text'
}, {
  background: 'linear-gradient(to right, #000000 335px, #FFD0EF 335px, #FFD0EF 990px, #000000 990px)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text'
}];
const backgroundColors = [{
  backgroundColor: '#9ABCFF',
  color: '#FFFFFF'
}, {
  backgroundColor: '#FFCBCB',
  color: '#BBFFF2'
}, {
  backgroundColor: '#DEBCD2',
  color: '#FFFDCD'
}, {
  backgroundColor: '#68DEC2',
  color: '#FFD0EF'
}];
const singleColors = [{
  color: '#9ABCFF'
}, {
  color: '#FFCBCB'
}, {
  color: '#DEBCD2'
}, {
  color: '#68DEC2'
}];

/***/ }),

/***/ "./components/modules/Collage/Collage.jsx":
/*!************************************************!*\
  !*** ./components/modules/Collage/Collage.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Collage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collage.scss */ "./components/modules/Collage/Collage.scss");
/* harmony import */ var _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Collage_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/modules/Collage/Collage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Collage = ({
  title,
  project,
  project2,
  project3,
  project4,
  project5,
  singleColor
}) => {
  return __jsx("div", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h1", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, title), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project,
    style: singleColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, project), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, project2), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, project3), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project4,
    style: singleColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, project4), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, project5));
};

/* harmony default export */ __webpack_exports__["default"] = (Collage);

/***/ }),

/***/ "./components/modules/Collage/Collage.scss":
/*!*************************************************!*\
  !*** ./components/modules/Collage/Collage.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___SCdiC",
	"title": "title___LI0u_",
	"project": "project___a4AYA",
	"scale-up-center": "scale-up-center___33Emr",
	"project2": "project2___1QuqT",
	"project3": "project3___2nXMX",
	"project4": "project4___26CHq",
	"project5": "project5___ZUiVu"
};

/***/ }),

/***/ "./components/modules/HeadlineModule/index.jsx":
/*!*****************************************************!*\
  !*** ./components/modules/HeadlineModule/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/HeadlineModule/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/modules/HeadlineModule/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HeadlineModule = ({
  title,
  subtitle,
  button,
  backgroundColor,
  color,
  changeColor,
  changeBackgroundColor,
  changeSingleColor
}) => {
  return __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.box,
    style: backgroundColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("h1", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    style: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, title), __jsx("h2", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,
    style: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, subtitle), __jsx("button", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button,
    style: backgroundColor,
    onClick: () => {
      changeColor();
      changeBackgroundColor();
      changeSingleColor();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, button));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadlineModule);

/***/ }),

/***/ "./components/modules/HeadlineModule/index.scss":
/*!******************************************************!*\
  !*** ./components/modules/HeadlineModule/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___3ctKN",
	"title": "title___1CDvp",
	"subtitle": "subtitle___35mkW",
	"box": "box___1KUqb",
	"button": "button___3gxK-"
};

/***/ }),

/***/ "./components/modules/Project/Project.jsx":
/*!************************************************!*\
  !*** ./components/modules/Project/Project.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Project_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.scss */ "./components/modules/Project/Project.scss");
/* harmony import */ var _Project_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Project_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/modules/Project/Project.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Project = ({
  title,
  subtitle,
  paragraph,
  image,
  subtitle2,
  paragraph2,
  image2,
  subtitle3,
  paragraph3,
  image3,
  subtitle4,
  paragraph4,
  image4
}) => {
  console.log(title);
  return __jsx("div", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h3", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, title), __jsx("h4", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, subtitle), __jsx("p", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, paragraph), __jsx("img", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    src: image,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("h4", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, subtitle2), __jsx("p", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, paragraph2), __jsx("img", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image2,
    src: image2,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("h4", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, subtitle3), __jsx("p", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, paragraph3), __jsx("img", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image3,
    src: image3,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("h4", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, subtitle4), __jsx("p", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, paragraph4), __jsx("img", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image4,
    src: image4,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./components/modules/Project/Project.scss":
/*!*************************************************!*\
  !*** ./components/modules/Project/Project.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___1NY5g",
	"title": "title___24nBl",
	"subtitle": "subtitle___-L6hG",
	"subtitle2": "subtitle2___Jj0qk",
	"subtitle3": "subtitle3___yNZBv",
	"subtitle4": "subtitle4___PWP-e",
	"paragraph": "paragraph___3Xu6L",
	"paragraph2": "paragraph2___29-iR",
	"paragraph3": "paragraph3___27CQT",
	"paragraph4": "paragraph4___3W4Fo",
	"image": "image___5RbdF",
	"image2": "image2___1pfsT",
	"image3": "image3___2jUD5",
	"image4": "image4___jEsoW"
};

/***/ }),

/***/ "./fetchUrl.js":
/*!*********************!*\
  !*** ./fetchUrl.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);


function fetchUrl(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(r => r.json());
}

/* harmony default export */ __webpack_exports__["default"] = (fetchUrl);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_modules_App_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/modules/App/App */ "./components/modules/App/App.jsx");
/* harmony import */ var _fetchUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetchUrl */ "./fetchUrl.js");
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const IndexPage = ({
  data
}) => {
  const {
    content
  } = data;
  const headlineModuleData = content.body.find(item => item.component === 'Headline');
  const collageData = content.body.find(item => item.component === 'Collage');
  const projectData = content.body.find(item => item.component === 'Project');
  console.log(projectData);
  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, headlineModuleData && collageData && projectData ? __jsx(_components_modules_App_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    headlineModuleData: headlineModuleData,
    collageData: collageData,
    projectData: projectData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }) : null);
};

IndexPage.getInitialProps = async () => {
  const data = await Object(_fetchUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(`http://localhost:3000/api/page/home`);
  return {
    data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
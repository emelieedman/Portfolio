webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/modules/App/App.jsx":
/*!****************************************!*\
  !*** ./components/modules/App/App.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadlineModule_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HeadlineModule/index */ "./components/modules/HeadlineModule/index.jsx");
/* harmony import */ var _Collage_Collage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Collage/Collage */ "./components/modules/Collage/Collage.jsx");
/* harmony import */ var _Project_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Project/Project */ "./components/modules/Project/Project.jsx");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors */ "./components/modules/App/colors.js");
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/modules/App/App.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var App = function App(_ref) {
  var headlineModuleData = _ref.headlineModuleData,
      collageData = _ref.collageData,
      projectData = _ref.projectData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      colorIndex = _useState[0],
      setColorIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      backgroundColorIndex = _useState2[0],
      setBackgroundColorIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      singleColorIndex = _useState3[0],
      setSingleColorIndex = _useState3[1];

  var color = _colors__WEBPACK_IMPORTED_MODULE_4__["titleColors"][colorIndex];
  var backgroundColor = _colors__WEBPACK_IMPORTED_MODULE_4__["backgroundColors"][backgroundColorIndex];
  var singleColor = _colors__WEBPACK_IMPORTED_MODULE_4__["singleColors"][singleColorIndex];

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
    __self: this
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
    __self: this
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
    __self: this
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
    __self: this
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");


var _ref, _ref2;

var titleColors = [(_ref = {
  background: 'linear-gradient(to right, #000000 335px, #FFFFFF 335px, #FFFFFF 990px, #000000 990px)'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, '-webkit-text-fill-color', 'transparent'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, '-webkit-background-clip', 'text'), _ref), {
  background: 'linear-gradient(to right, #000000 335px, #BBFFF2 335px, #BBFFF2 990px, #000000 990px)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text'
}, (_ref2 = {
  background: 'linear-gradient(to right, #000000 335px, #FFFDCD 335px, #FFFDCD 990px, #000000 990px)'
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, '-webkit-text-fill-color', 'transparent'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, '-webkit-background-clip', 'text'), _ref2), {
  background: 'linear-gradient(to right, #000000 335px, #FFD0EF 335px, #FFD0EF 990px, #000000 990px)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text'
}];
var backgroundColors = [{
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
var singleColors = [{
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Collage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collage.scss */ "./components/modules/Collage/Collage.scss");
/* harmony import */ var _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Collage_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/modules/Collage/Collage.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Collage = function Collage(_ref) {
  var title = _ref.title,
      project = _ref.project,
      project2 = _ref.project2,
      project3 = _ref.project3,
      project4 = _ref.project4,
      project5 = _ref.project5,
      singleColor = _ref.singleColor;
  return __jsx("div", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h1", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project,
    style: singleColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, project), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, project2), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, project3), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project4,
    style: singleColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, project4), __jsx("h2", {
    className: _Collage_scss__WEBPACK_IMPORTED_MODULE_1___default.a.project5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, project5));
};

/* harmony default export */ __webpack_exports__["default"] = (Collage);

/***/ }),

/***/ "./components/modules/HeadlineModule/index.jsx":
/*!*****************************************************!*\
  !*** ./components/modules/HeadlineModule/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/modules/HeadlineModule/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/modules/HeadlineModule/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var HeadlineModule = function HeadlineModule(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      button = _ref.button,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      changeColor = _ref.changeColor,
      changeBackgroundColor = _ref.changeBackgroundColor,
      changeSingleColor = _ref.changeSingleColor;
  return __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.box,
    style: backgroundColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("h1", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    style: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, title), __jsx("h2", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,
    style: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, subtitle), __jsx("button", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button,
    style: backgroundColor,
    onClick: function onClick() {
      changeColor();
      changeBackgroundColor();
      changeSingleColor();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, button));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadlineModule);

/***/ }),

/***/ "./components/modules/Project/Project.jsx":
/*!************************************************!*\
  !*** ./components/modules/Project/Project.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Project_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.scss */ "./components/modules/Project/Project.scss");
/* harmony import */ var _Project_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Project_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/components/modules/Project/Project.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Project = function Project(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      paragraph = _ref.paragraph,
      image = _ref.image,
      subtitle2 = _ref.subtitle2,
      paragraph2 = _ref.paragraph2,
      image2 = _ref.image2,
      subtitle3 = _ref.subtitle3,
      paragraph3 = _ref.paragraph3,
      image3 = _ref.image3,
      subtitle4 = _ref.subtitle4,
      paragraph4 = _ref.paragraph4,
      image4 = _ref.image4;
  console.log(title);
  return __jsx("div", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h3", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title), __jsx("h4", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, subtitle), __jsx("p", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, paragraph), __jsx("img", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    src: image,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("h4", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, subtitle2), __jsx("p", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, paragraph2), __jsx("img", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image2,
    src: image2,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("h4", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, subtitle3), __jsx("p", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, paragraph3), __jsx("img", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image3,
    src: image3,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("h4", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, subtitle4), __jsx("p", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.paragraph4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, paragraph4), __jsx("img", {
    className: _Project_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image4,
    src: image4,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./fetchUrl.js":
/*!*********************!*\
  !*** ./fetchUrl.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);


function fetchUrl(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(function (r) {
    return r.json();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (fetchUrl);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_modules_App_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/App/App */ "./components/modules/App/App.jsx");
/* harmony import */ var _fetchUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetchUrl */ "./fetchUrl.js");

var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var IndexPage = function IndexPage(_ref) {
  var data = _ref.data;
  var content = data.content;
  var headlineModuleData = content.body.find(function (item) {
    return item.component === 'Headline';
  });
  var collageData = content.body.find(function (item) {
    return item.component === 'Collage';
  });
  var projectData = content.body.find(function (item) {
    return item.component === 'Project';
  });
  console.log(projectData);
  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, headlineModuleData && collageData && projectData ? __jsx(_components_modules_App_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headlineModuleData: headlineModuleData,
    collageData: collageData,
    projectData: projectData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }) : null);
};

IndexPage.getInitialProps = function _callee() {
  var data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_fetchUrl__WEBPACK_IMPORTED_MODULE_4__["default"])("http://localhost:3000/api/page/home"));

        case 2:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.ddca0f4ac32afd284d67.hot-update.js.map
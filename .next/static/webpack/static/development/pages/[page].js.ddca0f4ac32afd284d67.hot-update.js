webpackHotUpdate("static/development/pages/[page].js",{

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

/***/ "./components/modules/ParagraphModule/index.jsx":
false,

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

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/HeadlineModule */ "./components/modules/HeadlineModule/index.jsx");
/* harmony import */ var _components_modules_Collage_Collage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modules/Collage/Collage.jsx */ "./components/modules/Collage/Collage.jsx");
/* harmony import */ var _fetchUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetchUrl */ "./fetchUrl.js");

var _jsxFileName = "/Users/emelie/Desktop/hyper-island-projects/react-storyblok-next-boilerplate/pages/[page].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* 🌈 This is the client side 🌈*/

/* layout */

/* components */




/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */

var SlugPage = function SlugPage(_ref) {
  var data = _ref.data;
  var content = data.content;
  var headlineModuleData = content.body.find(function (item) {
    return item.component === 'Headline';
  });
  var collageData = content.body.find(function (item) {
    return item.component === 'Collage';
  });
  /* Now you need to map your own components, I just left the headline module as reference */

  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, headlineModuleData ? __jsx(_components_modules_HeadlineModule__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: headlineModuleData.title,
    subtitle: headlineModuleData.subtitle,
    button: headlineModuleData.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }) : null, collageData ? __jsx(_components_modules_Collage_Collage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: collageData.title,
    project: collageData.project,
    project2: collageData.project2,
    project3: collageData.project3,
    project4: collageData.project4,
    project5: collageData.project5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }) : null);
};
/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */


SlugPage.getInitialProps = function _callee(_ref2) {
  var query, page, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;

          /* {query} is an object we receive within this method from Next,
          so that we can retrieve the slug (e.g. '/welcome') coming with the route */
          page = query.page;
          /* Calling our internal api endpoint so that we can fetch Storyblok content
          server-side (we are on client-side here) */

          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_fetchUrl__WEBPACK_IMPORTED_MODULE_5__["default"])("http://localhost:3000/api/page/".concat(page)));

        case 4:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SlugPage);

/***/ })

})
//# sourceMappingURL=[page].js.ddca0f4ac32afd284d67.hot-update.js.map
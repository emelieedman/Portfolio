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

/***/ })

})
//# sourceMappingURL=index.js.6360d51a4dca9f439c9f.hot-update.js.map
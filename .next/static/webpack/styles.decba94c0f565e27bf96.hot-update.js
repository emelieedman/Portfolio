webpackHotUpdate("styles",{

/***/ "./components/modules/Project/Project.scss":
/*!*************************************************!*\
  !*** ./components/modules/Project/Project.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"wrapper":"wrapper___1NY5g","title":"title___24nBl","subtitle":"subtitle___-L6hG","paragraph":"paragraph___3Xu6L","image":"image___5RbdF","subtitle2":"subtitle2___Jj0qk","paragraph2":"paragraph2___29-iR","image2":"image2___1pfsT","subtitle3":"subtitle3___yNZBv","paragraph3":"paragraph3___27CQT","image3":"image3___2jUD5","subtitle4":"subtitle4___PWP-e","paragraph4":"paragraph4___3W4Fo","image4":"image4___jEsoW"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1585820631537");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.decba94c0f565e27bf96.hot-update.js.map
webpackHotUpdate(0,{

/***/ "./components/Sidebar/Sidebar.scss":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
module.exports = {"sidebarContainer":"sidebarContainer___MNkvp","sidebar":"sidebar___3fA8_","logo":"logo___G6f2V","navLink":"navLink___22thF"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1536643085934");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=0.e6323fbc962b16f5e455.hot-update.js.map
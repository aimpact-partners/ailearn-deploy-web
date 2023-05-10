System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@0.0.5/base", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets005Base) {
      dependency_4 = _beyondJsReact18Widgets005Base;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["openai", "3.2.1"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@types/dom-mediacapture-record", "1.0.14"], ["@google-cloud/error-reporting", "3.0.5"], ["uuid", "9.0.0"], ["firebase", "9.17.2"], ["@firebase/util", "1.9.3"], ["@firebase/logger", "0.4.0"], ["@firebase/component", "0.6.4"], ["@google-cloud/logging", "10.4.0"], ["firebase-admin", "11.5.0"], ["socket.io-client", "4.6.1"], ["@ai-clase/demo", "0.0.1"], ["@ai-clase/demo", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@ai-clase/demo@0.0.1/layout"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/react-18-widgets/base', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@ai-clase/demo@0.0.1/layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@ai-clase/demo@0.0.1/layout');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./Layout
      ************************/
      ims.set('./Layout', {
        hash: 4070547040,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          const Layout = () => {
            const [showMenu, setShowMenu] = (0, _react.useState)(false);
            const toggleMenu = () => {
              setShowMenu(!showMenu);
            };
            const navigate = pathname => _routing.routing.pushState(pathname);
            const logout = () => {
              localStorage.removeItem("session");
              _routing.routing.pushState("/auth");
            };
            const session = localStorage.getItem("session");
            console.log("layout");
            return _react.default.createElement("div", {
              className: "layout"
            }, _react.default.createElement("header", null, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "header-title"
            }, "AI-Clase by BeyondAI"), session && _react.default.createElement("div", {
              className: "header-buttons"
            }, _react.default.createElement("div", {
              className: "header-button",
              onClick: () => navigate("/")
            }, "Actividades"), _react.default.createElement("div", {
              className: "header-button",
              onClick: logout
            }, "Cerrar Session")))), _react.default.createElement("main", null, _react.default.createElement("div", {
              className: `menu ${showMenu ? "show" : ""}`
            }, _react.default.createElement(Menu, null)), _react.default.createElement("beyond-layout-children", null)), _react.default.createElement("footer", null, _react.default.createElement(Footer, null)));
          };
          const Menu = () => {
            return _react.default.createElement("div", null, "Menu");
          };
          const Footer = () => {
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "footer-left"
            }, "@copyright Beyond-AI 2023"), _react.default.createElement("div", {
              className: "footer-right"
            }, "Powered by beyond-js (www.beyondjs.com)"));
          };
          var _default = Layout;
          exports.default = _default;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2332500762,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _Layout = require("./Layout");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _Layout.default;
            }
          }
          exports.Controller = Controller;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./index').Controller : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUVBLE1BQU1BLE1BQU0sR0FBYSxNQUFLO1lBQzVCLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRyxtQkFBUSxFQUFDLEtBQUssQ0FBQztZQUUvQyxNQUFNQyxVQUFVLEdBQUcsTUFBSztjQUN0QkQsV0FBVyxDQUFDLENBQUNELFFBQVEsQ0FBQztZQUN4QixDQUFDO1lBRUQsTUFBTUcsUUFBUSxHQUFJQyxRQUFnQixJQUFLQyxnQkFBTyxDQUFDQyxTQUFTLENBQUNGLFFBQVEsQ0FBQztZQUNsRSxNQUFNRyxNQUFNLEdBQUcsTUFBSztjQUNsQkMsWUFBWSxDQUFDQyxVQUFVLENBQUMsU0FBUyxDQUFDO2NBQ2xDSixnQkFBTyxDQUFDQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQzVCLENBQUM7WUFDRCxNQUFNSSxPQUFPLEdBQUdGLFlBQVksQ0FBQ0csT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUUvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBRXJCLE9BQ0VDO2NBQUtDLFNBQVMsRUFBQztZQUFRLEdBQ3JCRCw2Q0FDRUEsMENBQ0VBO2NBQUtDLFNBQVMsRUFBQztZQUFjLDBCQUEyQixFQUN2REwsT0FBTyxJQUNOSTtjQUFLQyxTQUFTLEVBQUM7WUFBZ0IsR0FDN0JEO2NBQUtDLFNBQVMsRUFBQyxlQUFlO2NBQUNDLE9BQU8sRUFBRSxNQUFNYixRQUFRLENBQUMsR0FBRztZQUFDLGlCQUVyRCxFQUNOVztjQUFLQyxTQUFTLEVBQUMsZUFBZTtjQUFDQyxPQUFPLEVBQUVUO1lBQU0sb0JBRXhDLENBRVQsQ0FDRyxDQUNDLEVBQ1RPLDJDQUNFQTtjQUFLQyxTQUFTLEVBQUUsUUFBUWYsUUFBUSxHQUFHLE1BQU0sR0FBRyxFQUFFO1lBQUUsR0FDOUNjLDZCQUFDRyxJQUFJLE9BQUcsQ0FDSixFQUNOSCw0REFBMEIsQ0FDckIsRUFDUEEsNkNBQ0VBLDZCQUFDSSxNQUFNLE9BQUcsQ0FDSCxDQUNMO1VBRVYsQ0FBQztVQUVELE1BQU1ELElBQUksR0FBYSxNQUFLO1lBQzFCLE9BQU9ILGlEQUFlO1VBQ3hCLENBQUM7VUFFRCxNQUFNSSxNQUFNLEdBQWEsTUFBSztZQUM1QixPQUNFSiwwQ0FDRUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsK0JBQWdDLEVBQzVERDtjQUFLQyxTQUFTLEVBQUM7WUFBYyw2Q0FBOEMsQ0FDdkU7VUFFVixDQUFDO1VBQUMsZUFFYWhCLE1BQU07VUFBQW9COzs7Ozs7Ozs7Ozs7Ozs7OztVQzlEckI7VUFDQTtVQUVPO1VBQVUsTUFDWEMsVUFBVyxTQUFRQywyQkFBcUI7WUFDNUMsSUFBSUMsTUFBTTtjQUNSLE9BQU92QixlQUFNO1lBQ2Y7O1VBQ0RvQiIsIm5hbWVzIjpbIkxheW91dCIsInNob3dNZW51Iiwic2V0U2hvd01lbnUiLCJ0b2dnbGVNZW51IiwibmF2aWdhdGUiLCJwYXRobmFtZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2Vzc2lvbiIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiTWVudSIsIkZvb3RlciIsImV4cG9ydHMiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJMYXlvdXQudHN4IiwiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==
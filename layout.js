System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@0.0.5/hooks", "@ai-clase/demo@0.0.1/session", "@beyond-js/react-18-widgets@0.0.5/base", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets005Hooks) {
      dependency_4 = _beyondJsReact18Widgets005Hooks;
    }, function (_aiClaseDemo001Session) {
      dependency_5 = _aiClaseDemo001Session;
    }, function (_beyondJsReact18Widgets005Base) {
      dependency_6 = _beyondJsReact18Widgets005Base;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['@ai-clase/demo/session', dependency_5], ['@beyond-js/react-18-widgets/base', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
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
        hash: 1860456476,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _session = require("@ai-clase/demo/session");
          const Layout = () => {
            const [showMenu, setShowMenu] = (0, _react.useState)(false);
            const [session, setSession] = (0, _react.useState)(_session.sessionWrapper.logged);
            (0, _hooks.useBinder)([_session.sessionWrapper], () => {
              console.warn("sessionWrapper.logged", _session.sessionWrapper.logged);
              setSession(_session.sessionWrapper.logged);
            });
            const toggleMenu = () => setShowMenu(!showMenu);
            const navigate = pathname => _routing.routing.pushState(pathname);
            const logout = () => {
              _session.sessionWrapper.logout();
              _routing.routing.pushState("/auth");
            };
            return _react.default.createElement("div", {
              className: "layout"
            }, _react.default.createElement("header", null, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "header-title"
            }, "AI-Clase by BeyondAI"), _session.sessionWrapper.logged ? _react.default.createElement("div", {
              className: "header-buttons"
            }, _react.default.createElement("div", {
              className: "header-button",
              onClick: () => navigate("/")
            }, "Actividades"), _react.default.createElement("div", {
              className: "header-button",
              onClick: logout
            }, "Cerrar Session")) : null)), _react.default.createElement("main", null, _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUNBO1VBRUEsTUFBTUEsTUFBTSxHQUFhLE1BQUs7WUFDNUIsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLG1CQUFRLEVBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRyxtQkFBUSxFQUFDQyx1QkFBYyxDQUFDQyxNQUFNLENBQUM7WUFFN0Qsb0JBQVMsRUFBQyxDQUFDRCx1QkFBYyxDQUFDLEVBQUUsTUFBSztjQUMvQkUsT0FBTyxDQUFDQyxJQUFJLENBQUMsdUJBQXVCLEVBQUVILHVCQUFjLENBQUNDLE1BQU0sQ0FBQztjQUM1REYsVUFBVSxDQUFDQyx1QkFBYyxDQUFDQyxNQUFNLENBQUM7WUFDbkMsQ0FBQyxDQUFDO1lBRUYsTUFBTUcsVUFBVSxHQUFHLE1BQU1QLFdBQVcsQ0FBQyxDQUFDRCxRQUFRLENBQUM7WUFDL0MsTUFBTVMsUUFBUSxHQUFJQyxRQUFnQixJQUFLQyxnQkFBTyxDQUFDQyxTQUFTLENBQUNGLFFBQVEsQ0FBQztZQUNsRSxNQUFNRyxNQUFNLEdBQUcsTUFBSztjQUNsQlQsdUJBQWMsQ0FBQ1MsTUFBTSxFQUFFO2NBQ3ZCRixnQkFBTyxDQUFDQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQzVCLENBQUM7WUFFRCxPQUNFRTtjQUFLQyxTQUFTLEVBQUM7WUFBUSxHQUNyQkQsNkNBQ0VBLDBDQUNFQTtjQUFLQyxTQUFTLEVBQUM7WUFBYywwQkFBMkIsRUFDdkRYLHVCQUFjLENBQUNDLE1BQU0sR0FDcEJTO2NBQUtDLFNBQVMsRUFBQztZQUFnQixHQUM3QkQ7Y0FBS0MsU0FBUyxFQUFDLGVBQWU7Y0FBQ0MsT0FBTyxFQUFFLE1BQU1QLFFBQVEsQ0FBQyxHQUFHO1lBQUMsaUJBRXJELEVBQ05LO2NBQUtDLFNBQVMsRUFBQyxlQUFlO2NBQUNDLE9BQU8sRUFBRUg7WUFBTSxvQkFFeEMsQ0FDRixHQUNKLElBQUksQ0FDSixDQUNDLEVBQ1RDLDJDQUNFQTtjQUFLQyxTQUFTLEVBQUUsUUFBUWYsUUFBUSxHQUFHLE1BQU0sR0FBRyxFQUFFO1lBQUUsR0FDOUNjLDZCQUFDRyxJQUFJLE9BQUcsQ0FDSixFQUNOSCw0REFBMEIsQ0FDckIsRUFDUEEsNkNBQ0VBLDZCQUFDSSxNQUFNLE9BQUcsQ0FDSCxDQUNMO1VBRVYsQ0FBQztVQUVELE1BQU1ELElBQUksR0FBYSxNQUFLO1lBQzFCLE9BQU9ILGlEQUFlO1VBQ3hCLENBQUM7VUFFRCxNQUFNSSxNQUFNLEdBQWEsTUFBSztZQUM1QixPQUNFSiwwQ0FDRUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsK0JBQWdDLEVBQzVERDtjQUFLQyxTQUFTLEVBQUM7WUFBYyw2Q0FBOEMsQ0FDdkU7VUFFVixDQUFDO1VBQUMsZUFFYWhCLE1BQU07VUFBQW9COzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hFckI7VUFDQTtVQUVPO1VBQVUsTUFDWEMsVUFBVyxTQUFRQywyQkFBcUI7WUFDNUMsSUFBSUMsTUFBTTtjQUNSLE9BQU92QixlQUFNO1lBQ2Y7O1VBQ0RvQiIsIm5hbWVzIjpbIkxheW91dCIsInNob3dNZW51Iiwic2V0U2hvd01lbnUiLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsInNlc3Npb25XcmFwcGVyIiwibG9nZ2VkIiwiY29uc29sZSIsIndhcm4iLCJ0b2dnbGVNZW51IiwibmF2aWdhdGUiLCJwYXRobmFtZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJsb2dvdXQiLCJSZWFjdCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJNZW51IiwiRm9vdGVyIiwiZXhwb3J0cyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIkxheW91dC50c3giLCJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19
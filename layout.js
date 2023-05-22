System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@0.0.5/base", "react@18.2.0", "@beyond-js/react-18-widgets@0.0.5/hooks", "@aimpact/ailearn@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn/start", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets005Base) {
      dependency_2 = _beyondJsReact18Widgets005Base;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets005Hooks) {
      dependency_4 = _beyondJsReact18Widgets005Hooks;
    }, function (_aimpactAilearn100Session) {
      dependency_5 = _aimpactAilearn100Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnStart) {
      dependency_7 = _aimpactAilearnStart;
    }, function (_beyondJsKernel019Styles) {
      dependency_8 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/layout"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['@aimpact/ailearn/session', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/ailearn/wrapper', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ilearn-layout",
        "vspecifier": "@aimpact/ailearn@1.0.0/layout",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn@1.0.0/layout');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3891080881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _layout = require("./view/layout");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _layout.default;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/footer
      *****************************/

      ims.set('./view/footer', {
        hash: 668203473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Footer = void 0;
          var _react = require("react");
          const Footer = () => {
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "footer-left"
            }, "@copyright AImpact 2023"), _react.default.createElement("div", {
              className: "footer-right"
            }, "Powered by beyond-js (www.beyondjs.com)"));
          };
          exports.Footer = Footer;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/layout
      *****************************/

      ims.set('./view/layout', {
        hash: 4067840951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _session = require("@aimpact/ailearn/session");
          var _footer = require("./footer");
          var _menu = require("./menu");
          var _navbarMenu = require("./navbar-menu");
          const Layout = () => {
            const [showMenu, setShowMenu] = (0, _react.useState)(false);
            const [session, setSession] = (0, _react.useState)(_session.sessionWrapper.logged);
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setSession(_session.sessionWrapper.logged));
            const toggleMenu = () => setShowMenu(!showMenu);
            return _react.default.createElement("div", {
              className: "layout"
            }, _react.default.createElement("header", null, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "header-title"
            }, "AI-Clase by BeyondAI"), _react.default.createElement(_navbarMenu.NavbarMenu, null))), _react.default.createElement("main", null, _react.default.createElement("div", {
              className: `menu ${showMenu ? 'show' : ''}`
            }, _react.default.createElement(_menu.Menu, null)), _react.default.createElement("beyond-layout-children", null)), _react.default.createElement("footer", null, _react.default.createElement(_footer.Footer, null)));
          };
          var _default = Layout;
          exports.default = _default;
        }
      });

      /***************************
      INTERNAL MODULE: ./view/menu
      ***************************/

      ims.set('./view/menu', {
        hash: 4113472444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Menu = void 0;
          var _react = require("react");
          const Menu = () => {
            return _react.default.createElement("div", null, "Menu");
          };
          exports.Menu = Menu;
        }
      });

      /**********************************
      INTERNAL MODULE: ./view/navbar-menu
      **********************************/

      ims.set('./view/navbar-menu', {
        hash: 222694185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarMenu = NavbarMenu;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _wrapper = require("@aimpact/ailearn/wrapper");
          var _session = require("@aimpact/ailearn/session");
          function NavbarMenu() {
            const navigate = pathname => _routing.routing.pushState(pathname);
            const logout = () => {
              _session.sessionWrapper.logout();
              _routing.routing.pushState("/auth");
            };
            const admin = () => {
              _wrapper.wrapper.isUpdating = true;
            };
            const uri = _routing.routing.uri.uri;
            const [inAssigments, setInAssigments] = React.useState(uri.includes("assignments"));
            (0, _hooks.useBinder)([_routing.routing], () => {
              const uri = _routing.routing.uri.uri;
              setInAssigments(uri.includes("assignments"));
            });
            if (!_session.sessionWrapper.logged) return null;
            return React.createElement("div", {
              className: "header-buttons"
            }, inAssigments && React.createElement("a", {
              className: "header-button",
              onClick: admin
            }, "Admin Mission"), React.createElement("a", {
              className: "header-button",
              onClick: () => navigate("/")
            }, "Actividades"), React.createElement("a", {
              className: "header-button",
              onClick: logout
            }, "Cerrar Session"));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWU7Y0FBQ3VCLE9BQU8sRUFBRVI7WUFBSyxtQkFHNUMsRUFDRGhCO2NBQUdDLFNBQVMsRUFBQyxlQUFlO2NBQUN1QixPQUFPLEVBQUUsTUFBTWIsUUFBUSxDQUFDLEdBQUc7WUFBQyxpQkFFckQsRUFDSlg7Y0FBR0MsU0FBUyxFQUFDLGVBQWU7Y0FBQ3VCLE9BQU8sRUFBRVQ7WUFBTSxvQkFFeEMsQ0FDQTtVQUVWIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIkxheW91dCIsImV4cG9ydHMiLCJGb290ZXIiLCJSZWFjdCIsImNsYXNzTmFtZSIsInNob3dNZW51Iiwic2V0U2hvd01lbnUiLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsInNlc3Npb25XcmFwcGVyIiwibG9nZ2VkIiwidG9nZ2xlTWVudSIsIk5hdmJhck1lbnUiLCJNZW51IiwibmF2aWdhdGUiLCJwYXRobmFtZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJsb2dvdXQiLCJhZG1pbiIsIndyYXBwZXIiLCJpc1VwZGF0aW5nIiwidXJpIiwiaW5Bc3NpZ21lbnRzIiwic2V0SW5Bc3NpZ21lbnRzIiwidXNlU3RhdGUiLCJpbmNsdWRlcyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIiwidmlldy9mb290ZXIudHN4Iiwidmlldy9sYXlvdXQudHN4Iiwidmlldy9tZW51LnRzeCIsInZpZXcvbmF2YmFyLW1lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
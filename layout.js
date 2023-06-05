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
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@aimpact/http-server", "0.0.1"], ["@aimpact/langchain", "1.0.0"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
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
        hash: 4219535668,
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
              className: `menu ${showMenu ? "show" : ""}`
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
        hash: 1094999208,
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
            const admin = () => _wrapper.wrapper.isUpdating = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfbGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsImRlZmF1bHQiLCJleHBvcnRzIiwiX3JlYWN0IiwiRm9vdGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIl9ob29rcyIsIl9zZXNzaW9uIiwiX2Zvb3RlciIsIl9tZW51IiwiX25hdmJhck1lbnUiLCJMYXlvdXQiLCJzaG93TWVudSIsInNldFNob3dNZW51IiwidXNlU3RhdGUiLCJzZXNzaW9uIiwic2V0U2Vzc2lvbiIsInNlc3Npb25XcmFwcGVyIiwibG9nZ2VkIiwidXNlQmluZGVyIiwidG9nZ2xlTWVudSIsIk5hdmJhck1lbnUiLCJNZW51IiwiX2RlZmF1bHQiLCJSZWFjdCIsIl9yb3V0aW5nIiwiX3dyYXBwZXIiLCJuYXZpZ2F0ZSIsInBhdGhuYW1lIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImxvZ291dCIsImFkbWluIiwid3JhcHBlciIsImlzVXBkYXRpbmciLCJ1cmkiLCJpbkFzc2lnbWVudHMiLCJzZXRJbkFzc2lnbWVudHMiLCJpbmNsdWRlcyIsIm9uQ2xpY2siXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvdmlldy9mb290ZXIudHN4IiwiL3ZpZXcvbGF5b3V0LnRzeCIsIi92aWV3L21lbnUudHN4IiwiL3ZpZXcvbmF2YmFyLW1lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHFCQUFxQjtZQUM1QyxJQUFJQyxNQUFNQSxDQUFBO2NBQ1IsT0FBT0gsT0FBQSxDQUFBSSxPQUFNO1lBQ2Y7O1VBQ0RDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUNPLE1BQU1RLE1BQU0sR0FBYUEsQ0FBQSxLQUFLO1lBQ3BDLE9BQ0NELE1BQUEsQ0FBQUYsT0FBQSxDQUFBSSxhQUFBLGNBQ0NGLE1BQUEsQ0FBQUYsT0FBQSxDQUFBSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFhLDZCQUE4QixFQUMxREgsTUFBQSxDQUFBRixPQUFBLENBQUFJLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsNkNBQThDLENBQ3RFO1VBRVIsQ0FBQztVQUFDSixPQUFBLENBQUFFLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRixJQUFBRCxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBVyxNQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxRQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxPQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxLQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxXQUFBLEdBQUFmLE9BQUE7VUFFQSxNQUFNZ0IsTUFBTSxHQUFhQSxDQUFBLEtBQUs7WUFDNUIsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLElBQUFYLE1BQUEsQ0FBQVksUUFBUSxFQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUcsSUFBQWQsTUFBQSxDQUFBWSxRQUFRLEVBQUNQLFFBQUEsQ0FBQVUsY0FBYyxDQUFDQyxNQUFNLENBQUM7WUFFN0QsSUFBQVosTUFBQSxDQUFBYSxTQUFTLEVBQUMsQ0FBQ1osUUFBQSxDQUFBVSxjQUFjLENBQUMsRUFBRSxNQUFNRCxVQUFVLENBQUNULFFBQUEsQ0FBQVUsY0FBYyxDQUFDQyxNQUFNLENBQUMsQ0FBQztZQUNwRSxNQUFNRSxVQUFVLEdBQUdBLENBQUEsS0FBTVAsV0FBVyxDQUFDLENBQUNELFFBQVEsQ0FBQztZQUUvQyxPQUNFVixNQUFBLENBQUFGLE9BQUEsQ0FBQUksYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBUSxHQUNyQkgsTUFBQSxDQUFBRixPQUFBLENBQUFJLGFBQUEsaUJBQ0VGLE1BQUEsQ0FBQUYsT0FBQSxDQUFBSSxhQUFBLGNBQ0VGLE1BQUEsQ0FBQUYsT0FBQSxDQUFBSSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLDBCQUEyQixFQUN4REgsTUFBQSxDQUFBRixPQUFBLENBQUFJLGFBQUEsQ0FBQ00sV0FBQSxDQUFBVyxVQUFVLE9BQUcsQ0FDVixDQUNDLEVBQ1RuQixNQUFBLENBQUFGLE9BQUEsQ0FBQUksYUFBQSxlQUNFRixNQUFBLENBQUFGLE9BQUEsQ0FBQUksYUFBQTtjQUFLQyxTQUFTLEVBQUUsUUFBUU8sUUFBUSxHQUFHLE1BQU0sR0FBRyxFQUFFO1lBQUUsR0FDOUNWLE1BQUEsQ0FBQUYsT0FBQSxDQUFBSSxhQUFBLENBQUNLLEtBQUEsQ0FBQWEsSUFBSSxPQUFHLENBQ0osRUFDTnBCLE1BQUEsQ0FBQUYsT0FBQSxDQUFBSSxhQUFBLGdDQUEwQixDQUNyQixFQUNQRixNQUFBLENBQUFGLE9BQUEsQ0FBQUksYUFBQSxpQkFDRUYsTUFBQSxDQUFBRixPQUFBLENBQUFJLGFBQUEsQ0FBQ0ksT0FBQSxDQUFBTCxNQUFNLE9BQUcsQ0FDSCxDQUNMO1VBRVYsQ0FBQztVQUFDLElBQUFvQixRQUFBLEdBRWFaLE1BQU07VUFBQVYsT0FBQSxDQUFBRCxPQUFBLEdBQUF1QixRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DckIsSUFBQXJCLE1BQUEsR0FBQVAsT0FBQTtVQUNPLE1BQU0yQixJQUFJLEdBQWFBLENBQUEsS0FBSztZQUNsQyxPQUFPcEIsTUFBQSxDQUFBRixPQUFBLENBQUFJLGFBQUEscUJBQWU7VUFDdkIsQ0FBQztVQUFDSCxPQUFBLENBQUFxQixJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEYsSUFBQUUsS0FBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixRQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQVcsTUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQStCLFFBQUEsR0FBQS9CLE9BQUE7VUFDQSxJQUFBWSxRQUFBLEdBQUFaLE9BQUE7VUFFTSxTQUFVMEIsVUFBVUEsQ0FBQTtZQUN4QixNQUFNTSxRQUFRLEdBQUlDLFFBQWdCLElBQUtILFFBQUEsQ0FBQUksT0FBTyxDQUFDQyxTQUFTLENBQUNGLFFBQVEsQ0FBQztZQUNsRSxNQUFNRyxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNsQnhCLFFBQUEsQ0FBQVUsY0FBYyxDQUFDYyxNQUFNLEVBQUU7Y0FDdkJOLFFBQUEsQ0FBQUksT0FBTyxDQUFDQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQzVCLENBQUM7WUFDRCxNQUFNRSxLQUFLLEdBQUdBLENBQUEsS0FBT04sUUFBQSxDQUFBTyxPQUFPLENBQUNDLFVBQVUsR0FBRyxJQUFLO1lBRS9DLE1BQU1DLEdBQUcsR0FBR1YsUUFBQSxDQUFBSSxPQUFPLENBQUNNLEdBQUcsQ0FBQ0EsR0FBRztZQUMzQixNQUFNLENBQUNDLFlBQVksRUFBRUMsZUFBZSxDQUFDLEdBQUdiLEtBQUssQ0FBQ1YsUUFBUSxDQUFDcUIsR0FBRyxDQUFDRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFbkYsSUFBQWhDLE1BQUEsQ0FBQWEsU0FBUyxFQUFDLENBQUNNLFFBQUEsQ0FBQUksT0FBTyxDQUFDLEVBQUUsTUFBSztjQUN4QixNQUFNTSxHQUFHLEdBQUdWLFFBQUEsQ0FBQUksT0FBTyxDQUFDTSxHQUFHLENBQUNBLEdBQUc7Y0FDM0JFLGVBQWUsQ0FBQ0YsR0FBRyxDQUFDRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDL0IsUUFBQSxDQUFBVSxjQUFjLENBQUNDLE1BQU0sRUFBRSxPQUFPLElBQUk7WUFDdkMsT0FDRU0sS0FBQSxDQUFBcEIsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZ0IsR0FDNUIrQixZQUFZLElBQ1haLEtBQUEsQ0FBQXBCLGFBQUE7Y0FBR0MsU0FBUyxFQUFDLGVBQWU7Y0FBQ2tDLE9BQU8sRUFBRVA7WUFBSyxtQkFHNUMsRUFDRFIsS0FBQSxDQUFBcEIsYUFBQTtjQUFHQyxTQUFTLEVBQUMsZUFBZTtjQUFDa0MsT0FBTyxFQUFFQSxDQUFBLEtBQU1aLFFBQVEsQ0FBQyxHQUFHO1lBQUMsaUJBRXJELEVBQ0pILEtBQUEsQ0FBQXBCLGFBQUE7Y0FBR0MsU0FBUyxFQUFDLGVBQWU7Y0FBQ2tDLE9BQU8sRUFBRVI7WUFBTSxvQkFFeEMsQ0FDQTtVQUVWIn0=
System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.5/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_3 = _beyondJsReact18Widgets005Page;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
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
          "vspecifier": "@ai-clase/demo@0.0.1/auth-login"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@ai-clase/demo@0.0.1/auth-login",
        "is": "page",
        "route": "/auth"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@ai-clase/demo@0.0.1/auth-login');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3303386583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 117153340,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          const credentials = {
            user: "ailearn",
            password: "ailearn01"
          };
          /*bundle*/
          function View() {
            const defaultValues = {
              username: "",
              password: "",
              fetching: false
            };
            const [values, setValues] = React.useState(defaultValues);
            const [error, setError] = React.useState();
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
            };
            const formDisabled = {};
            const {
              username,
              password
            } = values;
            if (!username || !password) {
              formDisabled.disabled = true;
            }
            const onSubmit = async event => {
              try {
                event.preventDefault();
                if (credentials.user === username && credentials.password === password) {
                  localStorage.setItem("session", JSON.stringify(credentials));
                  _routing.routing.pushState("/");
                  return;
                }
                setError("Usuario no valido");
              } catch (e) {
                console.error(e.message);
              }
            };
            return React.createElement("div", {
              className: "page__container"
            }, React.createElement("form", {
              onSubmit: onSubmit
            }, error && React.createElement("div", {
              className: "form__error"
            }, error), React.createElement("label", null, "User: "), React.createElement("input", {
              onChange: handleChange,
              placeholder: "username",
              type: "text",
              name: "username"
            }), React.createElement("label", null, "Password"), React.createElement("input", {
              onChange: handleChange,
              type: "password",
              name: "password",
              placeholder: "****"
            }), React.createElement("div", {
              className: "form__actions"
            }, React.createElement("button", {
              ...formDisabled
            }, "Login"))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFNQSxNQUFNQyxXQUFXLEdBQUc7WUFBRUMsSUFBSSxFQUFFLFNBQVM7WUFBRUMsUUFBUSxFQUFFO1VBQVcsQ0FBRTtVQUV2RDtVQUFVLFNBQ1JKLElBQUk7WUFDWCxNQUFNSyxhQUFhLEdBQUc7Y0FBRUMsUUFBUSxFQUFFLEVBQUU7Y0FBRUYsUUFBUSxFQUFFLEVBQUU7Y0FBRUcsUUFBUSxFQUFFO1lBQUssQ0FBRTtZQUNyRSxNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDTixhQUFhLENBQUM7WUFDekQsTUFBTSxDQUFDTyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHSCxLQUFLLENBQUNDLFFBQVEsRUFBRTtZQUMxQyxNQUFNRyxZQUFZLEdBQUcsQ0FBQztjQUFFQyxhQUFhLEVBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ2pELE1BQU1DLFlBQVksR0FBRztnQkFBRSxHQUFHVDtjQUFNLENBQUU7Y0FDbENTLFlBQVksQ0FBQ0QsTUFBTSxDQUFDRSxJQUFJLENBQUMsR0FBR0YsTUFBTSxDQUFDRyxLQUFLO2NBQ3hDVixTQUFTLENBQUNRLFlBQVksQ0FBQztZQUN6QixDQUFDO1lBQ0QsTUFBTUcsWUFBWSxHQUFVLEVBQUU7WUFDOUIsTUFBTTtjQUFFZCxRQUFRO2NBQUVGO1lBQVEsQ0FBRSxHQUFHSSxNQUFNO1lBQ3JDLElBQUksQ0FBQ0YsUUFBUSxJQUFJLENBQUNGLFFBQVEsRUFBRTtjQUMxQmdCLFlBQVksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7O1lBRzlCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDN0IsSUFBSTtnQkFDRkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Z0JBRXRCLElBQUl0QixXQUFXLENBQUNDLElBQUksS0FBS0csUUFBUSxJQUFJSixXQUFXLENBQUNFLFFBQVEsS0FBS0EsUUFBUSxFQUFFO2tCQUN0RXFCLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFNBQVMsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMxQixXQUFXLENBQUMsQ0FBQztrQkFDNUQyQixnQkFBTyxDQUFDQyxTQUFTLENBQUMsR0FBRyxDQUFDO2tCQUN0Qjs7Z0JBRUZqQixRQUFRLENBQUMsbUJBQW1CLENBQUM7ZUFDOUIsQ0FBQyxPQUFPa0IsQ0FBQyxFQUFFO2dCQUNWQyxPQUFPLENBQUNwQixLQUFLLENBQUNtQixDQUFDLENBQUNFLE9BQU8sQ0FBQzs7WUFFNUIsQ0FBQztZQUVELE9BQ0V2QjtjQUFLd0IsU0FBUyxFQUFDO1lBQWlCLEdBQzlCeEI7Y0FBTVksUUFBUSxFQUFFQTtZQUFRLEdBQ3JCVixLQUFLLElBQUlGO2NBQUt3QixTQUFTLEVBQUM7WUFBYSxHQUFFdEIsS0FBSyxDQUFPLEVBQ3BERiw0Q0FBcUIsRUFDckJBO2NBQU95QixRQUFRLEVBQUVyQixZQUFZO2NBQUVzQixXQUFXLEVBQUMsVUFBVTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDbkIsSUFBSSxFQUFDO1lBQVUsRUFBRyxFQUNwRlIsOENBQXVCLEVBQ3ZCQTtjQUFPeUIsUUFBUSxFQUFFckIsWUFBWTtjQUFFdUIsSUFBSSxFQUFDLFVBQVU7Y0FBQ25CLElBQUksRUFBQyxVQUFVO2NBQUNrQixXQUFXLEVBQUM7WUFBTSxFQUFHLEVBQ3BGMUI7Y0FBS3dCLFNBQVMsRUFBQztZQUFlLEdBQzVCeEI7Y0FBQSxHQUFZVTtZQUFZLFdBQWdCLENBQ3BDLENBQ0QsQ0FDSDtVQUVWIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImNyZWRlbnRpYWxzIiwidXNlciIsInBhc3N3b3JkIiwiZGVmYXVsdFZhbHVlcyIsInVzZXJuYW1lIiwiZmV0Y2hpbmciLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==
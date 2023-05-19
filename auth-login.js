System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.5/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn@1.0.0/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearn100Session) {
      dependency_6 = _aimpactAilearn100Session;
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
          "vspecifier": "@aimpact/ailearn@1.0.0/auth-login"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/ailearn/session', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn@1.0.0/auth-login",
        "is": "page",
        "route": "/auth"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn@1.0.0/auth-login');
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
        hash: 3088426726,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/ailearn/session");
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
              setError("");
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
                  _session.sessionWrapper.login(credentials);
                  setValues(defaultValues);
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
              value: username,
              placeholder: "username",
              type: "text",
              name: "username"
            }), React.createElement("label", null, "Password"), React.createElement("input", {
              onChange: handleChange,
              type: "password",
              value: password,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImNyZWRlbnRpYWxzIiwidXNlciIsInBhc3N3b3JkIiwiZGVmYXVsdFZhbHVlcyIsInVzZXJuYW1lIiwiZmV0Y2hpbmciLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25XcmFwcGVyIiwibG9naW4iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInR5cGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19
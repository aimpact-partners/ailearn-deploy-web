System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@0.0.5/page", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@ai-clase/demo@0.0.1/session"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_2 = _beyondJsReact18Widgets005Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_aiClaseDemo001Session) {
      dependency_5 = _aiClaseDemo001Session;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@ai-clase/demo/session', dependency_5]]);
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
        hash: 1129636614,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@ai-clase/demo/session");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJjcmVkZW50aWFscyIsInVzZXIiLCJwYXNzd29yZCIsImRlZmF1bHRWYWx1ZXMiLCJ1c2VybmFtZSIsImZldGNoaW5nIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibmFtZSIsInZhbHVlIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uV3JhcHBlciIsImxvZ2luIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==
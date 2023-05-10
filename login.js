System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@ai-clase/demo@0.0.1/auth", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_aiClaseDemo001Auth) {
      dependency_3 = _aiClaseDemo001Auth;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_4 = _beyondJsReact18Widgets005Page;
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
          "vspecifier": "@ai-clase/demo@0.0.1/login"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['react', dependency_2], ['@ai-clase/demo/auth', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "login-page",
        "vspecifier": "@ai-clase/demo@0.0.1/login",
        "is": "page",
        "route": "/login"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@ai-clase/demo@0.0.1/login');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./ForgotPasswordPage
      ************************************/
      ims.set('./ForgotPasswordPage', {
        hash: 769650932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _auth = require("@ai-clase/demo/auth");
          const {
            useState
          } = React;
          function ForgotPasswordPage() {
            const [email, setEmail] = useState('');
            const [resetSent, setResetSent] = useState(false);
            const [error, setError] = useState(null);
            const handleEmailChange = event => setEmail(event.target.value);
            const handleSubmit = event => {
              event.preventDefault();
              _auth.auth.resetPassword(email).then(() => {
                setResetSent(true);
                setError(null);
              }).catch(error => {
                setResetSent(false);
                setError(error.message);
              });
            };
            return React.createElement("div", {
              className: "modal-overlay"
            }, React.createElement("div", {
              className: "modal-container"
            }, React.createElement("h1", null, "Forgot Your Password?"), resetSent ? React.createElement("p", null, "An email with instructions to reset your password has been sent to your email address.") : React.createElement("form", {
              onSubmit: handleSubmit
            }, React.createElement("label", {
              htmlFor: "email"
            }, "Email:"), React.createElement("input", {
              type: "email",
              id: "email",
              value: email,
              onChange: handleEmailChange
            }), React.createElement("button", {
              type: "submit"
            }, "Reset Password")), error && React.createElement("p", null, error), React.createElement("button", null, "Back to Login")));
          }
          var _default = ForgotPasswordPage;
          exports.default = _default;
        }
      });

      /***************************
      INTERNAL MODULE: ./LoginPage
      ***************************/

      ims.set('./LoginPage', {
        hash: 1419018312,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _auth = require("@ai-clase/demo/auth");
          const {
            useState,
            useEffect
          } = React;
          function LoginPage() {
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [agreedToTerms, setAgreedToTerms] = useState(false);
            const handleEmailChange = event => setEmail(event.target.value);
            const handlePasswordChange = event => setPassword(event.target.value);
            const handleAgreeToTermsChange = event => setAgreedToTerms(event.target.checked);
            useEffect(() => {
              const subscription = _auth.auth.on('change', isLoggedIn => {
                console.log('isLoggedIn', isLoggedIn);
              });
              return () => _auth.auth.off('change', subscription);
            });
            const handleSubmit = event => {
              event.preventDefault();
              // Handle form submission
              _auth.auth.loginUser(email, password);
            };
            return React.createElement("div", {
              className: "modal-overlay"
            }, React.createElement("div", {
              className: "modal-container"
            }, React.createElement("h1", null, "Login"), React.createElement("form", {
              onSubmit: handleSubmit
            }, React.createElement("label", {
              htmlFor: "email"
            }, "Email:"), React.createElement("input", {
              type: "email",
              id: "email",
              value: email,
              onChange: handleEmailChange
            }), React.createElement("label", {
              htmlFor: "password"
            }, "Password:"), React.createElement("input", {
              type: "password",
              id: "password",
              value: password,
              onChange: handlePasswordChange
            }), React.createElement("label", {
              htmlFor: "terms"
            }, React.createElement("input", {
              type: "checkbox",
              id: "terms",
              checked: agreedToTerms,
              onChange: handleAgreeToTermsChange
            }), "By creating an account you agree to our Terms of Service and Privacy Policy"), React.createElement("button", {
              type: "submit"
            }, "Sign In")), React.createElement("button", null, "Register with Email"), React.createElement("button", null, "Register/Login with Facebook"), React.createElement("button", null, "Register/Login with Google"), React.createElement("button", null, "Forgot Your Password?")));
          }
          var _default = LoginPage;
          exports.default = _default;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2422107188,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _LoginPage = require("./LoginPage");
          /*bundle*/ // import ForgotPasswordPage from "./ForgotPasswordPage";
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _LoginPage.default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7VUN6RHhCO1VBQ0E7VUFJTyxXQUZQO1VBRWlCLE1BQ1hpQixVQUFXLFNBQVFDLCtCQUF5QjtZQUNoRCxJQUFJQyxNQUFNO2NBQ1IsT0FBT2pCLGtCQUFTO1lBQ2xCOztVQUNERiIsIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVhY3QiLCJGb3Jnb3RQYXNzd29yZFBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwicmVzZXRTZW50Iiwic2V0UmVzZXRTZW50IiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsInJlc2V0UGFzc3dvcmQiLCJ0aGVuIiwiY2F0Y2giLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJodG1sRm9yIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJleHBvcnRzIiwidXNlRWZmZWN0IiwiTG9naW5QYWdlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImFncmVlZFRvVGVybXMiLCJzZXRBZ3JlZWRUb1Rlcm1zIiwiaGFuZGxlUGFzc3dvcmRDaGFuZ2UiLCJoYW5kbGVBZ3JlZVRvVGVybXNDaGFuZ2UiLCJjaGVja2VkIiwic3Vic2NyaXB0aW9uIiwib24iLCJpc0xvZ2dlZEluIiwiY29uc29sZSIsImxvZyIsIm9mZiIsImxvZ2luVXNlciIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJGb3Jnb3RQYXNzd29yZFBhZ2UudHN4IiwiTG9naW5QYWdlLnRzeCIsImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdfQ==
System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn@1.0.0/auth", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
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
    }, function (_aimpactAilearn100Auth) {
      dependency_3 = _aimpactAilearn100Auth;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_4 = _beyondJsReact18Widgets005Page;
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
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
          "vspecifier": "@aimpact/ailearn@1.0.0/login"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['react', dependency_2], ['@aimpact/ailearn/auth', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "login-page",
        "vspecifier": "@aimpact/ailearn@1.0.0/login",
        "is": "page",
        "route": "/login"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn@1.0.0/login');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./ForgotPasswordPage
      ************************************/
      ims.set('./ForgotPasswordPage', {
        hash: 307209921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _auth = require("@aimpact/ailearn/auth");
          const {
            useState
          } = React;
          function ForgotPasswordPage() {
            const [email, setEmail] = useState("");
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
        hash: 1845806807,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _auth = require("@aimpact/ailearn/auth");
          const {
            useState,
            useEffect
          } = React;
          function LoginPage() {
            const [email, setEmail] = useState("");
            const [password, setPassword] = useState("");
            const [agreedToTerms, setAgreedToTerms] = useState(false);
            const handleEmailChange = event => setEmail(event.target.value);
            const handlePasswordChange = event => setPassword(event.target.value);
            const handleAgreeToTermsChange = event => setAgreedToTerms(event.target.checked);
            useEffect(() => {
              const subscription = _auth.auth.on("change", isLoggedIn => {
                console.log("isLoggedIn", isLoggedIn);
              });
              return () => _auth.auth.off("change", subscription);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O1VDekR4QjtVQUNBO1VBSU8sV0FGUDtVQUVpQixNQUNYaUIsVUFBVyxTQUFRQywrQkFBeUI7WUFDaEQsSUFBSUMsTUFBTTtjQUNSLE9BQU9qQixrQkFBUztZQUNsQjs7VUFDREYiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlYWN0IiwiRm9yZ290UGFzc3dvcmRQYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInJlc2V0U2VudCIsInNldFJlc2V0U2VudCIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVFbWFpbENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGgiLCJyZXNldFBhc3N3b3JkIiwidGhlbiIsImNhdGNoIiwibWVzc2FnZSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaHRtbEZvciIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwiZXhwb3J0cyIsInVzZUVmZmVjdCIsIkxvZ2luUGFnZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJhZ3JlZWRUb1Rlcm1zIiwic2V0QWdyZWVkVG9UZXJtcyIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlQWdyZWVUb1Rlcm1zQ2hhbmdlIiwiY2hlY2tlZCIsInN1YnNjcmlwdGlvbiIsIm9uIiwiaXNMb2dnZWRJbiIsImNvbnNvbGUiLCJsb2ciLCJvZmYiLCJsb2dpblVzZXIiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiRm9yZ290UGFzc3dvcmRQYWdlLnRzeCIsIkxvZ2luUGFnZS50c3giLCJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=
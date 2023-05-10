System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets014Render) {
      dependency_2 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "assignment-page",
        "vspecifier": "@ai-clase/demo@0.0.1/assignment-page",
        "is": "page",
        "route": "/assignments/${assignment}"
      }, {
        "name": "assignments-page",
        "vspecifier": "@ai-clase/demo@0.0.1/assignments-page",
        "is": "page",
        "route": "/"
      }, {
        "name": "auth-login-page",
        "vspecifier": "@ai-clase/demo@0.0.1/auth-login",
        "is": "page",
        "route": "/auth"
      }, {
        "name": "main-layout",
        "vspecifier": "@ai-clase/demo@0.0.1/layout",
        "is": "layout"
      }, {
        "name": "login-page",
        "vspecifier": "@ai-clase/demo@0.0.1/login",
        "is": "page",
        "route": "/login"
      }]);
      bundles = [];
      /*****************************
      MODULE: @ai-clase/demo/routing
      *****************************/
      bundles.push([{
        "module": {
          "vspecifier": "@ai-clase/demo@0.0.1/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["openai", "3.2.1"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@types/dom-mediacapture-record", "1.0.14"], ["@google-cloud/error-reporting", "3.0.5"], ["uuid", "9.0.0"], ["firebase", "9.17.2"], ["@firebase/util", "1.9.3"], ["@firebase/logger", "0.4.0"], ["@firebase/component", "0.6.4"], ["@google-cloud/logging", "10.4.0"], ["firebase-admin", "11.5.0"], ["socket.io-client", "4.6.1"], ["@ai-clase/demo", "0.0.1"], ["@ai-clase/demo", "0.0.1"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 3896769427,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            _routing.routing.redirect = async function redirect(uri) {
              if (!localStorage.getItem("session")) {
                return "/auth";
              }
              if (uri.pathname === "/auth" && !!localStorage.getItem("session")) {
                return "/";
              }
              return uri.pathname;
            };
          }
        });
        return {
          dependencies: ['@beyond-js/kernel/routing']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});
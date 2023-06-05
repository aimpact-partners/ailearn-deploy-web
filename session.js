System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive-2@1.0.0/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive2100Model) {
      dependency_1 = _beyondJsReactive2100Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@aimpact/http-server", "0.0.1"], ["@aimpact/langchain", "1.0.0"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive-2/model', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3314255596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          class SessionManager extends _model.ReactiveModel {
            get logged() {
              return !!localStorage.getItem("session");
            }
            login(credentials) {
              localStorage.setItem("session", JSON.stringify(credentials));
              this.triggerEvent();
            }
            logout() {
              localStorage.removeItem("session");
              this.triggerEvent();
            }
          }
          /*bundle*/
          const sessionWrapper = new SessionManager();
          exports.sessionWrapper = sessionWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "sessionWrapper",
        "name": "sessionWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'sessionWrapper') && _export("sessionWrapper", sessionWrapper = require ? require('./index').sessionWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiU2Vzc2lvbk1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwibG9nZ2VkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwiY3JlZGVudGlhbHMiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyaWdnZXJFdmVudCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJzZXNzaW9uV3JhcHBlciIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFJQSxNQUFNQyxjQUFlLFNBQVFGLE1BQUEsQ0FBQUcsYUFBdUI7WUFDbEQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDMUM7WUFFQUMsS0FBS0EsQ0FBQ0MsV0FBVztjQUNmSCxZQUFZLENBQUNJLE9BQU8sQ0FBQyxTQUFTLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxXQUFXLENBQUMsQ0FBQztjQUM1RCxJQUFJLENBQUNJLFlBQVksRUFBRTtZQUNyQjtZQUNBQyxNQUFNQSxDQUFBO2NBQ0pSLFlBQVksQ0FBQ1MsVUFBVSxDQUFDLFNBQVMsQ0FBQztjQUNsQyxJQUFJLENBQUNGLFlBQVksRUFBRTtZQUNyQjs7VUFHSztVQUFXLE1BQU1HLGNBQWMsR0FBRyxJQUFJYixjQUFjLEVBQUU7VUFBQ2MsT0FBQSxDQUFBRCxjQUFBLEdBQUFBLGNBQUEifQ==
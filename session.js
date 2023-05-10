System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive@1.0.0/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive100Model) {
      dependency_1 = _beyondJsReactive100Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["openai", "3.2.1"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@types/dom-mediacapture-record", "1.0.14"], ["@google-cloud/error-reporting", "3.0.5"], ["uuid", "9.0.0"], ["firebase", "9.17.2"], ["@firebase/util", "1.9.3"], ["@firebase/logger", "0.4.0"], ["@firebase/component", "0.6.4"], ["@google-cloud/logging", "10.4.0"], ["firebase-admin", "11.5.0"], ["socket.io-client", "4.6.1"], ["@ai-clase/demo", "0.0.1"], ["@ai-clase/demo", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@ai-clase/demo@0.0.1/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1725900639,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _model = require("@beyond-js/reactive/model");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBSUEsTUFBTUEsY0FBZSxTQUFRQyxvQkFBdUI7WUFDbEQsSUFBSUMsTUFBTTtjQUNSLE9BQU8sQ0FBQyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDMUM7WUFFQUMsS0FBSyxDQUFDQyxXQUFXO2NBQ2ZILFlBQVksQ0FBQ0ksT0FBTyxDQUFDLFNBQVMsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNILFdBQVcsQ0FBQyxDQUFDO2NBQzVELElBQUksQ0FBQ0ksWUFBWSxFQUFFO1lBQ3JCO1lBQ0FDLE1BQU07Y0FDSlIsWUFBWSxDQUFDUyxVQUFVLENBQUMsU0FBUyxDQUFDO2NBQ2xDLElBQUksQ0FBQ0YsWUFBWSxFQUFFO1lBQ3JCOztVQUdLO1VBQVcsTUFBTUcsY0FBYyxHQUFHLElBQUliLGNBQWMsRUFBRTtVQUFDYyIsIm5hbWVzIjpbIlNlc3Npb25NYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImxvZ2dlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dpbiIsImNyZWRlbnRpYWxzIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmlnZ2VyRXZlbnQiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwic2Vzc2lvbldyYXBwZXIiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "firebase@9.17.2/auth", "firebase@9.17.2/app"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, auth, __beyond_pkg, hmr;
  _export("auth", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_firebase9172Auth) {
      dependency_2 = _firebase9172Auth;
    }, function (_firebase9172App) {
      dependency_3 = _firebase9172App;
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
          "vspecifier": "@aimpact/ailearn@1.0.0/auth"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['firebase/auth', dependency_2], ['firebase/app', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 521214267,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.auth = void 0;
          var _core = require("@beyond-js/kernel/core");
          var firebase = require("firebase/app");
          var _auth = require("firebase/auth");
          /*bundle*/
          const auth = new class extends _core.Events {
            #auth;
            #isLoggedIn = false;
            get isLoggedIn() {
              return this.#isLoggedIn;
            }
            #uid = null;
            get uid() {
              return this.#uid;
            }
            #photoURL = null;
            get photoURL() {
              return this.#photoURL;
            }
            constructor() {
              super();
              firebase.initializeApp({
                apiKey: "AIzaSyDubW13Y7ZQgj6RzD85QslFHPyPi90A2N4",
                authDomain: "roomai-dev.firebaseapp.com",
                projectId: "roomai-dev",
                storageBucket: "roomai-dev.appspot.com",
                messagingSenderId: "682043605256",
                appId: "1:682043605256:web:32461e055da2e1a14a2cbd",
                measurementId: "G-VRDX8VTP1W"
              });
              this.#auth = (0, _auth.getAuth)();
              this.#auth.onAuthStateChanged(this.#onAuthStateChanged);
            }
            #onAuthStateChanged = user => {
              if (user) {
                this.#isLoggedIn = true;
                this.#uid = user.uid;
                this.#photoURL = user.photoURL;
              } else {
                this.#isLoggedIn = false;
                this.#uid = null;
                this.#photoURL = null;
              }
              this.trigger('change', user);
            };
            registerUser(email, password) {
              return (0, _auth.createUserWithEmailAndPassword)(this.#auth, email, password);
            }
            loginUser(email, password) {
              return (0, _auth.signInWithEmailAndPassword)(this.#auth, email, password);
            }
            resetPassword(email) {
              return (0, _auth.sendPasswordResetEmail)(this.#auth, email);
            }
          }();
          exports.auth = auth;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "auth",
        "name": "auth"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'auth') && _export("auth", auth = require ? require('./index').auth : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJmaXJlYmFzZSIsIl9hdXRoIiwiYXV0aCIsIkV2ZW50cyIsImlzTG9nZ2VkSW4iLCJ1aWQiLCJwaG90b1VSTCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInRyaWdnZXIiLCJyZWdpc3RlclVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibG9naW5Vc2VyIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBSU87VUFBVyxNQUFNRyxJQUFJLEdBQUcsSUFBSSxjQUFjSixLQUFBLENBQUFLLE1BQU07WUFDMUMsQ0FBQUQsSUFBSztZQUVkLENBQUFFLFVBQVcsR0FBRyxLQUFLO1lBQ25CLElBQUlBLFVBQVVBLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQzNCO1lBRUEsQ0FBQUMsR0FBSSxHQUFrQixJQUFJO1lBQzFCLElBQUlBLEdBQUdBLENBQUE7Y0FDSCxPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ3BCO1lBRUEsQ0FBQUMsUUFBUyxHQUFrQixJQUFJO1lBQy9CLElBQUlBLFFBQVFBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3pCO1lBRUFDLFlBQUE7Y0FDSSxLQUFLLEVBQUU7Y0FFUFAsUUFBUSxDQUFDUSxhQUFhLENBQUM7Z0JBQ25CQyxNQUFNLEVBQUUseUNBQXlDO2dCQUNqREMsVUFBVSxFQUFFLDRCQUE0QjtnQkFDeENDLFNBQVMsRUFBRSxZQUFZO2dCQUN2QkMsYUFBYSxFQUFFLHdCQUF3QjtnQkFDdkNDLGlCQUFpQixFQUFFLGNBQWM7Z0JBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO2dCQUNsREMsYUFBYSxFQUFFO2VBQ2xCLENBQUM7Y0FFRixJQUFJLENBQUMsQ0FBQWIsSUFBSyxHQUFHLElBQUFELEtBQUEsQ0FBQWUsT0FBTyxHQUFFO2NBQ3RCLElBQUksQ0FBQyxDQUFBZCxJQUFLLENBQUNlLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFBQSxrQkFBbUIsQ0FBQztZQUMzRDtZQUVBLENBQUFBLGtCQUFtQixHQUFpQ0MsSUFBSSxJQUFJO2NBQ3hELElBQUlBLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsQ0FBQWQsVUFBVyxHQUFHLElBQUk7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBQyxHQUFJLEdBQUdhLElBQUksQ0FBQ2IsR0FBRztnQkFDcEIsSUFBSSxDQUFDLENBQUFDLFFBQVMsR0FBR1ksSUFBSSxDQUFDWixRQUFRO2VBQ2pDLE1BQU07Z0JBQ0gsSUFBSSxDQUFDLENBQUFGLFVBQVcsR0FBRyxLQUFLO2dCQUN4QixJQUFJLENBQUMsQ0FBQUMsR0FBSSxHQUFHLElBQUk7Z0JBQ2hCLElBQUksQ0FBQyxDQUFBQyxRQUFTLEdBQUcsSUFBSTs7Y0FHekIsSUFBSSxDQUFDYSxPQUFPLENBQUMsUUFBUSxFQUFFRCxJQUFJLENBQUM7WUFDaEMsQ0FBQztZQUVERSxZQUFZQSxDQUFDQyxLQUFLLEVBQUVDLFFBQVE7Y0FDeEIsT0FBTyxJQUFBckIsS0FBQSxDQUFBc0IsOEJBQThCLEVBQUMsSUFBSSxDQUFDLENBQUFyQixJQUFLLEVBQUVtQixLQUFLLEVBQUVDLFFBQVEsQ0FBQztZQUN0RTtZQUVBRSxTQUFTQSxDQUFDSCxLQUFLLEVBQUVDLFFBQVE7Y0FDckIsT0FBTyxJQUFBckIsS0FBQSxDQUFBd0IsMEJBQTBCLEVBQUMsSUFBSSxDQUFDLENBQUF2QixJQUFLLEVBQUVtQixLQUFLLEVBQUVDLFFBQVEsQ0FBQztZQUNsRTtZQUVBSSxhQUFhQSxDQUFDTCxLQUFLO2NBQ2YsT0FBTyxJQUFBcEIsS0FBQSxDQUFBMEIsc0JBQXNCLEVBQUMsSUFBSSxDQUFDLENBQUF6QixJQUFLLEVBQUVtQixLQUFLLENBQUM7WUFDcEQ7V0FDSCxDLENBQUE7VUFBQU8sT0FBQSxDQUFBMUIsSUFBQSxHQUFBQSxJQUFBIn0=
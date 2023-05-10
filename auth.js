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
        const dependencies = new Map([["openai", "3.2.1"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@types/dom-mediacapture-record", "1.0.14"], ["@google-cloud/error-reporting", "3.0.5"], ["uuid", "9.0.0"], ["firebase", "9.17.2"], ["@firebase/util", "1.9.3"], ["@firebase/logger", "0.4.0"], ["@firebase/component", "0.6.4"], ["@google-cloud/logging", "10.4.0"], ["firebase-admin", "11.5.0"], ["socket.io-client", "4.6.1"], ["@ai-clase/demo", "0.0.1"], ["@ai-clase/demo", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@ai-clase/demo@0.0.1/auth"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUVBO1VBQ0E7VUFJTztVQUFXLE1BQU1BLElBQUksR0FBRyxJQUFJLGNBQWNDLFlBQU07WUFDMUMsS0FBSztZQUVkLFdBQVcsR0FBRyxLQUFLO1lBQ25CLElBQUlDLFVBQVU7Y0FDVixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQzNCO1lBRUEsSUFBSSxHQUFrQixJQUFJO1lBQzFCLElBQUlDLEdBQUc7Y0FDSCxPQUFPLElBQUksQ0FBQyxJQUFJO1lBQ3BCO1lBRUEsU0FBUyxHQUFrQixJQUFJO1lBQy9CLElBQUlDLFFBQVE7Y0FDUixPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3pCO1lBRUFDO2NBQ0ksS0FBSyxFQUFFO2NBRVBDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDO2dCQUNuQkMsTUFBTSxFQUFFLHlDQUF5QztnQkFDakRDLFVBQVUsRUFBRSw0QkFBNEI7Z0JBQ3hDQyxTQUFTLEVBQUUsWUFBWTtnQkFDdkJDLGFBQWEsRUFBRSx3QkFBd0I7Z0JBQ3ZDQyxpQkFBaUIsRUFBRSxjQUFjO2dCQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztnQkFDbERDLGFBQWEsRUFBRTtlQUNsQixDQUFDO2NBRUYsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBTyxHQUFFO2NBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUNDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUMzRDtZQUVBLG1CQUFtQixHQUFpQ0MsSUFBSSxJQUFJO2NBQ3hELElBQUlBLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUk7Z0JBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUdBLElBQUksQ0FBQ2IsR0FBRztnQkFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBR2EsSUFBSSxDQUFDWixRQUFRO2VBQ2pDLE1BQU07Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLO2dCQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSTs7Y0FHekIsSUFBSSxDQUFDYSxPQUFPLENBQUMsUUFBUSxFQUFFRCxJQUFJLENBQUM7WUFDaEMsQ0FBQztZQUVERSxZQUFZLENBQUNDLEtBQUssRUFBRUMsUUFBUTtjQUN4QixPQUFPLHdDQUE4QixFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUVELEtBQUssRUFBRUMsUUFBUSxDQUFDO1lBQ3RFO1lBRUFDLFNBQVMsQ0FBQ0YsS0FBSyxFQUFFQyxRQUFRO2NBQ3JCLE9BQU8sb0NBQTBCLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBRUQsS0FBSyxFQUFFQyxRQUFRLENBQUM7WUFDbEU7WUFFQUUsYUFBYSxDQUFDSCxLQUFLO2NBQ2YsT0FBTyxnQ0FBc0IsRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFFQSxLQUFLLENBQUM7WUFDcEQ7V0FDSDtVQUFBSSIsIm5hbWVzIjpbImF1dGgiLCJFdmVudHMiLCJpc0xvZ2dlZEluIiwidWlkIiwicGhvdG9VUkwiLCJjb25zdHJ1Y3RvciIsImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidHJpZ2dlciIsInJlZ2lzdGVyVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpblVzZXIiLCJyZXNldFBhc3N3b3JkIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
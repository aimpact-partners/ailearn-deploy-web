System.register(["@beyond-js/backend@0.1.6/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, UsersProvider, BookProvider, UserProvider, __beyond_pkg, hmr;
  _export({
    UsersProvider: void 0,
    BookProvider: void 0,
    UserProvider: void 0
  });
  return {
    setters: [function (_beyondJsBackend016Client) {
      dependency_0 = _beyondJsBackend016Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive-2@1.0.0/tests/backend/provider"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./books/books
      *****************************/
      ims.set('./books/books', {
        hash: 4048115757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UsersProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UsersProvider extends ActionsBridge {
            async save(data) {
              return await this.execute("books\\books//UsersProvider//save", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("books\\books//UsersProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("books\\books//UsersProvider//list", ...arguments);
            }
            async send() {
              return await this.execute("books\\books//UsersProvider//send", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.UsersProvider = UsersProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./books/index
      *****************************/

      ims.set('./books/index', {
        hash: 3345966812,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BookProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class BookProvider extends ActionsBridge {
            async publish(data) {
              return await this.execute("books\\index//BookProvider//publish", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("books\\index//BookProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("books\\index//BookProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("books\\index//BookProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.BookProvider = BookProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/index
      *****************************/

      ims.set('./users/index', {
        hash: 578928677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UserProvider extends ActionsBridge {
            async publish(data) {
              return await this.execute("users\\index//UserProvider//publish", ...arguments);
            }
            async load(id) {
              return await this.execute("users\\index//UserProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("users\\index//UserProvider//list", ...arguments);
            }
            async bulkSave(data) {
              return await this.execute("users\\index//UserProvider//bulkSave", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.UserProvider = UserProvider;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/users
      *****************************/

      ims.set('./users/users', {
        hash: 4048115757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UsersProvider = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UsersProvider extends ActionsBridge {
            async save(data) {
              return await this.execute("users\\users//UsersProvider//save", ...arguments);
            }
            async load({
              id
            }) {
              return await this.execute("users\\users//UsersProvider//load", ...arguments);
            }
            async list() {
              return await this.execute("users\\users//UsersProvider//list", ...arguments);
            }
            async send() {
              return await this.execute("users\\users//UsersProvider//send", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.UsersProvider = UsersProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./books/books",
        "from": "UsersProvider",
        "name": "UsersProvider"
      }, {
        "im": "./books/index",
        "from": "BookProvider",
        "name": "BookProvider"
      }, {
        "im": "./users/index",
        "from": "UserProvider",
        "name": "UserProvider"
      }, {
        "im": "./users/users",
        "from": "UsersProvider",
        "name": "UsersProvider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'UsersProvider') && _export("UsersProvider", UsersProvider = require ? require('./books/books').UsersProvider : value);
        (require || prop === 'BookProvider') && _export("BookProvider", BookProvider = require ? require('./books/index').BookProvider : value);
        (require || prop === 'UserProvider') && _export("UserProvider", UserProvider = require ? require('./users/index').UserProvider : value);
        (require || prop === 'UsersProvider') && _export("UsersProvider", UsersProvider = require ? require('./users/users').UsersProvider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiVXNlcnNQcm92aWRlciIsIkFjdGlvbnNCcmlkZ2UiLCJzYXZlIiwiZGF0YSIsImV4ZWN1dGUiLCJhcmd1bWVudHMiLCJsb2FkIiwiaWQiLCJsaXN0Iiwic2VuZCIsImNvbnN0cnVjdG9yIiwiYnVuZGxlIiwiZXhwb3J0cyIsIkJvb2tQcm92aWRlciIsInB1Ymxpc2giLCJidWxrU2F2ZSIsIlVzZXJQcm92aWRlciJdLCJzb3VyY2VzIjpbIi9ib29rcy9ib29rcy50cyIsIi9ib29rcy9pbmRleC50cyIsIi91c2Vycy9pbmRleC50cyIsIi91c2Vycy91c2Vycy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFTyxZQUFZO1VBQVUsTUFBT0MsYUFBYyxTQUFRQyxhQUFhO1lBQ25FLE1BQU1DLElBQUlBLENBQUNDLElBQUk7Y0FDWCxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsbUNBQW1DLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ2hGO1lBQ0EsTUFBTUMsSUFBSUEsQ0FBQztjQUFFQztZQUFFLENBQUU7Y0FDYixPQUFPLE1BQU0sSUFBSSxDQUFDSCxPQUFPLENBQUMsbUNBQW1DLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ2hGO1lBQ0EsTUFBTUcsSUFBSUEsQ0FBQTtjQUNOLE9BQU8sTUFBTSxJQUFJLENBQUNKLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDaEY7WUFDQSxNQUFNSSxJQUFJQSxDQUFBO2NBQ04sT0FBTyxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDLG1DQUFtQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNoRjtZQUNBSyxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFB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
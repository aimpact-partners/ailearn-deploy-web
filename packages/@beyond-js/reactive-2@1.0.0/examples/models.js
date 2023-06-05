System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive-2@1.0.0/entities", "@beyond-js/reactive-2@1.0.0/tests/backend/provider"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Books, Book, User, Users, __beyond_pkg, hmr;
  _export({
    Books: void 0,
    Book: void 0,
    User: void 0,
    Users: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive2100Entities) {
      dependency_1 = _beyondJsReactive2100Entities;
    }, function (_beyondJsReactive2100TestsBackendProvider) {
      dependency_2 = _beyondJsReactive2100TestsBackendProvider;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive-2@1.0.0/examples/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive-2/entities', dependency_1], ['@beyond-js/reactive-2/tests/backend/provider', dependency_2]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./books/collection
      **********************************/
      ims.set('./books/collection', {
        hash: 3264221075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Books = void 0;
          var _entities = require("@beyond-js/reactive-2/entities");
          var _index = require("./index");
          /*bundle*/
          class Books extends _entities.Collection {
            item = _index.Book;
            storeName = "books";
            db = "test";
            constructor() {
              super();
              this.provider = new UserProvider();
              this.init();
            }
          }
          exports.Books = Books;
        }
      });

      /*****************************
      INTERNAL MODULE: ./books/index
      *****************************/

      ims.set('./books/index', {
        hash: 1959143853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Book = void 0;
          var _entities = require("@beyond-js/reactive-2/entities");
          /*bundle */
          class Book extends _entities.Item {
            properties = ["id", "title", "author", "year"];
            storeName = "book";
            db = "test";
            constructor({
              id = undefined
            } = {}) {
              super();
              this.init({
                id
              });
            }
          }
          exports.Book = Book;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/index
      *****************************/

      ims.set('./users/index', {
        hash: 3690885571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _entities = require("@beyond-js/reactive-2/entities");
          var _provider = require("@beyond-js/reactive-2/tests/backend/provider");
          /*bundle */
          class User extends _entities.Item {
            properties = ['id', 'name', 'lastname'];
            constructor({
              id = undefined
            } = {}) {
              super({
                storeName: 'user',
                db: 'test',
                id
              });
              this.provider = new _provider.UserProvider();
            }
          }
          exports.User = User;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/users
      *****************************/

      ims.set('./users/users', {
        hash: 3742163126,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Users = void 0;
          var _entities = require("@beyond-js/reactive-2/entities");
          var _index = require("./index");
          var _provider = require("@beyond-js/reactive-2/tests/backend/provider");
          /*bundle*/
          class Users extends _entities.Collection {
            item = _index.User;
            storeName = "user";
            db = "test";
            constructor() {
              super();
              this.provider = new _provider.UserProvider();
              this.init();
            }
          }
          exports.Users = Users;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./books/collection",
        "from": "Books",
        "name": "Books"
      }, {
        "im": "./books/index",
        "from": "Book",
        "name": "Book"
      }, {
        "im": "./users/index",
        "from": "User",
        "name": "User"
      }, {
        "im": "./users/users",
        "from": "Users",
        "name": "Users"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Books') && _export("Books", Books = require ? require('./books/collection').Books : value);
        (require || prop === 'Book') && _export("Book", Book = require ? require('./books/index').Book : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/index').User : value);
        (require || prop === 'Users') && _export("Users", Users = require ? require('./users/users').Users : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX2luZGV4IiwiQm9va3MiLCJDb2xsZWN0aW9uIiwiaXRlbSIsIkJvb2siLCJzdG9yZU5hbWUiLCJkYiIsImNvbnN0cnVjdG9yIiwicHJvdmlkZXIiLCJVc2VyUHJvdmlkZXIiLCJpbml0IiwiZXhwb3J0cyIsIkl0ZW0iLCJwcm9wZXJ0aWVzIiwiaWQiLCJ1bmRlZmluZWQiLCJfcHJvdmlkZXIiLCJVc2VyIiwiVXNlcnMiXSwic291cmNlcyI6WyIvYm9va3MvY29sbGVjdGlvbi50cyIsIi9ib29rcy9pbmRleC50cyIsIi91c2Vycy9pbmRleC50cyIsIi91c2Vycy91c2Vycy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFLTztVQUFVLE1BQU9FLEtBQU0sU0FBUUgsU0FBQSxDQUFBSSxVQUFVO1lBQy9DQyxJQUFJLEdBQUdILE1BQUEsQ0FBQUksSUFBSTtZQUNEQyxTQUFTLEdBQUcsT0FBTztZQUNuQkMsRUFBRSxHQUFHLE1BQU07WUFFckJDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxZQUFZLEVBQUU7Y0FDbEMsSUFBSSxDQUFDQyxJQUFJLEVBQUU7WUFDWjs7VUFDQUMsT0FBQSxDQUFBVixLQUFBLEdBQUFBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJELElBQUFILFNBQUEsR0FBQUMsT0FBQTtVQVFPO1VBQVcsTUFDWkssSUFBSyxTQUFRTixTQUFBLENBQUFjLElBQVc7WUFDbkJDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztZQUU5Q1IsU0FBUyxHQUFHLE1BQU07WUFDbEJDLEVBQUUsR0FBRyxNQUFNO1lBRXJCQyxZQUFZO2NBQUVPLEVBQUUsR0FBR0M7WUFBUyxDQUFFLEdBQUcsRUFBRTtjQUNsQyxLQUFLLEVBQUU7Y0FFUCxJQUFJLENBQUNMLElBQUksQ0FBQztnQkFBRUk7Y0FBRSxDQUFFLENBQUM7WUFDbEI7O1VBQ0FILE9BQUEsQ0FBQVAsSUFBQSxHQUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCRCxJQUFBTixTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBaUIsU0FBQSxHQUFBakIsT0FBQTtVQU9PO1VBQVcsTUFDWmtCLElBQUssU0FBUW5CLFNBQUEsQ0FBQWMsSUFBVztZQUNuQkMsVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUM7WUFFakROLFlBQVk7Y0FBRU8sRUFBRSxHQUFHQztZQUFTLENBQUUsR0FBRyxFQUFFO2NBQ2xDLEtBQUssQ0FBQztnQkFBRVYsU0FBUyxFQUFFLE1BQU07Z0JBQUVDLEVBQUUsRUFBRSxNQUFNO2dCQUFFUTtjQUFFLENBQUUsQ0FBQztjQUM1QyxJQUFJLENBQUNOLFFBQVEsR0FBRyxJQUFJUSxTQUFBLENBQUFQLFlBQVksRUFBRTtZQUNuQzs7VUFDQUUsT0FBQSxDQUFBTSxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJELElBQUFuQixTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBaUIsU0FBQSxHQUFBakIsT0FBQTtVQUlPO1VBQVUsTUFBT21CLEtBQU0sU0FBUXBCLFNBQUEsQ0FBQUksVUFBVTtZQUMvQ0MsSUFBSSxHQUFHSCxNQUFBLENBQUFpQixJQUFJO1lBQ0RaLFNBQVMsR0FBRyxNQUFNO1lBQ2xCQyxFQUFFLEdBQUcsTUFBTTtZQUVyQkMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUlRLFNBQUEsQ0FBQVAsWUFBWSxFQUFFO2NBQ2xDLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQU8sS0FBQSxHQUFBQSxLQUFBIn0=
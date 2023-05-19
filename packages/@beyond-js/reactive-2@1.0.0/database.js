System.register(["@beyond-js/kernel@0.1.9/bundle", "dexie@3.2.3", "@beyond-js/events@0.0.6/events", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, DatabaseManager, DBManager, __beyond_pkg, hmr;
  _export({
    DatabaseManager: void 0,
    DBManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_dexie2) {
      dependency_1 = _dexie2;
    }, function (_beyondJsEvents006Events) {
      dependency_2 = _beyondJsEvents006Events;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["dexie", "3.2.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["ajv", "8.12.0"], ["@beyond-js/backend", "0.1.5"], ["socket.io-client", "4.6.1"], ["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive-2@1.0.0/database"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['dexie', dependency_1], ['@beyond-js/events/events', dependency_2], ['@beyond-js/kernel/core', dependency_3]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./database
      **************************/
      ims.set('./database', {
        hash: 1747371613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Database = void 0;
          var _dexie = require("dexie");
          var _events = require("@beyond-js/events/events");
          var _core = require("@beyond-js/kernel/core");
          class Database extends _events.Events {
            #version = 1;
            #db;
            get db() {
              return this.#db;
            }
            #promise;
            #currentVersion;
            static #instance;
            #ready;
            #name;
            get ready() {
              return this.#ready;
            }
            constructor(name, version) {
              super();
              this.#name = name;
              this.#version = version;
              this.create();
              this.#promise = new _core.PendingPromise();
              globalThis.db = this.#db;
            }
            async create() {
              this.#db = new _dexie.default(this.#name);
              this.#currentVersion = this.#db.version(this.#version);
            }
            #onReady = () => {
              this.#ready = true;
              this.#promise.resolve();
              this.#promise = undefined;
            };
            #onError = error => {
              this.#promise.resolve();
              this.#promise = undefined;
              throw new Error(error);
            };
            #nextVersion() {
              this.#version++;
              return this.#version;
            }
            register = async data => {
              Object.keys(data).forEach(store => {
                const items = data[store].split(',');
                const filter = new Set(items);
                filter.add('offline');
                filter.add('instanceId');
                data[store] = Array.from(filter).join(',');
              });
              this.#currentVersion.stores(data);
              try {
                await this.#db.open();
                return this.#db;
              } catch (e) {
                console.error('error registering', e);
              }
            };
          }
          exports.Database = Database;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1175347211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DatabaseManager = exports.DBManager = void 0;
          var _dexie = require("dexie");
          var _events = require("@beyond-js/events/events");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("./database");
          /*bundle */
          class DatabaseManager extends _events.Events {
            #promise;
            #ready;
            get ready() {
              return this.#ready;
            }
            #db;
            get db() {
              return this.#db;
            }
            #databases = new Map();
            constructor() {
              super();
              const db = new _dexie.default("ReactiveDatabase");
              this.#db = db;
              db.version(1).stores({
                schemas: "name, table, fields"
              });
              db.open().then(this.#onFinished).catch(this.#onError);
            }
            #onFinished = () => {
              this.trigger("loaded.reactive.database");
              if (this.#promise) this.#promise.resolve();
            };
            #onError = err => {
              this.trigger("error");
              console.error(err);
            };
            load() {
              if (this.ready) return this.ready;
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              const onFinished = () => {
                this.#ready = true;
                this.#promise.resolve();
                this.#promise = undefined;
              };
              this.on("finished", onFinished);
              this.on("error", () => {
                this.#promise.reject();
                this.#promise = undefined;
              });
            }
            async open(identifier) {
              let [name, version = 1] = identifier.split("@");
              if (!this.#databases.has(name)) {
                const schema = new _database.Database(name, version);
                this.#databases.set(name, schema);
                return schema;
              }
              return this.#databases.get(name);
            }
            get = name => this.open(name);
            async config(name, stores) {
              const schema = await this.open(name);
              return schema.register(stores);
            }
          }
          exports.DatabaseManager = DatabaseManager;
          /* bundle */
          const DBManager = new DatabaseManager();
          exports.DBManager = DBManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DatabaseManager",
        "name": "DatabaseManager"
      }, {
        "im": "./index",
        "from": "DBManager",
        "name": "DBManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DatabaseManager') && _export("DatabaseManager", DatabaseManager = require ? require('./index').DatabaseManager : value);
        (require || prop === 'DBManager') && _export("DBManager", DBManager = require ? require('./index').DBManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsImRiIiwicmVhZHkiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ2ZXJzaW9uIiwiY3JlYXRlIiwiUGVuZGluZ1Byb21pc2UiLCJnbG9iYWxUaGlzIiwiRGV4aWUiLCJyZXNvbHZlIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJFcnJvciIsInJlZ2lzdGVyIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic3RvcmUiLCJpdGVtcyIsInNwbGl0IiwiZmlsdGVyIiwiU2V0IiwiYWRkIiwiQXJyYXkiLCJmcm9tIiwiam9pbiIsInN0b3JlcyIsIm9wZW4iLCJlIiwiY29uc29sZSIsImV4cG9ydHMiLCJEYXRhYmFzZU1hbmFnZXIiLCJNYXAiLCJzY2hlbWFzIiwidGhlbiIsImNhdGNoIiwidHJpZ2dlciIsImVyciIsImxvYWQiLCJvbkZpbmlzaGVkIiwib24iLCJyZWplY3QiLCJpZGVudGlmaWVyIiwiaGFzIiwic2NoZW1hIiwic2V0IiwiZ2V0IiwiY29uZmlnIiwiREJNYW5hZ2VyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyIsImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=
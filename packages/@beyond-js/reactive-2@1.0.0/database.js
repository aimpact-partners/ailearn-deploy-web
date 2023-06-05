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
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiX2V2ZW50cyIsIl9jb3JlIiwiRGF0YWJhc2UiLCJFdmVudHMiLCJ2ZXJzaW9uIiwiZGIiLCJwcm9taXNlIiwiY3VycmVudFZlcnNpb24iLCJpbnN0YW5jZSIsInJlYWR5IiwibmFtZSIsImNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiUGVuZGluZ1Byb21pc2UiLCJnbG9iYWxUaGlzIiwiZGVmYXVsdCIsIm9uUmVhZHkiLCIjb25SZWFkeSIsInJlc29sdmUiLCJ1bmRlZmluZWQiLCJvbkVycm9yIiwiZXJyb3IiLCJFcnJvciIsIm5leHRWZXJzaW9uIiwiI25leHRWZXJzaW9uIiwicmVnaXN0ZXIiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdG9yZSIsIml0ZW1zIiwic3BsaXQiLCJmaWx0ZXIiLCJTZXQiLCJhZGQiLCJBcnJheSIsImZyb20iLCJqb2luIiwic3RvcmVzIiwib3BlbiIsImUiLCJjb25zb2xlIiwiZXhwb3J0cyIsIl9kYXRhYmFzZSIsIkRhdGFiYXNlTWFuYWdlciIsImRhdGFiYXNlcyIsIk1hcCIsInNjaGVtYXMiLCJ0aGVuIiwib25GaW5pc2hlZCIsImNhdGNoIiwiI29uRmluaXNoZWQiLCJ0cmlnZ2VyIiwiZXJyIiwibG9hZCIsIm9uIiwicmVqZWN0IiwiaWRlbnRpZmllciIsImhhcyIsInNjaGVtYSIsInNldCIsImdldCIsImNvbmZpZyIsIkRCTWFuYWdlciJdLCJzb3VyY2VzIjpbIi9kYXRhYmFzZS50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVNLE1BQU9HLFFBQVMsU0FBUUYsT0FBQSxDQUFBRyxNQUFNO1lBQ25DLENBQUFDLE9BQVEsR0FBRyxDQUFDO1lBRVosQ0FBQUMsRUFBRztZQUNILElBQUlBLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHO1lBQ2hCO1lBQ0EsQ0FBQUMsT0FBUTtZQUNSLENBQUFDLGNBQWU7WUFDZixPQUFPLENBQUFDLFFBQVM7WUFDaEIsQ0FBQUMsS0FBTTtZQUVOLENBQUFDLElBQUs7WUFDTCxJQUFJRCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBRSxZQUFZRCxJQUFJLEVBQUVOLE9BQU87Y0FDeEIsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDLENBQUFNLElBQUssR0FBR0EsSUFBSTtjQUNqQixJQUFJLENBQUMsQ0FBQU4sT0FBUSxHQUFHQSxPQUFPO2NBQ3ZCLElBQUksQ0FBQ1EsTUFBTSxFQUFFO2NBQ2IsSUFBSSxDQUFDLENBQUFOLE9BQVEsR0FBRyxJQUFJTCxLQUFBLENBQUFZLGNBQWMsRUFBRTtjQUVwQ0MsVUFBVSxDQUFDVCxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDekI7WUFFQSxNQUFNTyxNQUFNQSxDQUFBO2NBQ1gsSUFBSSxDQUFDLENBQUFQLEVBQUcsR0FBRyxJQUFJUCxNQUFBLENBQUFpQixPQUFLLENBQUMsSUFBSSxDQUFDLENBQUFMLElBQUssQ0FBQztjQUNoQyxJQUFJLENBQUMsQ0FBQUgsY0FBZSxHQUFHLElBQUksQ0FBQyxDQUFBRixFQUFHLENBQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQUEsT0FBUSxDQUFDO1lBQ3ZEO1lBRUEsQ0FBQVksT0FBUSxHQUFHQyxDQUFBLEtBQUs7Y0FDZixJQUFJLENBQUMsQ0FBQVIsS0FBTSxHQUFHLElBQUk7Y0FDbEIsSUFBSSxDQUFDLENBQUFILE9BQVEsQ0FBQ1ksT0FBTyxFQUFFO2NBQ3ZCLElBQUksQ0FBQyxDQUFBWixPQUFRLEdBQUdhLFNBQVM7WUFDMUIsQ0FBQztZQUNELENBQUFDLE9BQVEsR0FBSUMsS0FBSyxJQUFJO2NBQ3BCLElBQUksQ0FBQyxDQUFBZixPQUFRLENBQUNZLE9BQU8sRUFBRTtjQUN2QixJQUFJLENBQUMsQ0FBQVosT0FBUSxHQUFHYSxTQUFTO2NBQ3pCLE1BQU0sSUFBSUcsS0FBSyxDQUFDRCxLQUFLLENBQUM7WUFDdkIsQ0FBQztZQUNELENBQUFFLFdBQVlDLENBQUE7Y0FDWCxJQUFJLENBQUMsQ0FBQXBCLE9BQVEsRUFBRTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQXFCLFFBQVEsR0FBRyxNQUFPQyxJQUFJLElBQUk7Y0FDekJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUMsQ0FBQ0csT0FBTyxDQUFFQyxLQUFLLElBQUk7Z0JBQ25DLE1BQU1DLEtBQUssR0FBR0wsSUFBSSxDQUFDSSxLQUFLLENBQUMsQ0FBQ0UsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDcEMsTUFBTUMsTUFBTSxHQUFHLElBQUlDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO2dCQUM3QkUsTUFBTSxDQUFDRSxHQUFHLENBQUMsU0FBUyxDQUFDO2dCQUNyQkYsTUFBTSxDQUFDRSxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUN4QlQsSUFBSSxDQUFDSSxLQUFLLENBQUMsR0FBR00sS0FBSyxDQUFDQyxJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFDSyxJQUFJLENBQUMsR0FBRyxDQUFDO2NBQzNDLENBQUMsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBL0IsY0FBZSxDQUFDZ0MsTUFBTSxDQUFDYixJQUFJLENBQUM7Y0FFakMsSUFBSTtnQkFDSCxNQUFNLElBQUksQ0FBQyxDQUFBckIsRUFBRyxDQUFDbUMsSUFBSSxFQUFFO2dCQUNyQixPQUFPLElBQUksQ0FBQyxDQUFBbkMsRUFBRztlQUNmLENBQUMsT0FBT29DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDckIsS0FBSyxDQUFDLG1CQUFtQixFQUFFb0IsQ0FBQyxDQUFDOztZQUV2QyxDQUFDOztVQUNERSxPQUFBLENBQUF6QyxRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVELElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUE2QyxTQUFBLEdBQUE3QyxPQUFBO1VBRU87VUFBVyxNQUFPOEMsZUFBZ0IsU0FBUTdDLE9BQUEsQ0FBQUcsTUFBTTtZQUN0RCxDQUFBRyxPQUFRO1lBQ1IsQ0FBQUcsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsQ0FBQUosRUFBRztZQUNILElBQUlBLEVBQUVBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxFQUFHO1lBQ2hCO1lBQ0EsQ0FBQXlDLFNBQVUsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDdEJwQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBRVAsTUFBTU4sRUFBRSxHQUFHLElBQUlQLE1BQUEsQ0FBQWlCLE9BQUssQ0FBQyxrQkFBa0IsQ0FBQztjQUN4QyxJQUFJLENBQUMsQ0FBQVYsRUFBRyxHQUFHQSxFQUFFO2NBQ2JBLEVBQUUsQ0FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDbUMsTUFBTSxDQUFDO2dCQUFFUyxPQUFPLEVBQUU7Y0FBcUIsQ0FBRSxDQUFDO2NBQ3hEM0MsRUFBRSxDQUFDbUMsSUFBSSxFQUFFLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQUMsVUFBVyxDQUFDLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQS9CLE9BQVEsQ0FBQztZQUN0RDtZQUVBLENBQUE4QixVQUFXLEdBQUdFLENBQUEsS0FBSztjQUNsQixJQUFJLENBQUNDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztjQUN4QyxJQUFJLElBQUksQ0FBQyxDQUFBL0MsT0FBUSxFQUFFLElBQUksQ0FBQyxDQUFBQSxPQUFRLENBQUNZLE9BQU8sRUFBRTtZQUMzQyxDQUFDO1lBQ0QsQ0FBQUUsT0FBUSxHQUFHa0MsR0FBRyxJQUFHO2NBQ2hCLElBQUksQ0FBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQztjQUNyQlgsT0FBTyxDQUFDckIsS0FBSyxDQUFDaUMsR0FBRyxDQUFDO1lBQ25CLENBQUM7WUFFREMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDOUMsS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDQSxLQUFLO2NBQ2pDLElBQUksSUFBSSxDQUFDLENBQUFILE9BQVEsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO2NBQ3ZDLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUcsSUFBSUwsS0FBQSxDQUFBWSxjQUFjLEVBQUU7Y0FDcEMsTUFBTXFDLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2dCQUN2QixJQUFJLENBQUMsQ0FBQXpDLEtBQU0sR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUMsQ0FBQUgsT0FBUSxDQUFDWSxPQUFPLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBWixPQUFRLEdBQUdhLFNBQVM7Y0FDMUIsQ0FBQztjQUNELElBQUksQ0FBQ3FDLEVBQUUsQ0FBQyxVQUFVLEVBQUVOLFVBQVUsQ0FBQztjQUMvQixJQUFJLENBQUNNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBSztnQkFDckIsSUFBSSxDQUFDLENBQUFsRCxPQUFRLENBQUNtRCxNQUFNLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxDQUFBbkQsT0FBUSxHQUFHYSxTQUFTO2NBQzFCLENBQUMsQ0FBQztZQUNIO1lBRUEsTUFBTXFCLElBQUlBLENBQUNrQixVQUFVO2NBQ3BCLElBQUksQ0FBQ2hELElBQUksRUFBRU4sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHc0QsVUFBVSxDQUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQztjQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFjLFNBQVUsQ0FBQ2EsR0FBRyxDQUFDakQsSUFBSSxDQUFDLEVBQUU7Z0JBQy9CLE1BQU1rRCxNQUFNLEdBQUcsSUFBSWhCLFNBQUEsQ0FBQTFDLFFBQVEsQ0FBQ1EsSUFBSSxFQUFFTixPQUFPLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxDQUFBMEMsU0FBVSxDQUFDZSxHQUFHLENBQUNuRCxJQUFJLEVBQUVrRCxNQUFNLENBQUM7Z0JBQ2pDLE9BQU9BLE1BQU07O2NBR2QsT0FBTyxJQUFJLENBQUMsQ0FBQWQsU0FBVSxDQUFDZ0IsR0FBRyxDQUFDcEQsSUFBSSxDQUFDO1lBQ2pDO1lBRUFvRCxHQUFHLEdBQUdwRCxJQUFJLElBQUksSUFBSSxDQUFDOEIsSUFBSSxDQUFDOUIsSUFBSSxDQUFDO1lBRTdCLE1BQU1xRCxNQUFNQSxDQUFDckQsSUFBSSxFQUFFNkIsTUFBTTtjQUN4QixNQUFNcUIsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDcEIsSUFBSSxDQUFDOUIsSUFBSSxDQUFDO2NBQ3BDLE9BQU9rRCxNQUFNLENBQUNuQyxRQUFRLENBQUNjLE1BQU0sQ0FBQztZQUMvQjs7VUFDQUksT0FBQSxDQUFBRSxlQUFBLEdBQUFBLGVBQUE7VUFDTTtVQUFhLE1BQU1tQixTQUFTLEdBQUcsSUFBSW5CLGVBQWUsRUFBRTtVQUFDRixPQUFBLENBQUFxQixTQUFBLEdBQUFBLFNBQUEifQ==
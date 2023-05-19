System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive-2@1.0.0/model", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.3", "@beyond-js/reactive-2@1.0.0/database"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Collection, CollectionLocalProvider, IProvider, Item, LocalProvider, FactoryRecords, StoreRecords, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    CollectionLocalProvider: void 0,
    IProvider: void 0,
    Item: void 0,
    LocalProvider: void 0,
    FactoryRecords: void 0,
    StoreRecords: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive2100Model) {
      dependency_1 = _beyondJsReactive2100Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_beyondJsReactive2100Database) {
      dependency_4 = _beyondJsReactive2100Database;
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
          "vspecifier": "@beyond-js/reactive-2@1.0.0/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive-2/model', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['dexie', dependency_3], ['@beyond-js/reactive-2/database', dependency_4]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./collection/index
      **********************************/
      ims.set('./collection/index', {
        hash: 1551188900,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _localProvider = require("./local-provider");
          var _publish = require("./publish");
          var _load = require("./load");
          /*bundle */
          class Collection extends _model.ReactiveModel {
            #items = [];
            localdb = true;
            get items() {
              return this.#items;
            }
            get isOnline() {
              return !this.localProvider ? true : this.localProvider.isOnline;
            }
            set items(value) {
              if (!Array.isArray(value)) {
                return;
              }
              this.#items = value;
              this.triggerEvent();
            }
            counters = {};
            /**
             * Represents the number of elements in the collection
             */
            total = 0;
            provider;
            next;
            #localProvider;
            get localProvider() {
              return this.#localProvider;
            }
            #saveManager;
            #loadManager;
            #provider;
            #initSpecs = {};
            sortBy = 'id';
            sortDirection = 'asc';
            constructor() {
              super();
              this.reactiveProps(['item', 'next', 'provider']);
            }
            setItems(values) {
              this.#items = values;
            }
            async init(specs = {}) {
              this.#initSpecs = specs;
              const getProperty = property => this[property];
              const setProperty = (property, value) => this[property] = value;
              const bridge = {
                get: getProperty,
                set: setProperty
              };
              this.#localProvider = new _localProvider.CollectionLocalProvider(this, bridge);
              this.#localProvider.on('items.changed', this.#listenItems);
              this.localProvider.init();
              this.#saveManager = new _publish.CollectionSaveManager(this, bridge);
              this.#loadManager = new _load.CollectionLoadManager(this, bridge);
            }
            #listenItems = () => {
              if (!this.localdb) return;
              // this.#items = this.#loadManager.processEntries(this.#localProvider.items);
              // this.trigger('change');
            };

            setOffline = value => this.localProvider.setOffline(value);
            async store() {
              await this.#localProvider.init();
              return this.#localProvider.store;
            }
          }
          exports.Collection = Collection;
        }
      });

      /*********************************
      INTERNAL MODULE: ./collection/load
      *********************************/

      ims.set('./collection/load', {
        hash: 2563180575,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLoadManager = void 0;
          class CollectionLoadManager {
            #parent;
            get parent() {
              return this.#parent;
            }
            #localProvider;
            #provider;
            #getProperty;
            #parentBridge;
            #localdb;
            constructor(parent, parentBridge) {
              this.#parent = parent;
              this.#parentBridge = parentBridge;
              this.init();
            }
            init = async () => {
              this.#localdb = this.#parentBridge.get('localdb');
              this.#localProvider = this.#parentBridge.get('localProvider');
              this.#provider = this.#parentBridge.get('provider');
              this.#parent.load = this.load;
            };
            /**
             * metodo general para las consultas de tipo lista para las colecciones
             * @param params Object filters and configuration
             * parameters:
             *  - next
             *  - limit
             *  - update // siguiente pagina de misma consulta
             *
             *
             * - status // 1, 0, -1
             *  {user: [10,30]}
             *
             * {and: [{user:10}, {user:30}]]}
             *
             *  {user: 10}
             *  {user: [10,30,40,50]}
             * {or: [{user:10}, {user:30}]]}
             * {and: [{user:10}, {user:30}]]}
             *  el provider debe devolver:
             *    - next
             *    - entries
             *  - total
             * load({status:1})
             */
            #localLoad = async params => {
              const localData = (await this.#localProvider.load(params)) ?? {
                data: []
              };
              const newItems = this.processEntries(localData.data);
              let items = params.update === true ? this.parent.items.concat(newItems) : newItems;
              const properties = {
                localLoaded: true,
                fetching: false,
                total: localData.total ?? 0,
                next: !!localData.next
              };
              if (localData.next) properties.next = localData.next;
              this.parent.set(properties);
              return items;
            };
            #localData = [];
            #page = 1;
            #remoteElements = [];
            load = async (params = {}) => {
              try {
                this.parent.fetching = true;
                let {
                  start = 0,
                  update
                } = params;
                params.limit = params.limit ?? 30;
                const {
                  next
                } = this.parent;
                if (update) this.#page++;
                start = update === true && next ? next : start;
                if (update) {
                  params.start = start;
                }
                if (await this.#parentBridge.get('localProvider')) {
                  const localItems = await this.#localLoad(params);
                  if (!this.#localProvider.isOnline || !this.#provider) {
                    return {
                      status: true,
                      data: localItems
                    };
                  }
                }
                const remoteData = await this.#provider.list(params);
                const {
                  status,
                  data,
                  error
                } = remoteData;
                if (!status) throw error ?? 'ERROR_LIST_QUERY';
                const items = this.processRemoteEntries(data.entries);
                if (this.#localProvider) await this.#localProvider.save(items);
                this.#remoteElements = params.update === true ? this.#remoteElements.concat(items) : items;
                const properties = {
                  items: this.#remoteElements,
                  next: data.next,
                  loaded: true,
                  fetching: false,
                  total: data.total ?? 0
                };
                this.parent.set(properties);
                this.parent.triggerEvent();
                return {
                  status: true,
                  data: items
                };
              } catch (exc) {
                console.error('ERROR LOAD', exc);
                this.#parent.set({
                  loaded: false,
                  fetching: true
                });
                this.parent.triggerEvent();
                return {
                  status: false,
                  error: {
                    message: exc
                  }
                };
              }
            };
            processRemoteEntries(entries) {
              return entries.map(record => {
                const item = new this.parent.item();
                item.set(record, true);
                return item;
              });
            }
            processEntries = entries => {
              return entries.map(record => {
                const item = new this.parent.item();
                item.set(record);
                return item;
              });
            };
            remoteLoad = async params => {
              const response = await this.#provider.load(params);
              if (!response.status) throw 'ERROR_DATA_QUERY';
              return response.data;
            };
          }
          exports.CollectionLoadManager = CollectionLoadManager;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./collection/local-provider
      *******************************************/

      ims.set('./collection/local-provider', {
        hash: 3320357406,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLocalProvider = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _dexie = require("dexie");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive-2/database");
          var _factory = require("../registry/factory");
          /*bundle*/
          class CollectionLocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #store;
            get store() {
              return this.#store;
            }
            #offline;
            #database;
            #storeName;
            #databaseName;
            #items = [];
            #records;
            get items() {
              return this.#items;
            }
            #exists = false;
            #found = false;
            #db;
            get isOnline() {
              return this.#isOnline && !this.#offline && !localStorage.getItem("reactive.offline");
            }
            #parent;
            #bridge;
            constructor(parent, bridge) {
              super();
              const {
                db,
                storeName
              } = parent;
              this.#parent = parent;
              this.#bridge = bridge;
              this.#records = _factory.FactoryRecords.get(db);
              if (!db || !storeName) throw new Error("database and store are required");
              this.#databaseName = db;
              this.#storeName = storeName;
              globalThis.addEventListener("online", this.handleConnection);
              globalThis.addEventListener("offline", this.handleConnection);
            }
            setOffline(value) {
              this.#offline = value;
              this.triggerEvent();
            }
            #promiseInit;
            init = async () => {
              try {
                if (this.#promiseInit) return this.#promiseInit;
                this.#promiseInit = new _core.PendingPromise();
                const database = await _database.DBManager.get(this.#databaseName);
                this.#database = database;
                this.#store = database.db[this.#storeName];
                this.ready = true;
                this.#promiseInit.resolve();
                this.#promiseInit = undefined;
              } catch (e) {
                console.error(e);
              }
            };
            handleConnection = () => {
              this.triggerEvent();
            };
            /**
             * @todo: Must validated if some item in the collection is not sync.
             * @param data
             * @returns
             */
            #isUnpublished(data) {}
            #promiseLoad;
            #params;
            #total;
            #page = 0;
            async load(params) {
              if (this.#promiseLoad) return this.#promiseLoad;
              if (JSON.stringify(this.#params) === JSON.stringify(params)) {
                return this.#promiseLoad;
              }
              this.#promiseLoad = new _core.PendingPromise();
              const conditions = Object.keys(params);
              const controls = ["and", "or"];
              conditions.forEach(condition => {
                if (controls.includes(condition)) {
                  this.#processControl(condition, params[condition]);
                }
              });
              try {
                if (!this.#total) this.#total = await this.#store.count();
                let limit = params.limit ?? 30;
                const totalPages = Math.ceil(this.#total / limit);
                if (totalPages <= this.#page) return;
                let first = true;
                const live = (0, _dexie.liveQuery)(() => {
                  let query = this.#store;
                  this.#page++;
                  const offset = (this.#page - 1) * limit;
                  return query.orderBy("id").offset(offset).limit(limit).toArray();
                });
                live.subscribe({
                  next: async items => {
                    if (this.#promiseLoad) {
                      first = false;
                      const response = {
                        status: true,
                        data: items,
                        total: this.#total,
                        next: true
                      };
                      if (this.#page + 1 >= totalPages) delete response.next;
                      this.#promiseLoad.resolve(response);
                      this.#promiseLoad = null;
                    }
                    this.#items = this.#items.concat(items);
                    this.trigger("items.changed");
                  },
                  error: err => {
                    console.error(err);
                  }
                });
                return this.#promiseLoad;
                //return await this.live.toArray();
              } catch (error) {
                console.error("Error al cargar los elementos del store:", error);
                return {
                  status: false,
                  data: []
                };
              }
            }
            async save(data) {
              const process = (entries, offline = 0) => {
                return entries.map(item => {
                  const record = item.getProperties && typeof item.getProperties === "function" ? item.getProperties() : item;
                  const toSave = {
                    ...record,
                    offline,
                    instanceId: item.instanceId
                  };
                  return toSave;
                });
              };
              data = process(data, this.isOnline ? 0 : 1);
              await this.#records.init();
              await this.#records.saveAll(data, this.#storeName);
            }
            #processControl(control, conditions) {
              this.#store[control];
            }
            async upsert(data, originalData) {
              return this.#database.db.transaction("rw", this.store, async () => {
                const instanceIdToIdMap = new Map();
                data.forEach(item => {
                  instanceIdToIdMap.set(item.instanceId, item.id);
                });
                await this.store.bulkPut(data);
              });
            }
          }
          exports.CollectionLocalProvider = CollectionLocalProvider;
        }
      });

      /************************************
      INTERNAL MODULE: ./collection/publish
      ************************************/

      ims.set('./collection/publish', {
        hash: 1579338487,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionSaveManager = void 0;
          class CollectionSaveManager {
            #parent;
            #bridge;
            #localProvider;
            #provider;
            #localdb;
            MAX_RETRIES = 3;
            CHUNK_SIZE = 200;
            constructor(parent, bridge) {
              this.#parent = parent;
              this.#bridge = bridge;
              this.init();
            }
            init() {
              this.#parent.save = this.save;
              this.#parent.sync = this.sync;
              this.#parent.publish = this.publish;
              this.#parent.toSync = this.toSync;
              this.#localdb = this.#bridge.get("localdb");
              if (this.#localdb) {
                this.#localProvider = this.#bridge.get("localProvider");
              } else {
                console.warn("la colleccion no usa indexeddb");
              }
              this.#provider = this.#bridge.get("provider");
            }
            save = async (data = []) => {
              if (!this.#localdb) return true;
              await this.#localProvider.init();
              await this.#localProvider.save(data);
            };
            publish = async (data = []) => {
              try {
                await this.save(data);
                if (!this.#provider || this.#bridge.get("isOffline")) return;
                const response = await this.#provider.bulkSave(data);
                if (!response.status) throw response.error;
                return {
                  status: true
                };
              } catch (error) {
                console.error(error);
                return {
                  status: false,
                  error
                };
              }
            };
            // Send chunks with retries
            sendChunk = async (chunk, index, retries = 0) => {
              try {
                const response = await this.#provider.bulkSave(chunk);
                if (response.status) {
                  const data = response.data.entries.map(item => ({
                    ...item,
                    offline: 0,
                    instanceId: undefined
                  }));
                  await this.#localProvider.upsert(data, chunk);
                  return {
                    success: true,
                    chunk,
                    response
                  };
                }
                if (retries < this.MAX_RETRIES) {
                  return await this.sendChunk(chunk, retries + 1);
                }
                return {
                  success: false,
                  chunk,
                  response
                };
              } catch (e) {
                console.error(e);
                return {
                  success: false,
                  chunk,
                  error: e
                };
              }
            };
            // Split large datasets into smaller chunks
            splitDataIntoChunks = data => {
              const chunks = [];
              for (let i = 0; i < data.length; i += this.CHUNK_SIZE) {
                chunks.push(data.slice(i, i + this.CHUNK_SIZE));
              }
              return chunks;
            };
            sync = async data => {
              try {
                await this.#localProvider.init();
                if (!data) data = await this.#parent.localProvider.store.where("offline").equals(1).toArray();
                const chunks = this.splitDataIntoChunks(data);
                const failedChunks = [];
                const successChunks = [];
                for (const [index, chunk] of chunks.entries()) {
                  const result = await this.sendChunk(chunk, index);
                  if (!result.success) {
                    failedChunks.push(result);
                  } else successChunks.push(result);
                }
                this.#bridge.set("items", []);
                await this.#parent.load();
                if (failedChunks.length) {
                  const message = failedChunks.length === chunks.length ? "FAILED_SYNC" : "INCOMPLETE_SYNC";
                  return {
                    status: false,
                    message,
                    data: {
                      failed: failedChunks,
                      success: successChunks
                    }
                  };
                }
                return {
                  status: true,
                  data: successChunks
                };
              } catch (e) {
                console.error(e);
              }
            };
            toSync = async () => {
              try {
                await this.#localProvider.init();
                return this.#localProvider.store.where("offline").equals(1).toArray();
              } catch (e) {
                console.error(e);
              }
            };
          }
          exports.CollectionSaveManager = CollectionSaveManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./interfaces/provider
      *************************************/

      ims.set('./interfaces/provider', {
        hash: 2908410463,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 2357472431,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _localProvider = require("./local-provider");
          var _save = require("./save");
          var _load = require("./load");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class Item extends _model.ReactiveModel {
            #info = new Map();
            /**
             * Represent the data that is stored in the local database
             */
            #localData = new Map();
            localdb = true;
            provider;
            storeName;
            db;
            #ignoredFields = [];
            #skeleton = [];
            localProvider;
            unique = [];
            get isUnpublished() {
              return this.localProvider.isUnpublished(this.getProperties());
            }
            #saveManager;
            get skeleton() {
              return this.#skeleton;
            }
            __get(property) {
              return this[property];
            }
            get store() {
              return this.localProvider.store;
            }
            get isOnline() {
              return this.localProvider.isOnline && !localStorage.getItem('reactive.offline');
            }
            #found;
            get found() {
              return this.#found;
            }
            set found(v) {
              if (v !== this.#found) return;
              this.#found = v;
              this.triggerEvent();
            }
            get landed() {
              return this.localProvider?.landed;
            }
            #loadManager;
            #objectReady = false;
            #ready = false;
            #promiseReady;
            constructor() {
              super();
              this.on('object.loaded', this.checkReady);
            }
            async init(config = {}) {
              try {
                let id;
                if (config.id) id = config.id;
                const getProperty = property => this.__get(property);
                this.localProvider = new _localProvider.LocalProvider(this, getProperty);
                this.#saveManager = new _save.ItemSaveManager(this, getProperty);
                this.#loadManager = new _load.ItemLoadManager(this, getProperty);
                if (!id) {
                  this.trigger('object.loaded');
                }
                await this.localProvider.init(id);
                if (this.#skeleton && this.#skeleton.length > 0) {
                  this.properties = this.#skeleton;
                }
                this.#ready = true;
                this.trigger('object.loaded');
              } catch (e) {
                console.error('error initializing', e);
              }
            }
            checkReady = () => {
              if (this.#ready) {
                return this.#ready;
              }
              if (this.#promiseReady) return this.#promiseReady;
              this.#promiseReady = new _core.PendingPromise();
              if (this.objectReady) this.#promiseReady.resolve(this.#objectReady);
              const onReady = () => {
                this.#objectReady = true;
                this.#promiseReady.resolve(this.#objectReady);
                this.#promiseReady = undefined;
              };
              this.on('object.loaded', onReady);
              return this.#promiseReady;
            };
            setOffline = value => this.localProvider.setOffline(value);
            addLocalProvider(db, table) {
              if (this.localProvider) return;
            }
            set(data, init = false) {
              // If init is true, store the data in localData Map
              if (init) {
                this.#localData = new Map(Object.entries(data));
                this.localProvider.save(data, true);
              }
              // If a property is in the properties array, define it as a public property
              this.properties.forEach(property => {
                if (data.hasOwnProperty(property)) {
                  this[property] = data[property];
                }
              });
              this.triggerEvent();
            }
            /**
             * @deprecated Please use getProperties instead
             * @see ReactiveModel.properties
             */
            getValues() {
              const values = {};
              const toIterate = this.skeleton.length ? this.skeleton : this.properties;
              toIterate.forEach(field => {
                if (this.hasOwnProperty(field)) values[field] = this[field];
              });
              return values;
            }
            getPropertyNames() {
              return this.properties;
            }
          }
          exports.Item = Item;
        }
      });

      /***************************
      INTERNAL MODULE: ./item/load
      ***************************/

      ims.set('./item/load', {
        hash: 4111504877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemLoadManager = void 0;
          class ItemLoadManager {
            #parent;
            #localProvider;
            #provider;
            #getProperty;
            constructor(parent, getProperty) {
              this.#parent = parent;
              this.#getProperty = getProperty;
              this.init();
            }
            init = async () => {
              this.#localProvider = this.#getProperty('localProvider');
              this.#provider = this.#getProperty('provider');
              this.#parent.load = this.load;
            };
            /**
             *
             * @param id
             * @returns
             */
            load = async params => {
              try {
                await this.#getProperty('checkReady')();
                const localdb = await this.#getProperty('localdb');
                if (localdb && this.#localProvider) {
                  const localData = await this.#localProvider.load(params);
                  if (localData?.status) this.#parent.set(localData.data, true);
                }
                // if (this.#localProvider && !this.#localProvider.isOnline) return { status: true };
                if (!this.#provider) return;
                const remoteData = await this.remoteLoad(params);
                if (!remoteData) this.#parent.found = false;
                if (remoteData) {
                  let same = true;
                  Object.keys(remoteData).forEach(key => {
                    let original = this.#localProvider.registry.values;
                    if (original[key] !== remoteData[key]) same = false;
                  });
                  if (!same) await this.#localProvider.save(remoteData);
                }
                this.#parent.found = true;
                return {
                  status: true
                };
              } catch (exc) {
                console.error('ERROR LOAD', exc.message);
                return {
                  status: false,
                  error: exc
                };
              } finally {
                this.#parent.fetching = false;
              }
            };
            remoteLoad = async params => {
              // TODO: CHANGE TO LOAD
              if (!this.#parent.isOnline) return;
              const response = await this.#provider.data(params);
              if (!response.status) throw 'ERROR_DATA_QUERY';
              return response.data;
            };
          }
          exports.ItemLoadManager = ItemLoadManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./item/local-provider
      *************************************/

      ims.set('./item/local-provider', {
        hash: 1284736161,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LocalProvider = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _database = require("@beyond-js/reactive-2/database");
          var _factory = require("../registry/factory");
          /*bundle*/
          class LocalProvider extends _model.ReactiveModel {
            #isOnline = globalThis.navigator.onLine;
            #store;
            get store() {
              return this.#store;
            }
            #offline;
            #database;
            #storeName;
            #databaseName;
            #originalData;
            #exists = false;
            get landed() {
              return this.#registry?.landed;
            }
            get originalData() {
              return this.#originalData;
            }
            #db;
            get isOnline() {
              return this.#isOnline && !this.#offline && !localStorage.getItem("reactive.offline");
            }
            #parent;
            #getProperty;
            /**
             * @type {FactoryRecords}
             */
            #records;
            /**
             * @type {Registry} Database Record
             *
             */
            #registry;
            get registry() {
              return this.#registry;
            }
            constructor(parent, getProperty) {
              super();
              this.#getProperty = getProperty;
              const {
                db,
                storeName
              } = parent;
              this.__id = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
              this.#parent = parent;
              if (!db || !storeName) throw new Error("database and store are required");
              this.#databaseName = db;
              this.#storeName = storeName;
              this.#records = _factory.FactoryRecords.get(db);
              globalThis.addEventListener("online", this.handleConnection);
              globalThis.addEventListener("offline", this.handleConnection);
            }
            setOffline(value) {
              this.#offline = value;
              this.triggerEvent();
            }
            init = async (id = undefined) => {
              try {
                const database = await _database.DBManager.get(this.#databaseName);
                this.#database = database;
                this.#store = database.db[this.#storeName];
                if (id) {
                  await this.load({
                    id
                  });
                } else {
                  await this.#getRegistry(id);
                }
                return;
              } catch (e) {
                console.error(e);
              }
            };
            handleConnection = () => {
              this.triggerEvent();
            };
            isUnpublished(data) {
              const properties = Object.keys(data);
              const toCompare = {
                ...this.#registry.values
              };
              return properties.some(prop => {
                if (prop === "id") return false;
                return toCompare[prop] !== data[prop];
              });
            }
            async load(params = {}) {
              let id = params.id;
              id = id ?? this.#parent.id;
              try {
                if (!id) throw "ID IS REQUIRED";
                const values = await this.#getRegistry(id);
                this.#parent.loaded = true;
                this.#parent.set(this.#registry.values);
                return {
                  status: true,
                  data: this.#registry.values
                };
              } catch (e) {
                console.error(e);
                return e;
              }
            }
            /**
             * Retrieves the record from the local database store
             *
             * Also creates a listener for the record changes
             * @param id id of the record
             * @returns
             */
            #getRegistry = async id => {
              const registry = await this.#records.load(this.#storeName, id);
              if (!registry) return console.warn("NO RECORD FOUND");
              this.#parent.set(registry.values);
              this.#registry = registry;
              registry.on("change", this.#listenRegistry);
              return registry;
            };
            /**
             * Trigger the event to update the component when the registry changes.
             */
            #listenRegistry = async () => {
              if (!this.#registry) return;
              this.#parent.set(this.#registry.values);
              this.trigger("change");
            };
            async save(data, backend = false) {
              try {
                if (!this.isUnpublished) return;
                if (!this.isOnline) data.offline = 1;
                if (!this.#registry) await this.#getRegistry("new");
                // Add validation for unique fields
                const duplicated = await this.validateUniqueFields(data);
                if (duplicated.length) return {
                  error: "duplicated",
                  fields: duplicated
                };
                await this.#registry.update(data, backend);
                return this;
              } catch (e) {
                console.error("error saving", e.message);
              }
            }
            async #update(data) {
              try {
                if (!this.isUnpublished) return;
                await this.#store.update(data.id, data);
                // recordsFactory.update(this.#storeName, data.id, data);
              } catch (e) {}
            }
            async validateUniqueFields(data) {
              if (!this.#getProperty("unique").length) return [];
              const checkPromises = this.#getProperty("unique").map(field => this.#store.where(field).equals(data[field]).count().then(count => {
                if (count) {
                  return field;
                }
                return null;
              }));
              const duplicateFields = (await Promise.all(checkPromises)).filter(field => field !== null);
              return duplicateFields;
            }
          }
          exports.LocalProvider = LocalProvider;
        }
      });

      /***************************
      INTERNAL MODULE: ./item/save
      ***************************/

      ims.set('./item/save', {
        hash: 1365727035,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemSaveManager = void 0;
          class ItemSaveManager {
            #parent;
            #getProperty;
            constructor(parent, getProperty) {
              this.#parent = parent;
              this.#getProperty = getProperty;
              this.init();
            }
            init() {
              this.#parent.save = this.save;
              this.#parent.publish = this.publish;
              this.#parent.sync = this.sync;
            }
            save = async (data = undefined) => {
              try {
                await this.#getProperty('checkReady')();
                if (data) {
                  this.#parent.set(data);
                }
                if (!this.#parent.isUnpublished) {
                  return;
                }
                const properties = this.#parent.getProperties();
                if (this.#parent.localProvider) {
                  await this.#parent.localProvider.save(properties);
                }
                await this.#publish(properties);
                this.#parent.triggerEvent();
                return {
                  status: true
                };
              } catch (e) {
                console.error('error saving', e);
              }
            };
            #publish = async properties => {
              try {
                if (!this.#parent.provider || !this.#parent.isOnline) return;
                const response = await this.#parent.provider.publish(properties);
                if (!response?.status) throw response.error;
                if (this.#parent.localProvider) {
                  this.#parent.localProvider.save(response.data, true);
                  this.#parent.localProvider.triggerEvent();
                }
                return {
                  status: true,
                  data: response
                };
              } catch (error) {
                console.error('ERROR PUBLISHING', error);
                return {
                  status: false,
                  error
                };
              }
            };
            publish = this.save;
            sync = () => {
              const provider = this.#getProperty('localProvider');
              if (!provider.registry.values.offline) {
                console.warn('registry already synced');
                return;
              }
              this.#publish(provider.registry.values);
              //const data = this.#getProperty("localProvider").store.where("offline").equals(true).toArray();
            };
          }

          exports.ItemSaveManager = ItemSaveManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./registry/factory
      **********************************/

      ims.set('./registry/factory', {
        hash: 3060045457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FactoryRecords = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _index = require("./index");
          var _core = require("@beyond-js/kernel/core");
          var _database = require("@beyond-js/reactive-2/database");
          class FactoryRecords extends _model.ReactiveModel {
            #stores = new Map();
            #database;
            #batches = 200;
            #dbName;
            constructor(dbName) {
              super();
              this.#dbName = dbName;
              this.init();
            }
            #promiseReady;
            async init() {
              if (this.ready) return true;
              if (this.#promiseReady) return this.#promiseReady;
              this.#promiseReady = new _core.PendingPromise();
              this.#database = await _database.DBManager.get(this.#dbName);
              this.#promiseReady.resolve();
              this.#promiseReady = undefined;
              this.ready = true;
            }
            async load(storeName, id = 'new') {
              const store = this.#database.db[storeName];
              if (!store) throw new Error(`Store ${storeName} does not exists`);
              // if the store map does not exists, create it
              if (!this.#stores.has(storeName)) this.#stores.set(storeName, new Map());
              // if the registry exists, return it
              if (this.#stores.has(storeName) && this.#stores.get(storeName).has(id)) {
                const registry = this.#stores.get(storeName).get(id);
                return registry.get();
              }
              /**
               * the local parameter defines if the registry is being creating as new local item in local or not
               */
              const registry = new _index.Registry(store, {
                id
              });
              await registry.get();
              this.#stores.get(storeName).set(registry.instanceId, registry);
              return registry;
            }
            /**
             * Saves a collection of items to the specified store in batches.
             *
             * @param {Array} items - The items to be saved.
             * @param {string} storeName - The name of the store where items will be saved.
             * @returns {Promise<{ status: boolean, failed?: Array }>} An object containing the status of the operation.
             * If the status is true, all batches have been saved successfully. If the status is false, the failed property contains an array with information about failed batches.
             * Each failed batch object has a status, a reason (if the batch is rejected), an index (the original batch position), and data (the failed batch data).
             * @throws Will throw an error if there's an issue with the Promise.allSettled() call itself.
             */
            async saveAll(items, storeName) {
              const elements = items.map(item => {
                const registry = new _index.Registry(storeName);
                registry.setValues(item);
                return registry;
              });
              const store = this.#database.db[storeName];
              const promises = [];
              const chunks = [];
              while (elements.length > 0) {
                const batch = elements.splice(0, this.#batches);
                const data = batch.map(item => item.getValues());
                chunks.push(data);
                promises.push(store.bulkPut(data));
              }
              try {
                const results = await Promise.allSettled(promises);
                const mappedFn = (result, index) => ({
                  ...result,
                  index,
                  data: chunks[index]
                });
                const failed = results.map(mappedFn).filter(result => result.status === 'rejected');
                if (!failed.length) return {
                  status: true
                };else {
                  return {
                    status: false,
                    failed
                  };
                }
              } catch (e) {
                return {
                  status: false,
                  failed: e
                };
              }
            }
            static #dbs = new Map();
            static get(dbName) {
              if (this.#dbs.has(dbName)) return this.#dbs.get(dbName);
              const db = new FactoryRecords(dbName);
              this.#dbs.set(dbName, db);
              return db;
            }
          }
          exports.FactoryRecords = FactoryRecords;
        }
      });

      /********************************
      INTERNAL MODULE: ./registry/index
      ********************************/

      ims.set('./registry/index', {
        hash: 3126064382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive-2/model");
          class Registry extends _model.ReactiveModel {
            #values = {};
            get values() {
              return this.#values;
            }
            #id;
            local = false;
            #store;
            #isNew;
            #instanceId;
            #keyId;
            #landed;
            get landed() {
              return this.#landed;
            }
            get instanceId() {
              return this.#instanceId;
            }
            constructor(store, data = {
              id: 'new'
            }) {
              super();
              const {
                id
              } = data;
              this.#store = store;
              this.#instanceId = Registry.generateUUID();
              if (!id) console.trace(11.1, id, data, this.#instanceId);
              this.#id = id === 'new' ? this.#instanceId : id;
              this.#isNew = id === 'new';
              this.#keyId = this.isNew ? '#instanceId' : '#id';
              if (this.#id) this.#values.id = this.#id;
            }
            #promise;
            async get() {
              if (this.#promise) {
                return this.#promise;
              }
              this.#promise = new _core.PendingPromise();
              if (this.#isNew) {
                this.#promise.resolve(this);
                this.#promise = undefined;
              } else {
                this.#store.get(this.#id).then(item => {
                  if (!item) {
                    this.#promise.resolve(false);
                    this.#landed = false;
                    this.setValues({
                      id: this.#id
                    });
                    this.#promise = undefined;
                    return;
                  }
                  this.#landed = true;
                  this.setValues(item);
                  this.#promise.resolve(this);
                  this.#promise = undefined;
                });
              }
              return this.#promise;
            }
            setValues = (data, backend = false) => {
              const props = Object.keys(data);
              let updated = false;
              // specify if the item was generated locally
              if (backend) {
                this.#isNew = false;
                this.#instanceId = undefined;
                delete this.#values.instanceId;
              }
              if (!data.id) {
                data.id = this.#id;
              }
              this.local = this.local;
              if (this.#isNew) {
                this.#values.instanceId = this.#instanceId;
              }
              const newValues = {
                ...this.#values
              };
              props.forEach(property => {
                if (data[property] === newValues[property]) return;
                newValues[property] = data[property];
                updated = true;
              });
              this.#values = newValues;
              this.triggerEvent();
              return updated;
            };
            getValues() {
              const values = {
                ...this.#values
              };
              if (this.#instanceId) values.instanceId = this.#instanceId;
              if (this.offline) values.offline = this.offline;
              return values;
            }
            static generateUUID() {
              return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                  v = c === 'x' ? r : r & 0x3 | 0x8;
                return v.toString(16);
              });
            }
            update = async (data, backend) => {
              const updated = this.setValues(data, backend);
              if (updated) {
                await this.#store.put(this.#values);
                this.triggerEvent('change');
              }
            };
          }
          exports.Registry = Registry;
        }
      });

      /********************************
      INTERNAL MODULE: ./registry/store
      ********************************/

      ims.set('./registry/store', {
        hash: 2695409816,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreRecords = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          class StoreRecords extends _model.ReactiveModel {}
          exports.StoreRecords = StoreRecords;
          const storeFactory = new StoreRecords();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection/index",
        "from": "Collection",
        "name": "Collection"
      }, {
        "im": "./collection/local-provider",
        "from": "CollectionLocalProvider",
        "name": "CollectionLocalProvider"
      }, {
        "im": "./interfaces/provider",
        "from": "IProvider",
        "name": "IProvider"
      }, {
        "im": "./item/index",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./item/local-provider",
        "from": "LocalProvider",
        "name": "LocalProvider"
      }, {
        "im": "./registry/factory",
        "from": "FactoryRecords",
        "name": "FactoryRecords"
      }, {
        "im": "./registry/store",
        "from": "StoreRecords",
        "name": "StoreRecords"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./collection/index').Collection : value);
        (require || prop === 'CollectionLocalProvider') && _export("CollectionLocalProvider", CollectionLocalProvider = require ? require('./collection/local-provider').CollectionLocalProvider : value);
        (require || prop === 'IProvider') && _export("IProvider", IProvider = require ? require('./interfaces/provider').IProvider : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./item/index').Item : value);
        (require || prop === 'LocalProvider') && _export("LocalProvider", LocalProvider = require ? require('./item/local-provider').LocalProvider : value);
        (require || prop === 'FactoryRecords') && _export("FactoryRecords", FactoryRecords = require ? require('./registry/factory').FactoryRecords : value);
        (require || prop === 'StoreRecords') && _export("StoreRecords", StoreRecords = require ? require('./registry/store').StoreRecords : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFFQTtVQUNBO1VBQ0E7VUFnQk87VUFBVyxNQUFnQkEsVUFBVyxTQUFRQyxvQkFBMEI7WUFDOUUsTUFBTSxHQUEyQixFQUFFO1lBQ3pCQyxPQUFPLEdBQUcsSUFBSTtZQUN4QixJQUFJQyxLQUFLO2NBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUVBLElBQUlDLFFBQVE7Y0FDWCxPQUFPLENBQUMsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDRCxRQUFRO1lBQ2hFO1lBQ0EsSUFBSUQsS0FBSyxDQUFDRyxLQUFnQztjQUN6QyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRixLQUFLLENBQUMsRUFBRTtnQkFDMUI7O2NBR0QsSUFBSSxDQUFDLE1BQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUNHLFlBQVksRUFBRTtZQUNwQjtZQUVBQyxRQUFRLEdBQVEsRUFBRTtZQUNsQjs7O1lBR0FDLEtBQUssR0FBVyxDQUFDO1lBRWpCQyxRQUFRO1lBQ1JDLElBQUk7WUFFSixjQUFjO1lBQ2QsSUFBSVIsYUFBYTtjQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjO1lBQzNCO1lBRUEsWUFBWTtZQUNaLFlBQVk7WUFDWixTQUFTO1lBQ1QsVUFBVSxHQUFXLEVBQUU7WUFDYlMsTUFBTSxHQUFXLElBQUk7WUFDckJDLGFBQWEsR0FBbUIsS0FBSztZQUUvQ0M7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLGFBQWEsQ0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDOUQ7WUFFVUMsUUFBUSxDQUFDQyxNQUFNO2NBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUdBLE1BQU07WUFDckI7WUFDVSxNQUFNQyxJQUFJLENBQUNDLFFBQWdCLEVBQUU7Y0FDdEMsSUFBSSxDQUFDLFVBQVUsR0FBR0EsS0FBSztjQUV2QixNQUFNQyxXQUFXLEdBQUdDLFFBQVEsSUFBSSxJQUFJLENBQUNBLFFBQVEsQ0FBQztjQUM5QyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0QsUUFBUSxFQUFFakIsS0FBSyxLQUFNLElBQUksQ0FBQ2lCLFFBQVEsQ0FBQyxHQUFHakIsS0FBTTtjQUVqRSxNQUFNbUIsTUFBTSxHQUFHO2dCQUFFQyxHQUFHLEVBQUVKLFdBQVc7Z0JBQUVLLEdBQUcsRUFBRUg7Y0FBVyxDQUFFO2NBRXJELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSUksc0NBQXVCLENBQUMsSUFBSSxFQUFFSCxNQUFNLENBQUM7Y0FDL0QsSUFBSSxDQUFDLGNBQWMsQ0FBQ0ksRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO2NBQzFELElBQUksQ0FBQ3hCLGFBQWEsQ0FBQ2UsSUFBSSxFQUFFO2NBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSVUsOEJBQXFCLENBQUMsSUFBSSxFQUFFTCxNQUFNLENBQUM7Y0FDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJTSwyQkFBcUIsQ0FBQyxJQUFJLEVBQUVOLE1BQU0sQ0FBQztZQUM1RDtZQUVBLFlBQVksR0FBRyxNQUFLO2NBQ25CLElBQUksQ0FBQyxJQUFJLENBQUN2QixPQUFPLEVBQUU7Y0FFbkI7Y0FDQTtZQUNELENBQUM7O1lBRUQ4QixVQUFVLEdBQUcxQixLQUFLLElBQUksSUFBSSxDQUFDRCxhQUFhLENBQUMyQixVQUFVLENBQUMxQixLQUFLLENBQUM7WUFFMUQsTUFBTTJCLEtBQUs7Y0FDVixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUNiLElBQUksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUNhLEtBQUs7WUFDakM7O1VBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZGSyxNQUFPSCxxQkFBcUI7WUFDakMsT0FBTztZQUNQLElBQUlJLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBRUEsY0FBYztZQUNkLFNBQVM7WUFDVCxZQUFZO1lBQ1osYUFBYTtZQUNiLFFBQVE7WUFFUm5CLFlBQVltQixNQUFNLEVBQUVDLFlBQVk7Y0FDL0IsSUFBSSxDQUFDLE9BQU8sR0FBR0QsTUFBTTtjQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHQyxZQUFZO2NBQ2pDLElBQUksQ0FBQ2hCLElBQUksRUFBRTtZQUNaO1lBRUFBLElBQUksR0FBRyxZQUFXO2NBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQ00sR0FBRyxDQUFDLFNBQVMsQ0FBQztjQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUNBLEdBQUcsQ0FBQyxlQUFlLENBQUM7Y0FDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDQSxHQUFHLENBQUMsVUFBVSxDQUFDO2NBQ25ELElBQUksQ0FBQyxPQUFPLENBQUNXLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUk7WUFDOUIsQ0FBQztZQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkEsVUFBVSxHQUFHLE1BQU1DLE1BQU0sSUFBRztjQUMzQixNQUFNQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUNGLElBQUksQ0FBQ0MsTUFBTSxDQUFDLEtBQUs7Z0JBQUVFLElBQUksRUFBRTtjQUFFLENBQUU7Y0FFMUUsTUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsY0FBYyxDQUFDSCxTQUFTLENBQUNDLElBQUksQ0FBQztjQUNwRCxJQUFJckMsS0FBSyxHQUFHbUMsTUFBTSxDQUFDSyxNQUFNLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQ1IsTUFBTSxDQUFDaEMsS0FBSyxDQUFDeUMsTUFBTSxDQUFDSCxRQUFRLENBQUMsR0FBR0EsUUFBUTtjQUVsRixNQUFNSSxVQUFVLEdBQWtCO2dCQUNqQ0MsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCQyxRQUFRLEVBQUUsS0FBSztnQkFDZnBDLEtBQUssRUFBRTRCLFNBQVMsQ0FBQzVCLEtBQUssSUFBSSxDQUFDO2dCQUMzQkUsSUFBSSxFQUFFLENBQUMsQ0FBQzBCLFNBQVMsQ0FBQzFCO2VBQ2xCO2NBQ0QsSUFBSTBCLFNBQVMsQ0FBQzFCLElBQUksRUFBRWdDLFVBQVUsQ0FBQ2hDLElBQUksR0FBRzBCLFNBQVMsQ0FBQzFCLElBQUk7Y0FFcEQsSUFBSSxDQUFDc0IsTUFBTSxDQUFDUixHQUFHLENBQUNrQixVQUFVLENBQUM7Y0FDM0IsT0FBTzFDLEtBQUs7WUFDYixDQUFDO1lBRUQsVUFBVSxHQUFHLEVBQUU7WUFDZixLQUFLLEdBQUcsQ0FBQztZQUNULGVBQWUsR0FBRyxFQUFFO1lBQ3BCa0MsSUFBSSxHQUFHLE9BQU9DLFNBQWMsRUFBRSxLQUFJO2NBQ2pDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDSCxNQUFNLENBQUNZLFFBQVEsR0FBRyxJQUFJO2dCQUMzQixJQUFJO2tCQUFFQyxLQUFLLEdBQUcsQ0FBQztrQkFBRUw7Z0JBQU0sQ0FBRSxHQUFHTCxNQUFNO2dCQUVsQ0EsTUFBTSxDQUFDVyxLQUFLLEdBQUdYLE1BQU0sQ0FBQ1csS0FBSyxJQUFJLEVBQUU7Z0JBQ2pDLE1BQU07a0JBQUVwQztnQkFBSSxDQUFFLEdBQUcsSUFBSSxDQUFDc0IsTUFBTTtnQkFDNUIsSUFBSVEsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hCSyxLQUFLLEdBQUdMLE1BQU0sS0FBSyxJQUFJLElBQUk5QixJQUFJLEdBQUdBLElBQUksR0FBR21DLEtBQUs7Z0JBQzlDLElBQUlMLE1BQU0sRUFBRTtrQkFDWEwsTUFBTSxDQUFDVSxLQUFLLEdBQUdBLEtBQUs7O2dCQUdyQixJQUFJLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQ3RCLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRTtrQkFDbEQsTUFBTXdCLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUNaLE1BQU0sQ0FBQztrQkFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUNsQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNyRCxPQUFPO3NCQUFFK0MsTUFBTSxFQUFFLElBQUk7c0JBQUVYLElBQUksRUFBRVU7b0JBQVUsQ0FBRTs7O2dCQUkzQyxNQUFNRSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDQyxJQUFJLENBQUNmLE1BQU0sQ0FBQztnQkFDcEQsTUFBTTtrQkFBRWEsTUFBTTtrQkFBRVgsSUFBSTtrQkFBRWM7Z0JBQUssQ0FBRSxHQUFHRixVQUFVO2dCQUMxQyxJQUFJLENBQUNELE1BQU0sRUFBRSxNQUFNRyxLQUFLLElBQUksa0JBQWtCO2dCQUU5QyxNQUFNbkQsS0FBSyxHQUFVLElBQUksQ0FBQ29ELG9CQUFvQixDQUFDZixJQUFJLENBQUNnQixPQUFPLENBQUM7Z0JBQzVELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUNDLElBQUksQ0FBQ3RELEtBQUssQ0FBQztnQkFFOUQsSUFBSSxDQUFDLGVBQWUsR0FBR21DLE1BQU0sQ0FBQ0ssTUFBTSxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDQyxNQUFNLENBQUN6QyxLQUFLLENBQUMsR0FBR0EsS0FBSztnQkFFMUYsTUFBTTBDLFVBQVUsR0FBRztrQkFDbEIxQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWU7a0JBQzNCVSxJQUFJLEVBQUUyQixJQUFJLENBQUMzQixJQUFJO2tCQUNmNkMsTUFBTSxFQUFFLElBQUk7a0JBQ1pYLFFBQVEsRUFBRSxLQUFLO2tCQUNmcEMsS0FBSyxFQUFFNkIsSUFBSSxDQUFDN0IsS0FBSyxJQUFJO2lCQUNyQjtnQkFFRCxJQUFJLENBQUN3QixNQUFNLENBQUNSLEdBQUcsQ0FBQ2tCLFVBQVUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDVixNQUFNLENBQUMxQixZQUFZLEVBQUU7Z0JBRTFCLE9BQU87a0JBQUUwQyxNQUFNLEVBQUUsSUFBSTtrQkFBRVgsSUFBSSxFQUFFckM7Z0JBQUssQ0FBRTtlQUNwQyxDQUFDLE9BQU93RCxHQUFHLEVBQUU7Z0JBQ2JDLE9BQU8sQ0FBQ04sS0FBSyxDQUFDLFlBQVksRUFBRUssR0FBRyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDaEMsR0FBRyxDQUFDO2tCQUFFK0IsTUFBTSxFQUFFLEtBQUs7a0JBQUVYLFFBQVEsRUFBRTtnQkFBSSxDQUFFLENBQUM7Z0JBQ25ELElBQUksQ0FBQ1osTUFBTSxDQUFDMUIsWUFBWSxFQUFFO2dCQUMxQixPQUFPO2tCQUFFMEMsTUFBTSxFQUFFLEtBQUs7a0JBQUVHLEtBQUssRUFBRTtvQkFBRU8sT0FBTyxFQUFFRjtrQkFBRztnQkFBRSxDQUFFOztZQUVuRCxDQUFDO1lBRURKLG9CQUFvQixDQUFDQyxPQUFPO2NBQzNCLE9BQU9BLE9BQU8sQ0FBQ00sR0FBRyxDQUFDQyxNQUFNLElBQUc7Z0JBQzNCLE1BQU1DLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQzdCLE1BQU0sQ0FBQzZCLElBQUksRUFBRTtnQkFDbkNBLElBQUksQ0FBQ3JDLEdBQUcsQ0FBQ29DLE1BQU0sRUFBRSxJQUFJLENBQUM7Z0JBQ3RCLE9BQU9DLElBQUk7Y0FDWixDQUFDLENBQUM7WUFDSDtZQUVBdEIsY0FBYyxHQUFJYyxPQUFPLElBQVc7Y0FDbkMsT0FBT0EsT0FBTyxDQUFDTSxHQUFHLENBQUNDLE1BQU0sSUFBRztnQkFDM0IsTUFBTUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDN0IsTUFBTSxDQUFDNkIsSUFBSSxFQUFFO2dCQUNuQ0EsSUFBSSxDQUFDckMsR0FBRyxDQUFDb0MsTUFBTSxDQUFDO2dCQUNoQixPQUFPQyxJQUFJO2NBQ1osQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVEQyxVQUFVLEdBQUcsTUFBTTNCLE1BQU0sSUFBRztjQUMzQixNQUFNNEIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQzdCLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2NBRWxELElBQUksQ0FBQzRCLFFBQVEsQ0FBQ2YsTUFBTSxFQUFFLE1BQU0sa0JBQWtCO2NBQzlDLE9BQU9lLFFBQVEsQ0FBQzFCLElBQUk7WUFDckIsQ0FBQzs7VUFDRE47Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkpEO1VBR0E7VUFDQTtVQUNBO1VBRUE7VUFPTztVQUFVLE1BQU9OLHVCQUF3QixTQUFRM0Isb0JBQWtCO1lBQ3hFLFNBQVMsR0FBR2tFLFVBQVUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNO1lBQ3ZDLE1BQU07WUFDTixJQUFJcEMsS0FBSztjQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDcEI7WUFDQSxRQUFRO1lBQ1IsU0FBUztZQUNULFVBQVU7WUFDVixhQUFhO1lBQ2IsTUFBTSxHQUFHLEVBQUU7WUFDWCxRQUFRO1lBQ1IsSUFBSTlCLEtBQUs7Y0FDUCxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ3BCO1lBQ0EsT0FBTyxHQUFHLEtBQUs7WUFDZixNQUFNLEdBQUcsS0FBSztZQUVkLEdBQUc7WUFDSCxJQUFJQyxRQUFRO2NBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDa0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDdEY7WUFDQSxPQUFPO1lBQ1AsT0FBTztZQUNQdkQsWUFBWW1CLE1BQU0sRUFBRVYsTUFBVztjQUM3QixLQUFLLEVBQUU7Y0FDUCxNQUFNO2dCQUFFK0MsRUFBRTtnQkFBRUM7Y0FBUyxDQUFFLEdBQUd0QyxNQUFNO2NBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLE9BQU8sR0FBR1YsTUFBTTtjQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHaUQsdUJBQWMsQ0FBQ2hELEdBQUcsQ0FBQzhDLEVBQUUsQ0FBQztjQUV0QyxJQUFJLENBQUNBLEVBQUUsSUFBSSxDQUFDQyxTQUFTLEVBQUUsTUFBTSxJQUFJRSxLQUFLLENBQUMsaUNBQWlDLENBQUM7Y0FDekUsSUFBSSxDQUFDLGFBQWEsR0FBR0gsRUFBRTtjQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHQyxTQUFTO2NBRTNCTixVQUFVLENBQUNTLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO2NBQzVEVixVQUFVLENBQUNTLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQy9EO1lBRUE3QyxVQUFVLENBQUMxQixLQUFLO2NBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBR0EsS0FBSztjQUNyQixJQUFJLENBQUNHLFlBQVksRUFBRTtZQUNyQjtZQUNBLFlBQVk7WUFDWlcsSUFBSSxHQUFHLFlBQVc7Y0FDaEIsSUFBSTtnQkFDRixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsWUFBWTtnQkFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJMEQsb0JBQWMsRUFBRTtnQkFFeEMsTUFBTUMsUUFBUSxHQUFvQixNQUFNQyxtQkFBUyxDQUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxTQUFTLEdBQUdxRCxRQUFRO2dCQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHQSxRQUFRLENBQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMxQyxJQUFJLENBQUNTLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDQyxPQUFPLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUdDLFNBQVM7ZUFDOUIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1Z4QixPQUFPLENBQUNOLEtBQUssQ0FBQzhCLENBQUMsQ0FBQzs7WUFFcEIsQ0FBQztZQUVPUCxnQkFBZ0IsR0FBRyxNQUFLO2NBQzlCLElBQUksQ0FBQ3BFLFlBQVksRUFBRTtZQUNyQixDQUFDO1lBRUQ7Ozs7O1lBS0EsY0FBYyxDQUFDK0IsSUFBSSxHQUFHO1lBQ3RCLFlBQVk7WUFDWixPQUFPO1lBRVAsTUFBTTtZQUNOLEtBQUssR0FBRyxDQUFDO1lBQ1QsTUFBTUgsSUFBSSxDQUFDQyxNQUFNO2NBQ2YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLFlBQVk7Y0FDL0MsSUFBSStDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBS0QsSUFBSSxDQUFDQyxTQUFTLENBQUNoRCxNQUFNLENBQUMsRUFBRTtnQkFDM0QsT0FBTyxJQUFJLENBQUMsWUFBWTs7Y0FHMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJd0Msb0JBQWMsRUFBRTtjQUN4QyxNQUFNUyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDbkQsTUFBTSxDQUFDO2NBRXRDLE1BQU1vRCxRQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2NBQzlCSCxVQUFVLENBQUNJLE9BQU8sQ0FBQ0MsU0FBUyxJQUFHO2dCQUM3QixJQUFJRixRQUFRLENBQUNHLFFBQVEsQ0FBQ0QsU0FBUyxDQUFDLEVBQUU7a0JBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUNBLFNBQVMsRUFBRXRELE1BQU0sQ0FBQ3NELFNBQVMsQ0FBQyxDQUFDOztjQUV0RCxDQUFDLENBQUM7Y0FFRixJQUFJO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDRSxLQUFLLEVBQUU7Z0JBQ3pELElBQUk3QyxLQUFLLEdBQUdYLE1BQU0sQ0FBQ1csS0FBSyxJQUFJLEVBQUU7Z0JBQzlCLE1BQU04QyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUdoRCxLQUFLLENBQUM7Z0JBQ2pELElBQUk4QyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDOUIsSUFBSUcsS0FBSyxHQUFHLElBQUk7Z0JBQ2hCLE1BQU1DLElBQUksR0FBRyxvQkFBUyxFQUFDLE1BQUs7a0JBQzFCLElBQUlDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTTtrQkFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtrQkFDWixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSXBELEtBQUs7a0JBQ3ZDLE9BQU9tRCxLQUFLLENBQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQ0QsTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQ3BELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUNzRCxPQUFPLEVBQUU7Z0JBQ2xFLENBQUMsQ0FBQztnQkFDRkosSUFBSSxDQUFDSyxTQUFTLENBQUM7a0JBQ2IzRixJQUFJLEVBQUUsTUFBTVYsS0FBSyxJQUFHO29CQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7c0JBQ3JCK0YsS0FBSyxHQUFHLEtBQUs7c0JBQ2IsTUFBTWhDLFFBQVEsR0FBRzt3QkFBRWYsTUFBTSxFQUFFLElBQUk7d0JBQUVYLElBQUksRUFBRXJDLEtBQUs7d0JBQUVRLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTt3QkFBRUUsSUFBSSxFQUFFO3NCQUFJLENBQUU7c0JBQzlFLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUlrRixVQUFVLEVBQUUsT0FBTzdCLFFBQVEsQ0FBQ3JELElBQUk7c0JBRXRELElBQUksQ0FBQyxZQUFZLENBQUNxRSxPQUFPLENBQUNoQixRQUFRLENBQUM7c0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTs7b0JBRzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQ3RCLE1BQU0sQ0FBQ3pDLEtBQUssQ0FBQztvQkFFdkMsSUFBSSxDQUFDc0csT0FBTyxDQUFDLGVBQWUsQ0FBQztrQkFDL0IsQ0FBQztrQkFDRG5ELEtBQUssRUFBRW9ELEdBQUcsSUFBRztvQkFDWDlDLE9BQU8sQ0FBQ04sS0FBSyxDQUFDb0QsR0FBRyxDQUFDO2tCQUNwQjtpQkFDRCxDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDLFlBQVk7Z0JBQ3hCO2VBQ0QsQ0FBQyxPQUFPcEQsS0FBSyxFQUFFO2dCQUNkTSxPQUFPLENBQUNOLEtBQUssQ0FBQywwQ0FBMEMsRUFBRUEsS0FBSyxDQUFDO2dCQUNoRSxPQUFPO2tCQUFFSCxNQUFNLEVBQUUsS0FBSztrQkFBRVgsSUFBSSxFQUFFO2dCQUFFLENBQUU7O1lBRXRDO1lBRUEsTUFBTWlCLElBQUksQ0FBQ2pCLElBQUk7Y0FDYixNQUFNbUUsT0FBTyxHQUFHLENBQUNuRCxPQUFPLEVBQUVvRCxPQUFPLEdBQUcsQ0FBQyxLQUFJO2dCQUN2QyxPQUFPcEQsT0FBTyxDQUFDTSxHQUFHLENBQUNFLElBQUksSUFBRztrQkFDeEIsTUFBTUQsTUFBTSxHQUFHQyxJQUFJLENBQUM2QyxhQUFhLElBQUksT0FBTzdDLElBQUksQ0FBQzZDLGFBQWEsS0FBSyxVQUFVLEdBQUc3QyxJQUFJLENBQUM2QyxhQUFhLEVBQUUsR0FBRzdDLElBQUk7a0JBQzNHLE1BQU04QyxNQUFNLEdBQUc7b0JBQUUsR0FBRy9DLE1BQU07b0JBQUU2QyxPQUFPO29CQUFFRyxVQUFVLEVBQUUvQyxJQUFJLENBQUMrQztrQkFBVSxDQUFFO2tCQUNsRSxPQUFPRCxNQUFNO2dCQUNmLENBQUMsQ0FBQztjQUNKLENBQUM7Y0FFRHRFLElBQUksR0FBR21FLE9BQU8sQ0FBQ25FLElBQUksRUFBRSxJQUFJLENBQUNwQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUUzQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUNnQixJQUFJLEVBQUU7Y0FDMUIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDNEYsT0FBTyxDQUFDeEUsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDcEQ7WUFDQSxlQUFlLENBQUN5RSxPQUFPLEVBQUUxQixVQUFVO2NBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMwQixPQUFPLENBQUM7WUFDdEI7WUFFQSxNQUFNQyxNQUFNLENBQUMxRSxJQUFtQixFQUFFMkUsWUFBbUI7Y0FDbkQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDM0MsRUFBRSxDQUFDNEMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUNuRixLQUFLLEVBQUUsWUFBVztnQkFDaEUsTUFBTW9GLGlCQUFpQixHQUFHLElBQUlDLEdBQUcsRUFBa0I7Z0JBQ25EOUUsSUFBSSxDQUFDbUQsT0FBTyxDQUFDM0IsSUFBSSxJQUFHO2tCQUNsQnFELGlCQUFpQixDQUFDMUYsR0FBRyxDQUFDcUMsSUFBSSxDQUFDK0MsVUFBVSxFQUFFL0MsSUFBSSxDQUFDdUQsRUFBRSxDQUFDO2dCQUNqRCxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxJQUFJLENBQUN0RixLQUFLLENBQUN1RixPQUFPLENBQUNoRixJQUFJLENBQUM7Y0FDaEMsQ0FBQyxDQUFDO1lBQ0o7O1VBQ0ROOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pLSyxNQUFPSixxQkFBcUI7WUFDaEMsT0FBTztZQUNQLE9BQU87WUFDUCxjQUFjO1lBQ2QsU0FBUztZQUNULFFBQVE7WUFDRTJGLFdBQVcsR0FBRyxDQUFDO1lBQ2ZDLFVBQVUsR0FBRyxHQUFHO1lBRTFCMUcsWUFBWW1CLE1BQU0sRUFBRVYsTUFBTTtjQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHVSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUdWLE1BQU07Y0FDckIsSUFBSSxDQUFDTCxJQUFJLEVBQUU7WUFDYjtZQUVBQSxJQUFJO2NBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQ3FDLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUk7Y0FDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQ2tFLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUk7Y0FDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztjQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNO2NBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQ25HLEdBQUcsQ0FBQyxTQUFTLENBQUM7Y0FDM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUNBLEdBQUcsQ0FBQyxlQUFlLENBQUM7ZUFDeEQsTUFBTTtnQkFDTGtDLE9BQU8sQ0FBQ2tFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQzs7Y0FHaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDcEcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUMvQztZQUVBK0IsSUFBSSxHQUFHLE9BQU9qQixJQUFJLEdBQUcsRUFBRSxLQUFrQjtjQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLElBQUk7Y0FDL0IsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDcEIsSUFBSSxFQUFFO2NBRWhDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQ3FDLElBQUksQ0FBQ2pCLElBQUksQ0FBQztZQUN0QyxDQUFDO1lBRURvRixPQUFPLEdBQUcsT0FBT3BGLElBQUksR0FBRyxFQUFFLEtBQWtCO2NBQzFDLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLENBQUNpQixJQUFJLENBQUNqQixJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUNkLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFFdEQsTUFBTXdDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUM2RCxRQUFRLENBQUN2RixJQUFJLENBQUM7Z0JBQ3BELElBQUksQ0FBQzBCLFFBQVEsQ0FBQ2YsTUFBTSxFQUFFLE1BQU1lLFFBQVEsQ0FBQ1osS0FBSztnQkFFMUMsT0FBTztrQkFBRUgsTUFBTSxFQUFFO2dCQUFJLENBQUU7ZUFDeEIsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7Z0JBQ2RNLE9BQU8sQ0FBQ04sS0FBSyxDQUFDQSxLQUFLLENBQUM7Z0JBQ3BCLE9BQU87a0JBQUVILE1BQU0sRUFBRSxLQUFLO2tCQUFFRztnQkFBSyxDQUFFOztZQUVuQyxDQUFDO1lBRUQ7WUFDQTBFLFNBQVMsR0FBRyxPQUFPQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxHQUFHLENBQUMsS0FBSTtjQUM5QyxJQUFJO2dCQUNGLE1BQU1qRSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDNkQsUUFBUSxDQUFDRSxLQUFLLENBQUM7Z0JBQ3JELElBQUkvRCxRQUFRLENBQUNmLE1BQU0sRUFBRTtrQkFDbkIsTUFBTVgsSUFBSSxHQUFHMEIsUUFBUSxDQUFDMUIsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDTSxHQUFHLENBQUNFLElBQUksS0FBSztvQkFBRSxHQUFHQSxJQUFJO29CQUFFNEMsT0FBTyxFQUFFLENBQUM7b0JBQUVHLFVBQVUsRUFBRTVCO2tCQUFTLENBQUUsQ0FBQyxDQUFDO2tCQUVoRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMrQixNQUFNLENBQUMxRSxJQUFJLEVBQUV5RixLQUFLLENBQUM7a0JBQzdDLE9BQU87b0JBQUVHLE9BQU8sRUFBRSxJQUFJO29CQUFFSCxLQUFLO29CQUFFL0Q7a0JBQVEsQ0FBRTs7Z0JBRTNDLElBQUlpRSxPQUFPLEdBQUcsSUFBSSxDQUFDVixXQUFXLEVBQUU7a0JBQzlCLE9BQU8sTUFBTSxJQUFJLENBQUNPLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFRSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztnQkFHakQsT0FBTztrQkFBRUMsT0FBTyxFQUFFLEtBQUs7a0JBQUVILEtBQUs7a0JBQUUvRDtnQkFBUSxDQUFFO2VBQzNDLENBQUMsT0FBT2tCLENBQUMsRUFBRTtnQkFDVnhCLE9BQU8sQ0FBQ04sS0FBSyxDQUFDOEIsQ0FBQyxDQUFDO2dCQUNoQixPQUFPO2tCQUFFZ0QsT0FBTyxFQUFFLEtBQUs7a0JBQUVILEtBQUs7a0JBQUUzRSxLQUFLLEVBQUU4QjtnQkFBQyxDQUFFOztZQUU5QyxDQUFDO1lBRUQ7WUFDQWlELG1CQUFtQixHQUFHN0YsSUFBSSxJQUFHO2NBQzNCLE1BQU04RixNQUFNLEdBQUcsRUFBRTtjQUNqQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRy9GLElBQUksQ0FBQ2dHLE1BQU0sRUFBRUQsQ0FBQyxJQUFJLElBQUksQ0FBQ2IsVUFBVSxFQUFFO2dCQUNyRFksTUFBTSxDQUFDRyxJQUFJLENBQUNqRyxJQUFJLENBQUNrRyxLQUFLLENBQUNILENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ2IsVUFBVSxDQUFDLENBQUM7O2NBRWpELE9BQU9ZLE1BQU07WUFDZixDQUFDO1lBRURYLElBQUksR0FBRyxNQUFNbkYsSUFBSSxJQUFHO2NBQ2xCLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDcEIsSUFBSSxFQUFFO2dCQUNoQyxJQUFJLENBQUNvQixJQUFJLEVBQUVBLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUNuQyxhQUFhLENBQUM0QixLQUFLLENBQUMwRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3JDLE9BQU8sRUFBRTtnQkFFN0YsTUFBTStCLE1BQU0sR0FBRyxJQUFJLENBQUNELG1CQUFtQixDQUFDN0YsSUFBSSxDQUFDO2dCQUM3QyxNQUFNcUcsWUFBWSxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU1DLGFBQWEsR0FBRyxFQUFFO2dCQUV4QixLQUFLLE1BQU0sQ0FBQ1osS0FBSyxFQUFFRCxLQUFLLENBQUMsSUFBSUssTUFBTSxDQUFDOUUsT0FBTyxFQUFFLEVBQUU7a0JBQzdDLE1BQU11RixNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUNmLFNBQVMsQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLENBQUM7a0JBQ2pELElBQUksQ0FBQ2EsTUFBTSxDQUFDWCxPQUFPLEVBQUU7b0JBQ25CUyxZQUFZLENBQUNKLElBQUksQ0FBQ00sTUFBTSxDQUFDO21CQUMxQixNQUFNRCxhQUFhLENBQUNMLElBQUksQ0FBQ00sTUFBTSxDQUFDOztnQkFFbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQ3BILEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2dCQUM3QixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUNVLElBQUksRUFBRTtnQkFDekIsSUFBSXdHLFlBQVksQ0FBQ0wsTUFBTSxFQUFFO2tCQUN2QixNQUFNM0UsT0FBTyxHQUFHZ0YsWUFBWSxDQUFDTCxNQUFNLEtBQUtGLE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLGFBQWEsR0FBRyxpQkFBaUI7a0JBQ3pGLE9BQU87b0JBQUVyRixNQUFNLEVBQUUsS0FBSztvQkFBRVUsT0FBTztvQkFBRXJCLElBQUksRUFBRTtzQkFBRXdHLE1BQU0sRUFBRUgsWUFBWTtzQkFBRVQsT0FBTyxFQUFFVTtvQkFBYTtrQkFBRSxDQUFFOztnQkFHM0YsT0FBTztrQkFBRTNGLE1BQU0sRUFBRSxJQUFJO2tCQUFFWCxJQUFJLEVBQUVzRztnQkFBYSxDQUFFO2VBQzdDLENBQUMsT0FBTzFELENBQUMsRUFBRTtnQkFDVnhCLE9BQU8sQ0FBQ04sS0FBSyxDQUFDOEIsQ0FBQyxDQUFDOztZQUVwQixDQUFDO1lBRUR5QyxNQUFNLEdBQUcsWUFBVztjQUNsQixJQUFJO2dCQUNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQ3pHLElBQUksRUFBRTtnQkFFaEMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDYSxLQUFLLENBQUMwRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3JDLE9BQU8sRUFBRTtlQUN0RSxDQUFDLE9BQU9uQixDQUFDLEVBQUU7Z0JBQ1Z4QixPQUFPLENBQUNOLEtBQUssQ0FBQzhCLENBQUMsQ0FBQzs7WUFFcEIsQ0FBQzs7VUFDRmxEOzs7Ozs7Ozs7OztVQzFIRDs7VUFFQXNEO1lBQ0FsRjtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFhTztVQUFVLE1BQWdCMkksSUFBUSxTQUFRaEosb0JBQW9CO1lBQ3BFLEtBQUssR0FBRyxJQUFJcUgsR0FBRyxFQUFFO1lBQ2pCOzs7WUFHQSxVQUFVLEdBQUcsSUFBSUEsR0FBRyxFQUFFO1lBQ1pwSCxPQUFPLEdBQUcsSUFBSTtZQUNkVSxRQUFRO1lBQ1I2RCxTQUFTO1lBQ1RELEVBQUU7WUFDWixjQUFjLEdBQWtCLEVBQUU7WUFDbEMsU0FBUyxHQUFrQixFQUFFO1lBQ25CbkUsYUFBYTtZQUViNkksTUFBTSxHQUFrQixFQUFFO1lBRXBDLElBQUlDLGFBQWE7Y0FDaEIsT0FBTyxJQUFJLENBQUM5SSxhQUFhLENBQUM4SSxhQUFhLENBQUMsSUFBSSxDQUFDdEMsYUFBYSxFQUFFLENBQUM7WUFDOUQ7WUFDQSxZQUFZO1lBRVosSUFBSXVDLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBRVFDLEtBQUssQ0FBQzlILFFBQVE7Y0FDckIsT0FBTyxJQUFJLENBQUNBLFFBQVEsQ0FBQztZQUN0QjtZQUVBLElBQUlVLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQzVCLGFBQWEsQ0FBQzRCLEtBQUs7WUFDaEM7WUFFQSxJQUFJN0IsUUFBUTtjQUNYLE9BQU8sSUFBSSxDQUFDQyxhQUFhLENBQUNELFFBQVEsSUFBSSxDQUFDa0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDaEY7WUFFQSxNQUFNO1lBQ04sSUFBSStFLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBQ0EsSUFBSUEsS0FBSyxDQUFDQyxDQUFVO2NBQ25CLElBQUlBLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2NBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUdBLENBQUM7Y0FDZixJQUFJLENBQUM5SSxZQUFZLEVBQUU7WUFDcEI7WUFFQSxJQUFJK0ksTUFBTTtjQUNULE9BQU8sSUFBSSxDQUFDbkosYUFBYSxFQUFFbUosTUFBTTtZQUNsQztZQUVBLFlBQVk7WUFDWixZQUFZLEdBQUcsS0FBSztZQUNwQixNQUFNLEdBQUcsS0FBSztZQUNkLGFBQWE7WUFFYnhJO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDYSxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQzRILFVBQVUsQ0FBQztZQUMxQztZQUVVLE1BQU1ySSxJQUFJLENBQUNzSSxTQUFtQyxFQUFFO2NBQ3pELElBQUk7Z0JBQ0gsSUFBSW5DLEVBQUU7Z0JBQ04sSUFBSW1DLE1BQU0sQ0FBQ25DLEVBQUUsRUFBRUEsRUFBRSxHQUFHbUMsTUFBTSxDQUFDbkMsRUFBRTtnQkFFN0IsTUFBTWpHLFdBQVcsR0FBR0MsUUFBUSxJQUFJLElBQUksQ0FBQzhILEtBQUssQ0FBQzlILFFBQVEsQ0FBQztnQkFFcEQsSUFBSSxDQUFDbEIsYUFBYSxHQUFHLElBQUlzSiw0QkFBYSxDQUFDLElBQUksRUFBRXJJLFdBQVcsQ0FBQztnQkFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJc0kscUJBQWUsQ0FBQyxJQUFJLEVBQUV0SSxXQUFXLENBQUM7Z0JBQzFELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSXVJLHFCQUFlLENBQUMsSUFBSSxFQUFFdkksV0FBVyxDQUFDO2dCQUUxRCxJQUFJLENBQUNpRyxFQUFFLEVBQUU7a0JBQ1IsSUFBSSxDQUFDZCxPQUFPLENBQUMsZUFBZSxDQUFDOztnQkFHOUIsTUFBTSxJQUFJLENBQUNwRyxhQUFhLENBQUNlLElBQUksQ0FBQ21HLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUNpQixNQUFNLEdBQUcsQ0FBQyxFQUFFO2tCQUNoRCxJQUFJLENBQUMzRixVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVM7O2dCQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUk7Z0JBRWxCLElBQUksQ0FBQzRELE9BQU8sQ0FBQyxlQUFlLENBQUM7ZUFDN0IsQ0FBQyxPQUFPckIsQ0FBQyxFQUFFO2dCQUNYeEIsT0FBTyxDQUFDTixLQUFLLENBQUMsb0JBQW9CLEVBQUU4QixDQUFDLENBQUM7O1lBRXhDO1lBRVVxRSxVQUFVLEdBQUcsTUFBSztjQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU07O2NBRW5CLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLElBQUksQ0FBQyxhQUFhO2NBRWpELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSTNFLG9CQUFjLEVBQUU7Y0FDekMsSUFBSSxJQUFJLENBQUNnRixXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQzVFLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2NBQ25FLE1BQU02RSxPQUFPLEdBQUcsTUFBSztnQkFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDN0UsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUdDLFNBQVM7Y0FDL0IsQ0FBQztjQUNELElBQUksQ0FBQ3RELEVBQUUsQ0FBQyxlQUFlLEVBQUVrSSxPQUFPLENBQUM7Y0FDakMsT0FBTyxJQUFJLENBQUMsYUFBYTtZQUMxQixDQUFDO1lBRUQvSCxVQUFVLEdBQUcxQixLQUFLLElBQUksSUFBSSxDQUFDRCxhQUFhLENBQUMyQixVQUFVLENBQUMxQixLQUFLLENBQUM7WUFFMUQwSixnQkFBZ0IsQ0FBQ3hGLEVBQVUsRUFBRXlGLEtBQWE7Y0FDekMsSUFBSSxJQUFJLENBQUM1SixhQUFhLEVBQUU7WUFDekI7WUFFQXNCLEdBQUcsQ0FBQ2EsSUFBSSxFQUFFcEIsSUFBSSxHQUFHLEtBQUs7Y0FDckI7Y0FDQSxJQUFJQSxJQUFJLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJa0csR0FBRyxDQUFDOUIsTUFBTSxDQUFDaEMsT0FBTyxDQUFDaEIsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQ25DLGFBQWEsQ0FBQ29ELElBQUksQ0FBQ2pCLElBQUksRUFBRSxJQUFJLENBQUM7O2NBR3BDO2NBQ0EsSUFBSSxDQUFDSyxVQUFVLENBQUM4QyxPQUFPLENBQUNwRSxRQUFRLElBQUc7Z0JBQ2xDLElBQUlpQixJQUFJLENBQUMwSCxjQUFjLENBQUMzSSxRQUFRLENBQUMsRUFBRTtrQkFDbEMsSUFBSSxDQUFDQSxRQUFRLENBQUMsR0FBR2lCLElBQUksQ0FBQ2pCLFFBQVEsQ0FBQzs7Y0FFakMsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDZCxZQUFZLEVBQUU7WUFDcEI7WUFFQTs7OztZQUlBMEosU0FBUztjQUNSLE1BQU1oSixNQUFNLEdBQUcsRUFBRTtjQUNqQixNQUFNaUosU0FBUyxHQUFHLElBQUksQ0FBQ2hCLFFBQVEsQ0FBQ1osTUFBTSxHQUFHLElBQUksQ0FBQ1ksUUFBUSxHQUFHLElBQUksQ0FBQ3ZHLFVBQVU7Y0FFeEV1SCxTQUFTLENBQUN6RSxPQUFPLENBQUMwRSxLQUFLLElBQUc7Z0JBQ3pCLElBQUksSUFBSSxDQUFDSCxjQUFjLENBQUNHLEtBQUssQ0FBQyxFQUFFbEosTUFBTSxDQUFDa0osS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUM7Y0FDNUQsQ0FBQyxDQUFDO2NBQ0YsT0FBT2xKLE1BQU07WUFDZDtZQUVBbUosZ0JBQWdCO2NBQ2YsT0FBTyxJQUFJLENBQUN6SCxVQUFVO1lBQ3ZCOztVQUNBWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsS0ssTUFBTzJILGVBQWU7WUFDM0IsT0FBTztZQUVQLGNBQWM7WUFDZCxTQUFTO1lBQ1QsWUFBWTtZQUNaN0ksWUFBWW1CLE1BQU0sRUFBRWIsV0FBVztjQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHYSxNQUFNO2NBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUdiLFdBQVc7Y0FFL0IsSUFBSSxDQUFDRixJQUFJLEVBQUU7WUFDWjtZQUVBQSxJQUFJLEdBQUcsWUFBVztjQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDO2NBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7Y0FFOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQ2lCLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUk7WUFDOUIsQ0FBQztZQUVEOzs7OztZQUtBQSxJQUFJLEdBQUcsTUFBT0MsTUFBVyxJQUFJO2NBQzVCLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN2QyxNQUFNcEMsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7Z0JBQ2xELElBQUlBLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2tCQUNuQyxNQUFNcUMsU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDQyxNQUFNLENBQUM7a0JBRXhELElBQUlDLFNBQVMsRUFBRVksTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUN4QixHQUFHLENBQUNZLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQzs7Z0JBRzlEO2dCQUVBLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUVyQixNQUFNWSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUNhLFVBQVUsQ0FBQzNCLE1BQU0sQ0FBQztnQkFDaEQsSUFBSSxDQUFDYyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQ2tHLEtBQUssR0FBRyxLQUFLO2dCQUUzQyxJQUFJbEcsVUFBVSxFQUFFO2tCQUNmLElBQUltSCxJQUFJLEdBQUcsSUFBSTtrQkFDZi9FLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDckMsVUFBVSxDQUFDLENBQUN1QyxPQUFPLENBQUM2RSxHQUFHLElBQUc7b0JBQ3JDLElBQUlDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDQyxRQUFRLENBQUN2SixNQUFNO29CQUNsRCxJQUFJc0osUUFBUSxDQUFDRCxHQUFHLENBQUMsS0FBS3BILFVBQVUsQ0FBQ29ILEdBQUcsQ0FBQyxFQUFFRCxJQUFJLEdBQUcsS0FBSztrQkFDcEQsQ0FBQyxDQUFDO2tCQUNGLElBQUksQ0FBQ0EsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQzlHLElBQUksQ0FBQ0wsVUFBVSxDQUFDOztnQkFHdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQ2tHLEtBQUssR0FBRyxJQUFJO2dCQUN6QixPQUFPO2tCQUFFbkcsTUFBTSxFQUFFO2dCQUFJLENBQUU7ZUFDdkIsQ0FBQyxPQUFPUSxHQUFHLEVBQUU7Z0JBQ2JDLE9BQU8sQ0FBQ04sS0FBSyxDQUFDLFlBQVksRUFBRUssR0FBRyxDQUFDRSxPQUFPLENBQUM7Z0JBQ3hDLE9BQU87a0JBQUVWLE1BQU0sRUFBRSxLQUFLO2tCQUFFRyxLQUFLLEVBQUVLO2dCQUFHLENBQUU7ZUFDcEMsU0FBUztnQkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDWixRQUFRLEdBQUcsS0FBSzs7WUFFL0IsQ0FBQztZQUVEa0IsVUFBVSxHQUFHLE1BQU0zQixNQUFNLElBQUc7Y0FDM0I7Y0FDQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQ2xDLFFBQVEsRUFBRTtjQUM1QixNQUFNOEQsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQzFCLElBQUksQ0FBQ0YsTUFBTSxDQUFDO2NBQ2xELElBQUksQ0FBQzRCLFFBQVEsQ0FBQ2YsTUFBTSxFQUFFLE1BQU0sa0JBQWtCO2NBQzlDLE9BQU9lLFFBQVEsQ0FBQzFCLElBQUk7WUFDckIsQ0FBQzs7VUFDRE47Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVEO1VBR0E7VUFFQTtVQUVPO1VBQVUsTUFDWHlILGFBQWMsU0FBUTFKLG9CQUFrQjtZQUM1QyxTQUFTLEdBQUdrRSxVQUFVLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTTtZQUN2QyxNQUFNO1lBQ04sSUFBSXBDLEtBQUs7Y0FDUCxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ3BCO1lBRUEsUUFBUTtZQUNSLFNBQVM7WUFDVCxVQUFVO1lBQ1YsYUFBYTtZQUNiLGFBQWE7WUFDYixPQUFPLEdBQUcsS0FBSztZQUVmLElBQUl1SCxNQUFNO2NBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFQSxNQUFNO1lBQy9CO1lBRUEsSUFBSXJDLFlBQVk7Y0FDZCxPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzNCO1lBRUEsR0FBRztZQUVILElBQUkvRyxRQUFRO2NBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDa0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDdEY7WUFFQSxPQUFPO1lBQ1AsWUFBWTtZQUNaOzs7WUFHQSxRQUFRO1lBQ1I7Ozs7WUFJQSxTQUFTO1lBRVQsSUFBSW1HLFFBQVE7Y0FDVixPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3ZCO1lBQ0ExSixZQUFZbUIsTUFBTSxFQUFFYixXQUFXO2NBQzdCLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxZQUFZLEdBQUdBLFdBQVc7Y0FDL0IsTUFBTTtnQkFBRWtELEVBQUU7Z0JBQUVDO2NBQVMsQ0FBRSxHQUFHdEMsTUFBTTtjQUNoQyxJQUFJLENBQUN3SSxJQUFJLEdBQUczRSxJQUFJLENBQUM0RSxLQUFLLENBQUM1RSxJQUFJLENBQUM2RSxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtjQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFHMUksTUFBTTtjQUVyQixJQUFJLENBQUNxQyxFQUFFLElBQUksQ0FBQ0MsU0FBUyxFQUFFLE1BQU0sSUFBSUUsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO2NBQ3pFLElBQUksQ0FBQyxhQUFhLEdBQUdILEVBQUU7Y0FDdkIsSUFBSSxDQUFDLFVBQVUsR0FBR0MsU0FBUztjQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHQyx1QkFBYyxDQUFDaEQsR0FBRyxDQUFDOEMsRUFBRSxDQUFDO2NBQ3RDTCxVQUFVLENBQUNTLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO2NBQzVEVixVQUFVLENBQUNTLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQy9EO1lBRUE3QyxVQUFVLENBQUMxQixLQUFLO2NBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBR0EsS0FBSztjQUNyQixJQUFJLENBQUNHLFlBQVksRUFBRTtZQUNyQjtZQUVBVyxJQUFJLEdBQUcsT0FBT21HLEtBQWtDcEMsU0FBUyxLQUFJO2NBQzNELElBQUk7Z0JBQ0YsTUFBTUosUUFBUSxHQUFvQixNQUFNQyxtQkFBUyxDQUFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxTQUFTLEdBQUdxRCxRQUFRO2dCQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHQSxRQUFRLENBQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUUxQyxJQUFJK0MsRUFBRSxFQUFFO2tCQUNOLE1BQU0sSUFBSSxDQUFDbEYsSUFBSSxDQUFDO29CQUFFa0Y7a0JBQUUsQ0FBRSxDQUFDO2lCQUN4QixNQUFNO2tCQUNMLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQ0EsRUFBRSxDQUFDOztnQkFFN0I7ZUFDRCxDQUFDLE9BQU9uQyxDQUFDLEVBQUU7Z0JBQ1Z4QixPQUFPLENBQUNOLEtBQUssQ0FBQzhCLENBQUMsQ0FBQzs7WUFFcEIsQ0FBQztZQUVPUCxnQkFBZ0IsR0FBRyxNQUFLO2NBQzlCLElBQUksQ0FBQ3BFLFlBQVksRUFBRTtZQUNyQixDQUFDO1lBRUQwSSxhQUFhLENBQUMzRyxJQUFJO2NBQ2hCLE1BQU1LLFVBQVUsR0FBRzJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDakQsSUFBSSxDQUFDO2NBQ3BDLE1BQU1zSSxTQUFTLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDM0o7Y0FBTSxDQUFFO2NBRTlDLE9BQU8wQixVQUFVLENBQUNrSSxJQUFJLENBQUNDLElBQUksSUFBRztnQkFDNUIsSUFBSUEsSUFBSSxLQUFLLElBQUksRUFBRSxPQUFPLEtBQUs7Z0JBQy9CLE9BQU9GLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLEtBQUt4SSxJQUFJLENBQUN3SSxJQUFJLENBQUM7Y0FDdkMsQ0FBQyxDQUFDO1lBQ0o7WUFFQSxNQUFNM0ksSUFBSSxDQUFDQyxTQUFjLEVBQUU7Y0FDekIsSUFBSWlGLEVBQUUsR0FBR2pGLE1BQU0sQ0FBQ2lGLEVBQUU7Y0FDbEJBLEVBQUUsR0FBR0EsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUNBLEVBQUU7Y0FFMUIsSUFBSTtnQkFDRixJQUFJLENBQUNBLEVBQUUsRUFBRSxNQUFNLGdCQUFnQjtnQkFFL0IsTUFBTXBHLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUNvRyxFQUFFLENBQUM7Z0JBRTFDLElBQUksQ0FBQyxPQUFPLENBQUM3RCxNQUFNLEdBQUcsSUFBSTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDUixNQUFNLENBQUM7Z0JBQ3ZDLE9BQU87a0JBQUVnQyxNQUFNLEVBQUUsSUFBSTtrQkFBRVgsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUNyQjtnQkFBTSxDQUFFO2VBQ3JELENBQUMsT0FBT2lFLENBQUMsRUFBRTtnQkFDVnhCLE9BQU8sQ0FBQ04sS0FBSyxDQUFDOEIsQ0FBQyxDQUFDO2dCQUNoQixPQUFPQSxDQUFDOztZQUVaO1lBRUE7Ozs7Ozs7WUFPQSxZQUFZLEdBQUcsTUFBTW1DLEVBQUUsSUFBRztjQUN4QixNQUFNbUQsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQ3JJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFa0YsRUFBRSxDQUFDO2NBQzlELElBQUksQ0FBQ21ELFFBQVEsRUFBRSxPQUFPOUcsT0FBTyxDQUFDa0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2NBRXJELElBQUksQ0FBQyxPQUFPLENBQUNuRyxHQUFHLENBQUMrSSxRQUFRLENBQUN2SixNQUFNLENBQUM7Y0FDakMsSUFBSSxDQUFDLFNBQVMsR0FBR3VKLFFBQVE7Y0FFekJBLFFBQVEsQ0FBQzdJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztjQUMzQyxPQUFPNkksUUFBUTtZQUNqQixDQUFDO1lBRUQ7OztZQUdBLGVBQWUsR0FBRyxZQUFXO2NBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2NBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMvSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQ1IsTUFBTSxDQUFDO2NBQ3ZDLElBQUksQ0FBQ3NGLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDeEIsQ0FBQztZQUVELE1BQU1oRCxJQUFJLENBQUNqQixJQUFJLEVBQUV5SSxPQUFPLEdBQUcsS0FBSztjQUM5QixJQUFJO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUM5QixhQUFhLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMvSSxRQUFRLEVBQUVvQyxJQUFJLENBQUNvRSxPQUFPLEdBQUcsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFFbkQ7Z0JBQ0EsTUFBTXNFLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQ0Msb0JBQW9CLENBQUMzSSxJQUFJLENBQUM7Z0JBQ3hELElBQUkwSSxVQUFVLENBQUMxQyxNQUFNLEVBQUUsT0FBTztrQkFBRWxGLEtBQUssRUFBRSxZQUFZO2tCQUFFOEgsTUFBTSxFQUFFRjtnQkFBVSxDQUFFO2dCQUV6RSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUN2SSxNQUFNLENBQUNILElBQUksRUFBRXlJLE9BQU8sQ0FBQztnQkFFMUMsT0FBTyxJQUFJO2VBQ1osQ0FBQyxPQUFPN0YsQ0FBQyxFQUFFO2dCQUNWeEIsT0FBTyxDQUFDTixLQUFLLENBQUMsY0FBYyxFQUFFOEIsQ0FBQyxDQUFDdkIsT0FBTyxDQUFDOztZQUU1QztZQUVBLE1BQU0sT0FBTyxDQUFDckIsSUFBSTtjQUNoQixJQUFJO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMyRyxhQUFhLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQ3hHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDK0UsRUFBRSxFQUFFL0UsSUFBSSxDQUFDO2dCQUN2QztlQUNELENBQUMsT0FBTzRDLENBQUMsRUFBRTtZQUNkO1lBRUEsTUFBTStGLG9CQUFvQixDQUFDM0ksSUFBSTtjQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQ2dHLE1BQU0sRUFBRSxPQUFPLEVBQUU7Y0FFbEQsTUFBTTZDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDdkgsR0FBRyxDQUFDdUcsS0FBSyxJQUN6RCxJQUFJLENBQUMsTUFBTSxDQUNSMUIsS0FBSyxDQUFDMEIsS0FBSyxDQUFDLENBQ1p6QixNQUFNLENBQUNwRyxJQUFJLENBQUM2SCxLQUFLLENBQUMsQ0FBQyxDQUNuQnZFLEtBQUssRUFBRSxDQUNQd0YsSUFBSSxDQUFDeEYsS0FBSyxJQUFHO2dCQUNaLElBQUlBLEtBQUssRUFBRTtrQkFDVCxPQUFPdUUsS0FBSzs7Z0JBRWQsT0FBTyxJQUFJO2NBQ2IsQ0FBQyxDQUFDLENBQ0w7Y0FFRCxNQUFNa0IsZUFBZSxHQUFHLENBQUMsTUFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLGFBQWEsQ0FBQyxFQUFFSyxNQUFNLENBQUNyQixLQUFLLElBQUlBLEtBQUssS0FBSyxJQUFJLENBQUM7Y0FDMUYsT0FBT2tCLGVBQWU7WUFDeEI7O1VBQ0RySjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqTUssTUFBTzBILGVBQWU7WUFDM0IsT0FBTztZQUNQLFlBQVk7WUFDWjVJLFlBQVltQixNQUFNLEVBQUViLFdBQVc7Y0FDOUIsSUFBSSxDQUFDLE9BQU8sR0FBR2EsTUFBTTtjQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHYixXQUFXO2NBQy9CLElBQUksQ0FBQ0YsSUFBSSxFQUFFO1lBQ1o7WUFFQUEsSUFBSTtjQUNILElBQUksQ0FBQyxPQUFPLENBQUNxQyxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJO2NBQzdCLElBQUksQ0FBQyxPQUFPLENBQUNtRSxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO2NBQ25DLElBQUksQ0FBQyxPQUFPLENBQUNELElBQUksR0FBRyxJQUFJLENBQUNBLElBQUk7WUFDOUI7WUFFQWxFLElBQUksR0FBRyxPQUFPakIsSUFBSSxHQUFHMkMsU0FBUyxLQUFJO2NBQ2pDLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN2QyxJQUFJM0MsSUFBSSxFQUFFO2tCQUNULElBQUksQ0FBQyxPQUFPLENBQUNiLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDOztnQkFHdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMyRyxhQUFhLEVBQUU7a0JBQ2hDOztnQkFHRCxNQUFNdEcsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUNnRSxhQUFhLEVBQUU7Z0JBRS9DLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQ3hHLGFBQWEsRUFBRTtrQkFDL0IsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDQSxhQUFhLENBQUNvRCxJQUFJLENBQUNaLFVBQVUsQ0FBQzs7Z0JBR2xELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQ0EsVUFBVSxDQUFDO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDcEMsWUFBWSxFQUFFO2dCQUUzQixPQUFPO2tCQUFFMEMsTUFBTSxFQUFFO2dCQUFJLENBQUU7ZUFDdkIsQ0FBQyxPQUFPaUMsQ0FBQyxFQUFFO2dCQUNYeEIsT0FBTyxDQUFDTixLQUFLLENBQUMsY0FBYyxFQUFFOEIsQ0FBQyxDQUFDOztZQUVsQyxDQUFDO1lBRUQsUUFBUSxHQUFHLE1BQU12QyxVQUFVLElBQUc7Y0FDN0IsSUFBSTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQ2pDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUNSLFFBQVEsRUFBRTtnQkFDdEQsTUFBTThELFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUN0RCxRQUFRLENBQUNnSCxPQUFPLENBQUMvRSxVQUFVLENBQUM7Z0JBQ2hFLElBQUksQ0FBQ3FCLFFBQVEsRUFBRWYsTUFBTSxFQUFFLE1BQU1lLFFBQVEsQ0FBQ1osS0FBSztnQkFFM0MsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDakQsYUFBYSxFQUFFO2tCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDQSxhQUFhLENBQUNvRCxJQUFJLENBQUNTLFFBQVEsQ0FBQzFCLElBQUksRUFBRSxJQUFJLENBQUM7a0JBQ3BELElBQUksQ0FBQyxPQUFPLENBQUNuQyxhQUFhLENBQUNJLFlBQVksRUFBRTs7Z0JBRTFDLE9BQU87a0JBQUUwQyxNQUFNLEVBQUUsSUFBSTtrQkFBRVgsSUFBSSxFQUFFMEI7Z0JBQVEsQ0FBRTtlQUN2QyxDQUFDLE9BQU9aLEtBQUssRUFBRTtnQkFDZk0sT0FBTyxDQUFDTixLQUFLLENBQUMsa0JBQWtCLEVBQUVBLEtBQUssQ0FBQztnQkFDeEMsT0FBTztrQkFBRUgsTUFBTSxFQUFFLEtBQUs7a0JBQUVHO2dCQUFLLENBQUU7O1lBRWpDLENBQUM7WUFFRHNFLE9BQU8sR0FBRyxJQUFJLENBQUNuRSxJQUFJO1lBRW5Ca0UsSUFBSSxHQUFHLE1BQUs7Y0FDWCxNQUFNL0csUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDO2NBRW5ELElBQUksQ0FBQ0EsUUFBUSxDQUFDOEosUUFBUSxDQUFDdkosTUFBTSxDQUFDeUYsT0FBTyxFQUFFO2dCQUN0Q2hELE9BQU8sQ0FBQ2tFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdkM7O2NBR0QsSUFBSSxDQUFDLFFBQVEsQ0FBQ2xILFFBQVEsQ0FBQzhKLFFBQVEsQ0FBQ3ZKLE1BQU0sQ0FBQztjQUV2QztZQUNELENBQUM7OztVQUNEZTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RUQ7VUFDQTtVQUNBO1VBQ0E7VUFLTSxNQUFrQndDLGNBQWUsU0FBUXpFLG9CQUF1QjtZQUNyRSxPQUFPLEdBQUcsSUFBSXFILEdBQUcsRUFBRTtZQUNuQixTQUFTO1lBQ1QsUUFBUSxHQUFHLEdBQUc7WUFDZCxPQUFPO1lBQ1B0RyxZQUFZMkssTUFBTTtjQUNqQixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsT0FBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQ3ZLLElBQUksRUFBRTtZQUNaO1lBRUEsYUFBYTtZQUNiLE1BQU1BLElBQUk7Y0FDVCxJQUFJLElBQUksQ0FBQzZELEtBQUssRUFBRSxPQUFPLElBQUk7Y0FDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sSUFBSSxDQUFDLGFBQWE7Y0FDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJSCxvQkFBYyxFQUFFO2NBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTUUsbUJBQVMsQ0FBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2NBRWxELElBQUksQ0FBQyxhQUFhLENBQUN3RCxPQUFPLEVBQUU7Y0FDNUIsSUFBSSxDQUFDLGFBQWEsR0FBR0MsU0FBUztjQUM5QixJQUFJLENBQUNGLEtBQUssR0FBRyxJQUFJO1lBQ2xCO1lBRUEsTUFBTTVDLElBQUksQ0FBQ29DLFNBQWlCLEVBQUU4QyxFQUFFLEdBQUcsS0FBSztjQUN2QyxNQUFNdEYsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUN1QyxFQUFFLENBQUNDLFNBQVMsQ0FBQztjQUMxQyxJQUFJLENBQUN4QyxLQUFLLEVBQUUsTUFBTSxJQUFJMEMsS0FBSyxDQUFDLFNBQVNGLFNBQVMsa0JBQWtCLENBQUM7Y0FDakU7Y0FDQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQ21ILEdBQUcsQ0FBQ25ILFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM5QyxHQUFHLENBQUM4QyxTQUFTLEVBQUUsSUFBSTZDLEdBQUcsRUFBRSxDQUFDO2NBQ3hFO2NBQ0EsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDc0UsR0FBRyxDQUFDbkgsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQy9DLEdBQUcsQ0FBQytDLFNBQVMsQ0FBQyxDQUFDbUgsR0FBRyxDQUFDckUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZFLE1BQU1tRCxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQ2hKLEdBQUcsQ0FBQytDLFNBQVMsQ0FBQyxDQUFDL0MsR0FBRyxDQUFDNkYsRUFBRSxDQUFDO2dCQUNwRCxPQUFPbUQsUUFBUSxDQUFDaEosR0FBRyxFQUFFOztjQUd0Qjs7O2NBSUEsTUFBTWdKLFFBQVEsR0FBRyxJQUFJbUIsZUFBUSxDQUFDNUosS0FBSyxFQUFFO2dCQUFFc0Y7Y0FBRSxDQUFFLENBQUM7Y0FDNUMsTUFBTW1ELFFBQVEsQ0FBQ2hKLEdBQUcsRUFBRTtjQUVwQixJQUFJLENBQUMsT0FBTyxDQUFDQSxHQUFHLENBQUMrQyxTQUFTLENBQUMsQ0FBQzlDLEdBQUcsQ0FBQytJLFFBQVEsQ0FBQzNELFVBQVUsRUFBRTJELFFBQVEsQ0FBQztjQUU5RCxPQUFPQSxRQUFRO1lBQ2hCO1lBRUE7Ozs7Ozs7Ozs7WUFXQSxNQUFNMUQsT0FBTyxDQUFDN0csS0FBSyxFQUFFc0UsU0FBUztjQUM3QixNQUFNcUgsUUFBUSxHQUFHM0wsS0FBSyxDQUFDMkQsR0FBRyxDQUFFRSxJQUFJLElBQUk7Z0JBQ25DLE1BQU0wRyxRQUFRLEdBQUcsSUFBSW1CLGVBQVEsQ0FBQ3BILFNBQVMsQ0FBQztnQkFDeENpRyxRQUFRLENBQUNxQixTQUFTLENBQUMvSCxJQUFJLENBQUM7Z0JBQ3hCLE9BQU8wRyxRQUFRO2NBQ2hCLENBQUMsQ0FBQztjQUVGLE1BQU16SSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQ3VDLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDO2NBQzFDLE1BQU11SCxRQUFRLEdBQUcsRUFBRTtjQUNuQixNQUFNMUQsTUFBTSxHQUFHLEVBQUU7Y0FDakIsT0FBT3dELFFBQVEsQ0FBQ3RELE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLE1BQU15RCxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMvQyxNQUFNMUosSUFBSSxHQUFHeUosS0FBSyxDQUFDbkksR0FBRyxDQUFFRSxJQUFJLElBQUtBLElBQUksQ0FBQ21HLFNBQVMsRUFBRSxDQUFDO2dCQUNsRDdCLE1BQU0sQ0FBQ0csSUFBSSxDQUFDakcsSUFBSSxDQUFDO2dCQUNqQndKLFFBQVEsQ0FBQ3ZELElBQUksQ0FBQ3hHLEtBQUssQ0FBQ3VGLE9BQU8sQ0FBQ2hGLElBQUksQ0FBQyxDQUFDOztjQUVuQyxJQUFJO2dCQUNILE1BQU0ySixPQUFPLEdBQUcsTUFBTVgsT0FBTyxDQUFDWSxVQUFVLENBQUNKLFFBQVEsQ0FBQztnQkFDbEQsTUFBTUssUUFBUSxHQUFHLENBQUN0RCxNQUFNLEVBQUViLEtBQUssTUFBTTtrQkFBRSxHQUFHYSxNQUFNO2tCQUFFYixLQUFLO2tCQUFFMUYsSUFBSSxFQUFFOEYsTUFBTSxDQUFDSixLQUFLO2dCQUFDLENBQUUsQ0FBQztnQkFDL0UsTUFBTWMsTUFBTSxHQUFHbUQsT0FBTyxDQUFDckksR0FBRyxDQUFDdUksUUFBUSxDQUFDLENBQUNYLE1BQU0sQ0FBRTNDLE1BQU0sSUFBS0EsTUFBTSxDQUFDNUYsTUFBTSxLQUFLLFVBQVUsQ0FBQztnQkFDckYsSUFBSSxDQUFDNkYsTUFBTSxDQUFDUixNQUFNLEVBQUUsT0FBTztrQkFBRXJGLE1BQU0sRUFBRTtnQkFBSSxDQUFFLENBQUMsS0FDdkM7a0JBQ0osT0FBTztvQkFBRUEsTUFBTSxFQUFFLEtBQUs7b0JBQUU2RjtrQkFBTSxDQUFFOztlQUVqQyxDQUFDLE9BQU81RCxDQUFDLEVBQUU7Z0JBQ1gsT0FBTztrQkFBRWpDLE1BQU0sRUFBRSxLQUFLO2tCQUFFNkYsTUFBTSxFQUFFNUQ7Z0JBQUMsQ0FBRTs7WUFFckM7WUFFQSxPQUFPLElBQUksR0FBRyxJQUFJa0MsR0FBRyxFQUFFO1lBRXZCLE9BQU81RixHQUFHLENBQUNpSyxNQUFNO2NBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDRCxNQUFNLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUNqSyxHQUFHLENBQUNpSyxNQUFNLENBQUM7Y0FDdkQsTUFBTW5ILEVBQUUsR0FBRyxJQUFJRSxjQUFjLENBQUNpSCxNQUFNLENBQUM7Y0FDckMsSUFBSSxDQUFDLElBQUksQ0FBQ2hLLEdBQUcsQ0FBQ2dLLE1BQU0sRUFBRW5ILEVBQUUsQ0FBQztjQUN6QixPQUFPQSxFQUFFO1lBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyR0Q7VUFDQTtVQU9NLE1BQU9xSCxRQUFTLFNBQVE1TCxvQkFBd0I7WUFDckQsT0FBTyxHQUFRLEVBQUU7WUFDakIsSUFBSWtCLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBQ0EsR0FBRztZQUNIbUwsS0FBSyxHQUFHLEtBQUs7WUFDYixNQUFNO1lBQ04sTUFBTTtZQUNOLFdBQVc7WUFDWCxNQUFNO1lBRU4sT0FBTztZQUNQLElBQUk5QyxNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNwQjtZQUVBLElBQUl6QyxVQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVztZQUN4QjtZQUNBL0YsWUFBWWlCLEtBQUssRUFBRU8sT0FBa0I7Y0FBRStFLEVBQUUsRUFBRTtZQUFLLENBQUU7Y0FDakQsS0FBSyxFQUFFO2NBRVAsTUFBTTtnQkFBRUE7Y0FBRSxDQUFFLEdBQUcvRSxJQUFJO2NBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUdQLEtBQUs7Y0FDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRzRKLFFBQVEsQ0FBQ1UsWUFBWSxFQUFFO2NBQzFDLElBQUksQ0FBQ2hGLEVBQUUsRUFBRTNELE9BQU8sQ0FBQzRJLEtBQUssQ0FBQyxJQUFJLEVBQUVqRixFQUFFLEVBQUUvRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztjQUN4RCxJQUFJLENBQUMsR0FBRyxHQUFHK0UsRUFBRSxLQUFLLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHQSxFQUFFO2NBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUdBLEVBQUUsS0FBSyxLQUFLO2NBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDa0YsS0FBSyxHQUFHLGFBQWEsR0FBRyxLQUFLO2NBRWhELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDbEYsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHO1lBQ3pDO1lBRUEsUUFBUTtZQUNSLE1BQU03RixHQUFHO2NBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQyxRQUFROztjQUdyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUlvRCxvQkFBYyxFQUFFO2NBRXBDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBR0MsU0FBUztlQUN6QixNQUFNO2dCQUNOLElBQUksQ0FBQyxNQUFNLENBQUN6RCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDNEosSUFBSSxDQUFFdEgsSUFBSSxJQUFJO2tCQUN2QyxJQUFJLENBQUNBLElBQUksRUFBRTtvQkFDVixJQUFJLENBQUMsUUFBUSxDQUFDa0IsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLO29CQUVwQixJQUFJLENBQUM2RyxTQUFTLENBQUM7c0JBQUV4RSxFQUFFLEVBQUUsSUFBSSxDQUFDO29CQUFHLENBQUUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBR3BDLFNBQVM7b0JBQ3pCOztrQkFHRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7a0JBQ25CLElBQUksQ0FBQzRHLFNBQVMsQ0FBQy9ILElBQUksQ0FBQztrQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQ2tCLE9BQU8sQ0FBQyxJQUFJLENBQUM7a0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUdDLFNBQVM7Z0JBQzFCLENBQUMsQ0FBQzs7Y0FHSCxPQUFPLElBQUksQ0FBQyxRQUFRO1lBQ3JCO1lBRUE0RyxTQUFTLEdBQUcsQ0FBQ3ZKLElBQUksRUFBRXlJLE9BQU8sR0FBRyxLQUFLLEtBQUk7Y0FDckMsTUFBTXlCLEtBQUssR0FBR2xILE1BQU0sQ0FBQ0MsSUFBSSxDQUFDakQsSUFBSSxDQUFDO2NBRS9CLElBQUltSyxPQUFPLEdBQUcsS0FBSztjQUNuQjtjQUNBLElBQUkxQixPQUFPLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLO2dCQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHOUYsU0FBUztnQkFDNUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDNEIsVUFBVTs7Y0FFL0IsSUFBSSxDQUFDdkUsSUFBSSxDQUFDK0UsRUFBRSxFQUFFO2dCQUNiL0UsSUFBSSxDQUFDK0UsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHOztjQUVuQixJQUFJLENBQUMrRSxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLO2NBQ3ZCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQ3ZGLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVzs7Y0FHM0MsTUFBTTZGLFNBQVMsR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQztjQUFPLENBQUU7Y0FDckNGLEtBQUssQ0FBQy9HLE9BQU8sQ0FBRXBFLFFBQVEsSUFBSTtnQkFDMUIsSUFBSWlCLElBQUksQ0FBQ2pCLFFBQVEsQ0FBQyxLQUFLcUwsU0FBUyxDQUFDckwsUUFBUSxDQUFDLEVBQUU7Z0JBQzVDcUwsU0FBUyxDQUFDckwsUUFBUSxDQUFDLEdBQUdpQixJQUFJLENBQUNqQixRQUFRLENBQUM7Z0JBQ3BDb0wsT0FBTyxHQUFHLElBQUk7Y0FDZixDQUFDLENBQUM7Y0FFRixJQUFJLENBQUMsT0FBTyxHQUFHQyxTQUFTO2NBQ3hCLElBQUksQ0FBQ25NLFlBQVksRUFBRTtjQUNuQixPQUFPa00sT0FBTztZQUNmLENBQUM7WUFFRHhDLFNBQVM7Y0FDUixNQUFNaEosTUFBTSxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDO2NBQU8sQ0FBRTtjQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUVBLE1BQU0sQ0FBQzRGLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVztjQUMxRCxJQUFJLElBQUksQ0FBQ0gsT0FBTyxFQUFFekYsTUFBTSxDQUFDeUYsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztjQUMvQyxPQUFPekYsTUFBTTtZQUNkO1lBQ0EsT0FBT29MLFlBQVk7Y0FDbEIsT0FBTyxzQ0FBc0MsQ0FBQ00sT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVQyxDQUFDO2dCQUN6RSxJQUFJQyxDQUFDLEdBQUkvRyxJQUFJLENBQUM2RSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUksQ0FBQztrQkFDL0J0QixDQUFDLEdBQUd1RCxDQUFDLEtBQUssR0FBRyxHQUFHQyxDQUFDLEdBQUlBLENBQUMsR0FBRyxHQUFHLEdBQUksR0FBRztnQkFDcEMsT0FBT3hELENBQUMsQ0FBQ3lELFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FDdEIsQ0FBQyxDQUFDO1lBQ0g7WUFFQXJLLE1BQU0sR0FBRyxPQUFPSCxJQUFTLEVBQUV5SSxPQUFPLEtBQUk7Y0FDckMsTUFBTTBCLE9BQU8sR0FBRyxJQUFJLENBQUNaLFNBQVMsQ0FBQ3ZKLElBQUksRUFBRXlJLE9BQU8sQ0FBQztjQUM3QyxJQUFJMEIsT0FBTyxFQUFFO2dCQUNaLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ25DLElBQUksQ0FBQ3hNLFlBQVksQ0FBQyxRQUFRLENBQUM7O1lBRTdCLENBQUM7O1VBQ0R5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3SEQ7VUFJTSxNQUFtQmdMLFlBQWEsU0FBUWpOLG9CQUE0QjtVQUFHaUM7VUFFN0UsTUFBTWlMLFlBQVksR0FBRyxJQUFJRCxZQUFZLEVBQUUiLCJuYW1lcyI6WyJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsImxvY2FsZGIiLCJpdGVtcyIsImlzT25saW5lIiwibG9jYWxQcm92aWRlciIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwidHJpZ2dlckV2ZW50IiwiY291bnRlcnMiLCJ0b3RhbCIsInByb3ZpZGVyIiwibmV4dCIsInNvcnRCeSIsInNvcnREaXJlY3Rpb24iLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJzZXRJdGVtcyIsInZhbHVlcyIsImluaXQiLCJzcGVjcyIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImJyaWRnZSIsImdldCIsInNldCIsIkNvbGxlY3Rpb25Mb2NhbFByb3ZpZGVyIiwib24iLCJDb2xsZWN0aW9uU2F2ZU1hbmFnZXIiLCJDb2xsZWN0aW9uTG9hZE1hbmFnZXIiLCJzZXRPZmZsaW5lIiwic3RvcmUiLCJleHBvcnRzIiwicGFyZW50IiwicGFyZW50QnJpZGdlIiwibG9hZCIsInBhcmFtcyIsImxvY2FsRGF0YSIsImRhdGEiLCJuZXdJdGVtcyIsInByb2Nlc3NFbnRyaWVzIiwidXBkYXRlIiwiY29uY2F0IiwicHJvcGVydGllcyIsImxvY2FsTG9hZGVkIiwiZmV0Y2hpbmciLCJzdGFydCIsImxpbWl0IiwibG9jYWxJdGVtcyIsInN0YXR1cyIsInJlbW90ZURhdGEiLCJsaXN0IiwiZXJyb3IiLCJwcm9jZXNzUmVtb3RlRW50cmllcyIsImVudHJpZXMiLCJzYXZlIiwibG9hZGVkIiwiZXhjIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJtYXAiLCJyZWNvcmQiLCJpdGVtIiwicmVtb3RlTG9hZCIsInJlc3BvbnNlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYiIsInN0b3JlTmFtZSIsIkZhY3RvcnlSZWNvcmRzIiwiRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsIlBlbmRpbmdQcm9taXNlIiwiZGF0YWJhc2UiLCJEQk1hbmFnZXIiLCJyZWFkeSIsInJlc29sdmUiLCJ1bmRlZmluZWQiLCJlIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmRpdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiY29udHJvbHMiLCJmb3JFYWNoIiwiY29uZGl0aW9uIiwiaW5jbHVkZXMiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImZpcnN0IiwibGl2ZSIsInF1ZXJ5Iiwib2Zmc2V0Iiwib3JkZXJCeSIsInRvQXJyYXkiLCJzdWJzY3JpYmUiLCJ0cmlnZ2VyIiwiZXJyIiwicHJvY2VzcyIsIm9mZmxpbmUiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiaW5zdGFuY2VJZCIsInNhdmVBbGwiLCJjb250cm9sIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsIk1hcCIsImlkIiwiYnVsa1B1dCIsIk1BWF9SRVRSSUVTIiwiQ0hVTktfU0laRSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJpbmRleCIsInJldHJpZXMiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsImNodW5rcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic2xpY2UiLCJ3aGVyZSIsImVxdWFscyIsImZhaWxlZENodW5rcyIsInN1Y2Nlc3NDaHVua3MiLCJyZXN1bHQiLCJmYWlsZWQiLCJJdGVtIiwidW5pcXVlIiwiaXNVbnB1Ymxpc2hlZCIsInNrZWxldG9uIiwiX19nZXQiLCJmb3VuZCIsInYiLCJsYW5kZWQiLCJjaGVja1JlYWR5IiwiY29uZmlnIiwiTG9jYWxQcm92aWRlciIsIkl0ZW1TYXZlTWFuYWdlciIsIkl0ZW1Mb2FkTWFuYWdlciIsIm9iamVjdFJlYWR5Iiwib25SZWFkeSIsImFkZExvY2FsUHJvdmlkZXIiLCJ0YWJsZSIsImhhc093blByb3BlcnR5IiwiZ2V0VmFsdWVzIiwidG9JdGVyYXRlIiwiZmllbGQiLCJnZXRQcm9wZXJ0eU5hbWVzIiwic2FtZSIsImtleSIsIm9yaWdpbmFsIiwicmVnaXN0cnkiLCJfX2lkIiwiZmxvb3IiLCJyYW5kb20iLCJ0b0NvbXBhcmUiLCJzb21lIiwicHJvcCIsImJhY2tlbmQiLCJkdXBsaWNhdGVkIiwidmFsaWRhdGVVbmlxdWVGaWVsZHMiLCJmaWVsZHMiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsIlByb21pc2UiLCJhbGwiLCJmaWx0ZXIiLCJkYk5hbWUiLCJoYXMiLCJSZWdpc3RyeSIsImVsZW1lbnRzIiwic2V0VmFsdWVzIiwicHJvbWlzZXMiLCJiYXRjaCIsInNwbGljZSIsInJlc3VsdHMiLCJhbGxTZXR0bGVkIiwibWFwcGVkRm4iLCJsb2NhbCIsImdlbmVyYXRlVVVJRCIsInRyYWNlIiwiaXNOZXciLCJwcm9wcyIsInVwZGF0ZWQiLCJuZXdWYWx1ZXMiLCJyZXBsYWNlIiwiYyIsInIiLCJ0b1N0cmluZyIsInB1dCIsIlN0b3JlUmVjb3JkcyIsInN0b3JlRmFjdG9yeSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29sbGVjdGlvbi9pbmRleC50cyIsImNvbGxlY3Rpb24vbG9hZC50cyIsImNvbGxlY3Rpb24vbG9jYWwtcHJvdmlkZXIudHMiLCJjb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCJpbnRlcmZhY2VzL3Byb3ZpZGVyLnRzIiwiaXRlbS9pbmRleC50cyIsIml0ZW0vbG9hZC50cyIsIml0ZW0vbG9jYWwtcHJvdmlkZXIudHMiLCJpdGVtL3NhdmUudHMiLCJyZWdpc3RyeS9mYWN0b3J5LnRzIiwicmVnaXN0cnkvaW5kZXgudHMiLCJyZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
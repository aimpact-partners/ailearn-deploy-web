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
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["dexie", "3.2.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/backend", "0.1.5"], ["socket.io-client", "4.6.1"], ["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
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
        hash: 2144354113,
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
            sortBy = "id";
            sortDirection = "asc";
            constructor() {
              super();
              this.reactiveProps(["item", "next", "provider"]);
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
              this.#localProvider.on("items.changed", this.#listenItems);
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
        hash: 4170335826,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionLoadManager = void 0;
          class CollectionLoadManager {
            #parent;
            filter;
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
              this.#parent.filter = this.filter;
              this.#parent.customFilter = this.#localProvider.customFilter;
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
                next: !!localData.next,
                items
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
                const hasLocalProvider = await this.#parentBridge.get('localProvider');
                const useLocal = hasLocalProvider && (!this.#localProvider.isOnline || !this.#provider);
                if (useLocal) {
                  const localItems = await this.#localLoad(params);
                  return {
                    status: true,
                    data: localItems
                  };
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
        hash: 2777918320,
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
              return this.#isOnline && !this.#offline && !localStorage.getItem('reactive.offline');
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
              if (!db || !storeName) throw new Error('database and store are required');
              this.#databaseName = db;
              this.#storeName = storeName;
              globalThis.addEventListener('online', this.handleConnection);
              globalThis.addEventListener('offline', this.handleConnection);
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
            #customWhere;
            #defaultWhere = (store, offset, limit) => store.orderBy('id');
            where = limit => {
              return () => {
                let store = this.#store;
                this.#page++;
                const offset = (this.#page - 1) * limit;
                const filter = this.#customWhere ?? this.#defaultWhere;
                return filter(store, offset, limit).offset(offset).limit(limit).toArray();
              };
            };
            customFilter = callback => {
              this.#customWhere = callback;
              return this.#parent;
            };
            async load(params) {
              if (this.#promiseLoad) return this.#promiseLoad;
              if (JSON.stringify(this.#params) === JSON.stringify(params)) {
                return this.#promiseLoad;
              }
              this.#promiseLoad = new _core.PendingPromise();
              const conditions = Object.keys(params);
              const controls = ['and', 'or'];
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
                const live = (0, _dexie.liveQuery)(this.where(limit));
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
                    this.trigger('items.changed');
                  },
                  error: err => {
                    console.error(err);
                  }
                });
                return this.#promiseLoad;
                //return await this.live.toArray();
              } catch (error) {
                console.error('Error al cargar los elementos del store:', error);
                return {
                  status: false,
                  data: []
                };
              }
            }
            async save(data) {
              const process = (entries, offline = 0) => {
                return entries.map(item => {
                  const record = item.getProperties && typeof item.getProperties === 'function' ? item.getProperties() : item;
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
              return this.#database.db.transaction('rw', this.store, async () => {
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
        hash: 242343578,
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
              return this.#isOnline && !this.#offline && !localStorage.getItem('reactive.offline');
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
              if (!db || !storeName) throw new Error('database and store are required');
              this.#databaseName = db;
              this.#storeName = storeName;
              this.#records = _factory.FactoryRecords.get(db);
              globalThis.addEventListener('online', this.handleConnection);
              globalThis.addEventListener('offline', this.handleConnection);
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
                if (prop === 'id') return false;
                return toCompare[prop] !== data[prop];
              });
            }
            async load(params = {}) {
              let id = params.id;
              id = id ?? this.#parent.id;
              try {
                if (!id) throw 'ID IS REQUIRED';
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
              if (!registry) return console.warn('NO RECORD FOUND');
              this.#parent.set(registry.values);
              this.#registry = registry;
              registry.on('change', this.#listenRegistry);
              return registry;
            };
            /**
             * Trigger the event to update the component when the registry changes.
             */
            #listenRegistry = async () => {
              if (!this.#registry) return;
              this.#parent.set(this.#registry.values);
              this.trigger('change');
            };
            async save(data, backend = false) {
              try {
                if (!this.isUnpublished) return;
                data.offline = this.isOnline ? 1 : 0;
                if (!this.#registry) await this.#getRegistry('new');
                // Add validation for unique fields
                const duplicated = await this.validateUniqueFields(data);
                if (duplicated.length) return {
                  error: 'duplicated',
                  fields: duplicated
                };
                await this.#registry.update(data, backend);
                return this;
              } catch (e) {
                console.error('error saving', e.message);
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
              if (!this.#getProperty('unique').length) return [];
              const checkPromises = this.#getProperty('unique').map(field => this.#store.where(field).equals(data[field]).count().then(count => {
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
        hash: 1678029548,
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
              //		if (this.offline) values.offline = this.offline; // this line may be removed, the offline value must be set by the localProvider
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFFQTtVQUNBO1VBQ0E7VUFnQk87VUFBVyxNQUFnQkEsVUFBVyxTQUFRQyxvQkFBMEI7WUFDN0UsTUFBTSxHQUEyQixFQUFFO1lBQ3pCQyxPQUFPLEdBQUcsSUFBSTtZQUN4QixJQUFJQyxLQUFLO2NBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNwQjtZQUVBLElBQUlDLFFBQVE7Y0FDVixPQUFPLENBQUMsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDRCxRQUFRO1lBQ2pFO1lBQ0EsSUFBSUQsS0FBSyxDQUFDRyxLQUFnQztjQUN4QyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRixLQUFLLENBQUMsRUFBRTtnQkFDekI7O2NBR0YsSUFBSSxDQUFDLE1BQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUNHLFlBQVksRUFBRTtZQUNyQjtZQUVBQyxRQUFRLEdBQVEsRUFBRTtZQUNsQjs7O1lBR0FDLEtBQUssR0FBVyxDQUFDO1lBRWpCQyxRQUFRO1lBQ1JDLElBQUk7WUFFSixjQUFjO1lBQ2QsSUFBSVIsYUFBYTtjQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWM7WUFDNUI7WUFFQSxZQUFZO1lBQ1osWUFBWTtZQUNaLFNBQVM7WUFDVCxVQUFVLEdBQVcsRUFBRTtZQUNiUyxNQUFNLEdBQVcsSUFBSTtZQUNyQkMsYUFBYSxHQUFtQixLQUFLO1lBRS9DQztjQUNFLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0MsYUFBYSxDQUFjLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUMvRDtZQUVVQyxRQUFRLENBQUNDLE1BQU07Y0FDdkIsSUFBSSxDQUFDLE1BQU0sR0FBR0EsTUFBTTtZQUN0QjtZQUNVLE1BQU1DLElBQUksQ0FBQ0MsUUFBZ0IsRUFBRTtjQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHQSxLQUFLO2NBRXZCLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxDQUFDO2NBQzlDLE1BQU1DLFdBQVcsR0FBRyxDQUFDRCxRQUFRLEVBQUVqQixLQUFLLEtBQU0sSUFBSSxDQUFDaUIsUUFBUSxDQUFDLEdBQUdqQixLQUFNO2NBRWpFLE1BQU1tQixNQUFNLEdBQUc7Z0JBQUVDLEdBQUcsRUFBRUosV0FBVztnQkFBRUssR0FBRyxFQUFFSDtjQUFXLENBQUU7Y0FFckQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJSSxzQ0FBdUIsQ0FBQyxJQUFJLEVBQUVILE1BQU0sQ0FBQztjQUMvRCxJQUFJLENBQUMsY0FBYyxDQUFDSSxFQUFFLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7Y0FDMUQsSUFBSSxDQUFDeEIsYUFBYSxDQUFDZSxJQUFJLEVBQUU7Y0FDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJVSw4QkFBcUIsQ0FBQyxJQUFJLEVBQUVMLE1BQU0sQ0FBQztjQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUlNLDJCQUFxQixDQUFDLElBQUksRUFBRU4sTUFBTSxDQUFDO1lBQzdEO1lBRUEsWUFBWSxHQUFHLE1BQUs7Y0FDbEIsSUFBSSxDQUFDLElBQUksQ0FBQ3ZCLE9BQU8sRUFBRTtjQUVuQjtjQUNBO1lBQ0YsQ0FBQzs7WUFFRDhCLFVBQVUsR0FBRzFCLEtBQUssSUFBSSxJQUFJLENBQUNELGFBQWEsQ0FBQzJCLFVBQVUsQ0FBQzFCLEtBQUssQ0FBQztZQUUxRCxNQUFNMkIsS0FBSztjQUNULE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQ2IsSUFBSSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQ2EsS0FBSztZQUNsQzs7VUFDREM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckZLLE1BQU9ILHFCQUFxQjtZQUNqQyxPQUFPO1lBQ1BJLE1BQU07WUFDTixJQUFJQyxNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNwQjtZQUVBLGNBQWM7WUFDZCxTQUFTO1lBQ1QsWUFBWTtZQUNaLGFBQWE7WUFDYixRQUFRO1lBRVJwQixZQUFZb0IsTUFBTSxFQUFFQyxZQUFZO2NBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUdELE1BQU07Y0FDckIsSUFBSSxDQUFDLGFBQWEsR0FBR0MsWUFBWTtjQUNqQyxJQUFJLENBQUNqQixJQUFJLEVBQUU7WUFDWjtZQUVBQSxJQUFJLEdBQUcsWUFBVztjQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUNNLEdBQUcsQ0FBQyxTQUFTLENBQUM7Y0FDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDQSxHQUFHLENBQUMsZUFBZSxDQUFDO2NBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQ0EsR0FBRyxDQUFDLFVBQVUsQ0FBQztjQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDWSxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJO2NBQzdCLElBQUksQ0FBQyxPQUFPLENBQUNILE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU07Y0FDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQ0ksWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUNBLFlBQVk7WUFDN0QsQ0FBQztZQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkEsVUFBVSxHQUFHLE1BQU9DLE1BQU0sSUFBSTtjQUM3QixNQUFNQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUNILElBQUksQ0FBQ0UsTUFBTSxDQUFDLEtBQUs7Z0JBQUVFLElBQUksRUFBRTtjQUFFLENBQUU7Y0FFMUUsTUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsY0FBYyxDQUFDSCxTQUFTLENBQUNDLElBQUksQ0FBQztjQUNwRCxJQUFJdkMsS0FBSyxHQUFHcUMsTUFBTSxDQUFDSyxNQUFNLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQ1QsTUFBTSxDQUFDakMsS0FBSyxDQUFDMkMsTUFBTSxDQUFDSCxRQUFRLENBQUMsR0FBR0EsUUFBUTtjQUVsRixNQUFNSSxVQUFVLEdBQWtCO2dCQUNqQ0MsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCQyxRQUFRLEVBQUUsS0FBSztnQkFDZnRDLEtBQUssRUFBRThCLFNBQVMsQ0FBQzlCLEtBQUssSUFBSSxDQUFDO2dCQUMzQkUsSUFBSSxFQUFFLENBQUMsQ0FBQzRCLFNBQVMsQ0FBQzVCLElBQUk7Z0JBQ3RCVjtlQUNBO2NBQ0QsSUFBSXNDLFNBQVMsQ0FBQzVCLElBQUksRUFBRWtDLFVBQVUsQ0FBQ2xDLElBQUksR0FBRzRCLFNBQVMsQ0FBQzVCLElBQUk7Y0FFcEQsSUFBSSxDQUFDdUIsTUFBTSxDQUFDVCxHQUFHLENBQUNvQixVQUFVLENBQUM7Y0FDM0IsT0FBTzVDLEtBQUs7WUFDYixDQUFDO1lBRUQsVUFBVSxHQUFHLEVBQUU7WUFDZixLQUFLLEdBQUcsQ0FBQztZQUNULGVBQWUsR0FBRyxFQUFFO1lBQ3BCbUMsSUFBSSxHQUFHLE9BQU9FLFNBQWMsRUFBRSxLQUFJO2NBQ2pDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDSixNQUFNLENBQUNhLFFBQVEsR0FBRyxJQUFJO2dCQUMzQixJQUFJO2tCQUFFQyxLQUFLLEdBQUcsQ0FBQztrQkFBRUw7Z0JBQU0sQ0FBRSxHQUFHTCxNQUFNO2dCQUVsQ0EsTUFBTSxDQUFDVyxLQUFLLEdBQUdYLE1BQU0sQ0FBQ1csS0FBSyxJQUFJLEVBQUU7Z0JBQ2pDLE1BQU07a0JBQUV0QztnQkFBSSxDQUFFLEdBQUcsSUFBSSxDQUFDdUIsTUFBTTtnQkFDNUIsSUFBSVMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3hCSyxLQUFLLEdBQUdMLE1BQU0sS0FBSyxJQUFJLElBQUloQyxJQUFJLEdBQUdBLElBQUksR0FBR3FDLEtBQUs7Z0JBQzlDLElBQUlMLE1BQU0sRUFBRTtrQkFDWEwsTUFBTSxDQUFDVSxLQUFLLEdBQUdBLEtBQUs7O2dCQUVyQixNQUFNRSxnQkFBZ0IsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMxQixHQUFHLENBQUMsZUFBZSxDQUFDO2dCQUN0RSxNQUFNMkIsUUFBUSxHQUFHRCxnQkFBZ0IsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUNoRCxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUV2RixJQUFJaUQsUUFBUSxFQUFFO2tCQUNiLE1BQU1DLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUNkLE1BQU0sQ0FBQztrQkFDaEQsT0FBTztvQkFBRWUsTUFBTSxFQUFFLElBQUk7b0JBQUViLElBQUksRUFBRVk7a0JBQVUsQ0FBRTs7Z0JBRzFDLE1BQU1FLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUNDLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQztnQkFDcEQsTUFBTTtrQkFBRWUsTUFBTTtrQkFBRWIsSUFBSTtrQkFBRWdCO2dCQUFLLENBQUUsR0FBR0YsVUFBVTtnQkFDMUMsSUFBSSxDQUFDRCxNQUFNLEVBQUUsTUFBTUcsS0FBSyxJQUFJLGtCQUFrQjtnQkFFOUMsTUFBTXZELEtBQUssR0FBVSxJQUFJLENBQUN3RCxvQkFBb0IsQ0FBQ2pCLElBQUksQ0FBQ2tCLE9BQU8sQ0FBQztnQkFDNUQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDMUQsS0FBSyxDQUFDO2dCQUU5RCxJQUFJLENBQUMsZUFBZSxHQUFHcUMsTUFBTSxDQUFDSyxNQUFNLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUNDLE1BQU0sQ0FBQzNDLEtBQUssQ0FBQyxHQUFHQSxLQUFLO2dCQUUxRixNQUFNNEMsVUFBVSxHQUFHO2tCQUNsQjVDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZTtrQkFDM0JVLElBQUksRUFBRTZCLElBQUksQ0FBQzdCLElBQUk7a0JBQ2ZpRCxNQUFNLEVBQUUsSUFBSTtrQkFDWmIsUUFBUSxFQUFFLEtBQUs7a0JBQ2Z0QyxLQUFLLEVBQUUrQixJQUFJLENBQUMvQixLQUFLLElBQUk7aUJBQ3JCO2dCQUVELElBQUksQ0FBQ3lCLE1BQU0sQ0FBQ1QsR0FBRyxDQUFDb0IsVUFBVSxDQUFDO2dCQUMzQixJQUFJLENBQUNYLE1BQU0sQ0FBQzNCLFlBQVksRUFBRTtnQkFDMUIsT0FBTztrQkFBRThDLE1BQU0sRUFBRSxJQUFJO2tCQUFFYixJQUFJLEVBQUV2QztnQkFBSyxDQUFFO2VBQ3BDLENBQUMsT0FBTzRELEdBQUcsRUFBRTtnQkFDYkMsT0FBTyxDQUFDTixLQUFLLENBQUMsWUFBWSxFQUFFSyxHQUFHLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUNwQyxHQUFHLENBQUM7a0JBQUVtQyxNQUFNLEVBQUUsS0FBSztrQkFBRWIsUUFBUSxFQUFFO2dCQUFJLENBQUUsQ0FBQztnQkFDbkQsSUFBSSxDQUFDYixNQUFNLENBQUMzQixZQUFZLEVBQUU7Z0JBQzFCLE9BQU87a0JBQUU4QyxNQUFNLEVBQUUsS0FBSztrQkFBRUcsS0FBSyxFQUFFO29CQUFFTyxPQUFPLEVBQUVGO2tCQUFHO2dCQUFFLENBQUU7O1lBRW5ELENBQUM7WUFFREosb0JBQW9CLENBQUNDLE9BQU87Y0FDM0IsT0FBT0EsT0FBTyxDQUFDTSxHQUFHLENBQUVDLE1BQU0sSUFBSTtnQkFDN0IsTUFBTUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDaEMsTUFBTSxDQUFDZ0MsSUFBSSxFQUFFO2dCQUNuQ0EsSUFBSSxDQUFDekMsR0FBRyxDQUFDd0MsTUFBTSxFQUFFLElBQUksQ0FBQztnQkFDdEIsT0FBT0MsSUFBSTtjQUNaLENBQUMsQ0FBQztZQUNIO1lBRUF4QixjQUFjLEdBQUlnQixPQUFPLElBQVc7Y0FDbkMsT0FBT0EsT0FBTyxDQUFDTSxHQUFHLENBQUVDLE1BQU0sSUFBSTtnQkFDN0IsTUFBTUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDaEMsTUFBTSxDQUFDZ0MsSUFBSSxFQUFFO2dCQUNuQ0EsSUFBSSxDQUFDekMsR0FBRyxDQUFDd0MsTUFBTSxDQUFDO2dCQUNoQixPQUFPQyxJQUFJO2NBQ1osQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVEQyxVQUFVLEdBQUcsTUFBTzdCLE1BQU0sSUFBSTtjQUM3QixNQUFNOEIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQ2hDLElBQUksQ0FBQ0UsTUFBTSxDQUFDO2NBRWxELElBQUksQ0FBQzhCLFFBQVEsQ0FBQ2YsTUFBTSxFQUFFLE1BQU0sa0JBQWtCO2NBQzlDLE9BQU9lLFFBQVEsQ0FBQzVCLElBQUk7WUFDckIsQ0FBQzs7VUFDRFI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUpEO1VBR0E7VUFDQTtVQUNBO1VBRUE7VUFPTztVQUFVLE1BQU9OLHVCQUF3QixTQUFRM0Isb0JBQWtCO1lBQ3pFLFNBQVMsR0FBR3NFLFVBQVUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNO1lBQ3ZDLE1BQU07WUFDTixJQUFJeEMsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQSxRQUFRO1lBQ1IsU0FBUztZQUNULFVBQVU7WUFDVixhQUFhO1lBQ2IsTUFBTSxHQUFHLEVBQUU7WUFDWCxRQUFRO1lBQ1IsSUFBSTlCLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBQ0EsT0FBTyxHQUFHLEtBQUs7WUFDZixNQUFNLEdBQUcsS0FBSztZQUVkLEdBQUc7WUFDSCxJQUFJQyxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDc0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDckY7WUFDQSxPQUFPO1lBQ1AsT0FBTztZQUNQM0QsWUFBWW9CLE1BQU0sRUFBRVgsTUFBVztjQUM5QixLQUFLLEVBQUU7Y0FDUCxNQUFNO2dCQUFFbUQsRUFBRTtnQkFBRUM7Y0FBUyxDQUFFLEdBQUd6QyxNQUFNO2NBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUdBLE1BQU07Y0FDckIsSUFBSSxDQUFDLE9BQU8sR0FBR1gsTUFBTTtjQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHcUQsdUJBQWMsQ0FBQ3BELEdBQUcsQ0FBQ2tELEVBQUUsQ0FBQztjQUV0QyxJQUFJLENBQUNBLEVBQUUsSUFBSSxDQUFDQyxTQUFTLEVBQUUsTUFBTSxJQUFJRSxLQUFLLENBQUMsaUNBQWlDLENBQUM7Y0FDekUsSUFBSSxDQUFDLGFBQWEsR0FBR0gsRUFBRTtjQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHQyxTQUFTO2NBRTNCTixVQUFVLENBQUNTLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO2NBQzVEVixVQUFVLENBQUNTLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQzlEO1lBRUFqRCxVQUFVLENBQUMxQixLQUFLO2NBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBR0EsS0FBSztjQUNyQixJQUFJLENBQUNHLFlBQVksRUFBRTtZQUNwQjtZQUNBLFlBQVk7WUFDWlcsSUFBSSxHQUFHLFlBQVc7Y0FDakIsSUFBSTtnQkFDSCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsWUFBWTtnQkFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJOEQsb0JBQWMsRUFBRTtnQkFFeEMsTUFBTUMsUUFBUSxHQUFvQixNQUFNQyxtQkFBUyxDQUFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxTQUFTLEdBQUd5RCxRQUFRO2dCQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHQSxRQUFRLENBQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMxQyxJQUFJLENBQUNTLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDQyxPQUFPLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUdDLFNBQVM7ZUFDN0IsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1h4QixPQUFPLENBQUNOLEtBQUssQ0FBQzhCLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVPUCxnQkFBZ0IsR0FBRyxNQUFLO2NBQy9CLElBQUksQ0FBQ3hFLFlBQVksRUFBRTtZQUNwQixDQUFDO1lBRUQ7Ozs7O1lBS0EsY0FBYyxDQUFDaUMsSUFBSSxHQUFHO1lBQ3RCLFlBQVk7WUFDWixPQUFPO1lBRVAsTUFBTTtZQUNOLEtBQUssR0FBRyxDQUFDO1lBRVQsWUFBWTtZQUNaLGFBQWEsR0FBRyxDQUFDVCxLQUFLLEVBQUV3RCxNQUFNLEVBQUV0QyxLQUFLLEtBQUtsQixLQUFLLENBQUN5RCxPQUFPLENBQUMsSUFBSSxDQUFDO1lBRTdEQyxLQUFLLEdBQUd4QyxLQUFLLElBQUc7Y0FDZixPQUFPLE1BQUs7Z0JBQ1gsSUFBSWxCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTTtnQkFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixNQUFNd0QsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUl0QyxLQUFLO2dCQUN2QyxNQUFNaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWE7Z0JBQ3RELE9BQU9BLE1BQU0sQ0FBQ0YsS0FBSyxFQUFFd0QsTUFBTSxFQUFFdEMsS0FBSyxDQUFDLENBQUNzQyxNQUFNLENBQUNBLE1BQU0sQ0FBQyxDQUFDdEMsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQ3lDLE9BQU8sRUFBRTtjQUMxRSxDQUFDO1lBQ0YsQ0FBQztZQUVEckQsWUFBWSxHQUFHc0QsUUFBUSxJQUFHO2NBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUdBLFFBQVE7Y0FDNUIsT0FBTyxJQUFJLENBQUMsT0FBTztZQUNwQixDQUFDO1lBQ0QsTUFBTXZELElBQUksQ0FBQ0UsTUFBTTtjQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsWUFBWTtjQUMvQyxJQUFJc0QsSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLRCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3ZELE1BQU0sQ0FBQyxFQUFFO2dCQUM1RCxPQUFPLElBQUksQ0FBQyxZQUFZOztjQUd6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkwQyxvQkFBYyxFQUFFO2NBQ3hDLE1BQU1jLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUMxRCxNQUFNLENBQUM7Y0FDdEMsTUFBTTJELFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7Y0FDOUJILFVBQVUsQ0FBQ0ksT0FBTyxDQUFDQyxTQUFTLElBQUc7Z0JBQzlCLElBQUlGLFFBQVEsQ0FBQ0csUUFBUSxDQUFDRCxTQUFTLENBQUMsRUFBRTtrQkFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQ0EsU0FBUyxFQUFFN0QsTUFBTSxDQUFDNkQsU0FBUyxDQUFDLENBQUM7O2NBRXBELENBQUMsQ0FBQztjQUVGLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUNFLEtBQUssRUFBRTtnQkFDekQsSUFBSXBELEtBQUssR0FBR1gsTUFBTSxDQUFDVyxLQUFLLElBQUksRUFBRTtnQkFDOUIsTUFBTXFELFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBR3ZELEtBQUssQ0FBQztnQkFDakQsSUFBSXFELFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUM5QixJQUFJRyxLQUFLLEdBQUcsSUFBSTtnQkFDaEIsTUFBTUMsSUFBSSxHQUFHLG9CQUFTLEVBQUMsSUFBSSxDQUFDakIsS0FBSyxDQUFDeEMsS0FBSyxDQUFDLENBQUM7Z0JBRXpDeUQsSUFBSSxDQUFDQyxTQUFTLENBQUM7a0JBQ2RoRyxJQUFJLEVBQUUsTUFBTVYsS0FBSyxJQUFHO29CQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7c0JBQ3RCd0csS0FBSyxHQUFHLEtBQUs7c0JBQ2IsTUFBTXJDLFFBQVEsR0FBRzt3QkFBRWYsTUFBTSxFQUFFLElBQUk7d0JBQUViLElBQUksRUFBRXZDLEtBQUs7d0JBQUVRLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTt3QkFBRUUsSUFBSSxFQUFFO3NCQUFJLENBQUU7c0JBQzlFLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUkyRixVQUFVLEVBQUUsT0FBT2xDLFFBQVEsQ0FBQ3pELElBQUk7c0JBRXRELElBQUksQ0FBQyxZQUFZLENBQUN5RSxPQUFPLENBQUNoQixRQUFRLENBQUM7c0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTs7b0JBR3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQ3hCLE1BQU0sQ0FBQzNDLEtBQUssQ0FBQztvQkFFdkMsSUFBSSxDQUFDMkcsT0FBTyxDQUFDLGVBQWUsQ0FBQztrQkFDOUIsQ0FBQztrQkFDRHBELEtBQUssRUFBRXFELEdBQUcsSUFBRztvQkFDWi9DLE9BQU8sQ0FBQ04sS0FBSyxDQUFDcUQsR0FBRyxDQUFDO2tCQUNuQjtpQkFDQSxDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDLFlBQVk7Z0JBQ3hCO2VBQ0EsQ0FBQyxPQUFPckQsS0FBSyxFQUFFO2dCQUNmTSxPQUFPLENBQUNOLEtBQUssQ0FBQywwQ0FBMEMsRUFBRUEsS0FBSyxDQUFDO2dCQUNoRSxPQUFPO2tCQUFFSCxNQUFNLEVBQUUsS0FBSztrQkFBRWIsSUFBSSxFQUFFO2dCQUFFLENBQUU7O1lBRXBDO1lBRUEsTUFBTW1CLElBQUksQ0FBQ25CLElBQUk7Y0FDZCxNQUFNc0UsT0FBTyxHQUFHLENBQUNwRCxPQUFPLEVBQUVxRCxPQUFPLEdBQUcsQ0FBQyxLQUFJO2dCQUN4QyxPQUFPckQsT0FBTyxDQUFDTSxHQUFHLENBQUNFLElBQUksSUFBRztrQkFDekIsTUFBTUQsTUFBTSxHQUNYQyxJQUFJLENBQUM4QyxhQUFhLElBQUksT0FBTzlDLElBQUksQ0FBQzhDLGFBQWEsS0FBSyxVQUFVLEdBQUc5QyxJQUFJLENBQUM4QyxhQUFhLEVBQUUsR0FBRzlDLElBQUk7a0JBQzdGLE1BQU0rQyxNQUFNLEdBQUc7b0JBQUUsR0FBR2hELE1BQU07b0JBQUU4QyxPQUFPO29CQUFFRyxVQUFVLEVBQUVoRCxJQUFJLENBQUNnRDtrQkFBVSxDQUFFO2tCQUNsRSxPQUFPRCxNQUFNO2dCQUNkLENBQUMsQ0FBQztjQUNILENBQUM7Y0FFRHpFLElBQUksR0FBR3NFLE9BQU8sQ0FBQ3RFLElBQUksRUFBRSxJQUFJLENBQUN0QyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUUzQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUNnQixJQUFJLEVBQUU7Y0FDMUIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDaUcsT0FBTyxDQUFDM0UsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkQ7WUFDQSxlQUFlLENBQUM0RSxPQUFPLEVBQUV0QixVQUFVO2NBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUNzQixPQUFPLENBQUM7WUFDckI7WUFFQSxNQUFNQyxNQUFNLENBQUM3RSxJQUFtQixFQUFFOEUsWUFBbUI7Y0FDcEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDNUMsRUFBRSxDQUFDNkMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUN4RixLQUFLLEVBQUUsWUFBVztnQkFDakUsTUFBTXlGLGlCQUFpQixHQUFHLElBQUlDLEdBQUcsRUFBa0I7Z0JBQ25EakYsSUFBSSxDQUFDMEQsT0FBTyxDQUFDaEMsSUFBSSxJQUFHO2tCQUNuQnNELGlCQUFpQixDQUFDL0YsR0FBRyxDQUFDeUMsSUFBSSxDQUFDZ0QsVUFBVSxFQUFFaEQsSUFBSSxDQUFDd0QsRUFBRSxDQUFDO2dCQUNoRCxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxJQUFJLENBQUMzRixLQUFLLENBQUM0RixPQUFPLENBQUNuRixJQUFJLENBQUM7Y0FDL0IsQ0FBQyxDQUFDO1lBQ0g7O1VBQ0FSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZMSyxNQUFPSixxQkFBcUI7WUFDaEMsT0FBTztZQUNQLE9BQU87WUFDUCxjQUFjO1lBQ2QsU0FBUztZQUNULFFBQVE7WUFDRWdHLFdBQVcsR0FBRyxDQUFDO1lBQ2ZDLFVBQVUsR0FBRyxHQUFHO1lBRTFCL0csWUFBWW9CLE1BQU0sRUFBRVgsTUFBTTtjQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHVyxNQUFNO2NBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUdYLE1BQU07Y0FDckIsSUFBSSxDQUFDTCxJQUFJLEVBQUU7WUFDYjtZQUVBQSxJQUFJO2NBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQ3lDLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUk7Y0FDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQ21FLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUk7Y0FDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztjQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNO2NBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQ3hHLEdBQUcsQ0FBQyxTQUFTLENBQUM7Y0FDM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUNBLEdBQUcsQ0FBQyxlQUFlLENBQUM7ZUFDeEQsTUFBTTtnQkFDTHNDLE9BQU8sQ0FBQ21FLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQzs7Y0FHaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDekcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUMvQztZQUVBbUMsSUFBSSxHQUFHLE9BQU9uQixJQUFJLEdBQUcsRUFBRSxLQUFrQjtjQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLElBQUk7Y0FDL0IsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDdEIsSUFBSSxFQUFFO2NBRWhDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQ3lDLElBQUksQ0FBQ25CLElBQUksQ0FBQztZQUN0QyxDQUFDO1lBRUR1RixPQUFPLEdBQUcsT0FBT3ZGLElBQUksR0FBRyxFQUFFLEtBQWtCO2NBQzFDLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLENBQUNtQixJQUFJLENBQUNuQixJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUNoQixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBRXRELE1BQU00QyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDOEQsUUFBUSxDQUFDMUYsSUFBSSxDQUFDO2dCQUNwRCxJQUFJLENBQUM0QixRQUFRLENBQUNmLE1BQU0sRUFBRSxNQUFNZSxRQUFRLENBQUNaLEtBQUs7Z0JBRTFDLE9BQU87a0JBQUVILE1BQU0sRUFBRTtnQkFBSSxDQUFFO2VBQ3hCLENBQUMsT0FBT0csS0FBSyxFQUFFO2dCQUNkTSxPQUFPLENBQUNOLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO2dCQUNwQixPQUFPO2tCQUFFSCxNQUFNLEVBQUUsS0FBSztrQkFBRUc7Z0JBQUssQ0FBRTs7WUFFbkMsQ0FBQztZQUVEO1lBQ0EyRSxTQUFTLEdBQUcsT0FBT0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sR0FBRyxDQUFDLEtBQUk7Y0FDOUMsSUFBSTtnQkFDRixNQUFNbEUsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQzhELFFBQVEsQ0FBQ0UsS0FBSyxDQUFDO2dCQUNyRCxJQUFJaEUsUUFBUSxDQUFDZixNQUFNLEVBQUU7a0JBQ25CLE1BQU1iLElBQUksR0FBRzRCLFFBQVEsQ0FBQzVCLElBQUksQ0FBQ2tCLE9BQU8sQ0FBQ00sR0FBRyxDQUFDRSxJQUFJLEtBQUs7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRTZDLE9BQU8sRUFBRSxDQUFDO29CQUFFRyxVQUFVLEVBQUU3QjtrQkFBUyxDQUFFLENBQUMsQ0FBQztrQkFFaEcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDZ0MsTUFBTSxDQUFDN0UsSUFBSSxFQUFFNEYsS0FBSyxDQUFDO2tCQUM3QyxPQUFPO29CQUFFRyxPQUFPLEVBQUUsSUFBSTtvQkFBRUgsS0FBSztvQkFBRWhFO2tCQUFRLENBQUU7O2dCQUUzQyxJQUFJa0UsT0FBTyxHQUFHLElBQUksQ0FBQ1YsV0FBVyxFQUFFO2tCQUM5QixPQUFPLE1BQU0sSUFBSSxDQUFDTyxTQUFTLENBQUNDLEtBQUssRUFBRUUsT0FBTyxHQUFHLENBQUMsQ0FBQzs7Z0JBR2pELE9BQU87a0JBQUVDLE9BQU8sRUFBRSxLQUFLO2tCQUFFSCxLQUFLO2tCQUFFaEU7Z0JBQVEsQ0FBRTtlQUMzQyxDQUFDLE9BQU9rQixDQUFDLEVBQUU7Z0JBQ1Z4QixPQUFPLENBQUNOLEtBQUssQ0FBQzhCLENBQUMsQ0FBQztnQkFDaEIsT0FBTztrQkFBRWlELE9BQU8sRUFBRSxLQUFLO2tCQUFFSCxLQUFLO2tCQUFFNUUsS0FBSyxFQUFFOEI7Z0JBQUMsQ0FBRTs7WUFFOUMsQ0FBQztZQUVEO1lBQ0FrRCxtQkFBbUIsR0FBR2hHLElBQUksSUFBRztjQUMzQixNQUFNaUcsTUFBTSxHQUFHLEVBQUU7Y0FDakIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdsRyxJQUFJLENBQUNtRyxNQUFNLEVBQUVELENBQUMsSUFBSSxJQUFJLENBQUNiLFVBQVUsRUFBRTtnQkFDckRZLE1BQU0sQ0FBQ0csSUFBSSxDQUFDcEcsSUFBSSxDQUFDcUcsS0FBSyxDQUFDSCxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNiLFVBQVUsQ0FBQyxDQUFDOztjQUVqRCxPQUFPWSxNQUFNO1lBQ2YsQ0FBQztZQUVEWCxJQUFJLEdBQUcsTUFBTXRGLElBQUksSUFBRztjQUNsQixJQUFJO2dCQUNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQ3RCLElBQUksRUFBRTtnQkFDaEMsSUFBSSxDQUFDc0IsSUFBSSxFQUFFQSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDckMsYUFBYSxDQUFDNEIsS0FBSyxDQUFDMEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDcUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDcEQsT0FBTyxFQUFFO2dCQUU3RixNQUFNK0MsTUFBTSxHQUFHLElBQUksQ0FBQ0QsbUJBQW1CLENBQUNoRyxJQUFJLENBQUM7Z0JBQzdDLE1BQU11RyxZQUFZLEdBQUcsRUFBRTtnQkFDdkIsTUFBTUMsYUFBYSxHQUFHLEVBQUU7Z0JBRXhCLEtBQUssTUFBTSxDQUFDWCxLQUFLLEVBQUVELEtBQUssQ0FBQyxJQUFJSyxNQUFNLENBQUMvRSxPQUFPLEVBQUUsRUFBRTtrQkFDN0MsTUFBTXVGLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQ2QsU0FBUyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssQ0FBQztrQkFDakQsSUFBSSxDQUFDWSxNQUFNLENBQUNWLE9BQU8sRUFBRTtvQkFDbkJRLFlBQVksQ0FBQ0gsSUFBSSxDQUFDSyxNQUFNLENBQUM7bUJBQzFCLE1BQU1ELGFBQWEsQ0FBQ0osSUFBSSxDQUFDSyxNQUFNLENBQUM7O2dCQUVuQyxJQUFJLENBQUMsT0FBTyxDQUFDeEgsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7Z0JBQzdCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQ1csSUFBSSxFQUFFO2dCQUN6QixJQUFJMkcsWUFBWSxDQUFDSixNQUFNLEVBQUU7a0JBQ3ZCLE1BQU01RSxPQUFPLEdBQUdnRixZQUFZLENBQUNKLE1BQU0sS0FBS0YsTUFBTSxDQUFDRSxNQUFNLEdBQUcsYUFBYSxHQUFHLGlCQUFpQjtrQkFDekYsT0FBTztvQkFBRXRGLE1BQU0sRUFBRSxLQUFLO29CQUFFVSxPQUFPO29CQUFFdkIsSUFBSSxFQUFFO3NCQUFFMEcsTUFBTSxFQUFFSCxZQUFZO3NCQUFFUixPQUFPLEVBQUVTO29CQUFhO2tCQUFFLENBQUU7O2dCQUczRixPQUFPO2tCQUFFM0YsTUFBTSxFQUFFLElBQUk7a0JBQUViLElBQUksRUFBRXdHO2dCQUFhLENBQUU7ZUFDN0MsQ0FBQyxPQUFPMUQsQ0FBQyxFQUFFO2dCQUNWeEIsT0FBTyxDQUFDTixLQUFLLENBQUM4QixDQUFDLENBQUM7O1lBRXBCLENBQUM7WUFFRDBDLE1BQU0sR0FBRyxZQUFXO2NBQ2xCLElBQUk7Z0JBQ0YsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDOUcsSUFBSSxFQUFFO2dCQUVoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUNhLEtBQUssQ0FBQzBELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQ3FELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ3BELE9BQU8sRUFBRTtlQUN0RSxDQUFDLE9BQU9KLENBQUMsRUFBRTtnQkFDVnhCLE9BQU8sQ0FBQ04sS0FBSyxDQUFDOEIsQ0FBQyxDQUFDOztZQUVwQixDQUFDOztVQUNGdEQ7Ozs7Ozs7Ozs7O1VDMUhEOztVQUVBK0Q7WUFDQTNGO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEE7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQWFPO1VBQVUsTUFBZ0IrSSxJQUFRLFNBQVFwSixvQkFBb0I7WUFDcEUsS0FBSyxHQUFHLElBQUkwSCxHQUFHLEVBQUU7WUFDakI7OztZQUdBLFVBQVUsR0FBRyxJQUFJQSxHQUFHLEVBQUU7WUFDWnpILE9BQU8sR0FBRyxJQUFJO1lBQ2RVLFFBQVE7WUFDUmlFLFNBQVM7WUFDVEQsRUFBRTtZQUNaLGNBQWMsR0FBa0IsRUFBRTtZQUNsQyxTQUFTLEdBQWtCLEVBQUU7WUFDbkJ2RSxhQUFhO1lBRWJpSixNQUFNLEdBQWtCLEVBQUU7WUFFcEMsSUFBSUMsYUFBYTtjQUNoQixPQUFPLElBQUksQ0FBQ2xKLGFBQWEsQ0FBQ2tKLGFBQWEsQ0FBQyxJQUFJLENBQUNyQyxhQUFhLEVBQUUsQ0FBQztZQUM5RDtZQUNBLFlBQVk7WUFFWixJQUFJc0MsUUFBUTtjQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdEI7WUFFUUMsS0FBSyxDQUFDbEksUUFBUTtjQUNyQixPQUFPLElBQUksQ0FBQ0EsUUFBUSxDQUFDO1lBQ3RCO1lBRUEsSUFBSVUsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDNUIsYUFBYSxDQUFDNEIsS0FBSztZQUNoQztZQUVBLElBQUk3QixRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUNDLGFBQWEsQ0FBQ0QsUUFBUSxJQUFJLENBQUNzRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRjtZQUVBLE1BQU07WUFDTixJQUFJK0UsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQSxJQUFJQSxLQUFLLENBQUNDLENBQVU7Y0FDbkIsSUFBSUEsQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLE1BQU0sR0FBR0EsQ0FBQztjQUNmLElBQUksQ0FBQ2xKLFlBQVksRUFBRTtZQUNwQjtZQUVBLElBQUltSixNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUN2SixhQUFhLEVBQUV1SixNQUFNO1lBQ2xDO1lBRUEsWUFBWTtZQUNaLFlBQVksR0FBRyxLQUFLO1lBQ3BCLE1BQU0sR0FBRyxLQUFLO1lBQ2QsYUFBYTtZQUViNUk7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNhLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDZ0ksVUFBVSxDQUFDO1lBQzFDO1lBRVUsTUFBTXpJLElBQUksQ0FBQzBJLFNBQW1DLEVBQUU7Y0FDekQsSUFBSTtnQkFDSCxJQUFJbEMsRUFBRTtnQkFDTixJQUFJa0MsTUFBTSxDQUFDbEMsRUFBRSxFQUFFQSxFQUFFLEdBQUdrQyxNQUFNLENBQUNsQyxFQUFFO2dCQUU3QixNQUFNdEcsV0FBVyxHQUFHQyxRQUFRLElBQUksSUFBSSxDQUFDa0ksS0FBSyxDQUFDbEksUUFBUSxDQUFDO2dCQUVwRCxJQUFJLENBQUNsQixhQUFhLEdBQUcsSUFBSTBKLDRCQUFhLENBQUMsSUFBSSxFQUFFekksV0FBVyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkwSSxxQkFBZSxDQUFDLElBQUksRUFBRTFJLFdBQVcsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJMkkscUJBQWUsQ0FBQyxJQUFJLEVBQUUzSSxXQUFXLENBQUM7Z0JBRTFELElBQUksQ0FBQ3NHLEVBQUUsRUFBRTtrQkFDUixJQUFJLENBQUNkLE9BQU8sQ0FBQyxlQUFlLENBQUM7O2dCQUc5QixNQUFNLElBQUksQ0FBQ3pHLGFBQWEsQ0FBQ2UsSUFBSSxDQUFDd0csRUFBRSxDQUFDO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQ2lCLE1BQU0sR0FBRyxDQUFDLEVBQUU7a0JBQ2hELElBQUksQ0FBQzlGLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUzs7Z0JBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtnQkFFbEIsSUFBSSxDQUFDK0QsT0FBTyxDQUFDLGVBQWUsQ0FBQztlQUM3QixDQUFDLE9BQU90QixDQUFDLEVBQUU7Z0JBQ1h4QixPQUFPLENBQUNOLEtBQUssQ0FBQyxvQkFBb0IsRUFBRThCLENBQUMsQ0FBQzs7WUFFeEM7WUFFVXFFLFVBQVUsR0FBRyxNQUFLO2NBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTTs7Y0FFbkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sSUFBSSxDQUFDLGFBQWE7Y0FFakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJM0Usb0JBQWMsRUFBRTtjQUN6QyxJQUFJLElBQUksQ0FBQ2dGLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDNUUsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7Y0FDbkUsTUFBTTZFLE9BQU8sR0FBRyxNQUFLO2dCQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUk7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUM3RSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBR0MsU0FBUztjQUMvQixDQUFDO2NBQ0QsSUFBSSxDQUFDMUQsRUFBRSxDQUFDLGVBQWUsRUFBRXNJLE9BQU8sQ0FBQztjQUNqQyxPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzFCLENBQUM7WUFFRG5JLFVBQVUsR0FBRzFCLEtBQUssSUFBSSxJQUFJLENBQUNELGFBQWEsQ0FBQzJCLFVBQVUsQ0FBQzFCLEtBQUssQ0FBQztZQUUxRDhKLGdCQUFnQixDQUFDeEYsRUFBVSxFQUFFeUYsS0FBYTtjQUN6QyxJQUFJLElBQUksQ0FBQ2hLLGFBQWEsRUFBRTtZQUN6QjtZQUVBc0IsR0FBRyxDQUFDZSxJQUFJLEVBQUV0QixJQUFJLEdBQUcsS0FBSztjQUNyQjtjQUNBLElBQUlBLElBQUksRUFBRTtnQkFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUl1RyxHQUFHLENBQUMxQixNQUFNLENBQUNyQyxPQUFPLENBQUNsQixJQUFJLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDckMsYUFBYSxDQUFDd0QsSUFBSSxDQUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQzs7Y0FHcEM7Y0FDQSxJQUFJLENBQUNLLFVBQVUsQ0FBQ3FELE9BQU8sQ0FBQzdFLFFBQVEsSUFBRztnQkFDbEMsSUFBSW1CLElBQUksQ0FBQzRILGNBQWMsQ0FBQy9JLFFBQVEsQ0FBQyxFQUFFO2tCQUNsQyxJQUFJLENBQUNBLFFBQVEsQ0FBQyxHQUFHbUIsSUFBSSxDQUFDbkIsUUFBUSxDQUFDOztjQUVqQyxDQUFDLENBQUM7Y0FFRixJQUFJLENBQUNkLFlBQVksRUFBRTtZQUNwQjtZQUVBOzs7O1lBSUE4SixTQUFTO2NBQ1IsTUFBTXBKLE1BQU0sR0FBRyxFQUFFO2NBQ2pCLE1BQU1xSixTQUFTLEdBQUcsSUFBSSxDQUFDaEIsUUFBUSxDQUFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDVyxRQUFRLEdBQUcsSUFBSSxDQUFDekcsVUFBVTtjQUV4RXlILFNBQVMsQ0FBQ3BFLE9BQU8sQ0FBQ3FFLEtBQUssSUFBRztnQkFDekIsSUFBSSxJQUFJLENBQUNILGNBQWMsQ0FBQ0csS0FBSyxDQUFDLEVBQUV0SixNQUFNLENBQUNzSixLQUFLLENBQUMsR0FBRyxJQUFJLENBQUNBLEtBQUssQ0FBQztjQUM1RCxDQUFDLENBQUM7Y0FDRixPQUFPdEosTUFBTTtZQUNkO1lBRUF1SixnQkFBZ0I7Y0FDZixPQUFPLElBQUksQ0FBQzNILFVBQVU7WUFDdkI7O1VBQ0FiOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xLSyxNQUFPK0gsZUFBZTtZQUMzQixPQUFPO1lBRVAsY0FBYztZQUNkLFNBQVM7WUFDVCxZQUFZO1lBQ1pqSixZQUFZb0IsTUFBTSxFQUFFZCxXQUFXO2NBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUdjLE1BQU07Y0FDckIsSUFBSSxDQUFDLFlBQVksR0FBR2QsV0FBVztjQUUvQixJQUFJLENBQUNGLElBQUksRUFBRTtZQUNaO1lBRUFBLElBQUksR0FBRyxZQUFXO2NBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUM7Y0FDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztjQUU5QyxJQUFJLENBQUMsT0FBTyxDQUFDa0IsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSTtZQUM5QixDQUFDO1lBRUQ7Ozs7O1lBS0FBLElBQUksR0FBRyxNQUFPRSxNQUFXLElBQUk7Y0FDNUIsSUFBSTtnQkFDSCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU10QyxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDbEQsSUFBSUEsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7a0JBQ25DLE1BQU11QyxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDSCxJQUFJLENBQUNFLE1BQU0sQ0FBQztrQkFFeEQsSUFBSUMsU0FBUyxFQUFFYyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQzVCLEdBQUcsQ0FBQ2MsU0FBUyxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDOztnQkFHOUQ7Z0JBRUEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBRXJCLE1BQU1jLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQ2EsVUFBVSxDQUFDN0IsTUFBTSxDQUFDO2dCQUNoRCxJQUFJLENBQUNnQixVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQ2tHLEtBQUssR0FBRyxLQUFLO2dCQUUzQyxJQUFJbEcsVUFBVSxFQUFFO2tCQUNmLElBQUltSCxJQUFJLEdBQUcsSUFBSTtrQkFDZjFFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDMUMsVUFBVSxDQUFDLENBQUM0QyxPQUFPLENBQUN3RSxHQUFHLElBQUc7b0JBQ3JDLElBQUlDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDQyxRQUFRLENBQUMzSixNQUFNO29CQUNsRCxJQUFJMEosUUFBUSxDQUFDRCxHQUFHLENBQUMsS0FBS3BILFVBQVUsQ0FBQ29ILEdBQUcsQ0FBQyxFQUFFRCxJQUFJLEdBQUcsS0FBSztrQkFDcEQsQ0FBQyxDQUFDO2tCQUNGLElBQUksQ0FBQ0EsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQzlHLElBQUksQ0FBQ0wsVUFBVSxDQUFDOztnQkFHdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQ2tHLEtBQUssR0FBRyxJQUFJO2dCQUN6QixPQUFPO2tCQUFFbkcsTUFBTSxFQUFFO2dCQUFJLENBQUU7ZUFDdkIsQ0FBQyxPQUFPUSxHQUFHLEVBQUU7Z0JBQ2JDLE9BQU8sQ0FBQ04sS0FBSyxDQUFDLFlBQVksRUFBRUssR0FBRyxDQUFDRSxPQUFPLENBQUM7Z0JBQ3hDLE9BQU87a0JBQUVWLE1BQU0sRUFBRSxLQUFLO2tCQUFFRyxLQUFLLEVBQUVLO2dCQUFHLENBQUU7ZUFDcEMsU0FBUztnQkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDZCxRQUFRLEdBQUcsS0FBSzs7WUFFL0IsQ0FBQztZQUVEb0IsVUFBVSxHQUFHLE1BQU03QixNQUFNLElBQUc7Y0FDM0I7Y0FDQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQ3BDLFFBQVEsRUFBRTtjQUM1QixNQUFNa0UsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQzVCLElBQUksQ0FBQ0YsTUFBTSxDQUFDO2NBQ2xELElBQUksQ0FBQzhCLFFBQVEsQ0FBQ2YsTUFBTSxFQUFFLE1BQU0sa0JBQWtCO2NBQzlDLE9BQU9lLFFBQVEsQ0FBQzVCLElBQUk7WUFDckIsQ0FBQzs7VUFDRFI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVEO1VBR0E7VUFFQTtVQUVPO1VBQVUsTUFDWDZILGFBQWMsU0FBUTlKLG9CQUFrQjtZQUM3QyxTQUFTLEdBQUdzRSxVQUFVLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTTtZQUN2QyxNQUFNO1lBQ04sSUFBSXhDLEtBQUs7Y0FDUixPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ25CO1lBRUEsUUFBUTtZQUNSLFNBQVM7WUFDVCxVQUFVO1lBQ1YsYUFBYTtZQUNiLGFBQWE7WUFDYixPQUFPLEdBQUcsS0FBSztZQUVmLElBQUkySCxNQUFNO2NBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFQSxNQUFNO1lBQzlCO1lBRUEsSUFBSXBDLFlBQVk7Y0FDZixPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzFCO1lBRUEsR0FBRztZQUVILElBQUlwSCxRQUFRO2NBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDc0UsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFDckY7WUFFQSxPQUFPO1lBQ1AsWUFBWTtZQUNaOzs7WUFHQSxRQUFRO1lBQ1I7Ozs7WUFJQSxTQUFTO1lBRVQsSUFBSW1HLFFBQVE7Y0FDWCxPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3RCO1lBQ0E5SixZQUFZb0IsTUFBTSxFQUFFZCxXQUFXO2NBQzlCLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxZQUFZLEdBQUdBLFdBQVc7Y0FDL0IsTUFBTTtnQkFBRXNELEVBQUU7Z0JBQUVDO2NBQVMsQ0FBRSxHQUFHekMsTUFBTTtjQUNoQyxJQUFJLENBQUMySSxJQUFJLEdBQUd0RSxJQUFJLENBQUN1RSxLQUFLLENBQUN2RSxJQUFJLENBQUN3RSxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtjQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFHN0ksTUFBTTtjQUVyQixJQUFJLENBQUN3QyxFQUFFLElBQUksQ0FBQ0MsU0FBUyxFQUFFLE1BQU0sSUFBSUUsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO2NBQ3pFLElBQUksQ0FBQyxhQUFhLEdBQUdILEVBQUU7Y0FDdkIsSUFBSSxDQUFDLFVBQVUsR0FBR0MsU0FBUztjQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHQyx1QkFBYyxDQUFDcEQsR0FBRyxDQUFDa0QsRUFBRSxDQUFDO2NBQ3RDTCxVQUFVLENBQUNTLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO2NBQzVEVixVQUFVLENBQUNTLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQzlEO1lBRUFqRCxVQUFVLENBQUMxQixLQUFLO2NBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBR0EsS0FBSztjQUNyQixJQUFJLENBQUNHLFlBQVksRUFBRTtZQUNwQjtZQUVBVyxJQUFJLEdBQUcsT0FBT3dHLEtBQWtDckMsU0FBUyxLQUFJO2NBQzVELElBQUk7Z0JBQ0gsTUFBTUosUUFBUSxHQUFvQixNQUFNQyxtQkFBUyxDQUFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxTQUFTLEdBQUd5RCxRQUFRO2dCQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHQSxRQUFRLENBQUNQLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUUxQyxJQUFJZ0QsRUFBRSxFQUFFO2tCQUNQLE1BQU0sSUFBSSxDQUFDdEYsSUFBSSxDQUFDO29CQUFFc0Y7a0JBQUUsQ0FBRSxDQUFDO2lCQUN2QixNQUFNO2tCQUNOLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQ0EsRUFBRSxDQUFDOztnQkFFNUI7ZUFDQSxDQUFDLE9BQU9wQyxDQUFDLEVBQUU7Z0JBQ1h4QixPQUFPLENBQUNOLEtBQUssQ0FBQzhCLENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVPUCxnQkFBZ0IsR0FBRyxNQUFLO2NBQy9CLElBQUksQ0FBQ3hFLFlBQVksRUFBRTtZQUNwQixDQUFDO1lBRUQ4SSxhQUFhLENBQUM3RyxJQUFJO2NBQ2pCLE1BQU1LLFVBQVUsR0FBR2tELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDeEQsSUFBSSxDQUFDO2NBQ3BDLE1BQU13SSxTQUFTLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDL0o7Y0FBTSxDQUFFO2NBRTlDLE9BQU80QixVQUFVLENBQUNvSSxJQUFJLENBQUNDLElBQUksSUFBRztnQkFDN0IsSUFBSUEsSUFBSSxLQUFLLElBQUksRUFBRSxPQUFPLEtBQUs7Z0JBQy9CLE9BQU9GLFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLEtBQUsxSSxJQUFJLENBQUMwSSxJQUFJLENBQUM7Y0FDdEMsQ0FBQyxDQUFDO1lBQ0g7WUFFQSxNQUFNOUksSUFBSSxDQUFDRSxTQUFjLEVBQUU7Y0FDMUIsSUFBSW9GLEVBQUUsR0FBR3BGLE1BQU0sQ0FBQ29GLEVBQUU7Y0FDbEJBLEVBQUUsR0FBR0EsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUNBLEVBQUU7Y0FFMUIsSUFBSTtnQkFDSCxJQUFJLENBQUNBLEVBQUUsRUFBRSxNQUFNLGdCQUFnQjtnQkFFL0IsTUFBTXpHLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUN5RyxFQUFFLENBQUM7Z0JBRTFDLElBQUksQ0FBQyxPQUFPLENBQUM5RCxNQUFNLEdBQUcsSUFBSTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDUixNQUFNLENBQUM7Z0JBQ3ZDLE9BQU87a0JBQUVvQyxNQUFNLEVBQUUsSUFBSTtrQkFBRWIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUN2QjtnQkFBTSxDQUFFO2VBQ3BELENBQUMsT0FBT3FFLENBQUMsRUFBRTtnQkFDWHhCLE9BQU8sQ0FBQ04sS0FBSyxDQUFDOEIsQ0FBQyxDQUFDO2dCQUNoQixPQUFPQSxDQUFDOztZQUVWO1lBRUE7Ozs7Ozs7WUFPQSxZQUFZLEdBQUcsTUFBTW9DLEVBQUUsSUFBRztjQUN6QixNQUFNa0QsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQ3hJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFc0YsRUFBRSxDQUFDO2NBQzlELElBQUksQ0FBQ2tELFFBQVEsRUFBRSxPQUFPOUcsT0FBTyxDQUFDbUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2NBRXJELElBQUksQ0FBQyxPQUFPLENBQUN4RyxHQUFHLENBQUNtSixRQUFRLENBQUMzSixNQUFNLENBQUM7Y0FDakMsSUFBSSxDQUFDLFNBQVMsR0FBRzJKLFFBQVE7Y0FFekJBLFFBQVEsQ0FBQ2pKLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztjQUMzQyxPQUFPaUosUUFBUTtZQUNoQixDQUFDO1lBRUQ7OztZQUdBLGVBQWUsR0FBRyxZQUFXO2NBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2NBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUNuSixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQ1IsTUFBTSxDQUFDO2NBQ3ZDLElBQUksQ0FBQzJGLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQztZQUVELE1BQU1qRCxJQUFJLENBQUNuQixJQUFJLEVBQUUySSxPQUFPLEdBQUcsS0FBSztjQUMvQixJQUFJO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUM5QixhQUFhLEVBQUU7Z0JBQ3pCN0csSUFBSSxDQUFDdUUsT0FBTyxHQUFHLElBQUksQ0FBQzdHLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFFbkQ7Z0JBQ0EsTUFBTWtMLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQ0Msb0JBQW9CLENBQUM3SSxJQUFJLENBQUM7Z0JBQ3hELElBQUk0SSxVQUFVLENBQUN6QyxNQUFNLEVBQUUsT0FBTztrQkFBRW5GLEtBQUssRUFBRSxZQUFZO2tCQUFFOEgsTUFBTSxFQUFFRjtnQkFBVSxDQUFFO2dCQUV6RSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUN6SSxNQUFNLENBQUNILElBQUksRUFBRTJJLE9BQU8sQ0FBQztnQkFFMUMsT0FBTyxJQUFJO2VBQ1gsQ0FBQyxPQUFPN0YsQ0FBQyxFQUFFO2dCQUNYeEIsT0FBTyxDQUFDTixLQUFLLENBQUMsY0FBYyxFQUFFOEIsQ0FBQyxDQUFDdkIsT0FBTyxDQUFDOztZQUUxQztZQUVBLE1BQU0sT0FBTyxDQUFDdkIsSUFBSTtjQUNqQixJQUFJO2dCQUNILElBQUksQ0FBQyxJQUFJLENBQUM2RyxhQUFhLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQzFHLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDa0YsRUFBRSxFQUFFbEYsSUFBSSxDQUFDO2dCQUN2QztlQUNBLENBQUMsT0FBTzhDLENBQUMsRUFBRTtZQUNiO1lBRUEsTUFBTStGLG9CQUFvQixDQUFDN0ksSUFBSTtjQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQ21HLE1BQU0sRUFBRSxPQUFPLEVBQUU7Y0FFbEQsTUFBTTRDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDdkgsR0FBRyxDQUFDdUcsS0FBSyxJQUMxRCxJQUFJLENBQUMsTUFBTSxDQUNUOUUsS0FBSyxDQUFDOEUsS0FBSyxDQUFDLENBQ1p6QixNQUFNLENBQUN0RyxJQUFJLENBQUMrSCxLQUFLLENBQUMsQ0FBQyxDQUNuQmxFLEtBQUssRUFBRSxDQUNQbUYsSUFBSSxDQUFDbkYsS0FBSyxJQUFHO2dCQUNiLElBQUlBLEtBQUssRUFBRTtrQkFDVixPQUFPa0UsS0FBSzs7Z0JBRWIsT0FBTyxJQUFJO2NBQ1osQ0FBQyxDQUFDLENBQ0g7Y0FFRCxNQUFNa0IsZUFBZSxHQUFHLENBQUMsTUFBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLGFBQWEsQ0FBQyxFQUFFdEosTUFBTSxDQUFDc0ksS0FBSyxJQUFJQSxLQUFLLEtBQUssSUFBSSxDQUFDO2NBQzFGLE9BQU9rQixlQUFlO1lBQ3ZCOztVQUNBeko7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDak1LLE1BQU84SCxlQUFlO1lBQzNCLE9BQU87WUFDUCxZQUFZO1lBQ1poSixZQUFZb0IsTUFBTSxFQUFFZCxXQUFXO2NBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUdjLE1BQU07Y0FDckIsSUFBSSxDQUFDLFlBQVksR0FBR2QsV0FBVztjQUMvQixJQUFJLENBQUNGLElBQUksRUFBRTtZQUNaO1lBRUFBLElBQUk7Y0FDSCxJQUFJLENBQUMsT0FBTyxDQUFDeUMsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSTtjQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDb0UsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztjQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDQSxJQUFJO1lBQzlCO1lBRUFuRSxJQUFJLEdBQUcsT0FBT25CLElBQUksR0FBRzZDLFNBQVMsS0FBSTtjQUNqQyxJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDdkMsSUFBSTdDLElBQUksRUFBRTtrQkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDZixHQUFHLENBQUNlLElBQUksQ0FBQzs7Z0JBR3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDNkcsYUFBYSxFQUFFO2tCQUNoQzs7Z0JBR0QsTUFBTXhHLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDbUUsYUFBYSxFQUFFO2dCQUUvQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM3RyxhQUFhLEVBQUU7a0JBQy9CLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQ0EsYUFBYSxDQUFDd0QsSUFBSSxDQUFDZCxVQUFVLENBQUM7O2dCQUdsRCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUNBLFVBQVUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQ3RDLFlBQVksRUFBRTtnQkFFM0IsT0FBTztrQkFBRThDLE1BQU0sRUFBRTtnQkFBSSxDQUFFO2VBQ3ZCLENBQUMsT0FBT2lDLENBQUMsRUFBRTtnQkFDWHhCLE9BQU8sQ0FBQ04sS0FBSyxDQUFDLGNBQWMsRUFBRThCLENBQUMsQ0FBQzs7WUFFbEMsQ0FBQztZQUVELFFBQVEsR0FBRyxNQUFNekMsVUFBVSxJQUFHO2NBQzdCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUNuQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDUixRQUFRLEVBQUU7Z0JBQ3RELE1BQU1rRSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDMUQsUUFBUSxDQUFDcUgsT0FBTyxDQUFDbEYsVUFBVSxDQUFDO2dCQUNoRSxJQUFJLENBQUN1QixRQUFRLEVBQUVmLE1BQU0sRUFBRSxNQUFNZSxRQUFRLENBQUNaLEtBQUs7Z0JBRTNDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQ3JELGFBQWEsRUFBRTtrQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQ0EsYUFBYSxDQUFDd0QsSUFBSSxDQUFDUyxRQUFRLENBQUM1QixJQUFJLEVBQUUsSUFBSSxDQUFDO2tCQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDckMsYUFBYSxDQUFDSSxZQUFZLEVBQUU7O2dCQUUxQyxPQUFPO2tCQUFFOEMsTUFBTSxFQUFFLElBQUk7a0JBQUViLElBQUksRUFBRTRCO2dCQUFRLENBQUU7ZUFDdkMsQ0FBQyxPQUFPWixLQUFLLEVBQUU7Z0JBQ2ZNLE9BQU8sQ0FBQ04sS0FBSyxDQUFDLGtCQUFrQixFQUFFQSxLQUFLLENBQUM7Z0JBQ3hDLE9BQU87a0JBQUVILE1BQU0sRUFBRSxLQUFLO2tCQUFFRztnQkFBSyxDQUFFOztZQUVqQyxDQUFDO1lBRUR1RSxPQUFPLEdBQUcsSUFBSSxDQUFDcEUsSUFBSTtZQUVuQm1FLElBQUksR0FBRyxNQUFLO2NBQ1gsTUFBTXBILFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQztjQUVuRCxJQUFJLENBQUNBLFFBQVEsQ0FBQ2tLLFFBQVEsQ0FBQzNKLE1BQU0sQ0FBQzhGLE9BQU8sRUFBRTtnQkFDdENqRCxPQUFPLENBQUNtRSxJQUFJLENBQUMseUJBQXlCLENBQUM7Z0JBQ3ZDOztjQUdELElBQUksQ0FBQyxRQUFRLENBQUN2SCxRQUFRLENBQUNrSyxRQUFRLENBQUMzSixNQUFNLENBQUM7Y0FFdkM7WUFDRCxDQUFDOzs7VUFDRGU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVEO1VBQ0E7VUFDQTtVQUNBO1VBS00sTUFBa0I0QyxjQUFlLFNBQVE3RSxvQkFBdUI7WUFDckUsT0FBTyxHQUFHLElBQUkwSCxHQUFHLEVBQUU7WUFDbkIsU0FBUztZQUNULFFBQVEsR0FBRyxHQUFHO1lBQ2QsT0FBTztZQUNQM0csWUFBWThLLE1BQU07Y0FDakIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMxSyxJQUFJLEVBQUU7WUFDWjtZQUVBLGFBQWE7WUFDYixNQUFNQSxJQUFJO2NBQ1QsSUFBSSxJQUFJLENBQUNpRSxLQUFLLEVBQUUsT0FBTyxJQUFJO2NBQzNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLElBQUksQ0FBQyxhQUFhO2NBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSUgsb0JBQWMsRUFBRTtjQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU1FLG1CQUFTLENBQUMxRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztjQUVsRCxJQUFJLENBQUMsYUFBYSxDQUFDNEQsT0FBTyxFQUFFO2NBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUdDLFNBQVM7Y0FDOUIsSUFBSSxDQUFDRixLQUFLLEdBQUcsSUFBSTtZQUNsQjtZQUVBLE1BQU0vQyxJQUFJLENBQUN1QyxTQUFpQixFQUFFK0MsRUFBRSxHQUFHLEtBQUs7Y0FDdkMsTUFBTTNGLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDMkMsRUFBRSxDQUFDQyxTQUFTLENBQUM7Y0FDMUMsSUFBSSxDQUFDNUMsS0FBSyxFQUFFLE1BQU0sSUFBSThDLEtBQUssQ0FBQyxTQUFTRixTQUFTLGtCQUFrQixDQUFDO2NBQ2pFO2NBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUNrSCxHQUFHLENBQUNsSCxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDbEQsR0FBRyxDQUFDa0QsU0FBUyxFQUFFLElBQUk4QyxHQUFHLEVBQUUsQ0FBQztjQUN4RTtjQUNBLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQ29FLEdBQUcsQ0FBQ2xILFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUNuRCxHQUFHLENBQUNtRCxTQUFTLENBQUMsQ0FBQ2tILEdBQUcsQ0FBQ25FLEVBQUUsQ0FBQyxFQUFFO2dCQUN2RSxNQUFNa0QsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUNwSixHQUFHLENBQUNtRCxTQUFTLENBQUMsQ0FBQ25ELEdBQUcsQ0FBQ2tHLEVBQUUsQ0FBQztnQkFDcEQsT0FBT2tELFFBQVEsQ0FBQ3BKLEdBQUcsRUFBRTs7Y0FHdEI7OztjQUlBLE1BQU1vSixRQUFRLEdBQUcsSUFBSWtCLGVBQVEsQ0FBQy9KLEtBQUssRUFBRTtnQkFBRTJGO2NBQUUsQ0FBRSxDQUFDO2NBQzVDLE1BQU1rRCxRQUFRLENBQUNwSixHQUFHLEVBQUU7Y0FFcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQ0EsR0FBRyxDQUFDbUQsU0FBUyxDQUFDLENBQUNsRCxHQUFHLENBQUNtSixRQUFRLENBQUMxRCxVQUFVLEVBQUUwRCxRQUFRLENBQUM7Y0FFOUQsT0FBT0EsUUFBUTtZQUNoQjtZQUVBOzs7Ozs7Ozs7O1lBV0EsTUFBTXpELE9BQU8sQ0FBQ2xILEtBQUssRUFBRTBFLFNBQVM7Y0FDN0IsTUFBTW9ILFFBQVEsR0FBRzlMLEtBQUssQ0FBQytELEdBQUcsQ0FBRUUsSUFBSSxJQUFJO2dCQUNuQyxNQUFNMEcsUUFBUSxHQUFHLElBQUlrQixlQUFRLENBQUNuSCxTQUFTLENBQUM7Z0JBQ3hDaUcsUUFBUSxDQUFDb0IsU0FBUyxDQUFDOUgsSUFBSSxDQUFDO2dCQUN4QixPQUFPMEcsUUFBUTtjQUNoQixDQUFDLENBQUM7Y0FFRixNQUFNN0ksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMyQyxFQUFFLENBQUNDLFNBQVMsQ0FBQztjQUMxQyxNQUFNc0gsUUFBUSxHQUFHLEVBQUU7Y0FDbkIsTUFBTXhELE1BQU0sR0FBRyxFQUFFO2NBQ2pCLE9BQU9zRCxRQUFRLENBQUNwRCxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixNQUFNdUQsS0FBSyxHQUFHSCxRQUFRLENBQUNJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDL0MsTUFBTTNKLElBQUksR0FBRzBKLEtBQUssQ0FBQ2xJLEdBQUcsQ0FBRUUsSUFBSSxJQUFLQSxJQUFJLENBQUNtRyxTQUFTLEVBQUUsQ0FBQztnQkFDbEQ1QixNQUFNLENBQUNHLElBQUksQ0FBQ3BHLElBQUksQ0FBQztnQkFDakJ5SixRQUFRLENBQUNyRCxJQUFJLENBQUM3RyxLQUFLLENBQUM0RixPQUFPLENBQUNuRixJQUFJLENBQUMsQ0FBQzs7Y0FFbkMsSUFBSTtnQkFDSCxNQUFNNEosT0FBTyxHQUFHLE1BQU1WLE9BQU8sQ0FBQ1csVUFBVSxDQUFDSixRQUFRLENBQUM7Z0JBQ2xELE1BQU1LLFFBQVEsR0FBRyxDQUFDckQsTUFBTSxFQUFFWixLQUFLLE1BQU07a0JBQUUsR0FBR1ksTUFBTTtrQkFBRVosS0FBSztrQkFBRTdGLElBQUksRUFBRWlHLE1BQU0sQ0FBQ0osS0FBSztnQkFBQyxDQUFFLENBQUM7Z0JBQy9FLE1BQU1hLE1BQU0sR0FBR2tELE9BQU8sQ0FBQ3BJLEdBQUcsQ0FBQ3NJLFFBQVEsQ0FBQyxDQUFDckssTUFBTSxDQUFFZ0gsTUFBTSxJQUFLQSxNQUFNLENBQUM1RixNQUFNLEtBQUssVUFBVSxDQUFDO2dCQUNyRixJQUFJLENBQUM2RixNQUFNLENBQUNQLE1BQU0sRUFBRSxPQUFPO2tCQUFFdEYsTUFBTSxFQUFFO2dCQUFJLENBQUUsQ0FBQyxLQUN2QztrQkFDSixPQUFPO29CQUFFQSxNQUFNLEVBQUUsS0FBSztvQkFBRTZGO2tCQUFNLENBQUU7O2VBRWpDLENBQUMsT0FBTzVELENBQUMsRUFBRTtnQkFDWCxPQUFPO2tCQUFFakMsTUFBTSxFQUFFLEtBQUs7a0JBQUU2RixNQUFNLEVBQUU1RDtnQkFBQyxDQUFFOztZQUVyQztZQUVBLE9BQU8sSUFBSSxHQUFHLElBQUltQyxHQUFHLEVBQUU7WUFFdkIsT0FBT2pHLEdBQUcsQ0FBQ29LLE1BQU07Y0FDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNELE1BQU0sQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQ3BLLEdBQUcsQ0FBQ29LLE1BQU0sQ0FBQztjQUN2RCxNQUFNbEgsRUFBRSxHQUFHLElBQUlFLGNBQWMsQ0FBQ2dILE1BQU0sQ0FBQztjQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDbkssR0FBRyxDQUFDbUssTUFBTSxFQUFFbEgsRUFBRSxDQUFDO2NBQ3pCLE9BQU9BLEVBQUU7WUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JHRDtVQUNBO1VBT00sTUFBT29ILFFBQVMsU0FBUS9MLG9CQUF3QjtZQUNyRCxPQUFPLEdBQVEsRUFBRTtZQUNqQixJQUFJa0IsTUFBTTtjQUNULE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDcEI7WUFDQSxHQUFHO1lBQ0hzTCxLQUFLLEdBQUcsS0FBSztZQUNiLE1BQU07WUFDTixNQUFNO1lBQ04sV0FBVztZQUNYLE1BQU07WUFFTixPQUFPO1lBQ1AsSUFBSTdDLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBRUEsSUFBSXhDLFVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3hCO1lBQ0FwRyxZQUFZaUIsS0FBSyxFQUFFUyxPQUFrQjtjQUFFa0YsRUFBRSxFQUFFO1lBQUssQ0FBRTtjQUNqRCxLQUFLLEVBQUU7Y0FFUCxNQUFNO2dCQUFFQTtjQUFFLENBQUUsR0FBR2xGLElBQUk7Y0FDbkIsSUFBSSxDQUFDLE1BQU0sR0FBR1QsS0FBSztjQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHK0osUUFBUSxDQUFDVSxZQUFZLEVBQUU7Y0FDMUMsSUFBSSxDQUFDOUUsRUFBRSxFQUFFNUQsT0FBTyxDQUFDMkksS0FBSyxDQUFDLElBQUksRUFBRS9FLEVBQUUsRUFBRWxGLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2NBQ3hELElBQUksQ0FBQyxHQUFHLEdBQUdrRixFQUFFLEtBQUssS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUdBLEVBQUU7Y0FDL0MsSUFBSSxDQUFDLE1BQU0sR0FBR0EsRUFBRSxLQUFLLEtBQUs7Y0FDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUNnRixLQUFLLEdBQUcsYUFBYSxHQUFHLEtBQUs7Y0FFaEQsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUNoRixFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUc7WUFDekM7WUFFQSxRQUFRO1lBQ1IsTUFBTWxHLEdBQUc7Y0FDUixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVE7O2NBR3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSXdELG9CQUFjLEVBQUU7Y0FFcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHQyxTQUFTO2VBQ3pCLE1BQU07Z0JBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQzdELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUNnSyxJQUFJLENBQUN0SCxJQUFJLElBQUc7a0JBQ3JDLElBQUksQ0FBQ0EsSUFBSSxFQUFFO29CQUNWLElBQUksQ0FBQyxRQUFRLENBQUNrQixPQUFPLENBQUMsS0FBSyxDQUFDO29CQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUs7b0JBRXBCLElBQUksQ0FBQzRHLFNBQVMsQ0FBQztzQkFBRXRFLEVBQUUsRUFBRSxJQUFJLENBQUM7b0JBQUcsQ0FBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHckMsU0FBUztvQkFDekI7O2tCQUdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtrQkFDbkIsSUFBSSxDQUFDMkcsU0FBUyxDQUFDOUgsSUFBSSxDQUFDO2tCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDa0IsT0FBTyxDQUFDLElBQUksQ0FBQztrQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBR0MsU0FBUztnQkFDMUIsQ0FBQyxDQUFDOztjQUdILE9BQU8sSUFBSSxDQUFDLFFBQVE7WUFDckI7WUFFQTJHLFNBQVMsR0FBRyxDQUFDeEosSUFBSSxFQUFFMkksT0FBTyxHQUFHLEtBQUssS0FBSTtjQUNyQyxNQUFNd0IsS0FBSyxHQUFHNUcsTUFBTSxDQUFDQyxJQUFJLENBQUN4RCxJQUFJLENBQUM7Y0FFL0IsSUFBSW9LLE9BQU8sR0FBRyxLQUFLO2NBQ25CO2NBQ0EsSUFBSXpCLE9BQU8sRUFBRTtnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUc5RixTQUFTO2dCQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM2QixVQUFVOztjQUUvQixJQUFJLENBQUMxRSxJQUFJLENBQUNrRixFQUFFLEVBQUU7Z0JBQ2JsRixJQUFJLENBQUNrRixFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUc7O2NBRW5CLElBQUksQ0FBQzZFLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUs7Y0FDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDckYsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXOztjQUczQyxNQUFNMkYsU0FBUyxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDO2NBQU8sQ0FBRTtjQUNyQ0YsS0FBSyxDQUFDekcsT0FBTyxDQUFDN0UsUUFBUSxJQUFHO2dCQUN4QixJQUFJbUIsSUFBSSxDQUFDbkIsUUFBUSxDQUFDLEtBQUt3TCxTQUFTLENBQUN4TCxRQUFRLENBQUMsRUFBRTtnQkFDNUN3TCxTQUFTLENBQUN4TCxRQUFRLENBQUMsR0FBR21CLElBQUksQ0FBQ25CLFFBQVEsQ0FBQztnQkFDcEN1TCxPQUFPLEdBQUcsSUFBSTtjQUNmLENBQUMsQ0FBQztjQUVGLElBQUksQ0FBQyxPQUFPLEdBQUdDLFNBQVM7Y0FDeEIsSUFBSSxDQUFDdE0sWUFBWSxFQUFFO2NBQ25CLE9BQU9xTSxPQUFPO1lBQ2YsQ0FBQztZQUVEdkMsU0FBUztjQUNSLE1BQU1wSixNQUFNLEdBQUc7Z0JBQUUsR0FBRyxJQUFJLENBQUM7Y0FBTyxDQUFFO2NBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRUEsTUFBTSxDQUFDaUcsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2NBQzFEO2NBQ0EsT0FBT2pHLE1BQU07WUFDZDtZQUNBLE9BQU91TCxZQUFZO2NBQ2xCLE9BQU8sc0NBQXNDLENBQUNNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVUMsQ0FBQztnQkFDekUsSUFBSUMsQ0FBQyxHQUFJekcsSUFBSSxDQUFDd0UsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFJLENBQUM7a0JBQy9CdEIsQ0FBQyxHQUFHc0QsQ0FBQyxLQUFLLEdBQUcsR0FBR0MsQ0FBQyxHQUFJQSxDQUFDLEdBQUcsR0FBRyxHQUFJLEdBQUc7Z0JBQ3BDLE9BQU92RCxDQUFDLENBQUN3RCxRQUFRLENBQUMsRUFBRSxDQUFDO2NBQ3RCLENBQUMsQ0FBQztZQUNIO1lBRUF0SyxNQUFNLEdBQUcsT0FBT0gsSUFBUyxFQUFFMkksT0FBTyxLQUFJO2NBQ3JDLE1BQU15QixPQUFPLEdBQUcsSUFBSSxDQUFDWixTQUFTLENBQUN4SixJQUFJLEVBQUUySSxPQUFPLENBQUM7Y0FDN0MsSUFBSXlCLE9BQU8sRUFBRTtnQkFDWixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUNNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxJQUFJLENBQUMzTSxZQUFZLENBQUMsUUFBUSxDQUFDOztZQUU3QixDQUFDOztVQUNEeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0hEO1VBSU0sTUFBbUJtTCxZQUFhLFNBQVFwTixvQkFBNEI7VUFBR2lDO1VBRTdFLE1BQU1vTCxZQUFZLEdBQUcsSUFBSUQsWUFBWSxFQUFFIiwibmFtZXMiOlsiQ29sbGVjdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJsb2NhbGRiIiwiaXRlbXMiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInRyaWdnZXJFdmVudCIsImNvdW50ZXJzIiwidG90YWwiLCJwcm92aWRlciIsIm5leHQiLCJzb3J0QnkiLCJzb3J0RGlyZWN0aW9uIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwic2V0SXRlbXMiLCJ2YWx1ZXMiLCJpbml0Iiwic3BlY3MiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJicmlkZ2UiLCJnZXQiLCJzZXQiLCJDb2xsZWN0aW9uTG9jYWxQcm92aWRlciIsIm9uIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwic2V0T2ZmbGluZSIsInN0b3JlIiwiZXhwb3J0cyIsImZpbHRlciIsInBhcmVudCIsInBhcmVudEJyaWRnZSIsImxvYWQiLCJjdXN0b21GaWx0ZXIiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJkYXRhIiwibmV3SXRlbXMiLCJwcm9jZXNzRW50cmllcyIsInVwZGF0ZSIsImNvbmNhdCIsInByb3BlcnRpZXMiLCJsb2NhbExvYWRlZCIsImZldGNoaW5nIiwic3RhcnQiLCJsaW1pdCIsImhhc0xvY2FsUHJvdmlkZXIiLCJ1c2VMb2NhbCIsImxvY2FsSXRlbXMiLCJzdGF0dXMiLCJyZW1vdGVEYXRhIiwibGlzdCIsImVycm9yIiwicHJvY2Vzc1JlbW90ZUVudHJpZXMiLCJlbnRyaWVzIiwic2F2ZSIsImxvYWRlZCIsImV4YyIsImNvbnNvbGUiLCJtZXNzYWdlIiwibWFwIiwicmVjb3JkIiwiaXRlbSIsInJlbW90ZUxvYWQiLCJyZXNwb25zZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGIiLCJzdG9yZU5hbWUiLCJGYWN0b3J5UmVjb3JkcyIsIkVycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNvbm5lY3Rpb24iLCJQZW5kaW5nUHJvbWlzZSIsImRhdGFiYXNlIiwiREJNYW5hZ2VyIiwicmVhZHkiLCJyZXNvbHZlIiwidW5kZWZpbmVkIiwiZSIsIm9mZnNldCIsIm9yZGVyQnkiLCJ3aGVyZSIsInRvQXJyYXkiLCJjYWxsYmFjayIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImNvbnRyb2xzIiwiZm9yRWFjaCIsImNvbmRpdGlvbiIsImluY2x1ZGVzIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJmaXJzdCIsImxpdmUiLCJzdWJzY3JpYmUiLCJ0cmlnZ2VyIiwiZXJyIiwicHJvY2VzcyIsIm9mZmxpbmUiLCJnZXRQcm9wZXJ0aWVzIiwidG9TYXZlIiwiaW5zdGFuY2VJZCIsInNhdmVBbGwiLCJjb250cm9sIiwidXBzZXJ0Iiwib3JpZ2luYWxEYXRhIiwidHJhbnNhY3Rpb24iLCJpbnN0YW5jZUlkVG9JZE1hcCIsIk1hcCIsImlkIiwiYnVsa1B1dCIsIk1BWF9SRVRSSUVTIiwiQ0hVTktfU0laRSIsInN5bmMiLCJwdWJsaXNoIiwidG9TeW5jIiwid2FybiIsImJ1bGtTYXZlIiwic2VuZENodW5rIiwiY2h1bmsiLCJpbmRleCIsInJldHJpZXMiLCJzdWNjZXNzIiwic3BsaXREYXRhSW50b0NodW5rcyIsImNodW5rcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic2xpY2UiLCJlcXVhbHMiLCJmYWlsZWRDaHVua3MiLCJzdWNjZXNzQ2h1bmtzIiwicmVzdWx0IiwiZmFpbGVkIiwiSXRlbSIsInVuaXF1ZSIsImlzVW5wdWJsaXNoZWQiLCJza2VsZXRvbiIsIl9fZ2V0IiwiZm91bmQiLCJ2IiwibGFuZGVkIiwiY2hlY2tSZWFkeSIsImNvbmZpZyIsIkxvY2FsUHJvdmlkZXIiLCJJdGVtU2F2ZU1hbmFnZXIiLCJJdGVtTG9hZE1hbmFnZXIiLCJvYmplY3RSZWFkeSIsIm9uUmVhZHkiLCJhZGRMb2NhbFByb3ZpZGVyIiwidGFibGUiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFZhbHVlcyIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsInNhbWUiLCJrZXkiLCJvcmlnaW5hbCIsInJlZ2lzdHJ5IiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwidG9Db21wYXJlIiwic29tZSIsInByb3AiLCJiYWNrZW5kIiwiZHVwbGljYXRlZCIsInZhbGlkYXRlVW5pcXVlRmllbGRzIiwiZmllbGRzIiwiY2hlY2tQcm9taXNlcyIsInRoZW4iLCJkdXBsaWNhdGVGaWVsZHMiLCJQcm9taXNlIiwiYWxsIiwiZGJOYW1lIiwiaGFzIiwiUmVnaXN0cnkiLCJlbGVtZW50cyIsInNldFZhbHVlcyIsInByb21pc2VzIiwiYmF0Y2giLCJzcGxpY2UiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwibG9jYWwiLCJnZW5lcmF0ZVVVSUQiLCJ0cmFjZSIsImlzTmV3IiwicHJvcHMiLCJ1cGRhdGVkIiwibmV3VmFsdWVzIiwicmVwbGFjZSIsImMiLCJyIiwidG9TdHJpbmciLCJwdXQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24vaW5kZXgudHMiLCJjb2xsZWN0aW9uL2xvYWQudHMiLCJjb2xsZWN0aW9uL2xvY2FsLXByb3ZpZGVyLnRzIiwiY29sbGVjdGlvbi9wdWJsaXNoLnRzIiwiaW50ZXJmYWNlcy9wcm92aWRlci50cyIsIml0ZW0vaW5kZXgudHMiLCJpdGVtL2xvYWQudHMiLCJpdGVtL2xvY2FsLXByb3ZpZGVyLnRzIiwiaXRlbS9zYXZlLnRzIiwicmVnaXN0cnkvZmFjdG9yeS50cyIsInJlZ2lzdHJ5L2luZGV4LnRzIiwicmVnaXN0cnkvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
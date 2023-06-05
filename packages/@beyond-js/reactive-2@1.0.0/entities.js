System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive-2@1.0.0/model", "@beyond-js/kernel@0.1.9/core", "dexie@3.2.3", "@beyond-js/reactive-2@1.0.0/database", "uuid@9.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Collection, CollectionLocalProvider, IProvider, Item, LocalProvider, FactoryRecords, StoreRecords, __beyond_pkg, hmr;
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
    }, function (_uuid2) {
      dependency_5 = _uuid2;
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
          "vspecifier": "@beyond-js/reactive-2@1.0.0/entities"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive-2/model', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['dexie', dependency_3], ['@beyond-js/reactive-2/database', dependency_4], ['uuid', dependency_5]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./collection/index
      **********************************/
      ims.set('./collection/index', {
        hash: 1338494701,
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
              const getProperty = property => {
                return this[property];
              };
              const setProperty = (property, value) => this[property] = value;
              const bridge = {
                get: getProperty,
                set: setProperty
              };
              if (this.localdb) {
                this.#localProvider = new _localProvider.CollectionLocalProvider(this, bridge);
                this.#localProvider.on('items.changed', this.#listenItems);
                this.localProvider.init();
              }
              this.#saveManager = new _publish.CollectionSaveManager(this, bridge);
              this.#loadManager = new _load.CollectionLoadManager(this, bridge);
            }
            #listenItems = () => {
              if (!this.localdb) return;
              this.#items = this.#loadManager.processEntries(this.#localProvider.items);
              this.trigger('change');
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
        hash: 257882255,
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
              this.#provider = this.#parentBridge.get('#provider');
              this.#parent.load = this.load;
              this.#parent.filter = this.filter;
              if (this.#localProvider) this.#parent.customFilter = this.#localProvider?.customFilter;
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
                const {
                  isOnline
                } = this.#parent;
                if (!isOnline || !this.#provider) {
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
                const items = await this.processRemoteEntries(data.entries);
                // if (this.#localProvider) await this.#localProvider.save(items);
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
            async processRemoteEntries(entries) {
              await this.#localProvider.save(entries);
              return entries.map(record => {
                const item = new this.parent.item();
                item.set(record);
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
        hash: 3246882103,
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
              await this.init();
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
        hash: 3263494497,
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
              this.#localdb = this.#bridge.get('localdb');
              if (this.#localdb) {
                this.#localProvider = this.#bridge.get('localProvider');
              } else {
                console.warn('la colleccion no usa indexeddb');
              }
              this.#provider = this.#bridge.get('#provider');
            }
            save = async (data = []) => {
              if (!this.#localdb) return true;
              await this.#localProvider.init();
              await this.#localProvider.save(data);
            };
            publish = async (data = []) => {
              try {
                await this.save(data);
                if (!this.#provider || this.#bridge.get('isOffline')) return;
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
                if (!data) data = await this.#parent.localProvider.store.where('offline').equals(1).toArray();
                const chunks = this.splitDataIntoChunks(data);
                const failedChunks = [];
                const successChunks = [];
                for (const [index, chunk] of chunks.entries()) {
                  const result = await this.sendChunk(chunk, index);
                  if (!result.success) {
                    failedChunks.push(result);
                  } else successChunks.push(result);
                }
                this.#bridge.set('items', []);
                await this.#parent.load();
                if (failedChunks.length) {
                  const message = failedChunks.length === chunks.length ? 'FAILED_SYNC' : 'INCOMPLETE_SYNC';
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
                return this.#localProvider.store.where('offline').equals(1).toArray();
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
        hash: 3665730283,
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
            get instanceId() {
              return this.localProvider.instanceId;
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
            #initPromise;
            constructor(config = {}) {
              super();
              const {
                db,
                storeName
              } = config;
              if (db) this.db = db;
              if (storeName) this.storeName = storeName;
              this.on('object.loaded', this.checkReady);
              const getProperty = property => this.__get(property);
              this.#saveManager = new _save.ItemSaveManager(this, getProperty);
              this.#loadManager = new _load.ItemLoadManager(this, getProperty);
              if (this.db && this.storeName) {
                if (this.localdb) {
                  /**
                   * @todo: Julio: probably this should be a singleton
                   */
                  this.localProvider = new _localProvider.LocalProvider(this, getProperty);
                }
                this.init(config);
              }
            }
            async init(config = {}) {
              try {
                let id;
                if (this.#initPromise) return this.#initPromise;
                if (this.localdb && !this.localProvider) {
                  /**
                   * This code is to keep compatibility with the old version of the library
                   * where the init must be called after the super call in Children objects.
                   * @param property
                   * @returns
                   */
                  const getProperty = property => this.__get(property);
                  this.localProvider = new _localProvider.LocalProvider(this, getProperty);
                }
                this.#initPromise = new _core.PendingPromise();
                if (config.id) id = config.id;
                await this.localProvider.init(id);
                if (this.#skeleton && this.#skeleton.length > 0) {
                  this.properties = this.#skeleton;
                }
                this.#ready = true;
                this.#initPromise.resolve(true);
                this.trigger('object.loaded');
              } catch (e) {
                console.error('error initializing', e);
              }
            }
            /**
             * Validates if the object is ready to be used
             *
             * Is implemented internally by methods such as publish or load to avoid errors in cases
             * where could it be called before the object is ready.
             *
             * @returns {Promise<boolean>} A promise that resolves when the object is ready
             */
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
              };
              this.on('object.loaded', onReady);
              return this.#promiseReady;
            };
            setOffline = value => this.localProvider.setOffline(value);
            /**
             * Set the data of the object
             *
             * @param data The data to set
             * @param init If true, the data will be stored in the local database
             */
            set(data, init = false) {
              //	If init is true, store the data in localData Map
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
        hash: 1152156679,
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
            init = () => {
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
                if (this.#localProvider && !this.#localProvider.isOnline) return {
                  status: true
                };
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
        hash: 1926388408,
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
              console.log(2, this.#isOnline && !this.#offline && !localStorage.getItem('reactive.offline'));
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
                await this.#getRegistry(id);
                if (id) await this.load({
                  id
                });
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
                data.offline = this.isOnline ? 0 : 1;
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
        hash: 593058953,
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
                return;
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
        hash: 2169317885,
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
            async load(storeName, id = undefined) {
              const store = this.#database.db[storeName];
              if (!store) throw new Error(`Store ${storeName} does not exists`);
              // if the store map does not exists, create it
              if (!this.#stores.has(storeName)) this.#stores.set(storeName, new Map());
              // if the registry exists, return it
              if (this.#stores.has(storeName) && this.#stores.get(storeName).has(id)) {
                const registry = this.#stores.get(storeName).get(id);
                return registry.get();
              }
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
        hash: 529205538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive-2/model");
          var _uuid = require("uuid");
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
              id: undefined
            }) {
              super();
              const {
                id
              } = data;
              this.#store = store;
              //this.#id = id === 'new' ? this.#instanceId : id;
              this.#isNew = id === undefined;
              this.#id = id;
              this.#instanceId = id ?? (0, _uuid.v4)();
              if (!id) this.#id = this.#instanceId;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2xvY2FsUHJvdmlkZXIiLCJfcHVibGlzaCIsIl9sb2FkIiwiQ29sbGVjdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJpdGVtcyIsImxvY2FsZGIiLCJpc09ubGluZSIsImxvY2FsUHJvdmlkZXIiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInRyaWdnZXJFdmVudCIsImNvdW50ZXJzIiwidG90YWwiLCJuZXh0Iiwic2F2ZU1hbmFnZXIiLCJsb2FkTWFuYWdlciIsInByb3ZpZGVyIiwiaW5pdFNwZWNzIiwic29ydEJ5Iiwic29ydERpcmVjdGlvbiIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsInNldEl0ZW1zIiwidmFsdWVzIiwiaW5pdCIsInNwZWNzIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiYnJpZGdlIiwiZ2V0Iiwic2V0IiwiQ29sbGVjdGlvbkxvY2FsUHJvdmlkZXIiLCJvbiIsImxpc3Rlbkl0ZW1zIiwiQ29sbGVjdGlvblNhdmVNYW5hZ2VyIiwiQ29sbGVjdGlvbkxvYWRNYW5hZ2VyIiwiI2xpc3Rlbkl0ZW1zIiwicHJvY2Vzc0VudHJpZXMiLCJ0cmlnZ2VyIiwic2V0T2ZmbGluZSIsInN0b3JlIiwiZXhwb3J0cyIsInBhcmVudCIsImZpbHRlciIsInBhcmVudEJyaWRnZSIsImxvYWQiLCJjdXN0b21GaWx0ZXIiLCJsb2NhbExvYWQiLCJwYXJhbXMiLCJsb2NhbERhdGEiLCJkYXRhIiwibmV3SXRlbXMiLCJ1cGRhdGUiLCJjb25jYXQiLCJwcm9wZXJ0aWVzIiwibG9jYWxMb2FkZWQiLCJmZXRjaGluZyIsInBhZ2UiLCJyZW1vdGVFbGVtZW50cyIsInN0YXJ0IiwibGltaXQiLCJsb2NhbEl0ZW1zIiwic3RhdHVzIiwicmVtb3RlRGF0YSIsImxpc3QiLCJlcnJvciIsInByb2Nlc3NSZW1vdGVFbnRyaWVzIiwiZW50cmllcyIsImxvYWRlZCIsImV4YyIsImNvbnNvbGUiLCJtZXNzYWdlIiwic2F2ZSIsIm1hcCIsInJlY29yZCIsIml0ZW0iLCJyZW1vdGVMb2FkIiwicmVzcG9uc2UiLCJfZGV4aWUiLCJfY29yZSIsIl9kYXRhYmFzZSIsIl9mYWN0b3J5IiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsIm9uTGluZSIsIm9mZmxpbmUiLCJkYXRhYmFzZSIsInN0b3JlTmFtZSIsImRhdGFiYXNlTmFtZSIsInJlY29yZHMiLCJleGlzdHMiLCJmb3VuZCIsImRiIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkZhY3RvcnlSZWNvcmRzIiwiRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ29ubmVjdGlvbiIsInByb21pc2VJbml0IiwiUGVuZGluZ1Byb21pc2UiLCJEQk1hbmFnZXIiLCJyZWFkeSIsInJlc29sdmUiLCJlIiwiaXNVbnB1Ymxpc2hlZCIsIiNpc1VucHVibGlzaGVkIiwicHJvbWlzZUxvYWQiLCJjdXN0b21XaGVyZSIsImRlZmF1bHRXaGVyZSIsIiNkZWZhdWx0V2hlcmUiLCJvZmZzZXQiLCJvcmRlckJ5Iiwid2hlcmUiLCJ0b0FycmF5IiwiY2FsbGJhY2siLCJKU09OIiwic3RyaW5naWZ5IiwiY29uZGl0aW9ucyIsIk9iamVjdCIsImtleXMiLCJjb250cm9scyIsImZvckVhY2giLCJjb25kaXRpb24iLCJpbmNsdWRlcyIsInByb2Nlc3NDb250cm9sIiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJmaXJzdCIsImxpdmUiLCJsaXZlUXVlcnkiLCJzdWJzY3JpYmUiLCJlcnIiLCJwcm9jZXNzIiwiZ2V0UHJvcGVydGllcyIsInRvU2F2ZSIsImluc3RhbmNlSWQiLCJzYXZlQWxsIiwiI3Byb2Nlc3NDb250cm9sIiwiY29udHJvbCIsInVwc2VydCIsIm9yaWdpbmFsRGF0YSIsInRyYW5zYWN0aW9uIiwiaW5zdGFuY2VJZFRvSWRNYXAiLCJNYXAiLCJpZCIsImJ1bGtQdXQiLCJNQVhfUkVUUklFUyIsIkNIVU5LX1NJWkUiLCJzeW5jIiwicHVibGlzaCIsInRvU3luYyIsIndhcm4iLCJidWxrU2F2ZSIsInNlbmRDaHVuayIsImNodW5rIiwiaW5kZXgiLCJyZXRyaWVzIiwidW5kZWZpbmVkIiwic3VjY2VzcyIsInNwbGl0RGF0YUludG9DaHVua3MiLCJjaHVua3MiLCJpIiwibGVuZ3RoIiwicHVzaCIsInNsaWNlIiwiZXF1YWxzIiwiZmFpbGVkQ2h1bmtzIiwic3VjY2Vzc0NodW5rcyIsInJlc3VsdCIsImZhaWxlZCIsImRlZmluZVByb3BlcnR5IiwiX3NhdmUiLCJJdGVtIiwiaW5mbyIsImlnbm9yZWRGaWVsZHMiLCJza2VsZXRvbiIsInVuaXF1ZSIsIl9fZ2V0IiwidiIsImxhbmRlZCIsIm9iamVjdFJlYWR5IiwicHJvbWlzZVJlYWR5IiwiaW5pdFByb21pc2UiLCJjb25maWciLCJjaGVja1JlYWR5IiwiSXRlbVNhdmVNYW5hZ2VyIiwiSXRlbUxvYWRNYW5hZ2VyIiwiTG9jYWxQcm92aWRlciIsIm9uUmVhZHkiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFZhbHVlcyIsInRvSXRlcmF0ZSIsImZpZWxkIiwiZ2V0UHJvcGVydHlOYW1lcyIsInNhbWUiLCJrZXkiLCJvcmlnaW5hbCIsInJlZ2lzdHJ5IiwibG9nIiwiX19pZCIsImZsb29yIiwicmFuZG9tIiwiZ2V0UmVnaXN0cnkiLCJ0b0NvbXBhcmUiLCJzb21lIiwicHJvcCIsImxpc3RlblJlZ2lzdHJ5IiwiI2xpc3RlblJlZ2lzdHJ5IiwiYmFja2VuZCIsImR1cGxpY2F0ZWQiLCJ2YWxpZGF0ZVVuaXF1ZUZpZWxkcyIsImZpZWxkcyIsIiN1cGRhdGUiLCJjaGVja1Byb21pc2VzIiwidGhlbiIsImR1cGxpY2F0ZUZpZWxkcyIsIlByb21pc2UiLCJhbGwiLCJfaW5kZXgiLCJzdG9yZXMiLCJiYXRjaGVzIiwiZGJOYW1lIiwiaGFzIiwiUmVnaXN0cnkiLCJlbGVtZW50cyIsInNldFZhbHVlcyIsInByb21pc2VzIiwiYmF0Y2giLCJzcGxpY2UiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsIm1hcHBlZEZuIiwiZGJzIiwiX3V1aWQiLCJsb2NhbCIsImlzTmV3Iiwia2V5SWQiLCJ2NCIsInByb21pc2UiLCJwcm9wcyIsInVwZGF0ZWQiLCJuZXdWYWx1ZXMiLCJwdXQiLCJTdG9yZVJlY29yZHMiLCJzdG9yZUZhY3RvcnkiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jb2xsZWN0aW9uL2xvYWQudHMiLCIvY29sbGVjdGlvbi9sb2NhbC1wcm92aWRlci50cyIsIi9jb2xsZWN0aW9uL3B1Ymxpc2gudHMiLCIvcHJvdmlkZXIudHMiLCIvaXRlbS9pbmRleC50cyIsIi9pdGVtL2xvYWQudHMiLCIvaXRlbS9sb2NhbC1wcm92aWRlci50cyIsIi9pdGVtL3NhdmUudHMiLCIvcmVnaXN0cnkvZmFjdG9yeS50cyIsIi9yZWdpc3RyeS9pbmRleC50cyIsIi9yZWdpc3RyeS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsY0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsS0FBQSxHQUFBSCxPQUFBO1VBZ0JPO1VBQVcsTUFBZ0JJLFVBQVcsU0FBUUwsTUFBQSxDQUFBTSxhQUEwQjtZQUM5RSxDQUFBQyxLQUFNLEdBQTJCLEVBQUU7WUFDekJDLE9BQU8sR0FBRyxJQUFJO1lBQ3hCLElBQUlELEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUUsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUNELFFBQVE7WUFDaEU7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
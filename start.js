System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/transversals", "@beyond-js/widgets@0.1.4/render", "@beyond-js/reactive-2@1.0.0/database", "@aimpact/ailearn@1.0.0/prompt-models", "@aimpact/ailearn@1.0.0/assignments", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Transversals) {
      dependency_1 = _beyondJsKernel019Transversals;
    }, function (_beyondJsWidgets014Render) {
      dependency_2 = _beyondJsWidgets014Render;
    }, function (_beyondJsReactive2100Database) {
      dependency_3 = _beyondJsReactive2100Database;
    }, function (_aimpactAilearn100PromptModels) {
      dependency_4 = _aimpactAilearn100PromptModels;
    }, function (_aimpactAilearn100Assignments) {
      dependency_5 = _aimpactAilearn100Assignments;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/reactive-2/database', dependency_3], ['@aimpact/ailearn/prompt-models', dependency_4], ['@aimpact/ailearn/assignments', dependency_5], ['@beyond-js/kernel/routing', dependency_6]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "main-layout",
        "vspecifier": "@beyond-js/reactive-2@1.0.0/layout/main",
        "is": "layout"
      }, {
        "name": "home-page",
        "vspecifier": "@beyond-js/reactive-2@1.0.0/home",
        "is": "page",
        "route": "/home-reactive"
      }, {
        "name": "assignment-page",
        "vspecifier": "@aimpact/ailearn@1.0.0/assignment-page",
        "is": "page",
        "route": "/assignments/${assignment}"
      }, {
        "name": "assignments-page",
        "vspecifier": "@aimpact/ailearn@1.0.0/assignments-page",
        "is": "page",
        "route": "/"
      }, {
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn@1.0.0/auth-login",
        "is": "page",
        "route": "/auth"
      }, {
        "name": "ilearn-layout",
        "vspecifier": "@aimpact/ailearn@1.0.0/layout",
        "is": "layout"
      }, {
        "name": "login-page",
        "vspecifier": "@aimpact/ailearn@1.0.0/login",
        "is": "page",
        "route": "/login"
      }, {
        "name": "test-p",
        "vspecifier": "@aimpact/ailearn@1.0.0/test",
        "is": "page",
        "route": "/test"
      }]);
      bundles = [];
      /**************************************
      MODULE: @aimpact/ailearn/model/register
      **************************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/model/register"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./start
        ***********************/

        ims.set('./start', {
          hash: 546612584,
          creator: function (require, exports) {
            "use strict";

            var _database = require("@beyond-js/reactive-2/database");
            var _promptModels = require("@aimpact/ailearn/prompt-models");
            var _assignments = require("@aimpact/ailearn/assignments");
            (async () => {
              _database.DBManager.config("ailearn@13", {
                chats: "++id, title, category, tags, conversation, context, createdAt, updatedAt",
                topics: "&id, userId, &name, description, createdAt, updatedAt",
                subjects: "++id, topicId, name, description, source, data, audioLabs, createdAt, updatedAt",
                prompts: "++id, name, kind, subject, goals, mission, createdAt, updatedAt"
              });
              const _collection = new _promptModels.Prompts();
              const items = await _collection.load();
              if (!items.data.length) {
                const map = [..._assignments.assignments.values()].map(assignment => assignment);
                await _collection.localProvider.store.bulkPut(map);
              }
            })();
          }
        });
        return {
          dependencies: ['@beyond-js/reactive-2/database', '@aimpact/ailearn/prompt-models', '@aimpact/ailearn/assignments']
        };
      }]);

      /*******************************
      MODULE: @aimpact/ailearn/routing
      *******************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 3896769427,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            _routing.routing.redirect = async function redirect(uri) {
              if (!localStorage.getItem("session")) {
                return "/auth";
              }
              if (uri.pathname === "/auth" && !!localStorage.getItem("session")) {
                return "/";
              }
              return uri.pathname;
            };
          }
        });
        return {
          dependencies: ['@beyond-js/kernel/routing']
        };
      }]);

      /*******************************
      MODULE: @aimpact/ailearn/wrapper
      *******************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/wrapper"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./start
        ***********************/

        ims.set('./start', {
          hash: 2971878198,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.wrapper = exports.Wrapper = void 0;
            var _promptModels = require("@aimpact/ailearn/prompt-models");
            /*bundle*/
            class Wrapper {
              #collection;
              get collection() {
                return this.#collection;
              }
              get items() {
                return this.#collection.localProvider?.items;
              }
              getByName(name) {
                const found = this.items.find(item => item.name === name);
                return found;
              }
              constructor() {
                this.#collection = new _promptModels.Prompts();
                this.#collection.load();
              }
            }
            exports.Wrapper = Wrapper;
            const _wrapper = new Wrapper();
            /*bundle*/
            const wrapper = _wrapper;
            exports.wrapper = wrapper;
          }
        });
        exports.descriptor = [{
          "im": "./start",
          "from": "Wrapper",
          "name": "Wrapper"
        }, {
          "im": "./start",
          "from": "wrapper",
          "name": "wrapper"
        }];
        return {
          dependencies: ['@aimpact/ailearn/prompt-models']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});
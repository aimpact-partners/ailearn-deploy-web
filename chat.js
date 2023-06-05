System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/reactive-2@1.0.0/model", "@aimpact/langchain@1.0.0/models", "react@18.2.0", "@beyond-js/react-18-widgets@0.0.5/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_3 = _beyondJsReact18Widgets005Page;
    }, function (_beyondJsReactive2100Model) {
      dependency_4 = _beyondJsReactive2100Model;
    }, function (_aimpactLangchain100Models) {
      dependency_5 = _aimpactLangchain100Models;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_beyondJsReact18Widgets005Hooks) {
      dependency_7 = _beyondJsReact18Widgets005Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@aimpact/http-server", "0.0.1"], ["@aimpact/langchain", "1.0.0"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/chat"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive-2/model', dependency_4], ['@aimpact/langchain/models', dependency_5], ['react', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-page",
        "vspecifier": "@aimpact/ailearn@1.0.0/chat",
        "is": "page",
        "route": "/chat"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn@1.0.0/chat');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3248339215,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore(language) {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 892697639,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _models = require("@aimpact/langchain/models");
          class StoreManager extends _model.ReactiveModel {
            #path = "trending";
            #model;
            #messages = [];
            get messages() {
              return this.#messages;
            }
            constructor() {
              super();
              this.#model = new _models.ChainModel();
            }
            async query(question) {
              this.fetching = true;
              this.#messages.push({
                type: "question",
                content: question
              });
              this.triggerEvent();
              const response = await this.#model.query(question, this.#path);
              if (!response.status) {
                console.error("Error on embeddings", response.error);
              }
              this.fetching = false;
              this.#messages.push({
                type: "response",
                content: response.data
              });
              this.triggerEvent();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1036027476,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [messages, setMessages] = React.useState(store.messages.length);
            const [fetching, setFetching] = React.useState(store.fetching);
            const update = () => {
              setMessages(store.messages.length);
              setFetching(store.fetching);
            };
            (0, _hooks.useBinder)([store], update);
            const [inputValue, setInputValue] = React.useState("");
            const handleInputChange = event => setInputValue(event.target.value);
            const handleSubmit = async event => {
              event.preventDefault();
              if (inputValue.trim() === "") return;
              setInputValue("");
              await store.query(inputValue);
            };
            return React.createElement("div", {
              className: "chat-container"
            }, React.createElement("div", {
              className: "message-container"
            }, store.messages.map((message, index) => React.createElement("div", {
              className: `message ${message.type}`,
              key: index
            }, message.content))), React.createElement("form", {
              className: "input-container",
              onSubmit: handleSubmit
            }, React.createElement("input", {
              type: "text",
              className: "message-input",
              value: inputValue,
              disabled: fetching,
              onChange: handleInputChange,
              placeholder: "Type your message..."
            }), React.createElement("button", {
              type: "submit",
              className: "send-button"
            }, "Send")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJsYW5ndWFnZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX21vZGVsIiwiX21vZGVscyIsIlJlYWN0aXZlTW9kZWwiLCJwYXRoIiwibW9kZWwiLCJtZXNzYWdlcyIsImNvbnN0cnVjdG9yIiwiQ2hhaW5Nb2RlbCIsInF1ZXJ5IiwicXVlc3Rpb24iLCJmZXRjaGluZyIsInB1c2giLCJ0eXBlIiwiY29udGVudCIsInRyaWdnZXJFdmVudCIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29uc29sZSIsImVycm9yIiwiZGF0YSIsIlJlYWN0IiwiX2hvb2tzIiwic2V0TWVzc2FnZXMiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsInNldEZldGNoaW5nIiwidXBkYXRlIiwidXNlQmluZGVyIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwibWVzc2FnZSIsImluZGV4Iiwia2V5Iiwib25TdWJtaXQiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlcyI6WyIvd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCIvd2lkZ2V0L3RzL3N0b3JlLnRzIiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMs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
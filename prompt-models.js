System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive-2@1.0.0/entities"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Prompts, Prompt, __beyond_pkg, hmr;
  _export({
    Prompts: void 0,
    Prompt: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive2100Entities) {
      dependency_1 = _beyondJsReactive2100Entities;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@aimpact/http-server", "0.0.1"], ["@aimpact/langchain", "1.0.0"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/prompt-models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive-2/entities', dependency_1]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 609853879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompts = void 0;
          var _entities = require("@beyond-js/reactive-2/entities");
          var _item = require("./item");
          /*bundle */
          class Prompts extends _entities.Collection {
            item = _item.Prompt;
            storeName = "prompts";
            db = "ailearn";
            constructor() {
              super();
              this.init();
            }
          }
          exports.Prompts = Prompts;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 1626711185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompt = void 0;
          var _entities = require("@beyond-js/reactive-2/entities");
          /*bundle */
          class Prompt extends _entities.Item {
            properties = ["id", "name", "mission", "kind", "goals", "subject", "createdAt", "updatedAt"];
            storeName = "prompts";
            db = "ailearn";
            constructor(id = undefined) {
              super();
              this.init({
                id
              });
            }
            async load() {
              await super.load(...arguments);
            }
          }
          exports.Prompt = Prompt;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Prompts",
        "name": "Prompts"
      }, {
        "im": "./item",
        "from": "Prompt",
        "name": "Prompt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Prompts') && _export("Prompts", Prompts = require ? require('./collection').Prompts : value);
        (require || prop === 'Prompt') && _export("Prompt", Prompt = require ? require('./item').Prompt : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW50aXRpZXMiLCJyZXF1aXJlIiwiX2l0ZW0iLCJQcm9tcHRzIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJQcm9tcHQiLCJzdG9yZU5hbWUiLCJkYiIsImNvbnN0cnVjdG9yIiwiaW5pdCIsImV4cG9ydHMiLCJJdGVtIiwicHJvcGVydGllcyIsImlkIiwidW5kZWZpbmVkIiwibG9hZCIsImFyZ3VtZW50cyJdLCJzb3VyY2VzIjpbIi9jb2xsZWN0aW9uLnRzIiwiL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFNBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsTUFBT0UsT0FBUSxTQUFRSCxTQUFBLENBQUFJLFVBQVU7WUFDakRDLElBQUksR0FBR0gsS0FBQSxDQUFBSSxNQUFNO1lBQ0hDLFNBQVMsR0FBRyxTQUFTO1lBQ3JCQyxFQUFFLEdBQUcsU0FBUztZQUN4QkMsWUFBQTtjQUNFLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1lBQ2I7O1VBQ0RDLE9BQUEsQ0FBQVIsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hELElBQUFILFNBQUEsR0FBQUMsT0FBQTtVQVlPO1VBQVcsTUFBT0ssTUFBTyxTQUFRTixTQUFBLENBQUFZLElBQWE7WUFDekNDLFVBQVUsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFDNUZOLFNBQVMsR0FBRyxTQUFTO1lBQ3JCQyxFQUFFLEdBQUcsU0FBUztZQUV4QkMsWUFBWUssRUFBRSxHQUFHQyxTQUFTO2NBQ3hCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0wsSUFBSSxDQUFDO2dCQUFFSTtjQUFFLENBQUUsQ0FBQztZQUNuQjtZQUVBLE1BQU1FLElBQUlBLENBQUE7Y0FDUixNQUFNLEtBQUssQ0FBQ0EsSUFBSSxDQUFDLEdBQUdDLFNBQVMsQ0FBQztZQUNoQzs7VUFDRE4sT0FBQSxDQUFBTCxNQUFBLEdBQUFBLE1BQUEifQ==
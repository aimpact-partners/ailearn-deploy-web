System.register(["@beyond-js/backend@0.1.6/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, ChainModel, __beyond_pkg, hmr;
  _export("ChainModel", void 0);
  return {
    setters: [function (_beyondJsBackend016Client) {
      dependency_0 = _beyondJsBackend016Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@pinecone-database/pinecone", "0.1.5"], ["@google-cloud/storage", "6.10.1"], ["socket.io-client", "4.6.1"], ["dotenv", "16.0.3"], ["openai", "3.2.1"], ["langchain", "0.0.75"], ["mammoth", "1.5.1"], ["pdf-parse", "1.1.1"], ["@aimpact/langchain", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/langchain@1.0.0/models"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2064401962,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChainModel = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class ChainModel extends ActionsBridge {
            async initialize() {
              return await this.execute("index//ChainModel//initialize", ...arguments);
            }
            async query(query, topic) {
              return await this.execute("index//ChainModel//query", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.ChainModel = ChainModel;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ChainModel",
        "name": "ChainModel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ChainModel') && _export("ChainModel", ChainModel = require ? require('./index').ChainModel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiQ2hhaW5Nb2RlbCIsIkFjdGlvbnNCcmlkZ2UiLCJpbml0aWFsaXplIiwiZXhlY3V0ZSIsImFyZ3VtZW50cyIsInF1ZXJ5IiwidG9waWMiLCJjb25zdHJ1Y3RvciIsImJ1bmRsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFTyxZQUFZO1VBQVUsTUFBT0MsVUFBVyxTQUFRQyxhQUFhO1lBQ2hFLE1BQU1DLFVBQVVBLENBQUE7Y0FDWixPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsK0JBQStCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQzVFO1lBQ0EsTUFBTUMsS0FBS0EsQ0FBQ0EsS0FBYSxFQUFFQyxLQUFhO2NBQ3BDLE9BQU8sTUFBTSxJQUFJLENBQUNILE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDdkU7WUFDQUcsWUFBQTtjQUNJLEtBQUssQ0FBQyxTQUFTLEVBQUVULGVBQUEsQ0FBQVUsTUFBTSxDQUFDO1lBQzVCOztVQUNIQyxPQUFBLENBQUFULFVBQUEsR0FBQUEsVUFBQSJ9
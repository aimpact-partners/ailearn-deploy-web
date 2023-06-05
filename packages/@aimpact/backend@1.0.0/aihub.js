System.register(["@beyond-js/backend@0.1.6/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, AIModel, __beyond_pkg, hmr;
  _export("AIModel", void 0);
  return {
    setters: [function (_beyondJsBackend016Client) {
      dependency_0 = _beyondJsBackend016Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@ffmpeg-installer/ffmpeg", "1.1.0"], ["@google-cloud/storage", "6.10.1"], ["@types/marked", "4.3.0"], ["@types/pdfmake", "0.2.2"], ["blob", "0.1.0"], ["dotenv", "16.0.3"], ["express", "4.18.2"], ["file-type", "18.4.0"], ["firebase", "9.22.1"], ["fluent-ffmpeg", "2.1.2"], ["https", "1.0.0"], ["multer", "1.4.5-lts.1"], ["marked", "5.0.2"], ["openai", "3.2.1"], ["puppeteer", "20.2.1"], ["pdfmake", "0.2.7"], ["showdown", "2.1.0"], ["socket.io-client", "4.6.1"], ["sqlite", "4.2.0"], ["sqlite3", "5.1.6"], ["vhost", "3.0.2"], ["@aimpact/backend", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/backend@1.0.0/aihub"
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
        hash: 762336427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIModel = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class AIModel extends ActionsBridge {
            async completions(prompt, messages) {
              return await this.execute("index//AIModel//completions", ...arguments);
            }
            async chat(messages) {
              return await this.execute("index//AIModel//chat", ...arguments);
            }
            async transcription(path, lang) {
              return await this.execute("index//AIModel//transcription", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.AIModel = AIModel;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AIModel",
        "name": "AIModel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AIModel') && _export("AIModel", AIModel = require ? require('./index').AIModel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiQUlNb2RlbCIsIkFjdGlvbnNCcmlkZ2UiLCJjb21wbGV0aW9ucyIsInByb21wdCIsIm1lc3NhZ2VzIiwiZXhlY3V0ZSIsImFyZ3VtZW50cyIsImNoYXQiLCJ0cmFuc2NyaXB0aW9uIiwicGF0aCIsImxhbmciLCJjb25zdHJ1Y3RvciIsImJ1bmRsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFTyxZQUFZO1VBQVUsTUFBT0MsT0FBUSxTQUFRQyxhQUFhO1lBQzdELE1BQU1DLFdBQVdBLENBQUNDLE1BQWMsRUFBRUMsUUFBZ0I7Y0FDOUMsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLDZCQUE2QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMxRTtZQUNBLE1BQU1DLElBQUlBLENBQUNILFFBQXdDO2NBQy9DLE9BQU8sTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDbkU7WUFDQSxNQUFNRSxhQUFhQSxDQUFDQyxJQUFZLEVBQUVDLElBQVk7Y0FDMUMsT0FBTyxNQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDLCtCQUErQixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUM1RTtZQUNBSyxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRWIsZUFBQSxDQUFBYyxNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQWIsT0FBQSxHQUFBQSxPQUFBIn0=
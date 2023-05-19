System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive-2@1.0.0/entities"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Subjects, Subject, __beyond_pkg, hmr;
  _export({
    Subjects: void 0,
    Subject: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive2100Entities) {
      dependency_1 = _beyondJsReactive2100Entities;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/subject-models"
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
        hash: 1737257103,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Subjects = void 0;
          var _entities = require("@beyond-js/reactive-2/entities");
          var _item = require("./item");
          /*bundle */
          class Subjects extends _entities.Collection {
            item = _item.Subject;
            storeName = "subjects";
            db = "voicegenius";
            constructor() {
              super();
              this.init();
            }
          }
          exports.Subjects = Subjects;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2183700315,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Subject = void 0;
          var _entities = require("@beyond-js/reactive-2/entities");
          var _time = require("./time");
          /*bundle */
          class Subject extends _entities.Item {
            properties = ["id", "source", "name", "data", "duration", "description", "audioLabs", "createdAt", "path"];
            storeName = "subjects";
            db = "voicegenius";
            #actions = new Map();
            get actions() {
              return this.#actions;
            }
            get data() {
              return this.#actions;
            }
            set data(value) {
              if (Object.prototype.toString.call(value) !== "[object Map]") {
                console.log("invalid value", value);
                return;
              }
              this.#actions = value;
              this.triggerEvent();
            }
            get time() {
              return (0, _time.timeFormat)(this.duration);
            }
            constructor(id = undefined) {
              super();
              this.init({
                id
              });
            }
            async load() {
              await super.load(...arguments);
              //@ts-ignore
              this.#actions = new Map(JSON.parse(this.data));
            }
          }
          exports.Subject = Subject;
        }
      });

      /**********************
      INTERNAL MODULE: ./time
      **********************/

      ims.set('./time', {
        hash: 2373484433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.timeFormat = timeFormat;
          function timeFormat(time) {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor(time % 3600 / 60);
            const seconds = Math.floor(time % 60);
            let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            if (hours > 0) {
              timeString = `${hours.toString().padStart(2, "0")}:${timeString}`;
            }
            return timeString;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Subjects",
        "name": "Subjects"
      }, {
        "im": "./item",
        "from": "Subject",
        "name": "Subject"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Subjects') && _export("Subjects", Subjects = require ? require('./collection').Subjects : value);
        (require || prop === 'Subject') && _export("Subject", Subject = require ? require('./item').Subject : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDTztVQUFXLE1BQU9BLFFBQVMsU0FBUUMsb0JBQVU7WUFDbERDLElBQUksR0FBR0MsYUFBTztZQUNKQyxTQUFTLEdBQUcsVUFBVTtZQUN0QkMsRUFBRSxHQUFHLGFBQWE7WUFDNUJDO2NBQ0UsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQyxJQUFJLEVBQUU7WUFDYjs7VUFDREM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQ7VUFDQTtVQVNPO1VBQVcsTUFBT0wsT0FBUSxTQUFRTSxjQUFjO1lBQzNDQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQztZQUMxR04sU0FBUyxHQUFHLFVBQVU7WUFDdEJDLEVBQUUsR0FBRyxhQUFhO1lBRTVCLFFBQVEsR0FBRyxJQUFJTSxHQUFHLEVBQUU7WUFFcEIsSUFBSUMsT0FBTztjQUNULE9BQU8sSUFBSSxDQUFDLFFBQVE7WUFDdEI7WUFFQSxJQUFJQyxJQUFJO2NBQ04sT0FBTyxJQUFJLENBQUMsUUFBUTtZQUN0QjtZQUVBLElBQUlBLElBQUksQ0FBQ0MsS0FBSztjQUNaLElBQUlDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0osS0FBSyxDQUFDLEtBQUssY0FBYyxFQUFFO2dCQUM1REssT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFTixLQUFLLENBQUM7Z0JBQ25DOztjQUdGLElBQUksQ0FBQyxRQUFRLEdBQUdBLEtBQUs7Y0FDckIsSUFBSSxDQUFDTyxZQUFZLEVBQUU7WUFDckI7WUFFQSxJQUFJQyxJQUFJO2NBQ04sT0FBTyxvQkFBVSxFQUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1lBQ2xDO1lBRUFqQixZQUFZa0IsRUFBRSxHQUFHQyxTQUFTO2NBQ3hCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ2xCLElBQUksQ0FBQztnQkFBRWlCO2NBQUUsQ0FBRSxDQUFDO1lBQ25CO1lBRUEsTUFBTUUsSUFBSTtjQUNSLE1BQU0sS0FBSyxDQUFDQSxJQUFJLENBQUMsR0FBR0MsU0FBUyxDQUFDO2NBQzlCO2NBQ0EsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJaEIsR0FBRyxDQUFDaUIsSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDaEIsSUFBSSxDQUFDLENBQUM7WUFDaEQ7O1VBQ0RMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pESyxTQUFVc0IsVUFBVSxDQUFDUixJQUFZO1lBQ3RDLE1BQU1TLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNYLElBQUksR0FBRyxJQUFJLENBQUM7WUFDckMsTUFBTVksT0FBTyxHQUFHRixJQUFJLENBQUNDLEtBQUssQ0FBRVgsSUFBSSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUM7WUFDOUMsTUFBTWEsT0FBTyxHQUFHSCxJQUFJLENBQUNDLEtBQUssQ0FBQ1gsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUVyQyxJQUFJYyxVQUFVLEdBQUcsR0FBR0YsT0FBTyxDQUFDakIsUUFBUSxFQUFFLENBQUNvQixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJRixPQUFPLENBQUNsQixRQUFRLEVBQUUsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFFaEcsSUFBSU4sS0FBSyxHQUFHLENBQUMsRUFBRTtjQUNkSyxVQUFVLEdBQUcsR0FBR0wsS0FBSyxDQUFDZCxRQUFRLEVBQUUsQ0FBQ29CLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUlELFVBQVUsRUFBRTs7WUFHbEUsT0FBT0EsVUFBVTtVQUNsQiIsIm5hbWVzIjpbIlN1YmplY3RzIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJTdWJqZWN0Iiwic3RvcmVOYW1lIiwiZGIiLCJjb25zdHJ1Y3RvciIsImluaXQiLCJleHBvcnRzIiwiSXRlbSIsInByb3BlcnRpZXMiLCJNYXAiLCJhY3Rpb25zIiwiZGF0YSIsInZhbHVlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiY29uc29sZSIsImxvZyIsInRyaWdnZXJFdmVudCIsInRpbWUiLCJkdXJhdGlvbiIsImlkIiwidW5kZWZpbmVkIiwibG9hZCIsImFyZ3VtZW50cyIsIkpTT04iLCJwYXJzZSIsInRpbWVGb3JtYXQiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidGltZVN0cmluZyIsInBhZFN0YXJ0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2xsZWN0aW9uLnRzIiwiaXRlbS50cyIsInRpbWUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19
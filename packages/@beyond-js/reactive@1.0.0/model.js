System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/events@0.0.6/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.6"],["@beyond-js/reactive","1.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/events@0.0.6/events', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@beyond-js/reactive/model.1.0.0.js
var model_1_0_0_exports = {};
__export(model_1_0_0_exports, {
  ReactiveModel: () => ReactiveModel,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  reactiveProps: () => reactiveProps
});
module.exports = __toCommonJS(model_1_0_0_exports);

// node_modules/@beyond-js/reactive/model/model.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/events@0.0.6/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/reactive@1.0.0/model"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/events/events", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2937763577,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactiveModel = void 0;
    var _events = require2("@beyond-js/events/events");
    class ReactiveModel2 extends _events.Events {
      schema;
      fetching;
      fetched = false;
      processing = false;
      ready = false;
      processed = false;
      localdb = false;
      properties;
      loaded = false;
      constructor() {
        super();
        this.reactiveProps(["fetching", "fetched", "processing", "processed", "loaded", "ready"]);
      }
      reactiveProps(props) {
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          this.defineReactiveProp(propKey, initialValue);
        }
      }
      defineReactiveProp(propKey, initialValue) {
        const privatePropKey = `__${String(propKey)}`;
        Object.defineProperty(this, propKey, {
          get() {
            if (!this.hasOwnProperty(privatePropKey)) {
              this[privatePropKey] = initialValue;
            }
            return this[privatePropKey];
          },
          set(newVal) {
            if (newVal === this[privatePropKey]) return;
            this[privatePropKey] = newVal;
            this.triggerEvent();
          },
          enumerable: true,
          configurable: true
        });
      }
      triggerEvent = (event = "change") => this.trigger(event);
      set(property, value = void 0) {
        let props = {};
        let updated = false;
        for (const prop in props) {
          if (!Object.prototype.hasOwnProperty.call(this, prop)) continue;
          if (this[prop] === props[prop]) continue;
          this[prop] = props[prop];
          updated = true;
        }
        if (updated) this.triggerEvent();
      }
      getProperties() {
        const props = {};
        const properties = this.properties || this.skeleton;
        properties.forEach(property => {
          props[property] = this[property];
        });
        return props;
      }
    }
    exports.ReactiveModel = ReactiveModel2;
  }
});
ims.set("./property", {
  hash: 3124326805,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defineReactiveProp = defineReactiveProp;
    exports.reactiveProps = reactiveProps2;
    function _defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          if (newVal === target[privatePropKey]) return;
          target[privatePropKey] = newVal;
          target.triggerEvent();
        },
        enumerable: true,
        configurable: true
      });
    }
    function reactiveProps2(props) {
      return function (target) {
        const targetProto = "prototype" in target ? target.prototype : target;
        for (const propKey of props) {
          const descriptor = Object.getOwnPropertyDescriptor(targetProto, propKey);
          const initialValue = descriptor ? descriptor.value : void 0;
          defineReactiveProp(targetProto, propKey, initialValue);
        }
      };
    }
    function defineReactiveProp(target, propKey, initialValue) {
      const privatePropKey = `__${String(propKey)}`;
      Object.defineProperty(target, propKey, {
        get() {
          if (!target.hasOwnProperty(privatePropKey)) {
            target[privatePropKey] = initialValue;
          }
          return target[privatePropKey];
        },
        set(newVal) {
          target.setReactiveProp(propKey, newVal);
        },
        enumerable: true,
        configurable: true
      });
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "ReactiveModel",
  "name": "ReactiveModel"
}, {
  "im": "./property",
  "from": "reactiveProps",
  "name": "reactiveProps"
}];
var ReactiveModel, reactiveProps;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactiveModel") && (ReactiveModel = require2 ? require2("./index").ReactiveModel : value);
  (require2 || prop === "reactiveProps") && (reactiveProps = require2 ? require2("./property").reactiveProps : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3RpdmUvbW9kZWwuMS4wLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdGl2ZS9tb2RlbC9fX3NvdXJjZXMvbW9kZWwvcHJvcGVydHkudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJSZWFjdGl2ZU1vZGVsIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwicmVhY3RpdmVQcm9wcyIsIm1vZHVsZSIsIkV2ZW50cyIsInNjaGVtYSIsImZldGNoaW5nIiwiZmV0Y2hlZCIsInByb2Nlc3NpbmciLCJyZWFkeSIsInByb2Nlc3NlZCIsImxvY2FsZGIiLCJwcm9wZXJ0aWVzIiwibG9hZGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInByb3BLZXkiLCJkZXNjcmlwdG9yIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcml2YXRlUHJvcEtleSIsIlN0cmluZyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJzZXQiLCJuZXdWYWwiLCJ0cmlnZ2VyRXZlbnQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZXZlbnQiLCJ0cmlnZ2VyIiwicHJvcGVydHkiLCJ1cGRhdGVkIiwicHJvcCIsInByb3RvdHlwZSIsImNhbGwiLCJnZXRQcm9wZXJ0aWVzIiwic2tlbGV0b24iLCJmb3JFYWNoIiwiZXhwb3J0cyIsIl9kZWZpbmVSZWFjdGl2ZVByb3AiLCJ0YXJnZXQiLCJ0YXJnZXRQcm90byIsInNldFJlYWN0aXZlUHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUE4QmlCLE1BQWdCSix1QkFBeUJLLGVBQU07TUFDcERDO01BR1ZDO01BQ0FDLFVBQW1CO01BQ25CQyxhQUFzQjtNQUN0QkMsUUFBaUI7TUFDakJDLFlBQXFCO01BQ1hDLFVBQVU7TUFDVkM7TUFDVkMsU0FBa0I7TUFFbEJDO1FBQ0UsT0FBSztRQUNMLEtBQUtaLGNBQXNCLENBQUMsWUFBWSxXQUFXLGNBQWMsYUFBYSxVQUFVLE9BQU8sQ0FBQztNQUNsRztNQUVVQSxjQUFpQmEsT0FBcUI7UUFDOUMsV0FBV0MsV0FBV0QsT0FBTztVQUMzQixNQUFNRSxhQUFhQyxPQUFPQyx5QkFBeUIsTUFBTUgsT0FBTztVQUNoRSxNQUFNSSxlQUFlSCxhQUFhQSxXQUFXSSxRQUFRQztVQUVyRCxLQUFLQyxtQkFBbUJQLFNBQVNJLFlBQVk7O01BRWpEO01BRVVHLG1CQUFzQlAsU0FBa0JJLGNBQXdCO1FBQ3hFLE1BQU1JLGlCQUFpQixLQUFLQyxPQUFPVCxPQUFPO1FBRTFDRSxPQUFPUSxlQUFlLE1BQU1WLFNBQVM7VUFDbkNXLE1BQUc7WUFDRCxJQUFJLENBQUMsS0FBS0MsZUFBZUosY0FBYyxHQUFHO2NBQ3hDLEtBQUtBLGtCQUFrQko7O1lBRXpCLE9BQU8sS0FBS0k7VUFDZDtVQUNBSyxJQUFJQyxRQUFrQjtZQUNwQixJQUFJQSxXQUFXLEtBQUtOLGlCQUFpQjtZQUVyQyxLQUFLQSxrQkFBa0JNO1lBQ3ZCLEtBQUtDLGNBQVk7VUFDbkI7VUFDQUMsWUFBWTtVQUNaQyxjQUFjO1NBQ2Y7TUFDSDtNQVNBRixlQUFlLENBQUNHLFFBQWdCLGFBQW1CLEtBQUtDLFFBQVFELEtBQUs7TUFRckVMLElBQUlPLFVBQTJDZixRQUF5QkMsUUFBUztRQUMvRSxJQUFJUCxRQUF5QztRQUM3QyxJQUFJc0IsVUFBVTtRQUVkLFdBQVdDLFFBQVF2QixPQUFPO1VBQ3hCLElBQUksQ0FBQ0csT0FBT3FCLFVBQVVYLGVBQWVZLEtBQUssTUFBTUYsSUFBSSxHQUFHO1VBQ3ZELElBQUksS0FBS0EsVUFBVXZCLE1BQU11QixPQUFPO1VBQ2hDLEtBQUtBLFFBQVF2QixNQUFNdUI7VUFDbkJELFVBQVU7O1FBR1osSUFBSUEsU0FBUyxLQUFLTixjQUFZO01BQ2hDO01BRUFVLGdCQUFhO1FBQ1gsTUFBTTFCLFFBQTZCO1FBQ25DLE1BQU1ILGFBQWEsS0FBS0EsY0FBYyxLQUFLOEI7UUFFM0M5QixXQUFXK0IsUUFBUVAsWUFBVztVQUM1QnJCLE1BQU1xQixZQUFZLEtBQUtBO1FBQ3pCLENBQUM7UUFDRCxPQUFPckI7TUFDVDs7SUFDRDZCOzs7Ozs7Ozs7Ozs7O0lDbkhELFNBQVNDLG9CQUF1QkMsUUFBMEI5QixTQUFrQkksY0FBd0I7TUFDbkcsTUFBTUksaUJBQWlCLEtBQUtDLE9BQU9ULE9BQU87TUFFMUNFLE9BQU9RLGVBQWVvQixRQUFROUIsU0FBUztRQUN0Q1csTUFBRztVQUNGLElBQUksQ0FBQ21CLE9BQU9sQixlQUFlSixjQUFjLEdBQUc7WUFDM0NzQixPQUFPdEIsa0JBQWtCSjs7VUFFMUIsT0FBTzBCLE9BQU90QjtRQUNmO1FBQ0FLLElBQUlDLFFBQWtCO1VBQ3JCLElBQUlBLFdBQVdnQixPQUFPdEIsaUJBQWlCO1VBQ3ZDc0IsT0FBT3RCLGtCQUFrQk07VUFDekJnQixPQUFPZixjQUFZO1FBQ3BCO1FBQ0FDLFlBQVk7UUFDWkMsY0FBYztPQUNkO0lBQ0Y7SUFDa0IsU0FBVS9CLGVBQzNCYSxPQUFxQjtNQUVyQixPQUFPLFVBQVUrQixRQUFvRjtRQUNwRyxNQUFNQyxjQUFjLGVBQWVELFNBQVNBLE9BQU9QLFlBQVlPO1FBRS9ELFdBQVc5QixXQUFXRCxPQUFPO1VBQzVCLE1BQU1FLGFBQWFDLE9BQU9DLHlCQUF5QjRCLGFBQWEvQixPQUFPO1VBQ3ZFLE1BQU1JLGVBQWVILGFBQWFBLFdBQVdJLFFBQVFDO1VBRXJEQyxtQkFBbUJ3QixhQUFhL0IsU0FBU0ksWUFBWTs7TUFFdkQ7SUFDRDtJQUVNLFNBQVVHLG1CQUFzQnVCLFFBQTBCOUIsU0FBa0JJLGNBQXdCO01BQ3pHLE1BQU1JLGlCQUFpQixLQUFLQyxPQUFPVCxPQUFPO01BRTFDRSxPQUFPUSxlQUFlb0IsUUFBUTlCLFNBQVM7UUFDdENXLE1BQUc7VUFDRixJQUFJLENBQUNtQixPQUFPbEIsZUFBZUosY0FBYyxHQUFHO1lBQzNDc0IsT0FBT3RCLGtCQUFrQko7O1VBRTFCLE9BQU8wQixPQUFPdEI7UUFDZjtRQUNBSyxJQUFJQyxRQUFrQjtVQUNyQmdCLE9BQU9FLGdCQUFnQmhDLFNBQVNjLE1BQU07UUFDdkM7UUFDQUUsWUFBWTtRQUNaQyxjQUFjO09BQ2Q7SUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2RlbW8vb3V0In0=
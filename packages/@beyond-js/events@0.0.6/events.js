System.register(["@beyond-js/kernel@0.1.9/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/events","0.0.6"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep)],
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

// .beyond/uimport/temp/@beyond-js/events/events.0.0.6.js
var events_0_0_6_exports = {};
__export(events_0_0_6_exports, {
  Events: () => Events,
  ListenerFunction: () => ListenerFunction,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(events_0_0_6_exports);

// node_modules/@beyond-js/events/events/events.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/events@0.0.4/events"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./events", {
  hash: 3993267980,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Events = void 0;
    class Events2 {
      #specs;
      #listeners = /* @__PURE__ */new Map();
      #destroyed = false;
      get destroyed() {
        return this.#destroyed;
      }
      constructor(specs) {
        specs = specs ? specs : {};
        if (specs.supported && !(specs.supported instanceof Array)) throw new Error("Invalid parameters");
        this.#specs = specs;
        if (specs.bind) {
          specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);
          specs.bind.unbind = (event, listener) => this.off(event, listener);
        }
      }
      on(event, listener, priority) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (typeof listener !== "function") {
          throw new Error("Listener is not a function");
        }
        this.off(event, listener);
        const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
        this.#listeners.set(event, l);
        l.push({
          listener,
          priority: priority ? priority : 0
        });
        return this;
      }
      bind = (event, listener, priority) => this.on(event, listener, priority);
      off(event, listener, force) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (!event) {
          throw new Error(`Event name not specified`);
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (!listener) {
          if (!force) throw new Error("Listener function not set");
          this.#listeners.delete(event);
          return this;
        }
        if (!this.#listeners.has(event)) {
          return this;
        }
        const e = this.#listeners.get(event);
        const filtered = e.filter(item => item.listener !== listener);
        this.#listeners.set(event, filtered);
        return this;
      }
      unbind = (event, listener, force) => this.off(event, listener, force);
      trigger(event, ...rest) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        event = typeof event === "string" ? {
          name: event
        } : event;
        if (typeof event !== "object") throw new Error("Invalid parameters");
        if (typeof event.name !== "string") throw new Error("Invalid event name");
        if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
          throw new Error(`Event "${event.name}" is not defined`);
        }
        let args = [...arguments];
        args.shift();
        if (!this.#listeners.has(event.name)) return;
        let l = this.#listeners.get(event.name);
        l.sort((a, b) => b.priority - a.priority);
        if (event.async) {
          const trigger = async function () {
            const promises = [];
            for (let listener of l) {
              promises.push(listener.listener(...args));
            }
            await Promise.all(promises);
          };
          return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
        } else {
          for (let listener of l) {
            listener.listener(...args);
          }
        }
      }
      destroy() {
        this.#destroyed = true;
        this.#listeners.clear();
      }
    }
    exports.Events = Events2;
    globalThis.Events = Events2;
  }
});
ims.set("./types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
__pkg.exports.descriptor = [{
  "im": "./events",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}];
var Events, ListenerFunction;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Events") && (Events = require2 ? require2("./events").Events : value);
  (require2 || prop === "ListenerFunction") && (ListenerFunction = require2 ? require2("./types").ListenerFunction : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvZXZlbnRzL2V2ZW50cy4wLjAuNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2V2ZW50cy9ldmVudHMvX19zb3VyY2VzL2V2ZW50cy9ldmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9ldmVudHMvZXZlbnRzL19fc291cmNlcy9ldmVudHMvdHlwZXMudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJFdmVudHMiLCJMaXN0ZW5lckZ1bmN0aW9uIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiTWFwIiwiZGVzdHJveWVkIiwiY29uc3RydWN0b3IiLCJzcGVjcyIsInN1cHBvcnRlZCIsIkFycmF5IiwiRXJyb3IiLCJiaW5kIiwiZXZlbnQiLCJsaXN0ZW5lciIsInByaW9yaXR5Iiwib24iLCJ1bmJpbmQiLCJvZmYiLCJpbmNsdWRlcyIsImwiLCJoYXMiLCJnZXQiLCJzZXQiLCJwdXNoIiwiZm9yY2UiLCJkZWxldGUiLCJlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwidHJpZ2dlciIsInJlc3QiLCJuYW1lIiwiYXJncyIsImFyZ3VtZW50cyIsInNoaWZ0Iiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImRlc3Ryb3kiLCJjbGVhciIsImV4cG9ydHMiLCJnbG9iYWxUaGlzIiwiT2JqZWN0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRWlCLE1BQ1hKLFFBQU07TUFDUjtNQUNBLGFBQTJDLG1CQUFJSyxLQUFHO01BQ2xELGFBQWE7TUFDYixJQUFJQyxZQUFTO1FBQ1QsT0FBTyxLQUFLO01BQ2hCO01BRUFDLFlBQVlDLE9BQW1CO1FBQzNCQSxRQUFRQSxRQUFRQSxRQUFRO1FBRXhCLElBQUlBLE1BQU1DLGFBQWEsRUFBRUQsTUFBTUMscUJBQXFCQyxRQUFRLE1BQU0sSUFBSUMsTUFBTSxvQkFBb0I7UUFDaEcsS0FBSyxTQUFTSDtRQUVkLElBQUlBLE1BQU1JLE1BQU07VUFDWkosTUFBTUksS0FBS0EsT0FBTyxDQUFDQyxPQUFlQyxVQUE0QkMsYUFDMUQsS0FBS0MsR0FBR0gsT0FBT0MsVUFBVUMsUUFBUTtVQUNyQ1AsTUFBTUksS0FBS0ssU0FBUyxDQUFDSixPQUFPQyxhQUFhLEtBQUtJLElBQUlMLE9BQU9DLFFBQVE7O01BRXpFO01BVUFFLEdBQUdILE9BQWVDLFVBQTRCQyxVQUFpQjtRQUMzRCxJQUFJLEtBQUssWUFBWTtVQUNqQixNQUFNLElBQUlKLE1BQU0sNEJBQTRCOztRQUVoRCxJQUFJLEtBQUssT0FBT0YsYUFBYSxDQUFDLEtBQUssT0FBT0EsVUFBVVUsU0FBU04sS0FBSyxHQUFHO1VBQ2pFLE1BQU0sSUFBSUYsTUFBTSxVQUFVRSx1QkFBdUI7O1FBRXJELElBQUksT0FBT0MsYUFBYSxZQUFZO1VBQ2hDLE1BQU0sSUFBSUgsTUFBTSw0QkFBNEI7O1FBR2hELEtBQUtPLElBQUlMLE9BQU9DLFFBQVE7UUFFeEIsTUFBTU0sSUFBcUIsS0FBSyxXQUFXQyxJQUFJUixLQUFLLElBQUksS0FBSyxXQUFXUyxJQUFJVCxLQUFLLElBQUk7UUFDckYsS0FBSyxXQUFXVSxJQUFJVixPQUFPTyxDQUFDO1FBQzVCQSxFQUFFSSxLQUFLO1VBQUVWO1VBQW9CQyxVQUFVQSxXQUFXQSxXQUFXO1FBQUMsQ0FBRTtRQUVoRSxPQUFPO01BQ1g7TUFFQUgsT0FBTyxDQUFDQyxPQUFlQyxVQUE0QkMsYUFBc0IsS0FBS0MsR0FBR0gsT0FBT0MsVUFBVUMsUUFBUTtNQVUxR0csSUFBSUwsT0FBZUMsVUFBNEJXLE9BQWM7UUFDekQsSUFBSSxLQUFLLFlBQVk7VUFDakIsTUFBTSxJQUFJZCxNQUFNLDRCQUE0Qjs7UUFFaEQsSUFBSSxDQUFDRSxPQUFPO1VBQ1IsTUFBTSxJQUFJRixNQUFNLDBCQUEwQjs7UUFFOUMsSUFBSSxLQUFLLE9BQU9GLGFBQWEsQ0FBQyxLQUFLLE9BQU9BLFVBQVVVLFNBQVNOLEtBQUssR0FBRztVQUNqRSxNQUFNLElBQUlGLE1BQU0sVUFBVUUsdUJBQXVCOztRQUdyRCxJQUFJLENBQUNDLFVBQVU7VUFDWCxJQUFJLENBQUNXLE9BQU8sTUFBTSxJQUFJZCxNQUFNLDJCQUEyQjtVQUN2RCxLQUFLLFdBQVdlLE9BQU9iLEtBQUs7VUFDNUIsT0FBTzs7UUFHWCxJQUFJLENBQUMsS0FBSyxXQUFXUSxJQUFJUixLQUFLLEdBQUc7VUFDN0IsT0FBTzs7UUFHWCxNQUFNYyxJQUFJLEtBQUssV0FBV0wsSUFBSVQsS0FBSztRQUNuQyxNQUFNZSxXQUE0QkQsRUFBRUUsT0FBUUMsUUFBU0EsS0FBS2hCLGFBQWFBLFFBQVE7UUFDL0UsS0FBSyxXQUFXUyxJQUFJVixPQUFPZSxRQUFRO1FBRW5DLE9BQU87TUFDWDtNQUVBWCxTQUFTLENBQUNKLE9BQWVDLFVBQTRCVyxVQUFtQixLQUFLUCxJQUFJTCxPQUFPQyxVQUFVVyxLQUFLO01BU3ZHTSxRQUFRbEIsVUFBbUJtQixNQUFTO1FBQ2hDLElBQUksS0FBSyxZQUFZO1VBQ2pCLE1BQU0sSUFBSXJCLE1BQU0sNEJBQTRCOztRQUdoREUsUUFBUSxPQUFPQSxVQUFVLFdBQVc7VUFBRW9CLE1BQU1wQjtRQUFLLElBQUtBO1FBQ3RELElBQUksT0FBT0EsVUFBVSxVQUFVLE1BQU0sSUFBSUYsTUFBTSxvQkFBb0I7UUFDbkUsSUFBSSxPQUFPRSxNQUFNb0IsU0FBUyxVQUFVLE1BQU0sSUFBSXRCLE1BQU0sb0JBQW9CO1FBRXhFLElBQUksS0FBSyxPQUFPRixhQUFhLENBQUMsS0FBSyxPQUFPQSxVQUFVVSxTQUFTTixNQUFNb0IsSUFBSSxHQUFHO1VBQ3RFLE1BQU0sSUFBSXRCLE1BQU0sVUFBVUUsTUFBTW9CLHNCQUFzQjs7UUFHMUQsSUFBSUMsT0FBTyxDQUFDLEdBQUdDLFNBQVM7UUFDeEJELEtBQUtFLE9BQUs7UUFFVixJQUFJLENBQUMsS0FBSyxXQUFXZixJQUFJUixNQUFNb0IsSUFBSSxHQUFHO1FBRXRDLElBQUliLElBQUksS0FBSyxXQUFXRSxJQUFJVCxNQUFNb0IsSUFBSTtRQUd0Q2IsRUFBRWlCLEtBQUssQ0FBQ0MsR0FBR0MsTUFBTUEsRUFBRXhCLFdBQVd1QixFQUFFdkIsUUFBUTtRQUV4QyxJQUFJRixNQUFNMkIsT0FBTztVQUNiLE1BQU1ULFVBQVUsa0JBQUs7WUFDakIsTUFBTVUsV0FBVztZQUNqQixTQUFTM0IsWUFBWU0sR0FBRztjQUNwQnFCLFNBQVNqQixLQUFLVixTQUFTQSxTQUFTLEdBQUdvQixJQUFJLENBQUM7O1lBRzVDLE1BQU1RLFFBQVFDLElBQUlGLFFBQVE7VUFDOUI7VUFFQSxPQUFPVixRQUFRYSxLQUFLLE1BQU0sR0FBR1YsSUFBSSxFQUFFVyxNQUFPQyxPQUFlQyxRQUFRQyxNQUFNRixJQUFJRyxLQUFLLENBQUM7ZUFDOUU7VUFDSCxTQUFTbkMsWUFBWU0sR0FBRztZQUNwQk4sU0FBU0EsU0FBUyxHQUFHb0IsSUFBSTs7O01BR3JDO01BRUFnQixVQUFPO1FBQ0gsS0FBSyxhQUFhO1FBQ2xCLEtBQUssV0FBV0MsT0FBSztNQUN6Qjs7SUFDSEM7SUFFS0MsV0FBWXJELFNBQVNBOzs7Ozs7SUNsSjNCOztJQUVBc0Q7TUFDQUM7SUFDQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2RlbW8vb3V0In0=
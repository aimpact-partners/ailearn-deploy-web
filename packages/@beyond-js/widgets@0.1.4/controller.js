System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/@beyond-js/widgets/controller.0.1.4.js
var controller_0_1_4_exports = {};
__export(controller_0_1_4_exports, {
  IWidgetRendered: () => IWidgetRendered,
  IWidgetStore: () => IWidgetStore,
  WidgetAttributes: () => WidgetAttributes,
  WidgetClientController: () => WidgetClientController,
  WidgetControllerBase: () => WidgetControllerBase,
  WidgetServerController: () => WidgetServerController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(controller_0_1_4_exports);

// node_modules/@beyond-js/widgets/controller/controller.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.4/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.4/controller"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./attributes", {
  hash: 3176328789,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetAttributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetAttributes2 extends Map {
      #widget;
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      constructor(widget) {
        super();
        this.#widget = widget;
        let attrs = widget.specs.attrs;
        attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));
      }
      change(name, old, value) {
        this.set(name, value);
        this.#events.trigger("change");
        this.#events.trigger(`${name}:change`, value);
      }
    }
    exports.WidgetAttributes = WidgetAttributes2;
  }
});
ims.set("./client", {
  hash: 2102509577,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetClientController = void 0;
    var _controller = require2("./controller");
    var _attributes = require2("./attributes");
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetClientController2 extends _controller.WidgetControllerBase {
      #widget;
      get widget() {
        return this.#widget;
      }
      #store;
      get store() {
        return this.#store;
      }
      #attributes;
      get attributes() {
        return this.#attributes;
      }
      attributeChanged(name, old, value) {
        this.#attributes.change(name, old, value);
      }
      get styles() {
        const styles = this.#widget.styles;
        return styles;
      }
      constructor(widget) {
        super({
          widget
        });
        this.#widget = widget;
        this.#attributes = new _attributes.WidgetAttributes(widget);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        const links = () => [...styles.elements].map(style => style.href);
        !this.styles.initialised && this.styles.initialise(links());
        styles.on("change", () => this.styles.update(links()));
      }
      render() {
        try {
          this.mount();
        } catch (exc) {
          console.log(`Error mounting widget controller "${this.#widget.localName}":`);
          console.log(exc.stack);
        }
      }
      refresh() {
        this.unmount();
        this.render();
      }
      #refresh = () => this.refresh();
      disconnect() {
        this.unmount();
      }
      async initialise() {
        if (!this.Widget) {
          throw new Error(`The return value of the Widget property is undefined. "${this.#widget.localName}" widget`);
        }
        this.#store = this.createStore?.();
        const prerender = this.#widget.ssr.prerender;
        if (prerender) {
          const cached = prerender?.store;
          await this.#store?.hydrate(cached);
        }
        this.#store?.fetch?.();
        this.render();
        if (!_bundle.instances.has(this.specs.vspecifier)) {
          console.log(`Bundle id "${this.specs.vspecifier}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
          return;
        }
        const pkg = _bundle.instances.get(this.specs.vspecifier).package();
        pkg.hmr.on("change", this.#refresh);
      }
    }
    exports.WidgetClientController = WidgetClientController2;
  }
});
ims.set("./controller", {
  hash: 4127212824,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetControllerBase = void 0;
    var _render = require2("@beyond-js/widgets/render");
    class WidgetControllerBase2 {
      #specs;
      get specs() {
        return this.#specs;
      }
      get element() {
        return this.#specs.name;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      get Widget() {
        return;
      }
      createStore(language) {
        return void 0;
      }
      constructor({
        specs,
        widget
      }) {
        if (!specs) {
          const {
            localName
          } = widget;
          if (!_render.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
          specs = _render.widgets.get(localName);
        }
        this.#pkg = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          return scope ? `${scope}/${name}` : name;
        })();
        this.#specs = specs;
      }
    }
    exports.WidgetControllerBase = WidgetControllerBase2;
  }
});
ims.set("./ssr", {
  hash: 1515978368,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetServerController = void 0;
    var _controller = require2("./controller");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetServerController2 extends _controller.WidgetControllerBase {
      #styles = [];
      get styles() {
        return this.#styles;
      }
      constructor(params) {
        super(params);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        styles.elements.forEach(({
          href
        }) => this.#styles.push(href));
        this.#styles.unshift(`##_!${this.pkg}!_##global.css`);
      }
    }
    exports.WidgetServerController = WidgetServerController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "WidgetAttributes",
  "name": "WidgetAttributes"
}, {
  "im": "./client",
  "from": "WidgetClientController",
  "name": "WidgetClientController"
}, {
  "im": "./controller",
  "from": "IWidgetStore",
  "name": "IWidgetStore"
}, {
  "im": "./controller",
  "from": "WidgetControllerBase",
  "name": "WidgetControllerBase"
}, {
  "im": "./ssr",
  "from": "IWidgetRendered",
  "name": "IWidgetRendered"
}, {
  "im": "./ssr",
  "from": "WidgetServerController",
  "name": "WidgetServerController"
}];
var WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "WidgetAttributes") && (WidgetAttributes = require2 ? require2("./attributes").WidgetAttributes : value);
  (require2 || prop === "WidgetClientController") && (WidgetClientController = require2 ? require2("./client").WidgetClientController : value);
  (require2 || prop === "IWidgetStore") && (IWidgetStore = require2 ? require2("./controller").IWidgetStore : value);
  (require2 || prop === "WidgetControllerBase") && (WidgetControllerBase = require2 ? require2("./controller").WidgetControllerBase : value);
  (require2 || prop === "IWidgetRendered") && (IWidgetRendered = require2 ? require2("./ssr").IWidgetRendered : value);
  (require2 || prop === "WidgetServerController") && (WidgetServerController = require2 ? require2("./ssr").WidgetServerController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci4wLjEuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NsaWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL3Nzci50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIklXaWRnZXRSZW5kZXJlZCIsIklXaWRnZXRTdG9yZSIsIldpZGdldEF0dHJpYnV0ZXMiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiTWFwIiwiRXZlbnRzIiwib24iLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiY29uc3RydWN0b3IiLCJ3aWRnZXQiLCJhdHRycyIsInNwZWNzIiwiZm9yRWFjaCIsImF0dHIiLCJzZXQiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2UiLCJuYW1lIiwib2xkIiwidmFsdWUiLCJ0cmlnZ2VyIiwiZXhwb3J0cyIsInN0b3JlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWQiLCJzdHlsZXMiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJ2c3BlY2lmaWVyIiwibGlua3MiLCJlbGVtZW50cyIsIm1hcCIsInN0eWxlIiwiaHJlZiIsImluaXRpYWxpc2VkIiwiaW5pdGlhbGlzZSIsInVwZGF0ZSIsInJlbmRlciIsIm1vdW50IiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwicmVmcmVzaCIsInVubW91bnQiLCJkaXNjb25uZWN0IiwiV2lkZ2V0IiwiRXJyb3IiLCJjcmVhdGVTdG9yZSIsInByZXJlbmRlciIsInNzciIsImNhY2hlZCIsImh5ZHJhdGUiLCJmZXRjaCIsImJ1bmRsZXMiLCJoYXMiLCJwa2ciLCJnZXQiLCJwYWNrYWdlIiwiZWxlbWVudCIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJsYW5ndWFnZSIsIndpZGdldHMiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0IiwicGFyYW1zIiwicHVzaCIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFFaUIsTUFDWE4sMEJBQXlCTyxJQUFHO01BRTlCO01BRUEsVUFBVSxJQUFJQyxjQUFNO01BQ3BCQyxLQUFLLENBQUNDLE9BQWVDLGFBQWtCLEtBQUssUUFBUUYsR0FBR0MsT0FBT0MsUUFBUTtNQUN0RUMsTUFBTSxDQUFDRixPQUFlQyxhQUFrQixLQUFLLFFBQVFDLElBQUlGLE9BQU9DLFFBQVE7TUFFeEVFLFlBQVlDLFFBQW1CO1FBQzNCLE9BQUs7UUFDTCxLQUFLLFVBQVVBO1FBRWYsSUFBSUMsUUFBd0JELE9BQVFFLE1BQU1EO1FBQzFDQSxPQUFPRSxRQUFRQyxRQUFRLEtBQUtDLElBQUlELE1BQU1KLE9BQU9NLGFBQWFGLElBQUksQ0FBQyxDQUFDO01BQ3BFO01BRUFHLE9BQU9DLE1BQWNDLEtBQWFDLE9BQWE7UUFDM0MsS0FBS0wsSUFBSUcsTUFBTUUsS0FBSztRQUNwQixLQUFLLFFBQVFDLFFBQVEsUUFB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
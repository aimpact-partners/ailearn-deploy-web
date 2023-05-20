System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.4/render","@beyond-js/kernel@0.1.9/styles","@beyond-js/widgets@0.1.4/controller"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.4"],["@beyond-js/react-18-widgets","0.0.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.4/controller', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/base.0.0.5.js
var base_0_0_5_exports = {};
__export(base_0_0_5_exports, {
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_0_0_5_exports);

// node_modules/@beyond-js/react-18-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("react-dom@18.2.0/client"), 0);
var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.4/controller"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@0.0.4/base"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["react-dom/client", dependency_2], ["@beyond-js/widgets/controller", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./controller", {
  hash: 2510685826,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactWidgetController = void 0;
    var React = require2("react");
    var _client = require2("react-dom/client");
    var _controller = require2("@beyond-js/widgets/controller");
    var _widget = require2("./widget");
    var _wrapper = require2("./wrapper");
    class ReactWidgetController2 extends _controller.WidgetClientController {
      #wrapper;
      #root;
      #mounted = false;
      get mounted() {
        return this.#mounted;
      }
      get Widget() {
        return null;
      }
      mount(props) {
        if (this.#mounted) return;
        this.#mounted = true;
        if (!this.Widget) {
          return {
            errors: [`Widget "${this.element}" does not export a Widget class`]
          };
        }
        props = Object.assign({
          widget: this.widget,
          attributes: this.attributes,
          component: this.widget,
          store: this.store
        }, props ? props : {});
        const holder = this.widget.holder;
        const hydrate = !!holder.children.length;
        try {
          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
          const {
            styles,
            widget
          } = this;
          const {
            holder: holder2
          } = widget;
          const p = {
            wrapper,
            props,
            styles,
            holder: holder2,
            hydrate
          };
          const element = React.createElement(_widget.default, p);
          if (hydrate) {
            this.#root = (0, _client.hydrateRoot)(holder2, element);
          } else {
            const root = this.#root = (0, _client.createRoot)(holder2);
            root.render(element);
          }
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }
      unmount() {
        if (!this.#mounted) return;
        this.#mounted = false;
        this.#root.unmount();
      }
      refresh() {
        this.#wrapper.changed();
      }
    }
    exports.ReactWidgetController = ReactWidgetController2;
  }
});
ims.set("./styles", {
  hash: 3645751033,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    function _default({
      styles
    }) {
      const rs = React.useState(0);
      React.useEffect(() => {
        const refresh = () => rs[1](prev => prev + 1);
        styles.on("change", refresh);
        return () => styles.off("change", refresh) && void 0;
      }, []);
      const head = [...styles.resources].map(url => {
        const loaded = () => styles.onloaded(url);
        return React.createElement("link", {
          key: url,
          href: url,
          rel: "stylesheet",
          onLoad: loaded,
          onError: loaded
        });
      });
      return React.createElement(React.Fragment, null, head);
    }
  }
});
ims.set("./widget", {
  hash: 90867181,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    var _styles = require2("./styles");
    function _default({
      wrapper,
      props,
      styles,
      holder,
      hydrate
    }) {
      const elements = [];
      elements.push(React.createElement(_styles.default, {
        key: "styles",
        styles,
        widget: props.widget
      }));
      const rs = React.useState(0);
      const refresh = () => rs[1](rs[0] + 1);
      wrapper.changed = refresh;
      const loaded = (() => {
        !styles.loaded && styles.ready.then(refresh);
        holder.style.display = "";
        return styles.loaded;
      })();
      const {
        Widget
      } = wrapper;
      const widget = React.createElement(Widget, {
        key: "widget",
        ...props
      });
      (hydrate || loaded) && elements.push(widget);
      return React.createElement(React.Fragment, null, elements);
    }
  }
});
ims.set("./wrapper", {
  hash: 4175409966,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Wrapper = void 0;
    class Wrapper {
      #Widget;
      get Widget() {
        return this.#Widget.Widget;
      }
      changed = () => void 0;
      constructor(Widget) {
        this.#Widget = Widget;
      }
    }
    exports.Wrapper = Wrapper;
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "ReactWidgetController",
  "name": "ReactWidgetController"
}];
var ReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactWidgetController") && (ReactWidgetController = require2 ? require2("./controller").ReactWidgetController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS4wLjAuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3N0eWxlcy50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvd2lkZ2V0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93cmFwcGVyLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIm1vdW50ZWQiLCJXaWRnZXQiLCJtb3VudCIsInByb3BzIiwiZXJyb3JzIiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIndpZGdldCIsImF0dHJpYnV0ZXMiLCJjb21wb25lbnQiLCJzdG9yZSIsImhvbGRlciIsImh5ZHJhdGUiLCJjaGlsZHJlbiIsImxlbmd0aCIsIndyYXBwZXIiLCJXcmFwcGVyIiwic3R5bGVzIiwicCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInJvb3QiLCJyZW5kZXIiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJ1bm1vdW50IiwicmVmcmVzaCIsImNoYW5nZWQiLCJleHBvcnRzIiwicnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZXYiLCJvbiIsIm9mZiIsImhlYWQiLCJyZXNvdXJjZXMiLCJtYXAiLCJ1cmwiLCJsb2FkZWQiLCJvbmxvYWRlZCIsImtleSIsImhyZWYiLCJyZWwiLCJvbkxvYWQiLCJvbkVycm9yIiwiZWxlbWVudHMiLCJwdXNoIiwiU3R5bGVzIiwicmVhZHkiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVpQixNQUNGSCwrQkFBOEJJLG1DQUFzQjtNQUMvRDtNQUNBO01BRUEsV0FBVztNQUNYLElBQUlDLFVBQU87UUFDUCxPQUFPLEtBQUs7TUFDaEI7TUFHQSxJQUFJQyxTQUFNO1FBQ04sT0FBTztNQUNYO01BRUFDLE1BQU1DLE9BQTJCO1FBQzdCLElBQUksS0FBSyxVQUFVO1FBQ25CLEtBQUssV0FBVztRQUVoQixJQUFJLENBQUMsS0FBS0YsUUFBUTtVQUNkLE9BQU87WUFBQ0csUUFBUSxDQUFDLFdBQVcsS0FBS0MseUNBQXlDO1VBQUM7O1FBRy9FRixRQUFRRyxPQUFPQyxPQUFPO1VBQ2xCQyxRQUFRLEtBQUtBO1VBQ2JDLFlBQVksS0FBS0E7VUFDakJDLFdBQVcsS0FBS0Y7VUFDaEJHLE9BQU8sS0FBS0E7V0FDYlIsUUFBUUEsUUFBUSxFQUFFO1FBRXJCLE1BQU1TLFNBQWdDLEtBQUtKLE9BQVFJO1FBQ25ELE1BQU1DLFVBQVUsQ0FBQyxDQUFDRCxPQUFPRSxTQUFTQztRQUdsQyxJQUFJO1VBQ0EsTUFBTUMsVUFBVSxLQUFLLFdBQVcsSUFBSUMsaUJBQVEsSUFBSTtVQUNoRCxNQUFNO1lBQUNDO1lBQVFWO1VBQU0sSUFBSTtVQUN6QixNQUFNO1lBQUNJO1VBQU0sSUFBVUo7VUFDdkIsTUFBTVcsSUFBSTtZQUFDSDtZQUFTYjtZQUFPZTtZQUFRTjtZQUFRQztVQUFPO1VBQ2xELE1BQU1SLFVBQVVlLE1BQU1DLGNBQWNw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
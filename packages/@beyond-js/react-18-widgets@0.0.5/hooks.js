System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@beyond-js/react-18-widgets","0.0.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/hooks.0.0.5.js
var hooks_0_0_5_exports = {};
__export(hooks_0_0_5_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder
});
module.exports = __toCommonJS(hooks_0_0_5_exports);

// node_modules/@beyond-js/react-18-widgets/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@0.0.4/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 364360737,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useBinder = useBinder2;
    var React = require2("react");
    function useBinder2(objects, onBinder, event = "change") {
      React.useEffect(() => {
        objects.forEach(object => {
          if (!object) throw new Error(`object is not valid in useBinder ${object}`);
          object.on(event, onBinder);
        });
        return () => objects.forEach(object => object.off(event, onBinder));
      }, []);
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "useBinder",
  "name": "useBinder"
}];
var useBinder;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "useBinder") && (useBinder = require2 ? require2("./index").useBinder : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MuMC4wLjUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2hvb2tzL19fc291cmNlcy9ob29rcy9pbmRleC50cyJdLCJuYW1lcyI6WyJob29rc18wXzBfNV9leHBvcnRzIiwiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJ1c2VCaW5kZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJyZXF1aXJlMiIsInVzZUJpbmRlcjIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudCIsInVzZUVmZmVjdCIsImZvckVhY2giLCJvYmplY3QiLCJFcnJvciIsIm9uIiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUSxLQUFBLEdBQUFDLFFBQUE7SUFVaUIsU0FDUkMsV0FBVUMsT0FBQSxFQUFnQkMsUUFBQSxFQUFzQkMsS0FBQSxHQUFnQixVQUFRO01BQzdFTCxLQUFBLENBQU1NLFNBQUEsQ0FBVSxNQUFtQjtRQUMvQkgsT0FBQSxDQUFRSSxPQUFBLENBQVNDLE1BQUEsSUFBcUI7VUFDbEMsSUFBSSxDQUFDQSxNQUFBLEVBQVEsTUFBTSxJQUFJQyxLQUFBLENBQU0sb0NBQW9DRCxNQUFBLEVBQVE7VUFDekVBLE1BQUEsQ0FBT0UsRUFBQSxDQUFHTCxLQUFBLEVBQU9ELFFBQVE7UUFDN0IsQ0FBQztRQUNELE9BQU8sTUFBWUQsT0FBQSxDQUFRSSxPQUFBLENBQVNDLE1BQUEsSUFBZ0JBLE1BQUEsQ0FBT0csR0FBQSxDQUFJTixLQUFBLEVBQU9ELFFBQVEsQ0FBQztNQUNuRixHQUFHLEVBQUU7SUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpbGVhcm4vb3V0In0=
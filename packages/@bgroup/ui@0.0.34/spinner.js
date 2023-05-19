System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/temp/@bgroup/ui/spinner.0.0.34.js
var spinner_0_0_34_exports = {};
__export(spinner_0_0_34_exports, {
  BeyondSpinner: () => BeyondSpinner,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(spinner_0_0_34_exports);

// node_modules/@bgroup/ui/spinner/spinner.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/spinner"
  },
  "type": "code",
  "name": "spinner"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/styles", dependency_2]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/spinner");
var ims = /* @__PURE__ */new Map();
ims.set("./spiner", {
  hash: 2921182323,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondSpinner = void 0;
    var _react = require2("react");
    const BeyondSpinner2 = (0, _react.forwardRef)((props, ref) => {
      const {
        color,
        className,
        primary,
        secondary,
        size
      } = props;
      let stroke;
      if (primary) stroke = "var(--primary)";else if (secondary) stroke = "var(--secondary)";else if (color) stroke = color;else stroke = "var(--primary)";
      const cls = className ? `${className} beyond-element-spinner` : "beyond-element-spinner";
      const style = {
        style: {}
      };
      if (size) {
        style.style.height = size;
        style.style.width = size;
      }
      ;
      return _react.default.createElement("div", {
        className: cls,
        ref,
        ...style
      }, _react.default.createElement("svg", {
        viewBox: "0 0 100 100"
      }, _react.default.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "20",
        style: {
          stroke
        }
      })));
    });
    exports.BeyondSpinner = BeyondSpinner2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./spiner",
  "from": "BeyondSpinner",
  "name": "BeyondSpinner"
}];
var BeyondSpinner;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondSpinner") && (BeyondSpinner = require2 ? require2("./spiner").BeyondSpinner : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZ3JvdXAvdWkvc3Bpbm5lci4wLjAuMzQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9zcGlubmVyL19fc291cmNlcy9zcGlubmVyL2NvZGUvdHMvc3BpbmVyLnRzeCJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkJleW9uZFNwaW5uZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJwcm9wcyIsInJlZiIsImNvbG9yIiwiY2xhc3NOYW1lIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInNpemUiLCJzdHJva2UiLCJjbHMiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiUmVhY3QiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQWNFLE1BQU1ILGtCQUVGLHNCQUNGLENBQUNJLE9BQW1CQyxRQUErQztNQUNqRSxNQUFNO1FBQUVDO1FBQU9DO1FBQVdDO1FBQVNDO1FBQVdDO01BQUksSUFBS047TUFDdkQsSUFBSU87TUFDSixJQUFJSCxTQUFTRyxTQUFTLDBCQUNiRixXQUFXRSxTQUFTLDRCQUNwQkwsT0FBT0ssU0FBU0wsV0FDcEJLLFNBQVM7TUFFZCxNQUFNQyxNQUFjTCxZQUNoQixHQUFHQSxxQ0FDSDtNQUNKLE1BQU1NLFFBQWE7UUFBRUEsT0FBTztNQUFFO01BQzlCLElBQUlILE1BQU07UUFDUkcsTUFBTUEsTUFBTUMsU0FBU0o7UUFDckJHLE1BQU1BLE1BQU1FLFFBQVFMOztNQUNyQjtNQUNELE9BQ0VNO1FBQUtULFdBQVdLO1FBQUtQO1FBQVEsR0FBTVE7TUFBSyxHQUN0Q0c7UUFBS0MsU0FBUTtNQUFhLEdBQ3hCRDtRQUFRRSxJQUFHO1FBQUtDLElBQUc7UUFBS0MsR0FBRTtRQUFLUCxPQUFPO1VBQUVGO1FBQU07TUFBRSxFQUFJLENBQ2hEO0lBR1osQ0FBQztJQUNEVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2RlbW8vb3V0In0=
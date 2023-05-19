System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/routing","@beyond-js/kernel@0.1.9/styles","@bgroup/ui@0.0.34/icons","@bgroup/ui@0.0.34/spinner"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@bgroup/ui@0.0.34/icons', dep), dep => dependencies.set('@bgroup/ui@0.0.34/spinner', dep)],
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

// .beyond/uimport/temp/@bgroup/ui/form.0.0.34.js
var form_0_0_34_exports = {};
__export(form_0_0_34_exports, {
  BeyondButton: () => BeyondButton,
  BeyondCheckbox: () => BeyondCheckbox,
  BeyondForm: () => BeyondForm,
  BeyondInput: () => BeyondInput,
  BeyondRadio: () => BeyondRadio,
  BeyondSwitch: () => BeyondSwitch,
  BeyondTextarea: () => BeyondTextarea,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(form_0_0_34_exports);

// node_modules/@bgroup/ui/form/form.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var dependency_3 = __toESM(require("@bgroup/ui@0.0.34/icons"), 0);
var dependency_4 = __toESM(require("@bgroup/ui@0.0.34/spinner"), 0);
var dependency_5 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/form"
  },
  "type": "code",
  "name": "form"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/routing", dependency_2], ["@bgroup/ui/icons", dependency_3], ["@bgroup/ui/spinner", dependency_4], ["@beyond-js/kernel/styles", dependency_5]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/form");
var ims = /* @__PURE__ */new Map();
ims.set("./button", {
  hash: 2952778037,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondButton = BeyondButton2;
    var _react = require2("react");
    var _routing = require2("@beyond-js/kernel/routing");
    var _icons = require2("@bgroup/ui/icons");
    var _spinner = require2("@bgroup/ui/spinner");
    ;
    function BeyondButton2(props) {
      const {
        className,
        onClick,
        data,
        label,
        children,
        icon,
        loading,
        colorSpinner
      } = props;
      const onClickButton = event => {
        if (onClick && typeof onClick === "function") {
          onClick(event);
          return;
        }
        if (props.navigate) _routing.routing.pushState(`${props.navigate}`);
      };
      props.title ? props["data-tippy-content"] = props.title : null;
      const properties = {
        ...props,
        type: !!props.type ? props.type : "button"
      };
      if (data) {
        let properties2 = Object.keys(data);
        properties2.map(entry => props[`data-${entry}`] = data[entry]);
      }
      let cls = className ? `${className} beyond-button` : "beyond-button";
      cls += icon ? " has-icon" : "";
      delete properties.label;
      delete properties.icon;
      delete properties.children;
      delete properties.className;
      delete properties.loading;
      delete properties.colorSpinner;
      return _react.default.createElement("button", {
        className: cls,
        ...properties,
        onClick: onClickButton
      }, icon && _react.default.createElement(_icons.BeyondIcon, {
        icon
      }), label, loading ? _react.default.createElement(_spinner.BeyondSpinner, {
        color: colorSpinner ?? "var(--primary)"
      }) : children);
    }
  }
});
ims.set("./checkbox", {
  hash: 1973127589,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondCheckbox = void 0;
    var React = require2("react");
    ;
    const BeyondCheckbox2 = (0, React.forwardRef)((props, ref) => {
      const {
        checked,
        name,
        disabled,
        className,
        onChange,
        label
      } = props;
      const [state, setState] = (0, React.useState)({
        checked: !!checked
      });
      const handleChange = event => {
        setState({
          checked: !checked
        });
        onChange && onChange(event);
      };
      let cls = `beyond-checkbox ${className ? className : ""}`;
      cls += disabled ? " disabled" : "";
      const properties = Object.assign({}, props);
      delete properties.className;
      delete properties.checked;
      delete properties.name;
      delete properties.onChange;
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: cls
      }, React.createElement("input", {
        style: {
          display: "none"
        },
        ref,
        type: "checkbox",
        className: "inp-cbx",
        id: name,
        name,
        checked: checked ?? state.checked,
        onChange: handleChange,
        ...properties
      }), React.createElement("label", {
        className: "cbx",
        htmlFor: name
      }, React.createElement("span", null, React.createElement("svg", {
        width: "12px",
        height: "9px",
        viewBox: "0 0 12 9"
      }, React.createElement("polyline", {
        points: "1 5 4 8 11 1"
      }))), React.createElement("span", null, label))));
    });
    exports.BeyondCheckbox = BeyondCheckbox2;
  }
});
ims.set("./form", {
  hash: 212622146,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondForm = BeyondForm2;
    var _react = require2("react");
    function BeyondForm2(props) {
      const onSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        props.onSubmit(event);
      };
      const properties = Object.assign({}, props);
      delete properties.onSubmit;
      return _react.default.createElement("form", {
        onSubmit,
        ...properties
      }, props.children);
    }
    ;
  }
});
ims.set("./input", {
  hash: 1841520349,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondInput = BeyondInput2;
    var React = require2("react");
    var _icons = require2("@bgroup/ui/icons");
    var _spinner = require2("@bgroup/ui/spinner");
    ;
    function BeyondInput2(props) {
      const input = (0, React.useRef)(null);
      const [state, setState] = (0, React.useState)({
        value: props.value ?? "",
        errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
        lengthMessage: "Cantidad m\xE1xima: ",
        emptyMessage: "Este campo es requerido",
        type: props.type ?? "text"
      });
      const handleChange = event => {
        if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
        setState({
          ...state,
          _hasError: false,
          value: event.target.value
        });
      };
      const getError = hasError => {
        if (!state._hasError && !hasError) return;
        let errorMessage = state.emptyMessage;
        if (hasError || input.current.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
        if (props.max && parseFloat(input.current.value) > parseInt(props.max)) {
          errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
        }
        return React.createElement("span", {
          className: "beyond-element-input-error"
        }, errorMessage);
      };
      const changeType = event => {
        event.stopPropagation();
        const target = event.currentTarget;
        setState({
          ...state,
          type: target.dataset.type
        });
      };
      const error = getError(props.hasError);
      let properties = {
        ...props
      };
      let cls = props.className ? `${props.className} beyond-element-input` : "beyond-element-input";
      cls += props.icon || props.loading || props.password || props.required ? " has-icon" : "";
      cls += props.disabled ? " disabled" : "";
      cls += props.hasError ? " error" : "";
      delete properties.className;
      delete properties.hasError;
      delete properties.errorMessage;
      delete properties.children;
      delete properties.icon;
      delete properties.label;
      delete properties.password;
      delete properties.loading;
      delete properties.colorSpinner;
      return React.createElement("div", {
        className: cls
      }, React.createElement(React.Fragment, null, props.icon && React.createElement(_icons.BeyondIcon, {
        icon: props.icon
      }), React.createElement("input", {
        ref: input,
        ...properties,
        name: props.name,
        onChange: handleChange,
        type: state.type,
        value: typeof props.value !== "undefined" ? props.value : state.value,
        placeholder: props.placeholder ?? " ",
        id: props.id ?? props.name
      }), props.children, error, props.label && React.createElement("label", {
        htmlFor: props.id ?? props.name
      }, props.label), props.loading && React.createElement(_spinner.BeyondSpinner, {
        color: props.colorSpinner ?? "var(--primary)"
      }), props.password && (state.type === "password" ? React.createElement(_icons.BeyondIconButton, {
        onClick: changeType,
        "data-type": "text",
        className: "eye",
        icon: "eye"
      }) : React.createElement(_icons.BeyondIconButton, {
        onClick: changeType,
        className: "eye",
        "data-type": "password",
        icon: "eye-slash"
      })), props.required && React.createElement("span", {
        className: "beyond-input__required-label"
      }, "(*)")));
    }
  }
});
ims.set("./radio", {
  hash: 3215233530,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondRadio = BeyondRadio2;
    var _react = require2("react");
    function BeyondRadio2(props) {
      const input = (0, _react.useRef)();
      const onClick = event => {
        input.current.checked = true;
        if (!!props.onChange) props.onChange(event);
      };
      const properties = {
        ...props
      };
      delete properties.onChange;
      const cls = `beyond-element-radio ${properties.className ? properties.className : ""}`;
      return _react.default.createElement("div", {
        className: cls
      }, _react.default.createElement("input", {
        ref: input,
        ...properties,
        type: "radio",
        onChange: onClick
      }), properties.label && _react.default.createElement("label", {
        htmlFor: properties.id
      }, properties.label));
    }
    ;
  }
});
ims.set("./switch", {
  hash: 430157124,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondSwitch = void 0;
    var React = require2("react");
    ;
    const BeyondSwitch2 = (0, React.forwardRef)((props, ref) => {
      const {
        value,
        checked,
        required,
        name,
        disabled,
        className,
        onChange,
        onClick
      } = props;
      const [state, setState] = (0, React.useState)({
        checked: !!checked
      });
      const handleChange = event => {
        setState({
          checked: !checked
        });
        onChange && onChange(event);
      };
      const handleClick = event => {
        onClick && onClick(event);
      };
      let cls = `beyond-element-switch ${className ? className : ""}`;
      cls += disabled ? " disabled" : "";
      const properties = Object.assign({}, props);
      delete properties.className;
      delete properties.disabled;
      delete properties.checked;
      delete properties.name;
      delete properties.required;
      delete properties.onChange;
      delete properties.onClick;
      delete properties.value;
      return React.createElement("div", {
        className: cls,
        onClick: handleClick,
        ...properties
      }, React.createElement("label", {
        className: "switch"
      }, React.createElement("input", {
        ref,
        type: "checkbox",
        required,
        name,
        value,
        checked: checked ?? state.checked,
        disabled,
        onChange: handleChange,
        placeholder: name
      }), React.createElement("span", {
        className: "slider"
      })));
    });
    exports.BeyondSwitch = BeyondSwitch2;
  }
});
ims.set("./textarea", {
  hash: 2311693849,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondTextarea = BeyondTextarea2;
    var React = require2("react");
    ;
    function BeyondTextarea2(props) {
      const input = props.ref ?? (0, React.useRef)();
      const [state, setState] = (0, React.useState)({
        value: props.value ?? "",
        errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
        lengthMessage: "Cantidad m\xE1xima: ",
        emptyMessage: "Este campo es requerido"
      });
      const handleChange = event => {
        if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
        setState({
          ...state,
          _hasError: false,
          value: event.target.value
        });
      };
      const getError = hasError => {
        if (!state._hasError && !hasError) return;
        let errorMessage = state.emptyMessage;
        if (hasError || input.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
        if (props.max && parseFloat(input.value) > parseInt(props.max)) {
          errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
        }
        return React.createElement("span", {
          className: "beyond-element-input-error"
        }, errorMessage);
      };
      const error = getError(props.hasError);
      let properties = {
        ...props
      };
      let cls = props.className ? `${props.className} beyond-element-textarea` : "beyond-element-textarea";
      cls += props.disabled ? " disabled" : "";
      cls += props.hasError ? " error" : "";
      delete properties.className;
      delete properties.hasError;
      delete properties.errorMessage;
      delete properties.children;
      delete properties.label;
      return React.createElement("div", {
        className: cls
      }, React.createElement(React.Fragment, null, React.createElement("textarea", {
        ref: input,
        ...properties,
        name: props.name,
        onChange: handleChange,
        value: typeof props.value !== "undefined" ? props.value : state.value,
        placeholder: props.placeholder ?? " "
      }), props.children, error, props.label && React.createElement("label", {
        htmlFor: props.id
      }, props.label), props.required && React.createElement("span", {
        className: "beyond-input__required-label"
      }, "(*)")));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./button",
  "from": "BeyondButton",
  "name": "BeyondButton"
}, {
  "im": "./checkbox",
  "from": "BeyondCheckbox",
  "name": "BeyondCheckbox"
}, {
  "im": "./form",
  "from": "BeyondForm",
  "name": "BeyondForm"
}, {
  "im": "./input",
  "from": "BeyondInput",
  "name": "BeyondInput"
}, {
  "im": "./radio",
  "from": "BeyondRadio",
  "name": "BeyondRadio"
}, {
  "im": "./switch",
  "from": "BeyondSwitch",
  "name": "BeyondSwitch"
}, {
  "im": "./textarea",
  "from": "BeyondTextarea",
  "name": "BeyondTextarea"
}];
var BeyondButton, BeyondCheckbox, BeyondForm, BeyondInput, BeyondRadio, BeyondSwitch, BeyondTextarea;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondButton") && (BeyondButton = require2 ? require2("./button").BeyondButton : value);
  (require2 || prop === "BeyondCheckbox") && (BeyondCheckbox = require2 ? require2("./checkbox").BeyondCheckbox : value);
  (require2 || prop === "BeyondForm") && (BeyondForm = require2 ? require2("./form").BeyondForm : value);
  (require2 || prop === "BeyondInput") && (BeyondInput = require2 ? require2("./input").BeyondInput : value);
  (require2 || prop === "BeyondRadio") && (BeyondRadio = require2 ? require2("./radio").BeyondRadio : value);
  (require2 || prop === "BeyondSwitch") && (BeyondSwitch = require2 ? require2("./switch").BeyondSwitch : value);
  (require2 || prop === "BeyondTextarea") && (BeyondTextarea = require2 ? require2("./textarea").BeyondTextarea : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZ3JvdXAvdWkvZm9ybS4wLjAuMzQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvYnV0dG9uLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2Zvcm0vX19zb3VyY2VzL2Zvcm0vY29kZS90cy9jaGVja2JveC50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvZm9ybS50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvaW5wdXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL3JhZGlvLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2Zvcm0vX19zb3VyY2VzL2Zvcm0vY29kZS90cy9zd2l0Y2gudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL3RleHRhcmVhLnRzeCJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkJleW9uZEJ1dHRvbiIsIkJleW9uZENoZWNrYm94IiwiQmV5b25kRm9ybSIsIkJleW9uZElucHV0IiwiQmV5b25kUmFkaW8iLCJCZXlvbmRTd2l0Y2giLCJCZXlvbmRUZXh0YXJlYSIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsInByb3BzIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRhdGEiLCJsYWJlbCIsImNoaWxkcmVuIiwiaWNvbiIsImxvYWRpbmciLCJjb2xvclNwaW5uZXIiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJuYXZpZ2F0ZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImVudHJ5IiwiY2xzIiwiUmVhY3QiLCJCZXlvbmRJY29uIiwiQmV5b25kU3Bpbm5lciIsImNvbG9yIiwicmVmIiwiY2hlY2tlZCIsIm5hbWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImFzc2lnbiIsInN0eWxlIiwiZGlzcGxheSIsImlkIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBvaW50cyIsImV4cG9ydHMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaW5wdXQiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxlbmd0aE1lc3NhZ2UiLCJlbXB0eU1lc3NhZ2UiLCJfaGFzRXJyb3IiLCJ0YXJnZXQiLCJnZXRFcnJvciIsImhhc0Vycm9yIiwiY3VycmVudCIsIm1heCIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsImNoYW5nZVR5cGUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVycm9yIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiQmV5b25kSWNvbkJ1dHRvbiIsImhhbmRsZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUNBO0lBQ0E7SUFDQTtJQVVDO0lBRWdCLFNBQ1BULGNBQWFVLE9BQVk7TUFDbEMsTUFBTTtRQUFFQztRQUFXQztRQUFTQztRQUFNQztRQUFPQztRQUFVQztRQUFNQztRQUFTQztNQUFZLElBQUtSO01BRW5GLE1BQU1TLGdCQUFpQkMsU0FBOEM7UUFDcEUsSUFBSVIsV0FBVyxPQUFPQSxZQUFZLFlBQVk7VUFDN0NBLFFBQVFRLEtBQUs7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YSxZQUNoRDlCLE1BQU04QixTQUFTcEIsS0FBSztRQUN0QnNCLFNBQVM7VUFDUCxHQUFHRDtVQUNIcUIsV0FBVztVQUNYSixPQUFPdEMsTUFBTTJDLE9BQU9MO1NBQ3JCO01BQ0g7TUFFQSxNQUFNTSxXQUNKQyxZQUNpQztRQUNqQyxJQUFJLENBQUN4QixNQUFNcUIsYUFBYSxDQUFDRyxVQUFVO1FBRW5DLElBQUlOLGVBQXVCbEIsTUFBTW9CO1FBRWpDLElBQUlJLFlBQVlSLE1BQU1DLFVBQVUsSUFDOUJDLGVBQWVqRCxNQUFNaUQsZUFDakJqRCxNQUFNaUQsZUFDTmxCLE1BQU1rQjtRQUVaLElBQUlqRCxNQUFNeUQsT0FBT0MsV0FBV1gsTUFBTUMsS0FBSyxJQUFJVyxTQUFTM0QsTUFBTXlELEdBQUcsR0FBRztVQUM5RFIsZUFBZWpELE1BQU1rRCxnQkFDakJsRCxNQUFNa0QsZ0JBQ05uQixNQUFNbUIsZ0JBQWdCLFNBQVNsRCxNQUFNeUQ7O1FBRzNDLE9BQU9uQztVQUFNckIsV0FBVTtRQUE0QixHQUFFZ0QsWUFBWTtNQUNuRTtNQUVBLE1BQU1jLFFBQXVDVCxTQUFTdEQsTUFBTXVELFFBQVE7TUFDcEUsSUFBSXhDLGFBQW9CO1FBQUUsR0FBR2Y7TUFBSztNQUNsQyxJQUFJcUIsTUFBY3JCLE1BQU1DLFlBQ3BCLEdBQUdELE1BQU1DLHNDQUNUO01BQ0pvQixPQUFPckIsTUFBTTZCLFdBQVcsY0FBYztNQUN0Q1IsT0FBT3JCLE1BQU11RCxXQUFXLFdBQVc7TUFFbkMsT0FBT3hDLFdBQVdkO01BQ2xCLE9BQU9jLFdBQVd3QztNQUNsQixPQUFPeEMsV0FBV2tDO01BQ2xCLE9BQU9sQyxXQUFXVjtNQUNsQixPQUFPVSxXQUFXWDtNQUVsQixPQUNFa0I7UUFBS3JCLFdBQVdvQjtNQUFHLEdBQ2pCQywwQ0FDRUE7UUFDRUksS0FBS3FCO1FBQUssR0FDTmhDO1FBQ0phLE1BQU01QixNQUFNNEI7UUFDWkUsVUFBVUc7UUFDVmUsT0FBTyxPQUFPaEQsTUFBTWdELFVBQVUsY0FBY2hELE1BQU1nRCxRQUFRakIsTUFBTWlCO1FBQ2hFa0IsYUFBYWxFLE1BQU1rRSxlQUFlO01BQUcsSUFFdENsRSxNQUFNSyxVQUNOMEQsT0FDQS9ELE1BQU1JLFNBQVNrQjtRQUFPZ0IsU0FBU3RDLE1BQU1xQztNQUFFLEdBQUdyQyxNQUFNSSxLQUFLLEdBQ3JESixNQUFNaUUsWUFDTDNDO1FBQU1yQixXQUFVO01BQThCLFNBQy9DLENBQ0E7SUFHVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2RlbW8vb3V0In0=
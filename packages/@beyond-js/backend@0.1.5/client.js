System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/backend","0.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],
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

// .beyond/uimport/temp/@beyond-js/backend/client.0.1.5.js
var client_0_1_5_exports = {};
__export(client_0_1_5_exports, {
  ActionsBridge: () => ActionsBridge,
  Backend: () => Backend,
  __beyond_pkg: () => __beyond_pkg,
  backends: () => backends,
  hmr: () => hmr
});
module.exports = __toCommonJS(client_0_1_5_exports);

// node_modules/@beyond-js/backend/client/client.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/backend@0.1.5/client"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./action/bridge", {
  hash: 2081575659,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ActionsBridge = void 0;
    var _ = require2("./");
    class ActionsBridge2 {
      #distribution;
      #bundle;
      #backend;
      constructor(distribution, bundle) {
        this.#distribution = distribution;
        this.#bundle = bundle.specifier;
        this.#backend = `${bundle.module.pkg}/${this.#distribution}`;
      }
      async execute(action, ...params) {
        const a = new _.default(this.#backend, this.#bundle, action, ...params);
        return await a.execute();
      }
    }
    exports.ActionsBridge = ActionsBridge2;
  }
});
ims.set("./action/execution-error", {
  hash: 3368390780,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExecutionError = void 0;
    const ExecutionError = class {
      #message;
      get message() {
        return this.#message;
      }
      #stack;
      get stack() {
        return this.#stack;
      }
      constructor(message, stack) {
        this.#message = message;
        this.#stack = stack;
      }
    };
    exports.ExecutionError = ExecutionError;
  }
});
ims.set("./action/index", {
  hash: 2047620412,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _backends = require2("../backends");
    var _executionError = require2("./execution-error");
    let autoincrement = 0;
    class _default extends _core.Events {
      #pkg;
      #request;
      #module;
      get module() {
        return this.#module;
      }
      #action;
      get action() {
        return this.#action;
      }
      #params;
      get params() {
        return this.#params;
      }
      constructor(backend, module2, action, ...params) {
        super();
        const id = this.#id;
        const pkg = this.#pkg = (() => {
          const split = backend.split("/");
          split.pop();
          return split.join("/");
        })();
        this.#module = module2;
        this.#action = action;
        this.#params = params;
        this.#request = {
          id,
          pkg,
          module: module2,
          action,
          params
        };
      }
      #id = ++autoincrement;
      get id() {
        return this.#id;
      }
      #channel = `response-v2-${this.#id}`;
      get channel() {
        return this.#channel;
      }
      #executed = false;
      get executed() {
        return this.#executed;
      }
      #executing = false;
      get executing() {
        return this.#executing;
      }
      #error = false;
      get error() {
        return this.#error;
      }
      #timer;
      #attempts = 0;
      #promise = new _core.PendingPromise();
      #send = socket => {
        this.#attempts && this.trigger("retrying", this.#attempts);
        this.#attempts++;
        try {
          socket.emit("rpc-v2", this.#request);
        } catch (exc) {
          this.#executing = false;
          this.#executed = true;
          this.#error = true;
          this.#promise.reject(exc);
        }
      };
      async execute() {
        if (this.#executing || this.#executed) return this.#promise;
        this.#executing = true;
        const backend = await _backends.backends.get(this.#pkg);
        if (!backend) throw new Error(`Project "${this.#pkg}" does not have a backend configured`);
        try {
          const socket = await backend.socket;
          if (!socket) {
            const message = `Error getting socket on "${backend.pkg}" backend. `;
            this.#promise.reject(new Error(message));
            return;
          }
          const onresponse = response => {
            this.#executed = true;
            this.#executing = false;
            clearTimeout(this.#timer);
            socket.off(this.#channel, onresponse);
            const {
              error,
              message,
              source,
              processingTime
            } = response;
            error ? this.#promise.reject(new _executionError.ExecutionError(error.message, error.stack)) : this.#promise.resolve(message);
          };
          socket.on(this.#channel, onresponse);
          this.#send(socket);
        } catch (exc) {
          this.#promise.reject(exc);
          return;
        }
        return this.#promise;
      }
    }
    exports.default = _default;
  }
});
ims.set("./backend", {
  hash: 486330626,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Backend = void 0;
    var _io = require2("./io");
    var _socket = require2("./socket");
    class Backend2 {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      #host;
      get host() {
        return this.#host;
      }
      #local;
      get local() {
        return this.#local;
      }
      #socket;
      #io = new _io.ServiceIOConfiguration();
      get io() {
        return this.#io;
      }
      constructor(pkg, host, local) {
        this.#pkg = pkg;
        this.#host = host;
        this.#local = local;
        this.#socket = new _socket.default(this);
      }
      get socket() {
        return this.#socket.get();
      }
    }
    exports.Backend = Backend2;
  }
});
ims.set("./backends", {
  hash: 1705909413,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.backends = void 0;
    var _backend = require2("./backend");
    const backends2 = new class {
      #hosts = /* @__PURE__ */new Map();
      register(pkg, host) {
        !this.#hosts.has(pkg) && this.#hosts.set(pkg, new _backend.Backend(pkg, host));
      }
      async get(pkg) {
        if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
        try {
          const {
            backend: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config) {
            console.log(`Backend configuration not set on package "${pkg}"`);
            this.#hosts.set(pkg, void 0);
            return;
          }
          const {
            host,
            local
          } = config;
          if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
          const backend = new _backend.Backend(pkg, host, local);
          this.#hosts.set(pkg, backend);
          return this.#hosts.get(pkg);
        } catch (exc) {
          console.log(`Error importing package "${pkg}" configuration: ${exc.message}`);
          this.#hosts.set(pkg, void 0);
        }
      }
      async execute(pkg, distribution, module2, action, ...params) {
        const a = new (require2("./action").default)(`${pkg}/${distribution}`, module2, action, ...params);
        return await a.execute();
      }
    }();
    exports.backends = backends2;
  }
});
ims.set("./io", {
  hash: 2941830475,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ServiceIOConfiguration = void 0;
    class ServiceIOConfiguration {
      querystring;
    }
    exports.ServiceIOConfiguration = ServiceIOConfiguration;
  }
});
ims.set("./socket/index", {
  hash: 1119353765,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _initiator = require2("./initiator");
    var __decorate = function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class default_1 {
      #backend;
      #initiator;
      #socket;
      constructor(backend) {
        this.#backend = backend;
        this.#initiator = new _initiator.default(backend);
      }
      async get() {
        if (this.#socket) return this.#socket;
        const backend = this.#backend;
        const {
          pkg
        } = backend;
        pkg !== "@beyond-js/local" && (await this.#initiator.check());
        const {
          io
        } = await bimport("socket.io-client");
        let query = backend.io.querystring && (await backend.io.querystring());
        const {
          host
        } = this.#backend;
        return this.#socket = io(host, {
          transports: ["websocket"],
          "query": query
        });
      }
    }
    exports.default = default_1;
    __decorate([_core.SingleCall], default_1.prototype, "get", null);
  }
});
ims.set("./socket/initiator", {
  hash: 4260137755,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class _default {
      #backend;
      #local;
      constructor(backend) {
        this.#backend = backend;
      }
      #promise;
      #initialise = async () => {
        if (this.#promise) {
          await this.#promise;
          return;
        }
        this.#promise = new _core.PendingPromise();
        if (!this.#backend.local || this.#local) return;
        this.#local = (await bimport("@beyond-js/local/main")).local;
        this.#promise.resolve();
      };
      async check() {
        await this.#initialise();
        if (!this.#local) return;
        const {
          pkg,
          local
        } = this.#backend;
        const id = `${pkg}/${local}`;
        const launcher = this.#local.launchers.get(id);
        const status = await launcher.status;
        if (status === "running") return;
        await launcher.start();
        await new Promise(resolve => setTimeout(resolve, 2e3));
      }
    }
    exports.default = _default;
  }
});
__pkg.exports.descriptor = [{
  "im": "./action/bridge",
  "from": "ActionsBridge",
  "name": "ActionsBridge"
}, {
  "im": "./backend",
  "from": "Backend",
  "name": "Backend"
}, {
  "im": "./backends",
  "from": "backends",
  "name": "backends"
}];
var ActionsBridge, Backend, backends;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ActionsBridge") && (ActionsBridge = require2 ? require2("./action/bridge").ActionsBridge : value);
  (require2 || prop === "Backend") && (Backend = require2 ? require2("./backend").Backend : value);
  (require2 || prop === "backends") && (backends = require2 ? require2("./backends").backends : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQuMC4xLjUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2FjdGlvbi9icmlkZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2FjdGlvbi9leGVjdXRpb24tZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2FjdGlvbi9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvYmFja2VuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvYmFja2VuZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2lvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9zb2NrZXQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L3NvY2tldC9pbml0aWF0b3IudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJBY3Rpb25zQnJpZGdlIiwiQmFja2VuZCIsIl9fYmV5b25kX3BrZyIsImJhY2tlbmRzIiwiaG1yIiwibW9kdWxlIiwiY29uc3RydWN0b3IiLCJkaXN0cmlidXRpb24iLCJidW5kbGUiLCJzcGVjaWZpZXIiLCJwa2ciLCJleGVjdXRlIiwiYWN0aW9uIiwicGFyYW1zIiwiYSIsIkFjdGlvbiIsImV4cG9ydHMiLCJFeGVjdXRpb25FcnJvciIsIm1lc3NhZ2UiLCJzdGFjayIsImF1dG9pbmNyZW1lbnQiLCJFdmVudHMiLCJiYWNrZW5kIiwiaWQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJjaGFubmVsIiwiZXhlY3V0ZWQiLCJleGVjdXRpbmciLCJlcnJvciIsIlBlbmRpbmdQcm9taXNlIiwic29ja2V0IiwidHJpZ2dlciIsImVtaXQiLCJleGMiLCJyZWplY3QiLCJnZXQiLCJFcnJvciIsIm9ucmVzcG9uc2UiLCJyZXNwb25zZSIsImNsZWFyVGltZW91dCIsIm9mZiIsInNvdXJjZSIsInByb2Nlc3NpbmdUaW1lIiwicmVzb2x2ZSIsIm9uIiwiaG9zdCIsImxvY2FsIiwiU2VydmljZUlPQ29uZmlndXJhdGlvbiIsImlvIiwiU29ja2V0IiwiTWFwIiwicmVnaXN0ZXIiLCJoYXMiLCJzZXQiLCJjb25maWciLCJiaW1wb3J0IiwiZGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlIiwicXVlcnlzdHJpbmciLCJJbml0aWF0b3IiLCJjaGVjayIsInF1ZXJ5IiwidHJhbnNwb3J0cyIsIl9fZGVjb3JhdGUiLCJTaW5nbGVDYWxsIiwibGF1bmNoZXIiLCJsYXVuY2hlcnMiLCJzdGF0dXMiLCJzdGFydCIsIlByb21pc2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUdpQixNQUNYTCxlQUFhO01BQ047TUFDQTtNQUNBO01BRVRNLFlBQVlDLGNBQXNCQyxRQUFjO1FBQzVDLEtBQUssZ0JBQWdCRDtRQUNyQixLQUFLLFVBQVVDLE9BQU9DO1FBQ3RCLEtBQUssV0FBVyxHQUFHRCxPQUFPSCxPQUFPSyxPQUFPLEtBQUs7TUFDakQ7TUFFQSxNQUFNQyxRQUFRQyxXQUFtQkMsUUFBYTtRQUMxQyxNQUFN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
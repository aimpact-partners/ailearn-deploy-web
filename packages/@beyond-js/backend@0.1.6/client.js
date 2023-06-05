System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/backend","0.1.6"]]);
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

// .beyond/uimport/@beyond-js/backend/client.0.1.6.js
var client_0_1_6_exports = {};
__export(client_0_1_6_exports, {
  ActionsBridge: () => ActionsBridge,
  Backend: () => Backend,
  __beyond_pkg: () => __beyond_pkg,
  backends: () => backends,
  hmr: () => hmr
});
module.exports = __toCommonJS(client_0_1_6_exports);

// node_modules/@beyond-js/backend/client/client.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/backend@0.1.6/client"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50LjAuMS42LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vYnJpZGdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vZXhlY3V0aW9uLWVycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9pby50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvc29ja2V0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9zb2NrZXQvaW5pdGlhdG9yLnRzIl0sIm5hbWVzIjpbImNsaWVudF8wXzFfNl9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25zQnJpZGdlIiwiQmFja2VuZCIsIl9fYmV5b25kX3BrZyIsImJhY2tlbmRzIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl8iLCJyZXF1aXJlMiIsIkFjdGlvbnNCcmlkZ2UyIiwiZGlzdHJpYnV0aW9uIiwiYnVuZGxlIiwiYmFja2VuZCIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwicGtnIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImEiLCJkZWZhdWx0IiwiRXhlY3V0aW9uRXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJfY29yZSIsIl9iYWNrZW5kcyIsIl9leGVjdXRpb25FcnJvciIsImF1dG9pbmNyZW1lbnQiLCJfZGVmYXVsdCIsIkV2ZW50cyIsInJlcXVlc3QiLCJtb2R1bGUyIiwiaWQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJjaGFubmVsIiwiZXhlY3V0ZWQiLCJleGVjdXRpbmciLCJlcnJvciIsInRpbWVyIiwiYXR0ZW1wdHMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzZW5kIiwic29ja2V0IiwidHJpZ2dlciIsImVtaXQiLCJleGMiLCJyZWplY3QiLCJnZXQiLCJFcnJvciIsIm9ucmVzcG9uc2UiLCJyZXNwb25zZSIsImNsZWFyVGltZW91dCIsIm9mZiIsInNvdXJjZSIsInByb2Nlc3NpbmdUaW1lIiwicmVzb2x2ZSIsIm9uIiwiX2lvIiwiX3NvY2tldCIsIkJhY2tlbmQyIiwiaG9zdCIsImxvY2FsIiwiaW8iLCJTZXJ2aWNlSU9Db25maWd1cmF0aW9uIiwiX2JhY2tlbmQiLCJiYWNrZW5kczIiLCJob3N0cyIsIk1hcCIsInJlZ2lzdGVyIiwiaGFzIiwic2V0IiwiY29uZmlnIiwiYmltcG9ydCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeXN0cmluZyIsIl9pbml0aWF0b3IiLCJkZWZhdWx0XzEiLCJpbml0aWF0b3IiLCJjaGVjayIsInF1ZXJ5IiwidHJhbnNwb3J0cyIsIl9fZGVjb3JhdGUiLCJTaW5nbGVDYWxsIiwicHJvdG90eXBlIiwiaW5pdGlhbGlzZSIsIiNpbml0aWFsaXNlIiwibGF1bmNoZXIiLCJsYXVuY2hlcnMiLCJzdGF0dXMiLCJzdGFydCIsIlByb21pc2UiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJ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
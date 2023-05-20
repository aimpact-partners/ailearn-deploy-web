System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/kernel/bundle.0.1.9.js
var bundle_0_1_9_exports = {};
__export(bundle_0_1_9_exports, {
  Bundle: () => Bundle,
  Events: () => Events,
  IBundleSpecs: () => IBundleSpecs,
  IExportsDescriptor: () => IExportsDescriptor,
  IMCreators: () => IMCreators,
  IMSpecs: () => IMSpecs,
  ListenerFunction: () => ListenerFunction,
  Module: () => Module,
  Package: () => Package,
  bimport: () => bimport,
  brequire: () => brequire,
  instances: () => instances
});
module.exports = __toCommonJS(bundle_0_1_9_exports);

// node_modules/@beyond-js/kernel/bundle/bundle.browser.mjs
var __pkg = {
  exports: {}
};
var ims = /* @__PURE__ */new Map();
ims.set("./base/index", {
  hash: 1936310117,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondPackage = void 0;
    exports.resolve = resolve;
    function resolve(source, id) {
      if (!id.startsWith(".")) throw new Error(`Module id must be a relative resource "${id}"`);
      const split = {};
      split.source = source.split("/");
      split.source.pop();
      split.target = (id.startsWith("./") ? id.slice(2) : id).split("../");
      while (split.target[0] === "" && split.target.length > 1) {
        split.target.shift();
        split.source.pop();
      }
      return split.source.join("/") + "/" + split.target.join("/");
    }
    class BeyondPackage {
      #ims;
      #cached = /* @__PURE__ */new Map();
      #exports;
      constructor(exports2) {
        this.#exports = exports2;
      }
      initialise(ims2) {
        this.#ims = ims2;
        this.#exports.process((id, source) => this.require(id, source), {});
      }
      require(id, source) {
        id = source ? resolve(source, id) : id;
        const module2 = (() => {
          if (this.#ims.has(id)) return id;
          return id.endsWith("/") ? `${id}index` : `${id}/index`;
        })();
        if (this.#cached.has(module2)) return this.#cached.get(module2);
        if (!this.#ims.has(module2)) throw new Error(`Internal module "${id}" not found`);
        const fn = this.#ims.get(module2).creator;
        const require3 = required => this.require(required, module2);
        const exports2 = {};
        fn(require3, exports2);
        this.#cached.set(module2, exports2);
        return exports2;
      }
    }
    exports.BeyondPackage = BeyondPackage;
  }
});
ims.set("./bimport/bimport", {
  hash: 1563705995,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bimport = bimport2;
    require2("./brequire");
    function bimport2(resource, version) {
      if (bimport2.mode === "amd") {
        return new Promise((resolve, reject) => {
          if (typeof resource !== "string") throw "Invalid module parameter";
          resource = resource.endsWith(".js") ? resource.slice(0, resource.length - 3) : resource;
          const error = new Error(`Error loading or processing module "${resource}"`);
          amd_require([resource], returned => resolve(returned), exc => {
            console.error(`Error loading resource "${resource}".`);
            console.log(exc.stack);
            reject(error);
          });
        });
      } else if (bimport2.mode === "sjs") {
        return globalThis.System.import(resource + (version ? `?version=${version}` : ""));
      } else {
        return import(resource + (version ? `?version=${version}` : ""));
      }
    }
    bimport2.mode = (() => {
      if (typeof amd_require === "function") return "amd";
      const {
        System
      } = globalThis;
      if (typeof System === "object" && typeof System.import === "function") return "sjs";
      return "esm";
    })();
    const appDependencies = (() => {
      const dependencies = globalThis.__app_package?.dependencies;
      return new Map(dependencies);
    })();
    bimport2.resolve = (specifier, dependencies) => {
      if (/^https?:\/\//.test(specifier)) return specifier;
      const split = specifier.split("/");
      const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
      const version = (() => {
        if (dependencies.has(pkg)) return dependencies.get(pkg);
        if (appDependencies.has(pkg)) return appDependencies.get(pkg);
      })();
      if (!version) return specifier;
      const subpath = split.join("/");
      return `${pkg}@${version}` + (subpath ? `/${subpath}` : "");
    };
  }
});
ims.set("./bimport/brequire", {
  hash: 596501557,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.brequire = brequire2;
    var _instances = require2("../package/instances");
    function brequire2(specifier) {
      const split = specifier.split("/");
      const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
      const subpath = split.join("/");
      const found = [..._instances.default].find(([vspecifier]) => {
        if (!vspecifier.startsWith(`${pkg}@`)) return;
        const split2 = vspecifier.slice(pkg.length).split("/");
        split2.shift();
        return subpath === split2.join("/");
      });
      if (!found) return;
      !found[1].initialised && found[1].initialise();
      return found[1].exports.values;
    }
  }
});
ims.set("./bimport/index", {
  hash: 478135557,
  creator: function (require2, exports) {
    "use strict";

    var _bimport = require2("./bimport");
    var _brequire = require2("./brequire");
    globalThis.bimport === void 0 && (globalThis.bimport = _bimport.bimport);
    globalThis.brequire === void 0 && (globalThis.brequire = _brequire.brequire);
  }
});
ims.set("./bimport/requirejs", {
  hash: 2243979856,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./bundle", {
  hash: 2786310194,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Bundle = void 0;
    var _package = require2("./package");
    var _instances = require2("./instances");
    var _module = require2("./module");
    require2("./bimport");
    class Bundle2 extends Map {
      #type;
      get type() {
        return this.#type;
      }
      #name;
      get name() {
        return this.#name;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #module;
      get module() {
        return this.#module;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      constructor(specs, uri) {
        super();
        if (typeof specs !== "object") throw new Error("Bundle creation specification is not defined");
        const name = this.#name = specs.name ? specs.name : specs.type;
        if (!name) throw new Error("Invalid bundle creation specification");
        this.#module = new _module.Module(specs.module);
        this.#uri = uri;
        this.#type = specs.type;
        const {
          multibundle,
          vspecifier,
          specifier
        } = this.#module;
        this.#vspecifier = multibundle ? `${vspecifier}.${name}` : vspecifier;
        this.#specifier = multibundle ? `${specifier}.${name}` : specifier;
        _instances.instances.register(this);
      }
      package(language) {
        if (language && language.length !== 2) throw new Error(`Language "${language}" is invalid`);
        language = !language ? "" : language;
        if (this.has(language)) return this.get(language);
        const pkg = new _package.Package(this, language);
        this.set(language, pkg);
        return pkg;
      }
    }
    exports.Bundle = Bundle2;
  }
});
ims.set("./events/index", {
  hash: 1779469688,
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
          "name": event
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
  }
});
ims.set("./events/types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./instances", {
  hash: 1214802090,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    const instances2 = new class extends Map {
      register(bundle) {
        this.set(bundle.vspecifier, bundle);
      }
    }();
    exports.instances = instances2;
  }
});
ims.set("./module/index", {
  hash: 2402746124,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Module = void 0;
    class Module2 {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #version;
      get version() {
        return this.#version;
      }
      #subpath;
      get subpath() {
        return this.#subpath;
      }
      #multibundle;
      get multibundle() {
        return this.#multibundle;
      }
      constructor(specs) {
        this.#vspecifier = specs.vspecifier;
        this.#multibundle = specs.multibundle;
        const split = specs.vspecifier.split("/");
        const scope = split[0].startsWith("@") ? split.shift() : void 0;
        const [name, version] = split.shift().split("@");
        this.#subpath = split.join("/");
        this.#pkg = scope ? `${scope}/${name}` : name;
        this.#version = version;
        this.#specifier = this.#pkg + (this.#subpath ? `/${this.#subpath}` : "");
      }
      async execute(action, params) {
        const {
          backends
        } = await beyond.import("@beyond-js/backend/client");
        return await backends.execute(this.#pkg, "legacy", this.#subpath, action, params);
      }
    }
    exports.Module = Module2;
  }
});
ims.set("./package/dependencies", {
  hash: 3724344928,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      #pkg;
      constructor(pkg) {
        super();
        this.#pkg = pkg;
      }
      update(deps) {
        this.clear();
        deps?.forEach(([specifier, dependency]) => {
          if (!dependency) {
            throw new Error(`Dependency "${specifier}" not found on package "${this.#pkg.vspecifier}"`);
          }
          const {
            __beyond_transversal: transversal
          } = dependency;
          dependency = transversal ? transversal.bundles.get(specifier) : dependency;
          this.set(specifier, dependency);
        });
      }
    }
    exports.default = _default;
  }
});
ims.set("./package/exports", {
  hash: 3682924180,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _trace = require2("./ims/require/trace");
    class _default {
      #require;
      #values = {};
      get values() {
        return this.#values;
      }
      descriptor;
      process;
      constructor(require3) {
        this.#require = require3;
        this.#values.hmr = {
          on: (event, listener) => require3.pkg.hmr.on(event, listener),
          off: (event, listener) => require3.pkg.hmr.off(event, listener)
        };
        this.#values.__beyond_pkg = this.#require.pkg;
      }
      set(key, value) {
        this.#values[key] = value;
      }
      update() {
        const require3 = id => {
          const trace = new _trace.Trace();
          trace.register("exports.update", id);
          return this.#require.solve(id, trace);
        };
        this.process?.({
          require: require3
        });
        const reserved = ["__beyond_pkg", "hmr"];
        Object.keys(this.#values).forEach(p => !reserved.includes(p) && delete this.#values[p]);
        this.descriptor?.forEach(({
          im,
          from,
          name
        }) => {
          const trace = new _trace.Trace();
          this.#values[name] = this.#require.solve(im, trace)[from];
        });
      }
    }
    exports.default = _default;
  }
});
ims.set("./package/ims/exports", {
  hash: 3697874831,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IMExports = void 0;
    class IMExports {
      constructor(im, bexports) {
        return new Proxy(this, {
          set: (self, name, value) => {
            self[name] = value;
            const prop = bexports.descriptor?.find(({
              im: id,
              from
            }) => {
              return im.id === id && name === from;
            });
            prop && bexports.set(prop.name, value);
            prop && bexports.process?.({
              prop: prop.name,
              value
            });
            return true;
          }
        });
      }
    }
    exports.IMExports = IMExports;
  }
});
ims.set("./package/ims/im", {
  hash: 2241059934,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InternalModule = void 0;
    var _trace = require2("./require/trace");
    var _exports = require2("./exports");
    class InternalModule {
      #pkg;
      get package() {
        return this.#pkg;
      }
      #id;
      get id() {
        return this.#id;
      }
      #hash;
      get hash() {
        return this.#hash;
      }
      #require;
      #exports;
      #creator;
      #creating = false;
      #created = false;
      get created() {
        return this.#created;
      }
      #create = trace => {
        if (this.#created) throw new Error(`Internal module "${this.#id}" already created`);
        if (this.#creating) throw new Error(`Cyclical import found on internal module "${this.#id}"`);
        this.#creating = true;
        const require3 = id => this.#require.solve(id, trace, this);
        Object.keys(this.#exports).forEach(key => delete this.#exports[key]);
        this.#creator(require3, this.#exports);
        this.#created = true;
        this.#creating = false;
      };
      require(trace, source) {
        if (!this.#created) {
          source && trace.register(source.id, this.#id);
          this.#create(trace);
          trace.pop();
        }
        return this.#exports;
      }
      initialise() {
        if (this.#created) return;
        const trace = new _trace.Trace();
        trace.register("initialisation", this.#id);
        this.#create(trace);
      }
      update(creator, hash) {
        this.#created = false;
        this.#creator = creator;
        this.#hash = hash;
      }
      constructor(pkg, id, hash, creator, require3) {
        this.#pkg = pkg;
        this.#id = id;
        this.#hash = hash;
        this.#creator = creator;
        this.#require = require3;
        this.#exports = new _exports.IMExports(this, pkg.exports);
      }
    }
    exports.InternalModule = InternalModule;
  }
});
ims.set("./package/ims/index", {
  hash: 993201032,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InternalModules = void 0;
    var _im = require2("./im");
    class InternalModules {
      #pkg;
      #ims = /* @__PURE__ */new Map();
      #require;
      constructor(pkg) {
        this.#pkg = pkg;
      }
      set _require(value) {
        this.#require = value;
      }
      #register = (id, hash, creator) => {
        if (this.#ims.has(id)) throw new Error(`IM "${id}" already registered`);
        const im = new _im.InternalModule(this.#pkg, id, hash, creator, this.#require);
        this.#ims.set(im.id, im);
      };
      register(ims2) {
        ims2.forEach(({
          creator,
          hash
        }, id) => this.#register(id, hash, creator));
      }
      require(id, trace, source) {
        const module2 = (() => {
          if (this.#ims.has(id)) return id;
          return id.endsWith("/") ? `${id}index` : `${id}/index`;
        })();
        if (!this.#ims.has(module2)) {
          throw new Error(`Internal module "${id}" not found`);
        }
        const im = this.#ims.get(module2);
        return im.require(trace, source);
      }
      initialise() {
        this.#ims.forEach(im => im.initialise());
      }
      update(ims2) {
        ims2.forEach(({
          creator,
          hash
        }, id) => {
          if (!this.#ims.has(id)) {
            this.#register(id, hash, creator);
            return;
          }
          const im = this.#ims.get(id);
          if (im.hash === hash) return;
          im.update(creator, hash);
          this.#pkg.hmr.trigger(`${id}:change`);
        });
      }
    }
    exports.InternalModules = InternalModules;
  }
});
ims.set("./package/ims/require/index", {
  hash: 12273943,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Require = void 0;
    var _base = require2("../../../base");
    class Require {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      constructor(pkg) {
        this.#pkg = pkg;
      }
      solve(specifier, trace, im) {
        if (specifier.startsWith(".")) {
          specifier = im ? (0, _base.resolve)(im.id, specifier) : specifier;
          return this.#pkg.ims.require(specifier, trace, im);
        }
        if (specifier === "beyond_context") {
          const {
            bundle
          } = this.#pkg;
          return {
            module: bundle.module,
            bundle,
            pkg: this.#pkg
          };
        }
        if (specifier === "@beyond-js/kernel/bundle") {
          const {
            Bundle: Bundle2
          } = require2("../../../bundle");
          const {
            instances: instances2
          } = require2("../../../instances");
          return {
            Bundle: Bundle2,
            instances: instances2
          };
        }
        const {
          dependencies
        } = this.#pkg;
        if (dependencies.has(specifier)) {
          const {
            __beyond_pkg: pkg
          } = dependencies.get(specifier);
          typeof pkg === "object" && !pkg.initialised && pkg.initialise();
          return dependencies.get(specifier);
        }
        const keys = JSON.stringify([...dependencies.keys()]);
        throw new Error(`Bundle "${specifier}" is not registered as a dependency: ${keys}`);
      }
    }
    exports.Require = Require;
  }
});
ims.set("./package/ims/require/trace", {
  hash: 1932027471,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Trace = void 0;
    class Trace extends Array {
      has = id => this.find(rt => rt.id === id);
      register(source, id) {
        if (this.has(id)) {
          let traced = "";
          this.forEach(({
            id: id2,
            source: source2
          }) => {
            const s = ["initialisation", "exports.update"].includes(source2) ? "Cycle initiates with source" : `then "${source2}" requires`;
            traced += `	${s} "${id2}"
`;
          });
          traced += `	that finally requires "${id}" again.
`;
          throw new Error(`Recursive module load found.
Internal module "${source}" is requiring another internal module that was previously required: "${id}"
Trace of required modules:
${traced}`);
        }
        this.push({
          id,
          source
        });
      }
    }
    exports.Trace = Trace;
  }
});
ims.set("./package/index", {
  hash: 458850112,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Package = void 0;
    var _ims = require2("./ims");
    var _require = require2("./ims/require");
    var _exports = require2("./exports");
    var _dependencies = require2("./dependencies");
    var _instances = require2("./instances");
    var _events = require2("../events");
    class Package2 {
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #language;
      get language() {
        return this.#language;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #require;
      #ims;
      get ims() {
        return this.#ims;
      }
      #exports;
      get exports() {
        return this.#exports;
      }
      #dependencies = new _dependencies.default(this);
      get dependencies() {
        return this.#dependencies;
      }
      #hmr = new _events.Events();
      get hmr() {
        return this.#hmr;
      }
      constructor(bundle, language) {
        this.#bundle = bundle;
        this.#language = language ? language : "";
        this.#vspecifier = language ? `${bundle.vspecifier}.${language}` : bundle.vspecifier;
        this.#specifier = language ? `${bundle.specifier}.${language}` : bundle.specifier;
        this.#ims = new _ims.InternalModules(this);
        this.#require = new _require.Require(this);
        this.#ims._require = this.#require;
        this.#exports = new _exports.default(this.#require);
        _instances.default.register(this);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      initialise(ims2) {
        if (this.#initialised) throw new Error("Package already initialised");
        this.#initialised = true;
        ims2 && this.#ims.register(ims2);
        this.exports.update();
        this.#ims.initialise();
      }
      update(ims2) {
        this.#ims.update(ims2);
        this.exports.update();
        this.#ims.initialise();
        this.#hmr.trigger("change");
      }
    }
    exports.Package = Package2;
  }
});
ims.set("./package/instances", {
  hash: 2745122839,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = new class extends Map {
      register(pkg) {
        this.set(pkg.vspecifier, pkg);
      }
    }();
    exports.default = _default;
  }
});
__pkg.exports.descriptor = [{
  "im": "./bimport/bimport",
  "from": "bimport",
  "name": "bimport"
}, {
  "im": "./bimport/brequire",
  "from": "brequire",
  "name": "brequire"
}, {
  "im": "./bundle",
  "from": "IBundleSpecs",
  "name": "IBundleSpecs"
}, {
  "im": "./bundle",
  "from": "Bundle",
  "name": "Bundle"
}, {
  "im": "./events/index",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./events/types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}, {
  "im": "./instances",
  "from": "instances",
  "name": "instances"
}, {
  "im": "./module/index",
  "from": "Module",
  "name": "Module"
}, {
  "im": "./package/exports",
  "from": "IExportsDescriptor",
  "name": "IExportsDescriptor"
}, {
  "im": "./package/ims/im",
  "from": "IMSpecs",
  "name": "IMSpecs"
}, {
  "im": "./package/ims/index",
  "from": "IMCreators",
  "name": "IMCreators"
}, {
  "im": "./package/index",
  "from": "Package",
  "name": "Package"
}];
var bimport, brequire, IBundleSpecs, Bundle, Events, ListenerFunction, instances, Module, IExportsDescriptor, IMSpecs, IMCreators, Package;
__pkg.exports.process = function (require2) {
  bimport = require2("./bimport/bimport").bimport;
  brequire = require2("./bimport/brequire").brequire;
  IBundleSpecs = require2("./bundle").IBundleSpecs;
  Bundle = require2("./bundle").Bundle;
  Events = require2("./events/index").Events;
  ListenerFunction = require2("./events/types").ListenerFunction;
  instances = require2("./instances").instances;
  Module = require2("./module/index").Module;
  IExportsDescriptor = require2("./package/exports").IExportsDescriptor;
  IMSpecs = require2("./package/ims/im").IMSpecs;
  IMCreators = require2("./package/ims/index").IMCreators;
  Package = require2("./package/index").Package;
};
var __bp = {};
ims.get("./base/index").creator(() => 0, __bp);
__pkg = new __bp.BeyondPackage(__pkg.exports);
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUuMC4xLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYmFzZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2JpbXBvcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYmltcG9ydC9icmVxdWlyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2JpbXBvcnQvcmVxdWlyZWpzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2J1bmRsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9ldmVudHMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvZXZlbnRzL3R5cGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2luc3RhbmNlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9tb2R1bGUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9kZXBlbmRlbmNpZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9leHBvcnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW1zL2V4cG9ydHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvcmVxdWlyZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2ltcy9yZXF1aXJlL3RyYWNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbnN0YW5jZXMudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJCdW5kbGUiLCJFdmVudHMiLCJJQnVuZGxlU3BlY3MiLCJJRXhwb3J0c0Rlc2NyaXB0b3IiLCJJTUNyZWF0b3JzIiwiSU1TcGVjcyIsIkxpc3RlbmVyRnVuY3Rpb24iLCJNb2R1bGUiLCJQYWNrYWdlIiwiYmltcG9ydCIsImJyZXF1aXJlIiwiaW5zdGFuY2VzIiwibW9kdWxlIiwicmVzb2x2ZSIsInNvdXJjZSIsImlkIiwic3RhcnRzV2l0aCIsIkVycm9yIiwic3BsaXQiLCJwb3AiLCJ0YXJnZXQiLCJzbGljZSIsImxlbmd0aCIsInNoaWZ0Iiwiam9pbiIsIkJleW9uZFBhY2thZ2UiLCJNYXAiLCJjb25zdHJ1Y3RvciIsImV4cG9ydHMiLCJpbml0aWFsaXNlIiwiaW1zIiwicHJvY2VzcyIsInJlcXVpcmUiLCJoYXMiLCJlbmRzV2l0aCIsImdldCIsImZuIiwiY3JlYXRvciIsInJlcXVpcmVkIiwic2V0IiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwibW9kZSIsIlByb21pc2UiLCJyZWplY3QiLCJlcnJvciIsImFtZF9yZXF1aXJlIiwicmV0dXJuZWQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJnbG9iYWxUaGlzIiwiU3lzdGVtIiwiaW1wb3J0IiwiYXBwRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzIiwiX19hcHBfcGFja2FnZSIsInNwZWNpZmllciIsInRlc3QiLCJwa2ciLCJzdWJwYXRoIiwiZm91bmQiLCJmaW5kIiwidnNwZWNpZmllciIsImluaXRpYWxpc2VkIiwidmFsdWVzIiwiT2JqZWN0IiwidmFsdWUiLCJ0eXBlIiwibmFtZSIsInVyaSIsInNwZWNzIiwibXVsdGlidW5kbGUiLCJyZWdpc3RlciIsInBhY2thZ2UiLCJsYW5ndWFnZSIsImRlc3Ryb3llZCIsInN1cHBvcnRlZCIsIkFycmF5IiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwicHVzaCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInRyaWdnZXIiLCJyZXN0IiwiYXJncyIsImFyZ3VtZW50cyIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJkZXN0cm95IiwiY2xlYXIiLCJidW5kbGUiLCJzY29wZSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJwYXJhbXMiLCJiYWNrZW5kcyIsImJleW9uZCIsInVwZGF0ZSIsImRlcHMiLCJmb3JFYWNoIiwiZGVwZW5kZW5jeSIsIl9fYmV5b25kX3RyYW5zdmVyc2FsIiwidHJhbnN2ZXJzYWwiLCJidW5kbGVzIiwiZGVzY3JpcHRvciIsImhtciIsIl9fYmV5b25kX3BrZyIsImtleSIsInRyYWNlIiwiVHJhY2UiLCJzb2x2ZSIsInJlc2VydmVkIiwia2V5cyIsInAiLCJpbSIsImZyb20iLCJJTUV4cG9ydHMiLCJiZXhwb3J0cyIsIlByb3h5Iiwic2VsZiIsInByb3AiLCJJbnRlcm5hbE1vZHVsZSIsImhhc2giLCJjcmVhdGVkIiwiSW50ZXJuYWxNb2R1bGVzIiwiX3JlcXVpcmUiLCJSZXF1aXJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInJ0IiwidHJhY2VkIiwicyIsIkRlcGVuZGVuY2llcyIsIkV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDU00sU0FBVUMsUUFBUUMsUUFBZ0JDLElBQVU7TUFDOUMsSUFBSSxDQUFDQSxHQUFHQyxXQUFXLEdBQUcsR0FBRyxNQUFNLElBQUlDLE1BQU0sMENBQTBDRixLQUFLO01BT3hGLE1BQU1HLFFBQWU7TUFDckJBLE1BQU1KLFNBQVNBLE9BQU9JLE1BQU0sR0FBRztNQUMvQkEsTUFBTUosT0FBT0ssS0FBRztNQUNoQkQsTUFBTUUsVUFBVUwsR0FBR0MsV0FBVyxJQUFJLElBQUlELEdBQUdNLE1BQU0sQ0FBQyxJQUFJTixJQUFJRyxNQUFNLEtBQUs7TUFDbkUsT0FBT0EsTUFBTUUsT0FBTyxPQUFPLE1BQU1GLE1BQU1FLE9BQU9FLFNBQVMsR0FBRztRQUN0REosTUFBTUUsT0FBT0csT0FBSztRQUNsQkwsTUFBTUosT0FBT0ssS0FBRzs7TUFHcEIsT0FBT0QsTUFB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SUFBSVQsY0FBVztRQUNYLE9BQU8sS0FBSztNQUNoQjtNQUVBcEMsV0FBV0MsTUFBZ0I7UUFDdkIsSUFBSSxLQUFLLGNBQWMsTUFBTSxJQUFJYixNQUFNLDZCQUE2QjtRQUNwRSxLQUFLLGVBQWU7UUFDcEJhLFFBQU8sS0FBSyxLQUFLNEMsU0FBUzVDLElBQUc7UUFDN0IsS0FBS0YsUUFBUXlGLFFBQU07UUFDbkIsS0FBSyxLQUFLeEYsWUFBVTtNQUN4QjtNQUVBd0YsT0FBT3ZGLE1BQWU7UUFDbEIsS0FBSyxLQUFLdUYsT0FBT3ZGLElBQUc7UUFDcEIsS0FBS0YsUUFBUXlGLFFBQU07UUFDbkIsS0FBSyxLQUFLeEYsWUFBVTtRQUNwQixLQUFLLEtBQUttRSxRQUFRLFFBQVE7TUFDOUI7O0lBQ0hwRTs7Ozs7Ozs7Ozs7O21CQ3JGYyxJQUFJLGNBQWNGLElBQUc7TUFDaENnRCxTQUFTZCxLQUFZO1FBQ2pCLEtBQUtyQixJQUFJcUIsSUFBSUksWUFBWUosR0FBRztNQUNoQztPQUNIO0lBQUFoQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3ZvaWNlLWdlbml1cy9wcm9qZWN0L291dCJ9
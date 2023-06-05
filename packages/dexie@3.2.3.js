System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["dexie","3.2.3"]]);
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

// .beyond/uimport/dexie.3.2.3.js
var dexie_3_2_3_exports = {};
__export(dexie_3_2_3_exports, {
  Dexie: () => Dexie$1,
  RangeSet: () => RangeSet,
  default: () => dexie_3_2_3_default,
  liveQuery: () => liveQuery,
  mergeRanges: () => mergeRanges,
  rangesOverlap: () => rangesOverlap
});
module.exports = __toCommonJS(dexie_3_2_3_exports);

// node_modules/dexie/dist/modern/dexie.mjs
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
var keys = Object.keys;
var isArray = Array.isArray;
if (typeof Promise !== "undefined" && !_global.Promise) {
  _global.Promise = Promise;
}
function extend(obj, extension) {
  if (typeof extension !== "object") return obj;
  keys(extension).forEach(function (key) {
    obj[key] = extension[key];
  });
  return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
  if (typeof extension === "function") extension = extension(getProto(proto));
  (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(key => {
    setProp(proto, key, extension[key]);
  });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? {
    get: functionOrGetSet.get,
    set: functionOrGetSet.set,
    configurable: true
  } : {
    value: functionOrGetSet,
    configurable: true,
    writable: true
  }, options));
}
function derive(Child) {
  return {
    from: function (Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
  const pd = getOwnPropertyDescriptor(obj, prop);
  let proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
  return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}
function assert(b) {
  if (!b) throw new Error("Assertion Failed");
}
function asap$1(fn) {
  if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
}
function arrayToObject(array, extractor) {
  return array.reduce((result, item, i) => {
    var nameAndValue = extractor(item, i);
    if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}
function tryCatch(fn, onerror, args) {
  try {
    fn.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}
function getByKeyPath(obj, keyPath) {
  if (hasOwn(obj, keyPath)) return obj[keyPath];
  if (!keyPath) return obj;
  if (typeof keyPath !== "string") {
    var rv = [];
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      var val = getByKeyPath(obj, keyPath[i]);
      rv.push(val);
    }
    return rv;
  }
  var period = keyPath.indexOf(".");
  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj === void 0 ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }
  return void 0;
}
function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === void 0) return;
  if ("isFrozen" in Object && Object.isFrozen(obj)) return;
  if (typeof keyPath !== "string" && "length" in keyPath) {
    assert(typeof value !== "string" && "length" in value);
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      setByKeyPath(obj, keyPath[i], value[i]);
    }
  } else {
    var period = keyPath.indexOf(".");
    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "") {
        if (value === void 0) {
          if (isArray(obj) && !isNaN(parseInt(currentKeyPath))) obj.splice(currentKeyPath, 1);else delete obj[currentKeyPath];
        } else obj[currentKeyPath] = value;
      } else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj || !hasOwn(obj, currentKeyPath)) innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === void 0) {
        if (isArray(obj) && !isNaN(parseInt(keyPath))) obj.splice(keyPath, 1);else delete obj[keyPath];
      } else obj[keyPath] = value;
    }
  }
}
function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === "string") setByKeyPath(obj, keyPath, void 0);else if ("length" in keyPath) [].map.call(keyPath, function (kp) {
    setByKeyPath(obj, kp, void 0);
  });
}
function shallowClone(obj) {
  var rv = {};
  for (var m in obj) {
    if (hasOwn(obj, m)) rv[m] = obj[m];
  }
  return rv;
}
var concat = [].concat;
function flatten(a) {
  return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(num => ["Int", "Uint", "Float"].map(t => t + num + "Array")))).filter(t => _global[t]);
var intrinsicTypes = intrinsicTypeNames.map(t => _global[t]);
arrayToObject(intrinsicTypeNames, x => [x, true]);
var circularRefs = null;
function deepClone(any) {
  circularRefs = typeof WeakMap !== "undefined" && /* @__PURE__ */new WeakMap();
  const rv = innerDeepClone(any);
  circularRefs = null;
  return rv;
}
function innerDeepClone(any) {
  if (!any || typeof any !== "object") return any;
  let rv = circularRefs && circularRefs.get(any);
  if (rv) return rv;
  if (isArray(any)) {
    rv = [];
    circularRefs && circularRefs.set(any, rv);
    for (var i = 0, l = any.length; i < l; ++i) {
      rv.push(innerDeepClone(any[i]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    const proto = getProto(any);
    rv = proto === Object.prototype ? {} : Object.create(proto);
    circularRefs && circularRefs.set(any, rv);
    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = innerDeepClone(any[prop]);
      }
    }
  }
  return rv;
}
var {
  toString
} = {};
function toStringTag(o) {
  return toString.call(o).slice(8, -1);
}
var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
var getIteratorOf = typeof iteratorSymbol === "symbol" ? function (x) {
  var i;
  return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
  return null;
};
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
  var i, a, x, it;
  if (arguments.length === 1) {
    if (isArray(arrayLike)) return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === "string") return [arrayLike];
    if (it = getIteratorOf(arrayLike)) {
      a = [];
      while (x = it.next(), !x.done) a.push(x.value);
      return a;
    }
    if (arrayLike == null) return [arrayLike];
    i = arrayLike.length;
    if (typeof i === "number") {
      a = new Array(i);
      while (i--) a[i] = arrayLike[i];
      return a;
    }
    return [arrayLike];
  }
  i = arguments.length;
  a = new Array(i);
  while (i--) a[i] = arguments[i];
  return a;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? fn => fn[Symbol.toStringTag] === "AsyncFunction" : () => false;
var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}
var libraryFilter = () => true;
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
  if (NEEDS_THROW_FOR_STACK) try {
    getErrorWithStack.arguments;
    throw new Error();
  } catch (e) {
    return e;
  }
  return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack) return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split("\n").length;
  return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map(frame => "\n" + frame).join("");
}
var dexieErrorNames = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"];
var idbDomErrorNames = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed",
  MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}
derive(DexieError).from(Error).extend({
  stack: {
    get: function () {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function () {
    return this.name + ": " + this.message;
  }
});
function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + Object.keys(failures).map(key => failures[key].toString()).filter((v, i, s) => s.indexOf(v) === i).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = Object.keys(failures).map(pos => failures[pos]);
  this.failuresByPos = failures;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce((obj, name) => (obj[name] = name + "Error", obj), {});
var BaseException = DexieError;
var exceptions = errorList.reduce((obj, name) => {
  var fullName = name + "Error";
  function DexieError2(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;
    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === "string") {
      this.message = `${msgOrInner}${!inner ? "" : "\n " + inner}`;
      this.inner = inner || null;
    } else if (typeof msgOrInner === "object") {
      this.message = `${msgOrInner.name} ${msgOrInner.message}`;
      this.inner = msgOrInner;
    }
  }
  derive(DexieError2).from(BaseException);
  obj[name] = DexieError2;
  return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce((obj, name) => {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);
  if ("stack" in domError) {
    setProp(rv, "stack", {
      get: function () {
        return this.inner.stack;
      }
    });
  }
  return rv;
}
var fullNameExceptions = errorList.reduce((obj, name) => {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;
function nop() {}
function mirror(val) {
  return val;
}
function pureFunctionChain(f1, f2) {
  if (f1 == null || f1 === mirror) return f2;
  return function (val) {
    return f2(f1(val));
  };
}
function callBoth(on1, on2) {
  return function () {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}
function hookCreatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res !== void 0) arguments[0] = res;
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== void 0 ? res2 : res;
  };
}
function hookDeletingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}
function hookUpdatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function (modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
  };
}
function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    if (f2.apply(this, arguments) === false) return false;
    return f1.apply(this, arguments);
  };
}
function promisableChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res && typeof res.then === "function") {
      var thiz = this,
        i = arguments.length,
        args = new Array(i);
      while (i--) args[i] = arguments[i];
      return res.then(function () {
        return f2.apply(thiz, args);
      });
    }
    return f2.apply(this, arguments);
  };
}
var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100,
  MAX_LONG_STACKS = 20,
  ZONE_ECHO_LIMIT = 100,
  [resolvedNativePromise, nativePromiseProto, resolvedGlobalPromise] = typeof Promise === "undefined" ? [] : (() => {
    let globalP = Promise.resolve();
    if (typeof crypto === "undefined" || !crypto.subtle) return [globalP, getProto(globalP), globalP];
    const nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
    return [nativeP, getProto(nativeP), globalP];
  })(),
  nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? () => {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? () => {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(() => {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, {
    attributes: true
  });
  hiddenDiv.setAttribute("i", "1");
} : () => {
  setTimeout(physicalTick, 0);
};
var asap = function (callback, args) {
  microtickQueue.push([callback, args]);
  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};
var isOutsideMicroTick = true,
  needsNewPhysicalTick = true,
  unhandledErrors = [],
  rejectingErrors = [],
  currentFulfiller = null,
  rejectionMapper = mirror;
var globalPSD = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function () {
    this.unhandleds.forEach(uh => {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {}
    });
  }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
  if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = nop;
  this._lib = false;
  var psd = this._PSD = PSD;
  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof fn !== "function") {
    if (fn !== INTERNAL) throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false) handleRejection(this, this._value);
    return;
  }
  this._state = null;
  this._value = null;
  ++psd.ref;
  executePromiseTask(this, fn);
}
var thenProp = {
  get: function () {
    var psd = PSD,
      microTaskId = totalEchoes;
    function then(onFulfilled, onRejected) {
      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      const cleanup = possibleAwait && !decrementExpectedAwaits();
      var rv = new DexiePromise((resolve, reject) => {
        propagateToListener(this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }
    then.prototype = INTERNAL;
    return then;
  },
  set: function (value) {
    setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
      get: function () {
        return value;
      },
      set: thenProp.set
    });
  }
};
props(DexiePromise.prototype, {
  then: thenProp,
  _then: function (onFulfilled, onRejected) {
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function (onRejected) {
    if (arguments.length === 1) return this.then(null, onRejected);
    var type2 = arguments[0],
      handler = arguments[1];
    return typeof type2 === "function" ? this.then(null, err => err instanceof type2 ? handler(err) : PromiseReject(err)) : this.then(null, err => err && err.name === type2 ? handler(err) : PromiseReject(err));
  },
  finally: function (onFinally) {
    return this.then(value => {
      onFinally();
      return value;
    }, err => {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;
      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null) this._stack = stack;
        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function (ms, msg) {
    return ms < Infinity ? new DexiePromise((resolve, reject) => {
      var handle = setTimeout(() => reject(new exceptions.Timeout(msg)), ms);
      this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag) setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
}
props(DexiePromise, {
  all: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      if (values.length === 0) resolve([]);
      var remaining = values.length;
      values.forEach((a, i) => DexiePromise.resolve(a).then(x => {
        values[i] = x;
        if (! --remaining) resolve(values);
      }, reject));
    });
  },
  resolve: value => {
    if (value instanceof DexiePromise) return value;
    if (value && typeof value.then === "function") return new DexiePromise((resolve, reject) => {
      value.then(resolve, reject);
    });
    var rv = new DexiePromise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      values.map(value => DexiePromise.resolve(value).then(resolve, reject));
    });
  },
  PSD: {
    get: () => PSD,
    set: value => PSD = value
  },
  totalEchoes: {
    get: () => totalEchoes
  },
  newPSD: newScope,
  usePSD,
  scheduler: {
    get: () => asap,
    set: value => {
      asap = value;
    }
  },
  rejectionMapper: {
    get: () => rejectionMapper,
    set: value => {
      rejectionMapper = value;
    }
  },
  follow: (fn, zoneProps) => {
    return new DexiePromise((resolve, reject) => {
      return newScope((resolve2, reject2) => {
        var psd = PSD;
        psd.unhandleds = [];
        psd.onunhandled = reject2;
        psd.finalize = callBoth(function () {
          run_at_end_of_this_or_next_physical_tick(() => {
            this.unhandleds.length === 0 ? resolve2() : reject2(this.unhandleds[0]);
          });
        }, psd.finalize);
        fn();
      }, zoneProps, resolve, reject);
    });
  }
});
if (NativePromise) {
  if (NativePromise.allSettled) setProp(DexiePromise, "allSettled", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(resolve => {
      if (possiblePromises.length === 0) resolve([]);
      let remaining = possiblePromises.length;
      const results = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => results[i] = {
        status: "fulfilled",
        value
      }, reason => results[i] = {
        status: "rejected",
        reason
      }).then(() => --remaining || resolve(results)));
    });
  });
  if (NativePromise.any && typeof AggregateError !== "undefined") setProp(DexiePromise, "any", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      if (possiblePromises.length === 0) reject(new AggregateError([]));
      let remaining = possiblePromises.length;
      const failures = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => resolve(value), failure => {
        failures[i] = failure;
        if (! --remaining) reject(new AggregateError(failures));
      }));
    });
  });
}
function executePromiseTask(promise, fn) {
  try {
    fn(value => {
      if (promise._state !== null) return;
      if (value === promise) throw new TypeError("A promise cannot be resolved with itself.");
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      if (value && typeof value.then === "function") {
        executePromiseTask(promise, (resolve, reject) => {
          value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }
      if (shouldExecuteTick) endMicroTickScope();
    }, handleRejection.bind(null, promise));
  } catch (ex) {
    handleRejection(promise, ex);
  }
}
function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null) return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(() => {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: () => stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack
    });
  });
  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick) endMicroTickScope();
}
function propagateAllListeners(promise) {
  var listeners = promise._listeners;
  promise._listeners = [];
  for (var i = 0, len = listeners.length; i < len; ++i) {
    propagateToListener(promise, listeners[i]);
  }
  var psd = promise._PSD;
  --psd.ref || psd.finalize();
  if (numScheduledCalls === 0) {
    ++numScheduledCalls;
    asap(() => {
      if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
  }
}
function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);
    return;
  }
  var cb = promise._state ? listener.onFulfilled : listener.onRejected;
  if (cb === null) {
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }
  ++listener.psd.ref;
  ++numScheduledCalls;
  asap(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
  try {
    currentFulfiller = promise;
    var ret,
      value = promise._value;
    if (promise._state) {
      ret = cb(value);
    } else {
      if (rejectingErrors.length) rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise);
    }
    listener.resolve(ret);
  } catch (e) {
    listener.reject(e);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0) finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}
function getStack(promise, stacks, limit) {
  if (stacks.length === limit) return stacks;
  var stack = "";
  if (promise._state === false) {
    var failure = promise._value,
      errorName,
      message;
    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure;
      message = "";
    }
    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }
  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
    if (promise._prev) getStack(promise._prev, stacks, limit);
  }
  return stacks;
}
function linkToPreviousPromise(promise, prev) {
  var numPrev = prev ? prev._numPrev + 1 : 0;
  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}
function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}
function endMicroTickScope() {
  var callbacks, i, l;
  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;
      for (i = 0; i < l; ++i) {
        var item = callbacks[i];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);
  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach(p => {
    p._PSD.onunhandled.call(null, p._value, p);
  });
  var finalizers = tickFinalizers.slice(0);
  var i = finalizers.length;
  while (i) finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
  function finalizer() {
    fn();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }
  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap(() => {
    if (--numScheduledCalls === 0) finalizePhysicalTick();
  }, []);
}
function addPossiblyUnhandledError(promise) {
  if (!unhandledErrors.some(p => p._value === promise._value)) unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
  var i = unhandledErrors.length;
  while (i) if (unhandledErrors[--i]._value === promise._value) {
    unhandledErrors.splice(i, 1);
    return;
  }
}
function PromiseReject(reason) {
  return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
  var psd = PSD;
  return function () {
    var wasRootExec = beginMicroTickScope(),
      outerScope = PSD;
    try {
      switchToZone(psd, true);
      return fn.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec) endMicroTickScope();
    }
  };
}
var task = {
  awaits: 0,
  echoes: 0,
  id: 0
};
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props2, a1, a2) {
  var parent = PSD,
    psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter;
  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: DexiePromise,
    PromiseProp: {
      value: DexiePromise,
      configurable: true,
      writable: true
    },
    all: DexiePromise.all,
    race: DexiePromise.race,
    allSettled: DexiePromise.allSettled,
    any: DexiePromise.any,
    resolve: DexiePromise.resolve,
    reject: DexiePromise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
  } : {};
  if (props2) extend(psd, props2);
  ++parent.ref;
  psd.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };
  var rv = usePSD(psd, fn, a1, a2);
  if (psd.ref === 0) psd.finalize();
  return rv;
}
function incrementExpectedAwaits() {
  if (!task.id) task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
}
function decrementExpectedAwaits() {
  if (!task.awaits) return false;
  if (--task.awaits === 0) task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT;
  return true;
}
if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
  incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then(x => {
      decrementExpectedAwaits();
      return x;
    }, e => {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }
  return possiblePromise;
}
function zoneEnterEcho(targetZone) {
  ++totalEchoes;
  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0;
  }
  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;
  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (! --zoneEchoes || targetZone !== PSD)) {
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }
  if (targetZone === PSD) return;
  PSD = targetZone;
  if (currentZone === globalPSD) globalPSD.env = snapShot();
  if (patchGlobalPromise) {
    var GlobalPromise = globalPSD.env.Promise;
    var targetEnv = targetZone.env;
    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise.prototype.then = targetEnv.gthen;
    if (currentZone.global || targetZone.global) {
      Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
      GlobalPromise.all = targetEnv.all;
      GlobalPromise.race = targetEnv.race;
      GlobalPromise.resolve = targetEnv.resolve;
      GlobalPromise.reject = targetEnv.reject;
      if (targetEnv.allSettled) GlobalPromise.allSettled = targetEnv.allSettled;
      if (targetEnv.any) GlobalPromise.any = targetEnv.any;
    }
  }
}
function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    allSettled: GlobalPromise.allSettled,
    any: GlobalPromise.any,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
  var outerScope = PSD;
  try {
    switchToZone(psd, true);
    return fn(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}
function enqueueNativeMicroTask(job) {
  nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
  return typeof fn !== "function" ? fn : function () {
    var outerZone = PSD;
    if (possibleAwait) incrementExpectedAwaits();
    switchToZone(zone, true);
    try {
      return fn.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
      if (cleanup) enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}
function getPatchedPromiseThen(origThen, zone) {
  return function (onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
  };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
  var rv;
  try {
    rv = promise.onuncatched(err);
  } catch (e) {}
  if (rv !== false) try {
    var event,
      eventData = {
        promise,
        reason: err
      };
    if (_global.document && document.createEvent) {
      event = document.createEvent("Event");
      event.initEvent(UNHANDLEDREJECTION, true, true);
      extend(event, eventData);
    } else if (_global.CustomEvent) {
      event = new CustomEvent(UNHANDLEDREJECTION, {
        detail: eventData
      });
      extend(event, eventData);
    }
    if (event && _global.dispatchEvent) {
      dispatchEvent(event);
      if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) try {
        _global.onunhandledrejection(event);
      } catch (_) {}
    }
    if (debug && event && !event.defaultPrevented) {
      console.warn(`Unhandled rejection: ${err.stack || err}`);
    }
  } catch (e) {}
}
var rejection = DexiePromise.reject;
function tempTransaction(db, mode, storeNames, fn) {
  if (!db.idbdb || !db._state.openComplete && !PSD.letThrough && !db._vip) {
    if (db._state.openComplete) {
      return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
    }
    if (!db._state.isBeingOpened) {
      if (!db._options.autoOpen) return rejection(new exceptions.DatabaseClosed());
      db.open().catch(nop);
    }
    return db._state.dbReadyPromise.then(() => tempTransaction(db, mode, storeNames, fn));
  } else {
    var trans = db._createTransaction(mode, storeNames, db._dbSchema);
    try {
      trans.create();
      db._state.PR1398_maxLoop = 3;
    } catch (ex) {
      if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
        console.warn("Dexie: Need to reopen db");
        db._close();
        return db.open().then(() => tempTransaction(db, mode, storeNames, fn));
      }
      return rejection(ex);
    }
    return trans._promise(mode, (resolve, reject) => {
      return newScope(() => {
        PSD.trans = trans;
        return fn(resolve, reject, trans);
      });
    }).then(result => {
      return trans._completion.then(() => result);
    });
  }
}
var DEXIE_VERSION = "3.2.3";
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = frame => !/(dexie\.js|dexie\.min\.js)/.test(frame);
var DBNAMES_DB = "__dbnames";
var READONLY = "readonly";
var READWRITE = "readwrite";
function combine(filter1, filter2) {
  return filter1 ? filter2 ? function () {
    return filter1.apply(this, arguments) && filter2.apply(this, arguments);
  } : filter1 : filter2;
}
var AnyRange = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function workaroundForUndefinedPrimKey(keyPath) {
  return typeof keyPath === "string" && !/\./.test(keyPath) ? obj => {
    if (obj[keyPath] === void 0 && keyPath in obj) {
      obj = deepClone(obj);
      delete obj[keyPath];
    }
    return obj;
  } : obj => obj;
}
var Table = class {
  _trans(mode, fn, writeLocked) {
    const trans = this._tx || PSD.trans;
    const tableName = this.name;
    function checkTableInTransaction(resolve, reject, trans2) {
      if (!trans2.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      return fn(trans2.idbtrans, trans2);
    }
    const wasRootExec = beginMicroTickScope();
    try {
      return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(() => trans._promise(mode, checkTableInTransaction, writeLocked), {
        trans,
        transless: PSD.transless || PSD
      }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
    } finally {
      if (wasRootExec) endMicroTickScope();
    }
  }
  get(keyOrCrit, cb) {
    if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
    return this._trans("readonly", trans => {
      return this.core.get({
        trans,
        key: keyOrCrit
      }).then(res => this.hook.reading.fire(res));
    }).then(cb);
  }
  where(indexOrCrit) {
    if (typeof indexOrCrit === "string") return new this.db.WhereClause(this, indexOrCrit);
    if (isArray(indexOrCrit)) return new this.db.WhereClause(this, `[${indexOrCrit.join("+")}]`);
    const keyPaths = keys(indexOrCrit);
    if (keyPaths.length === 1) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
    const compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(ix => ix.compound && keyPaths.every(keyPath => ix.keyPath.indexOf(keyPath) >= 0) && ix.keyPath.every(keyPath => keyPaths.indexOf(keyPath) >= 0))[0];
    if (compoundIndex && this.db._maxKey !== maxString) return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(kp => indexOrCrit[kp]));
    if (!compoundIndex && debug) console.warn(`The query ${JSON.stringify(indexOrCrit)} on ${this.name} would benefit of a compound index [${keyPaths.join("+")}]`);
    const {
      idxByName
    } = this.schema;
    const idb = this.db._deps.indexedDB;
    function equals(a, b) {
      try {
        return idb.cmp(a, b) === 0;
      } catch (e) {
        return false;
      }
    }
    const [idx, filterFunction] = keyPaths.reduce(([prevIndex, prevFilterFn], keyPath) => {
      const index = idxByName[keyPath];
      const value = indexOrCrit[keyPath];
      return [prevIndex || index, prevIndex || !index ? combine(prevFilterFn, index && index.multi ? x => {
        const prop = getByKeyPath(x, keyPath);
        return isArray(prop) && prop.some(item => equals(value, item));
      } : x => equals(value, getByKeyPath(x, keyPath))) : prevFilterFn];
    }, [null, null]);
    return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
  }
  filter(filterFunction) {
    return this.toCollection().and(filterFunction);
  }
  count(thenShortcut) {
    return this.toCollection().count(thenShortcut);
  }
  offset(offset) {
    return this.toCollection().offset(offset);
  }
  limit(numRows) {
    return this.toCollection().limit(numRows);
  }
  each(callback) {
    return this.toCollection().each(callback);
  }
  toArray(thenShortcut) {
    return this.toCollection().toArray(thenShortcut);
  }
  toCollection() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  orderBy(index) {
    return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? `[${index.join("+")}]` : index));
  }
  reverse() {
    return this.toCollection().reverse();
  }
  mapToClass(constructor) {
    this.schema.mappedClass = constructor;
    const readHook = obj => {
      if (!obj) return obj;
      const res = Object.create(constructor.prototype);
      for (var m in obj) if (hasOwn(obj, m)) try {
        res[m] = obj[m];
      } catch (_) {}
      return res;
    };
    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }
    this.schema.readHook = readHook;
    this.hook("reading", readHook);
    return constructor;
  }
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return this.mapToClass(Class);
  }
  add(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "add",
        keys: key != null ? [key] : null,
        values: [objToAdd]
      });
    }).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  update(keyOrObject, modifications) {
    if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
      const key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
      if (key === void 0) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
      try {
        if (typeof modifications !== "function") {
          keys(modifications).forEach(keyPath => {
            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
          });
        } else {
          modifications(keyOrObject, {
            value: keyOrObject,
            primKey: key
          });
        }
      } catch (_a) {}
      return this.where(":id").equals(key).modify(modifications);
    } else {
      return this.where(":id").equals(keyOrObject).modify(modifications);
    }
  }
  put(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "put",
      values: [objToAdd],
      keys: key != null ? [key] : null
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  delete(key) {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "delete",
      keys: [key]
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  clear() {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "deleteRange",
      range: AnyRange
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  bulkGet(keys2) {
    return this._trans("readonly", trans => {
      return this.core.getMany({
        keys: keys2,
        trans
      }).then(result => result.map(res => this.hook.reading.fire(res)));
    });
  }
  bulkAdd(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "add",
        keys: keys2,
        values: objectsToAdd,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkAdd(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkPut(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "put",
        keys: keys2,
        values: objectsToPut,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkPut(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkDelete(keys2) {
    const numKeys = keys2.length;
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "delete",
        keys: keys2
      });
    }).then(({
      numFailures,
      lastResult,
      failures
    }) => {
      if (numFailures === 0) return lastResult;
      throw new BulkError(`${this.name}.bulkDelete(): ${numFailures} of ${numKeys} operations failed`, failures);
    });
  }
};
function Events(ctx) {
  var evs = {};
  var rv = function (eventName, subscriber) {
    if (subscriber) {
      var i2 = arguments.length,
        args = new Array(i2 - 1);
      while (--i2) args[i2 - 1] = arguments[i2];
      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === "string") {
      return evs[eventName];
    }
  };
  rv.addEventType = add;
  for (var i = 1, l = arguments.length; i < l; ++i) {
    add(arguments[i]);
  }
  return rv;
  function add(eventName, chainFunction, defaultFunction) {
    if (typeof eventName === "object") return addConfiguredEvents(eventName);
    if (!chainFunction) chainFunction = reverseStoppableEventChain;
    if (!defaultFunction) defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function (cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function (cb) {
        context.subscribers = context.subscribers.filter(function (fn) {
          return fn !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }
  function addConfiguredEvents(cfg) {
    keys(cfg).forEach(function (eventName) {
      var args = cfg[eventName];
      if (isArray(args)) {
        add(eventName, cfg[eventName][0], cfg[eventName][1]);
      } else if (args === "asap") {
        var context = add(eventName, mirror, function fire() {
          var i2 = arguments.length,
            args2 = new Array(i2);
          while (i2--) args2[i2] = arguments[i2];
          context.subscribers.forEach(function (fn) {
            asap$1(function fireEvent() {
              fn.apply(null, args2);
            });
          });
        });
      } else throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}
function makeClassConstructor(prototype, constructor) {
  derive(constructor).from({
    prototype
  });
  return constructor;
}
function createTableConstructor(db) {
  return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
    this.db = db;
    this._tx = trans;
    this.name = name;
    this.schema = tableSchema;
    this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
      "creating": [hookCreatingChain, nop],
      "reading": [pureFunctionChain, mirror],
      "updating": [hookUpdatingChain, nop],
      "deleting": [hookDeletingChain, nop]
    });
  });
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
  return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
  ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
  var curr = ctx.replayFilter;
  ctx.replayFilter = curr ? () => combine(curr(), factory()) : factory;
  ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
  ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
  if (ctx.isPrimKey) return coreSchema.primaryKey;
  const index = coreSchema.getIndexByKeyPath(ctx.index);
  if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
  return index;
}
function openCursor(ctx, coreTable, trans) {
  const index = getIndexOrStore(ctx, coreTable.schema);
  return coreTable.openCursor({
    trans,
    values: !ctx.keysOnly,
    reverse: ctx.dir === "prev",
    unique: !!ctx.unique,
    query: {
      index,
      range: ctx.range
    }
  });
}
function iter(ctx, fn, coreTrans, coreTable) {
  const filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
  if (!ctx.or) {
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
  } else {
    const set = {};
    const union = (item, cursor, advance) => {
      if (!filter || filter(cursor, advance, result => cursor.stop(result), err => cursor.fail(err))) {
        var primaryKey = cursor.primaryKey;
        var key = "" + primaryKey;
        if (key === "[object ArrayBuffer]") key = "" + new Uint8Array(primaryKey);
        if (!hasOwn(set, key)) {
          set[key] = true;
          fn(item, cursor, advance);
        }
      }
    };
    return Promise.all([ctx.or._iterate(union, coreTrans), iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)]);
  }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
  var mappedFn = valueMapper ? (x, c, a) => fn(valueMapper(x), c, a) : fn;
  var wrappedFn = wrap(mappedFn);
  return cursorPromise.then(cursor => {
    if (cursor) {
      return cursor.start(() => {
        var c = () => cursor.continue();
        if (!filter || filter(cursor, advancer => c = advancer, val => {
          cursor.stop(val);
          c = nop;
        }, e => {
          cursor.fail(e);
          c = nop;
        })) wrappedFn(cursor.value, cursor, advancer => c = advancer);
        c();
      });
    }
  });
}
function cmp(a, b) {
  try {
    const ta = type(a);
    const tb = type(b);
    if (ta !== tb) {
      if (ta === "Array") return 1;
      if (tb === "Array") return -1;
      if (ta === "binary") return 1;
      if (tb === "binary") return -1;
      if (ta === "string") return 1;
      if (tb === "string") return -1;
      if (ta === "Date") return 1;
      if (tb !== "Date") return NaN;
      return -1;
    }
    switch (ta) {
      case "number":
      case "Date":
      case "string":
        return a > b ? 1 : a < b ? -1 : 0;
      case "binary":
        {
          return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
        }
      case "Array":
        return compareArrays(a, b);
    }
  } catch (_a) {}
  return NaN;
}
function compareArrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    const res = cmp(a[i], b[i]);
    if (res !== 0) return res;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function compareUint8Arrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function type(x) {
  const t = typeof x;
  if (t !== "object") return t;
  if (ArrayBuffer.isView(x)) return "binary";
  const tsTag = toStringTag(x);
  return tsTag === "ArrayBuffer" ? "binary" : tsTag;
}
function getUint8Array(a) {
  if (a instanceof Uint8Array) return a;
  if (ArrayBuffer.isView(a)) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  return new Uint8Array(a);
}
var Collection = class {
  _read(fn, cb) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
  }
  _write(fn) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
  }
  _addAlgorithm(fn) {
    var ctx = this._ctx;
    ctx.algorithm = combine(ctx.algorithm, fn);
  }
  _iterate(fn, coreTrans) {
    return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
  }
  clone(props2) {
    var rv = Object.create(this.constructor.prototype),
      ctx = Object.create(this._ctx);
    if (props2) extend(ctx, props2);
    rv._ctx = ctx;
    return rv;
  }
  raw() {
    this._ctx.valueMapper = null;
    return this;
  }
  each(fn) {
    var ctx = this._ctx;
    return this._read(trans => iter(ctx, fn, trans, ctx.table.core));
  }
  count(cb) {
    return this._read(trans => {
      const ctx = this._ctx;
      const coreTable = ctx.table.core;
      if (isPlainKeyRange(ctx, true)) {
        return coreTable.count({
          trans,
          query: {
            index: getIndexOrStore(ctx, coreTable.schema),
            range: ctx.range
          }
        }).then(count2 => Math.min(count2, ctx.limit));
      } else {
        var count = 0;
        return iter(ctx, () => {
          ++count;
          return false;
        }, trans, coreTable).then(() => count);
      }
    }).then(cb);
  }
  sortBy(keyPath, cb) {
    const parts = keyPath.split(".").reverse(),
      lastPart = parts[0],
      lastIndex = parts.length - 1;
    function getval(obj, i) {
      if (i) return getval(obj[parts[i]], i - 1);
      return obj[lastPart];
    }
    var order = this._ctx.dir === "next" ? 1 : -1;
    function sorter(a, b) {
      var aVal = getval(a, lastIndex),
        bVal = getval(b, lastIndex);
      return aVal < bVal ? -order : aVal > bVal ? order : 0;
    }
    return this.toArray(function (a) {
      return a.sort(sorter);
    }).then(cb);
  }
  toArray(cb) {
    return this._read(trans => {
      var ctx = this._ctx;
      if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        const {
          valueMapper
        } = ctx;
        const index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          limit: ctx.limit,
          values: true,
          query: {
            index,
            range: ctx.range
          }
        }).then(({
          result
        }) => valueMapper ? result.map(valueMapper) : result);
      } else {
        const a = [];
        return iter(ctx, item => a.push(item), trans, ctx.table.core).then(() => a);
      }
    }, cb);
  }
  offset(offset) {
    var ctx = this._ctx;
    if (offset <= 0) return this;
    ctx.offset += offset;
    if (isPlainKeyRange(ctx)) {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return (cursor, advance) => {
          if (offsetLeft === 0) return true;
          if (offsetLeft === 1) {
            --offsetLeft;
            return false;
          }
          advance(() => {
            cursor.advance(offsetLeft);
            offsetLeft = 0;
          });
          return false;
        };
      });
    } else {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return () => --offsetLeft < 0;
      });
    }
    return this;
  }
  limit(numRows) {
    this._ctx.limit = Math.min(this._ctx.limit, numRows);
    addReplayFilter(this._ctx, () => {
      var rowsLeft = numRows;
      return function (cursor, advance, resolve) {
        if (--rowsLeft <= 0) advance(resolve);
        return rowsLeft >= 0;
      };
    }, true);
    return this;
  }
  until(filterFunction, bIncludeStopEntry) {
    addFilter(this._ctx, function (cursor, advance, resolve) {
      if (filterFunction(cursor.value)) {
        advance(resolve);
        return bIncludeStopEntry;
      } else {
        return true;
      }
    });
    return this;
  }
  first(cb) {
    return this.limit(1).toArray(function (a) {
      return a[0];
    }).then(cb);
  }
  last(cb) {
    return this.reverse().first(cb);
  }
  filter(filterFunction) {
    addFilter(this._ctx, function (cursor) {
      return filterFunction(cursor.value);
    });
    addMatchFilter(this._ctx, filterFunction);
    return this;
  }
  and(filter) {
    return this.filter(filter);
  }
  or(indexName) {
    return new this.db.WhereClause(this._ctx.table, indexName, this);
  }
  reverse() {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
    return this;
  }
  desc() {
    return this.reverse();
  }
  eachKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.key, cursor);
    });
  }
  eachUniqueKey(cb) {
    this._ctx.unique = "unique";
    return this.eachKey(cb);
  }
  eachPrimaryKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.primaryKey, cursor);
    });
  }
  keys(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.key);
    }).then(function () {
      return a;
    }).then(cb);
  }
  primaryKeys(cb) {
    var ctx = this._ctx;
    if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
      return this._read(trans => {
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          values: false,
          limit: ctx.limit,
          query: {
            index,
            range: ctx.range
          }
        });
      }).then(({
        result
      }) => result).then(cb);
    }
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.primaryKey);
    }).then(function () {
      return a;
    }).then(cb);
  }
  uniqueKeys(cb) {
    this._ctx.unique = "unique";
    return this.keys(cb);
  }
  firstKey(cb) {
    return this.limit(1).keys(function (a) {
      return a[0];
    }).then(cb);
  }
  lastKey(cb) {
    return this.reverse().firstKey(cb);
  }
  distinct() {
    var ctx = this._ctx,
      idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
    if (!idx || !idx.multi) return this;
    var set = {};
    addFilter(this._ctx, function (cursor) {
      var strKey = cursor.primaryKey.toString();
      var found = hasOwn(set, strKey);
      set[strKey] = true;
      return !found;
    });
    return this;
  }
  modify(changes) {
    var ctx = this._ctx;
    return this._write(trans => {
      var modifyer;
      if (typeof changes === "function") {
        modifyer = changes;
      } else {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;
        modifyer = function (item) {
          var anythingModified = false;
          for (var i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i],
              val = changes[keyPath];
            if (getByKeyPath(item, keyPath) !== val) {
              setByKeyPath(item, keyPath, val);
              anythingModified = true;
            }
          }
          return anythingModified;
        };
      }
      const coreTable = ctx.table.core;
      const {
        outbound,
        extractKey
      } = coreTable.schema.primaryKey;
      const limit = this.db._options.modifyChunkSize || 200;
      const totalFailures = [];
      let successCount = 0;
      const failedKeys = [];
      const applyMutateResult = (expectedCount, res) => {
        const {
          failures,
          numFailures
        } = res;
        successCount += expectedCount - numFailures;
        for (let pos of keys(failures)) {
          totalFailures.push(failures[pos]);
        }
      };
      return this.clone().primaryKeys().then(keys2 => {
        const nextChunk = offset => {
          const count = Math.min(limit, keys2.length - offset);
          return coreTable.getMany({
            trans,
            keys: keys2.slice(offset, offset + count),
            cache: "immutable"
          }).then(values => {
            const addValues = [];
            const putValues = [];
            const putKeys = outbound ? [] : null;
            const deleteKeys = [];
            for (let i = 0; i < count; ++i) {
              const origValue = values[i];
              const ctx2 = {
                value: deepClone(origValue),
                primKey: keys2[offset + i]
              };
              if (modifyer.call(ctx2, ctx2.value, ctx2) !== false) {
                if (ctx2.value == null) {
                  deleteKeys.push(keys2[offset + i]);
                } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx2.value)) !== 0) {
                  deleteKeys.push(keys2[offset + i]);
                  addValues.push(ctx2.value);
                } else {
                  putValues.push(ctx2.value);
                  if (outbound) putKeys.push(keys2[offset + i]);
                }
              }
            }
            const criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
              index: ctx.index,
              range: ctx.range
            };
            return Promise.resolve(addValues.length > 0 && coreTable.mutate({
              trans,
              type: "add",
              values: addValues
            }).then(res => {
              for (let pos in res.failures) {
                deleteKeys.splice(parseInt(pos), 1);
              }
              applyMutateResult(addValues.length, res);
            })).then(() => (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
              trans,
              type: "put",
              keys: putKeys,
              values: putValues,
              criteria,
              changeSpec: typeof changes !== "function" && changes
            }).then(res => applyMutateResult(putValues.length, res))).then(() => (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
              trans,
              type: "delete",
              keys: deleteKeys,
              criteria
            }).then(res => applyMutateResult(deleteKeys.length, res))).then(() => {
              return keys2.length > offset + count && nextChunk(offset + limit);
            });
          });
        };
        return nextChunk(0).then(() => {
          if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
          return keys2.length;
        });
      });
    });
  }
  delete() {
    var ctx = this._ctx,
      range = ctx.range;
    if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
      return this._write(trans => {
        const {
          primaryKey
        } = ctx.table.core.schema;
        const coreRange = range;
        return ctx.table.core.count({
          trans,
          query: {
            index: primaryKey,
            range: coreRange
          }
        }).then(count => {
          return ctx.table.core.mutate({
            trans,
            type: "deleteRange",
            range: coreRange
          }).then(({
            failures,
            lastResult,
            results,
            numFailures
          }) => {
            if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(pos => failures[pos]), count - numFailures);
            return count - numFailures;
          });
        });
      });
    }
    return this.modify(deleteCallback);
  }
};
var deleteCallback = (value, ctx) => ctx.value = null;
function createCollectionConstructor(db) {
  return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
    this.db = db;
    let keyRange = AnyRange,
      error = null;
    if (keyRangeGenerator) try {
      keyRange = keyRangeGenerator();
    } catch (ex) {
      error = ex;
    }
    const whereCtx = whereClause._ctx;
    const table = whereCtx.table;
    const readingHook = table.hook.reading.fire;
    this._ctx = {
      table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error,
      or: whereCtx.or,
      valueMapper: readingHook !== mirror ? readingHook : null
    };
  });
}
function simpleCompare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
  return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T) {
  var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
  collection._ctx.error = T ? new T(err) : new TypeError(err);
  return collection;
}
function emptyCollection(whereClause) {
  return new whereClause.Collection(whereClause, () => rangeEqual("")).limit(0);
}
function upperFactory(dir) {
  return dir === "next" ? s => s.toUpperCase() : s => s.toLowerCase();
}
function lowerFactory(dir) {
  return dir === "next" ? s => s.toLowerCase() : s => s.toUpperCase();
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
  var length = Math.min(key.length, lowerNeedle.length);
  var llp = -1;
  for (var i = 0; i < length; ++i) {
    var lwrKeyChar = lowerKey[i];
    if (lwrKeyChar !== lowerNeedle[i]) {
      if (cmp2(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
      if (cmp2(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
      if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
      return null;
    }
    if (cmp2(key[i], lwrKeyChar) < 0) llp = i;
  }
  if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
  if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
  return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
  var upper,
    lower,
    compare,
    upperNeedles,
    lowerNeedles,
    direction,
    nextKeySuffix,
    needlesLen = needles.length;
  if (!needles.every(s => typeof s === "string")) {
    return fail(whereClause, STRING_EXPECTED);
  }
  function initDirection(dir) {
    upper = upperFactory(dir);
    lower = lowerFactory(dir);
    compare = dir === "next" ? simpleCompare : simpleCompareReverse;
    var needleBounds = needles.map(function (needle) {
      return {
        lower: lower(needle),
        upper: upper(needle)
      };
    }).sort(function (a, b) {
      return compare(a.lower, b.lower);
    });
    upperNeedles = needleBounds.map(function (nb) {
      return nb.upper;
    });
    lowerNeedles = needleBounds.map(function (nb) {
      return nb.lower;
    });
    direction = dir;
    nextKeySuffix = dir === "next" ? "" : suffix;
  }
  initDirection("next");
  var c = new whereClause.Collection(whereClause, () => createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix));
  c._ondirectionchange = function (direction2) {
    initDirection(direction2);
  };
  var firstPossibleNeedle = 0;
  c._addAlgorithm(function (cursor, advance, resolve) {
    var key = cursor.key;
    if (typeof key !== "string") return false;
    var lowerKey = lower(key);
    if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
      return true;
    } else {
      var lowestPossibleCasing = null;
      for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
        if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
          lowestPossibleCasing = casing;
        }
      }
      if (lowestPossibleCasing !== null) {
        advance(function () {
          cursor.continue(lowestPossibleCasing + nextKeySuffix);
        });
      } else {
        advance(resolve);
      }
      return false;
    }
  });
  return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
  return {
    type: 2,
    lower,
    upper,
    lowerOpen,
    upperOpen
  };
}
function rangeEqual(value) {
  return {
    type: 1,
    lower: value,
    upper: value
  };
}
var WhereClause = class {
  get Collection() {
    return this._ctx.table.db.Collection;
  }
  between(lower, upper, includeLower, includeUpper) {
    includeLower = includeLower !== false;
    includeUpper = includeUpper === true;
    try {
      if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this);
      return new this.Collection(this, () => createRange(lower, upper, !includeLower, !includeUpper));
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  }
  equals(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => rangeEqual(value));
  }
  above(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, true));
  }
  aboveOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, false));
  }
  below(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value, false, true));
  }
  belowOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value));
  }
  startsWith(str) {
    if (typeof str !== "string") return fail(this, STRING_EXPECTED);
    return this.between(str, str + maxString, true, true);
  }
  startsWithIgnoreCase(str) {
    if (str === "") return this.startsWith(str);
    return addIgnoreCaseAlgorithm(this, (x, a) => x.indexOf(a[0]) === 0, [str], maxString);
  }
  equalsIgnoreCase(str) {
    return addIgnoreCaseAlgorithm(this, (x, a) => x === a[0], [str], "");
  }
  anyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.indexOf(x) !== -1, set, "");
  }
  startsWithAnyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.some(n => x.indexOf(n) === 0), set, maxString);
  }
  anyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    let compare = this._cmp;
    try {
      set.sort(compare);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    if (set.length === 0) return emptyCollection(this);
    const c = new this.Collection(this, () => createRange(set[0], set[set.length - 1]));
    c._ondirectionchange = direction => {
      compare = direction === "next" ? this._ascending : this._descending;
      set.sort(compare);
    };
    let i = 0;
    c._addAlgorithm((cursor, advance, resolve) => {
      const key = cursor.key;
      while (compare(key, set[i]) > 0) {
        ++i;
        if (i === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (compare(key, set[i]) === 0) {
        return true;
      } else {
        advance(() => {
          cursor.continue(set[i]);
        });
        return false;
      }
    });
    return c;
  }
  notEqual(value) {
    return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], {
      includeLowers: false,
      includeUppers: false
    });
  }
  noneOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return new this.Collection(this);
    try {
      set.sort(this._ascending);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    const ranges = set.reduce((res, val) => res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]], null);
    ranges.push([set[set.length - 1], this.db._maxKey]);
    return this.inAnyRange(ranges, {
      includeLowers: false,
      includeUppers: false
    });
  }
  inAnyRange(ranges, options) {
    const cmp2 = this._cmp,
      ascending = this._ascending,
      descending = this._descending,
      min = this._min,
      max = this._max;
    if (ranges.length === 0) return emptyCollection(this);
    if (!ranges.every(range => range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0)) {
      return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
    }
    const includeLowers = !options || options.includeLowers !== false;
    const includeUppers = options && options.includeUppers === true;
    function addRange2(ranges2, newRange) {
      let i = 0,
        l = ranges2.length;
      for (; i < l; ++i) {
        const range = ranges2[i];
        if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
          range[0] = min(range[0], newRange[0]);
          range[1] = max(range[1], newRange[1]);
          break;
        }
      }
      if (i === l) ranges2.push(newRange);
      return ranges2;
    }
    let sortDirection = ascending;
    function rangeSorter(a, b) {
      return sortDirection(a[0], b[0]);
    }
    let set;
    try {
      set = ranges.reduce(addRange2, []);
      set.sort(rangeSorter);
    } catch (ex) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    let rangePos = 0;
    const keyIsBeyondCurrentEntry = includeUppers ? key => ascending(key, set[rangePos][1]) > 0 : key => ascending(key, set[rangePos][1]) >= 0;
    const keyIsBeforeCurrentEntry = includeLowers ? key => descending(key, set[rangePos][0]) > 0 : key => descending(key, set[rangePos][0]) >= 0;
    function keyWithinCurrentRange(key) {
      return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
    }
    let checkKey = keyIsBeyondCurrentEntry;
    const c = new this.Collection(this, () => createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers));
    c._ondirectionchange = direction => {
      if (direction === "next") {
        checkKey = keyIsBeyondCurrentEntry;
        sortDirection = ascending;
      } else {
        checkKey = keyIsBeforeCurrentEntry;
        sortDirection = descending;
      }
      set.sort(rangeSorter);
    };
    c._addAlgorithm((cursor, advance, resolve) => {
      var key = cursor.key;
      while (checkKey(key)) {
        ++rangePos;
        if (rangePos === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (keyWithinCurrentRange(key)) {
        return true;
      } else if (this._cmp(key, set[rangePos][1]) === 0 || this._cmp(key, set[rangePos][0]) === 0) {
        return false;
      } else {
        advance(() => {
          if (sortDirection === ascending) cursor.continue(set[rangePos][0]);else cursor.continue(set[rangePos][1]);
        });
        return false;
      }
    });
    return c;
  }
  startsWithAnyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (!set.every(s => typeof s === "string")) {
      return fail(this, "startsWithAnyOf() only works with strings");
    }
    if (set.length === 0) return emptyCollection(this);
    return this.inAnyRange(set.map(str => [str, str + maxString]));
  }
};
function createWhereClauseConstructor(db) {
  return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
    this.db = db;
    this._ctx = {
      table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
    const indexedDB2 = db._deps.indexedDB;
    if (!indexedDB2) throw new exceptions.MissingAPI();
    this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2);
    this._descending = (a, b) => indexedDB2.cmp(b, a);
    this._max = (a, b) => indexedDB2.cmp(a, b) > 0 ? a : b;
    this._min = (a, b) => indexedDB2.cmp(a, b) < 0 ? a : b;
    this._IDBKeyRange = db._deps.IDBKeyRange;
  });
}
function eventRejectHandler(reject) {
  return wrap(function (event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}
function preventDefault(event) {
  if (event.stopPropagation) event.stopPropagation();
  if (event.preventDefault) event.preventDefault();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
var Transaction = class {
  _lock() {
    assert(!PSD.global);
    ++this._reculock;
    if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
    return this;
  }
  _unlock() {
    assert(!PSD.global);
    if (--this._reculock === 0) {
      if (!PSD.global) PSD.lockOwnerFor = null;
      while (this._blockedFuncs.length > 0 && !this._locked()) {
        var fnAndPSD = this._blockedFuncs.shift();
        try {
          usePSD(fnAndPSD[1], fnAndPSD[0]);
        } catch (e) {}
      }
    }
    return this;
  }
  _locked() {
    return this._reculock && PSD.lockOwnerFor !== this;
  }
  create(idbtrans) {
    if (!this.mode) return this;
    const idbdb = this.db.idbdb;
    const dbOpenError = this.db._state.dbOpenError;
    assert(!this.idbtrans);
    if (!idbtrans && !idbdb) {
      switch (dbOpenError && dbOpenError.name) {
        case "DatabaseClosedError":
          throw new exceptions.DatabaseClosed(dbOpenError);
        case "MissingAPIError":
          throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
        default:
          throw new exceptions.OpenFailed(dbOpenError);
      }
    }
    if (!this.active) throw new exceptions.TransactionInactive();
    assert(this._completion._state === null);
    idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }) : idbdb.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }));
    idbtrans.onerror = wrap(ev => {
      preventDefault(ev);
      this._reject(idbtrans.error);
    });
    idbtrans.onabort = wrap(ev => {
      preventDefault(ev);
      this.active && this._reject(new exceptions.Abort(idbtrans.error));
      this.active = false;
      this.on("abort").fire(ev);
    });
    idbtrans.oncomplete = wrap(() => {
      this.active = false;
      this._resolve();
      if ("mutatedParts" in idbtrans) {
        globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
      }
    });
    return this;
  }
  _promise(mode, fn, bWriteLock) {
    if (mode === "readwrite" && this.mode !== "readwrite") return rejection(new exceptions.ReadOnly("Transaction is readonly"));
    if (!this.active) return rejection(new exceptions.TransactionInactive());
    if (this._locked()) {
      return new DexiePromise((resolve, reject) => {
        this._blockedFuncs.push([() => {
          this._promise(mode, fn, bWriteLock).then(resolve, reject);
        }, PSD]);
      });
    } else if (bWriteLock) {
      return newScope(() => {
        var p2 = new DexiePromise((resolve, reject) => {
          this._lock();
          const rv = fn(resolve, reject, this);
          if (rv && rv.then) rv.then(resolve, reject);
        });
        p2.finally(() => this._unlock());
        p2._lib = true;
        return p2;
      });
    } else {
      var p = new DexiePromise((resolve, reject) => {
        var rv = fn(resolve, reject, this);
        if (rv && rv.then) rv.then(resolve, reject);
      });
      p._lib = true;
      return p;
    }
  }
  _root() {
    return this.parent ? this.parent._root() : this;
  }
  waitFor(promiseLike) {
    var root = this._root();
    const promise = DexiePromise.resolve(promiseLike);
    if (root._waitingFor) {
      root._waitingFor = root._waitingFor.then(() => promise);
    } else {
      root._waitingFor = promise;
      root._waitingQueue = [];
      var store = root.idbtrans.objectStore(root.storeNames[0]);
      (function spin() {
        ++root._spinCount;
        while (root._waitingQueue.length) root._waitingQueue.shift()();
        if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
      })();
    }
    var currentWaitPromise = root._waitingFor;
    return new DexiePromise((resolve, reject) => {
      promise.then(res => root._waitingQueue.push(wrap(resolve.bind(null, res))), err => root._waitingQueue.push(wrap(reject.bind(null, err)))).finally(() => {
        if (root._waitingFor === currentWaitPromise) {
          root._waitingFor = null;
        }
      });
    });
  }
  abort() {
    if (this.active) {
      this.active = false;
      if (this.idbtrans) this.idbtrans.abort();
      this._reject(new exceptions.Abort());
    }
  }
  table(tableName) {
    const memoizedTables = this._memoizedTables || (this._memoizedTables = {});
    if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
    const tableSchema = this.schema[tableName];
    if (!tableSchema) {
      throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
    }
    const transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
    transactionBoundTable.core = this.db.core.table(tableName);
    memoizedTables[tableName] = transactionBoundTable;
    return transactionBoundTable;
  }
};
function createTransactionConstructor(db) {
  return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
    this.db = db;
    this.mode = mode;
    this.storeNames = storeNames;
    this.schema = dbschema;
    this.chromeTransactionDurability = chromeTransactionDurability;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new DexiePromise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this._completion.then(() => {
      this.active = false;
      this.on.complete.fire();
    }, e => {
      var wasActive = this.active;
      this.active = false;
      this.on.error.fire(e);
      this.parent ? this.parent._reject(e) : wasActive && this.idbtrans && this.idbtrans.abort();
      return rejection(e);
    });
  });
}
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
  return {
    name,
    keyPath,
    unique,
    multi,
    auto,
    compound,
    src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
  };
}
function nameFromKeyPath(keyPath) {
  return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
  return {
    name,
    primKey,
    indexes,
    mappedClass: null,
    idxByName: arrayToObject(indexes, index => [index.name, index])
  };
}
function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}
var getMaxKey = IdbKeyRange => {
  try {
    IdbKeyRange.only([[]]);
    getMaxKey = () => [[]];
    return [[]];
  } catch (e) {
    getMaxKey = () => maxString;
    return maxString;
  }
};
function getKeyExtractor(keyPath) {
  if (keyPath == null) {
    return () => void 0;
  } else if (typeof keyPath === "string") {
    return getSinglePathKeyExtractor(keyPath);
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function getSinglePathKeyExtractor(keyPath) {
  const split = keyPath.split(".");
  if (split.length === 1) {
    return obj => obj[keyPath];
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function arrayify(arrayLike) {
  return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
  return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : `[${keyPath.join("+")}]`;
}
function createDBCore(db, IdbKeyRange, tmpTrans) {
  function extractSchema(db2, trans) {
    const tables2 = arrayify(db2.objectStoreNames);
    return {
      schema: {
        name: db2.name,
        tables: tables2.map(table => trans.objectStore(table)).map(store => {
          const {
            keyPath,
            autoIncrement
          } = store;
          const compound = isArray(keyPath);
          const outbound = keyPath == null;
          const indexByKeyPath = {};
          const result = {
            name: store.name,
            primaryKey: {
              name: null,
              isPrimaryKey: true,
              outbound,
              compound,
              keyPath,
              autoIncrement,
              unique: true,
              extractKey: getKeyExtractor(keyPath)
            },
            indexes: arrayify(store.indexNames).map(indexName => store.index(indexName)).map(index => {
              const {
                name,
                unique,
                multiEntry,
                keyPath: keyPath2
              } = index;
              const compound2 = isArray(keyPath2);
              const result2 = {
                name,
                compound: compound2,
                keyPath: keyPath2,
                unique,
                multiEntry,
                extractKey: getKeyExtractor(keyPath2)
              };
              indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
              return result2;
            }),
            getIndexByKeyPath: keyPath2 => indexByKeyPath[getKeyPathAlias(keyPath2)]
          };
          indexByKeyPath[":id"] = result.primaryKey;
          if (keyPath != null) {
            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
          }
          return result;
        })
      },
      hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
    };
  }
  function makeIDBKeyRange(range) {
    if (range.type === 3) return null;
    if (range.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
    const {
      lower,
      upper,
      lowerOpen,
      upperOpen
    } = range;
    const idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    return idbRange;
  }
  function createDbCoreTable(tableSchema) {
    const tableName = tableSchema.name;
    function mutate({
      trans,
      type: type2,
      keys: keys2,
      values,
      range
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const store = trans.objectStore(tableName);
        const outbound = store.keyPath == null;
        const isAddOrPut = type2 === "put" || type2 === "add";
        if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange") throw new Error("Invalid operation type: " + type2);
        const {
          length
        } = keys2 || values || {
          length: 1
        };
        if (keys2 && values && keys2.length !== values.length) {
          throw new Error("Given keys array must have same length as given values array.");
        }
        if (length === 0) return resolve({
          numFailures: 0,
          failures: {},
          results: [],
          lastResult: void 0
        });
        let req;
        const reqs = [];
        const failures = [];
        let numFailures = 0;
        const errorHandler = event => {
          ++numFailures;
          preventDefault(event);
        };
        if (type2 === "deleteRange") {
          if (range.type === 4) return resolve({
            numFailures,
            failures,
            results: [],
            lastResult: void 0
          });
          if (range.type === 3) reqs.push(req = store.clear());else reqs.push(req = store.delete(makeIDBKeyRange(range)));
        } else {
          const [args1, args2] = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null];
          if (isAddOrPut) {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          } else {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          }
        }
        const done = event => {
          const lastResult = event.target.result;
          reqs.forEach((req2, i) => req2.error != null && (failures[i] = req2.error));
          resolve({
            numFailures,
            failures,
            results: type2 === "delete" ? keys2 : reqs.map(req2 => req2.result),
            lastResult
          });
        };
        req.onerror = event => {
          errorHandler(event);
          done(event);
        };
        req.onsuccess = done;
      });
    }
    function openCursor2({
      trans,
      values,
      query: query2,
      reverse,
      unique
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const {
          index,
          range
        } = query2;
        const store = trans.objectStore(tableName);
        const source = index.isPrimaryKey ? store : store.index(index.name);
        const direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
        const req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap(ev => {
          const cursor = req.result;
          if (!cursor) {
            resolve(null);
            return;
          }
          cursor.___id = ++_id_counter;
          cursor.done = false;
          const _cursorContinue = cursor.continue.bind(cursor);
          let _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
          if (_cursorContinuePrimaryKey) _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
          const _cursorAdvance = cursor.advance.bind(cursor);
          const doThrowCursorIsNotStarted = () => {
            throw new Error("Cursor not started");
          };
          const doThrowCursorIsStopped = () => {
            throw new Error("Cursor not stopped");
          };
          cursor.trans = trans;
          cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
          cursor.fail = wrap(reject);
          cursor.next = function () {
            let gotOne = 1;
            return this.start(() => gotOne-- ? this.continue() : this.stop()).then(() => this);
          };
          cursor.start = callback => {
            const iterationPromise = new Promise((resolveIteration, rejectIteration) => {
              resolveIteration = wrap(resolveIteration);
              req.onerror = eventRejectHandler(rejectIteration);
              cursor.fail = rejectIteration;
              cursor.stop = value => {
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                resolveIteration(value);
              };
            });
            const guardedCallback = () => {
              if (req.result) {
                try {
                  callback();
                } catch (err) {
                  cursor.fail(err);
                }
              } else {
                cursor.done = true;
                cursor.start = () => {
                  throw new Error("Cursor behind last entry");
                };
                cursor.stop();
              }
            };
            req.onsuccess = wrap(ev2 => {
              req.onsuccess = guardedCallback;
              guardedCallback();
            });
            cursor.continue = _cursorContinue;
            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
            cursor.advance = _cursorAdvance;
            guardedCallback();
            return iterationPromise;
          };
          resolve(cursor);
        }, reject);
      });
    }
    function query(hasGetAll2) {
      return request => {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const {
            trans,
            values,
            limit,
            query: query2
          } = request;
          const nonInfinitLimit = limit === Infinity ? void 0 : limit;
          const {
            index,
            range
          } = query2;
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          if (limit === 0) return resolve({
            result: []
          });
          if (hasGetAll2) {
            const req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
            req.onsuccess = event => resolve({
              result: event.target.result
            });
            req.onerror = eventRejectHandler(reject);
          } else {
            let count = 0;
            const req = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
            const result = [];
            req.onsuccess = event => {
              const cursor = req.result;
              if (!cursor) return resolve({
                result
              });
              result.push(values ? cursor.value : cursor.primaryKey);
              if (++count === limit) return resolve({
                result
              });
              cursor.continue();
            };
            req.onerror = eventRejectHandler(reject);
          }
        });
      };
    }
    return {
      name: tableName,
      schema: tableSchema,
      mutate,
      getMany({
        trans,
        keys: keys2
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const length = keys2.length;
          const result = new Array(length);
          let keyCount = 0;
          let callbackCount = 0;
          let req;
          const successHandler = event => {
            const req2 = event.target;
            if ((result[req2._pos] = req2.result) != null) ;
            if (++callbackCount === keyCount) resolve(result);
          };
          const errorHandler = eventRejectHandler(reject);
          for (let i = 0; i < length; ++i) {
            const key = keys2[i];
            if (key != null) {
              req = store.get(keys2[i]);
              req._pos = i;
              req.onsuccess = successHandler;
              req.onerror = errorHandler;
              ++keyCount;
            }
          }
          if (keyCount === 0) resolve(result);
        });
      },
      get({
        trans,
        key
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const req = store.get(key);
          req.onsuccess = event => resolve(event.target.result);
          req.onerror = eventRejectHandler(reject);
        });
      },
      query: query(hasGetAll),
      openCursor: openCursor2,
      count({
        query: query2,
        trans
      }) {
        const {
          index,
          range
        } = query2;
        return new Promise((resolve, reject) => {
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          const req = idbKeyRange ? source.count(idbKeyRange) : source.count();
          req.onsuccess = wrap(ev => resolve(ev.target.result));
          req.onerror = eventRejectHandler(reject);
        });
      }
    };
  }
  const {
    schema,
    hasGetAll
  } = extractSchema(db, tmpTrans);
  const tables = schema.tables.map(tableSchema => createDbCoreTable(tableSchema));
  const tableMap = {};
  tables.forEach(table => tableMap[table.name] = table);
  return {
    stack: "dbcore",
    transaction: db.transaction.bind(db),
    table(name) {
      const result = tableMap[name];
      if (!result) throw new Error(`Table '${name}' not found`);
      return tableMap[name];
    },
    MIN_KEY: -Infinity,
    MAX_KEY: getMaxKey(IdbKeyRange),
    schema
  };
}
function createMiddlewareStack(stackImpl, middlewares) {
  return middlewares.reduce((down, {
    create
  }) => ({
    ...down,
    ...create(down)
  }), stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, {
  IDBKeyRange,
  indexedDB: indexedDB2
}, tmpTrans) {
  const dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
  return {
    dbcore
  };
}
function generateMiddlewareStacks({
  _novip: db
}, tmpTrans) {
  const idbdb = tmpTrans.db;
  const stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
  db.core = stacks.dbcore;
  db.tables.forEach(table => {
    const tableName = table.name;
    if (db.core.schema.tables.some(tbl => tbl.name === tableName)) {
      table.core = db.core.table(tableName);
      if (db[tableName] instanceof db.Table) {
        db[tableName].core = table.core;
      }
    }
  });
}
function setApiOnPlace({
  _novip: db
}, objs, tableNames, dbschema) {
  tableNames.forEach(tableName => {
    const schema = dbschema[tableName];
    objs.forEach(obj => {
      const propDesc = getPropertyDescriptor(obj, tableName);
      if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
        if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
          setProp(obj, tableName, {
            get() {
              return this.table(tableName);
            },
            set(value) {
              defineProperty(this, tableName, {
                value,
                writable: true,
                configurable: true,
                enumerable: true
              });
            }
          });
        } else {
          obj[tableName] = new db.Table(tableName, schema);
        }
      }
    });
  });
}
function removeTablesApi({
  _novip: db
}, objs) {
  objs.forEach(obj => {
    for (let key in obj) {
      if (obj[key] instanceof db.Table) delete obj[key];
    }
  });
}
function lowerVersionFirst(a, b) {
  return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
  const globalSchema = db._dbSchema;
  const trans = db._createTransaction("readwrite", db._storeNames, globalSchema);
  trans.create(idbUpgradeTrans);
  trans._completion.catch(reject);
  const rejectTransaction = trans._reject.bind(trans);
  const transless = PSD.transless || PSD;
  newScope(() => {
    PSD.trans = trans;
    PSD.transless = transless;
    if (oldVersion === 0) {
      keys(globalSchema).forEach(tableName => {
        createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
      });
      generateMiddlewareStacks(db, idbUpgradeTrans);
      DexiePromise.follow(() => db.on.populate.fire(trans)).catch(rejectTransaction);
    } else updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
  });
}
function updateTablesAndIndexes({
  _novip: db
}, oldVersion, trans, idbUpgradeTrans) {
  const queue = [];
  const versions = db._versions;
  let globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
  let anyContentUpgraderHasRun = false;
  const versToRun = versions.filter(v => v._cfg.version >= oldVersion);
  versToRun.forEach(version => {
    queue.push(() => {
      const oldSchema = globalSchema;
      const newSchema = version._cfg.dbschema;
      adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
      adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
      globalSchema = db._dbSchema = newSchema;
      const diff = getSchemaDiff(oldSchema, newSchema);
      diff.add.forEach(tuple => {
        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
      });
      diff.change.forEach(change => {
        if (change.recreate) {
          throw new exceptions.Upgrade("Not yet support for changing primary key");
        } else {
          const store = idbUpgradeTrans.objectStore(change.name);
          change.add.forEach(idx => addIndex(store, idx));
          change.change.forEach(idx => {
            store.deleteIndex(idx.name);
            addIndex(store, idx);
          });
          change.del.forEach(idxName => store.deleteIndex(idxName));
        }
      });
      const contentUpgrade = version._cfg.contentUpgrade;
      if (contentUpgrade && version._cfg.version > oldVersion) {
        generateMiddlewareStacks(db, idbUpgradeTrans);
        trans._memoizedTables = {};
        anyContentUpgraderHasRun = true;
        let upgradeSchema = shallowClone(newSchema);
        diff.del.forEach(table => {
          upgradeSchema[table] = oldSchema[table];
        });
        removeTablesApi(db, [db.Transaction.prototype]);
        setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema), upgradeSchema);
        trans.schema = upgradeSchema;
        const contentUpgradeIsAsync = isAsyncFunction(contentUpgrade);
        if (contentUpgradeIsAsync) {
          incrementExpectedAwaits();
        }
        let returnValue;
        const promiseFollowed = DexiePromise.follow(() => {
          returnValue = contentUpgrade(trans);
          if (returnValue) {
            if (contentUpgradeIsAsync) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue.then(decrementor, decrementor);
            }
          }
        });
        return returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue) : promiseFollowed.then(() => returnValue);
      }
    });
    queue.push(idbtrans => {
      if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
        const newSchema = version._cfg.dbschema;
        deleteRemovedTables(newSchema, idbtrans);
      }
      removeTablesApi(db, [db.Transaction.prototype]);
      setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
      trans.schema = db._dbSchema;
    });
  });
  function runQueue() {
    return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
  }
  return runQueue().then(() => {
    createMissingTables(globalSchema, idbUpgradeTrans);
  });
}
function getSchemaDiff(oldSchema, newSchema) {
  const diff = {
    del: [],
    add: [],
    change: []
  };
  let table;
  for (table in oldSchema) {
    if (!newSchema[table]) diff.del.push(table);
  }
  for (table in newSchema) {
    const oldDef = oldSchema[table],
      newDef = newSchema[table];
    if (!oldDef) {
      diff.add.push([table, newDef]);
    } else {
      const change = {
        name: table,
        def: newDef,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
        change.recreate = true;
        diff.change.push(change);
      } else {
        const oldIndexes = oldDef.idxByName;
        const newIndexes = newDef.idxByName;
        let idxName;
        for (idxName in oldIndexes) {
          if (!newIndexes[idxName]) change.del.push(idxName);
        }
        for (idxName in newIndexes) {
          const oldIdx = oldIndexes[idxName],
            newIdx = newIndexes[idxName];
          if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
        }
        if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
          diff.change.push(change);
        }
      }
    }
  }
  return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
  const store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
    keyPath: primKey.keyPath,
    autoIncrement: primKey.auto
  } : {
    autoIncrement: primKey.auto
  });
  indexes.forEach(idx => addIndex(store, idx));
  return store;
}
function createMissingTables(newSchema, idbtrans) {
  keys(newSchema).forEach(tableName => {
    if (!idbtrans.db.objectStoreNames.contains(tableName)) {
      createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    }
  });
}
function deleteRemovedTables(newSchema, idbtrans) {
  [].slice.call(idbtrans.db.objectStoreNames).forEach(storeName => newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName));
}
function addIndex(store, idx) {
  store.createIndex(idx.name, idx.keyPath, {
    unique: idx.unique,
    multiEntry: idx.multi
  });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
  const globalSchema = {};
  const dbStoreNames = slice(idbdb.objectStoreNames, 0);
  dbStoreNames.forEach(storeName => {
    const store = tmpTrans.objectStore(storeName);
    let keyPath = store.keyPath;
    const primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
    const indexes = [];
    for (let j = 0; j < store.indexNames.length; ++j) {
      const idbindex = store.index(store.indexNames[j]);
      keyPath = idbindex.keyPath;
      var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
      indexes.push(index);
    }
    globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
  });
  return globalSchema;
}
function readGlobalSchema({
  _novip: db
}, idbdb, tmpTrans) {
  db.verno = idbdb.version / 10;
  const globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
  db._storeNames = slice(idbdb.objectStoreNames, 0);
  setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
  const installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
  const diff = getSchemaDiff(installedSchema, db._dbSchema);
  return !(diff.add.length || diff.change.some(ch => ch.add.length || ch.change.length));
}
function adjustToExistingIndexNames({
  _novip: db
}, schema, idbtrans) {
  const storeNames = idbtrans.db.objectStoreNames;
  for (let i = 0; i < storeNames.length; ++i) {
    const storeName = storeNames[i];
    const store = idbtrans.objectStore(storeName);
    db._hasGetAll = "getAll" in store;
    for (let j = 0; j < store.indexNames.length; ++j) {
      const indexName = store.indexNames[j];
      const keyPath = store.index(indexName).keyPath;
      const dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
      if (schema[storeName]) {
        const indexSpec = schema[storeName].idxByName[dexieName];
        if (indexSpec) {
          indexSpec.name = indexName;
          delete schema[storeName].idxByName[dexieName];
          schema[storeName].idxByName[indexName] = indexSpec;
        }
      }
    }
  }
  if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    db._hasGetAll = false;
  }
}
function parseIndexSyntax(primKeyAndIndexes) {
  return primKeyAndIndexes.split(",").map((index, indexNum) => {
    index = index.trim();
    const name = index.replace(/([&*]|\+\+)/g, "");
    const keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
    return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
  });
}
var Version = class {
  _parseStoresSpec(stores, outSchema) {
    keys(stores).forEach(tableName => {
      if (stores[tableName] !== null) {
        var indexes = parseIndexSyntax(stores[tableName]);
        var primKey = indexes.shift();
        if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
        indexes.forEach(idx => {
          if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
        });
        outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
      }
    });
  }
  stores(stores) {
    const db = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
    const versions = db._versions;
    const storesSpec = {};
    let dbschema = {};
    versions.forEach(version => {
      extend(storesSpec, version._cfg.storesSource);
      dbschema = version._cfg.dbschema = {};
      version._parseStoresSpec(storesSpec, dbschema);
    });
    db._dbSchema = dbschema;
    removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
    setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
    db._storeNames = keys(dbschema);
    return this;
  }
  upgrade(upgradeFunction) {
    this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
    return this;
  }
};
function createVersionConstructor(db) {
  return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
    this.db = db;
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
  });
}
function getDbNamesTable(indexedDB2, IDBKeyRange) {
  let dbNamesDB = indexedDB2["_dbNamesDB"];
  if (!dbNamesDB) {
    dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
      addons: [],
      indexedDB: indexedDB2,
      IDBKeyRange
    });
    dbNamesDB.version(1).stores({
      dbnames: "name"
    });
  }
  return dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB2) {
  return indexedDB2 && typeof indexedDB2.databases === "function";
}
function getDatabaseNames({
  indexedDB: indexedDB2,
  IDBKeyRange
}) {
  return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(infos => infos.map(info => info.name).filter(name => name !== DBNAMES_DB)) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
}
function _onDatabaseCreated({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({
    name
  }).catch(nop);
}
function _onDatabaseDeleted({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn) {
  return newScope(function () {
    PSD.letThrough = true;
    return fn();
  });
}
function idbReady() {
  var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!isSafari || !indexedDB.databases) return Promise.resolve();
  var intervalId;
  return new Promise(function (resolve) {
    var tryIdb = function () {
      return indexedDB.databases().finally(resolve);
    };
    intervalId = setInterval(tryIdb, 100);
    tryIdb();
  }).finally(function () {
    return clearInterval(intervalId);
  });
}
function dexieOpen(db) {
  const state = db._state;
  const {
    indexedDB: indexedDB2
  } = db._deps;
  if (state.isBeingOpened || db.idbdb) return state.dbReadyPromise.then(() => state.dbOpenError ? rejection(state.dbOpenError) : db);
  debug && (state.openCanceller._stackHolder = getErrorWithStack());
  state.isBeingOpened = true;
  state.dbOpenError = null;
  state.openComplete = false;
  const openCanceller = state.openCanceller;
  function throwIfCancelled() {
    if (state.openCanceller !== openCanceller) throw new exceptions.DatabaseClosed("db.open() was cancelled");
  }
  let resolveDbReady = state.dbReadyResolve,
    upgradeTransaction = null,
    wasCreated = false;
  return DexiePromise.race([openCanceller, (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(() => new DexiePromise((resolve, reject) => {
    throwIfCancelled();
    if (!indexedDB2) throw new exceptions.MissingAPI();
    const dbName = db.name;
    const req = state.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(db.verno * 10));
    if (!req) throw new exceptions.MissingAPI();
    req.onerror = eventRejectHandler(reject);
    req.onblocked = wrap(db._fireOnBlocked);
    req.onupgradeneeded = wrap(e => {
      upgradeTransaction = req.transaction;
      if (state.autoSchema && !db._options.allowEmptyDB) {
        req.onerror = preventDefault;
        upgradeTransaction.abort();
        req.result.close();
        const delreq = indexedDB2.deleteDatabase(dbName);
        delreq.onsuccess = delreq.onerror = wrap(() => {
          reject(new exceptions.NoSuchDatabase(`Database ${dbName} doesnt exist`));
        });
      } else {
        upgradeTransaction.onerror = eventRejectHandler(reject);
        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
        wasCreated = oldVer < 1;
        db._novip.idbdb = req.result;
        runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
      }
    }, reject);
    req.onsuccess = wrap(() => {
      upgradeTransaction = null;
      const idbdb = db._novip.idbdb = req.result;
      const objectStoreNames = slice(idbdb.objectStoreNames);
      if (objectStoreNames.length > 0) try {
        const tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
        if (state.autoSchema) readGlobalSchema(db, idbdb, tmpTrans);else {
          adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
          if (!verifyInstalledSchema(db, tmpTrans)) {
            console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.`);
          }
        }
        generateMiddlewareStacks(db, tmpTrans);
      } catch (e) {}
      connections.push(db);
      idbdb.onversionchange = wrap(ev => {
        state.vcFired = true;
        db.on("versionchange").fire(ev);
      });
      idbdb.onclose = wrap(ev => {
        db.on("close").fire(ev);
      });
      if (wasCreated) _onDatabaseCreated(db._deps, dbName);
      resolve();
    }, reject);
  }))]).then(() => {
    throwIfCancelled();
    state.onReadyBeingFired = [];
    return DexiePromise.resolve(vip(() => db.on.ready.fire(db.vip))).then(function fireRemainders() {
      if (state.onReadyBeingFired.length > 0) {
        let remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(() => remainders(db.vip))).then(fireRemainders);
      }
    });
  }).finally(() => {
    state.onReadyBeingFired = null;
    state.isBeingOpened = false;
  }).then(() => {
    return db;
  }).catch(err => {
    state.dbOpenError = err;
    try {
      upgradeTransaction && upgradeTransaction.abort();
    } catch (_a) {}
    if (openCanceller === state.openCanceller) {
      db._close();
    }
    return rejection(err);
  }).finally(() => {
    state.openComplete = true;
    resolveDbReady();
  });
}
function awaitIterator(iterator) {
  var callNext = result => iterator.next(result),
    doThrow = error => iterator.throw(error),
    onSuccess = step(callNext),
    onError = step(doThrow);
  function step(getNext) {
    return val => {
      var next = getNext(val),
        value = next.value;
      return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }
  return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
  var i = arguments.length;
  if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
  var args = new Array(i - 1);
  while (--i) args[i - 1] = arguments[i];
  scopeFunc = args.pop();
  var tables = flatten(args);
  return [mode, tables, scopeFunc];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
  return DexiePromise.resolve().then(() => {
    const transless = PSD.transless || PSD;
    const trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
    const zoneProps = {
      trans,
      transless
    };
    if (parentTransaction) {
      trans.idbtrans = parentTransaction.idbtrans;
    } else {
      try {
        trans.create();
        db._state.PR1398_maxLoop = 3;
      } catch (ex) {
        if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
          console.warn("Dexie: Need to reopen db");
          db._close();
          return db.open().then(() => enterTransactionScope(db, mode, storeNames, null, scopeFunc));
        }
        return rejection(ex);
      }
    }
    const scopeFuncIsAsync = isAsyncFunction(scopeFunc);
    if (scopeFuncIsAsync) {
      incrementExpectedAwaits();
    }
    let returnValue;
    const promiseFollowed = DexiePromise.follow(() => {
      returnValue = scopeFunc.call(trans, trans);
      if (returnValue) {
        if (scopeFuncIsAsync) {
          var decrementor = decrementExpectedAwaits.bind(null, null);
          returnValue.then(decrementor, decrementor);
        } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
          returnValue = awaitIterator(returnValue);
        }
      }
    }, zoneProps);
    return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(x => trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : promiseFollowed.then(() => returnValue)).then(x => {
      if (parentTransaction) trans._resolve();
      return trans._completion.then(() => x);
    }).catch(e => {
      trans._reject(e);
      return rejection(e);
    });
  });
}
function pad(a, value, count) {
  const result = isArray(a) ? a.slice() : [a];
  for (let i = 0; i < count; ++i) result.push(value);
  return result;
}
function createVirtualIndexMiddleware(down) {
  return {
    ...down,
    table(tableName) {
      const table = down.table(tableName);
      const {
        schema
      } = table;
      const indexLookup = {};
      const allVirtualIndexes = [];
      function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
        const keyPathAlias = getKeyPathAlias(keyPath);
        const indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
        const keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
        const isVirtual = keyTail > 0;
        const virtualIndex = {
          ...lowLevelIndex,
          isVirtual,
          keyTail,
          keyLength,
          extractKey: getKeyExtractor(keyPath),
          unique: !isVirtual && lowLevelIndex.unique
        };
        indexList.push(virtualIndex);
        if (!virtualIndex.isPrimaryKey) {
          allVirtualIndexes.push(virtualIndex);
        }
        if (keyLength > 1) {
          const virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
          addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
        }
        indexList.sort((a, b) => a.keyTail - b.keyTail);
        return virtualIndex;
      }
      const primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
      indexLookup[":id"] = [primaryKey];
      for (const index of schema.indexes) {
        addVirtualIndexes(index.keyPath, 0, index);
      }
      function findBestIndex(keyPath) {
        const result2 = indexLookup[getKeyPathAlias(keyPath)];
        return result2 && result2[0];
      }
      function translateRange(range, keyTail) {
        return {
          type: range.type === 1 ? 2 : range.type,
          lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
          lowerOpen: true,
          upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
          upperOpen: true
        };
      }
      function translateRequest(req) {
        const index = req.query.index;
        return index.isVirtual ? {
          ...req,
          query: {
            index,
            range: translateRange(req.query.range, index.keyTail)
          }
        } : req;
      }
      const result = {
        ...table,
        schema: {
          ...schema,
          primaryKey,
          indexes: allVirtualIndexes,
          getIndexByKeyPath: findBestIndex
        },
        count(req) {
          return table.count(translateRequest(req));
        },
        query(req) {
          return table.query(translateRequest(req));
        },
        openCursor(req) {
          const {
            keyTail,
            isVirtual,
            keyLength
          } = req.query.index;
          if (!isVirtual) return table.openCursor(req);
          function createVirtualCursor(cursor) {
            function _continue(key) {
              key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
            }
            const virtualCursor = Object.create(cursor, {
              continue: {
                value: _continue
              },
              continuePrimaryKey: {
                value(key, primaryKey2) {
                  cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                }
              },
              primaryKey: {
                get() {
                  return cursor.primaryKey;
                }
              },
              key: {
                get() {
                  const key = cursor.key;
                  return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                }
              },
              value: {
                get() {
                  return cursor.value;
                }
              }
            });
            return virtualCursor;
          }
          return table.openCursor(translateRequest(req)).then(cursor => cursor && createVirtualCursor(cursor));
        }
      };
      return result;
    }
  };
}
var virtualIndexMiddleware = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: createVirtualIndexMiddleware
};
function getObjectDiff(a, b, rv, prfx) {
  rv = rv || {};
  prfx = prfx || "";
  keys(a).forEach(prop => {
    if (!hasOwn(b, prop)) {
      rv[prfx + prop] = void 0;
    } else {
      var ap = a[prop],
        bp = b[prop];
      if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
        const apTypeName = toStringTag(ap);
        const bpTypeName = toStringTag(bp);
        if (apTypeName !== bpTypeName) {
          rv[prfx + prop] = b[prop];
        } else if (apTypeName === "Object") {
          getObjectDiff(ap, bp, rv, prfx + prop + ".");
        } else if (ap !== bp) {
          rv[prfx + prop] = b[prop];
        }
      } else if (ap !== bp) rv[prfx + prop] = b[prop];
    }
  });
  keys(b).forEach(prop => {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop];
    }
  });
  return rv;
}
function getEffectiveKeys(primaryKey, req) {
  if (req.type === "delete") return req.keys;
  return req.keys || req.values.map(primaryKey.extractKey);
}
var hooksMiddleware = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: downCore => ({
    ...downCore,
    table(tableName) {
      const downTable = downCore.table(tableName);
      const {
        primaryKey
      } = downTable.schema;
      const tableMiddleware = {
        ...downTable,
        mutate(req) {
          const dxTrans = PSD.trans;
          const {
            deleting,
            creating,
            updating
          } = dxTrans.table(tableName).hook;
          switch (req.type) {
            case "add":
              if (creating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "put":
              if (creating.fire === nop && updating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "delete":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "deleteRange":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => deleteRange(req), true);
          }
          return downTable.mutate(req);
          function addPutOrDelete(req2) {
            const dxTrans2 = PSD.trans;
            const keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
            if (!keys2) throw new Error("Keys missing");
            req2 = req2.type === "add" || req2.type === "put" ? {
              ...req2,
              keys: keys2
            } : {
              ...req2
            };
            if (req2.type !== "delete") req2.values = [...req2.values];
            if (req2.keys) req2.keys = [...req2.keys];
            return getExistingValues(downTable, req2, keys2).then(existingValues => {
              const contexts = keys2.map((key, i) => {
                const existingValue = existingValues[i];
                const ctx = {
                  onerror: null,
                  onsuccess: null
                };
                if (req2.type === "delete") {
                  deleting.fire.call(ctx, key, existingValue, dxTrans2);
                } else if (req2.type === "add" || existingValue === void 0) {
                  const generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                  if (key == null && generatedPrimaryKey != null) {
                    key = generatedPrimaryKey;
                    req2.keys[i] = key;
                    if (!primaryKey.outbound) {
                      setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                    }
                  }
                } else {
                  const objectDiff = getObjectDiff(existingValue, req2.values[i]);
                  const additionalChanges = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                  if (additionalChanges) {
                    const requestedValue = req2.values[i];
                    Object.keys(additionalChanges).forEach(keyPath => {
                      if (hasOwn(requestedValue, keyPath)) {
                        requestedValue[keyPath] = additionalChanges[keyPath];
                      } else {
                        setByKeyPath(requestedValue, keyPath, additionalChanges[keyPath]);
                      }
                    });
                  }
                }
                return ctx;
              });
              return downTable.mutate(req2).then(({
                failures,
                results,
                numFailures,
                lastResult
              }) => {
                for (let i = 0; i < keys2.length; ++i) {
                  const primKey = results ? results[i] : keys2[i];
                  const ctx = contexts[i];
                  if (primKey == null) {
                    ctx.onerror && ctx.onerror(failures[i]);
                  } else {
                    ctx.onsuccess && ctx.onsuccess(req2.type === "put" && existingValues[i] ? req2.values[i] : primKey);
                  }
                }
                return {
                  failures,
                  results,
                  numFailures,
                  lastResult
                };
              }).catch(error => {
                contexts.forEach(ctx => ctx.onerror && ctx.onerror(error));
                return Promise.reject(error);
              });
            });
          }
          function deleteRange(req2) {
            return deleteNextChunk(req2.trans, req2.range, 1e4);
          }
          function deleteNextChunk(trans, range, limit) {
            return downTable.query({
              trans,
              values: false,
              query: {
                index: primaryKey,
                range
              },
              limit
            }).then(({
              result
            }) => {
              return addPutOrDelete({
                type: "delete",
                keys: result,
                trans
              }).then(res => {
                if (res.numFailures > 0) return Promise.reject(res.failures[0]);
                if (result.length < limit) {
                  return {
                    failures: [],
                    numFailures: 0,
                    lastResult: void 0
                  };
                } else {
                  return deleteNextChunk(trans, {
                    ...range,
                    lower: result[result.length - 1],
                    lowerOpen: true
                  }, limit);
                }
              });
            });
          }
        }
      };
      return tableMiddleware;
    }
  })
};
function getExistingValues(table, req, effectiveKeys) {
  return req.type === "add" ? Promise.resolve([]) : table.getMany({
    trans: req.trans,
    keys: effectiveKeys,
    cache: "immutable"
  });
}
function getFromTransactionCache(keys2, cache, clone) {
  try {
    if (!cache) return null;
    if (cache.keys.length < keys2.length) return null;
    const result = [];
    for (let i = 0, j = 0; i < cache.keys.length && j < keys2.length; ++i) {
      if (cmp(cache.keys[i], keys2[j]) !== 0) continue;
      result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
      ++j;
    }
    return result.length === keys2.length ? result : null;
  } catch (_a) {
    return null;
  }
}
var cacheExistingValuesMiddleware = {
  stack: "dbcore",
  level: -1,
  create: core => {
    return {
      table: tableName => {
        const table = core.table(tableName);
        return {
          ...table,
          getMany: req => {
            if (!req.cache) {
              return table.getMany(req);
            }
            const cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
            if (cachedResult) {
              return DexiePromise.resolve(cachedResult);
            }
            return table.getMany(req).then(res => {
              req.trans["_cache"] = {
                keys: req.keys,
                values: req.cache === "clone" ? deepClone(res) : res
              };
              return res;
            });
          },
          mutate: req => {
            if (req.type !== "add") req.trans["_cache"] = null;
            return table.mutate(req);
          }
        };
      }
    };
  }
};
function isEmptyRange(node) {
  return !("from" in node);
}
var RangeSet = function (fromOrTree, to) {
  if (this) {
    extend(this, arguments.length ? {
      d: 1,
      from: fromOrTree,
      to: arguments.length > 1 ? to : fromOrTree
    } : {
      d: 0
    });
  } else {
    const rv = new RangeSet();
    if (fromOrTree && "d" in fromOrTree) {
      extend(rv, fromOrTree);
    }
    return rv;
  }
};
props(RangeSet.prototype, {
  add(rangeSet) {
    mergeRanges(this, rangeSet);
    return this;
  },
  addKey(key) {
    addRange(this, key, key);
    return this;
  },
  addKeys(keys2) {
    keys2.forEach(key => addRange(this, key, key));
    return this;
  },
  [iteratorSymbol]() {
    return getRangeSetIterator(this);
  }
});
function addRange(target, from, to) {
  const diff = cmp(from, to);
  if (isNaN(diff)) return;
  if (diff > 0) throw RangeError();
  if (isEmptyRange(target)) return extend(target, {
    from,
    to,
    d: 1
  });
  const left = target.l;
  const right = target.r;
  if (cmp(to, target.from) < 0) {
    left ? addRange(left, from, to) : target.l = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.to) > 0) {
    right ? addRange(right, from, to) : target.r = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.from) < 0) {
    target.from = from;
    target.l = null;
    target.d = right ? right.d + 1 : 1;
  }
  if (cmp(to, target.to) > 0) {
    target.to = to;
    target.r = null;
    target.d = target.l ? target.l.d + 1 : 1;
  }
  const rightWasCutOff = !target.r;
  if (left && !target.l) {
    mergeRanges(target, left);
  }
  if (right && rightWasCutOff) {
    mergeRanges(target, right);
  }
}
function mergeRanges(target, newSet) {
  function _addRangeSet(target2, {
    from,
    to,
    l,
    r
  }) {
    addRange(target2, from, to);
    if (l) _addRangeSet(target2, l);
    if (r) _addRangeSet(target2, r);
  }
  if (!isEmptyRange(newSet)) _addRangeSet(target, newSet);
}
function rangesOverlap(rangeSet1, rangeSet2) {
  const i1 = getRangeSetIterator(rangeSet2);
  let nextResult1 = i1.next();
  if (nextResult1.done) return false;
  let a = nextResult1.value;
  const i2 = getRangeSetIterator(rangeSet1);
  let nextResult2 = i2.next(a.from);
  let b = nextResult2.value;
  while (!nextResult1.done && !nextResult2.done) {
    if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0) return true;
    cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
  }
  return false;
}
function getRangeSetIterator(node) {
  let state = isEmptyRange(node) ? null : {
    s: 0,
    n: node
  };
  return {
    next(key) {
      const keyProvided = arguments.length > 0;
      while (state) {
        switch (state.s) {
          case 0:
            state.s = 1;
            if (keyProvided) {
              while (state.n.l && cmp(key, state.n.from) < 0) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            } else {
              while (state.n.l) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            }
          case 1:
            state.s = 2;
            if (!keyProvided || cmp(key, state.n.to) <= 0) return {
              value: state.n,
              done: false
            };
          case 2:
            if (state.n.r) {
              state.s = 3;
              state = {
                up: state,
                n: state.n.r,
                s: 0
              };
              continue;
            }
          case 3:
            state = state.up;
        }
      }
      return {
        done: true
      };
    }
  };
}
function rebalance(target) {
  var _a, _b;
  const diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
  const r = diff > 1 ? "r" : diff < -1 ? "l" : "";
  if (r) {
    const l = r === "r" ? "l" : "r";
    const rootClone = {
      ...target
    };
    const oldRootRight = target[r];
    target.from = oldRootRight.from;
    target.to = oldRootRight.to;
    target[r] = oldRootRight[r];
    rootClone[r] = oldRootRight[l];
    target[l] = rootClone;
    rootClone.d = computeDepth(rootClone);
  }
  target.d = computeDepth(target);
}
function computeDepth({
  r,
  l
}) {
  return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
var observabilityMiddleware = {
  stack: "dbcore",
  level: 0,
  create: core => {
    const dbName = core.schema.name;
    const FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
    return {
      ...core,
      table: tableName => {
        const table = core.table(tableName);
        const {
          schema
        } = table;
        const {
          primaryKey
        } = schema;
        const {
          extractKey,
          outbound
        } = primaryKey;
        const tableClone = {
          ...table,
          mutate: req => {
            const trans = req.trans;
            const mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
            const getRangeSet = indexName => {
              const part = `idb://${dbName}/${tableName}/${indexName}`;
              return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
            };
            const pkRangeSet = getRangeSet("");
            const delsRangeSet = getRangeSet(":dels");
            const {
              type: type2
            } = req;
            let [keys2, newObjs] = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [];
            const oldCache = req.trans["_cache"];
            return table.mutate(req).then(res => {
              if (isArray(keys2)) {
                if (type2 !== "delete") keys2 = res.results;
                pkRangeSet.addKeys(keys2);
                const oldObjs = getFromTransactionCache(keys2, oldCache);
                if (!oldObjs && type2 !== "add") {
                  delsRangeSet.addKeys(keys2);
                }
                if (oldObjs || newObjs) {
                  trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                }
              } else if (keys2) {
                const range = {
                  from: keys2.lower,
                  to: keys2.upper
                };
                delsRangeSet.add(range);
                pkRangeSet.add(range);
              } else {
                pkRangeSet.add(FULL_RANGE);
                delsRangeSet.add(FULL_RANGE);
                schema.indexes.forEach(idx => getRangeSet(idx.name).add(FULL_RANGE));
              }
              return res;
            });
          }
        };
        const getRange = ({
          query: {
            index,
            range
          }
        }) => {
          var _a, _b;
          return [index, new RangeSet((_a = range.lower) !== null && _a !== void 0 ? _a : core.MIN_KEY, (_b = range.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY)];
        };
        const readSubscribers = {
          get: req => [primaryKey, new RangeSet(req.key)],
          getMany: req => [primaryKey, new RangeSet().addKeys(req.keys)],
          count: getRange,
          query: getRange,
          openCursor: getRange
        };
        keys(readSubscribers).forEach(method => {
          tableClone[method] = function (req) {
            const {
              subscr
            } = PSD;
            if (subscr) {
              const getRangeSet = indexName => {
                const part = `idb://${dbName}/${tableName}/${indexName}`;
                return subscr[part] || (subscr[part] = new RangeSet());
              };
              const pkRangeSet = getRangeSet("");
              const delsRangeSet = getRangeSet(":dels");
              const [queriedIndex, queriedRanges] = readSubscribers[method](req);
              getRangeSet(queriedIndex.name || "").add(queriedRanges);
              if (!queriedIndex.isPrimaryKey) {
                if (method === "count") {
                  delsRangeSet.add(FULL_RANGE);
                } else {
                  const keysPromise = method === "query" && outbound && req.values && table.query({
                    ...req,
                    values: false
                  });
                  return table[method].apply(this, arguments).then(res => {
                    if (method === "query") {
                      if (outbound && req.values) {
                        return keysPromise.then(({
                          result: resultingKeys
                        }) => {
                          pkRangeSet.addKeys(resultingKeys);
                          return res;
                        });
                      }
                      const pKeys = req.values ? res.result.map(extractKey) : res.result;
                      if (req.values) {
                        pkRangeSet.addKeys(pKeys);
                      } else {
                        delsRangeSet.addKeys(pKeys);
                      }
                    } else if (method === "openCursor") {
                      const cursor = res;
                      const wantValues = req.values;
                      return cursor && Object.create(cursor, {
                        key: {
                          get() {
                            delsRangeSet.addKey(cursor.primaryKey);
                            return cursor.key;
                          }
                        },
                        primaryKey: {
                          get() {
                            const pkey = cursor.primaryKey;
                            delsRangeSet.addKey(pkey);
                            return pkey;
                          }
                        },
                        value: {
                          get() {
                            wantValues && pkRangeSet.addKey(cursor.primaryKey);
                            return cursor.value;
                          }
                        }
                      });
                    }
                    return res;
                  });
                }
              }
            }
            return table[method].apply(this, arguments);
          };
        });
        return tableClone;
      }
    };
  }
};
function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
  function addAffectedIndex(ix) {
    const rangeSet = getRangeSet(ix.name || "");
    function extractKey(obj) {
      return obj != null ? ix.extractKey(obj) : null;
    }
    const addKeyOrKeys = key => ix.multiEntry && isArray(key) ? key.forEach(key2 => rangeSet.addKey(key2)) : rangeSet.addKey(key);
    (oldObjs || newObjs).forEach((_, i) => {
      const oldKey = oldObjs && extractKey(oldObjs[i]);
      const newKey = newObjs && extractKey(newObjs[i]);
      if (cmp(oldKey, newKey) !== 0) {
        if (oldKey != null) addKeyOrKeys(oldKey);
        if (newKey != null) addKeyOrKeys(newKey);
      }
    });
  }
  schema.indexes.forEach(addAffectedIndex);
}
var Dexie$1 = class {
  constructor(name, options) {
    this._middlewares = {};
    this.verno = 0;
    const deps = Dexie$1.dependencies;
    this._options = options = {
      addons: Dexie$1.addons,
      autoOpen: true,
      indexedDB: deps.indexedDB,
      IDBKeyRange: deps.IDBKeyRange,
      ...options
    };
    this._deps = {
      indexedDB: options.indexedDB,
      IDBKeyRange: options.IDBKeyRange
    };
    const {
      addons
    } = options;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    const state = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: nop,
      dbReadyPromise: null,
      cancelOpen: nop,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
    this._state = state;
    this.name = name;
    this.on = Events(this, "populate", "blocked", "versionchange", "close", {
      ready: [promisableChain, nop]
    });
    this.on.ready.subscribe = override(this.on.ready.subscribe, subscribe => {
      return (subscriber, bSticky) => {
        Dexie$1.vip(() => {
          const state2 = this._state;
          if (state2.openComplete) {
            if (!state2.dbOpenError) DexiePromise.resolve().then(subscriber);
            if (bSticky) subscribe(subscriber);
          } else if (state2.onReadyBeingFired) {
            state2.onReadyBeingFired.push(subscriber);
            if (bSticky) subscribe(subscriber);
          } else {
            subscribe(subscriber);
            const db = this;
            if (!bSticky) subscribe(function unsubscribe() {
              db.on.ready.unsubscribe(subscriber);
              db.on.ready.unsubscribe(unsubscribe);
            });
          }
        });
      };
    });
    this.Collection = createCollectionConstructor(this);
    this.Table = createTableConstructor(this);
    this.Transaction = createTransactionConstructor(this);
    this.Version = createVersionConstructor(this);
    this.WhereClause = createWhereClauseConstructor(this);
    this.on("versionchange", ev => {
      if (ev.newVersion > 0) console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`);else console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`);
      this.close();
    });
    this.on("blocked", ev => {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn(`Dexie.delete('${this.name}') was blocked`);else console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${ev.oldVersion / 10}`);
    });
    this._maxKey = getMaxKey(options.IDBKeyRange);
    this._createTransaction = (mode, storeNames, dbschema, parentTransaction) => new this.Transaction(mode, storeNames, dbschema, this._options.chromeTransactionDurability, parentTransaction);
    this._fireOnBlocked = ev => {
      this.on("blocked").fire(ev);
      connections.filter(c => c.name === this.name && c !== this && !c._state.vcFired).map(c => c.on("versionchange").fire(ev));
    };
    this.use(virtualIndexMiddleware);
    this.use(hooksMiddleware);
    this.use(observabilityMiddleware);
    this.use(cacheExistingValuesMiddleware);
    this.vip = Object.create(this, {
      _vip: {
        value: true
      }
    });
    addons.forEach(addon => addon(this));
  }
  version(versionNumber) {
    if (isNaN(versionNumber) || versionNumber < 0.1) throw new exceptions.Type(`Given version is not a positive number`);
    versionNumber = Math.round(versionNumber * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    const versions = this._versions;
    var versionInstance = versions.filter(v => v._cfg.version === versionNumber)[0];
    if (versionInstance) return versionInstance;
    versionInstance = new this.Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);
    versionInstance.stores({});
    this._state.autoSchema = false;
    return versionInstance;
  }
  _whenReady(fn) {
    return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise((resolve, reject) => {
      if (this._state.openComplete) {
        return reject(new exceptions.DatabaseClosed(this._state.dbOpenError));
      }
      if (!this._state.isBeingOpened) {
        if (!this._options.autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }
        this.open().catch(nop);
      }
      this._state.dbReadyPromise.then(resolve, reject);
    }).then(fn);
  }
  use({
    stack,
    create,
    level,
    name
  }) {
    if (name) this.unuse({
      stack,
      name
    });
    const middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
    middlewares.push({
      stack,
      create,
      level: level == null ? 10 : level,
      name
    });
    middlewares.sort((a, b) => a.level - b.level);
    return this;
  }
  unuse({
    stack,
    name,
    create
  }) {
    if (stack && this._middlewares[stack]) {
      this._middlewares[stack] = this._middlewares[stack].filter(mw => create ? mw.create !== create : name ? mw.name !== name : false);
    }
    return this;
  }
  open() {
    return dexieOpen(this);
  }
  _close() {
    const state = this._state;
    const idx = connections.indexOf(this);
    if (idx >= 0) connections.splice(idx, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (e) {}
      this._novip.idbdb = null;
    }
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
  }
  close() {
    this._close();
    const state = this._state;
    this._options.autoOpen = false;
    state.dbOpenError = new exceptions.DatabaseClosed();
    if (state.isBeingOpened) state.cancelOpen(state.dbOpenError);
  }
  delete() {
    const hasArguments = arguments.length > 0;
    const state = this._state;
    return new DexiePromise((resolve, reject) => {
      const doDelete = () => {
        this.close();
        var req = this._deps.indexedDB.deleteDatabase(this.name);
        req.onsuccess = wrap(() => {
          _onDatabaseDeleted(this._deps, this.name);
          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = this._fireOnBlocked;
      };
      if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
      if (state.isBeingOpened) {
        state.dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }
    });
  }
  backendDB() {
    return this.idbdb;
  }
  isOpen() {
    return this.idbdb !== null;
  }
  hasBeenClosed() {
    const dbOpenError = this._state.dbOpenError;
    return dbOpenError && dbOpenError.name === "DatabaseClosed";
  }
  hasFailed() {
    return this._state.dbOpenError !== null;
  }
  dynamicallyOpened() {
    return this._state.autoSchema;
  }
  get tables() {
    return keys(this._allTables).map(name => this._allTables[name]);
  }
  transaction() {
    const args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  }
  _transaction(mode, tables, scopeFunc) {
    let parentTransaction = PSD.trans;
    if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1) parentTransaction = null;
    const onlyIfCompatible = mode.indexOf("?") !== -1;
    mode = mode.replace("!", "").replace("?", "");
    let idbMode, storeNames;
    try {
      storeNames = tables.map(table => {
        var storeName = table instanceof this.Table ? table.name : table;
        if (typeof storeName !== "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      });
      if (mode == "r" || mode === READONLY) idbMode = READONLY;else if (mode == "rw" || mode == READWRITE) idbMode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
      if (parentTransaction) {
        if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
          if (onlyIfCompatible) {
            parentTransaction = null;
          } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }
        if (parentTransaction) {
          storeNames.forEach(storeName => {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }
        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, (_, reject) => {
        reject(e);
      }) : rejection(e);
    }
    const enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
    return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, () => this._whenReady(enterTransaction)) : this._whenReady(enterTransaction);
  }
  table(tableName) {
    if (!hasOwn(this._allTables, tableName)) {
      throw new exceptions.InvalidTable(`Table ${tableName} does not exist`);
    }
    return this._allTables[tableName];
  }
};
var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
var Observable = class {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }
  subscribe(x, error, complete) {
    return this._subscribe(!x || typeof x === "function" ? {
      next: x,
      error,
      complete
    } : x);
  }
  [symbolObservable]() {
    return this;
  }
};
function extendObservabilitySet(target, newSet) {
  keys(newSet).forEach(part => {
    const rangeSet = target[part] || (target[part] = new RangeSet());
    mergeRanges(rangeSet, newSet[part]);
  });
  return target;
}
function liveQuery(querier) {
  return new Observable(observer => {
    const scopeFuncIsAsync = isAsyncFunction(querier);
    function execute(subscr) {
      if (scopeFuncIsAsync) {
        incrementExpectedAwaits();
      }
      const exec = () => newScope(querier, {
        subscr,
        trans: null
      });
      const rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
      if (scopeFuncIsAsync) {
        rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
      }
      return rv;
    }
    let closed = false;
    let accumMuts = {};
    let currentObs = {};
    const subscription = {
      get closed() {
        return closed;
      },
      unsubscribe: () => {
        closed = true;
        globalEvents.storagemutated.unsubscribe(mutationListener);
      }
    };
    observer.start && observer.start(subscription);
    let querying = false,
      startedListening = false;
    function shouldNotify() {
      return keys(currentObs).some(key => accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]));
    }
    const mutationListener = parts => {
      extendObservabilitySet(accumMuts, parts);
      if (shouldNotify()) {
        doQuery();
      }
    };
    const doQuery = () => {
      if (querying || closed) return;
      accumMuts = {};
      const subscr = {};
      const ret = execute(subscr);
      if (!startedListening) {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
        startedListening = true;
      }
      querying = true;
      Promise.resolve(ret).then(result => {
        querying = false;
        if (closed) return;
        if (shouldNotify()) {
          doQuery();
        } else {
          accumMuts = {};
          currentObs = subscr;
          observer.next && observer.next(result);
        }
      }, err => {
        querying = false;
        observer.error && observer.error(err);
        subscription.unsubscribe();
      });
    };
    doQuery();
    return subscription;
  });
}
var domDeps;
try {
  domDeps = {
    indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
    IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
  };
} catch (e) {
  domDeps = {
    indexedDB: null,
    IDBKeyRange: null
  };
}
var Dexie = Dexie$1;
props(Dexie, {
  ...fullNameExceptions,
  delete(databaseName) {
    const db = new Dexie(databaseName, {
      addons: []
    });
    return db.delete();
  },
  exists(name) {
    return new Dexie(name, {
      addons: []
    }).open().then(db => {
      db.close();
      return true;
    }).catch("NoSuchDatabaseError", () => false);
  },
  getDatabaseNames(cb) {
    try {
      return getDatabaseNames(Dexie.dependencies).then(cb);
    } catch (_a) {
      return rejection(new exceptions.MissingAPI());
    }
  },
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return Class;
  },
  ignoreTransaction(scopeFunc) {
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
  },
  vip,
  async: function (generatorFn) {
    return function () {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function (generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  currentTransaction: {
    get: () => PSD.trans || null
  },
  waitFor: function (promiseOrFunction, optionalTimeout) {
    const promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  Promise: DexiePromise,
  debug: {
    get: () => debug,
    set: value => {
      setDebug(value, value === "dexie" ? () => true : dexieStackFrameFilter);
    }
  },
  derive,
  extend,
  props,
  override,
  Events,
  on: globalEvents,
  liveQuery,
  extendObservabilitySet,
  getByKeyPath,
  setByKeyPath,
  delByKeyPath,
  shallowClone,
  deepClone,
  getObjectDiff,
  cmp,
  asap: asap$1,
  minKey,
  addons: [],
  connections,
  errnames,
  dependencies: domDeps,
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split(".").map(n => parseInt(n)).reduce((p, c, i) => p + c / Math.pow(10, i * 2))
});
Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, updatedParts => {
    if (!propagatingLocally) {
      let event;
      if (isIEOrEdge) {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
      } else {
        event = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
          detail: updatedParts
        });
      }
      propagatingLocally = true;
      dispatchEvent(event);
      propagatingLocally = false;
    }
  });
  addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, ({
    detail
  }) => {
    if (!propagatingLocally) {
      propagateLocally(detail);
    }
  });
}
function propagateLocally(updateParts) {
  let wasMe = propagatingLocally;
  try {
    propagatingLocally = true;
    globalEvents.storagemutated.fire(updateParts);
  } finally {
    propagatingLocally = wasMe;
  }
}
var propagatingLocally = false;
if (typeof BroadcastChannel !== "undefined") {
  const bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
  if (typeof bc.unref === "function") {
    bc.unref();
  }
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    if (!propagatingLocally) {
      bc.postMessage(changedParts);
    }
  });
  bc.onmessage = ev => {
    if (ev.data) propagateLocally(ev.data);
  };
} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    try {
      if (!propagatingLocally) {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
            trig: Math.random(),
            changedParts
          }));
        }
        if (typeof self["clients"] === "object") {
          [...self["clients"].matchAll({
            includeUncontrolled: true
          })].forEach(client => client.postMessage({
            type: STORAGE_MUTATED_DOM_EVENT_NAME,
            changedParts
          }));
        }
      }
    } catch (_a) {}
  });
  if (typeof addEventListener !== "undefined") {
    addEventListener("storage", ev => {
      if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
        const data = JSON.parse(ev.newValue);
        if (data) propagateLocally(data.changedParts);
      }
    });
  }
  const swContainer = self.document && navigator.serviceWorker;
  if (swContainer) {
    swContainer.addEventListener("message", propagateMessageLocally);
  }
}
function propagateMessageLocally({
  data
}) {
  if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
    propagateLocally(data.changedParts);
  }
}
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

// .beyond/uimport/dexie.3.2.3.js
var dexie_3_2_3_default = Dexie$1;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9kZXhpZS4zLjIuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy91dGlscy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kZWJ1Zy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZXJyb3JzL2Vycm9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NoYWluaW5nLWZ1bmN0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9wcm9taXNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvdGVtcC10cmFuc2FjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jb21iaW5lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUva2V5cmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy93b3JrYXJvdW5kLXVuZGVmaW5lZC1wcmlta2V5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RhYmxlL3RhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL0V2ZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL21ha2UtY2xhc3MtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdGFibGUvdGFibGUtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jbXAudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NvbXBhcmUtZnVuY3Rpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtaGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy93aGVyZS1jbGF1c2Uvd2hlcmUtY2xhdXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9ldmVudC13cmFwcGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwtZXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2luZGV4LXNwZWMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvdGFibGUtc2NoZW1hLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvcXVpcmtzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvZ2V0LWtleS1leHRyYWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9kYmNvcmUtaW5kZXhlZGRiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2dlbmVyYXRlLW1pZGRsZXdhcmUtc3RhY2tzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vc2NoZW1hLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vdmVyc2lvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kYXRhYmFzZS1lbnVtZXJhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL3ZpcC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9ub2RlX21vZHVsZXMvc2FmYXJpLTE0LWlkYi1maXgvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1vcGVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3lpZWxkLXN1cHBvcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvdHJhbnNhY3Rpb24taGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL3ZpcnR1YWwtaW5kZXgtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2dldC1vYmplY3QtZGlmZi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2dldC1lZmZlY3RpdmUta2V5cy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaG9va3MvaG9va3MtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2NhY2hlLWV4aXN0aW5nLXZhbHVlcy1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3Jhbmdlc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L29ic2VydmFiaWxpdHktbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9vYnNlcnZhYmxlL29ic2VydmFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZXh0ZW5kLW9ic2VydmFiaWxpdHktc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L2xpdmUtcXVlcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvZGV4aWUtZG9tLWRlcGVuZGVuY2llcy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1zdGF0aWMtcHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvcHJvcGFnYXRlLWxvY2FsbHkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZW5hYmxlLWJyb2FkY2FzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZGV4aWVfM18yXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRGV4aWUiLCJEZXhpZSQxIiwiUmFuZ2VTZXQiLCJkZWZhdWx0IiwiZGV4aWVfM18yXzNfZGVmYXVsdCIsImxpdmVRdWVyeSIsIm1lcmdlUmFuZ2VzIiwicmFuZ2VzT3ZlcmxhcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfZ2xvYmFsIiwiZ2xvYmFsVGhpcyIsInNlbGYiLCJ3aW5kb3ciLCJnbG9iYWwiLCJrZXlzIiwiT2JqZWN0IiwiaXNBcnJheSIsIkFycmF5IiwiUHJvbWlzZSIsImV4dGVuZCIsIm9iaiIsImV4dGVuc2lvbiIsImZvckVhY2giLCJrZXkiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiX2hhc093biIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwicHJvcCIsImNhbGwiLCJwcm9wcyIsInByb3RvIiwiUmVmbGVjdCIsIm93bktleXMiLCJzZXRQcm9wIiwiZGVmaW5lUHJvcGVydHkiLCJmdW5jdGlvbk9yR2V0U2V0Iiwib3B0aW9ucyIsImdldCIsInNldCIsImNvbmZpZ3VyYWJsZSIsInZhbHVlIiwid3JpdGFibGUiLCJkZXJpdmUiLCJDaGlsZCIsImZyb20iLCJQYXJlbnQiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJiaW5kIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0UHJvcGVydHlEZXNjcmlwdG9yIiwicGQiLCJfc2xpY2UiLCJzbGljZSIsImFyZ3MiLCJzdGFydCIsImVuZCIsIm92ZXJyaWRlIiwib3JpZ0Z1bmMiLCJvdmVycmlkZWRGYWN0b3J5IiwiYXNzZXJ0IiwiYiIsIkVycm9yIiwiYXNhcCQxIiwiZm4iLCJzZXRJbW1lZGlhdGUiLCJzZXRUaW1lb3V0IiwiYXJyYXlUb09iamVjdCIsImFycmF5IiwiZXh0cmFjdG9yIiwicmVkdWNlIiwicmVzdWx0IiwiaXRlbSIsImkiLCJuYW1lQW5kVmFsdWUiLCJ0cnlDYXRjaCIsIm9uZXJyb3IiLCJhcHBseSIsImV4IiwiZ2V0QnlLZXlQYXRoIiwia2V5UGF0aCIsInJ2IiwibCIsImxlbmd0aCIsInZhbCIsInB1c2giLCJwZXJpb2QiLCJpbmRleE9mIiwiaW5uZXJPYmoiLCJzdWJzdHIiLCJzZXRCeUtleVBhdGgiLCJpc0Zyb3plbiIsImN1cnJlbnRLZXlQYXRoIiwicmVtYWluaW5nS2V5UGF0aCIsImlzTmFOIiwicGFyc2VJbnQiLCJzcGxpY2UiLCJkZWxCeUtleVBhdGgiLCJtYXAiLCJrcCIsInNoYWxsb3dDbG9uZSIsIm0iLCJjb25jYXQiLCJmbGF0dGVuIiwiYSIsImludHJpbnNpY1R5cGVOYW1lcyIsInNwbGl0IiwibnVtIiwidCIsImZpbHRlciIsImludHJpbnNpY1R5cGVzIiwieCIsImNpcmN1bGFyUmVmcyIsImRlZXBDbG9uZSIsImFueSIsIldlYWtNYXAiLCJpbm5lckRlZXBDbG9uZSIsImNvbnN0cnVjdG9yIiwidG9TdHJpbmciLCJ0b1N0cmluZ1RhZyIsIm8iLCJpdGVyYXRvclN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZ2V0SXRlcmF0b3JPZiIsIk5PX0NIQVJfQVJSQVkiLCJnZXRBcnJheU9mIiwiYXJyYXlMaWtlIiwiaXQiLCJhcmd1bWVudHMiLCJuZXh0IiwiZG9uZSIsImlzQXN5bmNGdW5jdGlvbiIsImRlYnVnIiwibG9jYXRpb24iLCJ0ZXN0IiwiaHJlZiIsInNldERlYnVnIiwibGlicmFyeUZpbHRlciIsIk5FRURTX1RIUk9XX0ZPUl9TVEFDSyIsInN0YWNrIiwiZ2V0RXJyb3JXaXRoU3RhY2siLCJlIiwicHJldHR5U3RhY2siLCJleGNlcHRpb24iLCJudW1JZ25vcmVkRnJhbWVzIiwibmFtZSIsIm1lc3NhZ2UiLCJmcmFtZSIsImpvaW4iLCJkZXhpZUVycm9yTmFtZXMiLCJpZGJEb21FcnJvck5hbWVzIiwiZXJyb3JMaXN0IiwiZGVmYXVsdFRleHRzIiwiVmVyc2lvbkNoYW5nZWQiLCJEYXRhYmFzZUNsb3NlZCIsIkFib3J0IiwiVHJhbnNhY3Rpb25JbmFjdGl2ZSIsIk1pc3NpbmdBUEkiLCJEZXhpZUVycm9yIiwibXNnIiwiX2UiLCJfc3RhY2siLCJnZXRNdWx0aUVycm9yTWVzc2FnZSIsImZhaWx1cmVzIiwidiIsInMiLCJNb2RpZnlFcnJvciIsInN1Y2Nlc3NDb3VudCIsImZhaWxlZEtleXMiLCJCdWxrRXJyb3IiLCJwb3MiLCJmYWlsdXJlc0J5UG9zIiwiZXJybmFtZXMiLCJCYXNlRXhjZXB0aW9uIiwiZXhjZXB0aW9ucyIsImZ1bGxOYW1lIiwiRGV4aWVFcnJvcjIiLCJtc2dPcklubmVyIiwiaW5uZXIiLCJTeW50YXgiLCJTeW50YXhFcnJvciIsIlR5cGUiLCJUeXBlRXJyb3IiLCJSYW5nZSIsIlJhbmdlRXJyb3IiLCJleGNlcHRpb25NYXAiLCJtYXBFcnJvciIsImRvbUVycm9yIiwiZnVsbE5hbWVFeGNlcHRpb25zIiwibm9wIiwibWlycm9yIiwicHVyZUZ1bmN0aW9uQ2hhaW4iLCJmMSIsImYyIiwiY2FsbEJvdGgiLCJvbjEiLCJvbjIiLCJob29rQ3JlYXRpbmdDaGFpbiIsInJlcyIsIm9uc3VjY2VzcyIsInJlczIiLCJob29rRGVsZXRpbmdDaGFpbiIsImhvb2tVcGRhdGluZ0NoYWluIiwibW9kaWZpY2F0aW9ucyIsInJldmVyc2VTdG9wcGFibGVFdmVudENoYWluIiwicHJvbWlzYWJsZUNoYWluIiwidGhlbiIsInRoaXoiLCJJTlRFUk5BTCIsIkxPTkdfU1RBQ0tTX0NMSVBfTElNSVQiLCJNQVhfTE9OR19TVEFDS1MiLCJaT05FX0VDSE9fTElNSVQiLCJyZXNvbHZlZE5hdGl2ZVByb21pc2UiLCJuYXRpdmVQcm9taXNlUHJvdG8iLCJyZXNvbHZlZEdsb2JhbFByb21pc2UiLCJnbG9iYWxQIiwicmVzb2x2ZSIsImNyeXB0byIsInN1YnRsZSIsIm5hdGl2ZVAiLCJkaWdlc3QiLCJVaW50OEFycmF5IiwibmF0aXZlUHJvbWlzZVRoZW4iLCJOYXRpdmVQcm9taXNlIiwicGF0Y2hHbG9iYWxQcm9taXNlIiwic3RhY2tfYmVpbmdfZ2VuZXJhdGVkIiwic2NoZWR1bGVQaHlzaWNhbFRpY2siLCJwaHlzaWNhbFRpY2siLCJNdXRhdGlvbk9ic2VydmVyIiwiaGlkZGVuRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJhc2FwIiwiY2FsbGJhY2siLCJtaWNyb3RpY2tRdWV1ZSIsIm5lZWRzTmV3UGh5c2ljYWxUaWNrIiwiaXNPdXRzaWRlTWljcm9UaWNrIiwidW5oYW5kbGVkRXJyb3JzIiwicmVqZWN0aW5nRXJyb3JzIiwiY3VycmVudEZ1bGZpbGxlciIsInJlamVjdGlvbk1hcHBlciIsImdsb2JhbFBTRCIsImlkIiwicmVmIiwidW5oYW5kbGVkcyIsIm9udW5oYW5kbGVkIiwiZ2xvYmFsRXJyb3IiLCJwZ3AiLCJlbnYiLCJmaW5hbGl6ZSIsInVoIiwiUFNEIiwibnVtU2NoZWR1bGVkQ2FsbHMiLCJ0aWNrRmluYWxpemVycyIsIkRleGllUHJvbWlzZSIsIl9saXN0ZW5lcnMiLCJvbnVuY2F0Y2hlZCIsIl9saWIiLCJwc2QiLCJfUFNEIiwiX3N0YWNrSG9sZGVyIiwiX3ByZXYiLCJfbnVtUHJldiIsIl9zdGF0ZSIsIl92YWx1ZSIsImhhbmRsZVJlamVjdGlvbiIsImV4ZWN1dGVQcm9taXNlVGFzayIsInRoZW5Qcm9wIiwibWljcm9UYXNrSWQiLCJ0b3RhbEVjaG9lcyIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInBvc3NpYmxlQXdhaXQiLCJjbGVhbnVwIiwiZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMiLCJyZWplY3QiLCJwcm9wYWdhdGVUb0xpc3RlbmVyIiwiTGlzdGVuZXIiLCJuYXRpdmVBd2FpdENvbXBhdGlibGVXcmFwIiwibGlua1RvUHJldmlvdXNQcm9taXNlIiwiX3RoZW4iLCJjYXRjaCIsInR5cGUyIiwiaGFuZGxlciIsImVyciIsIlByb21pc2VSZWplY3QiLCJmaW5hbGx5Iiwib25GaW5hbGx5Iiwic3RhY2tzIiwiZ2V0U3RhY2siLCJ0aW1lb3V0IiwibXMiLCJJbmZpbml0eSIsImhhbmRsZSIsIlRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzbmFwU2hvdCIsInpvbmUiLCJhbGwiLCJ2YWx1ZXMiLCJvblBvc3NpYmxlUGFyYWxsZWxsQXN5bmMiLCJyZW1haW5pbmciLCJyYWNlIiwibmV3UFNEIiwibmV3U2NvcGUiLCJ1c2VQU0QiLCJzY2hlZHVsZXIiLCJmb2xsb3ciLCJ6b25lUHJvcHMiLCJyZXNvbHZlMiIsInJlamVjdDIiLCJydW5fYXRfZW5kX29mX3RoaXNfb3JfbmV4dF9waHlzaWNhbF90aWNrIiwiYWxsU2V0dGxlZCIsInBvc3NpYmxlUHJvbWlzZXMiLCJyZXN1bHRzIiwicCIsInN0YXR1cyIsInJlYXNvbiIsIkFnZ3JlZ2F0ZUVycm9yIiwiZmFpbHVyZSIsInByb21pc2UiLCJzaG91bGRFeGVjdXRlVGljayIsImJlZ2luTWljcm9UaWNrU2NvcGUiLCJwcm9wYWdhdGVBbGxMaXN0ZW5lcnMiLCJlbmRNaWNyb1RpY2tTY29wZSIsIl9wcm9taXNlIiwib3JpZ1Byb3AiLCJhZGRQb3NzaWJseVVuaGFuZGxlZEVycm9yIiwibGlzdGVuZXJzIiwibGVuIiwiZmluYWxpemVQaHlzaWNhbFRpY2siLCJsaXN0ZW5lciIsImNiIiwiY2FsbExpc3RlbmVyIiwicmV0IiwibWFya0Vycm9yQXNIYW5kbGVkIiwibGltaXQiLCJlcnJvck5hbWUiLCJwcmV2IiwibnVtUHJldiIsIndhc1Jvb3RFeGVjIiwiY2FsbGJhY2tzIiwidW5oYW5kbGVkRXJycyIsImZpbmFsaXplcnMiLCJmaW5hbGl6ZXIiLCJzb21lIiwid3JhcCIsImVycm9yQ2F0Y2hlciIsIm91dGVyU2NvcGUiLCJzd2l0Y2hUb1pvbmUiLCJ0YXNrIiwiYXdhaXRzIiwiZWNob2VzIiwidGFza0NvdW50ZXIiLCJ6b25lU3RhY2siLCJ6b25lRWNob2VzIiwiem9uZV9pZF9jb3VudGVyIiwicHJvcHMyIiwiYTEiLCJhMiIsInBhcmVudCIsImdsb2JhbEVudiIsIlByb21pc2VQcm9wIiwibnRoZW4iLCJnZXRQYXRjaGVkUHJvbWlzZVRoZW4iLCJndGhlbiIsImluY3JlbWVudEV4cGVjdGVkQXdhaXRzIiwicG9zc2libGVQcm9taXNlIiwicmVqZWN0aW9uIiwiem9uZUVudGVyRWNobyIsInRhcmdldFpvbmUiLCJ6b25lTGVhdmVFY2hvIiwicG9wIiwiYkVudGVyaW5nWm9uZSIsImN1cnJlbnRab25lIiwiZW5xdWV1ZU5hdGl2ZU1pY3JvVGFzayIsIkdsb2JhbFByb21pc2UiLCJ0YXJnZXRFbnYiLCJhMyIsImpvYiIsIm91dGVyWm9uZSIsIm9yaWdUaGVuIiwib25SZXNvbHZlZCIsIlVOSEFORExFRFJFSkVDVElPTiIsImV2ZW50IiwiZXZlbnREYXRhIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsIl8iLCJkZWZhdWx0UHJldmVudGVkIiwiY29uc29sZSIsIndhcm4iLCJ0ZW1wVHJhbnNhY3Rpb24iLCJkYiIsIm1vZGUiLCJzdG9yZU5hbWVzIiwiaWRiZGIiLCJvcGVuQ29tcGxldGUiLCJsZXRUaHJvdWdoIiwiX3ZpcCIsImRiT3BlbkVycm9yIiwiaXNCZWluZ09wZW5lZCIsIl9vcHRpb25zIiwiYXV0b09wZW4iLCJvcGVuIiwiZGJSZWFkeVByb21pc2UiLCJ0cmFucyIsIl9jcmVhdGVUcmFuc2FjdGlvbiIsIl9kYlNjaGVtYSIsIlBSMTM5OF9tYXhMb29wIiwiSW52YWxpZFN0YXRlIiwiaXNPcGVuIiwiX2Nsb3NlIiwiX2NvbXBsZXRpb24iLCJERVhJRV9WRVJTSU9OIiwibWF4U3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluS2V5IiwiSU5WQUxJRF9LRVlfQVJHVU1FTlQiLCJTVFJJTkdfRVhQRUNURUQiLCJjb25uZWN0aW9ucyIsImlzSUVPckVkZ2UiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoYXNJRURlbGV0ZU9iamVjdFN0b3JlQnVnIiwiaGFuZ3NPbkRlbGV0ZUxhcmdlS2V5UmFuZ2UiLCJkZXhpZVN0YWNrRnJhbWVGaWx0ZXIiLCJEQk5BTUVTX0RCIiwiUkVBRE9OTFkiLCJSRUFEV1JJVEUiLCJjb21iaW5lIiwiZmlsdGVyMSIsImZpbHRlcjIiLCJBbnlSYW5nZSIsInR5cGUiLCJsb3dlciIsImxvd2VyT3BlbiIsInVwcGVyIiwidXBwZXJPcGVuIiwid29ya2Fyb3VuZEZvclVuZGVmaW5lZFByaW1LZXkiLCJUYWJsZSIsIl90cmFucyIsIndyaXRlTG9ja2VkIiwiX3R4IiwidGFibGVOYW1lIiwiY2hlY2tUYWJsZUluVHJhbnNhY3Rpb24iLCJ0cmFuczIiLCJzY2hlbWEiLCJOb3RGb3VuZCIsImlkYnRyYW5zIiwidHJhbnNsZXNzIiwia2V5T3JDcml0Iiwid2hlcmUiLCJmaXJzdCIsImNvcmUiLCJob29rIiwicmVhZGluZyIsImZpcmUiLCJpbmRleE9yQ3JpdCIsIldoZXJlQ2xhdXNlIiwia2V5UGF0aHMiLCJlcXVhbHMiLCJjb21wb3VuZEluZGV4IiwiaW5kZXhlcyIsInByaW1LZXkiLCJpeCIsImNvbXBvdW5kIiwiZXZlcnkiLCJfbWF4S2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlkeEJ5TmFtZSIsImlkYiIsIl9kZXBzIiwiaW5kZXhlZERCIiwiY21wIiwiaWR4IiwiZmlsdGVyRnVuY3Rpb24iLCJwcmV2SW5kZXgiLCJwcmV2RmlsdGVyRm4iLCJpbmRleCIsIm11bHRpIiwidG9Db2xsZWN0aW9uIiwiYW5kIiwiY291bnQiLCJ0aGVuU2hvcnRjdXQiLCJvZmZzZXQiLCJudW1Sb3dzIiwiZWFjaCIsInRvQXJyYXkiLCJDb2xsZWN0aW9uIiwib3JkZXJCeSIsInJldmVyc2UiLCJtYXBUb0NsYXNzIiwibWFwcGVkQ2xhc3MiLCJyZWFkSG9vayIsInVuc3Vic2NyaWJlIiwiZGVmaW5lQ2xhc3MiLCJDbGFzcyIsImNvbnRlbnQiLCJhZGQiLCJhdXRvIiwib2JqVG9BZGQiLCJtdXRhdGUiLCJudW1GYWlsdXJlcyIsImxhc3RSZXN1bHQiLCJ1cGRhdGUiLCJrZXlPck9iamVjdCIsIkludmFsaWRBcmd1bWVudCIsIl9hIiwibW9kaWZ5IiwicHV0IiwiZGVsZXRlIiwiY2xlYXIiLCJyYW5nZSIsImJ1bGtHZXQiLCJrZXlzMiIsImdldE1hbnkiLCJidWxrQWRkIiwib2JqZWN0cyIsImtleXNPck9wdGlvbnMiLCJ3YW50UmVzdWx0cyIsImFsbEtleXMiLCJudW1PYmplY3RzIiwib2JqZWN0c1RvQWRkIiwiYnVsa1B1dCIsIm9iamVjdHNUb1B1dCIsImJ1bGtEZWxldGUiLCJudW1LZXlzIiwiRXZlbnRzIiwiY3R4IiwiZXZzIiwiZXZlbnROYW1lIiwic3Vic2NyaWJlciIsImkyIiwic3Vic2NyaWJlIiwiYWRkRXZlbnRUeXBlIiwiY2hhaW5GdW5jdGlvbiIsImRlZmF1bHRGdW5jdGlvbiIsImFkZENvbmZpZ3VyZWRFdmVudHMiLCJjb250ZXh0Iiwic3Vic2NyaWJlcnMiLCJjZmciLCJhcmdzMiIsImZpcmVFdmVudCIsIm1ha2VDbGFzc0NvbnN0cnVjdG9yIiwiY3JlYXRlVGFibGVDb25zdHJ1Y3RvciIsIlRhYmxlMiIsInRhYmxlU2NoZW1hIiwiX2FsbFRhYmxlcyIsImlzUGxhaW5LZXlSYW5nZSIsImlnbm9yZUxpbWl0RmlsdGVyIiwiYWxnb3JpdGhtIiwib3IiLCJqdXN0TGltaXQiLCJyZXBsYXlGaWx0ZXIiLCJhZGRGaWx0ZXIiLCJhZGRSZXBsYXlGaWx0ZXIiLCJmYWN0b3J5IiwiaXNMaW1pdEZpbHRlciIsImN1cnIiLCJhZGRNYXRjaEZpbHRlciIsImlzTWF0Y2giLCJnZXRJbmRleE9yU3RvcmUiLCJjb3JlU2NoZW1hIiwiaXNQcmltS2V5IiwicHJpbWFyeUtleSIsImdldEluZGV4QnlLZXlQYXRoIiwiU2NoZW1hIiwib3BlbkN1cnNvciIsImNvcmVUYWJsZSIsImtleXNPbmx5IiwiZGlyIiwidW5pcXVlIiwicXVlcnkiLCJpdGVyIiwiY29yZVRyYW5zIiwiaXRlcmF0ZSIsInZhbHVlTWFwcGVyIiwidW5pb24iLCJjdXJzb3IiLCJhZHZhbmNlIiwic3RvcCIsImZhaWwiLCJfaXRlcmF0ZSIsImN1cnNvclByb21pc2UiLCJtYXBwZWRGbiIsImMiLCJ3cmFwcGVkRm4iLCJjb250aW51ZSIsImFkdmFuY2VyIiwidGEiLCJ0YiIsIk5hTiIsImNvbXBhcmVVaW50OEFycmF5cyIsImdldFVpbnQ4QXJyYXkiLCJjb21wYXJlQXJyYXlzIiwiYWwiLCJibCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwidHNUYWciLCJidWZmZXIiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsIl9yZWFkIiwiX2N0eCIsImVycm9yIiwidGFibGUiLCJfd3JpdGUiLCJfYWRkQWxnb3JpdGhtIiwiY2xvbmUiLCJyYXciLCJjb3VudDIiLCJNYXRoIiwibWluIiwic29ydEJ5IiwicGFydHMiLCJsYXN0UGFydCIsImxhc3RJbmRleCIsImdldHZhbCIsIm9yZGVyIiwic29ydGVyIiwiYVZhbCIsImJWYWwiLCJzb3J0Iiwib2Zmc2V0TGVmdCIsInJvd3NMZWZ0IiwidW50aWwiLCJiSW5jbHVkZVN0b3BFbnRyeSIsImxhc3QiLCJpbmRleE5hbWUiLCJfb25kaXJlY3Rpb25jaGFuZ2UiLCJkZXNjIiwiZWFjaEtleSIsImVhY2hVbmlxdWVLZXkiLCJlYWNoUHJpbWFyeUtleSIsInByaW1hcnlLZXlzIiwidW5pcXVlS2V5cyIsImZpcnN0S2V5IiwibGFzdEtleSIsImRpc3RpbmN0Iiwic3RyS2V5IiwiZm91bmQiLCJjaGFuZ2VzIiwibW9kaWZ5ZXIiLCJhbnl0aGluZ01vZGlmaWVkIiwib3V0Ym91bmQiLCJleHRyYWN0S2V5IiwibW9kaWZ5Q2h1bmtTaXplIiwidG90YWxGYWlsdXJlcyIsImFwcGx5TXV0YXRlUmVzdWx0IiwiZXhwZWN0ZWRDb3VudCIsIm5leHRDaHVuayIsImNhY2hlIiwiYWRkVmFsdWVzIiwicHV0VmFsdWVzIiwicHV0S2V5cyIsImRlbGV0ZUtleXMiLCJvcmlnVmFsdWUiLCJjdHgyIiwiY3JpdGVyaWEiLCJkZWxldGVDYWxsYmFjayIsImNoYW5nZVNwZWMiLCJjb3JlUmFuZ2UiLCJjcmVhdGVDb2xsZWN0aW9uQ29uc3RydWN0b3IiLCJDb2xsZWN0aW9uMiIsIndoZXJlQ2xhdXNlIiwia2V5UmFuZ2VHZW5lcmF0b3IiLCJrZXlSYW5nZSIsIndoZXJlQ3R4IiwicmVhZGluZ0hvb2siLCJzaW1wbGVDb21wYXJlIiwic2ltcGxlQ29tcGFyZVJldmVyc2UiLCJjb2xsZWN0aW9uT3JXaGVyZUNsYXVzZSIsIlQiLCJjb2xsZWN0aW9uIiwiZW1wdHlDb2xsZWN0aW9uIiwicmFuZ2VFcXVhbCIsInVwcGVyRmFjdG9yeSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJsb3dlckZhY3RvcnkiLCJuZXh0Q2FzaW5nIiwibG93ZXJLZXkiLCJ1cHBlck5lZWRsZSIsImxvd2VyTmVlZGxlIiwiY21wMiIsImxscCIsImx3cktleUNoYXIiLCJhZGRJZ25vcmVDYXNlQWxnb3JpdGhtIiwibWF0Y2giLCJuZWVkbGVzIiwic3VmZml4IiwiY29tcGFyZSIsInVwcGVyTmVlZGxlcyIsImxvd2VyTmVlZGxlcyIsImRpcmVjdGlvbiIsIm5leHRLZXlTdWZmaXgiLCJuZWVkbGVzTGVuIiwiaW5pdERpcmVjdGlvbiIsIm5lZWRsZUJvdW5kcyIsIm5lZWRsZSIsIm5iIiwiY3JlYXRlUmFuZ2UiLCJkaXJlY3Rpb24yIiwiZmlyc3RQb3NzaWJsZU5lZWRsZSIsImxvd2VzdFBvc3NpYmxlQ2FzaW5nIiwiY2FzaW5nIiwiYmV0d2VlbiIsImluY2x1ZGVMb3dlciIsImluY2x1ZGVVcHBlciIsIl9jbXAiLCJhYm92ZSIsImFib3ZlT3JFcXVhbCIsImJlbG93IiwiYmVsb3dPckVxdWFsIiwic3RhcnRzV2l0aCIsInN0ciIsInN0YXJ0c1dpdGhJZ25vcmVDYXNlIiwiZXF1YWxzSWdub3JlQ2FzZSIsImFueU9mSWdub3JlQ2FzZSIsInN0YXJ0c1dpdGhBbnlPZklnbm9yZUNhc2UiLCJuIiwiYW55T2YiLCJfYXNjZW5kaW5nIiwiX2Rlc2NlbmRpbmciLCJub3RFcXVhbCIsImluQW55UmFuZ2UiLCJpbmNsdWRlTG93ZXJzIiwiaW5jbHVkZVVwcGVycyIsIm5vbmVPZiIsInJhbmdlcyIsImFzY2VuZGluZyIsImRlc2NlbmRpbmciLCJfbWluIiwibWF4IiwiX21heCIsImFkZFJhbmdlMiIsInJhbmdlczIiLCJuZXdSYW5nZSIsInNvcnREaXJlY3Rpb24iLCJyYW5nZVNvcnRlciIsInJhbmdlUG9zIiwia2V5SXNCZXlvbmRDdXJyZW50RW50cnkiLCJrZXlJc0JlZm9yZUN1cnJlbnRFbnRyeSIsImtleVdpdGhpbkN1cnJlbnRSYW5nZSIsImNoZWNrS2V5Iiwic3RhcnRzV2l0aEFueU9mIiwiY3JlYXRlV2hlcmVDbGF1c2VDb25zdHJ1Y3RvciIsIldoZXJlQ2xhdXNlMiIsIm9yQ29sbGVjdGlvbiIsImluZGV4ZWREQjIiLCJfSURCS2V5UmFuZ2UiLCJJREJLZXlSYW5nZSIsImV2ZW50UmVqZWN0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwic3RvcFByb3BhZ2F0aW9uIiwiREVYSUVfU1RPUkFHRV9NVVRBVEVEX0VWRU5UX05BTUUiLCJTVE9SQUdFX01VVEFURURfRE9NX0VWRU5UX05BTUUiLCJnbG9iYWxFdmVudHMiLCJUcmFuc2FjdGlvbiIsIl9sb2NrIiwiX3JlY3Vsb2NrIiwibG9ja093bmVyRm9yIiwiX3VubG9jayIsIl9ibG9ja2VkRnVuY3MiLCJfbG9ja2VkIiwiZm5BbmRQU0QiLCJzaGlmdCIsIk9wZW5GYWlsZWQiLCJhY3RpdmUiLCJ0cmFuc2FjdGlvbiIsImR1cmFiaWxpdHkiLCJjaHJvbWVUcmFuc2FjdGlvbkR1cmFiaWxpdHkiLCJldiIsIl9yZWplY3QiLCJvbmFib3J0Iiwib24iLCJvbmNvbXBsZXRlIiwiX3Jlc29sdmUiLCJzdG9yYWdlbXV0YXRlZCIsImJXcml0ZUxvY2siLCJSZWFkT25seSIsInAyIiwiX3Jvb3QiLCJ3YWl0Rm9yIiwicHJvbWlzZUxpa2UiLCJyb290IiwiX3dhaXRpbmdGb3IiLCJfd2FpdGluZ1F1ZXVlIiwic3RvcmUiLCJvYmplY3RTdG9yZSIsInNwaW4iLCJfc3BpbkNvdW50IiwiY3VycmVudFdhaXRQcm9taXNlIiwiYWJvcnQiLCJtZW1vaXplZFRhYmxlcyIsIl9tZW1vaXplZFRhYmxlcyIsInRyYW5zYWN0aW9uQm91bmRUYWJsZSIsImNyZWF0ZVRyYW5zYWN0aW9uQ29uc3RydWN0b3IiLCJUcmFuc2FjdGlvbjIiLCJkYnNjaGVtYSIsImNvbXBsZXRlIiwid2FzQWN0aXZlIiwiY3JlYXRlSW5kZXhTcGVjIiwic3JjIiwibmFtZUZyb21LZXlQYXRoIiwiY3JlYXRlVGFibGVTY2hlbWEiLCJzYWZhcmlNdWx0aVN0b3JlRml4IiwiZ2V0TWF4S2V5IiwiSWRiS2V5UmFuZ2UiLCJvbmx5IiwiZ2V0S2V5RXh0cmFjdG9yIiwiZ2V0U2luZ2xlUGF0aEtleUV4dHJhY3RvciIsImFycmF5aWZ5IiwiX2lkX2NvdW50ZXIiLCJnZXRLZXlQYXRoQWxpYXMiLCJjcmVhdGVEQkNvcmUiLCJ0bXBUcmFucyIsImV4dHJhY3RTY2hlbWEiLCJkYjIiLCJ0YWJsZXMyIiwib2JqZWN0U3RvcmVOYW1lcyIsInRhYmxlcyIsImF1dG9JbmNyZW1lbnQiLCJpbmRleEJ5S2V5UGF0aCIsImlzUHJpbWFyeUtleSIsImluZGV4TmFtZXMiLCJtdWx0aUVudHJ5Iiwia2V5UGF0aDIiLCJjb21wb3VuZDIiLCJyZXN1bHQyIiwiaGFzR2V0QWxsIiwibWFrZUlEQktleVJhbmdlIiwiaWRiUmFuZ2UiLCJ1cHBlckJvdW5kIiwibG93ZXJCb3VuZCIsImJvdW5kIiwiY3JlYXRlRGJDb3JlVGFibGUiLCJpc0FkZE9yUHV0IiwicmVxIiwicmVxcyIsImVycm9ySGFuZGxlciIsImFyZ3MxIiwicmVxMiIsIm9wZW5DdXJzb3IyIiwicXVlcnkyIiwic291cmNlIiwib3BlbktleUN1cnNvciIsIl9fX2lkIiwiX2N1cnNvckNvbnRpbnVlIiwiX2N1cnNvckNvbnRpbnVlUHJpbWFyeUtleSIsImNvbnRpbnVlUHJpbWFyeUtleSIsIl9jdXJzb3JBZHZhbmNlIiwiZG9UaHJvd0N1cnNvcklzTm90U3RhcnRlZCIsImRvVGhyb3dDdXJzb3JJc1N0b3BwZWQiLCJnb3RPbmUiLCJpdGVyYXRpb25Qcm9taXNlIiwicmVzb2x2ZUl0ZXJhdGlvbiIsInJlamVjdEl0ZXJhdGlvbiIsImd1YXJkZWRDYWxsYmFjayIsImV2MiIsImhhc0dldEFsbDIiLCJyZXF1ZXN0Iiwibm9uSW5maW5pdExpbWl0IiwiaWRiS2V5UmFuZ2UiLCJnZXRBbGwiLCJnZXRBbGxLZXlzIiwia2V5Q291bnQiLCJjYWxsYmFja0NvdW50Iiwic3VjY2Vzc0hhbmRsZXIiLCJfcG9zIiwidGFibGVNYXAiLCJNSU5fS0VZIiwiTUFYX0tFWSIsImNyZWF0ZU1pZGRsZXdhcmVTdGFjayIsInN0YWNrSW1wbCIsIm1pZGRsZXdhcmVzIiwiZG93biIsImNyZWF0ZU1pZGRsZXdhcmVTdGFja3MiLCJkYmNvcmUiLCJnZW5lcmF0ZU1pZGRsZXdhcmVTdGFja3MiLCJfbm92aXAiLCJfbWlkZGxld2FyZXMiLCJ0YmwiLCJzZXRBcGlPblBsYWNlIiwib2JqcyIsInRhYmxlTmFtZXMiLCJwcm9wRGVzYyIsImVudW1lcmFibGUiLCJyZW1vdmVUYWJsZXNBcGkiLCJsb3dlclZlcnNpb25GaXJzdCIsIl9jZmciLCJ2ZXJzaW9uIiwicnVuVXBncmFkZXJzIiwib2xkVmVyc2lvbiIsImlkYlVwZ3JhZGVUcmFucyIsImdsb2JhbFNjaGVtYSIsIl9zdG9yZU5hbWVzIiwicmVqZWN0VHJhbnNhY3Rpb24iLCJjcmVhdGVUYWJsZSIsInBvcHVsYXRlIiwidXBkYXRlVGFibGVzQW5kSW5kZXhlcyIsInF1ZXVlIiwidmVyc2lvbnMiLCJfdmVyc2lvbnMiLCJidWlsZEdsb2JhbFNjaGVtYSIsImFueUNvbnRlbnRVcGdyYWRlckhhc1J1biIsInZlcnNUb1J1biIsIm9sZFNjaGVtYSIsIm5ld1NjaGVtYSIsImFkanVzdFRvRXhpc3RpbmdJbmRleE5hbWVzIiwiZGlmZiIsImdldFNjaGVtYURpZmYiLCJ0dXBsZSIsImNoYW5nZSIsInJlY3JlYXRlIiwiVXBncmFkZSIsImFkZEluZGV4IiwiZGVsZXRlSW5kZXgiLCJkZWwiLCJpZHhOYW1lIiwiY29udGVudFVwZ3JhZGUiLCJ1cGdyYWRlU2NoZW1hIiwiY29udGVudFVwZ3JhZGVJc0FzeW5jIiwicmV0dXJuVmFsdWUiLCJwcm9taXNlRm9sbG93ZWQiLCJkZWNyZW1lbnRvciIsImRlbGV0ZVJlbW92ZWRUYWJsZXMiLCJydW5RdWV1ZSIsImNyZWF0ZU1pc3NpbmdUYWJsZXMiLCJvbGREZWYiLCJuZXdEZWYiLCJkZWYiLCJvbGRJbmRleGVzIiwibmV3SW5kZXhlcyIsIm9sZElkeCIsIm5ld0lkeCIsImNyZWF0ZU9iamVjdFN0b3JlIiwiY29udGFpbnMiLCJzdG9yZU5hbWUiLCJkZWxldGVPYmplY3RTdG9yZSIsImNyZWF0ZUluZGV4IiwiZGJTdG9yZU5hbWVzIiwiaiIsImlkYmluZGV4IiwicmVhZEdsb2JhbFNjaGVtYSIsInZlcm5vIiwidmVyaWZ5SW5zdGFsbGVkU2NoZW1hIiwiaW5zdGFsbGVkU2NoZW1hIiwiY2giLCJfaGFzR2V0QWxsIiwiZGV4aWVOYW1lIiwiaW5kZXhTcGVjIiwiV29ya2VyR2xvYmFsU2NvcGUiLCJwYXJzZUluZGV4U3ludGF4IiwicHJpbUtleUFuZEluZGV4ZXMiLCJpbmRleE51bSIsInRyaW0iLCJyZXBsYWNlIiwiVmVyc2lvbiIsIl9wYXJzZVN0b3Jlc1NwZWMiLCJzdG9yZXMiLCJvdXRTY2hlbWEiLCJzdG9yZXNTb3VyY2UiLCJzdG9yZXNTcGVjIiwidXBncmFkZSIsInVwZ3JhZGVGdW5jdGlvbiIsImNyZWF0ZVZlcnNpb25Db25zdHJ1Y3RvciIsIlZlcnNpb24yIiwidmVyc2lvbk51bWJlciIsImdldERiTmFtZXNUYWJsZSIsImRiTmFtZXNEQiIsImFkZG9ucyIsImRibmFtZXMiLCJoYXNEYXRhYmFzZXNOYXRpdmUiLCJkYXRhYmFzZXMiLCJnZXREYXRhYmFzZU5hbWVzIiwiaW5mb3MiLCJpbmZvIiwiX29uRGF0YWJhc2VDcmVhdGVkIiwiX29uRGF0YWJhc2VEZWxldGVkIiwidmlwIiwiaWRiUmVhZHkiLCJpc1NhZmFyaSIsInVzZXJBZ2VudERhdGEiLCJpbnRlcnZhbElkIiwidHJ5SWRiIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGV4aWVPcGVuIiwic3RhdGUiLCJvcGVuQ2FuY2VsbGVyIiwidGhyb3dJZkNhbmNlbGxlZCIsInJlc29sdmVEYlJlYWR5IiwiZGJSZWFkeVJlc29sdmUiLCJ1cGdyYWRlVHJhbnNhY3Rpb24iLCJ3YXNDcmVhdGVkIiwiZGJOYW1lIiwiYXV0b1NjaGVtYSIsInJvdW5kIiwib25ibG9ja2VkIiwiX2ZpcmVPbkJsb2NrZWQiLCJvbnVwZ3JhZGVuZWVkZWQiLCJhbGxvd0VtcHR5REIiLCJjbG9zZSIsImRlbHJlcSIsImRlbGV0ZURhdGFiYXNlIiwiTm9TdWNoRGF0YWJhc2UiLCJvbGRWZXIiLCJwb3ciLCJvbnZlcnNpb25jaGFuZ2UiLCJ2Y0ZpcmVkIiwib25jbG9zZSIsIm9uUmVhZHlCZWluZ0ZpcmVkIiwicmVhZHkiLCJmaXJlUmVtYWluZGVycyIsInJlbWFpbmRlcnMiLCJhd2FpdEl0ZXJhdG9yIiwiY2FsbE5leHQiLCJkb1Rocm93IiwidGhyb3ciLCJvblN1Y2Nlc3MiLCJzdGVwIiwib25FcnJvciIsImdldE5leHQiLCJleHRyYWN0VHJhbnNhY3Rpb25BcmdzIiwiX3RhYmxlQXJnc18iLCJzY29wZUZ1bmMiLCJlbnRlclRyYW5zYWN0aW9uU2NvcGUiLCJwYXJlbnRUcmFuc2FjdGlvbiIsInNjb3BlRnVuY0lzQXN5bmMiLCJQcmVtYXR1cmVDb21taXQiLCJwYWQiLCJjcmVhdGVWaXJ0dWFsSW5kZXhNaWRkbGV3YXJlIiwiaW5kZXhMb29rdXAiLCJhbGxWaXJ0dWFsSW5kZXhlcyIsImFkZFZpcnR1YWxJbmRleGVzIiwia2V5VGFpbCIsImxvd0xldmVsSW5kZXgiLCJrZXlQYXRoQWxpYXMiLCJpbmRleExpc3QiLCJrZXlMZW5ndGgiLCJpc1ZpcnR1YWwiLCJ2aXJ0dWFsSW5kZXgiLCJ2aXJ0dWFsS2V5UGF0aCIsImZpbmRCZXN0SW5kZXgiLCJ0cmFuc2xhdGVSYW5nZSIsInRyYW5zbGF0ZVJlcXVlc3QiLCJjcmVhdGVWaXJ0dWFsQ3Vyc29yIiwiX2NvbnRpbnVlIiwidmlydHVhbEN1cnNvciIsInByaW1hcnlLZXkyIiwidmlydHVhbEluZGV4TWlkZGxld2FyZSIsImxldmVsIiwiZ2V0T2JqZWN0RGlmZiIsInByZngiLCJhcCIsImJwIiwiYXBUeXBlTmFtZSIsImJwVHlwZU5hbWUiLCJnZXRFZmZlY3RpdmVLZXlzIiwiaG9va3NNaWRkbGV3YXJlIiwiZG93bkNvcmUiLCJkb3duVGFibGUiLCJ0YWJsZU1pZGRsZXdhcmUiLCJkeFRyYW5zIiwiZGVsZXRpbmciLCJjcmVhdGluZyIsInVwZGF0aW5nIiwiYWRkUHV0T3JEZWxldGUiLCJkZWxldGVSYW5nZSIsImR4VHJhbnMyIiwiZ2V0RXhpc3RpbmdWYWx1ZXMiLCJleGlzdGluZ1ZhbHVlcyIsImNvbnRleHRzIiwiZXhpc3RpbmdWYWx1ZSIsImdlbmVyYXRlZFByaW1hcnlLZXkiLCJvYmplY3REaWZmIiwiYWRkaXRpb25hbENoYW5nZXMiLCJyZXF1ZXN0ZWRWYWx1ZSIsImRlbGV0ZU5leHRDaHVuayIsImVmZmVjdGl2ZUtleXMiLCJnZXRGcm9tVHJhbnNhY3Rpb25DYWNoZSIsImNhY2hlRXhpc3RpbmdWYWx1ZXNNaWRkbGV3YXJlIiwiY2FjaGVkUmVzdWx0IiwiaXNFbXB0eVJhbmdlIiwibm9kZSIsImZyb21PclRyZWUiLCJ0byIsImQiLCJyYW5nZVNldCIsImFkZEtleSIsImFkZFJhbmdlIiwiYWRkS2V5cyIsImdldFJhbmdlU2V0SXRlcmF0b3IiLCJsZWZ0IiwicmlnaHQiLCJyIiwicmViYWxhbmNlIiwicmlnaHRXYXNDdXRPZmYiLCJuZXdTZXQiLCJfYWRkUmFuZ2VTZXQiLCJ0YXJnZXQyIiwicmFuZ2VTZXQxIiwicmFuZ2VTZXQyIiwiaTEiLCJuZXh0UmVzdWx0MSIsIm5leHRSZXN1bHQyIiwia2V5UHJvdmlkZWQiLCJ1cCIsIl9iIiwicm9vdENsb25lIiwib2xkUm9vdFJpZ2h0IiwiY29tcHV0ZURlcHRoIiwib2JzZXJ2YWJpbGl0eU1pZGRsZXdhcmUiLCJGVUxMX1JBTkdFIiwidGFibGVDbG9uZSIsIm11dGF0ZWRQYXJ0cyIsImdldFJhbmdlU2V0IiwicGFydCIsInBrUmFuZ2VTZXQiLCJkZWxzUmFuZ2VTZXQiLCJuZXdPYmpzIiwib2xkQ2FjaGUiLCJvbGRPYmpzIiwidHJhY2tBZmZlY3RlZEluZGV4ZXMiLCJnZXRSYW5nZSIsInJlYWRTdWJzY3JpYmVycyIsIm1ldGhvZCIsInN1YnNjciIsInF1ZXJpZWRJbmRleCIsInF1ZXJpZWRSYW5nZXMiLCJrZXlzUHJvbWlzZSIsInJlc3VsdGluZ0tleXMiLCJwS2V5cyIsIndhbnRWYWx1ZXMiLCJwa2V5IiwiYWRkQWZmZWN0ZWRJbmRleCIsImFkZEtleU9yS2V5cyIsImtleTIiLCJvbGRLZXkiLCJuZXdLZXkiLCJkZXBzIiwiZGVwZW5kZW5jaWVzIiwiY2FuY2VsT3BlbiIsImJTdGlja3kiLCJzdGF0ZTIiLCJuZXdWZXJzaW9uIiwidXNlIiwiYWRkb24iLCJ2ZXJzaW9uSW5zdGFuY2UiLCJfd2hlblJlYWR5IiwidW51c2UiLCJtdyIsImhhc0FyZ3VtZW50cyIsImRvRGVsZXRlIiwiYmFja2VuZERCIiwiaGFzQmVlbkNsb3NlZCIsImhhc0ZhaWxlZCIsImR5bmFtaWNhbGx5T3BlbmVkIiwiX3RyYW5zYWN0aW9uIiwib25seUlmQ29tcGF0aWJsZSIsImlkYk1vZGUiLCJTdWJUcmFuc2FjdGlvbiIsImVudGVyVHJhbnNhY3Rpb24iLCJJbnZhbGlkVGFibGUiLCJzeW1ib2xPYnNlcnZhYmxlIiwib2JzZXJ2YWJsZSIsIk9ic2VydmFibGUiLCJfc3Vic2NyaWJlIiwiZXh0ZW5kT2JzZXJ2YWJpbGl0eVNldCIsInF1ZXJpZXIiLCJvYnNlcnZlciIsImV4ZWN1dGUiLCJleGVjIiwiY2xvc2VkIiwiYWNjdW1NdXRzIiwiY3VycmVudE9icyIsInN1YnNjcmlwdGlvbiIsIm11dGF0aW9uTGlzdGVuZXIiLCJxdWVyeWluZyIsInN0YXJ0ZWRMaXN0ZW5pbmciLCJzaG91bGROb3RpZnkiLCJkb1F1ZXJ5IiwiZG9tRGVwcyIsIm1vekluZGV4ZWREQiIsIndlYmtpdEluZGV4ZWREQiIsIm1zSW5kZXhlZERCIiwid2Via2l0SURCS2V5UmFuZ2UiLCJkYXRhYmFzZU5hbWUiLCJleGlzdHMiLCJpZ25vcmVUcmFuc2FjdGlvbiIsImFzeW5jIiwiZ2VuZXJhdG9yRm4iLCJzcGF3biIsImN1cnJlbnRUcmFuc2FjdGlvbiIsInByb21pc2VPckZ1bmN0aW9uIiwib3B0aW9uYWxUaW1lb3V0Iiwic2VtVmVyIiwibWF4S2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZWRQYXJ0cyIsInByb3BhZ2F0aW5nTG9jYWxseSIsImluaXRDdXN0b21FdmVudCIsInByb3BhZ2F0ZUxvY2FsbHkiLCJ1cGRhdGVQYXJ0cyIsIndhc01lIiwiQnJvYWRjYXN0Q2hhbm5lbCIsImJjIiwidW5yZWYiLCJjaGFuZ2VkUGFydHMiLCJwb3N0TWVzc2FnZSIsIm9ubWVzc2FnZSIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidHJpZyIsInJhbmRvbSIsIm1hdGNoQWxsIiwiaW5jbHVkZVVuY29udHJvbGxlZCIsImNsaWVudCIsInBhcnNlIiwibmV3VmFsdWUiLCJzd0NvbnRhaW5lciIsInNlcnZpY2VXb3JrZXIiLCJwcm9wYWdhdGVNZXNzYWdlTG9jYWxseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsbUJBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVosbUJBQUE7OztBQ0NPLElBQU1hLE9BQUEsR0FDVCxPQUFPQyxVQUFBLEtBQWUsY0FBY0EsVUFBQSxHQUNwQyxPQUFPQyxJQUFBLEtBQVMsY0FBY0EsSUFBQSxHQUM5QixPQUFPQyxNQUFBLEtBQVcsY0FBY0EsTUFBQSxHQUNoQ0MsTUFBQTtBQ0pHLElBQU1DLElBQUEsR0FBT0MsTUFBQSxDQUFPRCxJQUFBO0FBQ3BC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QUEsQ0FBaUIvYSxFQUFBLENBQUd3YixJQUFJOztXQUU5QixPQUFPanNDLElBQUEsS0FBUyxlQUFlLE9BQU91YSxTQUFBLEtBQWMsYUFBYTtFQU8xRW1WLFlBQUEsQ0FBYUYsZ0NBQUEsRUFBbUNzYyxZQUFBLElBQVk7SUFDMUQsSUFBSTtNQUNGLElBQUksQ0FBQ1Isa0JBQUEsRUFBb0I7UUFDdkIsSUFBSSxPQUFPWSxZQUFBLEtBQWlCLGFBQWE7VUFFdkNBLFlBQUEsQ0FBYUMsT0FBQSxDQUNYMWMsOEJBQUEsRUFDQW5TLElBQUEsQ0FBS0MsU0FBQSxDQUFVO1lBQ2I2dUIsSUFBQSxFQUFNN2xCLElBQUEsQ0FBSzhsQixNQUFBLENBQU07WUFDakJQO1dBQ0QsQ0FBQzs7UUFHTixJQUFJLE9BQU85ckMsSUFBQSxDQUFLLGVBQWUsVUFBVTtVQUV2QyxDQUFDLEdBQUdBLElBQUEsQ0FBSyxXQUFXc3NDLFFBQUEsQ0FBUztZQUFFQyxtQkFBQSxFQUFxQjtVQUFJLENBQUUsQ0FBQyxFQUFFNXJDLE9BQUEsQ0FDMUQ2ckMsTUFBQSxJQUNDQSxNQUFBLENBQU9ULFdBQUEsQ0FBWTtZQUNqQjV3QixJQUFBLEVBQU1zVSw4QkFBQTtZQUNOcWM7V0FDRCxDQUFDOzs7YUFJVmhzQixFQUFBLEdBQU07R0FDVDtFQUtELElBQUksT0FBT3NyQixnQkFBQSxLQUFxQixhQUFhO0lBQ3pDQSxnQkFBQSxDQUFpQixXQUFZM2EsRUFBQSxJQUFnQjtNQUM3QyxJQUFJQSxFQUFBLENBQUc3dkIsR0FBQSxLQUFRNnVCLDhCQUFBLEVBQWdDO1FBQzdDLE1BQU13YyxJQUFBLEdBQU8zdUIsSUFBQSxDQUFLbXZCLEtBQUEsQ0FBTWhjLEVBQUEsQ0FBR2ljLFFBQVE7UUFDbkMsSUFBSVQsSUFBQSxFQUFNVCxnQkFBQSxDQUFpQlMsSUFBQSxDQUFLSCxZQUFZOztLQUUvQzs7RUFNSCxNQUFNYSxXQUFBLEdBQWMzc0MsSUFBQSxDQUFLOE4sUUFBQSxJQUFZeU0sU0FBQSxDQUFVcXlCLGFBQUE7RUFDL0MsSUFBSUQsV0FBQSxFQUFhO0lBRWZBLFdBQUEsQ0FBWXZCLGdCQUFBLENBQWlCLFdBQVd5Qix1QkFBdUI7OztBQUluRSxTQUFTQSx3QkFBd0I7RUFBRVo7QUFBSSxHQUFnQjtFQUNyRCxJQUFJQSxJQUFBLElBQVFBLElBQUEsQ0FBSzl3QixJQUFBLEtBQVNzVSw4QkFBQSxFQUFnQztJQUN4RCtiLGdCQUFBLENBQWlCUyxJQUFBLENBQUtILFlBQVk7O0FBRXRDO0FDaEZBcjhCLFlBQUEsQ0FBYWQsZUFBQSxHQUFrQnpELFFBQUE7QUFHL0JsRCxRQUFBLENBQWVKLEtBQUEsRUFBYStTLHFCQUFxQjs7O0ExRGpCakQsSUFBT3BiLG1CQUFBLEdBQVFILE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haWxlYXJuL291dCJ9
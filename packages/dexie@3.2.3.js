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

// .beyond/uimport/temp/dexie.3.2.3.js
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

// .beyond/uimport/temp/dexie.3.2.3.js
var dexie_3_2_3_default = Dexie$1;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2RleGllLjMuMi4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9nbG9iYWxzL2dsb2JhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL3V0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2RlYnVnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9lcnJvcnMvZXJyb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvY2hhaW5pbmctZnVuY3Rpb25zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3Byb21pc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy90ZW1wLXRyYW5zYWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9nbG9iYWxzL2NvbnN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NvbWJpbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9rZXlyYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL3dvcmthcm91bmQtdW5kZWZpbmVkLXByaW1rZXkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdGFibGUvdGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvRXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvbWFrZS1jbGFzcy1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy90YWJsZS90YWJsZS1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24taGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NtcC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvY29tcGFyZS1mdW5jdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvd2hlcmUtY2xhdXNlL3doZXJlLWNsYXVzZS1oZWxwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvd2hlcmUtY2xhdXNlL3doZXJlLWNsYXVzZS1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2V2ZW50LXdyYXBwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9nbG9iYWxzL2dsb2JhbC1ldmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24tY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvaW5kZXgtc3BlYy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy90YWJsZS1zY2hlbWEudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9xdWlya3MudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9nZXQta2V5LWV4dHJhY3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2RiY29yZS1pbmRleGVkZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvZ2VuZXJhdGUtbWlkZGxld2FyZS1zdGFja3MudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi9zY2hlbWEtaGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy92ZXJzaW9uL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi92ZXJzaW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2RhdGFiYXNlLWVudW1lcmF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvdmlwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL25vZGVfbW9kdWxlcy9zYWZhcmktMTQtaWRiLWZpeC9kaXN0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2RleGllLW9wZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMveWllbGQtc3VwcG9ydC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS90cmFuc2FjdGlvbi1oZWxwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvdmlydHVhbC1pbmRleC1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvZ2V0LW9iamVjdC1kaWZmLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvZ2V0LWVmZmVjdGl2ZS1rZXlzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9ob29rcy9ob29rcy1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvY2FjaGUtZXhpc3RpbmctdmFsdWVzLW1pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvcmFuZ2VzZXQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvb2JzZXJ2YWJpbGl0eS1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2RleGllLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL29ic2VydmFibGUvb2JzZXJ2YWJsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvbGl2ZS1xdWVyeS9leHRlbmQtb2JzZXJ2YWJpbGl0eS1zZXQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvbGl2ZS1xdWVyeS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1kb20tZGVwZW5kZW5jaWVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2RleGllLXN0YXRpYy1wcm9wcy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvbGl2ZS1xdWVyeS9wcm9wYWdhdGUtbG9jYWxseS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvbGl2ZS1xdWVyeS9lbmFibGUtYnJvYWRjYXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkRleGllIiwiUmFuZ2VTZXQiLCJkZWZhdWx0IiwibGl2ZVF1ZXJ5IiwibWVyZ2VSYW5nZXMiLCJyYW5nZXNPdmVybGFwIiwibW9kdWxlIiwiX2dsb2JhbCIsImdsb2JhbFRoaXMiLCJzZWxmIiwid2luZG93IiwiZ2xvYmFsIiwia2V5cyIsIk9iamVjdCIsImlzQXJyYXkiLCJBcnJheSIsIlByb21pc2UiLCJleHRlbmQiLCJvYmoiLCJleHRlbnNpb24iLCJmb3JFYWNoIiwia2V5IiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIl9oYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImhhc093biIsInByb3AiLCJjYWxsIiwicHJvcHMiLCJwcm90byIsIlJlZmxlY3QiLCJvd25LZXlzIiwic2V0UHJvcCIsImRlZmluZVByb3BlcnR5IiwiZnVuY3Rpb25PckdldFNldCIsIm9wdGlvbnMiLCJnZXQiLCJzZXQiLCJjb25maWd1cmFibGUiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiZGVyaXZlIiwiQ2hpbGQiLCJmcm9tIiwiUGFyZW50IiwicHJvdG90eXBlIiwiY3JlYXRlIiwiYmluZCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3BlcnR5RGVzY3JpcHRvciIsInBkIiwiX3NsaWNlIiwic2xpY2UiLCJhcmdzIiwic3RhcnQiLCJlbmQiLCJvdmVycmlkZSIsIm9yaWdGdW5jIiwib3ZlcnJpZGVkRmFjdG9yeSIsImFzc2VydCIsImIiLCJFcnJvciIsImFzYXAiLCJmbiIsInNldEltbWVkaWF0ZSIsInNldFRpbWVvdXQiLCJhcnJheVRvT2JqZWN0IiwiYXJyYXkiLCJleHRyYWN0b3IiLCJyZWR1Y2UiLCJyZXN1bHQiLCJpdGVtIiwiaSIsIm5hbWVBbmRWYWx1ZSIsInRyeUNhdGNoIiwib25lcnJvciIsImFwcGx5IiwiZXgiLCJnZXRCeUtleVBhdGgiLCJrZXlQYXRoIiwicnYiLCJsIiwibGVuZ3RoIiwidmFsIiwicHVzaCIsInBlcmlvZCIsImluZGV4T2YiLCJpbm5lck9iaiIsInN1YnN0ciIsInNldEJ5S2V5UGF0aCIsImlzRnJvemVuIiwiY3VycmVudEtleVBhdGgiLCJyZW1haW5pbmdLZXlQYXRoIiwiaXNOYU4iLCJwYXJzZUludCIsInNwbGljZSIsImRlbEJ5S2V5UGF0aCIsIm1hcCIsImtwIiwic2hhbGxvd0Nsb25lIiwibSIsImNvbmNhdCIsImZsYXR0ZW4iLCJhIiwiaW50cmluc2ljVHlwZU5hbWVzIiwic3BsaXQiLCJudW0iLCJ0IiwiZmlsdGVyIiwiaW50cmluc2ljVHlwZXMiLCJ4IiwiY2lyY3VsYXJSZWZzIiwiZGVlcENsb25lIiwiYW55IiwiV2Vha01hcCIsImlubmVyRGVlcENsb25lIiwiY29uc3RydWN0b3IiLCJ0b1N0cmluZyIsInRvU3RyaW5nVGFnIiwibyIsIml0ZXJhdG9yU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJnZXRJdGVyYXRvck9mIiwiTk9fQ0hBUl9BUlJBWSIsImdldEFycmF5T2YiLCJhcnJheUxpa2UiLCJpdCIsImFyZ3VtZW50cyIsIm5leHQiLCJkb25lIiwiaXNBc3luY0Z1bmN0aW9uIiwiZGVidWciLCJsb2NhdGlvbiIsInRlc3QiLCJocmVmIiwic2V0RGVidWciLCJsaWJyYXJ5RmlsdGVyIiwiTkVFRFNfVEhST1dfRk9SX1NUQUNLIiwic3RhY2siLCJnZXRFcnJvcldpdGhTdGFjayIsImUiLCJwcmV0dHlTdGFjayIsImV4Y2VwdGlvbiIsIm51bUlnbm9yZWRGcmFtZXMiLCJuYW1lIiwibWVzc2FnZSIsImZyYW1lIiwiam9pbiIsImRleGllRXJyb3JOYW1lcyIsImlkYkRvbUVycm9yTmFtZXMiLCJlcnJvckxpc3QiLCJkZWZhdWx0VGV4dHMiLCJWZXJzaW9uQ2hhbmdlZCIsIkRhdGFiYXNlQ2xvc2VkIiwiQWJvcnQiLCJUcmFuc2FjdGlvbkluYWN0aXZlIiwiTWlzc2luZ0FQSSIsIkRleGllRXJyb3IiLCJtc2ciLCJfZSIsIl9zdGFjayIsImdldE11bHRpRXJyb3JNZXNzYWdlIiwiZmFpbHVyZXMiLCJ2IiwicyIsIk1vZGlmeUVycm9yIiwic3VjY2Vzc0NvdW50IiwiZmFpbGVkS2V5cyIsIkJ1bGtFcnJvciIsInBvcyIsImZhaWx1cmVzQnlQb3MiLCJlcnJuYW1lcyIsIkJhc2VFeGNlcHRpb24iLCJleGNlcHRpb25zIiwiZnVsbE5hbWUiLCJtc2dPcklubmVyIiwiaW5uZXIiLCJTeW50YXgiLCJTeW50YXhFcnJvciIsIlR5cGUiLCJUeXBlRXJyb3IiLCJSYW5nZSIsIlJhbmdlRXJyb3IiLCJleGNlcHRpb25NYXAiLCJtYXBFcnJvciIsImRvbUVycm9yIiwiZnVsbE5hbWVFeGNlcHRpb25zIiwibm9wIiwibWlycm9yIiwicHVyZUZ1bmN0aW9uQ2hhaW4iLCJmMSIsImYyIiwiY2FsbEJvdGgiLCJvbjEiLCJvbjIiLCJob29rQ3JlYXRpbmdDaGFpbiIsInJlcyIsIm9uc3VjY2VzcyIsInJlczIiLCJob29rRGVsZXRpbmdDaGFpbiIsImhvb2tVcGRhdGluZ0NoYWluIiwibW9kaWZpY2F0aW9ucyIsInJldmVyc2VTdG9wcGFibGVFdmVudENoYWluIiwicHJvbWlzYWJsZUNoYWluIiwidGhlbiIsInRoaXoiLCJJTlRFUk5BTCIsIkxPTkdfU1RBQ0tTX0NMSVBfTElNSVQiLCJNQVhfTE9OR19TVEFDS1MiLCJaT05FX0VDSE9fTElNSVQiLCJyZXNvbHZlZE5hdGl2ZVByb21pc2UiLCJuYXRpdmVQcm9taXNlUHJvdG8iLCJyZXNvbHZlZEdsb2JhbFByb21pc2UiLCJnbG9iYWxQIiwicmVzb2x2ZSIsImNyeXB0byIsInN1YnRsZSIsIm5hdGl2ZVAiLCJkaWdlc3QiLCJVaW50OEFycmF5IiwibmF0aXZlUHJvbWlzZVRoZW4iLCJOYXRpdmVQcm9taXNlIiwicGF0Y2hHbG9iYWxQcm9taXNlIiwic3RhY2tfYmVpbmdfZ2VuZXJhdGVkIiwic2NoZWR1bGVQaHlzaWNhbFRpY2siLCJwaHlzaWNhbFRpY2siLCJNdXRhdGlvbk9ic2VydmVyIiwiaGlkZGVuRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJjYWxsYmFjayIsIm1pY3JvdGlja1F1ZXVlIiwibmVlZHNOZXdQaHlzaWNhbFRpY2siLCJpc091dHNpZGVNaWNyb1RpY2siLCJ1bmhhbmRsZWRFcnJvcnMiLCJyZWplY3RpbmdFcnJvcnMiLCJjdXJyZW50RnVsZmlsbGVyIiwicmVqZWN0aW9uTWFwcGVyIiwiZ2xvYmFsUFNEIiwiaWQiLCJyZWYiLCJ1bmhhbmRsZWRzIiwib251bmhhbmRsZWQiLCJnbG9iYWxFcnJvciIsInBncCIsImVudiIsImZpbmFsaXplIiwidWgiLCJQU0QiLCJudW1TY2hlZHVsZWRDYWxscyIsInRpY2tGaW5hbGl6ZXJzIiwiRGV4aWVQcm9taXNlIiwiX2xpc3RlbmVycyIsIm9udW5jYXRjaGVkIiwiX2xpYiIsInBzZCIsIl9QU0QiLCJfc3RhY2tIb2xkZXIiLCJfcHJldiIsIl9udW1QcmV2IiwiX3N0YXRlIiwiX3ZhbHVlIiwiaGFuZGxlUmVqZWN0aW9uIiwiZXhlY3V0ZVByb21pc2VUYXNrIiwidGhlblByb3AiLCJtaWNyb1Rhc2tJZCIsInRvdGFsRWNob2VzIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicG9zc2libGVBd2FpdCIsImNsZWFudXAiLCJkZWNyZW1lbnRFeHBlY3RlZEF3YWl0cyIsInJlamVjdCIsInByb3BhZ2F0ZVRvTGlzdGVuZXIiLCJMaXN0ZW5lciIsIm5hdGl2ZUF3YWl0Q29tcGF0aWJsZVdyYXAiLCJsaW5rVG9QcmV2aW91c1Byb21pc2UiLCJfdGhlbiIsImNhdGNoIiwidHlwZSIsImhhbmRsZXIiLCJlcnIiLCJQcm9taXNlUmVqZWN0IiwiZmluYWxseSIsIm9uRmluYWxseSIsInN0YWNrcyIsImdldFN0YWNrIiwidGltZW91dCIsIm1zIiwiSW5maW5pdHkiLCJoYW5kbGUiLCJUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic25hcFNob3QiLCJ6b25lIiwiYWxsIiwidmFsdWVzIiwib25Qb3NzaWJsZVBhcmFsbGVsbEFzeW5jIiwicmVtYWluaW5nIiwicmFjZSIsIm5ld1BTRCIsIm5ld1Njb3BlIiwidXNlUFNEIiwic2NoZWR1bGVyIiwiZm9sbG93Iiwiem9uZVByb3BzIiwicnVuX2F0X2VuZF9vZl90aGlzX29yX25leHRfcGh5c2ljYWxfdGljayIsImFsbFNldHRsZWQiLCJwb3NzaWJsZVByb21pc2VzIiwicmVzdWx0cyIsInAiLCJzdGF0dXMiLCJyZWFzb24iLCJBZ2dyZWdhdGVFcnJvciIsImZhaWx1cmUiLCJwcm9taXNlIiwic2hvdWxkRXhlY3V0ZVRpY2siLCJiZWdpbk1pY3JvVGlja1Njb3BlIiwicHJvcGFnYXRlQWxsTGlzdGVuZXJzIiwiZW5kTWljcm9UaWNrU2NvcGUiLCJfcHJvbWlzZSIsIm9yaWdQcm9wIiwiYWRkUG9zc2libHlVbmhhbmRsZWRFcnJvciIsImxpc3RlbmVycyIsImxlbiIsImZpbmFsaXplUGh5c2ljYWxUaWNrIiwibGlzdGVuZXIiLCJjYiIsImNhbGxMaXN0ZW5lciIsInJldCIsIm1hcmtFcnJvckFzSGFuZGxlZCIsImxpbWl0IiwiZXJyb3JOYW1lIiwicHJldiIsIm51bVByZXYiLCJ3YXNSb290RXhlYyIsImNhbGxiYWNrcyIsInVuaGFuZGxlZEVycnMiLCJmaW5hbGl6ZXJzIiwiZmluYWxpemVyIiwic29tZSIsIndyYXAiLCJlcnJvckNhdGNoZXIiLCJvdXRlclNjb3BlIiwic3dpdGNoVG9ab25lIiwidGFzayIsImF3YWl0cyIsImVjaG9lcyIsInRhc2tDb3VudGVyIiwiem9uZVN0YWNrIiwiem9uZUVjaG9lcyIsInpvbmVfaWRfY291bnRlciIsImExIiwiYTIiLCJwYXJlbnQiLCJnbG9iYWxFbnYiLCJQcm9taXNlUHJvcCIsIm50aGVuIiwiZ2V0UGF0Y2hlZFByb21pc2VUaGVuIiwiZ3RoZW4iLCJpbmNyZW1lbnRFeHBlY3RlZEF3YWl0cyIsInBvc3NpYmxlUHJvbWlzZSIsInJlamVjdGlvbiIsInpvbmVFbnRlckVjaG8iLCJ0YXJnZXRab25lIiwiem9uZUxlYXZlRWNobyIsInBvcCIsImJFbnRlcmluZ1pvbmUiLCJjdXJyZW50Wm9uZSIsImVucXVldWVOYXRpdmVNaWNyb1Rhc2siLCJHbG9iYWxQcm9taXNlIiwidGFyZ2V0RW52IiwiYTMiLCJqb2IiLCJvdXRlclpvbmUiLCJvcmlnVGhlbiIsIm9uUmVzb2x2ZWQiLCJVTkhBTkRMRURSRUpFQ1RJT04iLCJldmVudCIsImV2ZW50RGF0YSIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiUHJvbWlzZVJlamVjdGlvbkV2ZW50Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJfIiwiZGVmYXVsdFByZXZlbnRlZCIsImNvbnNvbGUiLCJ3YXJuIiwidGVtcFRyYW5zYWN0aW9uIiwiZGIiLCJtb2RlIiwic3RvcmVOYW1lcyIsImlkYmRiIiwib3BlbkNvbXBsZXRlIiwibGV0VGhyb3VnaCIsIl92aXAiLCJkYk9wZW5FcnJvciIsImlzQmVpbmdPcGVuZWQiLCJfb3B0aW9ucyIsImF1dG9PcGVuIiwib3BlbiIsImRiUmVhZHlQcm9taXNlIiwidHJhbnMiLCJfY3JlYXRlVHJhbnNhY3Rpb24iLCJfZGJTY2hlbWEiLCJQUjEzOThfbWF4TG9vcCIsIkludmFsaWRTdGF0ZSIsImlzT3BlbiIsIl9jbG9zZSIsIl9jb21wbGV0aW9uIiwiREVYSUVfVkVSU0lPTiIsIm1heFN0cmluZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pbktleSIsIklOVkFMSURfS0VZX0FSR1VNRU5UIiwiU1RSSU5HX0VYUEVDVEVEIiwiY29ubmVjdGlvbnMiLCJpc0lFT3JFZGdlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFzSUVEZWxldGVPYmplY3RTdG9yZUJ1ZyIsImhhbmdzT25EZWxldGVMYXJnZUtleVJhbmdlIiwiZGV4aWVTdGFja0ZyYW1lRmlsdGVyIiwiREJOQU1FU19EQiIsIlJFQURPTkxZIiwiUkVBRFdSSVRFIiwiY29tYmluZSIsImZpbHRlcjEiLCJmaWx0ZXIyIiwiQW55UmFuZ2UiLCJsb3dlciIsImxvd2VyT3BlbiIsInVwcGVyIiwidXBwZXJPcGVuIiwid29ya2Fyb3VuZEZvclVuZGVmaW5lZFByaW1LZXkiLCJUYWJsZSIsIl90cmFucyIsIndyaXRlTG9ja2VkIiwiX3R4IiwidGFibGVOYW1lIiwiY2hlY2tUYWJsZUluVHJhbnNhY3Rpb24iLCJzY2hlbWEiLCJOb3RGb3VuZCIsImlkYnRyYW5zIiwidHJhbnNsZXNzIiwia2V5T3JDcml0Iiwid2hlcmUiLCJmaXJzdCIsImNvcmUiLCJob29rIiwicmVhZGluZyIsImZpcmUiLCJpbmRleE9yQ3JpdCIsIldoZXJlQ2xhdXNlIiwia2V5UGF0aHMiLCJlcXVhbHMiLCJjb21wb3VuZEluZGV4IiwiaW5kZXhlcyIsInByaW1LZXkiLCJpeCIsImNvbXBvdW5kIiwiZXZlcnkiLCJfbWF4S2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlkeEJ5TmFtZSIsImlkYiIsIl9kZXBzIiwiaW5kZXhlZERCIiwiY21wIiwiaWR4IiwiZmlsdGVyRnVuY3Rpb24iLCJwcmV2SW5kZXgiLCJwcmV2RmlsdGVyRm4iLCJpbmRleCIsIm11bHRpIiwidG9Db2xsZWN0aW9uIiwiYW5kIiwiY291bnQiLCJ0aGVuU2hvcnRjdXQiLCJvZmZzZXQiLCJudW1Sb3dzIiwiZWFjaCIsInRvQXJyYXkiLCJDb2xsZWN0aW9uIiwib3JkZXJCeSIsInJldmVyc2UiLCJtYXBUb0NsYXNzIiwibWFwcGVkQ2xhc3MiLCJyZWFkSG9vayIsInVuc3Vic2NyaWJlIiwiZGVmaW5lQ2xhc3MiLCJDbGFzcyIsImNvbnRlbnQiLCJhZGQiLCJhdXRvIiwib2JqVG9BZGQiLCJtdXRhdGUiLCJudW1GYWlsdXJlcyIsImxhc3RSZXN1bHQiLCJ1cGRhdGUiLCJrZXlPck9iamVjdCIsIkludmFsaWRBcmd1bWVudCIsIl9hIiwibW9kaWZ5IiwicHV0IiwiZGVsZXRlIiwiY2xlYXIiLCJyYW5nZSIsImJ1bGtHZXQiLCJnZXRNYW55IiwiYnVsa0FkZCIsIm9iamVjdHMiLCJrZXlzT3JPcHRpb25zIiwid2FudFJlc3VsdHMiLCJhbGxLZXlzIiwibnVtT2JqZWN0cyIsIm9iamVjdHNUb0FkZCIsImJ1bGtQdXQiLCJvYmplY3RzVG9QdXQiLCJidWxrRGVsZXRlIiwibnVtS2V5cyIsIkV2ZW50cyIsImN0eCIsImV2cyIsImV2ZW50TmFtZSIsInN1YnNjcmliZXIiLCJzdWJzY3JpYmUiLCJhZGRFdmVudFR5cGUiLCJjaGFpbkZ1bmN0aW9uIiwiZGVmYXVsdEZ1bmN0aW9uIiwiYWRkQ29uZmlndXJlZEV2ZW50cyIsImNvbnRleHQiLCJzdWJzY3JpYmVycyIsImNmZyIsImZpcmVFdmVudCIsIm1ha2VDbGFzc0NvbnN0cnVjdG9yIiwiY3JlYXRlVGFibGVDb25zdHJ1Y3RvciIsInRhYmxlU2NoZW1hIiwiX2FsbFRhYmxlcyIsImlzUGxhaW5LZXlSYW5nZSIsImlnbm9yZUxpbWl0RmlsdGVyIiwiYWxnb3JpdGhtIiwib3IiLCJqdXN0TGltaXQiLCJyZXBsYXlGaWx0ZXIiLCJhZGRGaWx0ZXIiLCJhZGRSZXBsYXlGaWx0ZXIiLCJmYWN0b3J5IiwiaXNMaW1pdEZpbHRlciIsImN1cnIiLCJhZGRNYXRjaEZpbHRlciIsImlzTWF0Y2giLCJnZXRJbmRleE9yU3RvcmUiLCJjb3JlU2NoZW1hIiwiaXNQcmltS2V5IiwicHJpbWFyeUtleSIsImdldEluZGV4QnlLZXlQYXRoIiwiU2NoZW1hIiwib3BlbkN1cnNvciIsImNvcmVUYWJsZSIsImtleXNPbmx5IiwiZGlyIiwidW5pcXVlIiwicXVlcnkiLCJpdGVyIiwiY29yZVRyYW5zIiwiaXRlcmF0ZSIsInZhbHVlTWFwcGVyIiwidW5pb24iLCJjdXJzb3IiLCJhZHZhbmNlIiwic3RvcCIsImZhaWwiLCJfaXRlcmF0ZSIsImN1cnNvclByb21pc2UiLCJtYXBwZWRGbiIsImMiLCJ3cmFwcGVkRm4iLCJjb250aW51ZSIsImFkdmFuY2VyIiwidGEiLCJ0YiIsIk5hTiIsImNvbXBhcmVVaW50OEFycmF5cyIsImdldFVpbnQ4QXJyYXkiLCJjb21wYXJlQXJyYXlzIiwiYWwiLCJibCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwidHNUYWciLCJidWZmZXIiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsIl9yZWFkIiwiX2N0eCIsImVycm9yIiwidGFibGUiLCJfd3JpdGUiLCJfYWRkQWxnb3JpdGhtIiwiY2xvbmUiLCJyYXciLCJNYXRoIiwibWluIiwic29ydEJ5IiwicGFydHMiLCJsYXN0UGFydCIsImxhc3RJbmRleCIsImdldHZhbCIsIm9yZGVyIiwic29ydGVyIiwiYVZhbCIsImJWYWwiLCJzb3J0Iiwib2Zmc2V0TGVmdCIsInJvd3NMZWZ0IiwidW50aWwiLCJiSW5jbHVkZVN0b3BFbnRyeSIsImxhc3QiLCJpbmRleE5hbWUiLCJfb25kaXJlY3Rpb25jaGFuZ2UiLCJkZXNjIiwiZWFjaEtleSIsImVhY2hVbmlxdWVLZXkiLCJlYWNoUHJpbWFyeUtleSIsInByaW1hcnlLZXlzIiwidW5pcXVlS2V5cyIsImZpcnN0S2V5IiwibGFzdEtleSIsImRpc3RpbmN0Iiwic3RyS2V5IiwiZm91bmQiLCJjaGFuZ2VzIiwibW9kaWZ5ZXIiLCJhbnl0aGluZ01vZGlmaWVkIiwib3V0Ym91bmQiLCJleHRyYWN0S2V5IiwibW9kaWZ5Q2h1bmtTaXplIiwidG90YWxGYWlsdXJlcyIsImFwcGx5TXV0YXRlUmVzdWx0IiwiZXhwZWN0ZWRDb3VudCIsIm5leHRDaHVuayIsImNhY2hlIiwiYWRkVmFsdWVzIiwicHV0VmFsdWVzIiwicHV0S2V5cyIsImRlbGV0ZUtleXMiLCJvcmlnVmFsdWUiLCJjcml0ZXJpYSIsImRlbGV0ZUNhbGxiYWNrIiwiY2hhbmdlU3BlYyIsImNvcmVSYW5nZSIsImNyZWF0ZUNvbGxlY3Rpb25Db25zdHJ1Y3RvciIsIndoZXJlQ2xhdXNlIiwia2V5UmFuZ2VHZW5lcmF0b3IiLCJrZXlSYW5nZSIsIndoZXJlQ3R4IiwicmVhZGluZ0hvb2siLCJzaW1wbGVDb21wYXJlIiwic2ltcGxlQ29tcGFyZVJldmVyc2UiLCJjb2xsZWN0aW9uT3JXaGVyZUNsYXVzZSIsIlQiLCJjb2xsZWN0aW9uIiwiZW1wdHlDb2xsZWN0aW9uIiwicmFuZ2VFcXVhbCIsInVwcGVyRmFjdG9yeSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJsb3dlckZhY3RvcnkiLCJuZXh0Q2FzaW5nIiwibG93ZXJLZXkiLCJ1cHBlck5lZWRsZSIsImxvd2VyTmVlZGxlIiwibGxwIiwibHdyS2V5Q2hhciIsImFkZElnbm9yZUNhc2VBbGdvcml0aG0iLCJtYXRjaCIsIm5lZWRsZXMiLCJzdWZmaXgiLCJjb21wYXJlIiwidXBwZXJOZWVkbGVzIiwibG93ZXJOZWVkbGVzIiwiZGlyZWN0aW9uIiwibmV4dEtleVN1ZmZpeCIsIm5lZWRsZXNMZW4iLCJpbml0RGlyZWN0aW9uIiwibmVlZGxlQm91bmRzIiwibmVlZGxlIiwibmIiLCJjcmVhdGVSYW5nZSIsImZpcnN0UG9zc2libGVOZWVkbGUiLCJsb3dlc3RQb3NzaWJsZUNhc2luZyIsImNhc2luZyIsImJldHdlZW4iLCJpbmNsdWRlTG93ZXIiLCJpbmNsdWRlVXBwZXIiLCJfY21wIiwiYWJvdmUiLCJhYm92ZU9yRXF1YWwiLCJiZWxvdyIsImJlbG93T3JFcXVhbCIsInN0YXJ0c1dpdGgiLCJzdHIiLCJzdGFydHNXaXRoSWdub3JlQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2UiLCJhbnlPZklnbm9yZUNhc2UiLCJzdGFydHNXaXRoQW55T2ZJZ25vcmVDYXNlIiwibiIsImFueU9mIiwiX2FzY2VuZGluZyIsIl9kZXNjZW5kaW5nIiwibm90RXF1YWwiLCJpbkFueVJhbmdlIiwiaW5jbHVkZUxvd2VycyIsImluY2x1ZGVVcHBlcnMiLCJub25lT2YiLCJyYW5nZXMiLCJhc2NlbmRpbmciLCJkZXNjZW5kaW5nIiwiX21pbiIsIm1heCIsIl9tYXgiLCJhZGRSYW5nZSIsIm5ld1JhbmdlIiwic29ydERpcmVjdGlvbiIsInJhbmdlU29ydGVyIiwicmFuZ2VQb3MiLCJrZXlJc0JleW9uZEN1cnJlbnRFbnRyeSIsImtleUlzQmVmb3JlQ3VycmVudEVudHJ5Iiwia2V5V2l0aGluQ3VycmVudFJhbmdlIiwiY2hlY2tLZXkiLCJzdGFydHNXaXRoQW55T2YiLCJjcmVhdGVXaGVyZUNsYXVzZUNvbnN0cnVjdG9yIiwib3JDb2xsZWN0aW9uIiwiX0lEQktleVJhbmdlIiwiSURCS2V5UmFuZ2UiLCJldmVudFJlamVjdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInN0b3BQcm9wYWdhdGlvbiIsIkRFWElFX1NUT1JBR0VfTVVUQVRFRF9FVkVOVF9OQU1FIiwiU1RPUkFHRV9NVVRBVEVEX0RPTV9FVkVOVF9OQU1FIiwiZ2xvYmFsRXZlbnRzIiwiVHJhbnNhY3Rpb24iLCJfbG9jayIsIl9yZWN1bG9jayIsImxvY2tPd25lckZvciIsIl91bmxvY2siLCJfYmxvY2tlZEZ1bmNzIiwiX2xvY2tlZCIsImZuQW5kUFNEIiwic2hpZnQiLCJPcGVuRmFpbGVkIiwiYWN0aXZlIiwidHJhbnNhY3Rpb24iLCJkdXJhYmlsaXR5IiwiY2hyb21lVHJhbnNhY3Rpb25EdXJhYmlsaXR5IiwiZXYiLCJfcmVqZWN0Iiwib25hYm9ydCIsIm9uIiwib25jb21wbGV0ZSIsIl9yZXNvbHZlIiwic3RvcmFnZW11dGF0ZWQiLCJiV3JpdGVMb2NrIiwiUmVhZE9ubHkiLCJfcm9vdCIsIndhaXRGb3IiLCJwcm9taXNlTGlrZSIsInJvb3QiLCJfd2FpdGluZ0ZvciIsIl93YWl0aW5nUXVldWUiLCJzdG9yZSIsIm9iamVjdFN0b3JlIiwic3BpbiIsIl9zcGluQ291bnQiLCJjdXJyZW50V2FpdFByb21pc2UiLCJhYm9ydCIsIm1lbW9pemVkVGFibGVzIiwiX21lbW9pemVkVGFibGVzIiwidHJhbnNhY3Rpb25Cb3VuZFRhYmxlIiwiY3JlYXRlVHJhbnNhY3Rpb25Db25zdHJ1Y3RvciIsImRic2NoZW1hIiwiY29tcGxldGUiLCJ3YXNBY3RpdmUiLCJjcmVhdGVJbmRleFNwZWMiLCJzcmMiLCJuYW1lRnJvbUtleVBhdGgiLCJjcmVhdGVUYWJsZVNjaGVtYSIsInNhZmFyaU11bHRpU3RvcmVGaXgiLCJnZXRNYXhLZXkiLCJJZGJLZXlSYW5nZSIsIm9ubHkiLCJnZXRLZXlFeHRyYWN0b3IiLCJnZXRTaW5nbGVQYXRoS2V5RXh0cmFjdG9yIiwiYXJyYXlpZnkiLCJfaWRfY291bnRlciIsImdldEtleVBhdGhBbGlhcyIsImNyZWF0ZURCQ29yZSIsInRtcFRyYW5zIiwiZXh0cmFjdFNjaGVtYSIsInRhYmxlcyIsIm9iamVjdFN0b3JlTmFtZXMiLCJhdXRvSW5jcmVtZW50IiwiaW5kZXhCeUtleVBhdGgiLCJpc1ByaW1hcnlLZXkiLCJpbmRleE5hbWVzIiwibXVsdGlFbnRyeSIsImhhc0dldEFsbCIsIm1ha2VJREJLZXlSYW5nZSIsImlkYlJhbmdlIiwidXBwZXJCb3VuZCIsImxvd2VyQm91bmQiLCJib3VuZCIsImNyZWF0ZURiQ29yZVRhYmxlIiwiaXNBZGRPclB1dCIsInJlcSIsInJlcXMiLCJlcnJvckhhbmRsZXIiLCJhcmdzMSIsImFyZ3MyIiwic291cmNlIiwib3BlbktleUN1cnNvciIsIl9fX2lkIiwiX2N1cnNvckNvbnRpbnVlIiwiX2N1cnNvckNvbnRpbnVlUHJpbWFyeUtleSIsImNvbnRpbnVlUHJpbWFyeUtleSIsIl9jdXJzb3JBZHZhbmNlIiwiZG9UaHJvd0N1cnNvcklzTm90U3RhcnRlZCIsImRvVGhyb3dDdXJzb3JJc1N0b3BwZWQiLCJnb3RPbmUiLCJpdGVyYXRpb25Qcm9taXNlIiwicmVzb2x2ZUl0ZXJhdGlvbiIsInJlamVjdEl0ZXJhdGlvbiIsImd1YXJkZWRDYWxsYmFjayIsInJlcXVlc3QiLCJub25JbmZpbml0TGltaXQiLCJpZGJLZXlSYW5nZSIsImdldEFsbCIsImdldEFsbEtleXMiLCJrZXlDb3VudCIsImNhbGxiYWNrQ291bnQiLCJzdWNjZXNzSGFuZGxlciIsIl9wb3MiLCJ0YWJsZU1hcCIsIk1JTl9LRVkiLCJNQVhfS0VZIiwiY3JlYXRlTWlkZGxld2FyZVN0YWNrIiwic3RhY2tJbXBsIiwibWlkZGxld2FyZXMiLCJkb3duIiwiY3JlYXRlTWlkZGxld2FyZVN0YWNrcyIsImRiY29yZSIsImdlbmVyYXRlTWlkZGxld2FyZVN0YWNrcyIsIl9ub3ZpcCIsIl9taWRkbGV3YXJlcyIsInRibCIsInNldEFwaU9uUGxhY2UiLCJvYmpzIiwidGFibGVOYW1lcyIsInByb3BEZXNjIiwiZW51bWVyYWJsZSIsInJlbW92ZVRhYmxlc0FwaSIsImxvd2VyVmVyc2lvbkZpcnN0IiwiX2NmZyIsInZlcnNpb24iLCJydW5VcGdyYWRlcnMiLCJvbGRWZXJzaW9uIiwiaWRiVXBncmFkZVRyYW5zIiwiZ2xvYmFsU2NoZW1hIiwiX3N0b3JlTmFtZXMiLCJyZWplY3RUcmFuc2FjdGlvbiIsImNyZWF0ZVRhYmxlIiwicG9wdWxhdGUiLCJ1cGRhdGVUYWJsZXNBbmRJbmRleGVzIiwicXVldWUiLCJ2ZXJzaW9ucyIsIl92ZXJzaW9ucyIsImJ1aWxkR2xvYmFsU2NoZW1hIiwiYW55Q29udGVudFVwZ3JhZGVySGFzUnVuIiwidmVyc1RvUnVuIiwib2xkU2NoZW1hIiwibmV3U2NoZW1hIiwiYWRqdXN0VG9FeGlzdGluZ0luZGV4TmFtZXMiLCJkaWZmIiwiZ2V0U2NoZW1hRGlmZiIsInR1cGxlIiwiY2hhbmdlIiwicmVjcmVhdGUiLCJVcGdyYWRlIiwiYWRkSW5kZXgiLCJkZWxldGVJbmRleCIsImRlbCIsImlkeE5hbWUiLCJjb250ZW50VXBncmFkZSIsInVwZ3JhZGVTY2hlbWEiLCJjb250ZW50VXBncmFkZUlzQXN5bmMiLCJyZXR1cm5WYWx1ZSIsInByb21pc2VGb2xsb3dlZCIsImRlY3JlbWVudG9yIiwiZGVsZXRlUmVtb3ZlZFRhYmxlcyIsInJ1blF1ZXVlIiwiY3JlYXRlTWlzc2luZ1RhYmxlcyIsIm9sZERlZiIsIm5ld0RlZiIsImRlZiIsIm9sZEluZGV4ZXMiLCJuZXdJbmRleGVzIiwib2xkSWR4IiwibmV3SWR4IiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJjb250YWlucyIsInN0b3JlTmFtZSIsImRlbGV0ZU9iamVjdFN0b3JlIiwiY3JlYXRlSW5kZXgiLCJkYlN0b3JlTmFtZXMiLCJqIiwiaWRiaW5kZXgiLCJyZWFkR2xvYmFsU2NoZW1hIiwidmVybm8iLCJ2ZXJpZnlJbnN0YWxsZWRTY2hlbWEiLCJpbnN0YWxsZWRTY2hlbWEiLCJjaCIsIl9oYXNHZXRBbGwiLCJkZXhpZU5hbWUiLCJpbmRleFNwZWMiLCJXb3JrZXJHbG9iYWxTY29wZSIsInBhcnNlSW5kZXhTeW50YXgiLCJwcmltS2V5QW5kSW5kZXhlcyIsImluZGV4TnVtIiwidHJpbSIsInJlcGxhY2UiLCJWZXJzaW9uIiwiX3BhcnNlU3RvcmVzU3BlYyIsInN0b3JlcyIsIm91dFNjaGVtYSIsInN0b3Jlc1NvdXJjZSIsInN0b3Jlc1NwZWMiLCJ1cGdyYWRlIiwidXBncmFkZUZ1bmN0aW9uIiwiY3JlYXRlVmVyc2lvbkNvbnN0cnVjdG9yIiwidmVyc2lvbk51bWJlciIsImdldERiTmFtZXNUYWJsZSIsImRiTmFtZXNEQiIsImFkZG9ucyIsImRibmFtZXMiLCJoYXNEYXRhYmFzZXNOYXRpdmUiLCJkYXRhYmFzZXMiLCJnZXREYXRhYmFzZU5hbWVzIiwiaW5mb3MiLCJpbmZvIiwiX29uRGF0YWJhc2VDcmVhdGVkIiwiX29uRGF0YWJhc2VEZWxldGVkIiwidmlwIiwiaWRiUmVhZHkiLCJpc1NhZmFyaSIsInVzZXJBZ2VudERhdGEiLCJpbnRlcnZhbElkIiwidHJ5SWRiIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGV4aWVPcGVuIiwic3RhdGUiLCJEZWJ1Zy5kZWJ1ZyIsIm9wZW5DYW5jZWxsZXIiLCJEZWJ1Zy5nZXRFcnJvcldpdGhTdGFjayIsInRocm93SWZDYW5jZWxsZWQiLCJyZXNvbHZlRGJSZWFkeSIsImRiUmVhZHlSZXNvbHZlIiwidXBncmFkZVRyYW5zYWN0aW9uIiwid2FzQ3JlYXRlZCIsInNhZmFyaTE0V29ya2Fyb3VuZCIsImRiTmFtZSIsImF1dG9TY2hlbWEiLCJyb3VuZCIsIm9uYmxvY2tlZCIsIl9maXJlT25CbG9ja2VkIiwib251cGdyYWRlbmVlZGVkIiwiYWxsb3dFbXB0eURCIiwiY2xvc2UiLCJkZWxyZXEiLCJkZWxldGVEYXRhYmFzZSIsIk5vU3VjaERhdGFiYXNlIiwib2xkVmVyIiwicG93Iiwib252ZXJzaW9uY2hhbmdlIiwidmNGaXJlZCIsIm9uY2xvc2UiLCJvblJlYWR5QmVpbmdGaXJlZCIsInJlYWR5IiwiZmlyZVJlbWFpbmRlcnMiLCJyZW1haW5kZXJzIiwiYXdhaXRJdGVyYXRvciIsImNhbGxOZXh0IiwiZG9UaHJvdyIsInRocm93Iiwib25TdWNjZXNzIiwic3RlcCIsIm9uRXJyb3IiLCJnZXROZXh0IiwiZXh0cmFjdFRyYW5zYWN0aW9uQXJncyIsIl90YWJsZUFyZ3NfIiwic2NvcGVGdW5jIiwiZW50ZXJUcmFuc2FjdGlvblNjb3BlIiwicGFyZW50VHJhbnNhY3Rpb24iLCJzY29wZUZ1bmNJc0FzeW5jIiwiUHJlbWF0dXJlQ29tbWl0IiwicGFkIiwiY3JlYXRlVmlydHVhbEluZGV4TWlkZGxld2FyZSIsImluZGV4TG9va3VwIiwiYWxsVmlydHVhbEluZGV4ZXMiLCJhZGRWaXJ0dWFsSW5kZXhlcyIsImtleVRhaWwiLCJsb3dMZXZlbEluZGV4Iiwia2V5UGF0aEFsaWFzIiwiaW5kZXhMaXN0Iiwia2V5TGVuZ3RoIiwiaXNWaXJ0dWFsIiwidmlydHVhbEluZGV4IiwidmlydHVhbEtleVBhdGgiLCJmaW5kQmVzdEluZGV4IiwidHJhbnNsYXRlUmFuZ2UiLCJ0cmFuc2xhdGVSZXF1ZXN0IiwiY3JlYXRlVmlydHVhbEN1cnNvciIsIl9jb250aW51ZSIsInZpcnR1YWxDdXJzb3IiLCJ2aXJ0dWFsSW5kZXhNaWRkbGV3YXJlIiwibGV2ZWwiLCJnZXRPYmplY3REaWZmIiwicHJmeCIsImFwIiwiYnAiLCJhcFR5cGVOYW1lIiwiYnBUeXBlTmFtZSIsImdldEVmZmVjdGl2ZUtleXMiLCJob29rc01pZGRsZXdhcmUiLCJkb3duQ29yZSIsImRvd25UYWJsZSIsInRhYmxlTWlkZGxld2FyZSIsImR4VHJhbnMiLCJkZWxldGluZyIsImNyZWF0aW5nIiwidXBkYXRpbmciLCJhZGRQdXRPckRlbGV0ZSIsImRlbGV0ZVJhbmdlIiwiZ2V0RXhpc3RpbmdWYWx1ZXMiLCJleGlzdGluZ1ZhbHVlcyIsImNvbnRleHRzIiwiZXhpc3RpbmdWYWx1ZSIsImdlbmVyYXRlZFByaW1hcnlLZXkiLCJvYmplY3REaWZmIiwiYWRkaXRpb25hbENoYW5nZXMiLCJyZXF1ZXN0ZWRWYWx1ZSIsImRlbGV0ZU5leHRDaHVuayIsImVmZmVjdGl2ZUtleXMiLCJnZXRGcm9tVHJhbnNhY3Rpb25DYWNoZSIsImNhY2hlRXhpc3RpbmdWYWx1ZXNNaWRkbGV3YXJlIiwiY2FjaGVkUmVzdWx0IiwiaXNFbXB0eVJhbmdlIiwibm9kZSIsImZyb21PclRyZWUiLCJ0byIsImQiLCJyYW5nZVNldCIsImFkZEtleSIsImFkZEtleXMiLCJnZXRSYW5nZVNldEl0ZXJhdG9yIiwibGVmdCIsInJpZ2h0IiwiciIsInJlYmFsYW5jZSIsInJpZ2h0V2FzQ3V0T2ZmIiwibmV3U2V0IiwiX2FkZFJhbmdlU2V0IiwicmFuZ2VTZXQxIiwicmFuZ2VTZXQyIiwiaTEiLCJuZXh0UmVzdWx0MSIsImkyIiwibmV4dFJlc3VsdDIiLCJrZXlQcm92aWRlZCIsInVwIiwiX2IiLCJyb290Q2xvbmUiLCJvbGRSb290UmlnaHQiLCJjb21wdXRlRGVwdGgiLCJvYnNlcnZhYmlsaXR5TWlkZGxld2FyZSIsIkZVTExfUkFOR0UiLCJ0YWJsZUNsb25lIiwibXV0YXRlZFBhcnRzIiwiZ2V0UmFuZ2VTZXQiLCJwYXJ0IiwicGtSYW5nZVNldCIsImRlbHNSYW5nZVNldCIsIm5ld09ianMiLCJvbGRDYWNoZSIsIm9sZE9ianMiLCJ0cmFja0FmZmVjdGVkSW5kZXhlcyIsImdldFJhbmdlIiwicmVhZFN1YnNjcmliZXJzIiwibWV0aG9kIiwic3Vic2NyIiwicXVlcmllZEluZGV4IiwicXVlcmllZFJhbmdlcyIsImtleXNQcm9taXNlIiwicmVzdWx0aW5nS2V5cyIsInBLZXlzIiwid2FudFZhbHVlcyIsInBrZXkiLCJhZGRBZmZlY3RlZEluZGV4IiwiYWRkS2V5T3JLZXlzIiwib2xkS2V5IiwibmV3S2V5IiwiZGVwcyIsImRlcGVuZGVuY2llcyIsImNhbmNlbE9wZW4iLCJiU3RpY2t5IiwibmV3VmVyc2lvbiIsInVzZSIsImFkZG9uIiwidmVyc2lvbkluc3RhbmNlIiwiX3doZW5SZWFkeSIsInVudXNlIiwibXciLCJoYXNBcmd1bWVudHMiLCJkb0RlbGV0ZSIsImJhY2tlbmREQiIsImhhc0JlZW5DbG9zZWQiLCJoYXNGYWlsZWQiLCJkeW5hbWljYWxseU9wZW5lZCIsIl90cmFuc2FjdGlvbiIsIm9ubHlJZkNvbXBhdGlibGUiLCJpZGJNb2RlIiwiU3ViVHJhbnNhY3Rpb24iLCJlbnRlclRyYW5zYWN0aW9uIiwiSW52YWxpZFRhYmxlIiwic3ltYm9sT2JzZXJ2YWJsZSIsIm9ic2VydmFibGUiLCJPYnNlcnZhYmxlIiwiX3N1YnNjcmliZSIsImV4dGVuZE9ic2VydmFiaWxpdHlTZXQiLCJxdWVyaWVyIiwib2JzZXJ2ZXIiLCJleGVjdXRlIiwiZXhlYyIsImNsb3NlZCIsImFjY3VtTXV0cyIsImN1cnJlbnRPYnMiLCJzdWJzY3JpcHRpb24iLCJtdXRhdGlvbkxpc3RlbmVyIiwicXVlcnlpbmciLCJzdGFydGVkTGlzdGVuaW5nIiwic2hvdWxkTm90aWZ5IiwiZG9RdWVyeSIsImRvbURlcHMiLCJtb3pJbmRleGVkREIiLCJ3ZWJraXRJbmRleGVkREIiLCJtc0luZGV4ZWREQiIsIndlYmtpdElEQktleVJhbmdlIiwiX0RleGllIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiaWdub3JlVHJhbnNhY3Rpb24iLCJhc3luYyIsImdlbmVyYXRvckZuIiwic3Bhd24iLCJjdXJyZW50VHJhbnNhY3Rpb24iLCJwcm9taXNlT3JGdW5jdGlvbiIsIm9wdGlvbmFsVGltZW91dCIsIkRlYnVnLnNldERlYnVnIiwic2VtVmVyIiwibWF4S2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZWRQYXJ0cyIsInByb3BhZ2F0aW5nTG9jYWxseSIsImluaXRDdXN0b21FdmVudCIsInByb3BhZ2F0ZUxvY2FsbHkiLCJ1cGRhdGVQYXJ0cyIsIndhc01lIiwiQnJvYWRjYXN0Q2hhbm5lbCIsImJjIiwidW5yZWYiLCJjaGFuZ2VkUGFydHMiLCJwb3N0TWVzc2FnZSIsIm9ubWVzc2FnZSIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidHJpZyIsInJhbmRvbSIsIm1hdGNoQWxsIiwiaW5jbHVkZVVuY29udHJvbGxlZCIsImNsaWVudCIsInBhcnNlIiwibmV3VmFsdWUiLCJzd0NvbnRhaW5lciIsInNlcnZpY2VXb3JrZXIiLCJwcm9wYWdhdGVNZXNzYWdlTG9jYWxseSIsImRleGllXzNfMl8zX2RlZmF1bHQiLCJEZXhpZSQxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNDTyxJQUFNQyxVQUNULE9BQU9DLGVBQWUsY0FBY0EsYUFDcEMsT0FBT0MsU0FBUyxjQUFjQSxPQUM5QixPQUFPQyxXQUFXLGNBQWNBLFNBQ2hDQztBQ0pHLElBQU1DLE9BQU9DLE9BQU9EO0FBQ3BCLElBQU1FLFVBQVVDLE1BQU1EO0FBQzdCLElBQUksT0FBT0UsWUFBWSxlQUFlLENBQUNULFFBQVFTLFNBQVE7RUFJbkRULFFBQVFTLFVBQVVBOztTQUlOQyxPQUEwQ0MsS0FBUUMsV0FBWTtFQUMxRSxJQUFJLE9BQU9BLGNBQWMsVUFBVSxPQUFPRDtFQUMxQ04sS0FBS08sU0FBUyxFQUFFQyxRQUFRLFVBQVVDLEtBQUc7SUFDakNILElBQUlHLE9BQU9GLFVBQVVFO0dBQ3hCO0VBQ0QsT0FBT0g7QUFDWDtBQUVPLElBQU1JLFdBQVdULE9BQU9VO0FBQ3hCLElBQU1DLFVBQVUsR0FBR0M7U0FDVkMsT0FBT1IsS0FBS1MsTUFBSTtFQUM1QixPQUFPSCxRQUFRSSxLQUFLVixLQUFLUyxJQUFJO0FBQ2pDO1NBRWdCRSxNQUFPQyxPQUFPWCxXQUFTO0VBQ25DLElBQUksT0FBT0EsY0FBYyxZQUFZQSxZQUFZQSxVQUFVRyxTQUFTUSxLQUFLLENBQUM7RUFDMUUsQ0FBQyxPQUFPQyxZQUFZLGNBQWNuQixPQUFPbUIsUUFBUUMsU0FBU2IsU0FBUyxFQUFFQyxRQUFRQyxPQUFHO0lBQzVFWSxRQUFRSCxPQUFPVCxLQUFLRixVQUFVRSxJQUFJO0dBQ3JDO0FBQ0w7QUFFTyxJQUFNYSxpQkFBaUJyQixPQUFPcUI7U0FFckJELFFBQVFmLEtBQUtTLE1BQU1RLGtCQUFrQkMsU0FBUTtFQUN6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QixlQUFlelQsS0FBS3V0QixXQUFXOztJQUU1Q0gscUJBQXFCSTs7QUFFekI7QUFFTyxJQUFJSixxQkFBcUI7QUMvQmhDLElBQUksT0FBT0sscUJBQXFCLGFBQWE7RUFDM0MsTUFBTUMsS0FBSyxJQUFJRCxpQkFBaUJ0Yiw4QkFBOEI7RUFVOUQsSUFBSSxPQUFRdWIsR0FBV0MsVUFBVSxZQUFZO0lBQzFDRCxHQUFXQyxPQUFLOztFQU1uQnZiLGFBQWFGLGtDQUFtQzBiLGdCQUFZO0lBQzFELElBQUksQ0FBQ1Isb0JBQW9CO01BQ3ZCTSxHQUFHRyxZQUFZRCxZQUFZOztHQUU5QjtFQUtERixHQUFHSSxZQUFhM2EsTUFBRTtJQUNoQixJQUFJQSxHQUFHNGEsTUFBTVQsaUJBQWlCbmEsR0FBRzRhLElBQUk7O1dBRTlCLE9BQU9scUMsU0FBUyxlQUFlLE9BQU9rYSxjQUFjLGFBQWE7RUFPMUVxVSxhQUFhRixrQ0FBbUMwYixnQkFBWTtJQUMxRCxJQUFJO01BQ0YsSUFBSSxDQUFDUixvQkFBb0I7UUFDdkIsSUFBSSxPQUFPWSxpQkFBaUIsYUFBYTtVQUV2Q0EsYUFBYUMsUUFDWDliLGdDQUNBdlIsS0FBS0MsVUFBVTtZQUNicXRCLE1BQU0xa0IsS0FBSzJrQixRQUFNO1lBQ2pCUDtXQUNELENBQUM7O1FBR04sSUFBSSxPQUFPL3BDLEtBQUssZUFBZSxVQUFVO1VBRXZDLENBQUMsR0FBR0EsS0FBSyxXQUFXdXFDLFNBQVM7WUFBRUMscUJBQXFCO1VBQUksQ0FBRSxDQUFDLEVBQUU3cEMsUUFDMUQ4cEMsVUFDQ0EsT0FBT1QsWUFBWTtZQUNqQjc0QixNQUFNbWQ7WUFDTnliO1dBQ0QsQ0FBQzs7O2FBSVZ4cUIsS0FBTTtHQUNUO0VBS0QsSUFBSSxPQUFPOHBCLHFCQUFxQixhQUFhO0lBQ3pDQSxpQkFBaUIsV0FBWS9aLE1BQWdCO01BQzdDLElBQUlBLEdBQUcxdUIsUUFBUTB0QixnQ0FBZ0M7UUFDN0MsTUFBTTRiLE9BQU9udEIsS0FBSzJ0QixNQUFNcGIsR0FBR3FiLFFBQVE7UUFDbkMsSUFBSVQsTUFBTVQsaUJBQWlCUyxLQUFLSCxZQUFZOztLQUUvQzs7RUFNSCxNQUFNYSxjQUFjNXFDLEtBQUs2TixZQUFZcU0sVUFBVTJ3QjtFQUMvQyxJQUFJRCxhQUFhO0lBRWZBLFlBQVl2QixpQkFBaUIsV0FBV3lCLHVCQUF1Qjs7O0FBSW5FLFNBQVNBLHdCQUF3QjtFQUFFWjtBQUFJLEdBQWdCO0VBQ3JELElBQUlBLFFBQVFBLEtBQUsvNEIsU0FBU21kLGdDQUFnQztJQUN4RG1iLGlCQUFpQlMsS0FBS0gsWUFBWTs7QUFFdEM7QUNoRkF4NkIsYUFBYWQsa0JBQWtCeEQ7QUFHL0JpK0IsU0FBZTlNLE9BQWE5aEIscUJBQXFCOzs7QTFEakJqRCxJQUFPeXdCLHNCQUFRQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2RlbW8vb3V0In0=
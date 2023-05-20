System.register(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.4.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.6', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/engine.io-client.6.4.0.js
var engine_io_client_6_4_0_exports = {};
__export(engine_io_client_6_4_0_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_4_0_exports);

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/transport.js
var import_engine = require("engine.io-parser@5.0.6");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {}
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  pause(onPause) {}
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  length = 64,
  map = {};
var seed = 0,
  i = 0,
  prev;
function encode(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function decode(str) {
  let decoded = 0;
  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }
  return decoded;
}
function yeast() {
  const now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + "." + encode(seed++);
}
for (; i < length; i++) map[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode2(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length) str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode2(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_engine2 = require("engine.io-parser@5.0.6");
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
function empty() {}
var hasXHR2 = function () {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = packet => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      this.onPacket(packet);
    };
    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      xs: this.xs
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var import_engine3 = require("engine.io-parser@5.0.6");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = encode2(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  check() {
    return !!WebSocket;
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function parse(str) {
  const src = str,
    b = str.indexOf("["),
    e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""),
    uri = {},
    i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.0");
var import_engine4 = require("engine.io-parser@5.0.6");
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode2(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = import_engine4.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2])) filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = import_engine4.protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuNC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3llYXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMveG1saHR0cHJlcXVlc3QuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiU29ja2V0IiwiVHJhbnNwb3J0IiwiaW5zdGFsbFRpbWVyRnVuY3Rpb25zIiwibmV4dFRpY2siLCJwYXJzZSIsInByb3RvY29sIiwidHJhbnNwb3J0cyIsIm1vZHVsZSIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwic2V0VGltZW91dEZuIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoIiwiaSIsImwiLCJjaGFyQ29kZUF0IiwicmVxdWlyZSIsIlRyYW5zcG9ydEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiY29udGV4dCIsInR5cGUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJ3cml0YWJsZSIsInF1ZXJ5Iiwic29ja2V0Iiwib25FcnJvciIsImVtaXRSZXNlcnZlZCIsIm9wZW4iLCJyZWFkeVN0YXRlIiwiZG9PcGVuIiwiY2xvc2UiLCJkb0Nsb3NlIiwib25DbG9zZSIsInNlbmQiLCJwYWNrZXRzIiwid3JpdGUiLCJvbk9wZW4iLCJvbkRhdGEiLCJkYXRhIiwicGFja2V0IiwiaW1wb3J0X2VuZ2luZSIsImJpbmFyeVR5cGUiLCJvblBhY2tldCIsImRldGFpbHMiLCJwYXVzZSIsIm9uUGF1c2UiLCJhbHBoYWJldCIsInNwbGl0IiwibWFwIiwic2VlZCIsInByZXYiLCJlbmNvZGUiLCJudW0iLCJlbmNvZGVkIiwiZmxvb3IiLCJkZWNvZGUiLCJkZWNvZGVkIiwiY2hhckF0IiwieWVhc3QiLCJub3ciLCJEYXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ2YWx1ZSIsIlhNTEh0dHBSZXF1ZXN0IiwiZXJyIiwiaGFzQ09SUyIsIlhIUiIsInhkb21haW4iLCJlIiwiY29uY2F0Iiwiam9pbiIsImVtcHR5IiwiaGFzWEhSMiIsInhociIsInJlc3BvbnNlVHlwZSIsIlBvbGxpbmciLCJwb2xsaW5nIiwibG9jYXRpb24iLCJpc1NTTCIsInBvcnQiLCJ4ZCIsImhvc3RuYW1lIiwieHMiLCJzZWN1cmUiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5IiwibmFtZSIsInBvbGwiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImZvckVhY2giLCJkb1dyaXRlIiwidXJpIiwic2NoZW1hIiwidGltZXN0YW1wUmVxdWVzdHMiLCJ0aW1lc3RhbXBQYXJhbSIsInNpZCIsImI2NCIsIk51bWJlciIsImVuY29kZWRRdWVyeSIsImlwdjYiLCJpbmRleE9mIiwicGF0aCIsInJlcXVlc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJSZXF1ZXN0IiwiZm4iLCJyZXEiLCJtZXRob2QiLCJvbiIsInhoclN0YXR1cyIsInBvbGxYaHIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwiYXN5bmMiLCJjcmVhdGUiLCJ4c2NoZW1lIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsIndpdGhDcmVkZW50aWFscyIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInN0YXR1cyIsIm9uTG9hZCIsImRvY3VtZW50IiwiaW5kZXgiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJjbGVhbnVwIiwiZnJvbUVycm9yIiwiYWJvcnQiLCJyZXNwb25zZVRleHQiLCJhdHRhY2hFdmVudCIsInVubG9hZEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGVybWluYXRpb25FdmVudCIsImlzUHJvbWlzZUF2YWlsYWJsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2IiLCJ0aGVuIiwiV2ViU29ja2V0IiwiTW96V2ViU29ja2V0IiwidXNpbmdCcm93c2VyV2ViU29ja2V0IiwiZGVmYXVsdEJpbmFyeVR5cGUiLCJpc1JlYWN0TmF0aXZlIiwibmF2aWdhdG9yIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiYXV0b1VucmVmIiwiX3NvY2tldCIsInVucmVmIiwib25jbG9zZSIsImNsb3NlRXZlbnQiLCJvbm1lc3NhZ2UiLCJldiIsIm9uZXJyb3IiLCJsYXN0UGFja2V0Iiwib3B0aW9ucyIsImNvbXByZXNzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJsZW4iLCJCdWZmZXIiLCJ0aHJlc2hvbGQiLCJ3ZWJzb2NrZXQiLCJyZSIsInBhcnRzIiwic3JjIiwiYiIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInNvdXJjZSIsImhvc3QiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwibmFtZXMiLCJzbGljZSIsInNwbGljZSIsIiQwIiwiJDEiLCIkMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjMiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJhZ2VudCIsInVwZ3JhZGUiLCJyZW1lbWJlclVwZ3JhZGUiLCJhZGRUcmFpbGluZ1NsYXNoIiwicmVqZWN0VW5hdXRob3JpemVkIiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJpZCIsInVwZ3JhZGVzIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJwaW5nVGltZW91dFRpbWVyIiwiYmVmb3JldW5sb2FkRXZlbnRMaXN0ZW5lciIsInRyYW5zcG9ydCIsInJlbW92ZUFsbExpc3RlbmVycyIsIm9mZmxpbmVFdmVudExpc3RlbmVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiRUlPIiwiaW1wb3J0X2VuZ2luZTQiLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJzaGlmdCIsInNldFRyYW5zcG9ydCIsIm9uRHJhaW4iLCJwcm9iZSIsImZhaWxlZCIsIm9uVHJhbnNwb3J0T3BlbiIsIm1zZyIsInVwZ3JhZGluZyIsImZsdXNoIiwiZnJlZXplVHJhbnNwb3J0IiwiZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib251cGdyYWRlIiwidG8iLCJyZW1vdmVMaXN0ZW5lciIsIm9mZiIsIm9uSGFuZHNoYWtlIiwiSlNPTiIsInJlc2V0UGluZ1RpbWVvdXQiLCJzZW5kUGFja2V0IiwiY29kZSIsImZpbHRlclVwZ3JhZGVzIiwibWF4UGF5bG9hZCIsImdldFdyaXRhYmxlUGFja2V0cyIsInNob3VsZENoZWNrUGF5bG9hZFNpemUiLCJwYXlsb2FkU2l6ZSIsInB1c2giLCJjbGVhbnVwQW5kQ2xvc2UiLCJ3YWl0Rm9yVXBncmFkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXJlZFVwZ3JhZGVzIiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQU8sSUFBTUMsa0JBQWtCLE1BQU07RUFDakMsSUFBSSxPQUFPQyxTQUFTLGFBQWE7SUFDN0IsT0FBT0E7RUFDWCxXQUNTLE9BQU9DLFdBQVcsYUFBYTtJQUNwQyxPQUFPQTtFQUNYLE9BQ0s7SUFDRCxPQUFPQyxTQUFTLGFBQWEsR0FBRTtFQUNuQztBQUNKLElBQUc7OztBQ1RJLFNBQVNDLEtBQUtDLFFBQVFDLE1BQU07RUFDL0IsT0FBT0EsS0FBS0MsT0FBTyxDQUFDQyxLQUFLQyxNQUFNO0lBQzNCLElBQUlKLElBQUlLLGVBQWVELENBQUMsR0FBRztNQUN2QkQsSUFBSUMsS0FBS0osSUFBSUk7SUFDakI7SUFDQSxPQUFPRDtFQUNYLEdBQUcsQ0FBQyxDQUFDO0FBQ1Q7QUFFQSxJQUFNRyxxQkFBcUJYLGVBQVdZO0FBQ3RDLElBQU1DLHVCQUF1QmIsZUFBV2M7QUFDakMsU0FBU3BCLHNCQUFzQlcsS0FBS1UsTUFBTTtFQUM3QyxJQUFJQSxLQUFLQyxpQkFBaUI7SUFDdEJYLElBQUlZLGVBQWVOLG1CQUFtQk8sS0FBS2xCLGNBQVU7SUFDckRLLElBQUljLGlCQUFpQk4scUJBQXFCSyxLQUFLbEIsY0FBVTtFQUM3RCxPQUNLO0lBQ0RLLElBQUlZLGVBQWVqQixlQUFXWSxXQUFXTSxLQUFLbEIsY0FBVTtJQUN4REssSUFBSWMsaUJBQWlCbkIsZUFBV2MsYUFBYUksS0FBS2xCLGNBQVU7RUFDaEU7QUFDSjtBQUVBLElBQU1vQixrQkFBa0I7QUFFakIsU0FBU0MsV0FBV2hCLEtBQUs7RUFDNUIsSUFBSSxPQUFPQSxRQUFRLFVBQVU7SUFDekIsT0FBT2lCLFdBQVdqQixHQUFHO0VBQ3pCO0VBRUEsT0FBT2tCLEtBQUtDLE1BQU1uQixJQUFJZ0IsY0FBY2hCLElBQUlvQixRQUFRTCxlQUFlO0FBQ25FO0FBQ0EsU0FBU0UsV0FBV0ksS0FBSztFQUNyQixJQUFJQyxJQUFJO0lBQUdDLFVBQVM7RUFDcEIsU0FBU0MsS0FBSSxHQUFHQyxJQUFJSixJQUFJRSxRQUFRQyxLQUFJQyxHQUFHRCxNQUFLO0lBQ3hDRixJQUFJRCxJQUFJSyxXQUFXRixFQUFDO0lBQ3BCLElBQUlGLElBQUksS0FBTTtNQUNWQyxXQUFVO0lBQ2QsV0FDU0QsSUFBSSxNQUFPO01BQ2hCQyxXQUFVO0lBQ2QsV0FDU0QsSUFBSSxTQUFVQSxLQUFLLE9BQVE7TUFDaENDLFdBQVU7SUFDZCxPQUNLO01BQ0RDO01BQ0FELFdBQVU7SUFDZDtFQUNKO0VBQ0EsT0FBT0E7QUFDWDs7O0FDbkRBLG9CQUE2Qkk7QUFDN0IsK0JBQXdCQTtBQUV4QixJQUFNQyxpQkFBTixjQUE2QkMsTUFBTTtFQUMvQkMsWUFBWUMsUUFBUUMsYUFBYUMsU0FBUztJQUN0QyxNQUFNRixNQUFNO0lBQ1osS0FBS0MsY0FBY0E7SUFDbkIsS0FBS0MsVUFBVUE7SUFDZixLQUFLQyxPQUFPO0VBQ2hCO0FBQ0o7QUFDTyxJQUFNOUMsWUFBTixjQUF3QitDLGlDQUFRO0VBT25DTCxZQUFZcEIsTUFBTTtJQUNkLE9BQU07SUFDTixLQUFLMEIsV0FBVztJQUNoQi9DLHNCQUFzQixNQUFNcUIsSUFBSTtJQUNoQyxLQUFLQSxPQUFPQTtJQUNaLEtBQUsyQixRQUFRM0IsS0FBSzJCO0lBQ2xCLEtBQUtDLFNBQVM1QixLQUFLNEI7RUFDdkI7RUFVQUMsUUFBUVIsUUFBUUMsYUFBYUMsU0FBUztJQUNsQyxNQUFNTyxhQUFhLFNBQVMsSUFBSVosZUFBZUcsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO0lBQzVFLE9BQU87RUFDWDtFQUlBUSxPQUFPO0lBQ0gsS0FBS0MsYUFBYTtJQUNsQixLQUFLQyxRQUFPO0lBQ1osT0FBTztFQUNYO0VBSUFDLFFBQVE7SUFDSixJQUFJLEtBQUtGLGVBQWUsYUFBYSxLQUFLQSxlQUFlLFFBQVE7TUFDN0QsS0FBS0csU0FBUTtNQUNiLEtBQUtDLFNBQVE7SUFDakI7SUFDQSxPQUFPO0VBQ1g7RUFNQUMsS0FBS0MsU0FBUztJQUNWLElBQUksS0FBS04sZUFBZSxRQUFRO01BQzVCLEtBQUtPLE1BQU1ELE9BQU87SUFDdEIsT0FDSyxDQUVMO0VBQ0o7RUFNQUUsU0FBUztJQUNMLEtBQUtSLGFBQWE7SUFDbEIsS0FBS04sV0FBVztJQUNoQixNQUFNSSxhQUFhLE1BQU07RUFDN0I7RUFPQVcsT0FBT0MsTUFBTTtJQUNULE1BQU1DLGFBQVNDLDRCQUFhRixNQUFNLEtBQUtkLE9BQU9pQixVQUFVO0lBQ3hELEtBQUtDLFNBQVNILE1BQU07RUFDeEI7RUFNQUcsU0FBU0gsUUFBUTtJQUNiLE1BQU1iLGFBQWEsVUFBVWEsTUFBTTtFQUN2QztFQU1BUCxRQUFRVyxTQUFTO0lBQ2IsS0FBS2YsYUFBYTtJQUNsQixNQUFNRixhQUFhLFNBQVNpQixPQUFPO0VBQ3ZDO0VBTUFDLE1BQU1DLFNBQVMsQ0FBRTtBQUNyQjs7O0FDL0dBLElBQU1DLFdBQVcsbUVBQW1FQyxNQUFNLEVBQUU7RUFBR3RDLFNBQVM7RUFBSXVDLE1BQU0sQ0FBQztBQUNuSCxJQUFJQyxPQUFPO0VBQUd2QyxJQUFJO0VBQUd3QztBQVFkLFNBQVNDLE9BQU9DLEtBQUs7RUFDeEIsSUFBSUMsVUFBVTtFQUNkLEdBQUc7SUFDQ0EsVUFBVVAsU0FBU00sTUFBTTNDLFVBQVU0QztJQUNuQ0QsTUFBTWhELEtBQUtrRCxNQUFNRixNQUFNM0MsTUFBTTtFQUNqQyxTQUFTMkMsTUFBTTtFQUNmLE9BQU9DO0FBQ1g7QUFRTyxTQUFTRSxPQUFPaEQsS0FBSztFQUN4QixJQUFJaUQsVUFBVTtFQUNkLEtBQUs5QyxJQUFJLEdBQUdBLElBQUlILElBQUlFLFFBQVFDLEtBQUs7SUFDN0I4QyxVQUFVQSxVQUFVL0MsU0FBU3VDLElBQUl6QyxJQUFJa0QsT0FBTy9DLENBQUM7RUFDakQ7RUFDQSxPQUFPOEM7QUFDWDtBQU9PLFNBQVNFLFFBQVE7RUFDcEIsTUFBTUMsTUFBTVIsT0FBTyxDQUFDLElBQUlTLE1BQU07RUFDOUIsSUFBSUQsUUFBUVQsTUFDUixPQUFPRCxPQUFPLEdBQUdDLE9BQU9TO0VBQzVCLE9BQU9BLE1BQU0sTUFBTVIsT0FBT0YsTUFBTTtBQUNwQztBQUlBLE9BQU92QyxJQUFJRCxRQUFRQyxLQUNmc0MsSUFBSUYsU0FBU3BDLE1BQU1BOzs7QUN6Q2hCLFNBQVN5QyxRQUFPakUsS0FBSztFQUN4QixJQUFJcUIsTUFBTTtFQUNWLFNBQVNHLE1BQUt4QixLQUFLO0lBQ2YsSUFBSUEsSUFBSUssZUFBZW1CLEVBQUMsR0FBRztNQUN2QixJQUFJSCxJQUFJRSxRQUNKRixPQUFPO01BQ1hBLE9BQU9zRCxtQkFBbUJuRCxFQUFDLElBQUksTUFBTW1ELG1CQUFtQjNFLElBQUl3QixHQUFFO0lBQ2xFO0VBQ0o7RUFDQSxPQUFPSDtBQUNYO0FBT08sU0FBU2dELFFBQU9PLElBQUk7RUFDdkIsSUFBSUMsTUFBTSxDQUFDO0VBQ1gsSUFBSUMsUUFBUUYsR0FBR2YsTUFBTSxHQUFHO0VBQ3hCLFNBQVNyQyxLQUFJLEdBQUdDLElBQUlxRCxNQUFNdkQsUUFBUUMsS0FBSUMsR0FBR0QsTUFBSztJQUMxQyxJQUFJdUQsT0FBT0QsTUFBTXRELElBQUdxQyxNQUFNLEdBQUc7SUFDN0JnQixJQUFJRyxtQkFBbUJELEtBQUssRUFBRSxLQUFLQyxtQkFBbUJELEtBQUssRUFBRTtFQUNqRTtFQUNBLE9BQU9GO0FBQ1g7OztBQ2hDQSxJQUFJSSxRQUFRO0FBQ1osSUFBSTtFQUNBQSxRQUFRLE9BQU9DLG1CQUFtQixlQUM5QixxQkFBcUIsSUFBSUEsZ0JBQWU7QUFDaEQsU0FDT0MsS0FBUCxDQUdBO0FBQ08sSUFBTUMsVUFBVUg7OztBQ1BoQixTQUFTSSxJQUFJM0UsTUFBTTtFQUN0QixNQUFNNEUsVUFBVTVFLEtBQUs0RTtFQUVyQixJQUFJO0lBQ0EsSUFBSSxnQkFBZ0IsT0FBT0osbUJBQW1CLENBQUNJLFdBQVdGLFVBQVU7TUFDaEUsT0FBTyxJQUFJRixnQkFBZTtJQUM5QjtFQUNKLFNBQ09LLEdBQVAsQ0FBWTtFQUNaLElBQUksQ0FBQ0QsU0FBUztJQUNWLElBQUk7TUFDQSxPQUFPLElBQUkzRixlQUFXLENBQUMsUUFBUSxFQUFFNkYsT0FBTyxRQUFRLEVBQUVDLEtBQUssR0FBRyxHQUFHLG1CQUFtQjtJQUNwRixTQUNPRixHQUFQLENBQVk7RUFDaEI7QUFDSjs7O0FDZkEscUJBQTZDNUQ7QUFFN0MsZ0NBQXdCQTtBQUd4QixTQUFTK0QsUUFBUSxDQUFFO0FBQ25CLElBQU1DLFVBQVcsWUFBWTtFQUN6QixNQUFNQyxNQUFNLElBQUlQLElBQWU7SUFDM0JDLFNBQVM7RUFDYixDQUFDO0VBQ0QsT0FBTyxRQUFRTSxJQUFJQztBQUN2QixHQUFHO0FBQ0ksSUFBTUMsVUFBTixjQUFzQjFHLFVBQVU7RUFPbkMwQyxZQUFZcEIsTUFBTTtJQUNkLE1BQU1BLElBQUk7SUFDVixLQUFLcUYsVUFBVTtJQUNmLElBQUksT0FBT0MsYUFBYSxhQUFhO01BQ2pDLE1BQU1DLFFBQVEsYUFBYUQsU0FBU3hHO01BQ3BDLElBQUkwRyxPQUFPRixTQUFTRTtNQUVwQixJQUFJLENBQUNBLE1BQU07UUFDUEEsT0FBT0QsUUFBUSxRQUFRO01BQzNCO01BQ0EsS0FBS0UsS0FDQSxPQUFPSCxhQUFhLGVBQ2pCdEYsS0FBSzBGLGFBQWFKLFNBQVNJLFlBQzNCRixTQUFTeEYsS0FBS3dGO01BQ3RCLEtBQUtHLEtBQUszRixLQUFLNEYsV0FBV0w7SUFDOUI7SUFJQSxNQUFNTSxjQUFjN0YsUUFBUUEsS0FBSzZGO0lBQ2pDLEtBQUtDLGlCQUFpQmIsV0FBVyxDQUFDWTtFQUN0QztFQUNBLElBQUlFLE9BQU87SUFDUCxPQUFPO0VBQ1g7RUFPQTlELFNBQVM7SUFDTCxLQUFLK0QsTUFBSztFQUNkO0VBT0FoRCxNQUFNQyxTQUFTO0lBQ1gsS0FBS2pCLGFBQWE7SUFDbEIsTUFBTWdCLFFBQVEsTUFBTTtNQUNoQixLQUFLaEIsYUFBYTtNQUNsQmlCLFNBQVE7SUFDWjtJQUNBLElBQUksS0FBS29DLFdBQVcsQ0FBQyxLQUFLM0QsVUFBVTtNQUNoQyxJQUFJdUUsUUFBUTtNQUNaLElBQUksS0FBS1osU0FBUztRQUNkWTtRQUNBLEtBQUtDLEtBQUssZ0JBQWdCLFlBQVk7VUFDbEMsRUFBRUQsU0FBU2pELE9BQU07UUFDckIsQ0FBQztNQUNMO01BQ0EsSUFBSSxDQUFDLEtBQUt0QixVQUFVO1FBQ2hCdUU7UUFDQSxLQUFLQyxLQUFLLFNBQVMsWUFBWTtVQUMzQixFQUFFRCxTQUFTakQsT0FBTTtRQUNyQixDQUFDO01BQ0w7SUFDSixPQUNLO01BQ0RBLE9BQU07SUFDVjtFQUNKO0VBTUFnRCxPQUFPO0lBQ0gsS0FBS1gsVUFBVTtJQUNmLEtBQUtjLFFBQU87SUFDWixLQUFLckUsYUFBYSxNQUFNO0VBQzVCO0VBTUFXLE9BQU9DLE1BQU07SUFDVCxNQUFNMEQsV0FBWXpELFVBQVc7TUFFekIsSUFBSSxjQUFjLEtBQUtYLGNBQWNXLE9BQU9uQixTQUFTLFFBQVE7UUFDekQsS0FBS2dCLFFBQU87TUFDaEI7TUFFQSxJQUFJLFlBQVlHLE9BQU9uQixNQUFNO1FBQ3pCLEtBQUtZLFFBQVE7VUFBRWQsYUFBYTtRQUFpQyxDQUFDO1FBQzlELE9BQU87TUFDWDtNQUVBLEtBQUt3QixTQUFTSCxNQUFNO0lBQ3hCO0lBRUEsa0NBQWNELE1BQU0sS0FBS2QsT0FBT2lCLFVBQVUsRUFBRXdELFFBQVFELFFBQVE7SUFFNUQsSUFBSSxhQUFhLEtBQUtwRSxZQUFZO01BRTlCLEtBQUtxRCxVQUFVO01BQ2YsS0FBS3ZELGFBQWEsY0FBYztNQUNoQyxJQUFJLFdBQVcsS0FBS0UsWUFBWTtRQUM1QixLQUFLZ0UsTUFBSztNQUNkLE9BQ0ssQ0FDTDtJQUNKO0VBQ0o7RUFNQTdELFVBQVU7SUFDTixNQUFNRCxRQUFRLE1BQU07TUFDaEIsS0FBS0ssTUFBTSxDQUFDO1FBQUVmLE1BQU07TUFBUSxDQUFDLENBQUM7SUFDbEM7SUFDQSxJQUFJLFdBQVcsS0FBS1EsWUFBWTtNQUM1QkUsT0FBTTtJQUNWLE9BQ0s7TUFHRCxLQUFLZ0UsS0FBSyxRQUFRaEUsS0FBSztJQUMzQjtFQUNKO0VBT0FLLE1BQU1ELFNBQVM7SUFDWCxLQUFLWixXQUFXO0lBQ2hCLGtDQUFjWSxTQUFVSSxRQUFTO01BQzdCLEtBQUs0RCxRQUFRNUQsTUFBTSxNQUFNO1FBQ3JCLEtBQUtoQixXQUFXO1FBQ2hCLEtBQUtJLGFBQWEsT0FBTztNQUM3QixDQUFDO0lBQ0wsQ0FBQztFQUNMO0VBTUF5RSxNQUFNO0lBQ0YsSUFBSTVFLFFBQVEsS0FBS0EsU0FBUyxDQUFDO0lBQzNCLE1BQU02RSxTQUFTLEtBQUt4RyxLQUFLNEYsU0FBUyxVQUFVO0lBQzVDLElBQUlKLE9BQU87SUFFWCxJQUFJLFVBQVUsS0FBS3hGLEtBQUt5RyxtQkFBbUI7TUFDdkM5RSxNQUFNLEtBQUszQixLQUFLMEcsa0JBQWtCNUMsT0FBTTtJQUM1QztJQUNBLElBQUksQ0FBQyxLQUFLZ0Msa0JBQWtCLENBQUNuRSxNQUFNZ0YsS0FBSztNQUNwQ2hGLE1BQU1pRixNQUFNO0lBQ2hCO0lBRUEsSUFBSSxLQUFLNUcsS0FBS3dGLFNBQ1IsWUFBWWdCLFVBQVVLLE9BQU8sS0FBSzdHLEtBQUt3RixJQUFJLE1BQU0sT0FDOUMsV0FBV2dCLFVBQVVLLE9BQU8sS0FBSzdHLEtBQUt3RixJQUFJLE1BQU0sS0FBTTtNQUMzREEsT0FBTyxNQUFNLEtBQUt4RixLQUFLd0Y7SUFDM0I7SUFDQSxNQUFNc0IsZUFBZXZELFFBQU81QixLQUFLO0lBQ2pDLE1BQU1vRixPQUFPLEtBQUsvRyxLQUFLMEYsU0FBU3NCLFFBQVEsR0FBRyxNQUFNO0lBQ2pELE9BQVFSLFNBQ0osU0FDQ08sT0FBTyxNQUFNLEtBQUsvRyxLQUFLMEYsV0FBVyxNQUFNLEtBQUsxRixLQUFLMEYsWUFDbkRGLE9BQ0EsS0FBS3hGLEtBQUtpSCxRQUNUSCxhQUFhakcsU0FBUyxNQUFNaUcsZUFBZTtFQUNwRDtFQU9BSSxRQUFRbEgsT0FBTyxDQUFDLEdBQUc7SUFDZm1ILE9BQU9DLE9BQU9wSCxNQUFNO01BQUV5RixJQUFJLEtBQUtBO01BQUlFLElBQUksS0FBS0E7SUFBRyxHQUFHLEtBQUszRixJQUFJO0lBQzNELE9BQU8sSUFBSXFILFFBQVEsS0FBS2QsS0FBSSxFQUFHdkcsSUFBSTtFQUN2QztFQVFBc0csUUFBUTVELE1BQU00RSxJQUFJO0lBQ2QsTUFBTUMsTUFBTSxLQUFLTCxRQUFRO01BQ3JCTSxRQUFRO01BQ1I5RTtJQUNKLENBQUM7SUFDRDZFLElBQUlFLEdBQUcsV0FBV0gsRUFBRTtJQUNwQkMsSUFBSUUsR0FBRyxTQUFTLENBQUNDLFdBQVduRyxZQUFZO01BQ3BDLEtBQUtNLFFBQVEsa0JBQWtCNkYsV0FBV25HLE9BQU87SUFDckQsQ0FBQztFQUNMO0VBTUE0RSxTQUFTO0lBQ0wsTUFBTW9CLE1BQU0sS0FBS0wsU0FBUTtJQUN6QkssSUFBSUUsR0FBRyxRQUFRLEtBQUtoRixPQUFPdEMsS0FBSyxJQUFJLENBQUM7SUFDckNvSCxJQUFJRSxHQUFHLFNBQVMsQ0FBQ0MsV0FBV25HLFlBQVk7TUFDcEMsS0FBS00sUUFBUSxrQkFBa0I2RixXQUFXbkcsT0FBTztJQUNyRCxDQUFDO0lBQ0QsS0FBS29HLFVBQVVKO0VBQ25CO0FBQ0o7QUFDTyxJQUFNRixVQUFOLGNBQXNCTyxrQ0FBUTtFQU9qQ3hHLFlBQVltRixLQUFLdkcsTUFBTTtJQUNuQixPQUFNO0lBQ05yQixzQkFBc0IsTUFBTXFCLElBQUk7SUFDaEMsS0FBS0EsT0FBT0E7SUFDWixLQUFLd0gsU0FBU3hILEtBQUt3SCxVQUFVO0lBQzdCLEtBQUtqQixNQUFNQTtJQUNYLEtBQUtzQixRQUFRLFVBQVU3SCxLQUFLNkg7SUFDNUIsS0FBS25GLE9BQU8sV0FBYzFDLEtBQUswQyxPQUFPMUMsS0FBSzBDLE9BQU87SUFDbEQsS0FBS29GLFFBQU87RUFDaEI7RUFNQUEsU0FBUztJQUNMLE1BQU05SCxPQUFPWCxLQUFLLEtBQUtXLE1BQU0sU0FBUyxPQUFPLE9BQU8sY0FBYyxRQUFRLE1BQU0sV0FBVyxzQkFBc0IsV0FBVztJQUM1SEEsS0FBSzRFLFVBQVUsQ0FBQyxDQUFDLEtBQUs1RSxLQUFLeUY7SUFDM0J6RixLQUFLK0gsVUFBVSxDQUFDLENBQUMsS0FBSy9ILEtBQUsyRjtJQUMzQixNQUFNVCxNQUFPLEtBQUtBLE1BQU0sSUFBSVAsSUFBZTNFLElBQUk7SUFDL0MsSUFBSTtNQUNBa0YsSUFBSW5ELEtBQUssS0FBS3lGLFFBQVEsS0FBS2pCLEtBQUssS0FBS3NCLEtBQUs7TUFDMUMsSUFBSTtRQUNBLElBQUksS0FBSzdILEtBQUtnSSxjQUFjO1VBQ3hCOUMsSUFBSStDLHlCQUF5Qi9DLElBQUkrQyxzQkFBc0IsSUFBSTtVQUMzRCxTQUFTbkgsTUFBSyxLQUFLZCxLQUFLZ0ksY0FBYztZQUNsQyxJQUFJLEtBQUtoSSxLQUFLZ0ksYUFBYXJJLGVBQWVtQixFQUFDLEdBQUc7Y0FDMUNvRSxJQUFJZ0QsaUJBQWlCcEgsSUFBRyxLQUFLZCxLQUFLZ0ksYUFBYWxILEdBQUU7WUFDckQ7VUFDSjtRQUNKO01BQ0osU0FDTytELEdBQVAsQ0FBWTtNQUNaLElBQUksV0FBVyxLQUFLMkMsUUFBUTtRQUN4QixJQUFJO1VBQ0F0QyxJQUFJZ0QsaUJBQWlCLGdCQUFnQiwwQkFBMEI7UUFDbkUsU0FDT3JELEdBQVAsQ0FBWTtNQUNoQjtNQUNBLElBQUk7UUFDQUssSUFBSWdELGlCQUFpQixVQUFVLEtBQUs7TUFDeEMsU0FDT3JELEdBQVAsQ0FBWTtNQUVaLElBQUkscUJBQXFCSyxLQUFLO1FBQzFCQSxJQUFJaUQsa0JBQWtCLEtBQUtuSSxLQUFLbUk7TUFDcEM7TUFDQSxJQUFJLEtBQUtuSSxLQUFLb0ksZ0JBQWdCO1FBQzFCbEQsSUFBSW1ELFVBQVUsS0FBS3JJLEtBQUtvSTtNQUM1QjtNQUNBbEQsSUFBSW9ELHFCQUFxQixNQUFNO1FBQzNCLElBQUksTUFBTXBELElBQUlsRCxZQUNWO1FBQ0osSUFBSSxRQUFRa0QsSUFBSXFELFVBQVUsU0FBU3JELElBQUlxRCxRQUFRO1VBQzNDLEtBQUtDLFFBQU87UUFDaEIsT0FDSztVQUdELEtBQUt0SSxhQUFhLE1BQU07WUFDcEIsS0FBSzJCLFFBQVEsT0FBT3FELElBQUlxRCxXQUFXLFdBQVdyRCxJQUFJcUQsU0FBUyxDQUFDO1VBQ2hFLEdBQUcsQ0FBQztRQUNSO01BQ0o7TUFDQXJELElBQUk3QyxLQUFLLEtBQUtLLElBQUk7SUFDdEIsU0FDT21DLEdBQVA7TUFJSSxLQUFLM0UsYUFBYSxNQUFNO1FBQ3BCLEtBQUsyQixRQUFRZ0QsQ0FBQztNQUNsQixHQUFHLENBQUM7TUFDSjtJQUNKO0lBQ0EsSUFBSSxPQUFPNEQsYUFBYSxhQUFhO01BQ2pDLEtBQUtDLFFBQVFyQixRQUFRc0I7TUFDckJ0QixRQUFRdUIsU0FBUyxLQUFLRixTQUFTO0lBQ25DO0VBQ0o7RUFNQTdHLFFBQVE0QyxLQUFLO0lBQ1QsS0FBSzNDLGFBQWEsU0FBUzJDLEtBQUssS0FBS1MsR0FBRztJQUN4QyxLQUFLMkQsUUFBUSxJQUFJO0VBQ3JCO0VBTUFBLFFBQVFDLFdBQVc7SUFDZixJQUFJLGdCQUFnQixPQUFPLEtBQUs1RCxPQUFPLFNBQVMsS0FBS0EsS0FBSztNQUN0RDtJQUNKO0lBQ0EsS0FBS0EsSUFBSW9ELHFCQUFxQnREO0lBQzlCLElBQUk4RCxXQUFXO01BQ1gsSUFBSTtRQUNBLEtBQUs1RCxJQUFJNkQsT0FBTTtNQUNuQixTQUNPbEUsR0FBUCxDQUFZO0lBQ2hCO0lBQ0EsSUFBSSxPQUFPNEQsYUFBYSxhQUFhO01BQ2pDLE9BQU9wQixRQUFRdUIsU0FBUyxLQUFLRjtJQUNqQztJQUNBLEtBQUt4RCxNQUFNO0VBQ2Y7RUFNQXNELFNBQVM7SUFDTCxNQUFNOUYsT0FBTyxLQUFLd0MsSUFBSThEO0lBQ3RCLElBQUl0RyxTQUFTLE1BQU07TUFDZixLQUFLWixhQUFhLFFBQVFZLElBQUk7TUFDOUIsS0FBS1osYUFBYSxTQUFTO01BQzNCLEtBQUsrRyxTQUFRO0lBQ2pCO0VBQ0o7RUFNQUUsUUFBUTtJQUNKLEtBQUtGLFNBQVE7RUFDakI7QUFDSjtBQUNBeEIsUUFBUXNCLGdCQUFnQjtBQUN4QnRCLFFBQVF1QixXQUFXLENBQUM7QUFNcEIsSUFBSSxPQUFPSCxhQUFhLGFBQWE7RUFFakMsSUFBSSxPQUFPUSxnQkFBZ0IsWUFBWTtJQUVuQ0EsWUFBWSxZQUFZQyxhQUFhO0VBQ3pDLFdBQ1MsT0FBT0MscUJBQXFCLFlBQVk7SUFDN0MsTUFBTUMsbUJBQW1CLGdCQUFnQm5LLGlCQUFhLGFBQWE7SUFDbkVrSyxpQkFBaUJDLGtCQUFrQkYsZUFBZSxLQUFLO0VBQzNEO0FBQ0o7QUFDQSxTQUFTQSxnQkFBZ0I7RUFDckIsU0FBU3BJLE1BQUt1RyxRQUFRdUIsVUFBVTtJQUM1QixJQUFJdkIsUUFBUXVCLFNBQVNqSixlQUFlbUIsRUFBQyxHQUFHO01BQ3BDdUcsUUFBUXVCLFNBQVM5SCxJQUFHaUksT0FBTTtJQUM5QjtFQUNKO0FBQ0o7OztBQzdZTyxJQUFNbkssWUFBWSxNQUFNO0VBQzNCLE1BQU15SyxxQkFBcUIsT0FBT0MsWUFBWSxjQUFjLE9BQU9BLFFBQVFDLFlBQVk7RUFDdkYsSUFBSUYsb0JBQW9CO0lBQ3BCLE9BQVFHLE1BQU9GLFFBQVFDLFNBQVEsQ0FBRUUsS0FBS0QsRUFBRTtFQUM1QyxPQUNLO0lBQ0QsT0FBTyxDQUFDQSxJQUFJdEosaUJBQWlCQSxhQUFhc0osSUFBSSxDQUFDO0VBQ25EO0FBQ0osSUFBRztBQUNJLElBQU1FLFlBQVl6SyxlQUFXeUssYUFBYXpLLGVBQVcwSztBQUNyRCxJQUFNQyx3QkFBd0I7QUFDOUIsSUFBTUMsb0JBQW9COzs7QUNQakMscUJBQTZCNUk7QUFFN0IsSUFBTTZJLGdCQUFnQixPQUFPQyxjQUFjLGVBQ3ZDLE9BQU9BLFVBQVVDLFlBQVksWUFDN0JELFVBQVVDLFFBQVFDLGFBQVksS0FBTTtBQUNqQyxJQUFNQyxLQUFOLGNBQWlCeEwsVUFBVTtFQU85QjBDLFlBQVlwQixNQUFNO0lBQ2QsTUFBTUEsSUFBSTtJQUNWLEtBQUs4RixpQkFBaUIsQ0FBQzlGLEtBQUs2RjtFQUNoQztFQUNBLElBQUlFLE9BQU87SUFDUCxPQUFPO0VBQ1g7RUFDQTlELFNBQVM7SUFDTCxJQUFJLENBQUMsS0FBS2tJLE9BQU0sRUFBRztNQUVmO0lBQ0o7SUFDQSxNQUFNNUQsTUFBTSxLQUFLQSxLQUFJO0lBQ3JCLE1BQU02RCxZQUFZLEtBQUtwSyxLQUFLb0s7SUFFNUIsTUFBTXBLLE9BQU84SixnQkFDUCxDQUFDLElBQ0R6SyxLQUFLLEtBQUtXLE1BQU0sU0FBUyxxQkFBcUIsT0FBTyxPQUFPLGNBQWMsUUFBUSxNQUFNLFdBQVcsc0JBQXNCLGdCQUFnQixtQkFBbUIsVUFBVSxjQUFjLFVBQVUscUJBQXFCO0lBQ3pOLElBQUksS0FBS0EsS0FBS2dJLGNBQWM7TUFDeEJoSSxLQUFLcUssVUFBVSxLQUFLckssS0FBS2dJO0lBQzdCO0lBQ0EsSUFBSTtNQUNBLEtBQUtzQyxLQUNEVix5QkFBeUIsQ0FBQ0UsZ0JBQ3BCTSxZQUNJLElBQUlWLFVBQVVuRCxLQUFLNkQsU0FBUyxJQUM1QixJQUFJVixVQUFVbkQsR0FBRyxJQUNyQixJQUFJbUQsVUFBVW5ELEtBQUs2RCxXQUFXcEssSUFBSTtJQUNoRCxTQUNPeUUsS0FBUDtNQUNJLE9BQU8sS0FBSzNDLGFBQWEsU0FBUzJDLEdBQUc7SUFDekM7SUFDQSxLQUFLNkYsR0FBR3pILGFBQWEsS0FBS2pCLE9BQU9pQixjQUFjZ0g7SUFDL0MsS0FBS1UsbUJBQWtCO0VBQzNCO0VBTUFBLG9CQUFvQjtJQUNoQixLQUFLRCxHQUFHRSxTQUFTLE1BQU07TUFDbkIsSUFBSSxLQUFLeEssS0FBS3lLLFdBQVc7UUFDckIsS0FBS0gsR0FBR0ksUUFBUUMsT0FBTTtNQUMxQjtNQUNBLEtBQUtuSSxRQUFPO0lBQ2hCO0lBQ0EsS0FBSzhILEdBQUdNLFVBQVdDLGNBQWUsS0FBS3pJLFFBQVE7TUFDM0NkLGFBQWE7TUFDYkMsU0FBU3NKO0lBQ2IsQ0FBQztJQUNELEtBQUtQLEdBQUdRLFlBQWFDLE1BQU8sS0FBS3RJLE9BQU9zSSxHQUFHckksSUFBSTtJQUMvQyxLQUFLNEgsR0FBR1UsVUFBV25HLEtBQU0sS0FBS2hELFFBQVEsbUJBQW1CZ0QsQ0FBQztFQUM5RDtFQUNBdEMsTUFBTUQsU0FBUztJQUNYLEtBQUtaLFdBQVc7SUFHaEIsU0FBU1osS0FBSSxHQUFHQSxLQUFJd0IsUUFBUXpCLFFBQVFDLE1BQUs7TUFDckMsTUFBTTZCLFNBQVNMLFFBQVF4QjtNQUN2QixNQUFNbUssYUFBYW5LLE9BQU13QixRQUFRekIsU0FBUztNQUMxQyxpQ0FBYThCLFFBQVEsS0FBS21ELGdCQUFpQnBELFFBQVM7UUFFaEQsTUFBTTFDLE9BQU8sQ0FBQztRQUNkLElBQUksQ0FBQzRKLHVCQUF1QjtVQUN4QixJQUFJakgsT0FBT3VJLFNBQVM7WUFDaEJsTCxLQUFLbUwsV0FBV3hJLE9BQU91SSxRQUFRQztVQUNuQztVQUNBLElBQUksS0FBS25MLEtBQUtvTCxtQkFBbUI7WUFDN0IsTUFBTUMsTUFFTixhQUFhLE9BQU8zSSxPQUFPNEksT0FBT2hMLFdBQVdvQyxJQUFJLElBQUlBLEtBQUs3QjtZQUMxRCxJQUFJd0ssTUFBTSxLQUFLckwsS0FBS29MLGtCQUFrQkcsV0FBVztjQUM3Q3ZMLEtBQUttTCxXQUFXO1lBQ3BCO1VBQ0o7UUFDSjtRQUlBLElBQUk7VUFDQSxJQUFJdkIsdUJBQXVCO1lBRXZCLEtBQUtVLEdBQUdqSSxLQUFLSyxJQUFJO1VBQ3JCLE9BQ0s7WUFDRCxLQUFLNEgsR0FBR2pJLEtBQUtLLE1BQU0xQyxJQUFJO1VBQzNCO1FBQ0osU0FDTzZFLEdBQVAsQ0FDQTtRQUNBLElBQUlvRyxZQUFZO1VBR1pyTSxTQUFTLE1BQU07WUFDWCxLQUFLOEMsV0FBVztZQUNoQixLQUFLSSxhQUFhLE9BQU87VUFDN0IsR0FBRyxLQUFLNUIsWUFBWTtRQUN4QjtNQUNKLENBQUM7SUFDTDtFQUNKO0VBQ0FpQyxVQUFVO0lBQ04sSUFBSSxPQUFPLEtBQUttSSxPQUFPLGFBQWE7TUFDaEMsS0FBS0EsR0FBR3BJLE9BQU07TUFDZCxLQUFLb0ksS0FBSztJQUNkO0VBQ0o7RUFNQS9ELE1BQU07SUFDRixJQUFJNUUsUUFBUSxLQUFLQSxTQUFTLENBQUM7SUFDM0IsTUFBTTZFLFNBQVMsS0FBS3hHLEtBQUs0RixTQUFTLFFBQVE7SUFDMUMsSUFBSUosT0FBTztJQUVYLElBQUksS0FBS3hGLEtBQUt3RixTQUNSLFVBQVVnQixVQUFVSyxPQUFPLEtBQUs3RyxLQUFLd0YsSUFBSSxNQUFNLE9BQzVDLFNBQVNnQixVQUFVSyxPQUFPLEtBQUs3RyxLQUFLd0YsSUFBSSxNQUFNLEtBQU07TUFDekRBLE9BQU8sTUFBTSxLQUFLeEYsS0FBS3dGO0lBQzNCO0lBRUEsSUFBSSxLQUFLeEYsS0FBS3lHLG1CQUFtQjtNQUM3QjlFLE1BQU0sS0FBSzNCLEtBQUswRyxrQkFBa0I1QyxPQUFNO0lBQzVDO0lBRUEsSUFBSSxDQUFDLEtBQUtnQyxnQkFBZ0I7TUFDdEJuRSxNQUFNaUYsTUFBTTtJQUNoQjtJQUNBLE1BQU1FLGVBQWV2RCxRQUFPNUIsS0FBSztJQUNqQyxNQUFNb0YsT0FBTyxLQUFLL0csS0FBSzBGLFNBQVNzQixRQUFRLEdBQUcsTUFBTTtJQUNqRCxPQUFRUixTQUNKLFNBQ0NPLE9BQU8sTUFBTSxLQUFLL0csS0FBSzBGLFdBQVcsTUFBTSxLQUFLMUYsS0FBSzBGLFlBQ25ERixPQUNBLEtBQUt4RixLQUFLaUgsUUFDVEgsYUFBYWpHLFNBQVMsTUFBTWlHLGVBQWU7RUFDcEQ7RUFPQXFELFFBQVE7SUFDSixPQUFPLENBQUMsQ0FBQ1Q7RUFDYjtBQUNKOzs7QUNwS08sSUFBTTNLLGFBQWE7RUFDdEJ5TSxXQUFXdEI7RUFDWDdFLFNBQVNEO0FBQ2I7OztBQ2NBLElBQU1xRyxLQUFLO0FBQ1gsSUFBTUMsUUFBUSxDQUNWLFVBQVUsWUFBWSxhQUFhLFlBQVksUUFBUSxZQUFZLFFBQVEsUUFBUSxZQUFZLFFBQVEsYUFBYSxRQUFRLFNBQVMsU0FDekk7QUFDTyxTQUFTN00sTUFBTThCLEtBQUs7RUFDdkIsTUFBTWdMLE1BQU1oTDtJQUFLaUwsSUFBSWpMLElBQUlxRyxRQUFRLEdBQUc7SUFBR25DLElBQUlsRSxJQUFJcUcsUUFBUSxHQUFHO0VBQzFELElBQUk0RSxLQUFLLE1BQU0vRyxLQUFLLElBQUk7SUFDcEJsRSxNQUFNQSxJQUFJa0wsVUFBVSxHQUFHRCxDQUFDLElBQUlqTCxJQUFJa0wsVUFBVUQsR0FBRy9HLENBQUMsRUFBRWlILFFBQVEsTUFBTSxHQUFHLElBQUluTCxJQUFJa0wsVUFBVWhILEdBQUdsRSxJQUFJRSxNQUFNO0VBQ3BHO0VBQ0EsSUFBSWtMLElBQUlOLEdBQUdPLEtBQUtyTCxPQUFPLEVBQUU7SUFBRzRGLE1BQU0sQ0FBQztJQUFHekYsS0FBSTtFQUMxQyxPQUFPQSxNQUFLO0lBQ1J5RixJQUFJbUYsTUFBTTVLLE9BQU1pTCxFQUFFakwsT0FBTTtFQUM1QjtFQUNBLElBQUk4SyxLQUFLLE1BQU0vRyxLQUFLLElBQUk7SUFDcEIwQixJQUFJMEYsU0FBU047SUFDYnBGLElBQUkyRixPQUFPM0YsSUFBSTJGLEtBQUtMLFVBQVUsR0FBR3RGLElBQUkyRixLQUFLckwsU0FBUyxDQUFDLEVBQUVpTCxRQUFRLE1BQU0sR0FBRztJQUN2RXZGLElBQUk0RixZQUFZNUYsSUFBSTRGLFVBQVVMLFFBQVEsS0FBSyxFQUFFLEVBQUVBLFFBQVEsS0FBSyxFQUFFLEVBQUVBLFFBQVEsTUFBTSxHQUFHO0lBQ2pGdkYsSUFBSTZGLFVBQVU7RUFDbEI7RUFDQTdGLElBQUk4RixZQUFZQSxVQUFVOUYsS0FBS0EsSUFBSSxPQUFPO0VBQzFDQSxJQUFJK0YsV0FBV0EsU0FBUy9GLEtBQUtBLElBQUksUUFBUTtFQUN6QyxPQUFPQTtBQUNYO0FBQ0EsU0FBUzhGLFVBQVUvTSxLQUFLMkgsTUFBTTtFQUMxQixNQUFNc0YsT0FBTztJQUFZQyxRQUFRdkYsS0FBSzZFLFFBQVFTLE1BQU0sR0FBRyxFQUFFcEosTUFBTSxHQUFHO0VBQ2xFLElBQUk4RCxLQUFLd0YsTUFBTSxHQUFHLENBQUMsS0FBSyxPQUFPeEYsS0FBS3BHLFdBQVcsR0FBRztJQUM5QzJMLE1BQU1FLE9BQU8sR0FBRyxDQUFDO0VBQ3JCO0VBQ0EsSUFBSXpGLEtBQUt3RixNQUFNLEVBQUUsS0FBSyxLQUFLO0lBQ3ZCRCxNQUFNRSxPQUFPRixNQUFNM0wsU0FBUyxHQUFHLENBQUM7RUFDcEM7RUFDQSxPQUFPMkw7QUFDWDtBQUNBLFNBQVNGLFNBQVMvRixLQUFLNUUsT0FBTztFQUMxQixNQUFNZSxPQUFPLENBQUM7RUFDZGYsTUFBTW1LLFFBQVEsNkJBQTZCLFVBQVVhLElBQUlDLElBQUlDLElBQUk7SUFDN0QsSUFBSUQsSUFBSTtNQUNKbEssS0FBS2tLLE1BQU1DO0lBQ2Y7RUFDSixDQUFDO0VBQ0QsT0FBT25LO0FBQ1g7OztBQ3hEQSxnQ0FBd0J6QjtBQUN4QixxQkFBeUJBO0FBQ2xCLElBQU14QyxTQUFOLGNBQXFCcU8sa0NBQVE7RUFPaEMxTCxZQUFZbUYsS0FBS3ZHLE9BQU8sQ0FBQyxHQUFHO0lBQ3hCLE9BQU07SUFDTixLQUFLK00sY0FBYyxFQUFDO0lBQ3BCLElBQUl4RyxPQUFPLGFBQWEsT0FBT0EsS0FBSztNQUNoQ3ZHLE9BQU91RztNQUNQQSxNQUFNO0lBQ1Y7SUFDQSxJQUFJQSxLQUFLO01BQ0xBLE1BQU0xSCxNQUFNMEgsR0FBRztNQUNmdkcsS0FBSzBGLFdBQVdhLElBQUkyRjtNQUNwQmxNLEtBQUs0RixTQUFTVyxJQUFJekgsYUFBYSxXQUFXeUgsSUFBSXpILGFBQWE7TUFDM0RrQixLQUFLd0YsT0FBT2UsSUFBSWY7TUFDaEIsSUFBSWUsSUFBSTVFLE9BQ0ozQixLQUFLMkIsUUFBUTRFLElBQUk1RTtJQUN6QixXQUNTM0IsS0FBS2tNLE1BQU07TUFDaEJsTSxLQUFLMEYsV0FBVzdHLE1BQU1tQixLQUFLa00sSUFBSSxFQUFFQTtJQUNyQztJQUNBdk4sc0JBQXNCLE1BQU1xQixJQUFJO0lBQ2hDLEtBQUs0RixTQUNELFFBQVE1RixLQUFLNEYsU0FDUDVGLEtBQUs0RixTQUNMLE9BQU9OLGFBQWEsZUFBZSxhQUFhQSxTQUFTeEc7SUFDbkUsSUFBSWtCLEtBQUswRixZQUFZLENBQUMxRixLQUFLd0YsTUFBTTtNQUU3QnhGLEtBQUt3RixPQUFPLEtBQUtJLFNBQVMsUUFBUTtJQUN0QztJQUNBLEtBQUtGLFdBQ0QxRixLQUFLMEYsYUFDQSxPQUFPSixhQUFhLGNBQWNBLFNBQVNJLFdBQVc7SUFDL0QsS0FBS0YsT0FDRHhGLEtBQUt3RixTQUNBLE9BQU9GLGFBQWEsZUFBZUEsU0FBU0UsT0FDdkNGLFNBQVNFLE9BQ1QsS0FBS0ksU0FDRCxRQUNBO0lBQ2xCLEtBQUs3RyxhQUFhaUIsS0FBS2pCLGNBQWMsQ0FBQyxXQUFXLFdBQVc7SUFDNUQsS0FBS2dPLGNBQWMsRUFBQztJQUNwQixLQUFLQyxnQkFBZ0I7SUFDckIsS0FBS2hOLE9BQU9tSCxPQUFPQyxPQUFPO01BQ3RCSCxNQUFNO01BQ05nRyxPQUFPO01BQ1A5RSxpQkFBaUI7TUFDakIrRSxTQUFTO01BQ1R4RyxnQkFBZ0I7TUFDaEJ5RyxpQkFBaUI7TUFDakJDLGtCQUFrQjtNQUNsQkMsb0JBQW9CO01BQ3BCakMsbUJBQW1CO1FBQ2ZHLFdBQVc7TUFDZjtNQUNBK0Isa0JBQWtCLENBQUM7TUFDbkJDLHFCQUFxQjtJQUN6QixHQUFHdk4sSUFBSTtJQUNQLEtBQUtBLEtBQUtpSCxPQUNOLEtBQUtqSCxLQUFLaUgsS0FBSzZFLFFBQVEsT0FBTyxFQUFFLEtBQzNCLEtBQUs5TCxLQUFLb04sbUJBQW1CLE1BQU07SUFDNUMsSUFBSSxPQUFPLEtBQUtwTixLQUFLMkIsVUFBVSxVQUFVO01BQ3JDLEtBQUszQixLQUFLMkIsUUFBUWdDLFFBQU8sS0FBSzNELEtBQUsyQixLQUFLO0lBQzVDO0lBRUEsS0FBSzZMLEtBQUs7SUFDVixLQUFLQyxXQUFXO0lBQ2hCLEtBQUtDLGVBQWU7SUFDcEIsS0FBS0MsY0FBYztJQUVuQixLQUFLQyxtQkFBbUI7SUFDeEIsSUFBSSxPQUFPekUscUJBQXFCLFlBQVk7TUFDeEMsSUFBSSxLQUFLbkosS0FBS3VOLHFCQUFxQjtRQUkvQixLQUFLTSw0QkFBNEIsTUFBTTtVQUNuQyxJQUFJLEtBQUtDLFdBQVc7WUFFaEIsS0FBS0EsVUFBVUMsb0JBQW1CO1lBQ2xDLEtBQUtELFVBQVU1TCxPQUFNO1VBQ3pCO1FBQ0o7UUFDQWlILGlCQUFpQixnQkFBZ0IsS0FBSzBFLDJCQUEyQixLQUFLO01BQzFFO01BQ0EsSUFBSSxLQUFLbkksYUFBYSxhQUFhO1FBQy9CLEtBQUtzSSx1QkFBdUIsTUFBTTtVQUM5QixLQUFLNUwsUUFBUSxtQkFBbUI7WUFDNUJkLGFBQWE7VUFDakIsQ0FBQztRQUNMO1FBQ0E2SCxpQkFBaUIsV0FBVyxLQUFLNkUsc0JBQXNCLEtBQUs7TUFDaEU7SUFDSjtJQUNBLEtBQUtqTSxNQUFLO0VBQ2Q7RUFRQWtNLGdCQUFnQmxJLE1BQU07SUFDbEIsTUFBTXBFLFFBQVF3RixPQUFPQyxPQUFPLENBQUMsR0FBRyxLQUFLcEgsS0FBSzJCLEtBQUs7SUFFL0NBLE1BQU11TSxNQUFNQztJQUVaeE0sTUFBTW1NLFlBQVkvSDtJQUVsQixJQUFJLEtBQUt5SCxJQUNMN0wsTUFBTWdGLE1BQU0sS0FBSzZHO0lBQ3JCLE1BQU14TixPQUFPbUgsT0FBT0MsT0FBTyxDQUFDLEdBQUcsS0FBS3BILEtBQUtzTixpQkFBaUJ2SCxPQUFPLEtBQUsvRixNQUFNO01BQ3hFMkI7TUFDQUMsUUFBUTtNQUNSOEQsVUFBVSxLQUFLQTtNQUNmRSxRQUFRLEtBQUtBO01BQ2JKLE1BQU0sS0FBS0E7SUFDZixDQUFDO0lBQ0QsT0FBTyxJQUFJekcsV0FBV2dILE1BQU0vRixJQUFJO0VBQ3BDO0VBTUErQixPQUFPO0lBQ0gsSUFBSStMO0lBQ0osSUFBSSxLQUFLOU4sS0FBS21OLG1CQUNWMU8sT0FBTzJQLHlCQUNQLEtBQUtyUCxXQUFXaUksUUFBUSxXQUFXLE1BQU0sSUFBSTtNQUM3QzhHLFlBQVk7SUFDaEIsV0FDUyxNQUFNLEtBQUsvTyxXQUFXOEIsUUFBUTtNQUVuQyxLQUFLWCxhQUFhLE1BQU07UUFDcEIsS0FBSzRCLGFBQWEsU0FBUyx5QkFBeUI7TUFDeEQsR0FBRyxDQUFDO01BQ0o7SUFDSixPQUNLO01BQ0RnTSxZQUFZLEtBQUsvTyxXQUFXO0lBQ2hDO0lBQ0EsS0FBS2lELGFBQWE7SUFFbEIsSUFBSTtNQUNBOEwsWUFBWSxLQUFLRyxnQkFBZ0JILFNBQVM7SUFDOUMsU0FDT2pKLEdBQVA7TUFDSSxLQUFLOUYsV0FBV3NQLE9BQU07TUFDdEIsS0FBS3RNLE1BQUs7TUFDVjtJQUNKO0lBQ0ErTCxVQUFVL0wsTUFBSztJQUNmLEtBQUt1TSxhQUFhUixTQUFTO0VBQy9CO0VBTUFRLGFBQWFSLFdBQVc7SUFDcEIsSUFBSSxLQUFLQSxXQUFXO01BQ2hCLEtBQUtBLFVBQVVDLG9CQUFtQjtJQUN0QztJQUVBLEtBQUtELFlBQVlBO0lBRWpCQSxVQUNLckcsR0FBRyxTQUFTLEtBQUs4RyxRQUFRcE8sS0FBSyxJQUFJLENBQUMsRUFDbkNzSCxHQUFHLFVBQVUsS0FBSzNFLFNBQVMzQyxLQUFLLElBQUksQ0FBQyxFQUNyQ3NILEdBQUcsU0FBUyxLQUFLNUYsUUFBUTFCLEtBQUssSUFBSSxDQUFDLEVBQ25Dc0gsR0FBRyxTQUFVcEcsVUFBVyxLQUFLZSxRQUFRLG1CQUFtQmYsTUFBTSxDQUFDO0VBQ3hFO0VBT0FtTixNQUFNekksTUFBTTtJQUNSLElBQUkrSCxZQUFZLEtBQUtHLGdCQUFnQmxJLElBQUk7SUFDekMsSUFBSTBJLFNBQVM7SUFDYmhRLE9BQU8yUCx3QkFBd0I7SUFDL0IsTUFBTU0sa0JBQWtCLE1BQU07TUFDMUIsSUFBSUQsUUFDQTtNQUNKWCxVQUFVekwsS0FBSyxDQUFDO1FBQUViLE1BQU07UUFBUWtCLE1BQU07TUFBUSxDQUFDLENBQUM7TUFDaERvTCxVQUFVNUgsS0FBSyxVQUFXeUksT0FBUTtRQUM5QixJQUFJRixRQUNBO1FBQ0osSUFBSSxXQUFXRSxJQUFJbk4sUUFBUSxZQUFZbU4sSUFBSWpNLE1BQU07VUFDN0MsS0FBS2tNLFlBQVk7VUFDakIsS0FBSzlNLGFBQWEsYUFBYWdNLFNBQVM7VUFDeEMsSUFBSSxDQUFDQSxXQUNEO1VBQ0pyUCxPQUFPMlAsd0JBQXdCLGdCQUFnQk4sVUFBVS9IO1VBQ3pELEtBQUsrSCxVQUFVOUssTUFBTSxNQUFNO1lBQ3ZCLElBQUl5TCxRQUNBO1lBQ0osSUFBSSxhQUFhLEtBQUt6TSxZQUNsQjtZQUNKNkcsU0FBUTtZQUNSLEtBQUt5RixhQUFhUixTQUFTO1lBQzNCQSxVQUFVekwsS0FBSyxDQUFDO2NBQUViLE1BQU07WUFBVSxDQUFDLENBQUM7WUFDcEMsS0FBS00sYUFBYSxXQUFXZ00sU0FBUztZQUN0Q0EsWUFBWTtZQUNaLEtBQUtjLFlBQVk7WUFDakIsS0FBS0MsT0FBTTtVQUNmLENBQUM7UUFDTCxPQUNLO1VBQ0QsTUFBTXBLLE1BQU0sSUFBSXRELE1BQU0sYUFBYTtVQUVuQ3NELElBQUlxSixZQUFZQSxVQUFVL0g7VUFDMUIsS0FBS2pFLGFBQWEsZ0JBQWdCMkMsR0FBRztRQUN6QztNQUNKLENBQUM7SUFDTDtJQUNBLFNBQVNxSyxrQkFBa0I7TUFDdkIsSUFBSUwsUUFDQTtNQUVKQSxTQUFTO01BQ1Q1RixTQUFRO01BQ1JpRixVQUFVNUwsT0FBTTtNQUNoQjRMLFlBQVk7SUFDaEI7SUFFQSxNQUFNOUMsVUFBV3ZHLE9BQVE7TUFDckIsTUFBTXNLLFFBQVEsSUFBSTVOLE1BQU0sa0JBQWtCc0QsR0FBRztNQUU3Q3NLLE1BQU1qQixZQUFZQSxVQUFVL0g7TUFDNUIrSSxpQkFBZ0I7TUFDaEIsS0FBS2hOLGFBQWEsZ0JBQWdCaU4sS0FBSztJQUMzQztJQUNBLFNBQVNDLG1CQUFtQjtNQUN4QmhFLFFBQVEsa0JBQWtCO0lBQzlCO0lBRUEsU0FBU0osVUFBVTtNQUNmSSxRQUFRLGVBQWU7SUFDM0I7SUFFQSxTQUFTaUUsVUFBVUMsSUFBSTtNQUNuQixJQUFJcEIsYUFBYW9CLEdBQUduSixTQUFTK0gsVUFBVS9ILE1BQU07UUFDekMrSSxpQkFBZ0I7TUFDcEI7SUFDSjtJQUVBLE1BQU1qRyxVQUFVLE1BQU07TUFDbEJpRixVQUFVcUIsZUFBZSxRQUFRVCxlQUFlO01BQ2hEWixVQUFVcUIsZUFBZSxTQUFTbkUsT0FBTztNQUN6QzhDLFVBQVVxQixlQUFlLFNBQVNILGdCQUFnQjtNQUNsRCxLQUFLSSxJQUFJLFNBQVN4RSxPQUFPO01BQ3pCLEtBQUt3RSxJQUFJLGFBQWFILFNBQVM7SUFDbkM7SUFDQW5CLFVBQVU1SCxLQUFLLFFBQVF3SSxlQUFlO0lBQ3RDWixVQUFVNUgsS0FBSyxTQUFTOEUsT0FBTztJQUMvQjhDLFVBQVU1SCxLQUFLLFNBQVM4SSxnQkFBZ0I7SUFDeEMsS0FBSzlJLEtBQUssU0FBUzBFLE9BQU87SUFDMUIsS0FBSzFFLEtBQUssYUFBYStJLFNBQVM7SUFDaENuQixVQUFVL0wsTUFBSztFQUNuQjtFQU1BUyxTQUFTO0lBQ0wsS0FBS1IsYUFBYTtJQUNsQnZELE9BQU8yUCx3QkFBd0IsZ0JBQWdCLEtBQUtOLFVBQVUvSDtJQUM5RCxLQUFLakUsYUFBYSxNQUFNO0lBQ3hCLEtBQUsrTSxPQUFNO0lBR1gsSUFBSSxXQUFXLEtBQUs3TSxjQUFjLEtBQUtoQyxLQUFLa04sU0FBUztNQUNqRCxJQUFJcE0sS0FBSTtNQUNSLE1BQU1DLElBQUksS0FBSzBNLFNBQVM1TTtNQUN4QixPQUFPQyxLQUFJQyxHQUFHRCxNQUFLO1FBQ2YsS0FBSzBOLE1BQU0sS0FBS2YsU0FBUzNNLEdBQUU7TUFDL0I7SUFDSjtFQUNKO0VBTUFnQyxTQUFTSCxRQUFRO0lBQ2IsSUFBSSxjQUFjLEtBQUtYLGNBQ25CLFdBQVcsS0FBS0EsY0FDaEIsY0FBYyxLQUFLQSxZQUFZO01BQy9CLEtBQUtGLGFBQWEsVUFBVWEsTUFBTTtNQUVsQyxLQUFLYixhQUFhLFdBQVc7TUFDN0IsUUFBUWEsT0FBT25CO1FBQUEsS0FDTjtVQUNELEtBQUs2TixZQUFZQyxLQUFLelEsTUFBTThELE9BQU9ELElBQUksQ0FBQztVQUN4QztRQUFBLEtBQ0M7VUFDRCxLQUFLNk0sa0JBQWlCO1VBQ3RCLEtBQUtDLFdBQVcsTUFBTTtVQUN0QixLQUFLMU4sYUFBYSxNQUFNO1VBQ3hCLEtBQUtBLGFBQWEsTUFBTTtVQUN4QjtRQUFBLEtBQ0M7VUFDRCxNQUFNMkMsTUFBTSxJQUFJdEQsTUFBTSxjQUFjO1VBRXBDc0QsSUFBSWdMLE9BQU85TSxPQUFPRDtVQUNsQixLQUFLYixRQUFRNEMsR0FBRztVQUNoQjtRQUFBLEtBQ0M7VUFDRCxLQUFLM0MsYUFBYSxRQUFRYSxPQUFPRCxJQUFJO1VBQ3JDLEtBQUtaLGFBQWEsV0FBV2EsT0FBT0QsSUFBSTtVQUN4QztNQUFBO0lBRVosT0FDSyxDQUNMO0VBQ0o7RUFPQTJNLFlBQVkzTSxNQUFNO0lBQ2QsS0FBS1osYUFBYSxhQUFhWSxJQUFJO0lBQ25DLEtBQUs4SyxLQUFLOUssS0FBS2lFO0lBQ2YsS0FBS21ILFVBQVVuTSxNQUFNZ0YsTUFBTWpFLEtBQUtpRTtJQUNoQyxLQUFLOEcsV0FBVyxLQUFLaUMsZUFBZWhOLEtBQUsrSyxRQUFRO0lBQ2pELEtBQUtDLGVBQWVoTCxLQUFLZ0w7SUFDekIsS0FBS0MsY0FBY2pMLEtBQUtpTDtJQUN4QixLQUFLZ0MsYUFBYWpOLEtBQUtpTjtJQUN2QixLQUFLbk4sUUFBTztJQUVaLElBQUksYUFBYSxLQUFLUixZQUNsQjtJQUNKLEtBQUt1TixrQkFBaUI7RUFDMUI7RUFNQUEsbUJBQW1CO0lBQ2YsS0FBS25QLGVBQWUsS0FBS3dOLGdCQUFnQjtJQUN6QyxLQUFLQSxtQkFBbUIsS0FBSzFOLGFBQWEsTUFBTTtNQUM1QyxLQUFLa0MsUUFBUSxjQUFjO0lBQy9CLEdBQUcsS0FBS3NMLGVBQWUsS0FBS0MsV0FBVztJQUN2QyxJQUFJLEtBQUszTixLQUFLeUssV0FBVztNQUNyQixLQUFLbUQsaUJBQWlCakQsT0FBTTtJQUNoQztFQUNKO0VBTUE0RCxVQUFVO0lBQ04sS0FBS3hCLFlBQVlMLE9BQU8sR0FBRyxLQUFLTSxhQUFhO0lBSTdDLEtBQUtBLGdCQUFnQjtJQUNyQixJQUFJLE1BQU0sS0FBS0QsWUFBWWxNLFFBQVE7TUFDL0IsS0FBS2lCLGFBQWEsT0FBTztJQUM3QixPQUNLO01BQ0QsS0FBSytNLE9BQU07SUFDZjtFQUNKO0VBTUFBLFFBQVE7SUFDSixJQUFJLGFBQWEsS0FBSzdNLGNBQ2xCLEtBQUs4TCxVQUFVcE0sWUFDZixDQUFDLEtBQUtrTixhQUNOLEtBQUs3QixZQUFZbE0sUUFBUTtNQUN6QixNQUFNeUIsVUFBVSxLQUFLc04sb0JBQW1CO01BQ3hDLEtBQUs5QixVQUFVekwsS0FBS0MsT0FBTztNQUczQixLQUFLMEssZ0JBQWdCMUssUUFBUXpCO01BQzdCLEtBQUtpQixhQUFhLE9BQU87SUFDN0I7RUFDSjtFQU9BOE4scUJBQXFCO0lBQ2pCLE1BQU1DLHlCQUF5QixLQUFLRixjQUNoQyxLQUFLN0IsVUFBVS9ILFNBQVMsYUFDeEIsS0FBS2dILFlBQVlsTSxTQUFTO0lBQzlCLElBQUksQ0FBQ2dQLHdCQUF3QjtNQUN6QixPQUFPLEtBQUs5QztJQUNoQjtJQUNBLElBQUkrQyxjQUFjO0lBQ2xCLFNBQVNoUCxLQUFJLEdBQUdBLEtBQUksS0FBS2lNLFlBQVlsTSxRQUFRQyxNQUFLO01BQzlDLE1BQU00QixPQUFPLEtBQUtxSyxZQUFZak0sSUFBRzRCO01BQ2pDLElBQUlBLE1BQU07UUFDTm9OLGVBQWV4UCxXQUFXb0MsSUFBSTtNQUNsQztNQUNBLElBQUk1QixLQUFJLEtBQUtnUCxjQUFjLEtBQUtILFlBQVk7UUFDeEMsT0FBTyxLQUFLNUMsWUFBWU4sTUFBTSxHQUFHM0wsRUFBQztNQUN0QztNQUNBZ1AsZUFBZTtJQUNuQjtJQUNBLE9BQU8sS0FBSy9DO0VBQ2hCO0VBU0F4SyxNQUFNb00sS0FBS3pELFNBQVM1RCxJQUFJO0lBQ3BCLEtBQUtrSSxXQUFXLFdBQVdiLEtBQUt6RCxTQUFTNUQsRUFBRTtJQUMzQyxPQUFPO0VBQ1g7RUFDQWpGLEtBQUtzTSxLQUFLekQsU0FBUzVELElBQUk7SUFDbkIsS0FBS2tJLFdBQVcsV0FBV2IsS0FBS3pELFNBQVM1RCxFQUFFO0lBQzNDLE9BQU87RUFDWDtFQVVBa0ksV0FBV2hPLE1BQU1rQixNQUFNd0ksU0FBUzVELElBQUk7SUFDaEMsSUFBSSxlQUFlLE9BQU81RSxNQUFNO01BQzVCNEUsS0FBSzVFO01BQ0xBLE9BQU87SUFDWDtJQUNBLElBQUksZUFBZSxPQUFPd0ksU0FBUztNQUMvQjVELEtBQUs0RDtNQUNMQSxVQUFVO0lBQ2Q7SUFDQSxJQUFJLGNBQWMsS0FBS2xKLGNBQWMsYUFBYSxLQUFLQSxZQUFZO01BQy9EO0lBQ0o7SUFDQWtKLFVBQVVBLFdBQVcsQ0FBQztJQUN0QkEsUUFBUUMsV0FBVyxVQUFVRCxRQUFRQztJQUNyQyxNQUFNeEksU0FBUztNQUNYbkI7TUFDQWtCO01BQ0F3STtJQUNKO0lBQ0EsS0FBS3BKLGFBQWEsZ0JBQWdCYSxNQUFNO0lBQ3hDLEtBQUtvSyxZQUFZZ0QsS0FBS3BOLE1BQU07SUFDNUIsSUFBSTJFLElBQ0EsS0FBS3BCLEtBQUssU0FBU29CLEVBQUU7SUFDekIsS0FBS3VILE9BQU07RUFDZjtFQUlBM00sUUFBUTtJQUNKLE1BQU1BLFFBQVEsTUFBTTtNQUNoQixLQUFLRSxRQUFRLGNBQWM7TUFDM0IsS0FBSzBMLFVBQVU1TCxPQUFNO0lBQ3pCO0lBQ0EsTUFBTThOLGtCQUFrQixNQUFNO01BQzFCLEtBQUtaLElBQUksV0FBV1ksZUFBZTtNQUNuQyxLQUFLWixJQUFJLGdCQUFnQlksZUFBZTtNQUN4QzlOLE9BQU07SUFDVjtJQUNBLE1BQU0rTixpQkFBaUIsTUFBTTtNQUV6QixLQUFLL0osS0FBSyxXQUFXOEosZUFBZTtNQUNwQyxLQUFLOUosS0FBSyxnQkFBZ0I4SixlQUFlO0lBQzdDO0lBQ0EsSUFBSSxjQUFjLEtBQUtoTyxjQUFjLFdBQVcsS0FBS0EsWUFBWTtNQUM3RCxLQUFLQSxhQUFhO01BQ2xCLElBQUksS0FBSytLLFlBQVlsTSxRQUFRO1FBQ3pCLEtBQUtxRixLQUFLLFNBQVMsTUFBTTtVQUNyQixJQUFJLEtBQUswSSxXQUFXO1lBQ2hCcUIsZ0JBQWU7VUFDbkIsT0FDSztZQUNEL04sT0FBTTtVQUNWO1FBQ0osQ0FBQztNQUNMLFdBQ1MsS0FBSzBNLFdBQVc7UUFDckJxQixnQkFBZTtNQUNuQixPQUNLO1FBQ0QvTixPQUFNO01BQ1Y7SUFDSjtJQUNBLE9BQU87RUFDWDtFQU1BTCxRQUFRNEMsS0FBSztJQUNUaEcsT0FBTzJQLHdCQUF3QjtJQUMvQixLQUFLdE0sYUFBYSxTQUFTMkMsR0FBRztJQUM5QixLQUFLckMsUUFBUSxtQkFBbUJxQyxHQUFHO0VBQ3ZDO0VBTUFyQyxRQUFRZixRQUFRQyxhQUFhO0lBQ3pCLElBQUksY0FBYyxLQUFLVSxjQUNuQixXQUFXLEtBQUtBLGNBQ2hCLGNBQWMsS0FBS0EsWUFBWTtNQUUvQixLQUFLNUIsZUFBZSxLQUFLd04sZ0JBQWdCO01BRXpDLEtBQUtFLFVBQVVDLG1CQUFtQixPQUFPO01BRXpDLEtBQUtELFVBQVU1TCxPQUFNO01BRXJCLEtBQUs0TCxVQUFVQyxvQkFBbUI7TUFDbEMsSUFBSSxPQUFPbUMsd0JBQXdCLFlBQVk7UUFDM0NBLG9CQUFvQixnQkFBZ0IsS0FBS3JDLDJCQUEyQixLQUFLO1FBQ3pFcUMsb0JBQW9CLFdBQVcsS0FBS2xDLHNCQUFzQixLQUFLO01BQ25FO01BRUEsS0FBS2hNLGFBQWE7TUFFbEIsS0FBS3dMLEtBQUs7TUFFVixLQUFLMUwsYUFBYSxTQUFTVCxRQUFRQyxXQUFXO01BRzlDLEtBQUt5TCxjQUFjLEVBQUM7TUFDcEIsS0FBS0MsZ0JBQWdCO0lBQ3pCO0VBQ0o7RUFPQTBDLGVBQWVqQyxVQUFVO0lBQ3JCLE1BQU0wQyxtQkFBbUIsRUFBQztJQUMxQixJQUFJclAsS0FBSTtJQUNSLE1BQU1zUCxJQUFJM0MsU0FBUzVNO0lBQ25CLE9BQU9DLEtBQUlzUCxHQUFHdFAsTUFBSztNQUNmLElBQUksQ0FBQyxLQUFLL0IsV0FBV2lJLFFBQVF5RyxTQUFTM00sR0FBRSxHQUNwQ3FQLGlCQUFpQkosS0FBS3RDLFNBQVMzTSxHQUFFO0lBQ3pDO0lBQ0EsT0FBT3FQO0VBQ1g7QUFDSjtBQUNBMVIsT0FBT0ssV0FBV3FQOzs7QUM5akJYLElBQU1yUCxZQUFXTCxPQUFPSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3ZvaWNlLWdlbml1cy9wcm9qZWN0L291dCJ9
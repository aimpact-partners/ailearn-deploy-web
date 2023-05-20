System.register(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0","engine.io-client@6.4.0","socket.io-parser@4.2.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.4.0"],["socket.io-client","4.6.1"],["socket.io-parser","4.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.6', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep), dep => dependencies.set('engine.io-client@6.4.0', dep), dep => dependencies.set('socket.io-parser@4.2.2', dep)],
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

// .beyond/uimport/socket.io-client.4.6.1.js
var socket_io_client_4_6_1_exports = {};
__export(socket_io_client_4_6_1_exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => socket_io_client_4_6_1_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
});
module.exports = __toCommonJS(socket_io_client_4_6_1_exports);

// node_modules/socket.io-client/build/esm/url.js
var import_engine = require("engine.io-client@6.4.0");
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = (0, import_engine.parse)(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var import_socket = require("socket.io-parser@4.2.2");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect) this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: import_socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  emitWithAck(ev, ...args) {
    const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((resolve, reject) => {
      args.push((arg1, arg2) => {
        if (withErr) {
          return arg1 ? reject(arg1) : resolve(arg2);
        } else {
          return resolve(arg1);
        }
      });
      this.emit(ev, ...args);
    });
  }
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({
        fromQueue: true
      }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  _sendConnectPacket(data) {
    this.packet({
      type: import_socket.PacketType.CONNECT,
      data: this._pid ? Object.assign({
        pid: this._pid,
        offset: this._lastOffset
      }, data) : data
    });
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;
    switch (packet.type) {
      case import_socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case import_socket.PacketType.EVENT:
      case import_socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case import_socket.PacketType.ACK:
      case import_socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case import_socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case import_socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: import_socket.PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({
        type: import_socket.PacketType.DISCONNECT
      });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var import_engine2 = require("engine.io-client@6.4.0");
var parser = __toESM(require("socket.io-parser@4.2.2"), 0);
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
var Manager = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }
  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var import_socket4 = require("socket.io-parser@4.2.2");
var cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
});

// .beyond/uimport/socket.io-client.4.6.1.js
var socket_io_client_4_6_1_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tY2xpZW50LjQuNi4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3VybC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9vbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9iYWNrbzIuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vbWFuYWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIk1hbmFnZXIiLCJTb2NrZXQiLCJjb25uZWN0IiwiZGVmYXVsdCIsImlvIiwicHJvdG9jb2wiLCJtb2R1bGUiLCJyZXF1aXJlIiwidXJsIiwidXJpIiwicGF0aCIsImxvYyIsIm9iaiIsImxvY2F0aW9uIiwiaG9zdCIsImNoYXJBdCIsInRlc3QiLCJpbXBvcnRfZW5naW5lIiwicG9ydCIsImlwdjYiLCJpbmRleE9mIiwiaWQiLCJocmVmIiwib24iLCJldiIsImZuIiwic3ViRGVzdHJveSIsIm9mZiIsIlJFU0VSVkVEX0VWRU5UUyIsIk9iamVjdCIsImZyZWV6ZSIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsIm5zcCIsIm9wdHMiLCJjb25uZWN0ZWQiLCJyZWNvdmVyZWQiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsIl9xdWV1ZSIsIl9xdWV1ZVNlcSIsImlkcyIsImFja3MiLCJmbGFncyIsImF1dGgiLCJfb3B0cyIsImFzc2lnbiIsIl9hdXRvQ29ubmVjdCIsIm9wZW4iLCJkaXNjb25uZWN0ZWQiLCJzdWJFdmVudHMiLCJzdWJzIiwib25vcGVuIiwiYmluZCIsIm9ucGFja2V0Iiwib25lcnJvciIsIm9uY2xvc2UiLCJhY3RpdmUiLCJfcmVhZHlTdGF0ZSIsInNlbmQiLCJhcmdzIiwidW5zaGlmdCIsImVtaXQiLCJhcHBseSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJ0b1N0cmluZyIsInJldHJpZXMiLCJmcm9tUXVldWUiLCJ2b2xhdGlsZSIsIl9hZGRUb1F1ZXVlIiwicGFja2V0IiwidHlwZSIsImltcG9ydF9zb2NrZXQiLCJFVkVOVCIsImRhdGEiLCJvcHRpb25zIiwiY29tcHJlc3MiLCJsZW5ndGgiLCJhY2siLCJwb3AiLCJfcmVnaXN0ZXJBY2tDYWxsYmFjayIsImlzVHJhbnNwb3J0V3JpdGFibGUiLCJlbmdpbmUiLCJ0cmFuc3BvcnQiLCJ3cml0YWJsZSIsImRpc2NhcmRQYWNrZXQiLCJub3RpZnlPdXRnb2luZ0xpc3RlbmVycyIsInB1c2giLCJfYSIsInRpbWVvdXQiLCJhY2tUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0Rm4iLCJpIiwic3BsaWNlIiwiY2FsbCIsImNsZWFyVGltZW91dEZuIiwiZW1pdFdpdGhBY2siLCJ3aXRoRXJyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhcmcxIiwiYXJnMiIsInRyeUNvdW50IiwicGVuZGluZyIsImVyciIsInJlc3BvbnNlQXJncyIsImhhc0Vycm9yIiwic2hpZnQiLCJfZHJhaW5RdWV1ZSIsImZvcmNlIiwiX3BhY2tldCIsIl9zZW5kQ29ubmVjdFBhY2tldCIsIkNPTk5FQ1QiLCJfcGlkIiwicGlkIiwib2Zmc2V0IiwiX2xhc3RPZmZzZXQiLCJlbWl0UmVzZXJ2ZWQiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsInNhbWVOYW1lc3BhY2UiLCJzaWQiLCJvbmNvbm5lY3QiLCJCSU5BUllfRVZFTlQiLCJvbmV2ZW50IiwiQUNLIiwiQklOQVJZX0FDSyIsIm9uYWNrIiwiRElTQ09OTkVDVCIsIm9uZGlzY29ubmVjdCIsIkNPTk5FQ1RfRVJST1IiLCJkZXN0cm95IiwibWVzc2FnZSIsImVtaXRFdmVudCIsIl9hbnlMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJzbGljZSIsImxpc3RlbmVyIiwic2VsZiIsInNlbnQiLCJlbWl0QnVmZmVyZWQiLCJmb3JFYWNoIiwiY2xvc2UiLCJvbkFueSIsInByZXBlbmRBbnkiLCJvZmZBbnkiLCJsaXN0ZW5lcnNBbnkiLCJvbkFueU91dGdvaW5nIiwiX2FueU91dGdvaW5nTGlzdGVuZXJzIiwicHJlcGVuZEFueU91dGdvaW5nIiwib2ZmQW55T3V0Z29pbmciLCJsaXN0ZW5lcnNBbnlPdXRnb2luZyIsIkJhY2tvZmYiLCJtcyIsIm1pbiIsIm1heCIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwicHJvdG90eXBlIiwiZHVyYXRpb24iLCJNYXRoIiwicG93IiwicmFuZCIsInJhbmRvbSIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJfX3RvRVNNIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsIm5zcHMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3BhcnNlciIsInBhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJhdXRvQ29ubmVjdCIsInYiLCJhcmd1bWVudHMiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsImltcG9ydF9lbmdpbmUyIiwic29ja2V0Iiwic2tpcFJlY29ubmVjdCIsIm9wZW5TdWJEZXN0cm95IiwiZXJyb3JTdWIiLCJjbGVhbnVwIiwiYXV0b1VucmVmIiwidW5yZWYiLCJjbGVhclRpbWVvdXQiLCJvbnBpbmciLCJvbmRhdGEiLCJvbmRlY29kZWQiLCJhZGQiLCJlIiwiX2Rlc3Ryb3kiLCJrZXlzIiwiX2Nsb3NlIiwiZW5jb2RlZFBhY2tldHMiLCJlbmNvZGUiLCJ3cml0ZSIsImRlbGF5Iiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiY2FjaGUiLCJsb29rdXAiLCJwYXJzZWQiLCJzb3VyY2UiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJxdWVyeSIsInF1ZXJ5S2V5Iiwic29ja2V0X2lvX2NsaWVudF80XzZfMV9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxvQkFBc0JDO0FBVWYsU0FBU0MsSUFBSUMsS0FBS0MsT0FBTyxJQUFJQyxLQUFLO0VBQ3JDLElBQUlDLE1BQU1IO0VBRVZFLE1BQU1BLE9BQVEsT0FBT0UsYUFBYSxlQUFlQTtFQUNqRCxJQUFJLFFBQVFKLEtBQ1JBLE1BQU1FLElBQUlOLFdBQVcsT0FBT00sSUFBSUc7RUFFcEMsSUFBSSxPQUFPTCxRQUFRLFVBQVU7SUFDekIsSUFBSSxRQUFRQSxJQUFJTSxPQUFPLENBQUMsR0FBRztNQUN2QixJQUFJLFFBQVFOLElBQUlNLE9BQU8sQ0FBQyxHQUFHO1FBQ3ZCTixNQUFNRSxJQUFJTixXQUFXSTtNQUN6QixPQUNLO1FBQ0RBLE1BQU1FLElBQUlHLE9BQU9MO01BQ3JCO0lBQ0o7SUFDQSxJQUFJLENBQUMsc0JBQXNCTyxLQUFLUCxH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
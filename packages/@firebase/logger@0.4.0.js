System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/logger","0.4.0"]]);
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

// .beyond/uimport/temp/@firebase/logger.0.4.0.js
var logger_0_4_0_exports = {};
__export(logger_0_4_0_exports, {
  LogLevel: () => LogLevel,
  Logger: () => Logger,
  setLogLevel: () => setLogLevel,
  setUserLogHandler: () => setUserLogHandler
});
module.exports = __toCommonJS(logger_0_4_0_exports);

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
var instances = [];
var LogLevel;
(function (LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
var defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = new Date().toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
var Logger = class {
  constructor(name) {
    this.name = name;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
};
function setLogLevel(level) {
  instances.forEach(inst => {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  for (const instance of instances) {
    let customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = (instance2, level, ...args) => {
        const message = args.map(arg => {
          if (arg == null) {
            return null;
          } else if (typeof arg === "string") {
            return arg;
          } else if (typeof arg === "number" || typeof arg === "boolean") {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(arg => arg).join(" ");
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance2.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message,
            args,
            type: instance2.name
          });
        }
      };
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9sb2dnZXIuMC40LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2xvZ2dlci9zcmMvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiTG9nTGV2ZWwiLCJMb2dnZXIiLCJzZXRMb2dMZXZlbCIsInNldFVzZXJMb2dIYW5kbGVyIiwibW9kdWxlIiwiaW5zdGFuY2VzIiwibGV2ZWxTdHJpbmdUb0VudW0iLCJERUJVRyIsIlZFUkJPU0UiLCJJTkZPIiwiV0FSTiIsIkVSUk9SIiwiU0lMRU5UIiwiZGVmYXVsdExvZ0xldmVsIiwiQ29uc29sZU1ldGhvZCIsImRlZmF1bHRMb2dIYW5kbGVyIiwiaW5zdGFuY2UiLCJsb2dUeXBlIiwiYXJncyIsImxvZ0xldmVsIiwibm93IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibWV0aG9kIiwiY29uc29sZSIsIm5hbWUiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwiX2xvZ0xldmVsIiwiX2xvZ0hhbmRsZXIiLCJfdXNlckxvZ0hhbmRsZXIiLCJwdXNoIiwidmFsIiwiVHlwZUVycm9yIiwibG9nSGFuZGxlciIsInVzZXJMb2dIYW5kbGVyIiwiZGVidWciLCJsb2ciLCJpbmZvIiwid2FybiIsImVycm9yIiwibGV2ZWwiLCJmb3JFYWNoIiwiaW5zdCIsImxvZ0NhbGxiYWNrIiwib3B0aW9ucyIsImN1c3RvbUxvZ0xldmVsIiwibWVzc2FnZSIsIm1hcCIsImFyZyIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImlnbm9yZWQiLCJmaWx0ZXIiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUN5Q08sSUFBTUMsWUFBc0I7SUFhdkJMO0NBQVosVUFBWUEsV0FB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
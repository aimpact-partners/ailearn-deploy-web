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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9sb2dnZXIuMC40LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2xvZ2dlci9zcmMvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbImxvZ2dlcl8wXzRfMF9leHBvcnRzIiwiX19leHBvcnQiLCJMb2dMZXZlbCIsIkxvZ2dlciIsInNldExvZ0xldmVsIiwic2V0VXNlckxvZ0hhbmRsZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW5zdGFuY2VzIiwiTG9nTGV2ZWwyIiwibGV2ZWxTdHJpbmdUb0VudW0iLCJERUJVRyIsIlZFUkJPU0UiLCJJTkZPIiwiV0FSTiIsIkVSUk9SIiwiU0lMRU5UIiwiZGVmYXVsdExvZ0xldmVsIiwiQ29uc29sZU1ldGhvZCIsImRlZmF1bHRMb2dIYW5kbGVyIiwiaW5zdGFuY2UiLCJsb2dUeXBlIiwiYXJncyIsImxvZ0xldmVsIiwibm93IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwibWV0aG9kIiwiY29uc29sZSIsIm5hbWUiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwiX2xvZ0xldmVsIiwiX2xvZ0hhbmRsZXIiLCJfdXNlckxvZ0hhbmRsZXIiLCJwdXNoIiwidmFsIiwiVHlwZUVycm9yIiwibG9nSGFuZGxlciIsInVzZXJMb2dIYW5kbGVyIiwiZGVidWciLCJsb2ciLCJpbmZvIiwid2FybiIsImVycm9yIiwibGV2ZWwiLCJmb3JFYWNoIiwiaW5zdCIsImxvZ0NhbGxiYWNrIiwib3B0aW9ucyIsImN1c3RvbUxvZ0xldmVsIiwiaW5zdGFuY2UyIiwibWVzc2FnZSIsIm1hcCIsImFyZyIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImlnbm9yZWQiLCJmaWx0ZXIiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFB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QSxJQUFtQixLQUFLQSxlQUFBLENBQWdCLE1BQU1qQyxRQUFBLENBQVNjLEtBQUEsRUFBTyxHQUFHTyxJQUFJO0lBQzFFLEtBQUtXLFdBQUEsQ0FBWSxNQUFNaEMsUUFBQSxDQUFTYyxLQUFBLEVBQU8sR0FBR08sSUFBSTs7QUFFakQ7QUFFSyxTQUFVbkIsWUFBWTBDLEtBQUEsRUFBZ0M7RUFDMURyQyxTQUFBLENBQVVzQyxPQUFBLENBQVFDLElBQUEsSUFBTztJQUN2QkEsSUFBQSxDQUFLNUMsV0FBQSxDQUFZMEMsS0FBSztFQUN4QixDQUFDO0FBQ0g7QUFFZ0IsU0FBQXpDLGtCQUNkNEMsV0FBQSxFQUNBQyxPQUFBLEVBQW9CO0VBRXBCLFdBQVc3QixRQUFBLElBQVlaLFNBQUEsRUFBVztJQUNoQyxJQUFJMEMsY0FBQSxHQUFrQztJQUN0QyxJQUFJRCxPQUFBLElBQVdBLE9BQUEsQ0FBUUosS0FBQSxFQUFPO01BQzVCSyxjQUFBLEdBQWlCeEMsaUJBQUEsQ0FBa0J1QyxPQUFBLENBQVFKLEtBQUE7SUFDNUM7SUFDRCxJQUFJRyxXQUFBLEtBQWdCLE1BQU07TUFDeEI1QixRQUFBLENBQVNtQixjQUFBLEdBQWlCO0lBQzNCLE9BQU07TUFDTG5CLFFBQUEsQ0FBU21CLGNBQUEsR0FBaUIsQ0FDeEJZLFNBQUEsRUFDQU4sS0FBQSxLQUNHdkIsSUFBQSxLQUNEO1FBQ0YsTUFBTThCLE9BQUEsR0FBVTlCLElBQUEsQ0FDYitCLEdBQUEsQ0FBSUMsR0FBQSxJQUFNO1VBQ1QsSUFBSUEsR0FBQSxJQUFPLE1BQU07WUFDZixPQUFPO1VBQ1IsV0FBVSxPQUFPQSxHQUFBLEtBQVEsVUFBVTtZQUNsQyxPQUFPQSxHQUFBO1VBQ1IsV0FBVSxPQUFPQSxHQUFBLEtBQVEsWUFBWSxPQUFPQSxHQUFBLEtBQVEsV0FBVztZQUM5RCxPQUFPQSxHQUFBLENBQUlDLFFBQUEsQ0FBUTtVQUNwQixXQUFVRCxHQUFBLFlBQWV4QixLQUFBLEVBQU87WUFDL0IsT0FBT3dCLEdBQUEsQ0FBSUYsT0FBQTtVQUNaLE9BQU07WUFDTCxJQUFJO2NBQ0YsT0FBT0ksSUFBQSxDQUFLQyxTQUFBLENBQVVILEdBQUc7WUFDMUIsU0FBUUksT0FBQSxFQUFQO2NBQ0EsT0FBTztZQUNSO1VBQ0Y7UUFDSCxDQUFDLEVBQ0FDLE1BQUEsQ0FBT0wsR0FBQSxJQUFPQSxHQUFHLEVBQ2pCTSxJQUFBLENBQUssR0FBRztRQUNYLElBQUlmLEtBQUEsS0FBVUssY0FBQSxhQUFBQSxjQUFBLGNBQUFBLGNBQUEsR0FBa0JDLFNBQUEsQ0FBUzVCLFFBQUEsR0FBVztVQUNsRHlCLFdBQUEsQ0FBWTtZQUNWSCxLQUFBLEVBQU81QyxRQUFBLENBQVM0QyxLQUFBLEVBQU9nQixXQUFBLENBQVc7WUFDbENULE9BQUE7WUFDQTlCLElBQUE7WUFDQXdDLElBQUEsRUFBTVgsU0FBQSxDQUFTdEI7VUFDaEI7UUFDRjtNQUNIO0lBQ0Q7RUFDRjtBQUNIIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWlsZWFybi9vdXQifQ==
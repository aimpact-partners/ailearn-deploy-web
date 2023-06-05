System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive-2@1.0.0/model", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, mediaDevice, __beyond_pkg, hmr;
  _export("mediaDevice", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive2100Model) {
      dependency_1 = _beyondJsReactive2100Model;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["socket.io-client", "4.6.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/main"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive-2/model', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./desktop
      *************************/
      ims.set('./desktop', {
        hash: 2781467735,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopMediaDevice = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _files = require("./files");
          var _input = require("./input");
          var _xhr = require("./xhr");
          class MediaDevice extends _model.ReactiveModel {
            static instance;
            #selector;
            PLATFORM = "DESKTOP";
            #stream;
            #constraints = {};
            #inputFile;
            #files;
            #promise;
            get isReady() {
              return true;
            }
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            async getUserMedia(constraints) {
              if (JSON.stringify(this.#constraints) === JSON.stringify(constraints)) return this.#stream;
              this.#constraints = constraints;
              this.#stream = await navigator.mediaDevices.getUserMedia(constraints);
              return this.#stream;
            }
            async activateCamera(constraints, selector) {
              const stream = await this.getUserMedia(constraints);
              this.#stream = stream;
              selector.srcObject = stream;
              this.#selector = selector;
            }
            static getInstance() {
              if (!MediaDevice.instance) {
                MediaDevice.instance = new MediaDevice();
              }
              return MediaDevice.instance;
            }
            desactivateCamera() {
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#constraints = undefined;
              this.#stream = undefined;
            }
            /**
             *
             * @param options
             * @returns
             */
            async getPicture() {
              const stream = await this.getUserMedia({
                video: true,
                audio: false
              });
              const imageCapture = new globalThis.ImageCapture(stream.getVideoTracks()[0]);
              const blob = await imageCapture.takePhoto();
              this.clean();
              return blob;
            }
            clean() {
              this.#constraints = {};
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#stream = undefined;
            }
            async getVideoStream() {
              return await this.getUserMedia({
                video: true,
                audio: false
              });
            }
            takePicture(options) {}
            openGallery(selector, specs = {}) {}
            upload(url, specs = {}) {
              const form = new FormData();
            }
            setInputFile(input) {
              this.#inputFile = new _input.InputFile(input, this.#files);
              return this.#inputFile;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                console.log(1, collection.entries);
                collection.entries.forEach(item => form.append(name, item));
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                console.log(1, this.#files.entries);
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          const DesktopMediaDevice = MediaDevice.getInstance();
          exports.DesktopMediaDevice = DesktopMediaDevice;
        }
      });

      /******************************
      INTERNAL MODULE: ./file-manager
      ******************************/

      ims.set('./file-manager', {
        hash: 4123506600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getUrl = getUrl;
          var _core = require("@beyond-js/kernel/core");
          let promise;
          /**
           * REturns a valid url of the image loaded
           *
           * @platform mobile
           * @param data
           * @returns
           */
          function getUrl(data) {
            if (promise) return promise;
            promise = new _core.PendingPromise();
            const process = function processFile(entry) {
              entry.file(file => {
                const reader = new FileReader();
                reader.onloadend = a => {
                  promise.resolve(reader.result);
                  promise = undefined;
                };
                reader.readAsDataURL(file);
              });
            };
            globalThis.resolveLocalFileSystemURL(data, process);
            return promise;
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 1998871327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MediaFiles = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive-2/model");
          class MediaFiles extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
            #promise;
            get errors() {
              return this.#errors;
            }
            _total = 0;
            get total() {
              return this._total;
            }
            set total(value) {
              if (value === this._total) return;
              this._total = value;
            }
            _items = new Map();
            get items() {
              return this._items;
            }
            get entries() {
              return [...this._items.values()];
            }
            constructor(parent, specs) {
              super();
              this.#specs = specs;
              this.#type = specs.type ? specs.type : "any";
            }
            FILE_TYPE = Object.freeze({
              document: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain", "application/pdf"],
              image: ["image/png", "image/jpeg", "image/gif"],
              json: ["application/json"],
              zip: ["application/x-zip-compressed"],
              audio: ["audio/mpeg", "audio/ogg", "audio/wav", "audio/webm", "audio/aac", "audio/flac" // FLAC files
              ]
            });

            #onload = event => {
              if (event.target?.removeEventListener) {
                event.target.removeEventListener("load", this.#onload);
              }
              if (this.#specs.onload && typeof this.#specs.onload === "function") {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              file.src = event.target.result;
              this.#processFile(file);
              if (event.target?.removeEventListener) {
                event.target.removeEventListener("onloadend", this.#onloadend);
              }
              this.triggerEvent("file.loaded");
              if (this.#loaded === this._items.size) this.triggerEvent("loadend");
              if (this.#specs.onloadend && typeof this.#specs.onloadend === "function") {
                this.#specs.onload(event);
              }
            };
            #processFile(file) {
              const name = file.name.replace(this.regExp, "");
              file = this._items.get(name);
              this._items.set(name, file);
            }
            #onerror = event => console.error(4, event);
            validate = file => {
              const isValid = !!this.FILE_TYPE[this.#type].find(item => item === file.type);
              if (!isValid) {
                this.#errors.push(file.name.replace(this.regExp, ""));
              }
              return isValid;
            };
            #readFile = async file => {
              if (this.#type !== "any") {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent("error");
                  return;
                }
              }
              const reader = new FileReader();
              reader.onload = event => this.#onload(event);
              reader.onloadend = event => this.#onloadend(event, file);
              reader.onerror = event => this.#onerror(event);
              reader.readAsDataURL(file);
            };
            #validateLoad = () => {
              if (this.#loaded === this._items.size) {}
            };
            clean = () => {
              this._items = new Map();
              this.#loaded = 0;
            };
            /**
             * Read Local files uploaded from an input file
             *
             * @param fileList
             */
            readLocal = async fileList => {
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ""), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
            };
            getMobileUrl(data) {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              const process = entry => {
                entry.file(file => {
                  const reader = new FileReader();
                  reader.onloadend = e => {
                    const imgBlob = new Blob([reader.result], {
                      type: file.type
                    });
                    const name = file.name.replace(this.regExp, "");
                    file.blob = imgBlob;
                    this._items.set(name, file);
                    //returns a valid element to show as image
                    this.#promise.resolve(URL.createObjectURL(imgBlob));
                    this.#promise = undefined;
                  };
                  this._items.set(file.name.replace(this.regExp, ""), file);
                  reader.readAsArrayBuffer(file);
                });
              };
              // cordova file plugin
              globalThis.resolveLocalFileSystemURL(data, process);
              return this.#promise;
            }
          }
          exports.MediaFiles = MediaFiles;
        }
      });

      /**************************
      INTERNAL MODULE: ./i-camera
      **************************/

      ims.set('./i-camera', {
        hash: 1945745868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3083892194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mediaDevice = void 0;
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          let media;
          function getMedia(clean = false) {
            if (clean) media = undefined;
            if (media) return media;
            const types = Object.freeze({
              MOBILE: 0,
              DESKTOP: 1
            });
            const deviceType = globalThis.cordova ? types.MOBILE : types.DESKTOP;
            const models = Object.freeze({
              1: _desktop.DesktopMediaDevice,
              0: _mobile.MobileMediaDevice
            });
            media = models[deviceType];
            return media;
          }
          const /*bundle*/mediaDevice = getMedia();
          exports.mediaDevice = mediaDevice;
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 622872169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputFile = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          class InputFile extends _model.ReactiveModel {
            #input = document.createElement("input");
            #errors;
            #selector;
            #files;
            get files() {
              return this.#files;
            }
            constructor(selector, files, specs = {}) {
              super();
              this.#selector = selector;
              this.#files = files;
              this.#files.on("error", this.getErrors);
              this.#files.on("loadend", this.filesLoaded);
              this.setAttributes(specs);
              if (selector) this.create();
            }
            filesLoaded = () => this.triggerEvent("loadend");
            pictureLoaded = () => this.triggerEvent("pictureLoaded");
            pictureLoading = () => this.triggerEvent("pictureLoading");
            // getErrors = () => (this.#errors = this.files.errors);
            getErrors = () => console.log("error");
            openDialog = () => {
              this.#input.click();
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: "file",
                style: "display:none",
                name: "input_upload",
                ...specs
              };
              for (let prop in attrs) {
                this.#input.setAttribute(prop, attrs[prop]);
              }
            };
            clean = async () => {
              return this.#files.clean();
              // await this.#mobileFiles.clean();
            };

            #onChangeInput = async event => {
              await this.clean();
              const target = event.currentTarget;
              this.#files.total = target.files.length;
              this.#files.readLocal(target.files);
            };
            create() {
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!this.#selector) return;
                this.#selector.addEventListener("click", this.openDialog);
                this.#input.addEventListener("change", this.#onChangeInput);
              };
              this.#selector.after(this.#input);
              addListeners();
            }
          }
          exports.InputFile = InputFile;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 2938605133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./mobile
      ************************/

      ims.set('./mobile', {
        hash: 2940445080,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileMediaDevice = exports.MediaCameraDevice = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _core = require("@beyond-js/kernel/core");
          var _files = require("./files");
          var _xhr = require("./xhr");
          class MediaCameraDevice extends _model.ReactiveModel {
            #source;
            #selector;
            PLATFORM = "MOBILE";
            static instance;
            #files;
            #DEFAULT_OPTIONS = {
              // Some common settings are 20, 50, and 100
              quality: 80,
              destinationType: globalThis.Camera?.DestinationType?.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 1,
              encodingType: globalThis.Camera?.EncodingType.JPEG,
              mediaType: globalThis.Camera?.MediaType.PICTURE,
              allowEdit: false,
              correctOrientation: true
            };
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            #promise;
            get isReady() {
              return !!globalThis.Camera;
            }
            get source() {
              return this.#source;
            }
            #sourceType = 0;
            get sourceType() {
              return this.#sourceType;
            }
            set sourceType(value) {
              if (this.#sourceType === value) return;
              this.#sourceType = value;
            }
            #mediaType = globalThis.Camera?.MediaType.PICTURE; // default
            get mediaType() {
              return this.#mediaType;
            }
            set mediaType(value) {
              if (this.#mediaType === value) return;
              this.#mediaType = value;
            }
            set source(value) {
              this.#source = value;
            }
            onSuccess = async function successCallback(data) {
              const response = await this.#files.getMobileUrl(data);
              this.#promise.resolve(response);
              this.#promise = undefined;
            };
            onFail = message => {
              console.error("Failed because: " + message);
              this.#promise.reject();
              this.#promise = undefined;
            };
            /**
             *
             * @param srcType number 1 = camera, 0 = photolibrary
             * @returns
             */
            setOptions = overwrites => {
              return {
                ...this.#DEFAULT_OPTIONS,
                ...overwrites
              };
            };
            getPicture = options => {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              navigator.camera?.getPicture(response => this.onSuccess(response), this.onFail, this.setOptions(options));
              return this.#promise;
            };
            openGallery(selector) {
              this.#selector = selector;
              return this.getPicture({
                sourceType: 0
              });
            }
            static getInstance() {
              if (!MediaCameraDevice.instance) {
                MediaCameraDevice.instance = new MediaCameraDevice();
              }
              return MediaCameraDevice.instance;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                collection.entries.forEach(item => {
                  form.append(name, item.blob, item.name);
                });
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          exports.MediaCameraDevice = MediaCameraDevice;
          const MobileMediaDevice = MediaCameraDevice.getInstance();
          exports.MobileMediaDevice = MobileMediaDevice;
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 717224029,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          class XHRLoader extends _model.ReactiveModel {
            promise;
            uploaded;
            progress;
            error;
            constructor() {
              super();
              this.promise = undefined;
              this.uploaded = false;
              this.progress = 0;
              this.error = false;
            }
            get uploading() {
              return !!this.promise;
            }
            get isUploaded() {
              return this.uploaded;
            }
            get uploadProgress() {
              return this.progress;
            }
            get hasError() {
              return this.error;
            }
            onProgress(event) {
              if (event.lengthComputable) {
                const percent = Math.round(event.loaded * 100 / event.total);
                this.progress = parseInt(percent.toString());
              }
              this.triggerEvent("change");
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.triggerEvent("change");
              setTimeout(() => {
                this.promise = undefined;
                this.triggerEvent("change");
              }, 100);
            }
            onError(event) {
              console.error("Error uploading picture", event);
              this.error = true;
              this.promise.reject();
              this.triggerEvent("change");
            }
            onAbort() {
              this.promise.resolve(false);
              this.triggerEvent("change");
            }
            async upload(data, url) {
              try {
                const specs = {
                  method: "post",
                  body: data
                };
                return fetch(url, specs);
              } catch (e) {
                console.error("error", e);
              }
            }
            abort() {
              if (this.promise) {
                this.promise.reject();
                this.triggerEvent("change");
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "mediaDevice",
        "name": "mediaDevice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'mediaDevice') && _export("mediaDevice", mediaDevice = require ? require('./index').mediaDevice : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZpbGVzIiwiX2lucHV0IiwiX3hociIsIk1lZGlhRGV2aWNlIiwiUmVhY3RpdmVNb2RlbCIsImluc3RhbmNlIiwic2VsZWN0b3IiLCJQTEFURk9STSIsInN0cmVhbSIsImNvbnN0cmFpbnRzIiwiaW5wdXRGaWxlIiwiZmlsZXMiLCJwcm9taXNlIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwiTWVkaWFGaWxlcyIsImdldFVzZXJNZWRpYSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJhY3RpdmF0ZUNhbWVyYSIsInNyY09iamVjdCIsImdldEluc3RhbmNlIiwiZGVzYWN0aXZhdGVDYW1lcmEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwicmVtb3ZlVHJhY2siLCJ1bmRlZmluZWQiLCJnZXRQaWN0dXJlIiwidmlkZW8iLCJhdWRpbyIsImltYWdlQ2FwdHVyZSIsImdsb2JhbFRoaXMiLCJJbWFnZUNhcHR1cmUiLCJnZXRWaWRlb1RyYWNrcyIsImJsb2IiLCJ0YWtlUGhvdG8iLCJjbGVhbiIsImdldFZpZGVvU3RyZWFtIiwidGFrZVBpY3R1cmUiLCJvcHRpb25zIiwib3BlbkdhbGxlcnkiLCJzcGVjcyIsInVwbG9hZCIsInVybCIsImZvcm0iLCJGb3JtRGF0YSIsInNldElucHV0RmlsZSIsImlucHV0IiwiSW5wdXRGaWxlIiwicHVibGlzaCIsInBhcmFtcyIsImNvbGxlY3Rpb24iLCJuYW1lIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwiZW50cmllcyIsIml0ZW0iLCJhcHBlbmQiLCJwYXJhbSIsImhhc093blByb3BlcnR5IiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJEZXNrdG9wTWVkaWFEZXZpY2UiLCJleHBvcnRzIiwiX2NvcmUiLCJnZXRVcmwiLCJkYXRhIiwiUGVuZGluZ1Byb21pc2UiLCJwcm9jZXNzIiwicHJvY2Vzc0ZpbGUiLCJlbnRyeSIsImZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYSIsInJlc29sdmUiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCIsImxvYWRlZCIsInR5cGUiLCJyZWdFeHAiLCJlcnJvcnMiLCJfdG90YWwiLCJ2YWx1ZSIsIl9pdGVtcyIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwicGFyZW50IiwiRklMRV9UWVBFIiwiT2JqZWN0IiwiZnJlZXplIiwiZG9jdW1lbnQiLCJpbWFnZSIsInppcCIsIm9ubG9hZCIsImV2ZW50IiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIiNvbmxvYWRlbmQiLCJzcmMiLCJ0cmlnZ2VyRXZlbnQiLCJzaXplIiwiI3Byb2Nlc3NGaWxlIiwicmVwbGFjZSIsImdldCIsInNldCIsIm9uZXJyb3IiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwicHVzaCIsInJlYWRGaWxlIiwidmFsaWRhdGVMb2FkIiwiI3ZhbGlkYXRlTG9hZCIsInJlYWRMb2NhbCIsImZpbGVMaXN0IiwicHJvbWlzZXMiLCJpIiwibGVuZ3RoIiwiUHJvbWlzZSIsImFsbCIsImdldE1vYmlsZVVybCIsImUiLCJpbWdCbG9iIiwiQmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlYWRBc0FycmF5QnVmZmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJtZWRpYSIsImdldE1lZGlhIiwidHlwZXMiLCJNT0JJTEUiLCJERVNLVE9QIiwiZGV2aWNlVHlwZSIsImNvcmRvdmEiLCJtb2RlbHMiLCJNb2JpbGVNZWRpYURldmljZSIsIm1lZGlhRGV2aWNlIiwiY3JlYXRlRWxlbWVudCIsIm9uIiwiZ2V0RXJyb3JzIiwiZmlsZXNMb2FkZWQiLCJzZXRBdHRyaWJ1dGVzIiwiY3JlYXRlIiwicGljdHVyZUxvYWRlZCIsInBpY3R1cmVMb2FkaW5nIiwib3BlbkRpYWxvZyIsImNsaWNrIiwiYXR0cnMiLCJzdHlsZSIsInByb3AiLCJzZXRBdHRyaWJ1dGUiLCJvbkNoYW5nZUlucHV0IiwiY3VycmVudFRhcmdldCIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZnRlciIsIk1lZGlhQ2FtZXJhRGV2aWNlIiwic291cmNlIiwiREVGQVVMVF9PUFRJT05TIiwicXVhbGl0eSIsImRlc3RpbmF0aW9uVHlwZSIsIkNhbWVyYSIsIkRlc3RpbmF0aW9uVHlwZSIsIkZJTEVfVVJJIiwic291cmNlVHlwZSIsImVuY29kaW5nVHlwZSIsIkVuY29kaW5nVHlwZSIsIkpQRUciLCJtZWRpYVR5cGUiLCJNZWRpYVR5cGUiLCJQSUNUVVJFIiwiYWxsb3dFZGl0IiwiY29ycmVjdE9yaWVudGF0aW9uIiwib25TdWNjZXNzIiwic3VjY2Vzc0NhbGxiYWNrIiwib25GYWlsIiwibWVzc2FnZSIsInJlamVjdCIsInNldE9wdGlvbnMiLCJvdmVyd3JpdGVzIiwiY2FtZXJhIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwic2V0VGltZW91dCIsIm9uRXJyb3IiLCJvbkFib3J0IiwibWV0aG9kIiwiYm9keSIsImZldGNoIiwiYWJvcnQiXSwic291cmNlcyI6WyIvY29kZS90cy9kZXNrdG9wLnRzIiwiL2NvZGUvdHMvZmlsZS1tYW5hZ2VyLnRzIiwiL2NvZGUvdHMvZmlsZXMvaW5kZXgudHMiLCIvaS1jYW1lcmEudHMiLCIvY29kZS90cy9pbmRleC50cyIsIi9jb2RlL3RzL2lucHV0LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvY29kZS90cy9tb2JpbGUudHMiLCIvY29kZS90cy94aHIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVs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
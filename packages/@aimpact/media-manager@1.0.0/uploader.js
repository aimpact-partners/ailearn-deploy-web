System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive-2@1.0.0/model", "@aimpact/media-manager@1.0.0/main", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, XHRLoader, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive2100Model) {
      dependency_1 = _beyondJsReactive2100Model;
    }, function (_aimpactMediaManager100Main) {
      dependency_2 = _aimpactMediaManager100Main;
    }, function (_beyondJsKernel019Core) {
      dependency_3 = _beyondJsKernel019Core;
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
          "vspecifier": "@aimpact/media-manager@1.0.0/uploader"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive-2/model', dependency_1], ['@aimpact/media-manager/main', dependency_2], ['@beyond-js/kernel/core', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 130153621,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableUploader = void 0;
          class DraggableUploader {
            #parent;
            #files;
            constructor(parent) {
              this.#parent = parent;
              this.#files = parent.files;
            }
            onDrop = event => {
              event.preventDefault();
              const {
                dataTransfer
              } = event;
              console.log(19, event);
              if (!dataTransfer.items.length) {
                return;
              }
              const files = [];
              for (let i = 0; i < dataTransfer.items.length; ++i) {
                const file = dataTransfer.items[i].getAsFile();
                if (file) {
                  files.push(file);
                }
              }
              this.#files.readLocal(files);
            };
            /**
             * This event runs only when are files on the draggable area.
             * @param event
             */
            onDragOver = event => {
              event.preventDefault();
            };
            /**
             * Add the drag & drop events to the control
             * @param {HTMLInputElement} selector
             */
            add(selector) {
              selector.ondrop = this.onDrop;
              selector.ondragover = this.onDragOver;
            }
          }
          exports.DraggableUploader = DraggableUploader;
        }
      });

      /****************************
      INTERNAL MODULE: ./files/base
      ****************************/

      ims.set('./files/base', {
        hash: 2109218924,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFile = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          class BaseFile extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
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
              this.#type = specs.type ? specs.type : 'any';
            }
            FILE_TYPE = Object.freeze({
              document: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'],
              image: ['image/png', 'image/jpeg', 'image/gif'],
              json: ['application/json'],
              zip: ['application/x-zip-compressed'],
              audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac', 'audio/x-m4a' // mp4 files, older version
              ]
            });

            #onload = event => {
              event.target.removeEventListener('load', this.#onload);
              if (this.#specs.onload && typeof this.#specs.onload === 'function') {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              const name = file.name.replace(this.regExp, '');
              file = this._items.get(name);
              file.src = event.target.result;
              this._items.set(name, file);
              event.target.removeEventListener('onloadend', this.#onloadend);
              this.triggerEvent('file.loaded');
              if (this.#loaded === this._items.size) this.triggerEvent('loadend');
              if (this.#specs.onloadend && typeof this.#specs.onloadend === 'function') {
                this.#specs.onload(event);
              }
            };
            #onerror = event => console.error(4, event);
            validate = file => {
              const isValid = !!this.FILE_TYPE[this.#type].find(item => item === file.type);
              if (!isValid) {
                this.#errors.push(file.name.replace(this.regExp, ''));
              }
              return isValid;
            };
            #readFile = async file => {
              if (this.#type !== 'any') {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent('error');
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
             *
             * @param fileList
             */
            readLocal = async fileList => {
              this.fetching = true;
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ''), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
              this.fetching = false;
              //@todo trigger remove
            };
          }

          exports.BaseFile = BaseFile;
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 3877622097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilesUploader = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _mobile = require("./mobile");
          var _web = require("./web");
          class FilesUploader extends _model.ReactiveModel {
            static #instance;
            static getInstance(parent, specs) {
              if (this.#instance) return this.#instance;
              if (globalThis.phonegap) return new _mobile.MobileFilesUploader(parent);
              return new _web.WebFilesUploader(parent, specs);
            }
          }
          exports.FilesUploader = FilesUploader;
        }
      });

      /******************************
      INTERNAL MODULE: ./files/mobile
      ******************************/

      ims.set('./files/mobile', {
        hash: 117240964,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileFilesUploader = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          class MobileFilesUploader extends _model.ReactiveModel {
            _loaded = 0;
            files = new Map();
            base64;
            _specs;
            _errors = [];
            constructor(specs) {
              super();
              this._specs = specs;
            }
            clean = () => {
              this.files = new Map();
              this._loaded = 0;
            };
            getFiles = async data => {
              this.clean();
              this.base64 = data.url;
              this.triggerEvent("loading");
              /**
               * todo: @julio check
               */
              const [dir, filename] = data.name.split("com.jidadesarrollos.bovino/cache/");
              this.files.set(filename, data.url);
              this.triggerEvent("loadend");
            };
            get entries() {
              return this.files;
            }
            get total() {
              return this.files.size;
            }
          }
          exports.MobileFilesUploader = MobileFilesUploader;
        }
      });

      /***************************
      INTERNAL MODULE: ./files/web
      ***************************/

      ims.set('./files/web', {
        hash: 2999639395,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WebFilesUploader = void 0;
          var _base = require("./base");
          class WebFilesUploader extends _base.BaseFile {}
          exports.WebFilesUploader = WebFilesUploader;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 401617275,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Uploader = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _draggable = require("./draggable");
          var _files = require("./files");
          var _xhr = require("./xhr");
          var _main = require("@aimpact/media-manager/main");
          /*bundle*/
          class Uploader extends _model.ReactiveModel {
            #files;
            get files() {
              return this.#files;
            }
            #fileInput = document.createElement("input");
            #selector;
            #attrs;
            #draggable;
            #control;
            #specs;
            #errors;
            get errors() {
              return this.#errors;
            }
            constructor(specs = {}) {
              super();
              if (!specs.input) specs.input = {};
              /**
               * Manager of the files
               * @type {UploadFiles}
               */
              this.#files = _files.FilesUploader.getInstance(this, specs);
              this.#draggable = new _draggable.DraggableUploader(this);
              globalThis.up = this;
              this.#files.on("change", this.#listenChanges);
              this.#files.on("error", this.getErrors);
              this.#files.on("loadend", this.filesLoaded);
              const params = {
                ...specs.input
              };
              this.#specs = specs;
              this.setAttributes(params);
            }
            #listenChanges = () => {
              this.fetching = this.#files.fetching;
              this.ready = this.#files.ready;
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
                this.#fileInput.setAttribute(prop, attrs[prop]);
              }
              this.#attrs = attrs;
            };
            // };
            openDialog = () => {
              this.#fileInput.click();
            };
            filesLoaded = () => this.triggerEvent("loadend");
            pictureLoaded = () => this.triggerEvent("pictureLoaded");
            pictureLoading = () => this.triggerEvent("pictureLoading");
            getErrors = () => this.#errors = this.files.errors;
            clean = async () => {
              await this.#files.clean();
              // await this.#mobileFiles.clean();
            };

            create = (selector, draggableSelector) => {
              if (_main.mediaDevice.type === "MOBILE") {
                selector.addEventListener("click", _main.mediaDevice.openGallery);
              }
              this.#selector = selector;
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!selector) return;
                selector.addEventListener("click", this.openDialog);
                this.#fileInput.addEventListener("change", this.#onChangeInput);
              };
              selector.after(this.#fileInput);
              addListeners();
              if (draggableSelector) this.#draggable.add(draggableSelector);
            };
            #onChangeInput = async event => {
              this.clean();
              this.fetching = true;
              this.triggerEvent(); // todo: fetching property need to fires this event
              const target = event.currentTarget;
              this.#files.total = target.files.length;
              this.#files.readLocal(target.files);
              this.fetching = false;
              this.triggerEvent(); // todo: fetching property need to fires this event
            };

            publish = async (additionalParams = {}) => {
              const form = new FormData();
              //const collection = isCamera ? mobileFiles : files;
              const collection = this.#files;
              const specs = this.#specs;
              const name = collection.total > 1 ? `${specs.name}[]` : specs.name;
              console.log(2, name, specs);
              collection.entries.forEach(item => form.append(name, item));
              if (!specs.params) specs.params = {};
              const params = {
                ...specs.params,
                ...additionalParams
              };
              for (let param in params) {
                if (!params.hasOwnProperty(param)) continue;
                form.append(param, params[param]);
              }
              const xhr = new _xhr.XHRLoader();
              const response = await xhr.upload(form, specs.url);
              return response.json();
            };
          }
          exports.Uploader = Uploader;
        }
      });

      /************************
      INTERNAL MODULE: ./resize
      ************************/

      ims.set('./resize', {
        hash: 1913477879,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.resizePicture = void 0;
          const resizePicture = (uri, specs) => new Promise(resolve => {
            specs = specs ? specs : {};
            const maxWidth = specs.maxWidth ? specs.maxWidth : 800;
            const maxHeight = specs.maxHeight ? specs.maxHeight : maxWidth / (4 / 3);
            const quality = specs.quality ? specs.quality : 0.8;
            const img = new Image();
            img.src = uri;
            img.onload = function () {
              let width = img.width;
              let height = img.height;
              let orientation;
              if (width < height) {
                orientation = "portrait";
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              } else {
                orientation = "landscape";
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              }
              const canvas = document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, width, height);
              let image = canvas.toDataURL("image/jpeg", quality);
              if (!specs.rotate) {
                resolve({
                  src: image,
                  width: width,
                  height: height,
                  orientation: orientation
                });
              }
              const rotateCanvas = document.createElement("canvas");
              let ctxRotate = rotateCanvas.getContext("2d");
              rotateCanvas.height = width;
              rotateCanvas.width = height;
              const imgRotate = new Image();
              imgRotate.onload = () => {
                ctxRotate.translate(rotateCanvas.width / 2, rotateCanvas.height / 2);
                ctxRotate.rotate(Math.PI / 2);
                ctxRotate.drawImage(imgRotate, -imgRotate.width / 2, -imgRotate.height / 2);
                ctxRotate.rotate(-Math.PI / 2);
                ctxRotate.translate(-imgRotate.width / 2, -imgRotate.height / 2);
                const imageRotated = rotateCanvas.toDataURL("image/jpg", 1);
                resolve({
                  src: imageRotated,
                  width: width,
                  height: height,
                  orientation: orientation,
                  aja: true
                });
              };
              imgRotate.src = image;
            };
          });
          exports.resizePicture = resizePicture;
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 3000182905,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          /*bundle */
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
        "from": "Uploader",
        "name": "Uploader"
      }, {
        "im": "./xhr",
        "from": "XHRLoader",
        "name": "XHRLoader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Uploader') && _export("Uploader", Uploader = require ? require('./index').Uploader : value);
        (require || prop === 'XHRLoader') && _export("XHRLoader", XHRLoader = require ? require('./xhr').XHRLoader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEcmFnZ2FibGVVcGxvYWRlciIsInBhcmVudCIsImZpbGVzIiwiY29uc3RydWN0b3IiLCJvbkRyb3AiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRyYW5zZmVyIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwibGVuZ3RoIiwiaSIsImZpbGUiLCJnZXRBc0ZpbGUiLCJwdXNoIiwicmVhZExvY2FsIiwib25EcmFnT3ZlciIsImFkZCIsInNlbGVjdG9yIiwib25kcm9wIiwib25kcmFnb3ZlciIsImV4cG9ydHMiLCJfbW9kZWwiLCJyZXF1aXJlIiwiQmFzZUZpbGUiLCJSZWFjdGl2ZU1vZGVsIiwibG9hZGVkIiwic3BlY3MiLCJ0eXBlIiwicmVnRXhwIiwiZXJyb3JzIiwiX3RvdGFsIiwidG90YWwiLCJ2YWx1ZSIsIl9pdGVtcyIsIk1hcCIsImVudHJpZXMiLCJ2YWx1ZXMiLCJGSUxFX1RZUEUiLCJPYmplY3QiLCJmcmVlemUiLCJkb2N1bWVudCIsImltYWdlIiwianNvbiIsInppcCIsImF1ZGlvIiwib25sb2FkIiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9ubG9hZGVuZCIsIiNvbmxvYWRlbmQiLCJuYW1lIiwicmVwbGFjZSIsImdldCIsInNyYyIsInJlc3VsdCIsInNldCIsInRyaWdnZXJFdmVudCIsInNpemUiLCJvbmVycm9yIiwiZXJyb3IiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwiaXRlbSIsInJlYWRGaWxlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJ2YWxpZGF0ZUxvYWQiLCIjdmFsaWRhdGVMb2FkIiwiY2xlYW4iLCJmaWxlTGlzdCIsImZldGNoaW5nIiwicHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwiX21vYmlsZSIsIl93ZWIiLCJGaWxlc1VwbG9hZGVyIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsImdsb2JhbFRoaXMiLCJwaG9uZWdhcCIsIk1vYmlsZUZpbGVzVXBsb2FkZXIiLCJXZWJGaWxlc1VwbG9hZGVyIiwiX2xvYWRlZCIsImJhc2U2NCIsIl9zcGVjcyIsIl9lcnJvcnMiLCJnZXRGaWxlcyIsImRhdGEiLCJ1cmwiLCJkaXIiLCJmaWxlbmFtZSIsInNwbGl0IiwiX2Jhc2UiLCJfZHJhZ2dhYmxlIiwiX2ZpbGVzIiwiX3hociIsIl9tYWluIiwiVXBsb2FkZXIiLCJmaWxlSW5wdXQiLCJjcmVhdGVFbGVtZW50IiwiYXR0cnMiLCJkcmFnZ2FibGUiLCJjb250cm9sIiwiaW5wdXQiLCJ1cCIsIm9uIiwibGlzdGVuQ2hhbmdlcyIsImdldEVycm9ycyIsImZpbGVzTG9hZGVkIiwicGFyYW1zIiwic2V0QXR0cmlidXRlcyIsIiNsaXN0ZW5DaGFuZ2VzIiwicmVhZHkiLCJzdHlsZSIsInByb3AiLCJzZXRBdHRyaWJ1dGUiLCJvcGVuRGlhbG9nIiwiY2xpY2siLCJwaWN0dXJlTG9hZGVkIiwicGljdHVyZUxvYWRpbmciLCJjcmVhdGUiLCJkcmFnZ2FibGVTZWxlY3RvciIsIm1lZGlhRGV2aWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5HYWxsZXJ5IiwiYWRkTGlzdGVuZXJzIiwib25DaGFuZ2VJbnB1dCIsImFmdGVyIiwiY3VycmVudFRhcmdldCIsInB1Ymxpc2giLCJhZGRpdGlvbmFsUGFyYW1zIiwiZm9ybSIsIkZvcm1EYXRhIiwiY29sbGVjdGlvbiIsImZvckVhY2giLCJhcHBlbmQiLCJwYXJhbSIsImhhc093blByb3BlcnR5IiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJyZXNpemVQaWN0dXJlIiwidXJpIiwicmVzb2x2ZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicXVhbGl0eSIsImltZyIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJvcmllbnRhdGlvbiIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0RhdGFVUkwiLCJyb3RhdGUiLCJyb3RhdGVDYW52YXMiLCJjdHhSb3RhdGUiLCJpbWdSb3RhdGUiLCJ0cmFuc2xhdGUiLCJNYXRoIiwiUEkiLCJpbWFnZVJvdGF0ZWQiLCJhamEiLCJwcm9taXNlIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50Iiwicm91bmQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwib25Db21wbGV0ZWQiLCJzZXRUaW1lb3V0Iiwib25FcnJvciIsInJlamVjdCIsIm9uQWJvcnQiLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJlIiwiYWJvcnQiXSwic291cmNlcyI6WyIvZHJhZ2dhYmxlLnRzIiwiL2ZpbGVzL2Jhc2UudHMiLCIvZmlsZXMvaW5kZXgudHMiLCIvZmlsZXMvbW9iaWxlLnRzIiwiL2ZpbGVzL3dlYi50cyIsIi9pbmRleC50cyIsIi9yZXNpemUudHMiLCIveGhyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBSU0sTUFBT0EsaUJBQWlCO1lBQzdCLENBQUFDLE1BQU87WUFDUCxDQUFBQyxLQUFNO1lBRU5DLFlBQVlGLE1BQVc7Y0FDdEIsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQUMsS0FBTSxHQUFHRCxNQUFNLENBQUNDLEtBQUs7WUFDM0I7WUFFQUUsTUFBTSxHQUFJQyxLQUFnQixJQUFJO2NBQzdCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtjQUN0QixNQUFNO2dCQUFFQztjQUFZLENBQUUsR0FBR0YsS0FBSztjQUM5QkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFSixLQUFLLENBQUM7Y0FDdEIsSUFBSSxDQUFDRSxZQUFZLENBQUNHLEtBQUssQ0FBQ0Ms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
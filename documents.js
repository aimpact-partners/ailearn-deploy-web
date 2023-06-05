System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/media-manager@1.0.0/uploader-code", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/reactive-2@1.0.0/model", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Uploader, Controller, View, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactMediaManager100UploaderCode) {
      dependency_4 = _aimpactMediaManager100UploaderCode;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_5 = _beyondJsReact18Widgets005Page;
    }, function (_beyondJsReactive2100Model) {
      dependency_6 = _beyondJsReactive2100Model;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@aimpact/http-server", "0.0.1"], ["@aimpact/langchain", "1.0.0"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/documents"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/media-manager/uploader-code', dependency_4], ['@beyond-js/react-18-widgets/page', dependency_5], ['@beyond-js/reactive-2/model', dependency_6], ['@aimpact/media-manager/uploader', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "documents-upload-p",
        "vspecifier": "@aimpact/ailearn@1.0.0/documents",
        "is": "page",
        "route": "/documents"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn@1.0.0/documents');
      ims = new Map();
      /******************************************
      INTERNAL MODULE: ./components/files-details
      ******************************************/
      ims.set('./components/files-details', {
        hash: 324347041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _react = require("react");
          const FilesDetails = ({
            files
          }) => {
            return _react.default.createElement("div", {
              className: "files"
            }, _react.default.createElement("h3", null, "Uploaded files:"), _react.default.createElement("table", {
              className: "file-table"
            }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Name"), _react.default.createElement("th", null, "Size"), _react.default.createElement("th", null, "Last Updated"))), _react.default.createElement("tbody", null, files.map(entry => {
              const file = entry[1];
              return _react.default.createElement("tr", {
                key: file.name
              }, _react.default.createElement("td", {
                className: "file-name"
              }, file.name), _react.default.createElement("td", null, file.size, " bytes"), _react.default.createElement("td", null, " ", new Date(file.lastModified).toLocaleDateString()));
            }))));
          };
          var _default = FilesDetails;
          exports.default = _default;
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/result
      ***********************************/

      ims.set('./components/result', {
        hash: 4225699662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Result = Result;
          var _filesDetails = require("./files-details");
          var React = require("react");
          function Result({
            items
          }) {
            if (!items) return null;
            return React.createElement(React.Fragment, null, !!items.size && React.createElement(_filesDetails.default, {
              files: Array.from(items)
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./components/uploader
      *************************************/

      ims.set('./components/uploader', {
        hash: 3600841602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Uploader = Uploader;
          var React = require("react");
          var _uploaderCode = require("@aimpact/media-manager/uploader-code");
          var _result = require("./result");
          /*bundle*/
          function Uploader({
            url,
            project,
            container,
            identifier
          }) {
            const [loading, setLoading] = React.useState(false);
            const dialog = React.useRef(null);
            const {
              uploadFiles,
              clearFiles,
              files,
              fetching,
              button,
              drag
            } = (0, _uploaderCode.useUploader)({
              url,
              project,
              container
            });
            const handleOpen = () => dialog.current.showModal();
            const handleClose = () => dialog.current.close();
            const handleSubmit = async () => {
              /*if (!name) return toast.error("Please enter a topic"); */
              setLoading(true);
              const response = await uploadFiles({
                topic: identifier
              });
              setLoading(false);
              if (response.status === 200) {
                clearFiles();
                handleClose();
              } else {
                /* return toast.error(response.error)  */
              }
            };
            return React.createElement("span", null, React.createElement("button", {
              className: "upload-button",
              onClick: handleOpen
            }, "+"), React.createElement("dialog", {
              ref: dialog,
              onClose: handleClose
            }, React.createElement("button", {
              className: "close-button",
              onClick: handleClose
            }, "X"), React.createElement("div", {
              className: "form-container"
            }, React.createElement("div", {
              className: "form-group"
            }, React.createElement("label", {
              htmlFor: "name"
            }, "Topic:"), React.createElement("input", {
              type: "text",
              id: "name",
              value: identifier,
              disabled: true
            })), React.createElement("div", {
              ref: drag,
              className: "form-group"
            }, React.createElement("label", {
              htmlFor: "file"
            }, "Files:"), React.createElement("div", {
              ref: button,
              className: "draggable"
            }, "Drag your files here!")), React.createElement("div", {
              className: "button-group"
            }, React.createElement("button", {
              className: "clear-button",
              onClick: clearFiles
            }, "Clear"), React.createElement("button", {
              className: "save-button",
              onClick: handleSubmit
            }, "Save")), fetching && React.createElement("div", {
              className: "loader"
            }, "Loading...")), React.createElement(_result.Result, {
              items: files
            })));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 2425874070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 94568587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _uploader = require("@aimpact/media-manager/uploader");
          const SERVER_URL = "http://localhost:5000/upload/documents";
          class StoreManager extends _model.ReactiveModel {
            #fetching;
            set isFetching(value) {
              this.#fetching = value;
              this.triggerEvent();
            }
            get isFetching() {
              return this.#fetching;
            }
            get serverUrl() {
              return SERVER_URL;
            }
            publish = async (name, files) => {
              const form = new FormData();
              form.append("files", files);
              form.append("container", "files");
              form.append("topic", name);
              form.append("project", "ailearn");
              const xhr = new _uploader.XHRLoader();
              const response = await xhr.upload(form, SERVER_URL);
              return response.json();
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2814961789,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _uploader = require("../components/uploader");
          /*bundle*/
          function View({
            store
          }) {
            return React.createElement("div", {
              className: "upload-wrapper"
            }, React.createElement(_uploader.Uploader, {
              url: store.serverUrl,
              project: "ailearn",
              container: "files",
              identifier: "assigment?.name"
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/uploader",
        "from": "Uploader",
        "name": "Uploader"
      }, {
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Uploader') && _export("Uploader", Uploader = require ? require('./components/uploader').Uploader : value);
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiRmlsZXNEZXRhaWxzIiwiZmlsZXMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1hcCIsImVudHJ5IiwiZmlsZSIsImtleSIsIm5hbWUiLCJzaXplIiwiRGF0ZSIsImxhc3RNb2RpZmllZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIl9maWxlc0RldGFpbHMiLCJSZWFjdCIsIlJlc3VsdCIsIml0ZW1zIiwiRnJhZ21lbnQiLCJBcnJheSIsImZyb20iLCJfdXBsb2FkZXJDb2RlIiwiX3Jlc3VsdCIsIlVwbG9hZGVyIiwidXJsIiwicHJvamVjdCIsImNvbnRhaW5lciIsImlkZW50aWZpZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiZGlhbG9nIiwidXNlUmVmIiwidXBsb2FkRmlsZXMiLCJjbGVhckZpbGVzIiwiZmV0Y2hpbmciLCJidXR0b24iLCJkcmFnIiwidXNlVXBsb2FkZXIiLCJoYW5kbGVPcGVuIiwiY3VycmVudCIsInNob3dNb2RhbCIsImhhbmRsZUNsb3NlIiwiY2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJyZXNwb25zZSIsInRvcGljIiwic3RhdHVzIiwib25DbGljayIsInJlZiIsIm9uQ2xvc2UiLCJodG1sRm9yIiwidHlwZSIsImlkIiwidmFsdWUiLCJkaXNhYmxlZCIsIl9wYWdlIiwiX3N0b3JlIiwiX3ZpZXdzIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsIl9tb2RlbCIsIl91cGxvYWRlciIsIlNFUlZFUl9VUkwiLCJSZWFjdGl2ZU1vZGVsIiwiaXNGZXRjaGluZyIsInRyaWdnZXJFdmVudCIsInNlcnZlclVybCIsInB1Ymxpc2giLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIl0sInNvdXJjZXMiOlsiL3dpZGdldC90cy9jb21wb25lbnRzL2ZpbGVzLWRldGFpbHMudHN4IiwiL3dpZGdldC90cy9jb21wb25lbnRzL3Jlc3VsdC50c3giLCIvd2lkZ2V0L3RzL2NvbXBvbmVudHMvdXBsb2FkZXIudHN4IiwiL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwiL3dpZGdldC90cy9zdG9yZS50cyIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsTUFBTUMsWUFBWSxHQUFHQSxDQUFDO1lBQUVDO1VBQUssQ0FBRSxLQUFJO1lBQ2pDLE9BQ0VILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFPLEdBQ3BCTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSwrQkFBd0IsRUFDeEJMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU9DLFNBQVMsRUFBQztZQUFZLEdBQzNCTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxnQkFDRUwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFDRUwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsb0JBQWEsRUFDYkwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsb0JBQWEsRUFDYkwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsNEJBQXFCLENBQ2xCLENBQ0MsRUFDUkwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsZ0JBQ0dGLEtBQUssQ0FBQ0ksR0FBRyxDQUFFQyxLQUFLLElBQUk7Y0FDbkIsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2NBQ3JCLE9B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
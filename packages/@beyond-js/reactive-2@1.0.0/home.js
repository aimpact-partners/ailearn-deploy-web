System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/reactive-2@1.0.0/model", "@beyond-js/reactive-2@1.0.0/examples/models", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_3 = _beyondJsReact18Widgets005Page;
    }, function (_beyondJsReactive2100Model) {
      dependency_4 = _beyondJsReactive2100Model;
    }, function (_beyondJsReactive2100ExamplesModels) {
      dependency_5 = _beyondJsReactive2100ExamplesModels;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive-2@1.0.0/home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive-2/model', dependency_4], ['@beyond-js/reactive-2/examples/models', dependency_5], ['react', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "home-page-reactive",
        "vspecifier": "@beyond-js/reactive-2@1.0.0/home",
        "is": "page",
        "route": "/home-reactive"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-js/reactive-2@1.0.0/home');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1218204421,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.Page;
            }
            #store;
            createStore(language) {
              this.#store = new _store.Store();
              return this.#store;
            }
            show() {
              // const user = new User(1);
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1194188794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Store = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _models = require("@beyond-js/reactive-2/examples/models");
          class Store extends _model.ReactiveModel {
            #users = new _models.Users();
            #list;
            get list() {
              return this.#list;
            }
            get users() {
              return this.#users;
            }
            #ready = false;
            get ready() {
              return this.#ready;
            }
            constructor() {
              super();
            }
            getList = async () => {
              try {
                const list = await fetch('https://odds.p.rapidapi.com/v4/sports');
                this.#ready = true;
                this.#list = list;
              } catch (e) {
                console.log(e);
              }
            };
          }
          exports.Store = Store;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 507008975,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          /*bundle*/
          function Page({
            store
          }) {
            const ref = React.useRef(null);
            console.log(store);
            return React.createElement("div", {
              className: "page__container"
            }, React.createElement("header", null, React.createElement("h1", null, "P\u00E1gina de prueba")), React.createElement("button", {
              ref: ref
            }, "Haz click"));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Page",
        "name": "Page"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZSIsInNob3ciLCJleHBvcnRzIiwiX21vZGVsIiwiX21vZGVscyIsIlJlYWN0aXZlTW9kZWwiLCJ1c2VycyIsIlVzZXJzIiwibGlzdCIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJnZXRMaXN0IiwiZmV0Y2giLCJlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwicmVmIiwidXNlUmVmIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0osTUFBQSxDQUFBSyxJQUFJO1lBQ1o7WUFDQSxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUNDLFFBQWlCO2NBQzVCLElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBUSxLQUFLLEVBQUU7Y0FDekIsT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTTtZQUNuQjtZQUNBSSxJQUFJQSxDQUFBO2NBQ0g7WUFBQTs7VUFFREMsT0FBQSxDQUFBVCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJELElBQUFVLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLE9BQUEsR0FBQWQsT0FBQTtVQUNNLE1BQU9VLEtBQU0sU0FBUUcsTUFBQSxDQUFBRSxhQUFvQjtZQUM5QyxDQUFBQyxLQUFNLEdBQVUsSUFBSUYsT0FBQSxDQUFBRyxLQUFLLEVBQUU7WUFFM0IsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBQ0EsSUFBSUYsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBRyxLQUFNLEdBQUcsS0FBSztZQUNkLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUFDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7WUFDUjtZQUVBQyxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3BCLElBQUk7Z0JBQ0gsTUFBTUgsSUFBSSxHQUFHLE1BQU1JLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQztnQkFDakUsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUMsQ0FBQUQsSUFBSyxHQUFHQSxJQUFJO2VBQ2pCLENBQUMsT0FBT0ssQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDOztZQUVoQixDQUFDOztVQUNEWCxPQUFBLENBQUFGLEtBQUEsR0FBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkQsSUFBQWdCLEtBQUEsR0FBQTFCLE9BQUE7VUFHTztVQUFVLFNBQ1JNLElBQUlBLENBQUM7WUFBRUM7VUFBSyxDQUFFO1lBQ3RCLE1BQU1vQixHQUFHLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFvQixJQUFJLENBQUM7WUFFakRKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbEIsS0FBSyxDQUFDO1lBRWxCLE9BQ0NtQixLQUFBLENBQUFHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CSixLQUFBLENBQUFHLGFBQUEsaUJBQ0NILEtBQUEsQ0FBQUcsYUFBQSxxQ0FBeUIsQ0FDakIsRUFDVEgsS0FBQSxDQUFBRyxhQUFBO2NBQVFGLEdBQUcsRUFBRUE7WUFBRyxlQUFvQixDQUMvQjtVQUVSIn0=
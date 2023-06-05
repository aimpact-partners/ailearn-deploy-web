System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@0.0.5/page", "react@18.2.0", "@aimpact/ailearn/start", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_2 = _beyondJsReact18Widgets005Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_aimpactAilearnStart) {
      dependency_4 = _aimpactAilearnStart;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_beyondJsKernel019Styles) {
      dependency_6 = _beyondJsKernel019Styles;
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
          "vspecifier": "@aimpact/ailearn@1.0.0/assignments-page"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@aimpact/ailearn/wrapper', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignments-page",
        "vspecifier": "@aimpact/ailearn@1.0.0/assignments-page",
        "is": "page",
        "route": "/"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn@1.0.0/assignments-page');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1694914741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.Page;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2219750585,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _wrapper = require("@aimpact/ailearn/wrapper");
          var _item = require("./item");
          // import { assignments } from "@aimpact/ailearn/assignments";
          function Page() {
            const output = _wrapper.wrapper.items.map(item => React.createElement(_item.Item, {
              key: item.id,
              item: item
            }));
            return React.createElement("div", {
              className: "assignment-list"
            }, output);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 2621552673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          const {
            useState
          } = React;
          function Item({
            item
          }) {
            const [expandedId, setExpandedId] = useState("");
            const handleExpandClick = id => setExpandedId(expandedId === id ? "" : id);
            const handleNavigate = name => _routing.routing.pushState(`/assignments/${name}`);
            return React.createElement("div", {
              className: "assignment",
              key: item.id
            }, React.createElement("div", {
              className: "assignment-header"
            }, React.createElement("h2", null, item.subject), React.createElement("button", {
              onClick: () => handleExpandClick(item.id)
            }, expandedId === item.id ? "-" : "+")), expandedId === item.id && React.createElement("div", {
              className: "assignment-body"
            }, item.goals.split("\n").map((line, index) => {
              return React.createElement("p", {
                key: index
              }, line, index !== item.goals.split("\n").length - 1 && React.createElement("br", null));
            })), React.createElement("div", {
              className: "button",
              onClick: () => handleNavigate(item.name)
            }, "Hacer actividad"));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJleHBvcnRzIiwiUmVhY3QiLCJfd3JhcHBlciIsIl9pdGVtIiwib3V0cHV0Iiwid3JhcHBlciIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJJdGVtIiwia2V5IiwiaWQiLCJjbGFzc05hbWUiLCJfcm91dGluZyIsInVzZVN0YXRlIiwiZXhwYW5kZWRJZCIsInNldEV4cGFuZGVkSWQiLCJoYW5kbGVFeHBhbmRDbGljayIsImhhbmRsZU5hdmlnYXRlIiwibmFtZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJzdWJqZWN0Iiwib25DbGljayIsImdvYWxzIiwic3BsaXQiLCJsaW5lIiwiaW5kZXgiLCJsZW5ndGgiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDaEQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNSLE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNiOztVQUNEQyxPQUFBLENBQUFKLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBSyxLQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxRQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxLQUFBLEdBQUFULE9BQUE7VUFDQTtVQUVNLFNBQVVLLElBQUlBLENBQUE7WUFDbEIsTUFBTUssTUFBTSxHQUFHRixRQUFBLENBQUFHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUVDLElBQUksSUFBS1AsS0FBQSxDQUFBUSxhQUFBLENBQUNOLEtBQUEsQ0FBQU8sSUFBSTtjQUFDQyxHQUFHLEVBQUVILElBQUksQ0FBQ0ksRUFBRTtjQUFFSixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUFDO1lBQzlFLE9BQU9QLEtBQUEsQ0FBQVEsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsR0FBRVQsTUFBTSxDQUFPO1VBQ3hEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBLElBQUFILEtBQUEsR0FBQVAsT0FBQTtVQUVBLElBQUFvQixRQUFBLEdBQUFwQixPQUFBO1VBREEsTUFBTTtZQUFFcUI7VUFBUSxDQUFFLEdBQUdkLEtBQUs7VUFHcEIsU0FBVVMsSUFBSUEsQ0FBQztZQUFFRjtVQUFJLENBQUU7WUFDM0IsTUFBTSxDQUFDUSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHRixRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ3hELE1BQU1HLGlCQUFpQixHQUFJTixFQUFVLElBQUtLLGFBQWEsQ0FBQ0QsVUFBVSxLQUFLSixFQUFFLEdBQUcsRUFBRSxHQUFHQSxFQUFFLENBQUM7WUFDcEYsTUFBTU8sY0FBYyxHQUFJQyxJQUFZLElBQUtOLFFBQUEsQ0FBQU8sT0FBTyxDQUFDQyxTQUFTLENBQUMsZ0JBQWdCRixJQUFJLEVBQUUsQ0FBQztZQUVsRixPQUNFbkIsS0FBQSxDQUFBUSxhQUFBO2NBQUtJLFNBQVMsRUFBQyxZQUFZO2NBQUNGLEdBQUcsRUFBRUgsSUFBSSxDQUFDSTtZQUFFLEdBQ3RDWCxLQUFBLENBQUFRLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQW1CLEdBQ2hDWixLQUFBLENBQUFRLGFBQUEsYUFBS0QsSUFBSSxDQUFDZSxPQUFPLENBQU0sRUFDdkJ0QixLQUFBLENBQUFRLGFBQUE7Y0FBUWUsT0FBTyxFQUFFQSxDQUFBLEtBQU1OLGlCQUFpQixDQUFDVixJQUFJLENBQUNJLEVBQUU7WUFBQyxHQUFHSSxVQUFVLEtBQUtSLElBQUksQ0FBQ0ksRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQVUsQ0FDNUYsRUFDTEksVUFBVSxLQUFLUixJQUFJLENBQUNJLEVBQUUsSUFDckJYLEtBQUEsQ0FBQVEsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBaUIsR0FDN0JMLElBQUksQ0FBQ2lCLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDbkIsR0FBRyxDQUFDLENBQUNvQixJQUFJLEVBQUVDLEtBQUssS0FBSTtjQUMxQyxPQUNFM0IsS0FBQSxDQUFBUSxhQUFBO2dCQUFHRSxHQUFHLEVBQUVpQjtjQUFLLEdBQ1ZELElBQUksRUFDSkMsS0FBSyxLQUFLcEIsSUFBSSxDQUFDaUIsS0FBSyxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNHLE1BQU0sR0FBRyxDQUFDLElBQUk1QixLQUFBLENBQUFRLGFBQUEsWUFBTSxDQUNwRDtZQUVSLENBQUMsQ0FBQyxDQUVMLEVBQ0RSLEtBQUEsQ0FBQVEsYUFBQTtjQUFLSSxTQUFTLEVBQUMsUUFBUTtjQUFDVyxPQUFPLEVBQUVBLENBQUEsS0FBTUwsY0FBYyxDQUFDWCxJQUFJLENBQUNZLElBQUk7WUFBQyxxQkFFMUQsQ0FDRjtVQUVWIn0=
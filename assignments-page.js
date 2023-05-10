System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@ai-clase/demo@0.0.1/assignments", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }, function (_aiClaseDemo001Assignments) {
      dependency_4 = _aiClaseDemo001Assignments;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_5 = _beyondJsReact18Widgets005Page;
    }, function (_beyondJsKernel019Styles) {
      dependency_6 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["openai", "3.2.1"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@types/dom-mediacapture-record", "1.0.14"], ["@google-cloud/error-reporting", "3.0.5"], ["uuid", "9.0.0"], ["firebase", "9.17.2"], ["@firebase/util", "1.9.3"], ["@firebase/logger", "0.4.0"], ["@firebase/component", "0.6.4"], ["@google-cloud/logging", "10.4.0"], ["firebase-admin", "11.5.0"], ["socket.io-client", "4.6.1"], ["@ai-clase/demo", "0.0.1"], ["@ai-clase/demo", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@ai-clase/demo@0.0.1/assignments-page"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@ai-clase/demo/assignments', dependency_4], ['@beyond-js/react-18-widgets/page', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignments-page",
        "vspecifier": "@ai-clase/demo@0.0.1/assignments-page",
        "is": "page",
        "route": "/"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@ai-clase/demo@0.0.1/assignments-page');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./Page
      **********************/
      ims.set('./Page', {
        hash: 490648231,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _assignments = require("@ai-clase/demo/assignments");
          const {
            useState
          } = React;
          const Page = () => {
            const [expandedId, setExpandedId] = useState('');
            const handleExpandClick = id => {
              if (expandedId === id) {
                setExpandedId('');
              } else {
                setExpandedId(id);
              }
            };
            const handleNavigate = id => _routing.routing.pushState(`/assignments/${id}`);
            return React.createElement("div", {
              className: "assignment-list"
            }, [..._assignments.assignments.values()].map(assignment => React.createElement("div", {
              className: "assignment",
              key: assignment.id
            }, React.createElement("div", {
              className: "assignment-header"
            }, React.createElement("h2", null, assignment.subject), React.createElement("button", {
              onClick: () => handleExpandClick(assignment.id)
            }, expandedId === assignment.id ? '-' : '+')), expandedId === assignment.id && React.createElement("div", {
              className: "assignment-body"
            }, assignment.goals.split('\n').map((line, index) => {
              return React.createElement("p", {
                key: index
              }, line, index !== assignment.goals.split('\n').length - 1 && React.createElement("br", null));
            })), React.createElement("div", {
              className: "button",
              onClick: () => handleNavigate(assignment.id)
            }, "Hacer actividad"))));
          };
          var _default = Page;
          exports.default = _default;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3212644890,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _Page = require("./Page");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _Page.default;
            }
          }
          exports.Controller = Controller;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./index').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBRUEsTUFBTTtZQUFDQTtVQUFRLENBQUMsR0FBR0MsS0FBSztVQUV4QixNQUFNQyxJQUFJLEdBQWlCLE1BQUs7WUFDNUIsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHSixRQUFRLENBQVMsRUFBRSxDQUFDO1lBRXhELE1BQU1LLGlCQUFpQixHQUFJQyxFQUFVLElBQUk7Y0FDckMsSUFBSUgsVUFBVSxLQUFLRyxFQUFFLEVBQUU7Z0JBQ25CRixhQUFhLENBQUMsRUFBRSxDQUFDO2VBQ3BCLE1BQU07Z0JBQ0hBLGFBQWEsQ0FBQ0UsRUFBRSxDQUFDOztZQUV6QixDQUFDO1lBRUQsTUFBTUMsY0FBYyxHQUFHRCxFQUFFLElBQUlFLGdCQUFPLENBQUNDLFNBQVMsQ0FBQyxnQkFBZ0JILEVBQUUsRUFBRSxDQUFDO1lBRXBFLE9BQ0lMO2NBQUtTLFNBQVMsRUFBQztZQUFpQixHQUMzQixDQUFDLEdBQUdDLHdCQUFXLENBQUNDLE1BQU0sRUFBRSxDQUFDLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxJQUNyQ2I7Y0FBS1MsU0FBUyxFQUFDLFlBQVk7Y0FBQ0ssR0FBRyxFQUFFRCxVQUFVLENBQUNSO1lBQUUsR0FDMUNMO2NBQUtTLFNBQVMsRUFBQztZQUFtQixHQUM5QlQsZ0NBQUthLFVBQVUsQ0FBQ0UsT0FBTyxDQUFNLEVBQzdCZjtjQUFRZ0IsT0FBTyxFQUFFLE1BQU1aLGlCQUFpQixDQUFDUyxVQUFVLENBQUNSLEVBQUU7WUFBQyxHQUNsREgsVUFBVSxLQUFLVyxVQUFVLENBQUNSLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUNwQyxDQUNQLEVBQ0xILFVBQVUsS0FBS1csVUFBVSxDQUFDUixFQUFFLElBQ3pCTDtjQUFLUyxTQUFTLEVBQUM7WUFBaUIsR0FDM0JJLFVBQVUsQ0FBQ0ksS0FBSyxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNOLEdBQUcsQ0FBQyxDQUFDTyxJQUFJLEVBQUVDLEtBQUssS0FBSTtjQUM5QyxPQUNJcEI7Z0JBQUdjLEdBQUcsRUFBRU07Y0FBSyxHQUNSRCxJQUFJLEVBQ0pDLEtBQUssS0FBS1AsVUFBVSxDQUFDSSxLQUFLLENBQUNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ0csTUFBTSxHQUFHLENBQUMsSUFBSXJCLCtCQUFLLENBQzNEO1lBRVosQ0FBQyxDQUFDLENBRVQsRUFFREE7Y0FBS1MsU0FBUyxFQUFDLFFBQVE7Y0FBQ08sT0FBTyxFQUFFLE1BQU1WLGNBQWMsQ0FBQ08sVUFBVSxDQUFDUixFQUFFO1lBQUMscUJBRTlELENBRWIsQ0FBQyxDQUNBO1VBRWQsQ0FBQztVQUFDLGVBRWFKLElBQUk7VUFBQXFCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EbkI7VUFDQTtVQUVPO1VBQVUsTUFDWEMsVUFBVyxTQUFRQywrQkFBeUI7WUFDaEQsSUFBSUMsTUFBTTtjQUNSLE9BQU94QixhQUFJO1lBQ2I7O1VBQ0RxQiIsIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVhY3QiLCJQYWdlIiwiZXhwYW5kZWRJZCIsInNldEV4cGFuZGVkSWQiLCJoYW5kbGVFeHBhbmRDbGljayIsImlkIiwiaGFuZGxlTmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xhc3NOYW1lIiwiYXNzaWdubWVudHMiLCJ2YWx1ZXMiLCJtYXAiLCJhc3NpZ25tZW50Iiwia2V5Iiwic3ViamVjdCIsIm9uQ2xpY2siLCJnb2FscyIsInNwbGl0IiwibGluZSIsImluZGV4IiwibGVuZ3RoIiwiZXhwb3J0cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJQYWdlLnRzeCIsImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=
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
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
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
        hash: 1888035169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUVPO1VBQVUsTUFDWEEsVUFBVyxTQUFRQywrQkFBeUI7WUFDaEQsSUFBSUMsTUFBTTtjQUNSLE9BQU9DLFdBQUk7WUFDYjs7VUFDREM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQ7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVRCxJQUFJO1lBQ2xCLE1BQU1FLE1BQU0sR0FBR0MsZ0JBQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUNDLElBQUksSUFBSUMsb0JBQUNDLFVBQUk7Y0FBQ0MsR0FBRyxFQUFFSCxJQUFJLENBQUNJLEVBQUU7Y0FBRUosSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FBQztZQUU1RSxPQUFPQztjQUFLSSxTQUFTLEVBQUM7WUFBaUIsR0FBRVQsTUFBTSxDQUFPO1VBQ3hEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBO1VBRUE7VUFEQSxNQUFNO1lBQUVVO1VBQVEsQ0FBRSxHQUFHTCxLQUFLO1VBR3BCLFNBQVVDLElBQUksQ0FBQztZQUFFRjtVQUFJLENBQUU7WUFDM0IsTUFBTSxDQUFDTyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHRixRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ3hELE1BQU1HLGlCQUFpQixHQUFJTCxFQUFVLElBQUtJLGFBQWEsQ0FBQ0QsVUFBVSxLQUFLSCxFQUFFLEdBQUcsRUFBRSxHQUFHQSxFQUFFLENBQUM7WUFDcEYsTUFBTU0sY0FBYyxHQUFJQyxJQUFZLElBQUtDLGdCQUFPLENBQUNDLFNBQVMsQ0FBQyxnQkFBZ0JGLElBQUksRUFBRSxDQUFDO1lBRWxGLE9BQ0VWO2NBQUtJLFNBQVMsRUFBQyxZQUFZO2NBQUNGLEdBQUcsRUFBRUgsSUFBSSxDQUFDSTtZQUFFLEdBQ3RDSDtjQUFLSSxTQUFTLEVBQUM7WUFBbUIsR0FDaENKLGdDQUFLRCxJQUFJLENBQUNjLE9BQU8sQ0FBTSxFQUN2QmI7Y0FBUWMsT0FBTyxFQUFFLE1BQU1OLGlCQUFpQixDQUFDVCxJQUFJLENBQUNJLEVBQUU7WUFBQyxHQUFHRyxVQUFVLEtBQUtQLElBQUksQ0FBQ0ksRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQVUsQ0FDNUYsRUFDTEcsVUFBVSxLQUFLUCxJQUFJLENBQUNJLEVBQUUsSUFDckJIO2NBQUtJLFNBQVMsRUFBQztZQUFpQixHQUM3QkwsSUFBSSxDQUFDZ0IsS0FBSyxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNsQixHQUFHLENBQUMsQ0FBQ21CLElBQUksRUFBRUMsS0FBSyxLQUFJO2NBQzFDLE9BQ0VsQjtnQkFBR0UsR0FBRyxFQUFFZ0I7Y0FBSyxHQUNWRCxJQUFJLEVBQ0pDLEtBQUssS0FBS25CLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxJQUFJbkIsK0JBQU0sQ0FDcEQ7WUFFUixDQUFDLENBQUMsQ0FFTCxFQUNEQTtjQUFLSSxTQUFTLEVBQUMsUUFBUTtjQUFDVSxPQUFPLEVBQUUsTUFBTUwsY0FBYyxDQUFDVixJQUFJLENBQUNXLElBQUk7WUFBQyxxQkFFMUQsQ0FDRjtVQUVWIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiZXhwb3J0cyIsIm91dHB1dCIsIndyYXBwZXIiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJSZWFjdCIsIkl0ZW0iLCJrZXkiLCJpZCIsImNsYXNzTmFtZSIsInVzZVN0YXRlIiwiZXhwYW5kZWRJZCIsInNldEV4cGFuZGVkSWQiLCJoYW5kbGVFeHBhbmRDbGljayIsImhhbmRsZU5hdmlnYXRlIiwibmFtZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJzdWJqZWN0Iiwib25DbGljayIsImdvYWxzIiwic3BsaXQiLCJsaW5lIiwiaW5kZXgiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXX0=
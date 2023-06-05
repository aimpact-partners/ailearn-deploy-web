System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn@1.0.0/prompt-models", "@beyond-js/react-18-widgets@0.0.5/hooks", "@bgroup/ui@0.0.34/form", "@aimpact/ailearn/start", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, PromptEdit, __beyond_pkg, hmr;
  _export("PromptEdit", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_aimpactAilearn100PromptModels) {
      dependency_2 = _aimpactAilearn100PromptModels;
    }, function (_beyondJsReact18Widgets005Hooks) {
      dependency_3 = _beyondJsReact18Widgets005Hooks;
    }, function (_bgroupUi0034Form) {
      dependency_4 = _bgroupUi0034Form;
    }, function (_aimpactAilearnStart) {
      dependency_5 = _aimpactAilearnStart;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@aimpact/http-server", "0.0.1"], ["@aimpact/langchain", "1.0.0"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/prompts/edit"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn/prompt-models', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@bgroup/ui/form', dependency_4], ['@aimpact/ailearn/wrapper', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn@1.0.0/prompts/edit');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 1667471547,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptEdit = PromptEdit;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          var _wrapper = require("@aimpact/ailearn/wrapper");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function PromptEdit({
            prompt
          }) {
            const [ready, setReady] = React.useState(prompt.loaded);
            // useBinder([prompt], () => {
            // 	setReady(prompt.landed);
            // 	setGoals(prompt.goals);
            // 	setMission(prompt.mission);
            // });
            const [edition, setIsEditMode] = React.useState(false);
            const [mission, setMission] = React.useState(prompt.mission);
            const [goals, setGoals] = React.useState(prompt.goals);
            const toggleEdition = () => setIsEditMode(!edition);
            const handleMission = event => setMission(event.target.value);
            const handleGoals = event => setGoals(event.target.value);
            const handleSubmit = async event => {
              event.preventDefault();
              await prompt.save({
                goals: goals,
                mission: mission
              });
              _wrapper.wrapper.isUpdating = false;
              toggleEdition();
            };
            const navigateBack = () => _routing.routing.pushState("/");
            const text = React.createElement(React.Fragment, null, React.createElement("h3", null, "Mission"), React.createElement("div", {
              className: "field"
            }, mission), React.createElement("hr", null), React.createElement("h3", null, "Goals"), React.createElement("div", {
              className: "field"
            }, goals), React.createElement("div", {
              className: "form-buttons"
            }, React.createElement("button", {
              className: "form-button",
              onClick: navigateBack
            }, "Cancel"), React.createElement("button", {
              className: "form-button",
              onClick: toggleEdition
            }, "Edit")));
            const form = React.createElement(_form.BeyondForm, {
              onSubmit: handleSubmit
            }, React.createElement("h3", {
              htmlFor: "mission"
            }, "Mission"), React.createElement("textarea", {
              value: mission,
              name: "mission",
              onChange: handleMission,
              rows: 10
            }), React.createElement("h3", {
              htmlFor: "goals"
            }, "Goals"), React.createElement("textarea", {
              value: goals,
              name: "goals",
              onChange: handleGoals,
              rows: 10
            }), React.createElement("div", {
              className: "form-buttons"
            }, React.createElement("button", {
              type: "submit",
              className: "form-button"
            }, "Save"), React.createElement("button", {
              className: "form-button",
              onClick: toggleEdition
            }, "Cancel")));
            return React.createElement("div", {
              className: "assignment-form-content"
            }, React.createElement("h2", null, prompt.name), edition ? form : text);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "PromptEdit",
        "name": "PromptEdit"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'PromptEdit') && _export("PromptEdit", PromptEdit = require ? require('./control').PromptEdit : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZm9ybSIsIl93cmFwcGVyIiwiX3JvdXRpbmciLCJQcm9tcHRFZGl0IiwicHJvbXB0IiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwibG9hZGVkIiwiZWRpdGlvbiIsInNldElzRWRpdE1vZGUiLCJtaXNzaW9uIiwic2V0TWlzc2lvbiIsImdvYWxzIiwic2V0R29hbHMiLCJ0b2dnbGVFZGl0aW9uIiwiaGFuZGxlTWlzc2lvbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVHb2FscyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2F2ZSIsIndyYXBwZXIiLCJpc1VwZGF0aW5nIiwibmF2aWdhdGVCYWNrIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInRleHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZm9ybSIsIkJleW9uZEZvcm0iLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJuYW1lIiwib25DaGFuZ2UiLCJyb3dzIiwidHlwZSJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbnRyb2wudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUdBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUVPO1VBQVUsU0FBVUksVUFBVUEsQ0FBQztZQUFFQztVQUFNLENBQUU7WUFDOUMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHUixLQUFLLENBQUNTLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDSSxNQUFNLENBQUM7WUFDdkQ7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUVBLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxhQUFhLENBQUMsR0FBR1osS0FBSyxDQUFDUyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ0ksT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR2QsS0FBSyxDQUFDUyxRQUFRLENBQUNILE1BQU0sQ0FBQ08sT0FBTyxDQUFDO1lBQzVELE1BQU0sQ0FBQ0UsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2hCLEtBQUssQ0FBQ1MsUUFBUSxDQUFDSCxNQUFNLENBQUNTLEtBQUssQ0FBQztZQUV0RCxNQUFNRSxhQUFhLEdBQUdBLENBQUEsS0FBTUwsYUFBYSxDQUFDLENBQUNELE9BQU8sQ0FBQztZQUNuRCxNQUFNTyxhQUFhLEdBQUlDLEtBQUssSUFBS0wsVUFBVSxDQUFDSyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO1lBQy9ELE1BQU1DLFdBQVcsR0FBSUgsS0FBSyxJQUFLSCxRQUFRLENBQUNHLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7WUFDM0QsTUFBTUUsWUFBWSxHQUFHLE1BQU9KLEtBQUssSUFBSTtjQUNuQ0EsS0FBSyxDQUFDSyxjQUFjLEVBQUU7Y0FDdEIsTUFBTWxCLE1BQU0sQ0FBQ21CLElBQUksQ0FBQztnQkFBRVYsS0FBSyxFQUFFQSxLQUFLO2dCQUFFRixPQUFPLEVBQUVBO2NBQU8sQ0FBRSxDQUFDO2NBQ3JEVixRQUFBLENBQUF1QixPQUFPLENBQUNDLFVBQVUsR0FBRyxLQUFLO2NBQzFCVixhQUFhLEVBQUU7WUFDakIsQ0FBQztZQUNELE1BQU1XLFlBQVksR0FBR0EsQ0FBQSxLQUFNeEIsUUFBQSxDQUFBeUIsT0FBTyxDQUFDQyxTQUFTLENBQUMsR0FBRyxDQUFDO1lBRWpELE1BQU1DLElBQUksR0FDUi9CLEtBQUEsQ0FBQWdDLGFBQUEsQ0FBQWhDLEtBQUEsQ0FBQWlDLFFBQUEsUUFDRWpDLEtBQUEsQ0FBQWdDLGFBQUEsdUJBQWdCLEVBQ2hCaEMsS0FBQSxDQUFBZ0MsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBTyxHQUFFckIsT0FBTyxDQUFPLEVBQ3RDYixLQUFBLENBQUFnQyxhQUFBLFlBQU0sRUFDTmhDLEtBQUEsQ0FBQWdDLGFBQUEscUJBQWMsRUFDZGhDLEtBQUEsQ0FBQWdDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQU8sR0FBRW5CLEtBQUssQ0FBTyxFQUNwQ2YsS0FBQSxDQUFBZ0MsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBYyxHQUMzQmxDLEtBQUEsQ0FBQWdDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDLGFBQWE7Y0FBQ0MsT0FBTyxFQUFFUDtZQUFZLFlBRTVDLEVBQ1Q1QixLQUFBLENBQUFnQyxhQUFBO2NBQVFFLFNBQVMsRUFBQyxhQUFhO2NBQUNDLE9BQU8sRUFBRWxCO1lBQWEsVUFFN0MsQ0FDTCxDQUVUO1lBRUQsTUFBTW1CLElBQUksR0FDUnBDLEtBQUEsQ0FBQWdDLGFBQUEsQ0FBQzlCLEtBQUEsQ0FBQW1DLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFZjtZQUFZLEdBQ2hDdkIsS0FBQSxDQUFBZ0MsYUFBQTtjQUFJTyxPQUFPLEVBQUM7WUFBUyxhQUFhLEVBQ2xDdkMsS0FBQSxDQUFBZ0MsYUFBQTtjQUFVWCxLQUFLLEVBQUVSLE9BQU87Y0FBRTJCLElBQUksRUFBQyxTQUFTO2NBQUNDLFFBQVEsRUFBRXZCLGFBQWE7Y0FBRXdCLElBQUksRUFBRTtZQUFFLEVBQUksRUFDOUUxQyxLQUFBLENBQUFnQyxhQUFBO2NBQUlPLE9BQU8sRUFBQztZQUFPLFdBQVcsRUFDOUJ2QyxLQUFBLENBQUFnQyxhQUFBO2NBQVVYLEtBQUssRUFBRU4sS0FBSztjQUFFeUIsSUFBSSxFQUFDLE9BQU87Y0FBQ0MsUUFBUSxFQUFFbkIsV0FBVztjQUFFb0IsSUFBSSxFQUFFO1lBQUUsRUFBSSxFQUN4RTFDLEtBQUEsQ0FBQWdDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWMsR0FDM0JsQyxLQUFBLENBQUFnQyxhQUFBO2NBQVFXLElBQUksRUFBQyxRQUFRO2NBQUNULFNBQVMsRUFBQztZQUFhLFVBRXBDLEVBQ1RsQyxLQUFBLENBQUFnQyxhQUFBO2NBQVFFLFNBQVMsRUFBQyxhQUFhO2NBQUNDLE9BQU8sRUFBRWxCO1lBQWEsWUFFN0MsQ0FDTCxDQUVUO1lBRUQsT0FDRWpCLEtBQUEsQ0FBQWdDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXlCLEdBQ3RDbEMsS0FBQSxDQUFBZ0MsYUFBQSxhQUFLMUIsTUFBTSxDQUFDa0MsSUFBSSxDQUFNLEVBQ3JCN0IsT0FBTyxHQUFHeUIsSUFBSSxHQUFHTCxJQUFJLENBQ2xCO1VBRVYifQ==
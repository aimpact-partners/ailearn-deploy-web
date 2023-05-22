System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn@1.0.0/prompt-models", "@beyond-js/react-18-widgets@0.0.5/hooks", "@bgroup/ui@0.0.34/form", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, PromptEdit, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_5 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn/prompt-models', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@bgroup/ui/form', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn@1.0.0/prompts/edit');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 3139732827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptEdit = PromptEdit;
          var React = require("react");
          var _form = require("@bgroup/ui/form");
          /*bundle*/
          function PromptEdit({
            prompt
          }) {
            const [ready, setReady] = React.useState(prompt.loaded);
            console.log(10, PerformancePaintTiming);
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
              console.log(1, prompt);
              await prompt.save({
                goals: goals,
                mission: mission
              });
              toggleEdition();
            };
            const text = React.createElement(React.Fragment, null, React.createElement("h4", null, "Mission"), React.createElement("div", {
              className: "my-component__content"
            }, mission), React.createElement("hr", null), React.createElement("h4", null, "Goals"), React.createElement("div", {
              className: "my-component__content"
            }, goals));
            const form = React.createElement(React.Fragment, null, React.createElement(_form.BeyondForm, {
              onSubmit: handleSubmit,
              className: "results-form"
            }, React.createElement("p", {
              htmlFor: ""
            }, "Mission"), React.createElement("textarea", {
              className: "my-component__textarea",
              value: mission,
              onChange: handleMission
            }), React.createElement("p", {
              htmlFor: ""
            }, "Goals"), React.createElement("textarea", {
              className: "my-component__textarea",
              value: goals,
              onChange: handleGoals
            }), React.createElement("div", {
              className: "form-buttons"
            }, React.createElement("button", {
              type: "submit",
              className: "form-button"
            }, "Save"), React.createElement("button", {
              className: "form-button",
              onClick: toggleEdition
            }, "Cancel"))));
            return React.createElement("div", {
              className: "assinment-form-content"
            }, React.createElement("h2", null, prompt.name), edition ? form : text, !edition && React.createElement("div", {
              className: "form-buttons"
            }, React.createElement("button", {
              className: "form-button",
              onClick: toggleEdition
            }, "Edit")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtjQUFDTyxPQUFPLEVBQUVqQjtZQUFhLFVBRTdDLENBRVosQ0FDRztVQUVWIiwibmFtZXMiOlsiUHJvbXB0RWRpdCIsInByb21wdCIsInJlYWR5Iiwic2V0UmVhZHkiLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZGVkIiwiY29uc29sZSIsImxvZyIsIlBlcmZvcm1hbmNlUGFpbnRUaW1pbmciLCJlZGl0aW9uIiwic2V0SXNFZGl0TW9kZSIsIm1pc3Npb24iLCJzZXRNaXNzaW9uIiwiZ29hbHMiLCJzZXRHb2FscyIsInRvZ2dsZUVkaXRpb24iLCJoYW5kbGVNaXNzaW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUdvYWxzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzYXZlIiwidGV4dCIsImNsYXNzTmFtZSIsImZvcm0iLCJCZXlvbmRGb3JtIiwib25TdWJtaXQiLCJodG1sRm9yIiwib25DaGFuZ2UiLCJ0eXBlIiwib25DbGljayIsIm5hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvY29udHJvbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
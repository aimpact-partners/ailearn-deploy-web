System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/ailearn@1.0.0/prompt-models", "@beyond-js/react-18-widgets@0.0.5/hooks", "@bgroup/ui@0.0.34/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, promptForm, __beyond_pkg, hmr;
  _export("promptForm", void 0);
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
          "vspecifier": "@aimpact/ailearn@1.0.0/prompts/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn/prompt-models', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@bgroup/ui/form', dependency_4]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 2093420364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.promptForm = promptForm;
          var React = require("react");
          var _promptModels = require("@aimpact/ailearn/prompt-models");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("@bgroup/ui/form");
          /*bundle*/
          function promptForm(id) {
            const prompt = new _promptModels.Prompt(parseInt(id));
            prompt.load();
            const [ready, setReady] = React.useState(prompt.loaded);
            (0, _hooks.useBinder)([prompt], () => {
              setReady(prompt.landed);
              setGoals(prompt.goals);
              setMission(prompt.mission);
            });
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
            }, React.createElement("label", {
              htmlFor: ""
            }, "Mission"), React.createElement("textarea", {
              className: "my-component__textarea",
              value: mission,
              onChange: handleMission
            }), React.createElement("label", {
              htmlFor: ""
            }, "Goals"), React.createElement("textarea", {
              className: "my-component__textarea",
              value: goals,
              onChange: handleGoals
            }), React.createElement("div", {
              className: "my-component__button-group"
            }, React.createElement("button", {
              type: "submit",
              className: "my-component__button"
            }, "Save"), React.createElement("button", {
              className: "my-component__button",
              onClick: toggleEdition
            }, "Cancel"))));
            return React.createElement("div", {
              className: "my-component"
            }, React.createElement("h2", null, prompt.name), edition ? form : text, !edition && React.createElement("div", {
              className: "my-component__button-group"
            }, React.createElement("button", {
              className: "my-component__button",
              onClick: toggleEdition
            }, "Edit")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "promptForm",
        "name": "promptForm"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'promptForm') && _export("promptForm", promptForm = require ? require('./control').promptForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNCcEIsZ0NBQUtOLE1BQU0sQ0FBQ2tDLElBQUksQ0FBTSxFQUNyQnBCLE9BQU8sR0FBR2EsSUFBSSxHQUFHRixJQUFJLEVBRXJCLENBQUNYLE9BQU8sSUFDUFI7Y0FBS29CLFNBQVMsRUFBQztZQUE0QixHQUN6Q3BCO2NBQVFvQixTQUFTLEVBQUMsc0JBQXNCO2NBQUNPLE9BQU8sRUFBRWpCO1lBQWEsVUFFdEQsQ0FFWixDQUNHO1VBRVYiLCJuYW1lcyI6WyJwcm9tcHRGb3JtIiwiaWQiLCJwcm9tcHQiLCJQcm9tcHQiLCJwYXJzZUludCIsImxvYWQiLCJyZWFkeSIsInNldFJlYWR5IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRlZCIsImxhbmRlZCIsInNldEdvYWxzIiwiZ29hbHMiLCJzZXRNaXNzaW9uIiwibWlzc2lvbiIsImVkaXRpb24iLCJzZXRJc0VkaXRNb2RlIiwidG9nZ2xlRWRpdGlvbiIsImhhbmRsZU1pc3Npb24iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlR29hbHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNhdmUiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwiZm9ybSIsIkJleW9uZEZvcm0iLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJvbkNoYW5nZSIsInR5cGUiLCJvbkNsaWNrIiwibmFtZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9jb250cm9sLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
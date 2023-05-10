System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@ai-clase/demo@0.0.1/assistant", "@ai-clase/demo@0.0.1/assignments", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aiClaseDemo001Assistant) {
      dependency_3 = _aiClaseDemo001Assistant;
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
          "vspecifier": "@ai-clase/demo@0.0.1/assignment-page"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['react', dependency_2], ['@ai-clase/demo/assistant', dependency_3], ['@ai-clase/demo/assignments', dependency_4], ['@beyond-js/react-18-widgets/page', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-page",
        "vspecifier": "@ai-clase/demo@0.0.1/assignment-page",
        "is": "page",
        "route": "/assignments/${assignment}"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@ai-clase/demo@0.0.1/assignment-page');
      ims = new Map();
      /********************************************************
      INTERNAL MODULE: ./Assistant/LastMessage/AssistantMessage
      ********************************************************/
      ims.set('./Assistant/LastMessage/AssistantMessage', {
        hash: 1162863589,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _react = require("react");
          const {
            useEffect,
            useState,
            useRef
          } = _react.default;
          const AssistantMessage = ({
            assistant,
            text
          }) => {
            const {
              voice
            } = assistant.conversation;
            const [isHidden, setIsHidden] = useState(false);
            const [, setIsPaused] = useState(false);
            const [, setCurrentWord] = useState(-1);
            const {
              reproduced,
              unreproduced
            } = (() => {
              if (!voice.speaking) return {
                reproduced: text,
                unreproduced: ""
              };
              const lastWordSize = text.slice(voice.currentWord).split(" ")[0].length;
              const reproduced = text.slice(0, voice.currentWord + lastWordSize);
              const unreproduced = text.slice(voice.currentWord + lastWordSize);
              return {
                reproduced,
                unreproduced
              };
            })();
            useEffect(() => {
              const update = () => {
                setCurrentWord(voice.currentWord);
                setIsPaused(voice.paused);
              };
              voice.on("change", update);
              return () => voice.off("change", update);
            });
            const container = useRef(null);
            useEffect(() => {
              const {
                current
              } = container;
              window.asd = current;
              const height = current.closest(".last-message-container").clientHeight;
              current.closest(".last").style.height = `${height}px`;
            }, [isHidden]);
            const handleHidden = isHidden => setIsHidden(isHidden);
            if (isHidden) return _react.default.createElement("div", {
              ref: container,
              className: "assistant-button",
              onClick: () => handleHidden(false)
            }, "Mostrar");
            const handleReproductionClick = () => {
              if (voice.paused) {
                voice.resume();
                return;
              }
              voice.speaking ? voice.pause() : voice.play();
            };
            return _react.default.createElement("div", {
              ref: container
            }, _react.default.createElement("div", {
              className: "text"
            }, _react.default.createElement("span", {
              className: "reproduced"
            }, reproduced), _react.default.createElement("span", {
              className: "unreproduced"
            }, unreproduced)), _react.default.createElement("div", {
              className: "assistant-button",
              onClick: handleReproductionClick,
              disabled: voice.speaking
            }, voice.paused ? "Pausado" : voice.speaking ? "Reproduciendo …" : "Reproducir …"), _react.default.createElement("div", {
              className: "assistant-button"
            }, "Hyper real voice"), _react.default.createElement("div", {
              className: "assistant-button",
              onClick: () => handleHidden(true)
            }, "Ocultar"));
          };
          var _default = AssistantMessage;
          exports.default = _default;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./Assistant/LastMessage/index
      *********************************************/

      ims.set('./Assistant/LastMessage/index', {
        hash: 2307372927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _AssistantMessage = require("./AssistantMessage");
          const {
            useState,
            useEffect,
            useRef
          } = React;
          const LastMessage = ({
            assistant
          }) => {
            const {
              conversation
            } = assistant;
            const [userMessage, setUserMessage] = useState(conversation.lastMessage.user);
            const [assistantMessage, setAssistantMessage] = useState(conversation.lastMessage.assistant);
            const container = useRef(null);
            useEffect(() => {
              const handleChange = () => {
                const {
                  user,
                  assistant
                } = conversation.lastMessage;
                setUserMessage(user);
                setAssistantMessage(assistant);
              };
              conversation.on('change', handleChange);
              return () => conversation.off('change', handleChange);
            }, [conversation]);
            useEffect(() => {
              const {
                current
              } = container;
              const height = current.clientHeight;
              current.parentElement.style.height = `${height}px`;
            });
            return React.createElement("div", {
              className: "last-message-container",
              ref: container
            }, React.createElement("div", {
              className: "user-message"
            }, userMessage), React.createElement("div", {
              className: "assistant-message"
            }, React.createElement(_AssistantMessage.default, {
              assistant: assistant,
              text: assistantMessage
            })));
          };
          var _default = LastMessage;
          exports.default = _default;
        }
      });

      /************************************************
      INTERNAL MODULE: ./Assistant/Messages/UserMessage
      ************************************************/

      ims.set('./Assistant/Messages/UserMessage', {
        hash: 3534949266,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _UserMessageActions = require("./UserMessageActions");
          const {
            useState,
            useRef,
            useEffect
          } = React;
          const UserMessage = ({
            assistant,
            index,
            text
          }) => {
            const [isEditing, setIsEditing] = useState(false);
            const [showActions, setShowActions] = useState(false);
            const textRef = useRef(null);
            useEffect(() => {
              if (isEditing && textRef.current) {
                textRef.current.focus();
              }
            }, [isEditing]);
            const handleTextClick = () => {
              setIsEditing(true);
              setShowActions(true);
            };
            const handleConfirm = () => {
              assistant.conversation.update(index, textRef.current.innerText);
              setIsEditing(false);
              setShowActions(false);
            };
            const handleCancel = () => {
              setIsEditing(false);
              setShowActions(false);
            };
            const handleBlur = event => {
              const {
                relatedTarget: target
              } = event;
              if (!target || target.tagName === 'BUTTON' && target.closest('.user-message-actions')) return;
              handleCancel();
            };
            return React.createElement("div", {
              className: "message message-user"
            }, React.createElement("div", {
              key: "edited-text",
              className: `text ${isEditing ? 'editing' : ''}`,
              onClick: handleTextClick,
              contentEditable: isEditing,
              onBlur: handleBlur,
              ref: textRef,
              dangerouslySetInnerHTML: {
                __html: text
              }
            }), showActions && React.createElement(_UserMessageActions.default, {
              onConfirm: handleConfirm,
              onCancel: handleCancel,
              targetElement: textRef.current
            }));
          };
          var _default = UserMessage;
          exports.default = _default;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./Assistant/Messages/UserMessageActions
      *******************************************************/

      ims.set('./Assistant/Messages/UserMessageActions', {
        hash: 2333950730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          const {
            useRef,
            useEffect
          } = React;
          const UserMessageActions = ({
            onConfirm,
            onCancel,
            targetElement
          }) => {
            const messageRef = useRef(null);
            const positionRef = useRef('bottom');
            useEffect(() => {
              const messageHeight = messageRef.current?.clientHeight || 0;
              const targetRect = targetElement.getBoundingClientRect();
              const bottomSpace = window.innerHeight - targetRect.bottom;
              const topSpace = targetRect.top;
              positionRef.current = bottomSpace > messageHeight || bottomSpace > topSpace ? 'bottom' : 'top';
            }, [targetElement]);
            return React.createElement("div", {
              className: `user-message-actions ${positionRef.current}`,
              ref: messageRef
            }, React.createElement("button", {
              className: "confirm-button",
              onClick: onConfirm
            }, "Confirm"), React.createElement("button", {
              className: "cancel-button",
              onClick: onCancel
            }, "Cancel"));
          };
          var _default = UserMessageActions;
          exports.default = _default;
        }
      });

      /******************************************
      INTERNAL MODULE: ./Assistant/Messages/index
      ******************************************/

      ims.set('./Assistant/Messages/index', {
        hash: 1912053337,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _UserMessage = require("./UserMessage");
          const {
            useEffect,
            useState
          } = React;
          const Conversation = ({
            assistant
          }) => {
            const {
              conversation
            } = assistant;
            const [messages, setMessages] = useState(conversation.messages);
            const [goalsShow, setGoalsShow] = useState(true);
            const {
              goals
            } = assistant.assignment;
            useEffect(() => {
              const handleChange = () => {
                setMessages(conversation.messages);
              };
              conversation.on('change', handleChange);
              return () => conversation.off('change', handleChange);
            }, [conversation]);
            const handleGoalsShow = () => setGoalsShow(!goalsShow);
            return React.createElement("div", {
              className: "conversation"
            }, React.createElement("div", {
              className: "goals-header"
            }, React.createElement("div", {
              className: "goals-title"
            }, goalsShow ? 'Objetivos:' : ''), React.createElement("div", {
              className: "goals-toggle",
              onClick: handleGoalsShow
            }, goalsShow ? 'Ocultar' : 'Mostrar objetivos')), goalsShow && React.createElement("div", {
              className: "goals"
            }, goals.split('\n').map((line, index) => {
              return React.createElement("p", {
                key: index
              }, line, index !== goals.split('\n').length - 1 && React.createElement("br", null));
            })), messages.map((message, index) => message.role === 'user' ? React.createElement(_UserMessage.default, {
              key: index,
              assistant: assistant,
              index: index,
              text: message.content
            }) : React.createElement("div", {
              key: index,
              className: `message message-${message.role}`
            }, message.content)));
          };
          var _default = Conversation;
          exports.default = _default;
        }
      });

      /************************************
      INTERNAL MODULE: ./Assistant/Recorder
      ************************************/

      ims.set('./Assistant/Recorder', {
        hash: 1601081205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          const {
            useState,
            useEffect
          } = React;
          const Recorder = ({
            assistant
          }) => {
            const {
              recorder
            } = assistant;
            const [isRecording, setIsRecording] = useState(recorder.recording);
            const [isTranscribing, setIsTranscribing] = useState(recorder.transcribing);
            const handleStart = () => {
              !recorder.recording && recorder.record();
            };
            const handleStop = () => {
              recorder.stop();
            };
            const handleContextMenu = e => {
              e.preventDefault();
            };
            useEffect(() => {
              const handleChange = () => {
                setIsRecording(recorder.recording);
                setIsTranscribing(recorder.transcribing);
              };
              recorder.on('change', handleChange);
              return () => recorder.off('change', handleChange);
            }, [recorder]);
            const text = isRecording ? 'Escuchándote' : isTranscribing ? 'Transcribiendo' : 'Escuchar';
            return React.createElement("button", {
              className: `recorder-button ${isRecording || isTranscribing ? "recording" : ""}`,
              onMouseDown: handleStart,
              onMouseUp: handleStop,
              onTouchStart: handleStart,
              onTouchEnd: handleStop,
              onKeyDown: e => e.key === " " && handleStart(),
              onKeyUp: e => e.key === " " && handleStop(),
              onContextMenu: handleContextMenu
            }, text);
          };
          var _default = Recorder;
          exports.default = _default;
        }
      });

      /*********************************
      INTERNAL MODULE: ./Assistant/index
      *********************************/

      ims.set('./Assistant/index', {
        hash: 3142997542,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _Recorder = require("./Recorder");
          var _LastMessage = require("./LastMessage");
          var _Messages = require("./Messages");
          const AssistantComponent = ({
            assistant
          }) => {
            return React.createElement("div", {
              className: "assistant"
            }, React.createElement("div", {
              className: "messages"
            }, React.createElement(_Messages.default, {
              assistant: assistant
            })), React.createElement("div", {
              className: "recorder"
            }, React.createElement(_Recorder.default, {
              assistant: assistant
            })), React.createElement("div", {
              className: "last"
            }, React.createElement(_LastMessage.default, {
              assistant: assistant
            })));
          };
          var _default = AssistantComponent;
          exports.default = _default;
        }
      });

      /**********************
      INTERNAL MODULE: ./Page
      **********************/

      ims.set('./Page', {
        hash: 3673073757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _Assistant = require("./Assistant");
          var _assistant = require("@ai-clase/demo/assistant");
          var _assignments = require("@ai-clase/demo/assignments");
          const Page = ({
            uri: {
              vars
            }
          }) => {
            const assignment = _assignments.assignments.get(vars.get("assignment"));
            const assistant = assignment ? new _assistant.Assistant(assignment) : void 0;
            return assignment ? React.createElement(_Assistant.default, {
              assistant: assistant
            }) : "Assignment not found.";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoRyxTQUFTLEVBQUVBO1lBQVMsRUFBRyxDQUFNLEVBQ2pFRjtjQUFLZ0MsU0FBUyxFQUFDO1lBQU0sR0FDakJoQyxvQkFBQ3dDLG9CQUFXO2NBQUN0QyxTQUFTLEVBQUVBO1lBQVMsRUFBRyxDQUNsQyxDQUNKO1VBRWQsQ0FBQztVQUFDLGVBRWFzSCxrQkFBa0I7VUFBQWpGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCakM7VUFDQTtVQUNBO1VBQ0E7VUFNQSxNQUFNbUYsSUFBSSxHQUFHLENBQUM7WUFBRUMsR0FBRyxFQUFFO2NBQUVDO1lBQUk7VUFBRSxDQUFhLEtBQUk7WUFDNUMsTUFBTWpDLFVBQVUsR0FBR2tDLHdCQUFXLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUQsTUFBTTVILFNBQVMsR0FBR3lGLFVBQVUsR0FBRyxJQUFJb0Msb0JBQVMsQ0FBQ3BDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUVqRSxPQUFPQSxVQUFVLEdBQUczRixvQkFBQ3dILGtCQUFrQjtjQUFDdEgsU0FBUyxFQUFFQTtZQUFTLEVBQUksR0FBRyx1QkFBdUI7VUFDNUYsQ0FBQztVQUFDLGVBRWF3SCxJQUFJO1VBQUFuRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQm5CO1VBQ0E7VUFFTztVQUFVLE1BQ1h5RixVQUFXLFNBQVFDLCtCQUF5QjtZQUNoRCxJQUFJQyxNQUFNO2NBQ1IsT0FBT1IsYUFBSTtZQUNiOztVQUNEbkYiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlJlYWN0IiwiQXNzaXN0YW50TWVzc2FnZSIsImFzc2lzdGFudCIsInRleHQiLCJ2b2ljZSIsImNvbnZlcnNhdGlvbiIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJzZXRJc1BhdXNlZCIsInNldEN1cnJlbnRXb3JkIiwicmVwcm9kdWNlZCIsInVucmVwcm9kdWNlZCIsInNwZWFraW5nIiwibGFzdFdvcmRTaXplIiwic2xpY2UiLCJjdXJyZW50V29yZCIsInNwbGl0IiwibGVuZ3RoIiwidXBkYXRlIiwicGF1c2VkIiwib24iLCJvZmYiLCJjb250YWluZXIiLCJjdXJyZW50Iiwid2luZG93IiwiYXNkIiwiaGVpZ2h0IiwiY2xvc2VzdCIsImNsaWVudEhlaWdodCIsInN0eWxlIiwiaGFuZGxlSGlkZGVuIiwicmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsImhhbmRsZVJlcHJvZHVjdGlvbkNsaWNrIiwicmVzdW1lIiwicGF1c2UiLCJwbGF5IiwiZGlzYWJsZWQiLCJleHBvcnRzIiwiTGFzdE1lc3NhZ2UiLCJ1c2VyTWVzc2FnZSIsInNldFVzZXJNZXNzYWdlIiwibGFzdE1lc3NhZ2UiLCJ1c2VyIiwiYXNzaXN0YW50TWVzc2FnZSIsInNldEFzc2lzdGFudE1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJwYXJlbnRFbGVtZW50IiwiVXNlck1lc3NhZ2UiLCJpbmRleCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInNob3dBY3Rpb25zIiwic2V0U2hvd0FjdGlvbnMiLCJ0ZXh0UmVmIiwiZm9jdXMiLCJoYW5kbGVUZXh0Q2xpY2siLCJoYW5kbGVDb25maXJtIiwiaW5uZXJUZXh0IiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlQmx1ciIsImV2ZW50IiwicmVsYXRlZFRhcmdldCIsInRhcmdldCIsInRhZ05hbWUiLCJrZXkiLCJjb250ZW50RWRpdGFibGUiLCJvbkJsdXIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlVzZXJNZXNzYWdlQWN0aW9ucyIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwidGFyZ2V0RWxlbWVudCIsIm1lc3NhZ2VSZWYiLCJwb3NpdGlvblJlZiIsIm1lc3NhZ2VIZWlnaHQiLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tU3BhY2UiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsInRvcFNwYWNlIiwidG9wIiwiQ29udmVyc2F0aW9uIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImdvYWxzU2hvdyIsInNldEdvYWxzU2hvdyIsImdvYWxzIiwiYXNzaWdubWVudCIsImhhbmRsZUdvYWxzU2hvdyIsIm1hcCIsImxpbmUiLCJtZXNzYWdlIiwicm9sZSIsImNvbnRlbnQiLCJSZWNvcmRlciIsInJlY29yZGVyIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsInJlY29yZGluZyIsImlzVHJhbnNjcmliaW5nIiwic2V0SXNUcmFuc2NyaWJpbmciLCJ0cmFuc2NyaWJpbmciLCJoYW5kbGVTdGFydCIsInJlY29yZCIsImhhbmRsZVN0b3AiLCJzdG9wIiwiaGFuZGxlQ29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJvbktleURvd24iLCJvbktleVVwIiwib25Db250ZXh0TWVudSIsIkFzc2lzdGFudENvbXBvbmVudCIsIk1lc3NhZ2VzIiwiUGFnZSIsInVyaSIsInZhcnMiLCJhc3NpZ25tZW50cyIsImdldCIsIkFzc2lzdGFudCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJBc3Npc3RhbnQvTGFzdE1lc3NhZ2UvQXNzaXN0YW50TWVzc2FnZS50c3giLCJBc3Npc3RhbnQvTGFzdE1lc3NhZ2UvaW5kZXgudHN4IiwiQXNzaXN0YW50L01lc3NhZ2VzL1VzZXJNZXNzYWdlLnRzeCIsIkFzc2lzdGFudC9NZXNzYWdlcy9Vc2VyTWVzc2FnZUFjdGlvbnMudHN4IiwiQXNzaXN0YW50L01lc3NhZ2VzL2luZGV4LnRzeCIsIkFzc2lzdGFudC9SZWNvcmRlci50c3giLCJBc3Npc3RhbnQvaW5kZXgudHN4IiwiUGFnZS50c3giLCJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
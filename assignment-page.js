System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/reactive-2@1.0.0/model", "@aimpact/ailearn@1.0.0/config", "@aimpact/backend@1.0.0/aihub", "@aimpact/ailearn/start", "@aimpact/ailearn@1.0.0/assistant", "@aimpact/ailearn@1.0.0/subject-models", "@aimpact/ailearn@1.0.0/assignments", "dayjs@1.11.7", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@beyond-js/react-18-widgets@0.0.5/hooks", "@aimpact/ailearn@1.0.0/prompts/edit", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, XHRLoader, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets005Page) {
      dependency_2 = _beyondJsReact18Widgets005Page;
    }, function (_beyondJsReactive2100Model) {
      dependency_3 = _beyondJsReactive2100Model;
    }, function (_aimpactAilearn100Config) {
      dependency_4 = _aimpactAilearn100Config;
    }, function (_aimpactBackend100Aihub) {
      dependency_5 = _aimpactBackend100Aihub;
    }, function (_aimpactAilearnStart) {
      dependency_6 = _aimpactAilearnStart;
    }, function (_aimpactAilearn100Assistant) {
      dependency_7 = _aimpactAilearn100Assistant;
    }, function (_aimpactAilearn100SubjectModels) {
      dependency_8 = _aimpactAilearn100SubjectModels;
    }, function (_aimpactAilearn100Assignments) {
      dependency_9 = _aimpactAilearn100Assignments;
    }, function (_dayjs2) {
      dependency_10 = _dayjs2;
    }, function (_beyondJsKernel019Core) {
      dependency_11 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_beyondJsReact18Widgets005Hooks) {
      dependency_13 = _beyondJsReact18Widgets005Hooks;
    }, function (_aimpactAilearn100PromptsEdit) {
      dependency_14 = _aimpactAilearn100PromptsEdit;
    }, function (_beyondJsKernel019Styles) {
      dependency_15 = _beyondJsKernel019Styles;
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
          "vspecifier": "@aimpact/ailearn@1.0.0/assignment-page"
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive-2/model', dependency_3], ['@aimpact/ailearn/config', dependency_4], ['@aimpact/backend/aihub', dependency_5], ['@aimpact/ailearn/wrapper', dependency_6], ['@aimpact/ailearn/assistant', dependency_7], ['@aimpact/ailearn/subject-models', dependency_8], ['@aimpact/ailearn/assignments', dependency_9], ['dayjs', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/ailearn/prompts/edit', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-page",
        "vspecifier": "@aimpact/ailearn@1.0.0/assignment-page",
        "is": "page",
        "route": "/assignments/${assignment}"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn@1.0.0/assignment-page');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2379777963,
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
            createStore(language) {
              this.#store = new _store.StoreManager(this.uri.vars.get("assignment"));
              return this.#store;
            }
            get Widget() {
              return _views.default;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/audio
      *****************************/

      ims.set('./store/audio', {
        hash: 1476412069,
        creator: function (require, exports) {
          // import { Events, PendingPromise } from '@beyond-js/kernel/core';
          // import { timeFormat } from './time';
          // import { Subject } from '@aimpact/voice-genius/models';
          // import dayjs from 'dayjs';
          // import { ReactiveModel } from '@beyond-js/reactive/model';
          // interface IAudioManager {
          // 	error: string;
          // 	generateId(audioBuffer: AudioBuffer): Promise<string>;
          // 	load(source: File): Promise<void>;
          // }
          // export class AudioManager extends ReactiveModel<IAudioManager> implements IAudioManager {
          // 	#context;
          // 	#promise: PendingPromise<any>;
          // 	#element;
          // 	#source;
          // 	#reader;
          // 	#duration;
          // 	#error;
          // 	get error() {
          // 		return this.#error;
          // 	}
          // 	#id;
          // 	#model;
          // 	get id() {
          // 		return this.#id;
          // 	}
          // 	async generateId(audioBuffer: AudioBuffer): Promise<string> {
          // 		const timestamp = new Date().getTime();
          // 		this.#id = `audio.${audioBuffer.duration}.${timestamp}`;
          // 		return this.#id;
          // 	}
          // 	load = (source, path) => {
          // 		if (this.#promise) return this.#promise;
          // 		const promise = new PendingPromise<void>();
          // 		this.#promise = promise;
          // 		this.#context = new AudioContext();
          // 		this.#element = new Audio(source);
          // 		const reader = new FileReader();
          // 		this.#source = source;
          // 		this.#reader = source;
          // 		reader.addEventListener('load', async result => {
          // 			this.#context.decodeAudioData(reader.result as ArrayBuffer, async buffer => {
          // 				this.generateId(buffer);
          // 				const duration = buffer.duration;
          // 				this.#duration = duration;
          // 				const item = new Subject();
          // 				let number = parseInt(localStorage.getItem('recording.number')) ?? 1;
          // 				const minutes = Math.floor((duration % 3600) / 60);
          // 				if (minutes > 3.5) {
          // 					promise.resolve({ error: 'Recording is too long' });
          // 					return;
          // 				}
          // 				const properties = {
          // 					id: this.#id,
          // 					name: source.name ?? `Recording ${number}`,
          // 					createdAt: dayjs().unix(),
          // 					path,
          // 					source: source,
          // 					duration: timeFormat(duration),
          // 				};
          // 				item.set(properties);
          // 				await item.save();
          // 				this.triggerEvent();
          // 				promise.resolve(item);
          // 			});
          // 		});
          // 		reader.readAsArrayBuffer(source);
          // 		return promise;
          // 	};
          // 	get duration() {
          // 		return timeFormat(this.#duration);
          // 	}
          // }
          "use strict";
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 477527176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _config = require("@aimpact/ailearn/config");
          var _aihub = require("@aimpact/backend/aihub");
          var _wrapper = require("@aimpact/ailearn/wrapper");
          var _assistant = require("@aimpact/ailearn/assistant");
          var _subjectModels = require("@aimpact/ailearn/subject-models");
          var _assignments = require("@aimpact/ailearn/assignments");
          var _dayjs = require("dayjs");
          var _xhr = require("./xhr");
          const SERVER_URL = `${_config.default.params.SERVER_URL}/upload`;
          class StoreManager extends _model.ReactiveModel {
            #aihubModel;
            #assistant;
            get assistant() {
              return this.#assistant;
            }
            #assignments;
            get assignments() {
              return this.#assignments;
            }
            #assigment;
            get assigment() {
              return this.#assigment;
            }
            constructor(assignment) {
              super();
              this.#aihubModel = new _aihub.AIModel();
              this.#assignments = _assignments.assignments;
              this.#assigment = _wrapper.wrapper.getByName(assignment);
              this.#assistant = new _assistant.Assistant(this.#assigment);
            }
            async saveAudio(audio, id = undefined) {
              this.fetching = true;
              const number = localStorage.getItem('recording.number') ? parseInt(localStorage.getItem('recording.number')) : 0;
              id = id ?? `recording.${performance.now()}`;
              const response = await this.publishRecording(audio);
              if (!response.status) {
                console.error('error', response.message);
                return;
              }
              const data = await this.#aihubModel.transcription(response.file, 'es');
              if (!data.status) {
                console.error('error', data.message);
                return;
              }
              await this.#assistant.question(data.text);
              const properties = {
                id,
                name: audio.name ?? `Recording ${number}`,
                path: response.file,
                createdAt: (0, _dayjs.default)().unix(),
                source: audio
              };
              // return this.saveItem(properties);
            }

            async saveItem(properties) {
              try {
                const item = new _subjectModels.Subject();
                await item.set(properties);
                await item.save();
                this.fetching = false;
                return item;
              } catch (e) {
                console.error('error saving', e);
              }
            }
            publishRecording = async audio => {
              const form = new FormData();
              form.append('audio', audio);
              form.append('project', _config.default.package);
              form.append('container', 'audios');
              form.append('fileName', 'recoring.mp3');
              const xhr = new _xhr.XHRLoader();
              const response = await xhr.upload(form, SERVER_URL);
              return response.json();
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************
      INTERNAL MODULE: ./store/time
      ****************************/

      ims.set('./store/time', {
        hash: 2373484433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.timeFormat = timeFormat;
          function timeFormat(time) {
            const hours = Math.floor(time / 3600);
            const minutes = Math.floor(time % 3600 / 60);
            const seconds = Math.floor(time % 60);
            let timeString = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            if (hours > 0) {
              timeString = `${hours.toString().padStart(2, "0")}:${timeString}`;
            }
            return timeString;
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./store/xhr
      ***************************/

      ims.set('./store/xhr', {
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

      /**************************************************************
      INTERNAL MODULE: ./views/Assistant/LastMessage/AssistantMessage
      **************************************************************/

      ims.set('./views/Assistant/LastMessage/AssistantMessage', {
        hash: 767741361,
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

      /***************************************************
      INTERNAL MODULE: ./views/Assistant/LastMessage/index
      ***************************************************/

      ims.set('./views/Assistant/LastMessage/index', {
        hash: 270892499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _AssistantMessage = require("./AssistantMessage");
          var _context = require("../../context");
          const {
            useState,
            useEffect,
            useRef
          } = React;
          const LastMessage = () => {
            const {
              assistant,
              assistant: {
                conversation
              }
            } = (0, _context.useAssigmentContext)();
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
              conversation.on("change", handleChange);
              return () => conversation.off("change", handleChange);
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

      /******************************************************
      INTERNAL MODULE: ./views/Assistant/Messages/UserMessage
      ******************************************************/

      ims.set('./views/Assistant/Messages/UserMessage', {
        hash: 1795736163,
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
              if (!target || target.tagName === "BUTTON" && target.closest(".user-message-actions")) return;
              handleCancel();
            };
            return React.createElement("div", {
              className: "message message-user"
            }, React.createElement("div", {
              key: "edited-text",
              className: `text ${isEditing ? "editing" : ""}`,
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

      /*************************************************************
      INTERNAL MODULE: ./views/Assistant/Messages/UserMessageActions
      *************************************************************/

      ims.set('./views/Assistant/Messages/UserMessageActions', {
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

      /************************************************
      INTERNAL MODULE: ./views/Assistant/Messages/index
      ************************************************/

      ims.set('./views/Assistant/Messages/index', {
        hash: 247873501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var React = require("react");
          var _UserMessage = require("./UserMessage");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          const {
            useEffect,
            useState
          } = React;
          function Messages() {
            const {
              store,
              assistant,
              assistant: {
                conversation
              }
            } = (0, _context.useAssigmentContext)();
            const [messages, setMessages] = useState(conversation.messages);
            const [goalsShow, setGoalsShow] = useState(true);
            const {
              goals
            } = assistant.assignment;
            const handleGoalsShow = () => setGoalsShow(!goalsShow);
            const handleChange = () => setMessages(conversation.messages);
            (0, _hooks.useBinder)([conversation], handleChange);
            return React.createElement("div", {
              className: "conversation"
            }, React.createElement("div", {
              className: "goals-header"
            }, React.createElement("div", {
              className: "goals-title"
            }, goalsShow ? "Objetivos:" : ""), React.createElement("div", {
              className: "goals-toggle",
              onClick: handleGoalsShow
            }, goalsShow ? "Ocultar" : "Mostrar objetivos")), goalsShow && React.createElement("div", {
              className: "goals"
            }, goals.split("\n").map((line, index) => {
              return React.createElement("p", {
                key: index
              }, line, index !== goals.split("\n").length - 1 && React.createElement("br", null));
            })), messages.map((message, index) => message.role === "user" ? React.createElement(_UserMessage.default, {
              key: index,
              assistant: assistant,
              index: index,
              text: message.content
            }) : React.createElement("div", {
              key: index,
              className: `message message-${message.role}`
            }, message.content)));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/Assistant/recorder-button
      *************************************************/

      ims.set('./views/Assistant/recorder-button', {
        hash: 3645157892,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecorderButton = RecorderButton;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          const {
            useState
          } = React;
          function RecorderButton() {
            const {
              store,
              assistant: {
                recorder
              }
            } = (0, _context.useAssigmentContext)();
            const [isRecording, setIsRecording] = useState(recorder.recording);
            const [isTranscribing, setIsTranscribing] = useState(recorder.transcribing);
            const handleStart = () => {
              !recorder.recording && recorder.record();
            };
            const handleStop = async () => {
              const recording = await recorder.stop();
              store.saveAudio(recording);
            };
            const handleContextMenu = e => {
              e.preventDefault();
            };
            const handleChange = () => {
              setIsRecording(recorder.recording);
              setIsTranscribing(recorder.transcribing);
            };
            (0, _hooks.useBinder)([recorder], handleChange);
            //   useEffect(() => {
            //     const handleChange = () => {
            //       setIsRecording(recorder.recording);
            //       setIsTranscribing(recorder.transcribing);
            //     };
            //     recorder.on("change", handleChange);
            //     return () => recorder.off("change", handleChange);
            //   }, [recorder]);
            const text = isRecording ? "Escuchándote" : isTranscribing ? "Transcribiendo" : "Escuchar";
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
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/Assistant/use-recorder
      **********************************************/

      ims.set('./views/Assistant/use-recorder', {
        hash: 2402895275,
        creator: function (require, exports) {
          // import * as React from 'react';
          // import { routing } from '@beyond-js/kernel/routing';
          // import dayjs from 'dayjs';
          // import { Toasts, toast } from '@bgroup/ui/toast';
          // export function useRecorder(ref) {
          // 	const {
          // 		store: { recorder },
          // 		store,
          // 		fetching,
          // 	} = useMainContext();
          // 	const [recording, setRecording] = React.useState<boolean>(false);
          // 	const onStart = async event => {
          // 		event.preventDefault();
          // 		ref.current.classList.toggle('is-recording');
          // 		recorder.record();
          // 		setRecording(!recording);
          // 	};
          // 	const stop = async event => {
          // 		event.preventDefault();
          // 		ref.current.classList.toggle('is-recording');
          // 		const audio = await recorder.stop();
          // 		const item = await store.saveAudio(audio);
          // 		routing.pushState(`/ideas/detail/${item.id}`);
          // 		setRecording(!recording);
          // 	};
          // 	const action = recording ? stop : onStart;
          // 	return [action];
          // }
          "use strict";
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 809034707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAssigmentContext = exports.AssigmentContext = void 0;
          var React = require("react");
          const AssigmentContext = React.createContext({});
          exports.AssigmentContext = AssigmentContext;
          const useAssigmentContext = () => React.useContext(AssigmentContext);
          exports.useAssigmentContext = useAssigmentContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2699604348,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = View;
          var React = require("react");
          var _Messages = require("./Assistant/Messages");
          var _context = require("./context");
          var _recorderButton = require("./Assistant/recorder-button");
          var _LastMessage = require("./Assistant/LastMessage");
          var _wrapper = require("@aimpact/ailearn/wrapper");
          var _edit = require("@aimpact/ailearn/prompts/edit");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function View({
            store,
            uri: {
              vars
            }
          }) {
            const {
              assistant,
              assigment
            } = store;
            const [edit, setEdit] = React.useState(_wrapper.wrapper.isEditing);
            (0, _hooks.useBinder)([_wrapper.wrapper], () => setEdit(_wrapper.wrapper.isUpdating));
            if (!assistant.assignment) {
              return React.createElement("h2", null, "Assignment not found");
            }
            return React.createElement(_context.AssigmentContext.Provider, {
              value: {
                assistant: assistant,
                store,
                edit
              }
            }, edit ? React.createElement(_edit.PromptEdit, {
              prompt: assigment
            }) : React.createElement("div", {
              className: "assistant"
            }, React.createElement("div", {
              className: "messages"
            }, React.createElement(_Messages.Messages, {
              assistant: assistant
            })), React.createElement("div", {
              className: "recorder"
            }, React.createElement(_recorderButton.RecorderButton, null)), React.createElement("div", {
              className: "last"
            }, React.createElement(_LastMessage.default, null))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store/xhr",
        "from": "XHRLoader",
        "name": "XHRLoader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'XHRLoader') && _export("XHRLoader", XHRLoader = require ? require('./store/xhr').XHRLoader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQ25OLFNBQVMsQ0FBQ0ksVUFBVSxFQUFFO2NBQ3pCLE9BQU91Rix1REFBNkI7O1lBR3RDLE9BQ0VBLG9CQUFDa0gseUJBQWdCLENBQUNPLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFO2dCQUFFck4sU0FBUyxFQUFFQSxTQUFTO2dCQUFFNkssS0FBSztnQkFBRW9DO2NBQUk7WUFBRSxHQUNwRUEsSUFBSSxHQUNIdEgsb0JBQUMySCxnQkFBVTtjQUFDQyxNQUFNLEVBQUVyTjtZQUFTLEVBQUksR0FFakN5RjtjQUFLOEIsU0FBUyxFQUFDO1lBQVcsR0FDeEI5QjtjQUFLOEIsU0FBUyxFQUFDO1lBQVUsR0FDdkI5QixvQkFBQ2lGLGtCQUFRO2NBQUM1SyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxDQUM5QixFQUNOMkY7Y0FBSzhCLFNBQVMsRUFBQztZQUFVLEdBQ3ZCOUIsb0JBQUM2Riw4QkFBYyxPQUFHLENBQ2QsRUFDTjdGO2NBQUs4QixTQUFTLEVBQUM7WUFBTSxHQUNuQjlCLG9CQUFDcUMsb0JBQVcsT0FBRyxDQUNYLENBRVQsQ0FDeUI7VUFFaEMiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJTRVJWRVJfVVJMIiwiY29uZmlnIiwicGFyYW1zIiwiUmVhY3RpdmVNb2RlbCIsImFzc2lzdGFudCIsImFzc2lnbm1lbnRzIiwiYXNzaWdtZW50IiwiY29uc3RydWN0b3IiLCJhc3NpZ25tZW50IiwiQUlNb2RlbCIsIndyYXBwZXIiLCJnZXRCeU5hbWUiLCJBc3Npc3RhbnQiLCJzYXZlQXVkaW8iLCJhdWRpbyIsImlkIiwidW5kZWZpbmVkIiwiZmV0Y2hpbmciLCJudW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlc3BvbnNlIiwicHVibGlzaFJlY29yZGluZyIsInN0YXR1cyIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwidHJhbnNjcmlwdGlvbiIsImZpbGUiLCJxdWVzdGlvbiIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInBhdGgiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic291cmNlIiwic2F2ZUl0ZW0iLCJpdGVtIiwiU3ViamVjdCIsInNldCIsInNhdmUiLCJlIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicGFja2FnZSIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJ0aW1lRm9ybWF0IiwidGltZSIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJ0aW1lU3RyaW5nIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInByb21pc2UiLCJ1cGxvYWRlZCIsInByb2dyZXNzIiwidXBsb2FkaW5nIiwiaXNVcGxvYWRlZCIsInVwbG9hZFByb2dyZXNzIiwiaGFzRXJyb3IiLCJvblByb2dyZXNzIiwiZXZlbnQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudCIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJ0cmlnZ2VyRXZlbnQiLCJvbkNvbXBsZXRlZCIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwib25FcnJvciIsInJlamVjdCIsIm9uQWJvcnQiLCJ1cmwiLCJzcGVjcyIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsImFib3J0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJSZWFjdCIsIkFzc2lzdGFudE1lc3NhZ2UiLCJ2b2ljZSIsImNvbnZlcnNhdGlvbiIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJzZXRJc1BhdXNlZCIsInNldEN1cnJlbnRXb3JkIiwicmVwcm9kdWNlZCIsInVucmVwcm9kdWNlZCIsInNwZWFraW5nIiwibGFzdFdvcmRTaXplIiwic2xpY2UiLCJjdXJyZW50V29yZCIsInNwbGl0IiwibGVuZ3RoIiwidXBkYXRlIiwicGF1c2VkIiwib24iLCJvZmYiLCJjb250YWluZXIiLCJjdXJyZW50Iiwid2luZG93IiwiYXNkIiwiaGVpZ2h0IiwiY2xvc2VzdCIsImNsaWVudEhlaWdodCIsInN0eWxlIiwiaGFuZGxlSGlkZGVuIiwicmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsImhhbmRsZVJlcHJvZHVjdGlvbkNsaWNrIiwicmVzdW1lIiwicGF1c2UiLCJwbGF5IiwiZGlzYWJsZWQiLCJMYXN0TWVzc2FnZSIsInVzZXJNZXNzYWdlIiwic2V0VXNlck1lc3NhZ2UiLCJsYXN0TWVzc2FnZSIsInVzZXIiLCJhc3Npc3RhbnRNZXNzYWdlIiwic2V0QXNzaXN0YW50TWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsInBhcmVudEVsZW1lbnQiLCJVc2VyTWVzc2FnZSIsImluZGV4IiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwic2hvd0FjdGlvbnMiLCJzZXRTaG93QWN0aW9ucyIsInRleHRSZWYiLCJmb2N1cyIsImhhbmRsZVRleHRDbGljayIsImhhbmRsZUNvbmZpcm0iLCJpbm5lclRleHQiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVCbHVyIiwicmVsYXRlZFRhcmdldCIsInRhcmdldCIsInRhZ05hbWUiLCJrZXkiLCJjb250ZW50RWRpdGFibGUiLCJvbkJsdXIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlVzZXJNZXNzYWdlQWN0aW9ucyIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwidGFyZ2V0RWxlbWVudCIsIm1lc3NhZ2VSZWYiLCJwb3NpdGlvblJlZiIsIm1lc3NhZ2VIZWlnaHQiLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tU3BhY2UiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsInRvcFNwYWNlIiwidG9wIiwiTWVzc2FnZXMiLCJzdG9yZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJnb2Fsc1Nob3ciLCJzZXRHb2Fsc1Nob3ciLCJnb2FscyIsImhhbmRsZUdvYWxzU2hvdyIsIm1hcCIsImxpbmUiLCJyb2xlIiwiY29udGVudCIsIlJlY29yZGVyQnV0dG9uIiwicmVjb3JkZXIiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwicmVjb3JkaW5nIiwiaXNUcmFuc2NyaWJpbmciLCJzZXRJc1RyYW5zY3JpYmluZyIsInRyYW5zY3JpYmluZyIsImhhbmRsZVN0YXJ0IiwicmVjb3JkIiwiaGFuZGxlU3RvcCIsInN0b3AiLCJoYW5kbGVDb250ZXh0TWVudSIsInByZXZlbnREZWZhdWx0Iiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwib25LZXlEb3duIiwib25LZXlVcCIsIm9uQ29udGV4dE1lbnUiLCJBc3NpZ21lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2lnbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiZWRpdCIsInNldEVkaXQiLCJpc1VwZGF0aW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlByb21wdEVkaXQiLCJwcm9tcHQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9hdWRpby50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvc3RvcmUvdGltZS50cyIsInRzL3N0b3JlL3hoci50cyIsInRzL3ZpZXdzL0Fzc2lzdGFudC9MYXN0TWVzc2FnZS9Bc3Npc3RhbnRNZXNzYWdlLnRzeCIsInRzL3ZpZXdzL0Fzc2lzdGFudC9MYXN0TWVzc2FnZS9pbmRleC50c3giLCJ0cy92aWV3cy9Bc3Npc3RhbnQvTWVzc2FnZXMvVXNlck1lc3NhZ2UudHN4IiwidHMvdmlld3MvQXNzaXN0YW50L01lc3NhZ2VzL1VzZXJNZXNzYWdlQWN0aW9ucy50c3giLCJ0cy92aWV3cy9Bc3Npc3RhbnQvTWVzc2FnZXMvaW5kZXgudHN4IiwidHMvdmlld3MvQXNzaXN0YW50L3JlY29yZGVyLWJ1dHRvbi50c3giLCJ0cy92aWV3cy9Bc3Npc3RhbnQvdXNlLXJlY29yZGVyLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
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
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@aimpact/http-server", "0.0.1"], ["@aimpact/langchain", "1.0.0"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
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
        hash: 1862854913,
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
              const number = localStorage.getItem("recording.number") ? parseInt(localStorage.getItem("recording.number")) : 0;
              id = id ?? `recording.${performance.now()}`;
              const response = await this.publishRecording(audio);
              console.log("response publishRecording", response);
              if (!response.status) {
                console.error("[CE.upload]:", response.error);
                return;
              }
              const data = await this.#aihubModel.transcription(response.file, "es");
              if (!data.status) {
                console.error("[CE.transcription]:", data.error);
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
                console.error("error saving", e);
              }
            }
            publishRecording = async audio => {
              const form = new FormData();
              form.append("audio", audio);
              form.append("project", _config.default.package);
              form.append("container", "audios");
              form.append("fileName", "recoring.mp3");
              const xhr = new _xhr.XHRLoader();
              const response = await xhr.upload(form, SERVER_URL);
              if (!response?.ok) {
                return {
                  status: false,
                  error: response.statusText
                };
              }
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
        hash: 1542181038,
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
            }, React.createElement("h2", null, goalsShow ? "Objetivos:" : ""), React.createElement("p", {
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
        hash: 3478224874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecorderButton = RecorderButton;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          function RecorderButton() {
            const {
              store,
              assistant: {
                recorder
              }
            } = (0, _context.useAssigmentContext)();
            const [isRecording, setIsRecording] = React.useState(recorder.recording);
            const [isTranscribing, setIsTranscribing] = React.useState(recorder.transcribing);
            const buttonRef = React.useRef(null);
            const handleStart = () => {
              !recorder.recording && recorder.record();
            };
            const handleStop = async () => {
              const record = await recorder.stop();
              store.saveAudio(record);
              buttonRef.current?.blur();
            };
            const handleContextMenu = e => {
              e.preventDefault();
            };
            const handleChange = () => {
              setIsRecording(recorder.recording);
              setIsTranscribing(recorder.transcribing);
            };
            (0, _hooks.useBinder)([recorder], handleChange);
            React.useEffect(() => {
              const handleKeyPress = e => {
                if (e.key === " ") isRecording ? handleStop() : handleStart();
              };
              window.addEventListener("keypress", handleKeyPress);
              return () => {
                window.removeEventListener("keypress", handleKeyPress);
              };
            }, [isRecording]);
            const text = isRecording ? "Escuchándote" : isTranscribing ? "Transcribiendo" : "Escuchar";
            return React.createElement("button", {
              className: `recorder-button ${isRecording || isTranscribing ? "recording" : ""}`,
              onClick: isRecording ? handleStop : handleStart,
              onContextMenu: handleContextMenu,
              ref: buttonRef
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
        hash: 944396169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJsYW5ndWFnZSIsIlN0b3JlTWFuYWdlciIsInVyaSIsInZhcnMiLCJnZXQiLCJXaWRnZXQiLCJkZWZhdWx0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb25maWciLCJfYWlodWIiLCJfd3JhcHBlciIsIl9hc3Npc3RhbnQiLCJfc3ViamVjdE1vZGVscyIsIl9hc3NpZ25tZW50cyIsIl9kYXlqcyIsIl94aHIiLCJTRVJWRVJfVVJMIiwicGFyYW1zIiwiUmVhY3RpdmVNb2RlbCIsImFpaHViTW9kZWwiLCJhc3Npc3RhbnQiLCJhc3NpZ25tZW50cyIsImFzc2lnbWVudCIsImNvbnN0cnVjdG9yIiwiYXNzaWdubWVudCIsIkFJTW9kZWwiLCJ3cmFwcGVyIiwiZ2V0QnlOYW1lIiwiQXNzaXN0YW50Iiwic2F2ZUF1ZGlvIiwiYXVkaW8iLCJpZCIsInVuZGVmaW5lZCIsImZldGNoaW5nIiwibnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwidHJhbnNjcmlwdGlvbiIsImZpbGUiLCJxdWVzdGlvbiIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInBhdGgiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic291cmNlIiwic2F2ZUl0ZW0iLCJpdGVtIiwiU3ViamVjdCIsInNldCIsInNhdmUiLCJlIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicGFja2FnZSIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsIm9rIiwic3RhdHVzVGV4dCIsImpzb24iLCJ0aW1lRm9ybWF0IiwidGltZSIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJ0aW1lU3RyaW5nIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInByb21pc2UiLCJ1cGxvYWRlZCIsInByb2dyZXNzIiwidXBsb2FkaW5nIiwiaXNVcGxvYWRlZCIsInVwbG9hZFByb2dyZXNzIiwiaGFzRXJyb3IiLCJvblByb2dyZXNzIiwiZXZlbnQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudCIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJ0cmlnZ2VyRXZlbnQiLCJvbkNvbXBsZXRlZCIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwib25FcnJvciIsInJlamVjdCIsIm9uQWJvcnQiLCJ1cmwiLCJzcGVjcyIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsImFib3J0IiwiX3JlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJBc3Npc3RhbnRNZXNzYWdlIiwidm9pY2UiLCJjb252ZXJzYXRpb24iLCJpc0hpZGRlbiIsInNldElzSGlkZGVuIiwic2V0SXNQYXVzZWQiLCJzZXRDdXJyZW50V29yZCIsInJlcHJvZHVjZWQiLCJ1bnJlcHJvZHVjZWQiLCJzcGVha2luZyIsImxhc3RXb3JkU2l6ZSIsInNsaWNlIiwiY3VycmVudFdvcmQiLCJzcGxpdCIsImxlbmd0aCIsInVwZGF0ZSIsInBhdXNlZCIsIm9uIiwib2ZmIiwiY29udGFpbmVyIiwiY3VycmVudCIsIndpbmRvdyIsImFzZCIsImhlaWdodCIsImNsb3Nlc3QiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsImhhbmRsZUhpZGRlbiIsImNyZWF0ZUVsZW1lbnQiLCJyZWYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaGFuZGxlUmVwcm9kdWN0aW9uQ2xpY2siLCJyZXN1bWUiLCJwYXVzZSIsInBsYXkiLCJkaXNhYmxlZCIsIl9kZWZhdWx0IiwiUmVhY3QiLCJfQXNzaXN0YW50TWVzc2FnZSIsIl9jb250ZXh0IiwiTGFzdE1lc3NhZ2UiLCJ1c2VBc3NpZ21lbnRDb250ZXh0IiwidXNlck1lc3NhZ2UiLCJzZXRVc2VyTWVzc2FnZSIsImxhc3RNZXNzYWdlIiwidXNlciIsImFzc2lzdGFudE1lc3NhZ2UiLCJzZXRBc3Npc3RhbnRNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwicGFyZW50RWxlbWVudCIsIl9Vc2VyTWVzc2FnZUFjdGlvbnMiLCJVc2VyTWVzc2FnZSIsImluZGV4IiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwic2hvd0FjdGlvbnMiLCJzZXRTaG93QWN0aW9ucyIsInRleHRSZWYiLCJmb2N1cyIsImhhbmRsZVRleHRDbGljayIsImhhbmRsZUNvbmZpcm0iLCJpbm5lclRleHQiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVCbHVyIiwicmVsYXRlZFRhcmdldCIsInRhcmdldCIsInRhZ05hbWUiLCJrZXkiLCJjb250ZW50RWRpdGFibGUiLCJvbkJsdXIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwidGFyZ2V0RWxlbWVudCIsIlVzZXJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VSZWYiLCJwb3NpdGlvblJlZiIsIm1lc3NhZ2VIZWlnaHQiLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tU3BhY2UiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsInRvcFNwYWNlIiwidG9wIiwiX1VzZXJNZXNzYWdlIiwiX2hvb2tzIiwiTWVzc2FnZXMiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiZ29hbHNTaG93Iiwic2V0R29hbHNTaG93IiwiZ29hbHMiLCJoYW5kbGVHb2Fsc1Nob3ciLCJ1c2VCaW5kZXIiLCJtYXAiLCJsaW5lIiwibWVzc2FnZSIsInJvbGUiLCJjb250ZW50IiwiUmVjb3JkZXJCdXR0b24iLCJyZWNvcmRlciIsImlzUmVjb3JkaW5nIiwic2V0SXNSZWNvcmRpbmciLCJyZWNvcmRpbmciLCJpc1RyYW5zY3JpYmluZyIsInNldElzVHJhbnNjcmliaW5nIiwidHJhbnNjcmliaW5nIiwiYnV0dG9uUmVmIiwiaGFuZGxlU3RhcnQiLCJyZWNvcmQiLCJoYW5kbGVTdG9wIiwic3RvcCIsImJsdXIiLCJoYW5kbGVDb250ZXh0TWVudSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlS2V5UHJlc3MiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ29udGV4dE1lbnUiLCJBc3NpZ21lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfTWVzc2FnZXMiLCJfcmVjb3JkZXJCdXR0b24iLCJfTGFzdE1lc3NhZ2UiLCJfZWRpdCIsIlZpZXciLCJlZGl0Iiwic2V0RWRpdCIsImlzVXBkYXRpbmciLCJQcm92aWRlciIsInZhbHVlIiwiUHJvbXB0RWRpdCIsInByb21wdCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3RpbWUudHMiLCIvdHMvc3RvcmUveGhyLnRzIiwiL3RzL3ZpZXdzL0Fzc2lzdGFudC9MYXN0TWVzc2FnZS9Bc3Npc3RhbnRNZXNzYWdlLnRzeCIsIi90cy92aWV3cy9Bc3Npc3RhbnQvTGFzdE1lc3NhZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL0Fzc2lzdGFudC9NZXNzYWdlcy9Vc2VyTWVzc2FnZS50c3giLCIvdHMvdmlld3MvQXNzaXN0YW50L01lc3NhZ2VzL1VzZXJNZXNzYWdlQWN0aW9ucy50c3giLCIvdHMvdmlld3MvQXNzaXN0YW50L01lc3NhZ2VzL2luZGV4LnRzeCIsIi90cy92aWV3cy9Bc3Npc3RhbnQvcmVjb3JkZXItYnV0dG9uLnRzeCIsIi90cy92aWV3cy9Bc3Npc3RhbnQvdXNlLXJlY29yZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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
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
        hash: 3115117968,
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
          // const SERVER_URL = `${config.params.SERVER_URL}/upload`;
          // LOCAL URL
          const SERVER_URL = "http://localhost:5000/upload";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJsYW5ndWFnZSIsIlN0b3JlTWFuYWdlciIsInVyaSIsInZhcnMiLCJnZXQiLCJXaWRnZXQiLCJkZWZhdWx0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb25maWciLCJfYWlodWIiLCJfd3JhcHBlciIsIl9hc3Npc3RhbnQiLCJfc3ViamVjdE1vZGVscyIsIl9hc3NpZ25tZW50cyIsIl9kYXlqcyIsIl94aHIiLCJTRVJWRVJfVVJMIiwiUmVhY3RpdmVNb2RlbCIsImFpaHViTW9kZWwiLCJhc3Npc3RhbnQiLCJhc3NpZ25tZW50cyIsImFzc2lnbWVudCIsImNvbnN0cnVjdG9yIiwiYXNzaWdubWVudCIsIkFJTW9kZWwiLCJ3cmFwcGVyIiwiZ2V0QnlOYW1lIiwiQXNzaXN0YW50Iiwic2F2ZUF1ZGlvIiwiYXVkaW8iLCJpZCIsInVuZGVmaW5lZCIsImZldGNoaW5nIiwibnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZXJyb3IiLCJkYXRhIiwidHJhbnNjcmlwdGlvbiIsImZpbGUiLCJxdWVzdGlvbiIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInBhdGgiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic291cmNlIiwic2F2ZUl0ZW0iLCJpdGVtIiwiU3ViamVjdCIsInNldCIsInNhdmUiLCJlIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicGFja2FnZSIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsIm9rIiwic3RhdHVzVGV4dCIsImpzb24iLCJ0aW1lRm9ybWF0IiwidGltZSIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJ0aW1lU3RyaW5nIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInByb21pc2UiLCJ1cGxvYWRlZCIsInByb2dyZXNzIiwidXBsb2FkaW5nIiwiaXNVcGxvYWRlZCIsInVwbG9hZFByb2dyZXNzIiwiaGFzRXJyb3IiLCJvblByb2dyZXNzIiwiZXZlbnQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudCIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJ0cmlnZ2VyRXZlbnQiLCJvbkNvbXBsZXRlZCIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwib25FcnJvciIsInJlamVjdCIsIm9uQWJvcnQiLCJ1cmwiLCJzcGVjcyIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsImFib3J0IiwiX3JlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJBc3Npc3RhbnRNZXNzYWdlIiwidm9pY2UiLCJjb252ZXJzYXRpb24iLCJpc0hpZGRlbiIsInNldElzSGlkZGVuIiwic2V0SXNQYXVzZWQiLCJzZXRDdXJyZW50V29yZCIsInJlcHJvZHVjZWQiLCJ1bnJlcHJvZHVjZWQiLCJzcGVha2luZyIsImxhc3RXb3JkU2l6ZSIsInNsaWNlIiwiY3VycmVudFdvcmQiLCJzcGxpdCIsImxlbmd0aCIsInVwZGF0ZSIsInBhdXNlZCIsIm9uIiwib2ZmIiwiY29udGFpbmVyIiwiY3VycmVudCIsIndpbmRvdyIsImFzZCIsImhlaWdodCIsImNsb3Nlc3QiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsImhhbmRsZUhpZGRlbiIsImNyZWF0ZUVsZW1lbnQiLCJyZWYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaGFuZGxlUmVwcm9kdWN0aW9uQ2xpY2siLCJyZXN1bWUiLCJwYXVzZSIsInBsYXkiLCJkaXNhYmxlZCIsIl9kZWZhdWx0IiwiUmVhY3QiLCJfQXNzaXN0YW50TWVzc2FnZSIsIl9jb250ZXh0IiwiTGFzdE1lc3NhZ2UiLCJ1c2VBc3NpZ21lbnRDb250ZXh0IiwidXNlck1lc3NhZ2UiLCJzZXRVc2VyTWVzc2FnZSIsImxhc3RNZXNzYWdlIiwidXNlciIsImFzc2lzdGFudE1lc3NhZ2UiLCJzZXRBc3Npc3RhbnRNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwicGFyZW50RWxlbWVudCIsIl9Vc2VyTWVzc2FnZUFjdGlvbnMiLCJVc2VyTWVzc2FnZSIsImluZGV4IiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwic2hvd0FjdGlvbnMiLCJzZXRTaG93QWN0aW9ucyIsInRleHRSZWYiLCJmb2N1cyIsImhhbmRsZVRleHRDbGljayIsImhhbmRsZUNvbmZpcm0iLCJpbm5lclRleHQiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVCbHVyIiwicmVsYXRlZFRhcmdldCIsInRhcmdldCIsInRhZ05hbWUiLCJrZXkiLCJjb250ZW50RWRpdGFibGUiLCJvbkJsdXIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwidGFyZ2V0RWxlbWVudCIsIlVzZXJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VSZWYiLCJwb3NpdGlvblJlZiIsIm1lc3NhZ2VIZWlnaHQiLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tU3BhY2UiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsInRvcFNwYWNlIiwidG9wIiwiX1VzZXJNZXNzYWdlIiwiX2hvb2tzIiwiTWVzc2FnZXMiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiZ29hbHNTaG93Iiwic2V0R29hbHNTaG93IiwiZ29hbHMiLCJoYW5kbGVHb2Fsc1Nob3ciLCJ1c2VCaW5kZXIiLCJtYXAiLCJsaW5lIiwibWVzc2FnZSIsInJvbGUiLCJjb250ZW50IiwiUmVjb3JkZXJCdXR0b24iLCJyZWNvcmRlciIsImlzUmVjb3JkaW5nIiwic2V0SXNSZWNvcmRpbmciLCJyZWNvcmRpbmciLCJpc1RyYW5zY3JpYmluZyIsInNldElzVHJhbnNjcmliaW5nIiwidHJhbnNjcmliaW5nIiwiYnV0dG9uUmVmIiwiaGFuZGxlU3RhcnQiLCJyZWNvcmQiLCJoYW5kbGVTdG9wIiwic3RvcCIsImJsdXIiLCJoYW5kbGVDb250ZXh0TWVudSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlS2V5UHJlc3MiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ29udGV4dE1lbnUiLCJBc3NpZ21lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfTWVzc2FnZXMiLCJfcmVjb3JkZXJCdXR0b24iLCJfTGFzdE1lc3NhZ2UiLCJfZWRpdCIsIlZpZXciLCJlZGl0Iiwic2V0RWRpdCIsImlzVXBkYXRpbmciLCJQcm92aWRlciIsInZhbHVlIiwiUHJvbXB0RWRpdCIsInByb21wdCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2F1ZGlvLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3RpbWUudHMiLCIvdHMvc3RvcmUveGhyLnRzIiwiL3RzL3ZpZXdzL0Fzc2lzdGFudC9MYXN0TWVzc2FnZS9Bc3Npc3RhbnRNZXNzYWdlLnRzeCIsIi90cy92aWV3cy9Bc3Npc3RhbnQvTGFzdE1lc3NhZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL0Fzc2lzdGFudC9NZXNzYWdlcy9Vc2VyTWVzc2FnZS50c3giLCIvdHMvdmlld3MvQXNzaXN0YW50L01lc3NhZ2VzL1VzZXJNZXNzYWdlQWN0aW9ucy50c3giLCIvdHMvdmlld3MvQXNzaXN0YW50L01lc3NhZ2VzL2luZGV4LnRzeCIsIi90cy92aWV3cy9Bc3Npc3RhbnQvcmVjb3JkZXItYnV0dG9uLnRzeCIsIi90cy92aWV3cy9Bc3Npc3RhbnQvdXNlLXJlY29yZGVyLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGws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
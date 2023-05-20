System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@0.0.5/page", "@beyond-js/reactive-2@1.0.0/model", "@aimpact/ailearn@1.0.0/config", "@aimpact/backend@1.0.0/aihub", "@aimpact/ailearn/start", "@aimpact/ailearn@1.0.0/assistant", "@aimpact/ailearn@1.0.0/subject-models", "@aimpact/ailearn@1.0.0/assignments", "dayjs@1.11.7", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "@beyond-js/react-18-widgets@0.0.5/hooks", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, XHRLoader, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive-2/model', dependency_3], ['@aimpact/ailearn/config', dependency_4], ['@aimpact/backend/aihub', dependency_5], ['@aimpact/ailearn/wrapper', dependency_6], ['@aimpact/ailearn/assistant', dependency_7], ['@aimpact/ailearn/subject-models', dependency_8], ['@aimpact/ailearn/assignments', dependency_9], ['dayjs', dependency_10], ['@beyond-js/kernel/core', dependency_11], ['react', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
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
        hash: 1794145241,
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
            constructor(assignment) {
              super();
              this.#aihubModel = new _aihub.AIModel();
              this.#assignments = _assignments.assignments;
              this.#assistant = new _assistant.Assistant(_wrapper.wrapper.getByName(assignment));
            }
            async saveAudio(audio, id = undefined) {
              this.fetching = true;
              const number = localStorage.getItem("recording.number") ? parseInt(localStorage.getItem("recording.number")) : 0;
              id = id ?? `recording.${performance.now()}`;
              const response = await this.publishRecording(audio);
              if (!response.status) {
                console.error("error", response.message);
                return;
              }
              const data = await this.#aihubModel.transcription(response.file, "es");
              if (!data.status) {
                console.error("error", data.message);
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
        hash: 1583470362,
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
          function View({
            store,
            uri: {
              vars
            }
          }) {
            const {
              assistant
            } = store;
            if (!assistant.assignment) {
              return React.createElement("h2", null, "Assignment not found");
            }
            return React.createElement(_context.AssigmentContext.Provider, {
              value: {
                assistant: assistant,
                store
              }
            }, React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUM7WUFBVSxHQUN2QjlCLG9CQUFDNkYsOEJBQWMsT0FBRyxDQUNkLEVBQ043RjtjQUFLOEIsU0FBUyxFQUFDO1lBQU0sR0FDbkI5QixvQkFBQ3FDLG9CQUFXLE9BQUcsQ0FDWCxDQUNGLENBQ29CO1VBRWhDIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsImxhbmd1YWdlIiwiU3RvcmVNYW5hZ2VyIiwidXJpIiwidmFycyIsImdldCIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiU0VSVkVSX1VSTCIsImNvbmZpZyIsInBhcmFtcyIsIlJlYWN0aXZlTW9kZWwiLCJhc3Npc3RhbnQiLCJhc3NpZ25tZW50cyIsImNvbnN0cnVjdG9yIiwiYXNzaWdubWVudCIsIkFJTW9kZWwiLCJBc3Npc3RhbnQiLCJ3cmFwcGVyIiwiZ2V0QnlOYW1lIiwic2F2ZUF1ZGlvIiwiYXVkaW8iLCJpZCIsInVuZGVmaW5lZCIsImZldGNoaW5nIiwibnVtYmVyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsInRyYW5zY3JpcHRpb24iLCJmaWxlIiwicXVlc3Rpb24iLCJ0ZXh0IiwicHJvcGVydGllcyIsIm5hbWUiLCJwYXRoIiwiY3JlYXRlZEF0IiwidW5peCIsInNvdXJjZSIsInNhdmVJdGVtIiwiaXRlbSIsIlN1YmplY3QiLCJzZXQiLCJzYXZlIiwiZSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInBhY2thZ2UiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwidGltZUZvcm1hdCIsInRpbWUiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidGltZVN0cmluZyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJwcm9taXNlIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImV2ZW50IiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnQiLCJyb3VuZCIsImxvYWRlZCIsInRvdGFsIiwidHJpZ2dlckV2ZW50Iiwib25Db21wbGV0ZWQiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm9uRXJyb3IiLCJyZWplY3QiLCJvbkFib3J0IiwidXJsIiwic3BlY3MiLCJtZXRob2QiLCJib2R5IiwiZmV0Y2giLCJhYm9ydCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiUmVhY3QiLCJBc3Npc3RhbnRNZXNzYWdlIiwidm9pY2UiLCJjb252ZXJzYXRpb24iLCJpc0hpZGRlbiIsInNldElzSGlkZGVuIiwic2V0SXNQYXVzZWQiLCJzZXRDdXJyZW50V29yZCIsInJlcHJvZHVjZWQiLCJ1bnJlcHJvZHVjZWQiLCJzcGVha2luZyIsImxhc3RXb3JkU2l6ZSIsInNsaWNlIiwiY3VycmVudFdvcmQiLCJzcGxpdCIsImxlbmd0aCIsInVwZGF0ZSIsInBhdXNlZCIsIm9uIiwib2ZmIiwiY29udGFpbmVyIiwiY3VycmVudCIsIndpbmRvdyIsImFzZCIsImhlaWdodCIsImNsb3Nlc3QiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsImhhbmRsZUhpZGRlbiIsInJlZiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoYW5kbGVSZXByb2R1Y3Rpb25DbGljayIsInJlc3VtZSIsInBhdXNlIiwicGxheSIsImRpc2FibGVkIiwiTGFzdE1lc3NhZ2UiLCJ1c2VyTWVzc2FnZSIsInNldFVzZXJNZXNzYWdlIiwibGFzdE1lc3NhZ2UiLCJ1c2VyIiwiYXNzaXN0YW50TWVzc2FnZSIsInNldEFzc2lzdGFudE1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJwYXJlbnRFbGVtZW50IiwiVXNlck1lc3NhZ2UiLCJpbmRleCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInNob3dBY3Rpb25zIiwic2V0U2hvd0FjdGlvbnMiLCJ0ZXh0UmVmIiwiZm9jdXMiLCJoYW5kbGVUZXh0Q2xpY2siLCJoYW5kbGVDb25maXJtIiwiaW5uZXJUZXh0IiwiaGFuZGxlQ2FuY2VsIiwiaGFuZGxlQmx1ciIsInJlbGF0ZWRUYXJnZXQiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwia2V5IiwiY29udGVudEVkaXRhYmxlIiwib25CbHVyIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJVc2VyTWVzc2FnZUFjdGlvbnMiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsInRhcmdldEVsZW1lbnQiLCJtZXNzYWdlUmVmIiwicG9zaXRpb25SZWYiLCJtZXNzYWdlSGVpZ2h0IiwidGFyZ2V0UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbVNwYWNlIiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJ0b3BTcGFjZSIsInRvcCIsIk1lc3NhZ2VzIiwic3RvcmUiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiZ29hbHNTaG93Iiwic2V0R29hbHNTaG93IiwiZ29hbHMiLCJoYW5kbGVHb2Fsc1Nob3ciLCJtYXAiLCJsaW5lIiwicm9sZSIsImNvbnRlbnQiLCJSZWNvcmRlckJ1dHRvbiIsInJlY29yZGVyIiwiaXNSZWNvcmRpbmciLCJzZXRJc1JlY29yZGluZyIsInJlY29yZGluZyIsImlzVHJhbnNjcmliaW5nIiwic2V0SXNUcmFuc2NyaWJpbmciLCJ0cmFuc2NyaWJpbmciLCJoYW5kbGVTdGFydCIsInJlY29yZCIsImhhbmRsZVN0b3AiLCJzdG9wIiwiaGFuZGxlQ29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uS2V5RG93biIsIm9uS2V5VXAiLCJvbkNvbnRleHRNZW51IiwiQXNzaWdtZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBc3NpZ21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9hdWRpby50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvc3RvcmUvdGltZS50cyIsInRzL3N0b3JlL3hoci50cyIsInRzL3ZpZXdzL0Fzc2lzdGFudC9MYXN0TWVzc2FnZS9Bc3Npc3RhbnRNZXNzYWdlLnRzeCIsInRzL3ZpZXdzL0Fzc2lzdGFudC9MYXN0TWVzc2FnZS9pbmRleC50c3giLCJ0cy92aWV3cy9Bc3Npc3RhbnQvTWVzc2FnZXMvVXNlck1lc3NhZ2UudHN4IiwidHMvdmlld3MvQXNzaXN0YW50L01lc3NhZ2VzL1VzZXJNZXNzYWdlQWN0aW9ucy50c3giLCJ0cy92aWV3cy9Bc3Npc3RhbnQvTWVzc2FnZXMvaW5kZXgudHN4IiwidHMvdmlld3MvQXNzaXN0YW50L3JlY29yZGVyLWJ1dHRvbi50c3giLCJ0cy92aWV3cy9Bc3Npc3RhbnQvdXNlLXJlY29yZGVyLnRzeCIsInRzL3ZpZXdzL2NvbnRleHQudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=
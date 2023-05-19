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
        hash: 113673183,
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
              console.log("stpublishRecordingore audio", audio);
              const response = await this.publishRecording(audio);
              if (!response.status) {
                console.error("error", response.message);
                return;
              }
              console.log("store audio", response);
              console.log("call transcription", response.file, "es");
              const data = await this.#aihubModel.transcription(response.file, "es");
              console.log("transcription data ", data);
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
        hash: 3803158716,
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
              console.log("stop", store, recorder, "---", recording);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsR0FBRzZLLEtBQUs7WUFDM0IsSUFBSSxDQUFDN0ssU0FBUyxDQUFDRyxVQUFVLEVBQUU7Y0FDekIsT0FBT3dGLHVEQUE2Qjs7WUFHdEMsT0FDRUEsb0JBQUNrSCx5QkFBZ0IsQ0FBQ0ksUUFBUTtjQUFDQyxLQUFLLEVBQUU7Z0JBQUVsTixTQUFTLEVBQUVBLFNBQVM7Z0JBQUU2SztjQUFLO1lBQUUsR0FDL0RsRjtjQUFLOEIsU0FBUyxFQUFDO1lBQVcsR0FDeEI5QjtjQUFLOEIsU0FBUyxFQUFDO1lBQVUsR0FDdkI5QixvQkFBQ2lGLGtCQUFRO2NBQUM1SyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxDQUM5QixFQUNOMkY7Y0FBSzhCLFNBQVMsRUFBQztZQUFVLEdBQ3ZCOUIsb0JBQUM2Riw4QkFBYyxPQUFHLENBQ2QsRUFDTjdGO2NBQUs4QixTQUFTLEVBQUM7WUFBTSxHQUNuQjlCLG9CQUFDcUMsb0JBQVcsT0FBRyxDQUNYLENBQ0YsQ0FDb0I7VUFFaEMiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJTRVJWRVJfVVJMIiwiY29uZmlnIiwicGFyYW1zIiwiUmVhY3RpdmVNb2RlbCIsImFzc2lzdGFudCIsImFzc2lnbm1lbnRzIiwiY29uc3RydWN0b3IiLCJhc3NpZ25tZW50IiwiQUlNb2RlbCIsIkFzc2lzdGFudCIsIndyYXBwZXIiLCJnZXRCeU5hbWUiLCJzYXZlQXVkaW8iLCJhdWRpbyIsImlkIiwidW5kZWZpbmVkIiwiZmV0Y2hpbmciLCJudW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInB1Ymxpc2hSZWNvcmRpbmciLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJmaWxlIiwiZGF0YSIsInRyYW5zY3JpcHRpb24iLCJxdWVzdGlvbiIsInRleHQiLCJwcm9wZXJ0aWVzIiwibmFtZSIsInBhdGgiLCJjcmVhdGVkQXQiLCJ1bml4Iiwic291cmNlIiwic2F2ZUl0ZW0iLCJpdGVtIiwiU3ViamVjdCIsInNldCIsInNhdmUiLCJlIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicGFja2FnZSIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJ0aW1lRm9ybWF0IiwidGltZSIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJ0aW1lU3RyaW5nIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInByb21pc2UiLCJ1cGxvYWRlZCIsInByb2dyZXNzIiwidXBsb2FkaW5nIiwiaXNVcGxvYWRlZCIsInVwbG9hZFByb2dyZXNzIiwiaGFzRXJyb3IiLCJvblByb2dyZXNzIiwiZXZlbnQiLCJsZW5ndGhDb21wdXRhYmxlIiwicGVyY2VudCIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJ0cmlnZ2VyRXZlbnQiLCJvbkNvbXBsZXRlZCIsInJlc29sdmUiLCJzZXRUaW1lb3V0Iiwib25FcnJvciIsInJlamVjdCIsIm9uQWJvcnQiLCJ1cmwiLCJzcGVjcyIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsImFib3J0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJSZWFjdCIsIkFzc2lzdGFudE1lc3NhZ2UiLCJ2b2ljZSIsImNvbnZlcnNhdGlvbiIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJzZXRJc1BhdXNlZCIsInNldEN1cnJlbnRXb3JkIiwicmVwcm9kdWNlZCIsInVucmVwcm9kdWNlZCIsInNwZWFraW5nIiwibGFzdFdvcmRTaXplIiwic2xpY2UiLCJjdXJyZW50V29yZCIsInNwbGl0IiwibGVuZ3RoIiwidXBkYXRlIiwicGF1c2VkIiwib24iLCJvZmYiLCJjb250YWluZXIiLCJjdXJyZW50Iiwid2luZG93IiwiYXNkIiwiaGVpZ2h0IiwiY2xvc2VzdCIsImNsaWVudEhlaWdodCIsInN0eWxlIiwiaGFuZGxlSGlkZGVuIiwicmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsImhhbmRsZVJlcHJvZHVjdGlvbkNsaWNrIiwicmVzdW1lIiwicGF1c2UiLCJwbGF5IiwiZGlzYWJsZWQiLCJMYXN0TWVzc2FnZSIsInVzZXJNZXNzYWdlIiwic2V0VXNlck1lc3NhZ2UiLCJsYXN0TWVzc2FnZSIsInVzZXIiLCJhc3Npc3RhbnRNZXNzYWdlIiwic2V0QXNzaXN0YW50TWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsInBhcmVudEVsZW1lbnQiLCJVc2VyTWVzc2FnZSIsImluZGV4IiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwic2hvd0FjdGlvbnMiLCJzZXRTaG93QWN0aW9ucyIsInRleHRSZWYiLCJmb2N1cyIsImhhbmRsZVRleHRDbGljayIsImhhbmRsZUNvbmZpcm0iLCJpbm5lclRleHQiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVCbHVyIiwicmVsYXRlZFRhcmdldCIsInRhcmdldCIsInRhZ05hbWUiLCJrZXkiLCJjb250ZW50RWRpdGFibGUiLCJvbkJsdXIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlVzZXJNZXNzYWdlQWN0aW9ucyIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwidGFyZ2V0RWxlbWVudCIsIm1lc3NhZ2VSZWYiLCJwb3NpdGlvblJlZiIsIm1lc3NhZ2VIZWlnaHQiLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm90dG9tU3BhY2UiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsInRvcFNwYWNlIiwidG9wIiwiTWVzc2FnZXMiLCJzdG9yZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJnb2Fsc1Nob3ciLCJzZXRHb2Fsc1Nob3ciLCJnb2FscyIsImhhbmRsZUdvYWxzU2hvdyIsIm1hcCIsImxpbmUiLCJyb2xlIiwiY29udGVudCIsIlJlY29yZGVyQnV0dG9uIiwicmVjb3JkZXIiLCJpc1JlY29yZGluZyIsInNldElzUmVjb3JkaW5nIiwicmVjb3JkaW5nIiwiaXNUcmFuc2NyaWJpbmciLCJzZXRJc1RyYW5zY3JpYmluZyIsInRyYW5zY3JpYmluZyIsImhhbmRsZVN0YXJ0IiwicmVjb3JkIiwiaGFuZGxlU3RvcCIsInN0b3AiLCJoYW5kbGVDb250ZXh0TWVudSIsInByZXZlbnREZWZhdWx0Iiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwib25LZXlEb3duIiwib25LZXlVcCIsIm9uQ29udGV4dE1lbnUiLCJBc3NpZ21lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2lnbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2F1ZGlvLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy9zdG9yZS90aW1lLnRzIiwidHMvc3RvcmUveGhyLnRzIiwidHMvdmlld3MvQXNzaXN0YW50L0xhc3RNZXNzYWdlL0Fzc2lzdGFudE1lc3NhZ2UudHN4IiwidHMvdmlld3MvQXNzaXN0YW50L0xhc3RNZXNzYWdlL2luZGV4LnRzeCIsInRzL3ZpZXdzL0Fzc2lzdGFudC9NZXNzYWdlcy9Vc2VyTWVzc2FnZS50c3giLCJ0cy92aWV3cy9Bc3Npc3RhbnQvTWVzc2FnZXMvVXNlck1lc3NhZ2VBY3Rpb25zLnRzeCIsInRzL3ZpZXdzL0Fzc2lzdGFudC9NZXNzYWdlcy9pbmRleC50c3giLCJ0cy92aWV3cy9Bc3Npc3RhbnQvcmVjb3JkZXItYnV0dG9uLnRzeCIsInRzL3ZpZXdzL0Fzc2lzdGFudC91c2UtcmVjb3JkZXIudHN4IiwidHMvdmlld3MvY29udGV4dC50c3giLCJ0cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/reactive-2@1.0.0/model", "@aimpact/backend@1.0.0/aihub", "@aimpact/langchain@1.0.0/models", "@beyond-js/kernel@0.1.9/core", "dayjs@1.11.7"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Voice, Assistant, __beyond_pkg, hmr;
  _export({
    Voice: void 0,
    Assistant: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactive2100Model) {
      dependency_1 = _beyondJsReactive2100Model;
    }, function (_aimpactBackend100Aihub) {
      dependency_2 = _aimpactBackend100Aihub;
    }, function (_aimpactLangchain100Models) {
      dependency_3 = _aimpactLangchain100Models;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
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
          "vspecifier": "@aimpact/ailearn@1.0.0/assistant"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive-2/model', dependency_1], ['@aimpact/backend/aihub', dependency_2], ['@aimpact/langchain/models', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['dayjs', dependency_5]]);
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./conversation/index
      ************************************/
      ims.set('./conversation/index', {
        hash: 728395686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversation = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _aihub = require("@aimpact/backend/aihub");
          var _models = require("@aimpact/langchain/models");
          var _voice = require("./voice");
          class Conversation extends _model.ReactiveModel {
            #assistant;
            #assignment;
            #mission;
            #aihubModel;
            #chainModel;
            #topic;
            #messages = [];
            get messages() {
              // Remove the first message, that is the assistant mission
              return this.#messages.slice(1);
            }
            #voice;
            get voice() {
              return this.#voice;
            }
            get lastMessage() {
              const {
                messages
              } = this;
              if (!messages.length) return {
                user: "",
                assistant: "Estamos listos Dan! Arrancamos?"
              };
              const last = messages.pop();
              if (last.role === "user") return {
                user: last.content,
                assistant: "Pensando ..."
              };
              return {
                user: messages.pop().content,
                assistant: last.content
              };
            }
            constructor(assistant, assignment, topic) {
              super();
              this.#assistant = assistant;
              this.#assignment = assignment;
              this.#topic = topic;
              this.#voice = new _voice.Voice();
              this.#aihubModel = new _aihub.AIModel();
              this.#chainModel = new _models.ChainModel();
            }
            async init() {
              // Set up the message array with the user input as the only message
              if (!this.#assignment.ready) {
                await this.#assignment.load();
              }
              this.#mission = this.#assignment.mission;
              this.#messages.push({
                role: "system",
                content: this.#mission
              });
            }
            /**
             * Mejorar logica de prompts, guardarlos en la bd vectorial para manejar el contexto correctamente
             *
             */
            async question(content) {
              if (!content) throw new Error("The content of the question cannot be undefined");
              if (!this.#mission) await this.init();
              const messages = this.#messages;
              messages.push({
                role: "user",
                content
              });
              this.triggerEvent();
              try {
                //   const response = await this.#aihubModel.chat(messages);
                //   const response = await this.#chainModel.query(content, this.#topic);
                const response = await this.#chainModel.query(content, "trending");
                console.log("chainModel", response);
                if (!response.status) {
                  console.error("Error on chat completion", response.error);
                }
                messages.push({
                  role: "assistant",
                  content: response.data
                });
                this.#voice.text = response.data;
                this.#voice.play();
                this.triggerEvent();
              } catch (error) {
                console.log(error);
                this.triggerEvent();
              }
            }
            update(index, question) {
              this.#messages = this.#messages.slice(0, index + 1);
              this.question(question).catch(error => console.error(error));
            }
          }
          exports.Conversation = Conversation;
        }
      });

      /*************************************
      INTERNAL MODULE: ./conversation/openai
      *************************************/

      ims.set('./conversation/openai', {
        hash: 1829674578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationOpenAI = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _aihub = require("@aimpact/backend/aihub");
          var _voice = require("./voice");
          class ConversationOpenAI extends _model.ReactiveModel {
            #assistant;
            #assignment;
            #mission;
            #aihubModel;
            #messages = [];
            get messages() {
              // Remove the first message, that is the assistant mission
              return this.#messages.slice(1);
            }
            #voice;
            get voice() {
              return this.#voice;
            }
            get lastMessage() {
              const {
                messages
              } = this;
              if (!messages.length) return {
                user: "",
                assistant: "Estamos listos Dan! Arrancamos?"
              };
              const last = messages.pop();
              if (last.role === "user") return {
                user: last.content,
                assistant: "Pensando ..."
              };
              return {
                user: messages.pop().content,
                assistant: last.content
              };
            }
            constructor(assistant, assignment) {
              super();
              this.#assistant = assistant;
              this.#assignment = assignment;
              this.#voice = new _voice.Voice();
              this.#aihubModel = new _aihub.AIModel();
            }
            async init() {
              // Set up the message array with the user input as the only message
              if (!this.#assignment.ready) {
                await this.#assignment.load();
              }
              this.#mission = this.#assignment.mission;
              this.#messages.push({
                role: "system",
                content: this.#mission
              });
            }
            async question(content) {
              if (!content) throw new Error("The content of the question cannot be undefined");
              if (!this.#mission) await this.init();
              const messages = this.#messages;
              messages.push({
                role: "user",
                content
              });
              this.triggerEvent();
              try {
                const response = await this.#aihubModel.chat(messages);
                //   console.log("aihubModel", response);
                if (!response.status) {
                  console.error("Error on chat completion", response.error);
                }
                messages.push({
                  role: "assistant",
                  content: response.data
                });
                this.#voice.text = response.data;
                this.#voice.play();
                this.triggerEvent();
              } catch (error) {
                console.log(error);
                this.triggerEvent();
              }
            }
            update(index, question) {
              this.#messages = this.#messages.slice(0, index + 1);
              this.question(question).catch(error => console.error(error));
            }
          }
          exports.ConversationOpenAI = ConversationOpenAI;
        }
      });

      /************************************
      INTERNAL MODULE: ./conversation/voice
      ************************************/

      ims.set('./conversation/voice', {
        hash: 29495749,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Voice = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class Voice extends _core.Events {
            #speaking = false;
            get speaking() {
              return this.#speaking;
            }
            #text;
            get text() {
              return this.#text;
            }
            set text(value) {
              this.#text = value;
            }
            #currentWord = -1;
            get currentWord() {
              return this.#currentWord;
            }
            get paused() {
              if (globalThis.cordova) return;
              return speechSynthesis.paused;
            }
            #instance;
            get instance() {
              return this.#instance;
            }
            _mobile() {
              TTS.speak({
                text: this.#text,
                locale: "es-Latn",
                rate: 0.75
              }, () => this.trigger("play.finish"), e => console.error(e));
            }
            _web() {
              speechSynthesis.cancel();
              const text = this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              utterance.lang = "es";
              utterance.onstart = () => {
                this.#speaking = true;
                this.trigger("change");
              };
              utterance.onpause = () => this.trigger("change");
              utterance.onresume = () => this.trigger("change");
              utterance.onboundary = event => {
                this.#currentWord = event.charIndex === 0 ? 0 : event.charIndex + 1;
                this.trigger("change");
              };
              utterance.onend = () => {
                this.#speaking = false;
                this.#currentWord = -1;
                this.trigger("change");
                this.trigger("on.finish");
              };
              speechSynthesis.speak(utterance);
            }
            play() {
              globalThis.cordova ? this._mobile() : this._web();
            }
            stop() {
              if (globalThis.cordova) {
                this.#text = "";
                this.play();
                return;
              }
              speechSynthesis.cancel();
            }
            pause() {
              speechSynthesis.pause();
            }
            resume() {
              speechSynthesis.resume();
            }
          }
          exports.Voice = Voice;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1659036792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assistant = void 0;
          var _recorder = require("./recorder");
          var _core = require("@beyond-js/kernel/core");
          var _index = require("./conversation/index");
          /*bundle*/
          class Assistant extends _core.Events {
            #conversation;
            get conversation() {
              return this.#conversation;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #assignment;
            get assignment() {
              return this.#assignment;
            }
            constructor(assignment) {
              super();
              this.#assignment = assignment;
              this.#recorder = new _recorder.Recorder(this);
              this.#conversation = new _index.Conversation(this, assignment);
            }
            async question(question) {
              await this.#conversation.question(question);
            }
          }
          exports.Assistant = Assistant;
        }
      });

      /**************************
      INTERNAL MODULE: ./recorder
      **************************/

      ims.set('./recorder', {
        hash: 1410165941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _aihub = require("@aimpact/backend/aihub");
          var _dayjs = require("dayjs");
          // import { Transcriber } from "./Transcriber";

          class Recorder extends _core.Events {
            #assistant;
            #transcriber;
            #mediaRecorder;
            #chunks = [];
            get chunks() {
              return this.#chunks;
            }
            #status;
            get status() {
              return this.#status;
            }
            get transcribing() {
              return !!this.#transcriber?.transcribing;
            }
            #recording = false;
            get recording() {
              return this.#recording;
            }
            constructor(assistant) {
              super();
              this.#assistant = assistant;
              this.#transcriber = new _aihub.AIModel();
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            #promise;
            //   -NUEVO
            #initialised = false;
            #initPromise;
            #audio;
            get audio() {
              return this.#audio;
            }
            async initialise() {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => {
                this.#mediaRecorder = new MediaRecorder(stream, {
                  mimeType: "audio/webm"
                });
                this.#mediaRecorder.addEventListener("dataavailable", event => {
                  this.#chunks.push(event.data);
                  this.trigger("dataavailable");
                });
              }).catch(error => {
                this.#error = error.message;
                this.#initPromise.reject();
              }).finally(() => {
                this.#initialised = true;
                this.#initPromise.resolve();
              });
              return this.#initPromise;
            }
            async getAudioDuration(url) {
              return new Promise((resolve, reject) => {
                const audio = new Audio();
                audio.addEventListener("loadedmetadata", () => {
                  resolve(audio.duration);
                });
                audio.addEventListener("error", () => {
                  reject(new Error("Failed to load audio metadata."));
                });
                audio.src = url;
              });
            }
            #startTime;
            #recordingPromise;
            record() {
              // if (this.#recording || this.transcribing) {
              if (this.#recordingPromise) return this.#recordingPromise;
              // TODO - ERROR
              // this.#chunks = [];
              this.#recordingPromise = new _core.PendingPromise();
              if (this.#recording) {
                throw new Error("Wait for recorder to be stopped and transcription ready");
              }
              this.#status = "started";
              this.#recording = true;
              this.trigger("change");
              this.initialise().then(async () => {
                this.#startTime = (0, _dayjs.default)();
                const audio = await this.#mediaRecorder?.start(); //--
                this.#recordingPromise.resolve(audio);
                this.#recordingPromise = undefined;
              }).catch(error => console.error(error));
              return this.#recordingPromise;
            }
            #stopPromise;
            stop() {
              if (!this.#mediaRecorder) {
                console.warn("this.#mediaRecorder no initialize");
                return;
              }
              if (this.#stopPromise) return this.#stopPromise;
              this.#stopPromise = new _core.PendingPromise();
              if (!this.#recording) throw new Error("Recorder is not currently recording");
              this.#status = "stopped";
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                const endtime = (0, _dayjs.default)();
                this.#mediaRecorder.addEventListener("stop", async () => {
                  const audio = new Blob(this.#chunks, {
                    type: "audio/webm"
                  });
                  const audioUrl = URL.createObjectURL(audio);
                  const recordingTimeMilliseconds = endtime.diff(this.#startTime);
                  //@ts-ignore
                  audio.recordingTime = recordingTimeMilliseconds;
                  //@ts-ignore
                  this.#audio = audio;
                  if (this.#stopPromise) {
                    this.#stopPromise.resolve(audio);
                    this.#stopPromise = undefined;
                  }
                  if (this.#recordingPromise) {
                    this.#recordingPromise.resolve(audio);
                    this.#recordingPromise = undefined;
                  }
                });
                //       this.#mediaRecorder.addEventListener("stop", async () => {
                //         const audio = new Blob(this.#chunks, { type: "audio/webm" });
                //         const audioUrl = URL.createObjectURL(audio);
                //         console.log("audioUrl", audioUrl);
                //         const recordingTimeMilliseconds = endtime.diff(this.#startTime);
                //         //@ts-ignore
                //         audio.recordingTime = recordingTimeMilliseconds;
                //         this.#audio = audio;
                //         this.#stopPromise.resolve(audio);
                //       });
                this.#mediaRecorder?.stop();
                this.trigger("change");
              };
              this.#initialised ? stop() : this.initialise().then(stop);
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./conversation/voice",
        "from": "Voice",
        "name": "Voice"
      }, {
        "im": "./index",
        "from": "Assistant",
        "name": "Assistant"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Voice') && _export("Voice", Voice = require ? require('./conversation/voice').Voice : value);
        (require || prop === 'Assistant') && _export("Assistant", Assistant = require ? require('./index').Assistant : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FpaHViIiwiX21vZGVscyIsIl92b2ljZSIsIkNvbnZlcnNhdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJhc3Npc3RhbnQiLCJhc3NpZ25tZW50IiwibWlzc2lvbiIsImFpaHViTW9kZWwiLCJjaGFpbk1vZGVsIiwidG9waWMiLCJtZXNzYWdlcyIsInNsaWNlIiwidm9pY2UiLCJsYXN0TWVzc2FnZSIsImxlbmd0aCIsInVzZXIiLCJsYXN0IiwicG9wIiwicm9sZSIsImNvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIlZvaWNlIiwiQUlNb2RlbCIsIkNoYWluTW9kZWwiLCJpbml0IiwicmVhZHkiLCJsb2FkIiwicHVzaCIsInF1ZXN0aW9uIiwiRXJyb3IiLCJ0cmlnZ2VyRXZlbnQiLCJyZXNwb25zZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImVycm9yIiwiZGF0YSIsInRleHQiLCJwbGF5IiwidXBkYXRlIiwiaW5kZXgiLCJjYXRjaCIsImV4cG9ydHMiLCJDb252ZXJzYXRpb25PcGVuQUkiLCJjaGF0IiwiX2NvcmUiLCJFdmVudHMiLCJzcGVha2luZyIsInZhbHVlIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJnbG9iYWxUaGlzIiwiY29yZG92YSIsInNwZWVjaFN5bnRoZXNpcyIsImluc3RhbmNlIiwiX21vYmlsZSIsIlRUUyIsInNwZWFrIiwibG9jYWxlIiwicmF0ZSIsInRyaWdnZXIiLCJlIiwiX3dlYiIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsImxhbmciLCJvbnN0YXJ0Iiwib25wYXVzZSIsIm9ucmVzdW1lIiwib25ib3VuZGFyeSIsImV2ZW50IiwiY2hhckluZGV4Iiwib25lbmQiLCJzdG9wIiwicGF1c2UiLCJyZXN1bWUiLCJfcmVjb3JkZXIiLCJfaW5kZXgiLCJBc3Npc3RhbnQiLCJjb252ZXJzYXRpb24iLCJyZWNvcmRlciIsIlJlY29yZGVyIiwiX2RheWpzIiwidHJhbnNjcmliZXIiLCJtZWRpYVJlY29yZGVyIiwiY2h1bmtzIiwidHJhbnNjcmliaW5nIiwicmVjb3JkaW5nIiwidmFsaWQiLCJwcm9taXNlIiwiaW5pdGlhbGlzZWQiLCJpbml0UHJvbWlzZSIsImF1ZGlvIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJtaW1lVHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZXNzYWdlIiwicmVqZWN0IiwiZmluYWxseSIsInJlc29sdmUiLCJnZXRBdWRpb0R1cmF0aW9uIiwidXJsIiwiUHJvbWlzZSIsIkF1ZGlvIiwiZHVyYXRpb24iLCJzcmMiLCJzdGFydFRpbWUiLCJyZWNvcmRpbmdQcm9taXNlIiwicmVjb3JkIiwiZGVmYXVsdCIsInN0YXJ0IiwidW5kZWZpbmVkIiwic3RvcFByb21pc2UiLCJ3YXJuIiwiZW5kdGltZSIsIkJsb2IiLCJ0eXBlIiwiYXVkaW9VcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWNvcmRpbmdUaW1lTWlsbGlzZWNvbmRzIiwiZGlmZiIsInJlY29yZGluZ1RpbWUiXSwic291cmNlcyI6WyIvY29udmVyc2F0aW9uL2luZGV4LnRzIiwiL2NvbnZlcnNhdGlvbi9vcGVuYWkudHMiLCIvY29udmVyc2F0aW9uL3ZvaWNlLnRzIiwiL2luZGV4LnRzIiwiL3JlY29yZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQVFNLE1BQU9JLFlB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
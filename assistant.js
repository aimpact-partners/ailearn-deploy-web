System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn@1.0.0/config", "@beyond-js/kernel@0.1.9/core", "@beyond-js/reactive-2@1.0.0/model", "@aimpact/backend@1.0.0/aihub", "dayjs@1.11.7"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Voice, Assistant, __beyond_pkg, hmr;
  _export({
    Voice: void 0,
    Assistant: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearn100Config) {
      dependency_1 = _aimpactAilearn100Config;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }, function (_beyondJsReactive2100Model) {
      dependency_3 = _beyondJsReactive2100Model;
    }, function (_aimpactBackend100Aihub) {
      dependency_4 = _aimpactBackend100Aihub;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
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
          "vspecifier": "@aimpact/ailearn@1.0.0/assistant"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn/config', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@beyond-js/reactive-2/model', dependency_3], ['@aimpact/backend/aihub', dependency_4], ['dayjs', dependency_5]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./Conversation/Commands
      ***************************************/
      ims.set('./Conversation/Commands', {
        hash: 4124290838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Commands = void 0;
          var _config = require("@aimpact/ailearn/config");
          const prompt = "[Eres un analizador de mensajes que convierte un {texto} en un código de programación json.\n" + "El {texto} es un mensaje que está enviando un usuario a otro usuario llamado Max. El {texto} puede incluir también tareas que debe realizar Nicolás (su asistente virtual).\n" + "Tu trabajo es identificar a quién va dirigido el mensaje (Max, Nicolás o a ambos), y crear un código de programación json que se utilizará para invocar una API. No debes preocuparte por la API, sólo por la generación del json.\n" + 'El json debe tener sólo tres propiedades, "max", "nicolas" y "error", todas las propiedades son de tipo string.\n' + "\n" + '. La propiedad "nicolas" puede ser nula, o contener sólo el detalle de la tarea que el usuario le ha solicitado a Nicolás.\n' + '. La propiedad "max" puede ser nula, o contener sólo el mensaje que el usuario le está enviando a Max.\n' + "\n" + "En primera instancia, la conversación está dirigida a Max, pero el usuario podría solicitarle a Nicolás una tarea en la misma conversación. Por lo tanto, si Nicolás no es mencionado, el mensaje es completamente dirigido a Max.\n" + "\n" + "Concéntrate en todo el texto, ya que el usuario puede solicitarle a Nicolás una tarea en cualquier momento de la conversación simplemente mencionando su nombre.\n" + "Quiero sólo el json, ningún otro tipo de contenido incluyendo el pre-text y post-text, ya que tu respuesta debe poder ser parseada (JSON.parse(response)) de manera directa.]";
          class Commands {
            #assistant;
            #enabled = false;
            constructor(assistant) {
              this.#assistant = assistant;
            }
            async request(request) {
              if (!this.#enabled) return request;
              console.log("1 completions prompt", prompt);
              try {
                // Make the API call to generate a response
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${_config.default.params.openia.key}`
                  },
                  body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{
                      role: "assistant",
                      content: prompt
                    }, {
                      role: "user",
                      content: `texto = ${request}`
                    }]
                  })
                });
                // Extract the response message from the API response object
                const data = await response.json();
                return (() => {
                  try {
                    const response = data.choices[0].message?.content;
                    const {
                      max,
                      nicolas,
                      error
                    } = response;
                    console.log("max", max);
                    console.log("nicolas", nicolas);
                    console.log("error", error);
                    console.log(response);
                    return request;
                  } catch (exc) {
                    console.log(exc);
                  }
                })();
              } catch (error) {
                console.log(error.stack);
                return request;
              }
            }
          }
          exports.Commands = Commands;
        }
      });

      /************************************
      INTERNAL MODULE: ./Conversation/Voice
      ************************************/

      ims.set('./Conversation/Voice', {
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

      /************************************
      INTERNAL MODULE: ./Conversation/index
      ************************************/

      ims.set('./Conversation/index', {
        hash: 2125017725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversation = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _Voice = require("./Voice");
          var _Commands = require("./Commands");
          var _config = require("@aimpact/ailearn/config");
          var _aihub = require("@aimpact/backend/aihub");
          class Conversation extends _model.ReactiveModel {
            #assistant;
            #mission;
            #commands;
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
            constructor(assistant, mission) {
              super();
              this.#assistant = assistant;
              this.#mission = mission;
              this.#messages.push({
                role: "system",
                content: mission
              });
              this.#voice = new _Voice.Voice();
              this.#aihubModel = new _aihub.AIModel();
              this.#commands = new _Commands.Commands(assistant);
            }
            async question(content) {
              if (!content) throw new Error("The content of the question cannot be undefined");
              const messages = this.#messages;
              content = await this.#commands.request(content);
              // Set up the message array with the user input as the only message
              messages.push({
                role: "user",
                content
              });
              this.triggerEvent();
              try {
                // @deprecated call client api
                // const responseMessage = await clientAPICall(messages);
                //   console.log("chat/completions ---->", content, messages);
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
              this.question(question).catch(error => console.log(error));
            }
            /**
             * @deprecated
             */
            async clientAPICall(messages) {
              // Make the API call to generate a response
              const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${_config.default.params.openia.key}`
                },
                body: JSON.stringify({
                  model: "gpt-3.5-turbo",
                  messages: messages
                })
              });
              // Extract the response message from the API response object
              const data = await response.json();
              const responseMessage = data.choices[0].message?.content;
              console.log("completions client response---->", responseMessage);
            }
          }
          exports.Conversation = Conversation;
        }
      });

      /**************************
      INTERNAL MODULE: ./Recorder
      **************************/

      ims.set('./Recorder', {
        hash: 873406578,
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
                  console.log("audioUrl", audioUrl);
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

      /*****************************
      INTERNAL MODULE: ./Transcriber
      *****************************/

      ims.set('./Transcriber', {
        hash: 730425103,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Transcriber = void 0;
          var _config = require("@aimpact/ailearn/config");
          class Transcriber {
            #assistant;
            #transcribing = false;
            get transcribing() {
              return this.#transcribing;
            }
            #error;
            get error() {
              return this.#error;
            }
            constructor(assistant) {
              this.#assistant = assistant;
            }
            async transcribe(audio, prompt) {
              if (!audio.size) return;
              this.#transcribing = true;
              console.log("transcriptions prompt", prompt);
              const formData = new FormData();
              formData.append("file", audio, "audio.mp3");
              formData.append("model", "whisper-1");
              formData.append("language", "es");
              formData.append("prompt", prompt);
              formData.append("response_format", "json");
              try {
                const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
                  method: "POST",
                  body: formData,
                  headers: {
                    Authorization: `Bearer ${_config.default.params.openia.key}`
                  }
                });
                const data = await response.json();
                if (!data.text) return;
                // Make the question to the assistant
                this.#assistant.question(data.text);
              } catch (error) {
                console.error(error);
                this.#error = error.message;
              } finally {
                this.#transcribing = false;
              }
            }
          }
          exports.Transcriber = Transcriber;
        }
      });

      /***********************
      INTERNAL MODULE: ./__old
      ***********************/

      ims.set('./__old', {
        hash: 1763835075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.__OLDRecorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _aihub = require("@aimpact/backend/aihub");
          var _dayjs = require("dayjs");
          // import { Transcriber } from "./Transcriber";

          class __OLDRecorder extends _core.Events {
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
            VIEJO;
            #initialised = false;
            #initPromise;
            async initialise() {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => {
                this.#mediaRecorder = new MediaRecorder(stream);
                this.#mediaRecorder.addEventListener("dataavailable", event => {
                  this.#chunks.push(event.data);
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
            #startTime;
            #recordingPromise;
            record() {
              // if (this.#recording || this.transcribing) {
              if (this.#recordingPromise) return this.#recordingPromise;
              this.#recordingPromise = new _core.PendingPromise();
              if (this.#recording) {
                throw new Error("Wait for recorder to be stopped and transcription ready");
              }
              this.#recording = true;
              this.trigger("change");
              this.initialise().then(async () => {
                this.#startTime = (0, _dayjs.default)();
                const audio = await this.#mediaRecorder?.start();
                this.#recordingPromise.resolve(audio);
              }).catch(error => console.error(error));
              return this.#recordingPromise;
            }
            #stopPromise;
            #audio;
            get audio() {
              return this.#audio;
            }
            stop() {
              if (!this.#mediaRecorder) {
                console.warn("this.#mediaRecorder no initialize");
                return;
              }
              if (this.#stopPromise) return this.#stopPromise;
              this.#stopPromise = new _core.PendingPromise();
              if (!this.#recording) throw new Error("Recorder is not currently recording");
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                const endtime = (0, _dayjs.default)();
                this.#mediaRecorder.addEventListener("stop", async () => {
                  const audio = new Blob(this.#chunks, {
                    type: "audio/webm"
                  });
                  const audioUrl = URL.createObjectURL(audio);
                  console.log("audioUrl", audioUrl);
                  const recordingTimeMilliseconds = endtime.diff(this.#startTime);
                  //@ts-ignore
                  audio.recordingTime = recordingTimeMilliseconds;
                  this.#audio = audio;
                  this.#stopPromise.resolve(audio);
                });
                this.#mediaRecorder?.stop();
                this.trigger("change");
              };
              this.#initialised ? stop() : this.initialise().then(stop);
              return this.#stopPromise;
            }
          }
          exports.__OLDRecorder = __OLDRecorder;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2862401872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assistant = void 0;
          var _Recorder = require("./Recorder");
          var _core = require("@beyond-js/kernel/core");
          var _index = require("./Conversation/index");
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
              this.#recorder = new _Recorder.Recorder(this);
              this.#conversation = new _index.Conversation(this, assignment?.mission);
            }
            async question(question) {
              await this.#conversation.question(question);
            }
          }
          exports.Assistant = Assistant;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./Conversation/Voice",
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
        (require || prop === 'Voice') && _export("Voice", Voice = require ? require('./Conversation/Voice').Voice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFFQSxNQUFNQSxNQUFNLEdBQ1YsK0ZBQStGLEdBQy9GLCtLQUErSyxHQUMvSyxzT0FBc08sR0FDdE8sbUhBQW1ILEdBQ25ILElBQUksR0FDSiw4SEFBOEgsR0FDOUgsMEdBQTBHLEdBQzFHLElBQUksR0FDSixzT0FBc08sR0FDdE8sSUFBSSxHQUNKLG9LQUFvSyxHQUNwSywrS0FBK0s7VUFFM0ssTUFBT0MsUUFBUTtZQUNuQixVQUFVO1lBQ1YsUUFBUSxHQUFHLEtBQUs7WUFFaEJDLFlBQVlDLFNBQVM7Y0FDbkIsSUFBSSxDQUFDLFVBQVUsR0FBR0EsU0FBUztZQUM3QjtZQUVBLE1BQU1DLE9BQU8sQ0FBQ0EsT0FBZTtjQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPQSxPQUFPO2NBRWxDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRU4sTUFBTSxDQUFDO2NBRTNDLElBQUk7Z0JBQ0Y7Z0JBQ0EsTUFBTU8sUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBNEMsRUFBRTtrQkFDekVDLE1BQU0sRUFBRSxNQUFNO2tCQUNkQyxPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtvQkFDbENDLGFBQWEsRUFBRSxVQUFVQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHO21CQUNsRDtrQkFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztvQkFDbkJDLEtBQUssRUFBRSxlQUFlO29CQUN0QkMsUUFBUSxFQUFFLENBQ1I7c0JBQ0VDLElBQUksRUFBRSxXQUFXO3NCQUNqQkMsT0FBTyxFQUFFdEI7cUJBQ1YsRUFDRDtzQkFDRXFCLElBQUksRUFBRSxNQUFNO3NCQUNaQyxPQUFPLEVBQUUsV0FBV2xCLE9BQU87cUJBQzVCO21CQUVKO2lCQUNGLENBQUM7Z0JBRUY7Z0JBQ0EsTUFBTW1CLElBQUksR0FBRyxNQUFNaEIsUUFBUSxDQUFDaUIsSUFBSSxFQUFFO2dCQUNsQyxPQUFPLENBQUMsTUFBSztrQkFDWCxJQUFJO29CQUNGLE1BQU1qQixRQUFRLEdBQUdnQixJQUFJLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxFQUFFSixPQUFPO29CQUNqRCxNQUFNO3NCQUFFSyxHQUFHO3NCQUFFQyxPQUFPO3NCQUFFQztvQkFBSyxDQUFFLEdBQUd0QixRQUFRO29CQUN4Q0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFcUIsR0FBRyxDQUFDO29CQUN2QnRCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRXNCLE9BQU8sQ0FBQztvQkFDL0J2QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUV1QixLQUFLLENBQUM7b0JBQzNCeEIsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQztvQkFDckIsT0FBT0gsT0FBTzttQkFDZixDQUFDLE9BQU8wQixHQUFHLEVBQUU7b0JBQ1p6QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3dCLEdBQUcsQ0FBQzs7Z0JBRXBCLENBQUMsR0FBRztlQUNMLENBQUMsT0FBT0QsS0FBSyxFQUFFO2dCQUNkeEIsT0FBTyxDQUFDQyxHQUFHLENBQUN1QixLQUFLLENBQUNFLEtBQUssQ0FBQztnQkFDeEIsT0FBTzNCLE9BQU87O1lBRWxCOztVQUNENEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVEO1VBRU87VUFBVSxNQUFPQyxLQUFNLFNBQVFDLFlBQU07WUFDMUMsU0FBUyxHQUFHLEtBQUs7WUFDakIsSUFBSUMsUUFBUTtjQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDdkI7WUFFQSxLQUFLO1lBQ0wsSUFBSUMsSUFBSTtjQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUs7WUFDbkI7WUFFQSxJQUFJQSxJQUFJLENBQUNDLEtBQWE7Y0FDcEIsSUFBSSxDQUFDLEtBQUssR0FBR0EsS0FBSztZQUNwQjtZQUVBLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSUMsV0FBVztjQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDMUI7WUFFQSxJQUFJQyxNQUFNO2NBQ1IsSUFBSUMsVUFBVSxDQUFDQyxPQUFPLEVBQUU7Y0FDeEIsT0FBT0MsZUFBZSxDQUFDSCxNQUFNO1lBQy9CO1lBRUEsU0FBUztZQUNULElBQUlJLFFBQVE7Y0FDVixPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3ZCO1lBRUFDLE9BQU87Y0FDTEMsR0FBRyxDQUFDQyxLQUFLLENBQ1A7Z0JBQ0VWLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDaEJXLE1BQU0sRUFBRSxTQUFTO2dCQUNqQkMsSUFBSSxFQUFFO2VBQ1AsRUFDRCxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUNqQ0MsQ0FBQyxJQUFJN0MsT0FBTyxDQUFDd0IsS0FBSyxDQUFDcUIsQ0FBQyxDQUFDLENBQ3RCO1lBQ0g7WUFFQUMsSUFBSTtjQUNGVCxlQUFlLENBQUNVLE1BQU0sRUFBRTtjQUV4QixNQUFNaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLO2NBQ3ZCLE1BQU1pQixTQUFTLEdBQUcsSUFBSUMsd0JBQXdCLENBQUNsQixJQUFJLENBQUM7Y0FDcERpQixTQUFTLENBQUNFLElBQUksR0FBRyxJQUFJO2NBRXJCRixTQUFTLENBQUNHLE9BQU8sR0FBRyxNQUFLO2dCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7Z0JBQ3JCLElBQUksQ0FBQ1AsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN4QixDQUFDO2NBRURJLFNBQVMsQ0FBQ0ksT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDUixPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ2hESSxTQUFTLENBQUNLLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ1QsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUVqREksU0FBUyxDQUFDTSxVQUFVLEdBQUdDLEtBQUssSUFBRztnQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBR0EsS0FBSyxDQUFDQyxTQUFTLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBR0QsS0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FBQztnQkFDbkUsSUFBSSxDQUFDWixPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3hCLENBQUM7Y0FFREksU0FBUyxDQUFDUyxLQUFLLEdBQUcsTUFBSztnQkFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLO2dCQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDYixPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN0QixJQUFJLENBQUNBLE9BQU8sQ0FBQyxXQUFXLENBQUM7Y0FDM0IsQ0FBQztjQUVEUCxlQUFlLENBQUNJLEtBQUssQ0FBQ08sU0FBUyxDQUFDO1lBQ2xDO1lBRUFVLElBQUk7Y0FDRnZCLFVBQVUsQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0csT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDTyxJQUFJLEVBQUU7WUFDbkQ7WUFFQWEsSUFBSTtjQUNGLElBQUl4QixVQUFVLENBQUNDLE9BQU8sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUNmLElBQUksQ0FBQ3NCLElBQUksRUFBRTtnQkFDWDs7Y0FFRnJCLGVBQWUsQ0FBQ1UsTUFBTSxFQUFFO1lBQzFCO1lBRUFhLEtBQUs7Y0FDSHZCLGVBQWUsQ0FBQ3VCLEtBQUssRUFBRTtZQUN6QjtZQUVBQyxNQUFNO2NBQ0p4QixlQUFlLENBQUN3QixNQUFNLEVBQUU7WUFDMUI7O1VBQ0RsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RkQ7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQU9NLE1BQU9tQyxZQUFhLFNBQVFDLG9CQUFhO1lBQzdDLFVBQVU7WUFDVixRQUFRO1lBQ1IsU0FBUztZQUNULFdBQVc7WUFFWCxTQUFTLEdBQWMsRUFBRTtZQUN6QixJQUFJaEQsUUFBUTtjQUNWO2NBQ0EsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDaUQsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQztZQUVTLE1BQU07WUFDZixJQUFJQyxLQUFLO2NBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNwQjtZQUVBLElBQUlDLFdBQVc7Y0FDYixNQUFNO2dCQUFFbkQ7Y0FBUSxDQUFFLEdBQUcsSUFBSTtjQUN6QixJQUFJLENBQUNBLFFBQVEsQ0FBQ29ELE1BQU0sRUFBRSxPQUFPO2dCQUFFQyxJQUFJLEVBQUUsRUFBRTtnQkFBRXRFLFNBQVMsRUFBRTtjQUFpQyxDQUFFO2NBRXZGLE1BQU11RSxJQUFJLEdBQUd0RCxRQUFRLENBQUN1RCxHQUFHLEVBQUU7Y0FDM0IsSUFBSUQsSUFBSSxDQUFDckQsSUFBSSxLQUFLLE1BQU0sRUFBRSxPQUFPO2dCQUFFb0QsSUFBSSxFQUFFQyxJQUFJLENBQUNwRCxPQUFPO2dCQUFFbkIsU0FBUyxFQUFFO2NBQWMsQ0FBRTtjQUVsRixPQUFPO2dCQUFFc0UsSUFBSSxFQUFFckQsUUFBUSxDQUFDdUQsR0FBRyxFQUFFLENBQUNyRCxPQUFPO2dCQUFFbkIsU0FBUyxFQUFFdUUsSUFBSSxDQUFDcEQ7Y0FBTyxDQUFFO1lBQ2xFO1lBRUFwQixZQUFZQyxTQUFvQixFQUFFeUUsT0FBZTtjQUMvQyxLQUFLLEVBQUU7Y0FFUCxJQUFJLENBQUMsVUFBVSxHQUFHekUsU0FBUztjQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHeUUsT0FBTztjQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDQyxJQUFJLENBQUM7Z0JBQUV4RCxJQUFJLEVBQUUsUUFBUTtnQkFBRUMsT0FBTyxFQUFFc0Q7Y0FBTyxDQUFFLENBQUM7Y0FFekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJM0MsWUFBSyxFQUFFO2NBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSTZDLGNBQU8sRUFBRTtjQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk3RSxrQkFBUSxDQUFDRSxTQUFTLENBQUM7WUFDMUM7WUFFQSxNQUFNNEUsUUFBUSxDQUFDekQsT0FBZTtjQUM1QixJQUFJLENBQUNBLE9BQU8sRUFBRSxNQUFNLElBQUkwRCxLQUFLLENBQUMsaURBQWlELENBQUM7Y0FFaEYsTUFBTTVELFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUztjQUMvQkUsT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQ2xCLE9BQU8sQ0FBQ2tCLE9BQU8sQ0FBQztjQUUvQztjQUNBRixRQUFRLENBQUN5RCxJQUFJLENBQUM7Z0JBQUV4RCxJQUFJLEVBQUUsTUFBTTtnQkFBRUM7Y0FBTyxDQUFFLENBQUM7Y0FDeEMsSUFBSSxDQUFDMkQsWUFBWSxFQUFFO2NBRW5CLElBQUk7Z0JBQ0Y7Z0JBQ0E7Z0JBRUE7Z0JBQ0EsTUFBTTFFLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMyRSxJQUFJLENBQUM5RCxRQUFRLENBQUM7Z0JBQ3REO2dCQUNBLElBQUksQ0FBQ2IsUUFBUSxDQUFDNEUsTUFBTSxFQUFFO2tCQUNwQjlFLE9BQU8sQ0FBQ3dCLEtBQUssQ0FBQywwQkFBMEIsRUFBRXRCLFFBQVEsQ0FBQ3NCLEtBQUssQ0FBQzs7Z0JBRzNEVCxRQUFRLENBQUN5RCxJQUFJLENBQUM7a0JBQUV4RCxJQUFJLEVBQUUsV0FBVztrQkFBRUMsT0FBTyxFQUFFZixRQUFRLENBQUNnQjtnQkFBSSxDQUFFLENBQUM7Z0JBQzVELElBQUksQ0FBQyxNQUFNLENBQUNhLElBQUksR0FBRzdCLFFBQVEsQ0FBQ2dCLElBQUk7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUN3QyxJQUFJLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQ2tCLFlBQVksRUFBRTtlQUNwQixDQUFDLE9BQU9wRCxLQUFLLEVBQUU7Z0JBQ2R4QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3VCLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxDQUFDb0QsWUFBWSxFQUFFOztZQUV2QjtZQUVBRyxNQUFNLENBQUNDLEtBQWEsRUFBRU4sUUFBZ0I7Y0FDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDVixLQUFLLENBQUMsQ0FBQyxFQUFFZ0IsS0FBSyxHQUFHLENBQUMsQ0FBQztjQUNuRCxJQUFJLENBQUNOLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLENBQUNPLEtBQUssQ0FBQ3pELEtBQUssSUFBSXhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdUIsS0FBSyxDQUFDLENBQUM7WUFDNUQ7WUFFQTs7O1lBR0EsTUFBTTBELGFBQWEsQ0FBQ25FLFFBQVE7Y0FDMUI7Y0FDQSxNQUFNYixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUE0QyxFQUFFO2dCQUN6RUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2RDLE9BQU8sRUFBRTtrQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2tCQUNsQ0MsYUFBYSxFQUFFLFVBQVVDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEdBQUc7aUJBQ2xEO2dCQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2tCQUNuQkMsS0FBSyxFQUFFLGVBQWU7a0JBQ3RCQyxRQUFRLEVBQUVBO2lCQUNYO2VBQ0YsQ0FBQztjQUVGO2NBQ0EsTUFBTUcsSUFBSSxHQUFHLE1BQU1oQixRQUFRLENBQUNpQixJQUFJLEVBQUU7Y0FDbEMsTUFBTWdFLGVBQWUsR0FBR2pFLElBQUksQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxPQUFPLEVBQUVKLE9BQU87Y0FDeERqQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRWtGLGVBQWUsQ0FBQztZQUNsRTs7VUFDRHhEOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNHRDtVQUNBO1VBRUE7VUFKQTs7VUFLTSxNQUFPeUQsUUFBUyxTQUFRdkQsWUFBTTtZQUNsQyxVQUFVO1lBRUQsWUFBWTtZQUNyQixjQUFjO1lBQ2QsT0FBTyxHQUFlLEVBQUU7WUFDeEIsSUFBSXdELE1BQU07Y0FDUixPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3JCO1lBQ0EsT0FBTztZQUNQLElBQUlQLE1BQU07Y0FDUixPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3JCO1lBRUEsSUFBSVEsWUFBWTtjQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUVBLFlBQVk7WUFDMUM7WUFFQSxVQUFVLEdBQUcsS0FBSztZQUNsQixJQUFJQyxTQUFTO2NBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVTtZQUN4QjtZQUVBMUYsWUFBWUMsU0FBb0I7Y0FDOUIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBR0EsU0FBUztjQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkyRSxjQUFPLEVBQUU7WUFDbkM7WUFFQSxNQUFNO1lBQ04sSUFBSWpELEtBQUs7Y0FDUCxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ3BCO1lBRUEsSUFBSWdFLEtBQUs7Y0FDUCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDckI7WUFFQSxRQUFRO1lBRVI7WUFDQSxZQUFZLEdBQUcsS0FBSztZQUNwQixZQUFZO1lBQ1osTUFBTTtZQUNOLElBQUlDLEtBQUs7Y0FDUCxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ3BCO1lBQ0EsTUFBTUMsVUFBVTtjQUNkLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVk7Y0FDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJQyxvQkFBYyxFQUFRO2NBRTlDQyxTQUFTLENBQUNDLFlBQVksQ0FDbkJDLFlBQVksQ0FBQztnQkFBRUwsS0FBSyxFQUFFO2NBQUksQ0FBRSxDQUFDLENBQzdCTSxJQUFJLENBQUNDLE1BQU0sSUFBRztnQkFDYixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUlDLGFBQWEsQ0FBQ0QsTUFBTSxFQUFFO2tCQUFFRSxRQUFRLEVBQUU7Z0JBQVksQ0FBRSxDQUFDO2dCQUUzRSxJQUFJLENBQUMsY0FBYyxDQUFDQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU1QyxLQUFLLElBQUc7a0JBQzVELElBQUksQ0FBQyxPQUFPLENBQUNpQixJQUFJLENBQUNqQixLQUFLLENBQUNyQyxJQUFJLENBQUM7a0JBRTdCLElBQUksQ0FBQzBCLE9BQU8sQ0FBQyxlQUFlLENBQUM7Z0JBQy9CLENBQUMsQ0FBQztjQUNKLENBQUMsQ0FBQyxDQUNEcUMsS0FBSyxDQUFDekQsS0FBSyxJQUFHO2dCQUNiLElBQUksQ0FBQyxNQUFNLEdBQUdBLEtBQUssQ0FBQ0gsT0FBTztnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQytFLE1BQU0sRUFBRTtjQUM1QixDQUFDLENBQUMsQ0FDREMsT0FBTyxDQUFDLE1BQUs7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJO2dCQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDQyxPQUFPLEVBQUU7Y0FDN0IsQ0FBQyxDQUFDO2NBRUosT0FBTyxJQUFJLENBQUMsWUFBWTtZQUMxQjtZQUVRLE1BQU1DLGdCQUFnQixDQUFDQyxHQUFXO2NBQ3hDLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNILE9BQU8sRUFBRUYsTUFBTSxLQUFJO2dCQUNyQyxNQUFNWCxLQUFLLEdBQUcsSUFBSWlCLEtBQUssRUFBRTtnQkFDekJqQixLQUFLLENBQUNVLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLE1BQUs7a0JBQzVDRyxPQUFPLENBQUNiLEtBQUssQ0FBQ2tCLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxDQUFDO2dCQUNGbEIsS0FBSyxDQUFDVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBSztrQkFDbkNDLE1BQU0sQ0FBQyxJQUFJekIsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsQ0FBQztnQkFDRmMsS0FBSyxDQUFDbUIsR0FBRyxHQUFHSixHQUFHO2NBQ2pCLENBQUMsQ0FBQztZQUNKO1lBQ0EsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQkssTUFBTTtjQUNKO2NBRUEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxJQUFJLENBQUMsaUJBQWlCO2NBRXpEO2NBQ0E7Y0FFQSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSWxCLG9CQUFjLEVBQVE7Y0FDbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixNQUFNLElBQUloQixLQUFLLENBQUMseURBQXlELENBQUM7O2NBRTVFLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUztjQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUk7Y0FDdEIsSUFBSSxDQUFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUV0QixJQUFJLENBQUM4QyxVQUFVLEVBQUUsQ0FDZEssSUFBSSxDQUFDLFlBQVc7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBSyxHQUFFO2dCQUN6QixNQUFNTixLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFcUIsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDUixPQUFPLENBQUNiLEtBQUssQ0FBQztnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHc0IsU0FBUztjQUNwQyxDQUFDLENBQUMsQ0FDRDlCLEtBQUssQ0FBQ3pELEtBQUssSUFBSXhCLE9BQU8sQ0FBQ3dCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7Y0FDdkMsT0FBTyxJQUFJLENBQUMsaUJBQWlCO1lBQy9CO1lBRUEsWUFBWTtZQUNabUMsSUFBSTtjQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QjNELE9BQU8sQ0FBQ2dILElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDakQ7O2NBRUYsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLFlBQVk7Y0FDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJckIsb0JBQWMsRUFBTztjQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLElBQUloQixLQUFLLENBQUMscUNBQXFDLENBQUM7Y0FDNUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTO2NBQ3hCLE1BQU1oQixJQUFJLEdBQUcsTUFBSztnQkFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUs7Z0JBQ3ZCLE1BQU1zRCxPQUFPLEdBQUcsa0JBQUssR0FBRTtnQkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQ2QsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQVc7a0JBQ3RELE1BQU1WLEtBQUssR0FBRyxJQUFJeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQUVDLElBQUksRUFBRTtrQkFBWSxDQUFFLENBQUM7a0JBQzVELE1BQU1DLFFBQVEsR0FBR0MsR0FBRyxDQUFDQyxlQUFlLENBQUM3QixLQUFLLENBQUM7a0JBQzNDekYsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFbUgsUUFBUSxDQUFDO2tCQUNqQyxNQUFNRyx5QkFBeUIsR0FBR04sT0FBTyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztrQkFDL0Q7a0JBQ0EvQixLQUFLLENBQUNnQyxhQUFhLEdBQUdGLHlCQUF5QjtrQkFDL0M7a0JBQ0EsSUFBSSxDQUFDLE1BQU0sR0FBRzlCLEtBQUs7a0JBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQ2EsT0FBTyxDQUFDYixLQUFLLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUdzQixTQUFTOztrQkFFL0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQ1QsT0FBTyxDQUFDYixLQUFLLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBR3NCLFNBQVM7O2dCQUV0QyxDQUFDLENBQUM7Z0JBQ0Y7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBRUE7Z0JBQ0E7Z0JBQ0E7Z0JBRUEsSUFBSSxDQUFDLGNBQWMsRUFBRXBELElBQUksRUFBRTtnQkFDM0IsSUFBSSxDQUFDZixPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3hCLENBQUM7Y0FDRCxJQUFJLENBQUMsWUFBWSxHQUFHZSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMrQixVQUFVLEVBQUUsQ0FBQ0ssSUFBSSxDQUFDcEMsSUFBSSxDQUFDO2NBQ3pELE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDMUI7O1VBQ0RoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxS0Q7VUFFTSxNQUFPK0YsV0FBVztZQUNiLFVBQVU7WUFFbkIsYUFBYSxHQUFHLEtBQUs7WUFDckIsSUFBSXBDLFlBQVk7Y0FDZCxPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzNCO1lBRUEsTUFBTTtZQUNOLElBQUk5RCxLQUFLO2NBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNwQjtZQUVBM0IsWUFBWUMsU0FBb0I7Y0FDOUIsSUFBSSxDQUFDLFVBQVUsR0FBR0EsU0FBUztZQUM3QjtZQUVBLE1BQU02SCxVQUFVLENBQUNsQyxLQUFXLEVBQUU5RixNQUFjO2NBQzFDLElBQUksQ0FBQzhGLEtBQUssQ0FBQ21DLElBQUksRUFBRTtjQUVqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUk7Y0FFekI1SCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRU4sTUFBTSxDQUFDO2NBRTVDLE1BQU1rSSxRQUFRLEdBQUcsSUFBSUMsUUFBUSxFQUFFO2NBQy9CRCxRQUFRLENBQUNFLE1BQU0sQ0FBQyxNQUFNLEVBQUV0QyxLQUFLLEVBQUUsV0FBVyxDQUFDO2NBQzNDb0MsUUFBUSxDQUFDRSxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztjQUNyQ0YsUUFBUSxDQUFDRSxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztjQUNqQ0YsUUFBUSxDQUFDRSxNQUFNLENBQUMsUUFBUSxFQUFFcEksTUFBTSxDQUFDO2NBQ2pDa0ksUUFBUSxDQUFDRSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDO2NBRTFDLElBQUk7Z0JBQ0YsTUFBTTdILFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsZ0RBQWdELEVBQUU7a0JBQzdFQyxNQUFNLEVBQUUsTUFBTTtrQkFDZE8sSUFBSSxFQUFFa0gsUUFBUTtrQkFDZHhILE9BQU8sRUFBRTtvQkFDUEMsYUFBYSxFQUFFLFVBQVVDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEdBQUc7O2lCQUVwRCxDQUFDO2dCQUVGLE1BQU1RLElBQUksR0FBRyxNQUFNaEIsUUFBUSxDQUFDaUIsSUFBSSxFQUFFO2dCQUNsQyxJQUFJLENBQUNELElBQUksQ0FBQ2EsSUFBSSxFQUFFO2dCQUVoQjtnQkFDQSxJQUFJLENBQUMsVUFBVSxDQUFDMkMsUUFBUSxDQUFDeEQsSUFBSSxDQUFDYSxJQUFJLENBQUM7ZUFDcEMsQ0FBQyxPQUFPUCxLQUFLLEVBQUU7Z0JBQ2R4QixPQUFPLENBQUN3QixLQUFLLENBQUNBLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBR0EsS0FBSyxDQUFDSCxPQUFPO2VBQzVCLFNBQVM7Z0JBQ1IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLOztZQUU5Qjs7VUFDRE07Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckREO1VBQ0E7VUFFQTtVQUpBOztVQUtNLE1BQU9xRyxhQUFjLFNBQVFuRyxZQUFNO1lBQ3ZDLFVBQVU7WUFFRCxZQUFZO1lBQ3JCLGNBQWM7WUFDZCxPQUFPLEdBQWUsRUFBRTtZQUN4QixJQUFJd0QsTUFBTTtjQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDckI7WUFDQSxPQUFPO1lBQ1AsSUFBSVAsTUFBTTtjQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU87WUFDckI7WUFFQSxJQUFJUSxZQUFZO2NBQ2QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRUEsWUFBWTtZQUMxQztZQUVBLFVBQVUsR0FBRyxLQUFLO1lBQ2xCLElBQUlDLFNBQVM7Y0FDWCxPQUFPLElBQUksQ0FBQyxVQUFVO1lBQ3hCO1lBRUExRixZQUFZQyxTQUFvQjtjQUM5QixLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsVUFBVSxHQUFHQSxTQUFTO2NBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTJFLGNBQU8sRUFBRTtZQUNuQztZQUVBLE1BQU07WUFDTixJQUFJakQsS0FBSztjQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDcEI7WUFFQSxJQUFJZ0UsS0FBSztjQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNyQjtZQUVBLFFBQVE7WUFFUnlDLEtBQUs7WUFDTCxZQUFZLEdBQUcsS0FBSztZQUNwQixZQUFZO1lBQ1osTUFBTXZDLFVBQVU7Y0FDZCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZO2NBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSUMsb0JBQWMsRUFBUTtjQUU5Q0MsU0FBUyxDQUFDQyxZQUFZLENBQ25CQyxZQUFZLENBQUM7Z0JBQUVMLEtBQUssRUFBRTtjQUFJLENBQUUsQ0FBQyxDQUM3Qk0sSUFBSSxDQUFDQyxNQUFNLElBQUc7Z0JBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJQyxhQUFhLENBQUNELE1BQU0sQ0FBQztnQkFFL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQ0csZ0JBQWdCLENBQUMsZUFBZSxFQUFFNUMsS0FBSyxJQUFHO2tCQUM1RCxJQUFJLENBQUMsT0FBTyxDQUFDaUIsSUFBSSxDQUFDakIsS0FBSyxDQUFDckMsSUFBSSxDQUFDO2dCQUMvQixDQUFDLENBQUM7Y0FDSixDQUFDLENBQUMsQ0FDRCtELEtBQUssQ0FBQ3pELEtBQUssSUFBRztnQkFDYixJQUFJLENBQUMsTUFBTSxHQUFHQSxLQUFLLENBQUNILE9BQU87Z0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMrRSxNQUFNLEVBQUU7Y0FDNUIsQ0FBQyxDQUFDLENBQ0RDLE9BQU8sQ0FBQyxNQUFLO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTtnQkFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQ0MsT0FBTyxFQUFFO2NBQzdCLENBQUMsQ0FBQztjQUVKLE9BQU8sSUFBSSxDQUFDLFlBQVk7WUFDMUI7WUFDQSxVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCTyxNQUFNO2NBQ0o7Y0FFQSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLElBQUksQ0FBQyxpQkFBaUI7Y0FDekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUlsQixvQkFBYyxFQUFRO2NBQ25ELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsTUFBTSxJQUFJaEIsS0FBSyxDQUFDLHlEQUF5RCxDQUFDOztjQUc1RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUk7Y0FDdEIsSUFBSSxDQUFDL0IsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUV0QixJQUFJLENBQUM4QyxVQUFVLEVBQUUsQ0FDZEssSUFBSSxDQUFDLFlBQVc7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBSyxHQUFFO2dCQUN6QixNQUFNTixLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFcUIsS0FBSyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUNSLE9BQU8sQ0FBQ2IsS0FBSyxDQUFDO2NBQ3ZDLENBQUMsQ0FBQyxDQUNEUixLQUFLLENBQUN6RCxLQUFLLElBQUl4QixPQUFPLENBQUN3QixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO2NBQ3ZDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQjtZQUMvQjtZQUNBLFlBQVk7WUFDWixNQUFNO1lBQ04sSUFBSWlFLEtBQUs7Y0FDUCxPQUFPLElBQUksQ0FBQyxNQUFNO1lBQ3BCO1lBQ0E5QixJQUFJO2NBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCM0QsT0FBTyxDQUFDZ0gsSUFBSSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNqRDs7Y0FFRixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsWUFBWTtjQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUlyQixvQkFBYyxFQUFPO2NBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sSUFBSWhCLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztjQUM1RSxNQUFNaEIsSUFBSSxHQUFHLE1BQUs7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLO2dCQUN2QixNQUFNc0QsT0FBTyxHQUFHLGtCQUFLLEdBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUNkLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFXO2tCQUN0RCxNQUFNVixLQUFLLEdBQUcsSUFBSXlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUFFQyxJQUFJLEVBQUU7a0JBQVksQ0FBRSxDQUFDO2tCQUM1RCxNQUFNQyxRQUFRLEdBQUdDLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDN0IsS0FBSyxDQUFDO2tCQUMzQ3pGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRW1ILFFBQVEsQ0FBQztrQkFDakMsTUFBTUcseUJBQXlCLEdBQUdOLE9BQU8sQ0FBQ08sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7a0JBQy9EO2tCQUNBL0IsS0FBSyxDQUFDZ0MsYUFBYSxHQUFHRix5QkFBeUI7a0JBRS9DLElBQUksQ0FBQyxNQUFNLEdBQUc5QixLQUFLO2tCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDYSxPQUFPLENBQUNiLEtBQUssQ0FBQztnQkFDbEMsQ0FBQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxjQUFjLEVBQUU5QixJQUFJLEVBQUU7Z0JBQzNCLElBQUksQ0FBQ2YsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN4QixDQUFDO2NBQ0QsSUFBSSxDQUFDLFlBQVksR0FBR2UsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDK0IsVUFBVSxFQUFFLENBQUNLLElBQUksQ0FBQ3BDLElBQUksQ0FBQztjQUN6RCxPQUFPLElBQUksQ0FBQyxZQUFZO1lBQzFCOztVQUNEaEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbklEO1VBQ0E7VUFDQTtVQUdPO1VBQVUsTUFDWHVHLFNBQVUsU0FBUXJHLFlBQU07WUFDbkIsYUFBYTtZQUN0QixJQUFJc0csWUFBWTtjQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWE7WUFDM0I7WUFFUyxTQUFTO1lBQ2xCLElBQUlDLFFBQVE7Y0FDVixPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3ZCO1lBRVMsV0FBVztZQUNwQixJQUFJQyxVQUFVO2NBQ1osT0FBTyxJQUFJLENBQUMsV0FBVztZQUN6QjtZQUVBeEksWUFBWXdJLFVBQXVCO2NBQ2pDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxXQUFXLEdBQUdBLFVBQVU7Y0FDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJakQsa0JBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJdEIsbUJBQVksQ0FBQyxJQUFJLEVBQUV1RSxVQUFVLEVBQUU5RCxPQUFPLENBQUM7WUFDbEU7WUFFQSxNQUFNRyxRQUFRLENBQUNBLFFBQWdCO2NBQzdCLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQ0EsUUFBUSxDQUFDQSxRQUFRLENBQUM7WUFDN0M7O1VBQ0QvQyIsIm5hbWVzIjpbInByb21wdCIsIkNvbW1hbmRzIiwiY29uc3RydWN0b3IiLCJhc3Npc3RhbnQiLCJyZXF1ZXN0IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbmZpZyIsInBhcmFtcyIsIm9wZW5pYSIsImtleSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwiZGF0YSIsImpzb24iLCJjaG9pY2VzIiwibWVzc2FnZSIsIm1heCIsIm5pY29sYXMiLCJlcnJvciIsImV4YyIsInN0YWNrIiwiZXhwb3J0cyIsIlZvaWNlIiwiRXZlbnRzIiwic3BlYWtpbmciLCJ0ZXh0IiwidmFsdWUiLCJjdXJyZW50V29yZCIsInBhdXNlZCIsImdsb2JhbFRoaXMiLCJjb3Jkb3ZhIiwic3BlZWNoU3ludGhlc2lzIiwiaW5zdGFuY2UiLCJfbW9iaWxlIiwiVFRTIiwic3BlYWsiLCJsb2NhbGUiLCJyYXRlIiwidHJpZ2dlciIsImUiLCJfd2ViIiwiY2FuY2VsIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwibGFuZyIsIm9uc3RhcnQiLCJvbnBhdXNlIiwib25yZXN1bWUiLCJvbmJvdW5kYXJ5IiwiZXZlbnQiLCJjaGFySW5kZXgiLCJvbmVuZCIsInBsYXkiLCJzdG9wIiwicGF1c2UiLCJyZXN1bWUiLCJDb252ZXJzYXRpb24iLCJSZWFjdGl2ZU1vZGVsIiwic2xpY2UiLCJ2b2ljZSIsImxhc3RNZXNzYWdlIiwibGVuZ3RoIiwidXNlciIsImxhc3QiLCJwb3AiLCJtaXNzaW9uIiwicHVzaCIsIkFJTW9kZWwiLCJxdWVzdGlvbiIsIkVycm9yIiwidHJpZ2dlckV2ZW50IiwiY2hhdCIsInN0YXR1cyIsInVwZGF0ZSIsImluZGV4IiwiY2F0Y2giLCJjbGllbnRBUElDYWxsIiwicmVzcG9uc2VNZXNzYWdlIiwiUmVjb3JkZXIiLCJjaHVua3MiLCJ0cmFuc2NyaWJpbmciLCJyZWNvcmRpbmciLCJ2YWxpZCIsImF1ZGlvIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJtaW1lVHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWplY3QiLCJmaW5hbGx5IiwicmVzb2x2ZSIsImdldEF1ZGlvRHVyYXRpb24iLCJ1cmwiLCJQcm9taXNlIiwiQXVkaW8iLCJkdXJhdGlvbiIsInNyYyIsInJlY29yZCIsInN0YXJ0IiwidW5kZWZpbmVkIiwid2FybiIsImVuZHRpbWUiLCJCbG9iIiwidHlwZSIsImF1ZGlvVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVjb3JkaW5nVGltZU1pbGxpc2Vjb25kcyIsImRpZmYiLCJyZWNvcmRpbmdUaW1lIiwiVHJhbnNjcmliZXIiLCJ0cmFuc2NyaWJlIiwic2l6ZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJfX09MRFJlY29yZGVyIiwiVklFSk8iLCJBc3Npc3RhbnQiLCJjb252ZXJzYXRpb24iLCJyZWNvcmRlciIsImFzc2lnbm1lbnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIkNvbnZlcnNhdGlvbi9Db21tYW5kcy50cyIsIkNvbnZlcnNhdGlvbi9Wb2ljZS50cyIsIkNvbnZlcnNhdGlvbi9pbmRleC50cyIsIlJlY29yZGVyLnRzIiwiVHJhbnNjcmliZXIudHMiLCJfX29sZC50cyIsImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
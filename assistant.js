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
        hash: 1118242748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Commands = void 0;
          const prompt = "[Eres un analizador de mensajes que convierte un {texto} en un código de programación json.\n" + "El {texto} es un mensaje que está enviando un usuario a otro usuario llamado Max. El {texto} puede incluir también tareas que debe realizar Nicolás (su asistente virtual).\n" + "Tu trabajo es identificar a quién va dirigido el mensaje (Max, Nicolás o a ambos), y crear un código de programación json que se utilizará para invocar una API. No debes preocuparte por la API, sólo por la generación del json.\n" + 'El json debe tener sólo tres propiedades, "max", "nicolas" y "error", todas las propiedades son de tipo string.\n' + "\n" + '. La propiedad "nicolas" puede ser nula, o contener sólo el detalle de la tarea que el usuario le ha solicitado a Nicolás.\n' + '. La propiedad "max" puede ser nula, o contener sólo el mensaje que el usuario le está enviando a Max.\n' + "\n" + "En primera instancia, la conversación está dirigida a Max, pero el usuario podría solicitarle a Nicolás una tarea en la misma conversación. Por lo tanto, si Nicolás no es mencionado, el mensaje es completamente dirigido a Max.\n" + "\n" + "Concéntrate en todo el texto, ya que el usuario puede solicitarle a Nicolás una tarea en cualquier momento de la conversación simplemente mencionando su nombre.\n" + "Quiero sólo el json, ningún otro tipo de contenido incluyendo el pre-text y post-text, ya que tu respuesta debe poder ser parseada (JSON.parse(response)) de manera directa.]";
          class Commands {
            #assistant;
            #enabled = false;
            constructor(assistant) {
              this.#assistant = assistant;
            }
            async request(request) {
              return request;
              // if (!this.#enabled) return request;
              // try {
              //   // Make the API call to generate a response
              //   const response = await fetch("https://api.openai.com/v1/chat/completions", {
              //     method: "POST",
              //     headers: {
              //       "Content-Type": "application/json",
              //       Authorization: `Bearer ${config.params.openia.key}`,
              //     },
              //     body: JSON.stringify({
              //       model: "gpt-3.5-turbo",
              //       messages: [
              //         {
              //           role: "assistant",
              //           content: prompt,
              //         },
              //         {
              //           role: "user",
              //           content: `texto = ${request}`,
              //         },
              //       ],
              //     }),
              //   });
              //   // Extract the response message from the API response object
              //   const data = await response.json();
              //   return (() => {
              //     try {
              //       const response = data.choices[0].message?.content;
              //       const { max, nicolas, error } = response;
              //       console.log("max", max);
              //       console.log("nicolas", nicolas);
              //       console.log("error", error);
              //       console.log(response);
              //       return request;
              //     } catch (exc) {
              //       console.log(exc);
              //     }
              //   })();
              // } catch (error) {
              //   console.log(error.stack);
              //   return request;
              // }
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
        hash: 1050169412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversation = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _Voice = require("./Voice");
          var _Commands = require("./Commands");
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
              // Define general context on chat
              // content = await this.#commands.request(content);
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
              // const response = await fetch("https://api.openai.com/v1/chat/completions", {
              //   method: "POST",
              //   headers: {
              //     "Content-Type": "application/json",
              //     Authorization: `Bearer ${config.params.openia.key}`,
              //   },
              //   body: JSON.stringify({
              //     model: "gpt-3.5-turbo",
              //     messages: messages,
              //   }),
              // });
              // // Extract the response message from the API response object
              // const data = await response.json();
              // const responseMessage = data.choices[0].message?.content;
              // console.log("completions client response---->", responseMessage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxJQUFJLENBQUMsYUFBYSxDQUFDQSxRQUFRLENBQUNBLFFBQVEsQ0FBQztZQUM3Qzs7VUFDRHBEIiwibmFtZXMiOlsicHJvbXB0IiwiQ29tbWFuZHMiLCJjb25zdHJ1Y3RvciIsImFzc2lzdGFudCIsInJlcXVlc3QiLCJleHBvcnRzIiwiVm9pY2UiLCJFdmVudHMiLCJzcGVha2luZyIsInRleHQiLCJ2YWx1ZSIsImN1cnJlbnRXb3JkIiwicGF1c2VkIiwiZ2xvYmFsVGhpcyIsImNvcmRvdmEiLCJzcGVlY2hTeW50aGVzaXMiLCJpbnN0YW5jZSIsIl9tb2JpbGUiLCJUVFMiLCJzcGVhayIsImxvY2FsZSIsInJhdGUiLCJ0cmlnZ2VyIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl93ZWIiLCJjYW5jZWwiLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJsYW5nIiwib25zdGFydCIsIm9ucGF1c2UiLCJvbnJlc3VtZSIsIm9uYm91bmRhcnkiLCJldmVudCIsImNoYXJJbmRleCIsIm9uZW5kIiwicGxheSIsInN0b3AiLCJwYXVzZSIsInJlc3VtZSIsIkNvbnZlcnNhdGlvbiIsIlJlYWN0aXZlTW9kZWwiLCJtZXNzYWdlcyIsInNsaWNlIiwidm9pY2UiLCJsYXN0TWVzc2FnZSIsImxlbmd0aCIsInVzZXIiLCJsYXN0IiwicG9wIiwicm9sZSIsImNvbnRlbnQiLCJtaXNzaW9uIiwicHVzaCIsIkFJTW9kZWwiLCJxdWVzdGlvbiIsIkVycm9yIiwidHJpZ2dlckV2ZW50IiwicmVzcG9uc2UiLCJjaGF0Iiwic3RhdHVzIiwiZGF0YSIsImxvZyIsInVwZGF0ZSIsImluZGV4IiwiY2F0Y2giLCJjbGllbnRBUElDYWxsIiwiUmVjb3JkZXIiLCJjaHVua3MiLCJ0cmFuc2NyaWJpbmciLCJyZWNvcmRpbmciLCJ2YWxpZCIsImF1ZGlvIiwiaW5pdGlhbGlzZSIsIlBlbmRpbmdQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJtaW1lVHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZXNzYWdlIiwicmVqZWN0IiwiZmluYWxseSIsInJlc29sdmUiLCJnZXRBdWRpb0R1cmF0aW9uIiwidXJsIiwiUHJvbWlzZSIsIkF1ZGlvIiwiZHVyYXRpb24iLCJzcmMiLCJyZWNvcmQiLCJzdGFydCIsInVuZGVmaW5lZCIsIndhcm4iLCJlbmR0aW1lIiwiQmxvYiIsInR5cGUiLCJhdWRpb1VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlY29yZGluZ1RpbWVNaWxsaXNlY29uZHMiLCJkaWZmIiwicmVjb3JkaW5nVGltZSIsIkFzc2lzdGFudCIsImNvbnZlcnNhdGlvbiIsInJlY29yZGVyIiwiYXNzaWdubWVudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiQ29udmVyc2F0aW9uL0NvbW1hbmRzLnRzIiwiQ29udmVyc2F0aW9uL1ZvaWNlLnRzIiwiQ29udmVyc2F0aW9uL2luZGV4LnRzIiwiUmVjb3JkZXIudHMiLCJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
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
        hash: 2179362717,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversation = void 0;
          var _model = require("@beyond-js/reactive-2/model");
          var _aihub = require("@aimpact/backend/aihub");
          var _Voice = require("./Voice");
          var _Commands = require("./Commands");
          // TODO pending clean

          class Conversation extends _model.ReactiveModel {
            #assistant;
            #assignment;
            #commands;
            #mission;
            #aihubModel;
            #messages = [];
            get messages() {
              // Remove the first message, that is the assistant mission
              console.log("-------------------------------------");
              console.log(this.#messages);
              console.log(this.#messages.slice(1));
              console.log("-------------------------------------");
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
              this.#voice = new _Voice.Voice();
              this.#aihubModel = new _aihub.AIModel();
              this.#commands = new _Commands.Commands(assistant);
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
              // TODO pending clean - Define general context on chat
              // content = await this.#commands.request(content);
              const messages = this.#messages;
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
        hash: 1432218469,
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
              this.#conversation = new _index.Conversation(this, assignment);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtVQUNBO1VBQ0E7VUFHTztVQUFVLE1BQ1gyRyxTQUFVLFNBQVF6RyxZQUFNO1lBQ25CLGFBQWE7WUFDdEIsSUFBSTBHLFlBQVk7Y0FDZCxPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzNCO1lBRVMsU0FBUztZQUNsQixJQUFJQyxRQUFRO2NBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUztZQUN2QjtZQUVTLFdBQVc7WUFDcEIsSUFBSTNELFVBQVU7Y0FDWixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3pCO1lBRUFyRCxZQUFZcUQsVUFBdUI7Y0FDakMsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBR0EsVUFBVTtjQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUlrQixrQkFBUSxDQUFDLElBQUksQ0FBQztjQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUkvQixtQkFBWSxDQUFDLElBQUksRUFBRWEsVUFBVSxDQUFDO1lBQ3pEO1lBRUEsTUFBTU8sUUFBUSxDQUFDQSxRQUFnQjtjQUM3QixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUNBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDO1lBQzdDOztVQUNEekQiLCJuYW1lcyI6WyJwcm9tcHQiLCJDb21tYW5kcyIsImNvbnN0cnVjdG9yIiwiYXNzaXN0YW50IiwicmVxdWVzdCIsImV4cG9ydHMiLCJWb2ljZSIsIkV2ZW50cyIsInNwZWFraW5nIiwidGV4dCIsInZhbHVlIiwiY3VycmVudFdvcmQiLCJwYXVzZWQiLCJnbG9iYWxUaGlzIiwiY29yZG92YSIsInNwZWVjaFN5bnRoZXNpcyIsImluc3RhbmNlIiwiX21vYmlsZSIsIlRUUyIsInNwZWFrIiwibG9jYWxlIiwicmF0ZSIsInRyaWdnZXIiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3dlYiIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsImxhbmciLCJvbnN0YXJ0Iiwib25wYXVzZSIsIm9ucmVzdW1lIiwib25ib3VuZGFyeSIsImV2ZW50IiwiY2hhckluZGV4Iiwib25lbmQiLCJwbGF5Iiwic3RvcCIsInBhdXNlIiwicmVzdW1lIiwiQ29udmVyc2F0aW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1lc3NhZ2VzIiwibG9nIiwic2xpY2UiLCJ2b2ljZSIsImxhc3RNZXNzYWdlIiwibGVuZ3RoIiwidXNlciIsImxhc3QiLCJwb3AiLCJyb2xlIiwiY29udGVudCIsImFzc2lnbm1lbnQiLCJBSU1vZGVsIiwiaW5pdCIsInJlYWR5IiwibG9hZCIsIm1pc3Npb24iLCJwdXNoIiwicXVlc3Rpb24iLCJFcnJvciIsInRyaWdnZXJFdmVudCIsInJlc3BvbnNlIiwiY2hhdCIsInN0YXR1cyIsImRhdGEiLCJ1cGRhdGUiLCJpbmRleCIsImNhdGNoIiwiY2xpZW50QVBJQ2FsbCIsIlJlY29yZGVyIiwiY2h1bmtzIiwidHJhbnNjcmliaW5nIiwicmVjb3JkaW5nIiwidmFsaWQiLCJhdWRpbyIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwibWltZVR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwibWVzc2FnZSIsInJlamVjdCIsImZpbmFsbHkiLCJyZXNvbHZlIiwiZ2V0QXVkaW9EdXJhdGlvbiIsInVybCIsIlByb21pc2UiLCJBdWRpbyIsImR1cmF0aW9uIiwic3JjIiwicmVjb3JkIiwic3RhcnQiLCJ1bmRlZmluZWQiLCJ3YXJuIiwiZW5kdGltZSIsIkJsb2IiLCJ0eXBlIiwiYXVkaW9VcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWNvcmRpbmdUaW1lTWlsbGlzZWNvbmRzIiwiZGlmZiIsInJlY29yZGluZ1RpbWUiLCJBc3Npc3RhbnQiLCJjb252ZXJzYXRpb24iLCJyZWNvcmRlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiQ29udmVyc2F0aW9uL0NvbW1hbmRzLnRzIiwiQ29udmVyc2F0aW9uL1ZvaWNlLnRzIiwiQ29udmVyc2F0aW9uL2luZGV4LnRzIiwiUmVjb3JkZXIudHMiLCJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
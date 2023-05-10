System.register(["@beyond-js/kernel@0.1.9/bundle", "@ai-clase/demo@0.0.1/config", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Voice, Assistant, __beyond_pkg, hmr;
  _export({
    Voice: void 0,
    Assistant: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aiClaseDemo001Config) {
      dependency_1 = _aiClaseDemo001Config;
    }, function (_beyondJsKernel019Core) {
      dependency_2 = _beyondJsKernel019Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["openai", "3.2.1"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/widgets", "0.1.4"], ["@beyond-js/reactive", "1.0.0"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@types/dom-mediacapture-record", "1.0.14"], ["@google-cloud/error-reporting", "3.0.5"], ["uuid", "9.0.0"], ["firebase", "9.17.2"], ["@firebase/util", "1.9.3"], ["@firebase/logger", "0.4.0"], ["@firebase/component", "0.6.4"], ["@google-cloud/logging", "10.4.0"], ["firebase-admin", "11.5.0"], ["socket.io-client", "4.6.1"], ["@ai-clase/demo", "0.0.1"], ["@ai-clase/demo", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@ai-clase/demo@0.0.1/assistant"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@ai-clase/demo/config', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./Conversation/Commands
      ***************************************/
      ims.set('./Conversation/Commands', {
        hash: 3496976421,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Commands = void 0;
          var _config = require("@ai-clase/demo/config");
          const prompt = "[Eres un analizador de mensajes que convierte un {texto} en un código de programación json.\n" + "El {texto} es un mensaje que está enviando un usuario a otro usuario llamado Max. El {texto} puede incluir también tareas que debe realizar Nicolás (su asistente virtual).\n" + "Tu trabajo es identificar a quién va dirigido el mensaje (Max, Nicolás o a ambos), y crear un código de programación json que se utilizará para invocar una API. No debes preocuparte por la API, sólo por la generación del json.\n" + 'El json debe tener sólo tres propiedades, "max", "nicolas" y "error", todas las propiedades son de tipo string.\n' + "\n" + '. La propiedad "nicolas" puede ser nula, o contener sólo el detalle de la tarea que el usuario le ha solicitado a Nicolás.\n' + '. La propiedad "max" puede ser nula, o contener sólo el mensaje que el usuario le está enviando a Max.\n' + "\n" + "En primera instancia, la conversación está dirigida a Max, pero el usuario podría solicitarle a Nicolás una tarea en la misma conversación. Por lo tanto, si Nicolás no es mencionado, el mensaje es completamente dirigido a Max.\n" + "\n" + "Concéntrate en todo el texto, ya que el usuario puede solicitarle a Nicolás una tarea en cualquier momento de la conversación simplemente mencionando su nombre.\n" + "Quiero sólo el json, ningún otro tipo de contenido incluyendo el pre-text y post-text, ya que tu respuesta debe poder ser parseada (JSON.parse(response)) de manera directa.]";
          class Commands {
            #assistant;
            #enabled = false;
            constructor(assistant) {
              this.#assistant = assistant;
            }
            async request(request) {
              if (!this.#enabled) return request;
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
        hash: 1679219904,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversation = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _Voice = require("./Voice");
          var _Commands = require("./Commands");
          var _config = require("@ai-clase/demo/config");
          class Conversation extends _core.Events {
            #assistant;
            #mission;
            #commands;
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
              this.trigger("change");
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
                    messages: messages
                  })
                });
                // Extract the response message from the API response object
                const data = await response.json();
                const responseMessage = data.choices[0].message?.content;
                messages.push({
                  role: "assistant",
                  content: responseMessage
                });
                this.#voice.text = responseMessage;
                this.#voice.play();
                this.trigger("change");
              } catch (error) {
                console.log(error);
                this.trigger("change");
              }
            }
            update(index, question) {
              this.#messages = this.#messages.slice(0, index + 1);
              this.question(question).catch(error => console.log(error));
            }
          }
          exports.Conversation = Conversation;
        }
      });

      /**************************
      INTERNAL MODULE: ./Recorder
      **************************/

      ims.set('./Recorder', {
        hash: 1253085931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _Transcriber = require("./Transcriber");
          var _core = require("@beyond-js/kernel/core");
          class Recorder extends _core.Events {
            #assistant;
            #transcriber;
            #mediaRecorder;
            #chunks = [];
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
              this.#transcriber = new _Transcriber.Transcriber(assistant);
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            #promise;
            #initialised = false;
            async initialise() {
              if (this.#promise) return await this.#promise;
              this.#promise = new _core.PendingPromise();
              navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => {
                this.#mediaRecorder = new MediaRecorder(stream);
                this.#mediaRecorder.addEventListener("dataavailable", event => {
                  this.#chunks.push(event.data);
                });
                this.#mediaRecorder.addEventListener("stop", () => {
                  const audio = new Blob(this.#chunks, {
                    type: "audio/mp3"
                  });
                  const prompt = (() => {
                    const {
                      messages
                    } = this.#assistant.conversation;
                    if (!messages.length) return this.#assistant.assignment.mission;
                    return messages[messages.length - 1].content;
                  })();
                  this.#transcriber.transcribe(audio, prompt).finally(() => this.trigger("change"));
                  this.trigger("change");
                });
              }).catch(error => {
                this.#error = error.message;
              }).finally(() => {
                this.#initialised = true;
                this.#promise.resolve();
              });
              await this.#promise;
            }
            record() {
              if (this.#recording || this.transcribing) {
                throw new Error("Wait for recorder to be stopped and transcription ready");
              }
              this.#recording = true;
              this.trigger("change");
              this.initialise().then(() => {
                this.#mediaRecorder?.start();
              }).catch(error => {
                console.error(error);
              });
            }
            stop() {
              if (!this.#recording) throw new Error("Recorder is not currently recording");
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                this.#mediaRecorder?.stop();
                this.trigger("change");
              };
              this.#initialised ? stop() : this.initialise().then(stop);
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /*****************************
      INTERNAL MODULE: ./Transcriber
      *****************************/

      ims.set('./Transcriber', {
        hash: 2348718329,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Transcriber = void 0;
          var _config = require("@ai-clase/demo/config");
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
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1347708476,
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
              this.#conversation = new _index.Conversation(this, assignment.mission);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtnQkFFaEI7Z0JBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQ3lDLFFBQVEsQ0FBQ3hELElBQUksQ0FBQ2UsSUFBSSxDQUFDO2VBQ3BDLENBQUMsT0FBT1QsS0FBSyxFQUFFO2dCQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHQSxLQUFLLENBQUNILE9BQU87ZUFDNUIsU0FBUztnQkFDUixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUs7O1lBRTlCOztVQUNEUTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREQ7VUFDQTtVQUNBO1VBR087VUFBVSxNQUNYK0UsU0FBVSxTQUFRN0UsWUFBTTtZQUNqQixhQUFhO1lBQ3RCLElBQUlrRSxZQUFZO2NBQ1osT0FBTyxJQUFJLENBQUMsYUFBYTtZQUM3QjtZQUVTLFNBQVM7WUFDbEIsSUFBSVksUUFBUTtjQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVM7WUFDekI7WUFFUyxXQUFXO1lBQ3BCLElBQUlYLFVBQVU7Y0FDVixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQzNCO1lBRUFuRyxZQUFZbUcsVUFBdUI7Y0FDL0IsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBR0EsVUFBVTtjQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUlsQixrQkFBUSxDQUFDLElBQUksQ0FBQztjQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUloQixtQkFBWSxDQUFDLElBQUksRUFBRWtDLFVBQVUsQ0FBQzFCLE9BQU8sQ0FBQztZQUNuRTtZQUVBLE1BQU1FLFFBQVEsQ0FBQ0EsUUFBZ0I7Y0FDM0IsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDQSxRQUFRLENBQUNBLFFBQVEsQ0FBQztZQUMvQzs7VUFDSDdDIiwibmFtZXMiOlsicHJvbXB0IiwiQ29tbWFuZHMiLCJjb25zdHJ1Y3RvciIsImFzc2lzdGFudCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25maWciLCJwYXJhbXMiLCJvcGVuaWEiLCJrZXkiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsImRhdGEiLCJqc29uIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJtYXgiLCJuaWNvbGFzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXhjIiwic3RhY2siLCJleHBvcnRzIiwiVm9pY2UiLCJFdmVudHMiLCJzcGVha2luZyIsInRleHQiLCJ2YWx1ZSIsImN1cnJlbnRXb3JkIiwicGF1c2VkIiwiZ2xvYmFsVGhpcyIsImNvcmRvdmEiLCJzcGVlY2hTeW50aGVzaXMiLCJpbnN0YW5jZSIsIl9tb2JpbGUiLCJUVFMiLCJzcGVhayIsImxvY2FsZSIsInJhdGUiLCJ0cmlnZ2VyIiwiZSIsIl93ZWIiLCJjYW5jZWwiLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJsYW5nIiwib25zdGFydCIsIm9ucGF1c2UiLCJvbnJlc3VtZSIsIm9uYm91bmRhcnkiLCJldmVudCIsImNoYXJJbmRleCIsIm9uZW5kIiwicGxheSIsInN0b3AiLCJwYXVzZSIsInJlc3VtZSIsIkNvbnZlcnNhdGlvbiIsInNsaWNlIiwidm9pY2UiLCJsYXN0TWVzc2FnZSIsImxlbmd0aCIsInVzZXIiLCJsYXN0IiwicG9wIiwibWlzc2lvbiIsInB1c2giLCJxdWVzdGlvbiIsIkVycm9yIiwicmVzcG9uc2VNZXNzYWdlIiwidXBkYXRlIiwiaW5kZXgiLCJjYXRjaCIsIlJlY29yZGVyIiwidHJhbnNjcmliaW5nIiwicmVjb3JkaW5nIiwiVHJhbnNjcmliZXIiLCJ2YWxpZCIsImluaXRpYWxpc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidGhlbiIsInN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiQmxvYiIsInR5cGUiLCJjb252ZXJzYXRpb24iLCJhc3NpZ25tZW50IiwidHJhbnNjcmliZSIsImZpbmFsbHkiLCJyZXNvbHZlIiwicmVjb3JkIiwic3RhcnQiLCJzaXplIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkFzc2lzdGFudCIsInJlY29yZGVyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJDb252ZXJzYXRpb24vQ29tbWFuZHMudHMiLCJDb252ZXJzYXRpb24vVm9pY2UudHMiLCJDb252ZXJzYXRpb24vaW5kZXgudHMiLCJSZWNvcmRlci50cyIsIlRyYW5zY3JpYmVyLnRzIiwiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19
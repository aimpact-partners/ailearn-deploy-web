System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Voice, Assistant, __beyond_pkg, hmr;
  _export({
    Voice: void 0,
    Assistant: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
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
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./Conversation/Commands
      ***************************************/
      ims.set('./Conversation/Commands', {
        hash: 3417487225,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Commands = void 0;
          const prompt = '[Eres un analizador de mensajes que convierte un {texto} en un código de programación json.\n' + 'El {texto} es un mensaje que está enviando un usuario a otro usuario llamado Max. El {texto} puede incluir también tareas que debe realizar Nicolás (su asistente virtual).\n' + 'Tu trabajo es identificar a quién va dirigido el mensaje (Max, Nicolás o a ambos), y crear un código de programación json que se utilizará para invocar una API. No debes preocuparte por la API, sólo por la generación del json.\n' + 'El json debe tener sólo tres propiedades, "max", "nicolas" y "error", todas las propiedades son de tipo string.\n' + '\n' + '. La propiedad "nicolas" puede ser nula, o contener sólo el detalle de la tarea que el usuario le ha solicitado a Nicolás.\n' + '. La propiedad "max" puede ser nula, o contener sólo el mensaje que el usuario le está enviando a Max.\n' + '\n' + 'En primera instancia, la conversación está dirigida a Max, pero el usuario podría solicitarle a Nicolás una tarea en la misma conversación. Por lo tanto, si Nicolás no es mencionado, el mensaje es completamente dirigido a Max.\n' + '\n' + 'Concéntrate en todo el texto, ya que el usuario puede solicitarle a Nicolás una tarea en cualquier momento de la conversación simplemente mencionando su nombre.\n' + 'Quiero sólo el json, ningún otro tipo de contenido incluyendo el pre-text y post-text, ya que tu respuesta debe poder ser parseada (JSON.parse(response)) de manera directa.]';
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
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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'
                  },
                  body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{
                      role: 'assistant',
                      content: prompt
                    }, {
                      role: 'user',
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
                    console.log('max', max);
                    console.log('nicolas', nicolas);
                    console.log('error', error);
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
        hash: 2582852807,
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
          }
          exports.Voice = Voice;
        }
      });

      /************************************
      INTERNAL MODULE: ./Conversation/index
      ************************************/

      ims.set('./Conversation/index', {
        hash: 2655729679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversation = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _Voice = require("./Voice");
          var _Commands = require("./Commands");
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
                user: '',
                assistant: 'Estamos listos Dan! Arrancamos?'
              };
              const last = messages.pop();
              if (last.role === 'user') return {
                user: last.content,
                assistant: 'Pensando ...'
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
                role: 'system',
                content: mission
              });
              this.#voice = new _Voice.Voice();
              this.#commands = new _Commands.Commands(assistant);
            }
            async question(content) {
              if (!content) throw new Error('The content of the question cannot be undefined');
              const messages = this.#messages;
              content = await this.#commands.request(content);
              // Set up the message array with the user input as the only message
              messages.push({
                role: 'user',
                content
              });
              this.trigger('change');
              try {
                // Make the API call to generate a response
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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'
                  },
                  body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: messages
                  })
                });
                // Extract the response message from the API response object
                const data = await response.json();
                const responseMessage = data.choices[0].message?.content;
                messages.push({
                  role: 'assistant',
                  content: responseMessage
                });
                this.#voice.text = responseMessage;
                this.#voice.speak();
                this.trigger('change');
              } catch (error) {
                console.log(error);
                this.trigger('change');
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
        hash: 1419523627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Transcriber = void 0;
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
              formData.append('file', audio, 'audio.mp3');
              formData.append('model', 'whisper-1');
              formData.append('language', 'es');
              formData.append('prompt', prompt);
              formData.append('response_format', 'json');
              try {
                const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
                  method: 'POST',
                  body: formData,
                  headers: {
                    'Authorization': 'Bearer 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'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUdPO1VBQVUsTUFDWDZFLFNBQVUsU0FBUTNFLFlBQU07WUFDakIsYUFBYTtZQUN0QixJQUFJZ0UsWUFBWTtjQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWE7WUFDN0I7WUFFUyxTQUFTO1lBQ2xCLElBQUlZLFFBQVE7Y0FDUixPQUFPLElBQUksQ0FBQyxTQUFTO1lBQ3pCO1lBRVMsV0FBVztZQUNwQixJQUFJWCxVQUFVO2NBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVztZQUMzQjtZQUVBNUYsWUFBWTRGLFVBQXVCO2NBQy9CLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxXQUFXLEdBQUdBLFVBQVU7Y0FDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJbEIsa0JBQVEsQ0FBQyxJQUFJLENBQUM7Y0FDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJaEIsbUJBQVksQ0FBQyxJQUFJLEVBQUVrQyxVQUFVLENBQUMxQixPQUFPLENBQUM7WUFDbkU7WUFFQSxNQUFNRSxRQUFRLENBQUNBLFFBQWdCO2NBQzNCLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQ0EsUUFBUSxDQUFDQSxRQUFRLENBQUM7WUFDL0M7O1VBQ0gzQyIsIm5hbWVzIjpbInByb21wdCIsIkNvbW1hbmRzIiwiY29uc3RydWN0b3IiLCJhc3Npc3RhbnQiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsImRhdGEiLCJqc29uIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJtYXgiLCJuaWNvbGFzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZXhjIiwic3RhY2siLCJleHBvcnRzIiwiVm9pY2UiLCJFdmVudHMiLCJzcGVha2luZyIsInRleHQiLCJ2YWx1ZSIsImN1cnJlbnRXb3JkIiwicGF1c2VkIiwiZ2xvYmFsVGhpcyIsImNvcmRvdmEiLCJzcGVlY2hTeW50aGVzaXMiLCJpbnN0YW5jZSIsIl9tb2JpbGUiLCJUVFMiLCJzcGVhayIsImxvY2FsZSIsInJhdGUiLCJ0cmlnZ2VyIiwiZSIsIl93ZWIiLCJjYW5jZWwiLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJsYW5nIiwib25zdGFydCIsIm9ucGF1c2UiLCJvbnJlc3VtZSIsIm9uYm91bmRhcnkiLCJldmVudCIsImNoYXJJbmRleCIsIm9uZW5kIiwicGxheSIsInN0b3AiLCJDb252ZXJzYXRpb24iLCJzbGljZSIsInZvaWNlIiwibGFzdE1lc3NhZ2UiLCJsZW5ndGgiLCJ1c2VyIiwibGFzdCIsInBvcCIsIm1pc3Npb24iLCJwdXNoIiwicXVlc3Rpb24iLCJFcnJvciIsInJlc3BvbnNlTWVzc2FnZSIsInVwZGF0ZSIsImluZGV4IiwiY2F0Y2giLCJSZWNvcmRlciIsInRyYW5zY3JpYmluZyIsInJlY29yZGluZyIsIlRyYW5zY3JpYmVyIiwidmFsaWQiLCJpbml0aWFsaXNlIiwiUGVuZGluZ1Byb21pc2UiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJNZWRpYVJlY29yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkJsb2IiLCJ0eXBlIiwiY29udmVyc2F0aW9uIiwiYXNzaWdubWVudCIsInRyYW5zY3JpYmUiLCJmaW5hbGx5IiwicmVzb2x2ZSIsInJlY29yZCIsInN0YXJ0Iiwic2l6ZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJBc3Npc3RhbnQiLCJyZWNvcmRlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiQ29udmVyc2F0aW9uL0NvbW1hbmRzLnRzIiwiQ29udmVyc2F0aW9uL1ZvaWNlLnRzIiwiQ29udmVyc2F0aW9uL2luZGV4LnRzIiwiUmVjb3JkZXIudHMiLCJUcmFuc2NyaWJlci50cyIsImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==
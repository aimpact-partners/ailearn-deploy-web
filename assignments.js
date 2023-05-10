System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, IAssignment, assignments, __beyond_pkg, hmr;
  _export({
    IAssignment: void 0,
    assignments: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
          "vspecifier": "@ai-clase/demo@0.0.1/assignments"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3529371195,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.assignments = void 0;
          /*bundle*/
          const assignments = new class extends Map {
            constructor() {
              super();
              const ecuaciones = (() => {
                const goals = 'Objetivos que un alumno debe tener cuando se inicia en el conocimiento de ecuaciones:\n' + '1. Comprender el concepto de una ecuación como una igualdad matemática que tiene una o más incógnitas.\n' + '2. Identificar los términos de una ecuación, incluyendo los coeficientes y constantes.\n' + '3. Aprender a resolver ecuaciones de primer grado con una variable.\n' + '4. Aprender a resolver ecuaciones de segundo grado con una variable utilizando diferentes técnicas.\n' + '5. Resolver problemas aplicando ecuaciones, utilizando la habilidad para traducir el lenguaje natural a lenguaje matemático.\n' + '6. Representar ecuaciones mediante gráficos y analizar su comportamiento.\n' + '7. Reconocer la importancia de las ecuaciones en la resolución de problemas prácticos y su aplicación en situaciones cotidianas.';
                return {
                  id: 'ecuaciones',
                  kind: 'learning',
                  subject: 'Aprendiendo sobre ecuaciones',
                  goals,
                  mission: 'Eres un asistente (Max) de un estudiante de 10 años de edad que necesita ayuda para ' + 'aprender matemáticas. ' + 'Su nombre es Dan. ' + 'Tienes que ayudar a Dan en el aprendizaje de las ecuaciones. ' + 'Le darás retroalimentación y seguirás hablando tratando de ayudarlo a mejorar. ' + 'En la medida de lo posible, trata de dar respuestas cortas para que la conversación fluya ' + 'sin problemas. Dan espera respuestas cortas para que la conversación sea interactiva. Los objetivos en' + 'este caso serán: ' + goals
                };
              })();
              const historia = (() => {
                const goals = 'Objetivos que un alumno debe tener cuando se inicia en el conocimiento de la historia argentina:\n' + '1. Comprender el proceso de la independencia argentina y sus principales líderes.\n' + '2. Identificar los eventos y personajes más destacados de la historia argentina, desde la colonización hasta la actualidad.\n' + '3. Aprender sobre la organización política, social y económica de Argentina a lo largo del tiempo.\n' + '4. Analizar las causas y consecuencias de eventos históricos relevantes, como las guerras civiles y las dictaduras militares.\n' + '5. Comprender la influencia de la cultura y las artes en la identidad nacional argentina.\n' + '6. Investigar sobre la diversidad cultural de Argentina y su impacto en la historia del país.\n' + '7. Reconocer la importancia de la historia argentina en la comprensión del presente y en la construcción del futuro del país.';
                return {
                  id: 'historia-argentina',
                  kind: 'learning',
                  subject: 'Aprendiendo sobre historia argentina',
                  goals,
                  mission: 'Eres un asistente (Max) de un estudiante de 12 años de edad que necesita ayuda para aprender sobre la historia argentina. ' + 'Su nombre es Dan. ' + 'Tienes que ayudar a Dan en el aprendizaje de la historia argentina. ' + 'Le darás retroalimentación y seguirás hablando tratando de ayudarlo a mejorar. ' + 'En la medida de lo posible, trata de dar respuestas cortas para que la conversación fluya ' + 'sin problemas. Dan espera respuestas cortas para que la conversación sea interactiva. Los objetivos en este caso serán: ' + goals
                };
              })();
              const evaluacion = (() => {
                const goals = 'Práctica de evaluación sobre tu conocimiento de la historia argentina:\n' + '1. Comprender el proceso de la independencia argentina y sus principales líderes.\n' + '2. Identificar los eventos y personajes más destacados de la historia argentina, desde la colonización hasta la actualidad.\n' + '3. Aprender sobre la organización política, social y económica de Argentina a lo largo del tiempo.\n' + '4. Analizar las causas y consecuencias de eventos históricos relevantes, como las guerras civiles y las dictaduras militares.\n' + '5. Comprender la influencia de la cultura y las artes en la identidad nacional argentina.\n' + '6. Investigar sobre la diversidad cultural de Argentina y su impacto en la historia del país.\n' + '7. Reconocer la importancia de la historia argentina en la comprensión del presente y en la construcción del futuro del país.';
                return {
                  id: 'evaluacion-historia-argentina',
                  kind: 'assessment',
                  subject: 'Evaluación sobre historia argentina',
                  goals,
                  mission: 'Eres un docente (Max) de un estudiante de 12 años de edad y tu deber es evaluarlo sobre la historia argentina. ' + 'Su nombre es Dan. ' + 'No le darás retroalimentación, ni respondas a sus preguntas ya que te enfocarás en identificar sus conocimientos. ' + 'En la medida de lo posible, trata de dar preguntar cortas que él daba ir respondiendo ' + 'Los temas que Dan debe conocer en este caso son: ' + goals
                };
              })();
              const aventuras = (() => {
                const goals = 'Participar de una experiencia de aventuras y ciencia ficción en la que pueda dejar volar su imaginación y explorar mundos y situaciones fantásticas.';
                return {
                  id: 'aventura-ciencia-ficcion',
                  kind: 'learning',
                  subject: 'Explorando mundos de ciencia ficción',
                  goals,
                  mission: 'Jugar con una ficción. Nada de lo que se converse es real, ya que es un juego.'
                };
              })();
              const catamaran = (() => {
                const goals = 'Objetivos que un alumno debe tener cuando aprende a navegar un catamarán en la Riviera francesa:\n' + '1. Comprender los conceptos básicos de navegación, como la dirección del viento, el trimado de las velas y la navegación en aguas abiertas.\n' + '2. Aprender a maniobrar un catamarán en diferentes condiciones de viento y mareas.\n' + '3. Conocer las reglas de navegación y seguridad en el agua.\n' + '4. Aprender a trabajar en equipo y comunicarse eficazmente con su compañero de navegación.\n' + '5. Desarrollar la confianza en sí mismo y la capacidad de tomar decisiones rápidas y seguras mientras se navega.\n' + '6. Aprender a apreciar la belleza y la emoción de la navegación en la Riviera francesa.\n' + '7. Reconocer la importancia del cuidado del medio ambiente y la responsabilidad social al navegar en el mar.';
                return {
                  id: 'catamaran',
                  kind: 'learning',
                  subject: 'Aprendiendo a navegar un catamarán en la Riviera francesa',
                  goals,
                  mission: 'Eres un instructor de navegación en la Riviera francesa y tienes un alumno llamado Dan que quiere aprender a navegar un catamarán. Tu misión es guiar a Dan en su aprendizaje y asegurarte de que adquiera las habilidades necesarias para navegar de manera segura y efectiva en el mar. ' + 'Debes ser claro en tus instrucciones y explicaciones, y siempre asegurarte de que Dan entienda todo lo que está sucediendo. Los objetivos de esta actividad son: ' + goals
                };
              })();
              const cuantica = (() => {
                const goals = 'Objetivos que un alumno debe tener cuando se inicia en el conocimiento de física cuántica:\n' + '1. Comprender los conceptos básicos de la física cuántica, incluyendo partículas subatómicas, ondas de probabilidad y superposición.\n' + '2. Conocer los principios de la mecánica cuántica, como el principio de incertidumbre de Heisenberg y el entrelazamiento cuántico.\n' + '3. Aprender sobre los diferentes experimentos que se utilizan para estudiar la física cuántica, como el experimento de la doble rendija y el experimento de la gato de Schrödinger.\n' + '4. Entender la importancia de la física cuántica en la tecnología moderna, como los dispositivos electrónicos y la criptografía cuántica.\n' + '5. Aplicar los conceptos de la física cuántica para resolver problemas prácticos.\n' + '6. Desarrollar habilidades de pensamiento crítico y creatividad al analizar y entender los fenómenos cuánticos.\n' + '7. Reconocer la importancia de la física cuántica en la comprensión del universo y la naturaleza de la realidad.';
                return {
                  id: 'fisica-cuantica',
                  kind: 'learning',
                  subject: 'Aprendiendo sobre física cuántica',
                  goals,
                  mission: 'Eres un tutor de física cuántica y tu alumno, Dan, quiere aprender sobre este tema fascinante. Dan tiene 10 años y está interesado en entender cómo funciona el mundo a nivel subatómico. ' + 'Tu misión es ayudar a Dan a comprender los conceptos básicos de la física cuántica y guiarlo a través de los experimentos y teorías más importantes. ' + 'Deberás hacer preguntas y explicaciones claras para que Dan pueda entender bien los temas complejos de la física cuántica. Los objetivos de esta actividad son: ' + goals
                };
              })();
              this.set(ecuaciones.id, ecuaciones);
              this.set(cuantica.id, cuantica);
              this.set(historia.id, historia);
              this.set(evaluacion.id, evaluacion);
              this.set(aventuras.id, aventuras);
              this.set(catamaran.id, catamaran);
            }
          }();
          exports.assignments = assignments;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "IAssignment",
        "name": "IAssignment"
      }, {
        "im": "./index",
        "from": "assignments",
        "name": "assignments"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IAssignment') && _export("IAssignment", IAssignment = require ? require('./index').IAssignment : value);
        (require || prop === 'assignments') && _export("assignments", assignments = require ? require('./index').assignments : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TVQsS0FBSyxHQUFHLDhGQUE4RixHQUN4Ryx3SUFBd0ksR0FDeEksc0lBQXNJLEdBQ3RJLHVMQUF1TCxHQUN2TCw2SUFBNkksR0FDN0kscUZBQXFGLEdBQ3JGLG1IQUFtSCxHQUNuSCxrSEFBa0g7Z0JBRXRILE9BQU87a0JBQ0hDLEVBQUUsRUFBRSxpQkFBaUI7a0JBQ3JCQyxJQUFJLEVBQUUsVUFBVTtrQkFDaEJDLE9BQU8sRUFBRSxtQ0FBbUM7a0JBQzVDSCxLQUFLO2tCQUNMSSxPQUFPLEVBQUUsNExBQTRMLEdBQ2pNLHVKQUF1SixHQUN2SixrS0FBa0ssR0FBR0o7aUJBQzVLO2NBQ0wsQ0FBQyxHQUFHO2NBRUosSUFBSSxDQUFDVSxHQUFHLENBQUNYLFVBQVUsQ0FBQ0UsRUFBRSxFQUFFRixVQUFVLENBQUM7Y0FDbkMsSUFBSSxDQUFDVyxHQUFHLENBQUNELFFBQVEsQ0FBQ1IsRUFBRSxFQUFFUSxRQUFRLENBQUM7Y0FDL0IsSUFBSSxDQUFDQyxHQUFHLENBQUNMLFFBQVEsQ0FBQ0osRUFBRSxFQUFFSSxRQUFRLENBQUM7Y0FDL0IsSUFBSSxDQUFDSyxHQUFHLENBQUNKLFVBQVUsQ0FBQ0wsRUFBRSxFQUFFSyxVQUFVLENBQUM7Y0FDbkMsSUFBSSxDQUFDSSxHQUFHLENBQUNILFNBQVMsQ0FBQ04sRUFBRSxFQUFFTSxTQUFTLENBQUM7Y0FDakMsSUFBSSxDQUFDRyxHQUFHLENBQUNGLFNBQVMsQ0FBQ1AsRUFBRSxFQUFFTyxTQUFTLENBQUM7WUFDckM7V0FDSDtVQUFBRyIsIm5hbWVzIjpbImFzc2lnbm1lbnRzIiwiTWFwIiwiY29uc3RydWN0b3IiLCJlY3VhY2lvbmVzIiwiZ29hbHMiLCJpZCIsImtpbmQiLCJzdWJqZWN0IiwibWlzc2lvbiIsImhpc3RvcmlhIiwiZXZhbHVhY2lvbiIsImF2ZW50dXJhcyIsImNhdGFtYXJhbiIsImN1YW50aWNhIiwic2V0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
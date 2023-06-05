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
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/backend", "1.0.0"], ["@aimpact/http-server", "0.0.1"], ["@aimpact/langchain", "1.0.0"], ["@beyond-js/backend", "0.1.6"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/widgets", "0.1.4"], ["@bgroup/ui", "0.0.34"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.4.0"], ["@types/dom-mediacapture-record", "1.0.14"], ["dayjs", "1.11.7"], ["firebase", "9.17.2"], ["firebase-admin", "11.5.0"], ["openai", "3.2.1"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["dexie", "3.2.3"], ["@aimpact/ailearn", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn@1.0.0/assignments"
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
        hash: 2777968207,
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
                const goals = "Objetivos que un alumno debe tener cuando se inicia en el conocimiento de ecuaciones:\n" + "1. Comprender el concepto de una ecuación como una igualdad matemática que tiene una o más incógnitas.\n" + "2. Identificar los términos de una ecuación, incluyendo los coeficientes y constantes.\n" + "3. Aprender a resolver ecuaciones de primer grado con una variable.\n" + "4. Aprender a resolver ecuaciones de segundo grado con una variable utilizando diferentes técnicas.\n" + "5. Resolver problemas aplicando ecuaciones, utilizando la habilidad para traducir el lenguaje natural a lenguaje matemático.\n" + "6. Representar ecuaciones mediante gráficos y analizar su comportamiento.\n" + "7. Reconocer la importancia de las ecuaciones en la resolución de problemas prácticos y su aplicación en situaciones cotidianas.";
                return {
                  name: "ecuaciones",
                  kind: "learning",
                  subject: "Aprendiendo sobre ecuaciones",
                  goals,
                  mission: "Eres un asistente (Max) de un estudiante de 10 años de edad que necesita ayuda para " + "aprender matemáticas. " + "Su nombre es Dan. " + "Tienes que ayudar a Dan en el aprendizaje de las ecuaciones. " + "Le darás retroalimentación y seguirás hablando tratando de ayudarlo a mejorar. " + "En la medida de lo posible, trata de dar respuestas cortas para que la conversación fluya " + "sin problemas. Dan espera respuestas cortas para que la conversación sea interactiva. Los objetivos en" + "este caso serán: " + goals
                };
              })();
              const historia = (() => {
                const goals = "Objetivos que un alumno debe tener cuando se inicia en el conocimiento de la historia argentina:\n" + "1. Comprender el proceso de la independencia argentina y sus principales líderes.\n" + "2. Identificar los eventos y personajes más destacados de la historia argentina, desde la colonización hasta la actualidad.\n" + "3. Aprender sobre la organización política, social y económica de Argentina a lo largo del tiempo.\n" + "4. Analizar las causas y consecuencias de eventos históricos relevantes, como las guerras civiles y las dictaduras militares.\n" + "5. Comprender la influencia de la cultura y las artes en la identidad nacional argentina.\n" + "6. Investigar sobre la diversidad cultural de Argentina y su impacto en la historia del país.\n" + "7. Reconocer la importancia de la historia argentina en la comprensión del presente y en la construcción del futuro del país.";
                return {
                  name: "historia-argentina",
                  kind: "learning",
                  subject: "Aprendiendo sobre historia argentina",
                  goals,
                  mission: "Eres un asistente (Max) de un estudiante de 12 años de edad que necesita ayuda para aprender sobre la historia argentina. " + "Su nombre es Dan. " + "Tienes que ayudar a Dan en el aprendizaje de la historia argentina. " + "Le darás retroalimentación y seguirás hablando tratando de ayudarlo a mejorar. " + "En la medida de lo posible, trata de dar respuestas cortas para que la conversación fluya " + "sin problemas. Dan espera respuestas cortas para que la conversación sea interactiva. Los objetivos en este caso serán: " + goals
                };
              })();
              const evaluacion = (() => {
                const goals = "Práctica de evaluación sobre tu conocimiento de la historia argentina:\n" + "1. Comprender el proceso de la independencia argentina y sus principales líderes.\n" + "2. Identificar los eventos y personajes más destacados de la historia argentina, desde la colonización hasta la actualidad.\n" + "3. Aprender sobre la organización política, social y económica de Argentina a lo largo del tiempo.\n" + "4. Analizar las causas y consecuencias de eventos históricos relevantes, como las guerras civiles y las dictaduras militares.\n" + "5. Comprender la influencia de la cultura y las artes en la identidad nacional argentina.\n" + "6. Investigar sobre la diversidad cultural de Argentina y su impacto en la historia del país.\n" + "7. Reconocer la importancia de la historia argentina en la comprensión del presente y en la construcción del futuro del país.";
                return {
                  name: "evaluacion-historia-argentina",
                  kind: "assessment",
                  subject: "Evaluación sobre historia argentina",
                  goals,
                  mission: "Eres un docente (Max) de un estudiante de 12 años de edad y tu deber es evaluarlo sobre la historia argentina. " + "Su nombre es Dan. " + "No le darás retroalimentación, ni respondas a sus preguntas ya que te enfocarás en identificar sus conocimientos. " + "En la medida de lo posible, trata de dar preguntar cortas que él daba ir respondiendo " + "Los temas que Dan debe conocer en este caso son: " + goals
                };
              })();
              const aventuras = (() => {
                const goals = "Participar de una experiencia de aventuras y ciencia ficción en la que pueda dejar volar su imaginación y explorar mundos y situaciones fantásticas.";
                return {
                  name: "aventura-ciencia-ficcion",
                  kind: "learning",
                  subject: "Explorando mundos de ciencia ficción",
                  goals,
                  mission: "Jugar con una ficción. Nada de lo que se converse es real, ya que es un juego."
                };
              })();
              const catamaran = (() => {
                const goals = "Objetivos que un alumno debe tener cuando aprende a navegar un catamarán en la Riviera francesa:\n" + "1. Comprender los conceptos básicos de navegación, como la dirección del viento, el trimado de las velas y la navegación en aguas abiertas.\n" + "2. Aprender a maniobrar un catamarán en diferentes condiciones de viento y mareas.\n" + "3. Conocer las reglas de navegación y seguridad en el agua.\n" + "4. Aprender a trabajar en equipo y comunicarse eficazmente con su compañero de navegación.\n" + "5. Desarrollar la confianza en sí mismo y la capacidad de tomar decisiones rápidas y seguras mientras se navega.\n" + "6. Aprender a apreciar la belleza y la emoción de la navegación en la Riviera francesa.\n" + "7. Reconocer la importancia del cuidado del medio ambiente y la responsabilidad social al navegar en el mar.";
                return {
                  name: "catamaran",
                  kind: "learning",
                  subject: "Aprendiendo a navegar un catamarán en la Riviera francesa",
                  goals,
                  mission: "Eres un instructor de navegación en la Riviera francesa y tienes un alumno llamado Dan que quiere aprender a navegar un catamarán. Tu misión es guiar a Dan en su aprendizaje y asegurarte de que adquiera las habilidades necesarias para navegar de manera segura y efectiva en el mar. " + "Debes ser claro en tus instrucciones y explicaciones, y siempre asegurarte de que Dan entienda todo lo que está sucediendo. Los objetivos de esta actividad son: " + goals
                };
              })();
              const cuantica = (() => {
                const goals = "Objetivos que un alumno debe tener cuando se inicia en el conocimiento de física cuántica:\n" + "1. Comprender los conceptos básicos de la física cuántica, incluyendo partículas subatómicas, ondas de probabilidad y superposición.\n" + "2. Conocer los principios de la mecánica cuántica, como el principio de incertidumbre de Heisenberg y el entrelazamiento cuántico.\n" + "3. Aprender sobre los diferentes experimentos que se utilizan para estudiar la física cuántica, como el experimento de la doble rendija y el experimento de la gato de Schrödinger.\n" + "4. Entender la importancia de la física cuántica en la tecnología moderna, como los dispositivos electrónicos y la criptografía cuántica.\n" + "5. Aplicar los conceptos de la física cuántica para resolver problemas prácticos.\n" + "6. Desarrollar habilidades de pensamiento crítico y creatividad al analizar y entender los fenómenos cuánticos.\n" + "7. Reconocer la importancia de la física cuántica en la comprensión del universo y la naturaleza de la realidad.";
                return {
                  name: "fisica-cuantica",
                  kind: "learning",
                  subject: "Aprendiendo sobre física cuántica",
                  goals,
                  mission: "Eres un tutor de física cuántica y tu alumno, Dan, quiere aprender sobre este tema fascinante. Dan tiene 10 años y está interesado en entender cómo funciona el mundo a nivel subatómico. " + "Tu misión es ayudar a Dan a comprender los conceptos básicos de la física cuántica y guiarlo a través de los experimentos y teorías más importantes. " + "Deberás hacer preguntas y explicaciones claras para que Dan pueda entender bien los temas complejos de la física cuántica. Los objetivos de esta actividad son: " + goals
                };
              })();
              // const prueba: IAssignment = ((): IAssignment => {
              //   const goals =
              //     "Mis objetivos:\n" +
              //     "1. Muestrame un saludo amigable.\n" +
              //     "2. Dame pensamientos positivos.\n" +
              //     "3. Frases de motivacion.\n" +
              //     "4. Consejos para mejorar .\n";
              //   return {
              //     name: "prueba",
              //     kind: "general",
              //     subject: "Item de prueba",
              //     goals,
              //     mission:
              //       "Eres un psicologo. " +
              //       "Tu misión es ayudar a Dan a comprender los conceptos básicos como evitar la procastinacion. " +
              //       "Deberás hacer preguntas y explicaciones claras para que Dan pueda entender bien los temas complejos de la procastinacion. Los objetivos de esta actividad son: " +
              //       goals,
              //   };
              // })();
              this.set(ecuaciones.name, ecuaciones);
              this.set(cuantica.name, cuantica);
              this.set(historia.name, historia);
              this.set(evaluacion.name, evaluacion);
              this.set(aventuras.name, aventuras);
              this.set(catamaran.name, catamaran);
              // this.set(prueba.name, prueba);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhc3NpZ25tZW50cyIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZWN1YWNpb25lcyIsImdvYWxzIiwibmFtZSIsImtpbmQiLCJzdWJqZWN0IiwibWlzc2lvbiIsImhpc3RvcmlhIiwiZXZhbHVhY2lvbiIsImF2ZW50dXJhcyIsImNhdGFtYXJhbiIsImN1YW50aWNhIiwic2V0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFTTztVQUFXLE1BQU1BLFdBQVcsR0FBRyxJQUFLLGNBQWNDLEdBQXdCO1lBQy9FQyxZQUFBO2NBQ0UsS0FBSyxFQUFFO2NBRVAsTUFBTUMsVUFBVSxHQUFnQixDQUFDLE1BQWtCO2dCQUNqRCxNQUFNQyxLQUFLLEdBQ1QseUZBQXlGLEdBQ3pGLDBHQUEwRyxHQUMxRywwRkFBMEYsR0FDMUYsdUVBQXVFLEdBQ3ZFLHVHQUF1RyxHQUN2RyxnSUFBZ0ksR0FDaEksNkVBQTZFLEdBQzdFLGtJQUFrSTtnQkFFcEksT0FBTztrQkFDTEMsSUFBSSxFQUFFLFlBQVk7a0JBQ2xCQyxJQUFJLEVBQUUsVUFBVTtrQkFDaEJDLE9BQU8sRUFBRSw4QkFBOEI7a0JBQ3ZDSCxLQUFLO2tCQUNMSSxPQUFPLEVBQ0wsc0ZBQXNGLEdBQ3RGLHdCQUF3QixHQUN4QixvQkFBb0IsR0FDcEIsK0RBQStELEdBQy9ELGlGQUFpRixHQUNqRiw0RkFBNEYsR0FDNUYsd0dBQXdHLEdBQ3hHLG1CQUFtQixHQUNuQko7aUJBQ0g7Y0FDSCxDQUFDLEVBQUMsQ0FBRTtjQUVKLE1BQU1LLFFBQVEsR0FBZ0IsQ0FBQyxNQUFrQjtnQkFDL0MsTUFBTUwsS0FBSyxHQUNULG9HQUFvRyxHQUNwRyxxRkFBcUYsR0FDckYsK0hBQStILEdBQy9ILHNHQUFzRyxHQUN0RyxpSUFBaUksR0FDakksNkZBQTZGLEdBQzdGLGlHQUFpRyxHQUNq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
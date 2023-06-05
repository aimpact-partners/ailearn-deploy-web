System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive-2", "1.0.0"], ["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["socket.io-client", "4.6.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/player"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/media-manager@1.0.0/player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 3080543951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          /*bundle*/
          function AudioPlayer({
            src
          }) {
            const canPlayType = new Audio().canPlayType(src.type);
            const [data, setData] = React.useState({
              uri: undefined,
              type: undefined
            });
            const ref = React.useRef(null);
            const updateState = async () => {
              const audioElement = ref.current;
              try {
                console.log(44, audioElement);
                audioElement.load(); // Load the audio file
                audioElement.play(); // Play the audio
                console.log(1111);
              } catch (e) {
                console.log(222, e);
              }
            };
            React.useEffect(() => {
              let reader = new FileReader();
              reader.onload = e => {
                let base64URL = e.target.result;
                let BlobType = src.type.includes(";") ? src.type.substr(0, src.type.indexOf(";")) : src.type;
                setData({
                  uri: base64URL,
                  type: BlobType
                });
                setTimeout(() => {
                  updateState();
                }, 1000);
              };
              reader.readAsDataURL(src);
            }, []);
            const {
              uri,
              type
            } = data;
            return React.createElement("div", {
              className: "audio-player"
            }, React.createElement("audio", {
              controls: true,
              preload: "metadata",
              ref: ref
            }, React.createElement("source", {
              src: uri,
              type: type
            }), "Your browser does not support the audio element."));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./control').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBdWRpb1BsYXllciIsInNyYyIsImNhblBsYXlUeXBlIiwiQXVkaW8iLCJ0eXBlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVyaSIsInVuZGVmaW5lZCIsInJlZiIsInVzZVJlZiIsInVwZGF0ZVN0YXRlIiwiYXVkaW9FbGVtZW50IiwiY3VycmVudCIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwicGxheSIsImUiLCJ1c2VFZmZlY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiYmFzZTY0VVJMIiwidGFyZ2V0IiwicmVzdWx0IiwiQmxvYlR5cGUiLCJpbmNsdWRlcyIsInN1YnN0ciIsImluZGV4T2YiLCJzZXRUaW1lb3V0IiwicmVhZEFzRGF0YVVSTCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiXSwic291cmNlcyI6WyIvY29kZS90cy9jb250cm9sLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVUMsV0FBV0EsQ0FBQztZQUFFQztVQUFHLENBQUU7WUFDNUMsTUFBTUMsV0FBVyxHQUFHLElBQUlDLEtBQUssRUFBRSxDQUFDRCxXQUFXLENBQUNELEdBQUcsQ0FBQ0csSUFBSSxDQUFDO1lBRXJELE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1IsS0FBSyxDQUFDUyxRQUFRLENBQUM7Y0FBRUMsR0FBRyxFQUFFQyxTQUFTO2NBQUVMLElBQUksRUFBRUs7WUFBUyxDQUFFLENBQUM7WUFFM0UsTUFBTUMsR0FBRyxHQUFHWixLQUFLLENBQUNhLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUIsTUFBTUMsV0FBVyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QixNQUFNQyxZQUFZLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztjQUNoQyxJQUFJO2dCQUNGQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFFLEVBQUVILFlBQVksQ0FBQztnQkFDN0JBLFlBQVksQ0FBQ0ksSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckJKLFlBQVksQ0FBQ0ssSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDckJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztlQUNsQixDQUFDLE9BQU9HLENBQUMsRUFBRTtnQkFDVkosT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxFQUFFRyxDQUFDLENBQUM7O1lBRXZCLENBQUM7WUFFRHJCLEtBQUssQ0FBQ3NCLFNBQVMsQ0FBQyxNQUFLO2NBQ25CLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFVLEVBQUU7Y0FDN0JELE1BQU0sQ0FBQ0UsTUFBTSxHQUFJSixDQUFDLElBQUk7Z0JBQ3BCLElBQUlLLFNBQVMsR0FBR0wsQ0FBQyxDQUFDTSxNQUFNLENBQUNDLE1BQU07Z0JBQy9CLElBQUlDLFFBQVEsR0FBRzFCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDd0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHM0IsR0FBRyxDQUFDRyxJQUFJLENBQUN5QixNQUFNLENBQUMsQ0FBQyxFQUFFNUIsR0FBRyxDQUFDRyxJQUFJLENBQUMwQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzdCLEdBQUcsQ0FBQ0csSUFBSTtnQkFDNUZFLE9BQU8sQ0FBQztrQkFBRUUsR0FBRyxFQUFFZ0IsU0FBUztrQkFBRXBCLElBQUksRUFBRXVCO2dCQUFRLENBQUUsQ0FBQztnQkFDM0NJLFVBQVUsQ0FBQyxNQUFLO2tCQUNkbkIsV0FBVyxFQUFFO2dCQUNmLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVixDQUFDO2NBRURTLE1BQU0sQ0FBQ1csYUFBYSxDQUFDL0IsR0FBRyxDQUFDO1lBQzNCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNO2NBQUVPLEdBQUc7Y0FBRUo7WUFBSSxDQUFFLEdBQUdDLElBQUk7WUFFMUIsT0FDRVAsS0FBQSxDQUFBbUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUMzQnBDLEtBQUEsQ0FBQW1DLGFBQUE7Y0FBT0UsUUFBUTtjQUFDQyxPQUFPLEVBQUMsVUFBVTtjQUFDMUIsR0FBRyxFQUFFQTtZQUFHLEdBQ3pDWixLQUFBLENBQUFtQyxhQUFBO2NBQVFoQyxHQUFHLEVBQUVPLEdBQUc7Y0FBRUosSUFBSSxFQUFFQTtZQUFJLEVBQUksRSxtREFFMUIsQ0FDSjtVQUVWIn0=
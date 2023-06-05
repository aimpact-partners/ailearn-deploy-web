System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/media-manager@1.0.0/uploader"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, useUploader, __beyond_pkg, hmr;
  _export("useUploader", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_3 = _aimpactMediaManager100Uploader;
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
          "vspecifier": "@aimpact/media-manager@1.0.0/uploader-code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/media-manager/uploader', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/media-manager@1.0.0/uploader-code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 948733842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var React = require("react");
          var _uploader = require("@aimpact/media-manager/uploader");
          /*bundle*/
          function useUploader({
            url,
            project,
            container,
            name = "file"
          }) {
            const [uploader, setUploader] = React.useState();
            const [fetching, setFetching] = React.useState();
            const [files, setFiles] = React.useState(new Map());
            const drag = React.useRef(null);
            const button = React.useRef(null);
            const clearFiles = () => {
              uploader?.clean();
              setFiles(new Map());
            };
            React.useEffect(() => {
              const uploader = new _uploader.Uploader({
                url,
                params: {
                  project,
                  container
                },
                name
              });
              uploader.create(button.current, drag.current);
              const onChange = () => {
                if (uploader.files.items.size !== files.size) setFiles(uploader.files.items);
                if (uploader.fetching !== fetching) setFetching(uploader.fetching);
              };
              uploader.on("change", onChange);
              setUploader(uploader);
              return () => uploader.off("change", onChange);
            }, [url]);
            const uploadFiles = uploader?.publish;
            return {
              uploadFiles,
              clearFiles,
              files,
              fetching,
              button,
              drag
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "useUploader",
        "name": "useUploader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useUploader') && _export("useUploader", useUploader = require ? require('./control').useUploader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfdXBsb2FkZXIiLCJ1c2VVcGxvYWRlciIsInVybCIsInByb2plY3QiLCJjb250YWluZXIiLCJuYW1lIiwidXBsb2FkZXIiLCJzZXRVcGxvYWRlciIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImZpbGVzIiwic2V0RmlsZXMiLCJNYXAiLCJkcmFnIiwidXNlUmVmIiwiYnV0dG9uIiwiY2xlYXJGaWxlcyIsImNsZWFuIiwidXNlRWZmZWN0IiwiVXBsb2FkZXIiLCJwYXJhbXMiLCJjcmVhdGUiLCJjdXJyZW50Iiwib25DaGFuZ2UiLCJpdGVtcyIsInNpemUiLCJvbiIsIm9mZiIsInVwbG9hZEZpbGVzIiwicHVibGlzaCJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbnRyb2wudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsV0FBV0EsQ0FBQztZQUFFQyxHQUFHO1lBQUVDLE9BQU87WUFBRUMsU0FBUztZQUFFQyxJQUFJLEdBQUc7VUFBTSxDQUFFO1lBQy9FLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1QsS0FBSyxDQUFDVSxRQUFRLEVBQUU7WUFDaEQsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHWixLQUFLLENBQUNVLFFBQVEsRUFBRTtZQUNoRCxNQUFNLENBQUNHLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdkLEtBQUssQ0FBQ1UsUUFBUSxDQUFDLElBQUlLLEdBQUcsRUFBRSxDQUFDO1lBQ25ELE1BQU1DLElBQUksR0FBR2hCLEtBQUssQ0FBQ2lCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDL0IsTUFBTUMsTUFBTSxHQUFHbEIsS0FBSyxDQUFDaUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUVqQyxNQUFNRSxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN0QlgsUUFBUSxFQUFFWSxLQUFLLEVBQUU7Y0FDakJOLFFBQVEsQ0FBQyxJQUFJQyxHQUFHLEVBQUUsQ0FBQztZQUNyQixDQUFDO1lBRURmLEtBQUssQ0FBQ3FCLFNBQVMsQ0FBQyxNQUFLO2NBQ25CLE1BQU1iLFFBQVEsR0FBRyxJQUFJTixTQUFBLENBQUFvQixRQUFRLENBQUM7Z0JBQzVCbEIsR0FBRztnQkFDSG1CLE1BQU0sRUFBRTtrQkFBRWxCLE9BQU87a0JBQUVDO2dCQUFTLENBQUU7Z0JBQzlCQztlQUNELENBQUM7Y0FFRkMsUUFBUSxDQUFDZ0IsTUFBTSxDQUFDTixNQUFNLENBQUNPLE9BQU8sRUFBRVQsSUFBSSxDQUFDUyxPQUFPLENBQUM7Y0FDN0MsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3BCLElBQUlsQixRQUFRLENBQUNLLEtBQUssQ0FBQ2MsS0FBSyxDQUFDQyxJQUFJLEtBQUtmLEtBQUssQ0FBQ2UsSUFBSSxFQUFFZCxRQUFRLENBQUNOLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDYyxLQUFLLENBQUM7Z0JBQzVFLElBQUluQixRQUFRLENBQUNHLFFBQVEsS0FBS0EsUUFBUSxFQUFFQyxXQUFXLENBQUNKLFFBQVEsQ0FBQ0csUUFBUSxDQUFDO2NBQ3BFLENBQUM7Y0FDREgsUUFBUSxDQUFDcUIsRUFBRSxDQUFDLFFBQVEsRUFBRUgsUUFBUSxDQUFDO2NBQy9CakIsV0FBVyxDQUFDRCxRQUFRLENBQUM7Y0FFckIsT0FBTyxNQUFNQSxRQUFRLENBQUNzQixHQUFHLENBQUMsUUFBUSxFQUFFSixRQUFRLENBQUM7WUFDL0MsQ0FBQyxFQUFFLENBQUN0QixHQUFHLENBQUMsQ0FBQztZQUVULE1BQU0yQixXQUFXLEdBQUd2QixRQUFRLEVBQUV3QixPQUFPO1lBRXJDLE9BQU87Y0FBRUQsV0FBVztjQUFFWixVQUFVO2NBQUVOLEtBQUs7Y0FBRUYsUUFBUTtjQUFFTyxNQUFNO2NBQUVGO1lBQUksQ0FBRTtVQUNuRSJ9
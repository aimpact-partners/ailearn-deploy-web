System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/events@0.0.6/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ReactiveModel, reactiveProps, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    reactiveProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsEvents006Events) {
      dependency_1 = _beyondJsEvents006Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.5"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["dexie", "3.2.3"], ["socket.io-client", "4.6.1"], ["uuid", "9.0.0"], ["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive-2@1.0.0/model"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/events/events', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3907023605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _events = require("@beyond-js/events/events");
          /*bundle*/ /**
                      * The `ReactiveModel` class is a subclass of the `Events` class that provides a simple way to create
                      * reactive properties that can trigger events when they change. It also provides methods for setting
                      * and getting property values.
                      *
                      * @template T - The type of the properties that can be defined in the model.
                      * @extends Events
                      */
          class ReactiveModel extends _events.Events {
            schema;
            #isReactive = true;
            get isReactive() {
              return this.#isReactive;
            }
            fetching;
            fetched = false;
            processing = false;
            ready = false;
            processed = false;
            localdb = false;
            properties;
            loaded = false;
            constructor() {
              super();
              this.reactiveProps(['fetching', 'fetched', 'processing', 'processed', 'loaded', 'ready']);
            }
            reactiveProps(props) {
              for (const propKey of props) {
                const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
                const initialValue = descriptor ? descriptor.value : undefined;
                this.defineReactiveProp(propKey, initialValue);
              }
            }
            defineReactiveProp(propKey, initialValue) {
              const privatePropKey = `__${String(propKey)}`;
              Object.defineProperty(this, propKey, {
                get() {
                  if (!this.hasOwnProperty(privatePropKey)) {
                    this[privatePropKey] = initialValue;
                  }
                  return this[privatePropKey];
                },
                set(newVal) {
                  if (newVal === this[privatePropKey]) return;
                  this[privatePropKey] = newVal;
                  this.triggerEvent();
                },
                enumerable: true,
                configurable: true
              });
            }
            /**
             * The `triggerEvent` method triggers a change event on the model, which can be used to notify
             * subscribers of changes to the model's properties.
             *
             * @param {string} event - The name of the event to trigger.
             * @returns {void}
             */
            triggerEvent = (event = 'change') => this.trigger(event);
            /**
             * The `set` method sets one or more properties on the model.
             *
             * @param {keyof ReactiveModelPublic<T>} property - The name of the property to set.
             * @param {*} value - The value to set the property to.
             * @returns {void}
             */
            set(properties) {
              let props = Object.keys(properties);
              let updated = false;
              Object.keys(properties).forEach(prop => {
                const sameObject = typeof properties[prop] === 'object' && JSON.stringify(properties[prop]) === JSON.stringify(this[prop]);
                if (this[prop] === properties[prop] || sameObject) return;
                this[prop] = properties[prop];
                updated = true;
              });
              if (updated) this.triggerEvent();
            }
            getProperties() {
              const props = {};
              const properties = this.properties || this.skeleton;
              properties.forEach(property => {
                props[property] = this[property];
              });
              return props;
            }
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });

      /**************************
      INTERNAL MODULE: ./property
      **************************/

      ims.set('./property', {
        hash: 3124326805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defineReactiveProp = defineReactiveProp;
          exports.reactiveProps = reactiveProps;
          function _defineReactiveProp(target, propKey, initialValue) {
            const privatePropKey = `__${String(propKey)}`;
            Object.defineProperty(target, propKey, {
              get() {
                if (!target.hasOwnProperty(privatePropKey)) {
                  target[privatePropKey] = initialValue;
                }
                return target[privatePropKey];
              },
              set(newVal) {
                if (newVal === target[privatePropKey]) return;
                target[privatePropKey] = newVal;
                target.triggerEvent();
              },
              enumerable: true,
              configurable: true
            });
          }
          /*bundle */
          function reactiveProps(props) {
            return function (target) {
              const targetProto = "prototype" in target ? target.prototype : target;
              for (const propKey of props) {
                const descriptor = Object.getOwnPropertyDescriptor(targetProto, propKey);
                const initialValue = descriptor ? descriptor.value : undefined;
                defineReactiveProp(targetProto, propKey, initialValue);
              }
            };
          }
          function defineReactiveProp(target, propKey, initialValue) {
            const privatePropKey = `__${String(propKey)}`;
            Object.defineProperty(target, propKey, {
              get() {
                if (!target.hasOwnProperty(privatePropKey)) {
                  target[privatePropKey] = initialValue;
                }
                return target[privatePropKey];
              },
              set(newVal) {
                target.setReactiveProp(propKey, newVal);
              },
              enumerable: true,
              configurable: true
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactiveModel",
        "name": "ReactiveModel"
      }, {
        "im": "./property",
        "from": "reactiveProps",
        "name": "reactiveProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactiveModel') && _export("ReactiveModel", ReactiveModel = require ? require('./index').ReactiveModel : value);
        (require || prop === 'reactiveProps') && _export("reactiveProps", reactiveProps = require ? require('./property').reactiveProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwibG9jYWxkYiIsInByb3BlcnRpZXMiLCJsb2FkZWQiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJwcm9wcyIsInByb3BLZXkiLCJkZXNjcmlwdG9yIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcml2YXRlUHJvcEtleSIsIlN0cmluZyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJzZXQiLCJuZXdWYWwiLCJ0cmlnZ2VyRXZlbnQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZXZlbnQiLCJ0cmlnZ2VyIiwia2V5cyIsInVwZGF0ZWQiLCJmb3JFYWNoIiwicHJvcCIsInNhbWVPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UHJvcGVydGllcyIsInNrZWxldG9uIiwicHJvcGVydHkiLCJleHBvcnRzIiwiX2RlZmluZVJlYWN0aXZlUHJvcCIsInRhcmdldCIsInRhcmdldFByb3RvIiwicHJvdG90eXBlIiwic2V0UmVhY3RpdmVQcm9wIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3Byb3BlcnR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUE4Qk8sV0FUUDs7Ozs7Ozs7VUFTaUIsTUFBZ0JDLGFBQWlCLFNBQVFGLE9BQUEsQ0FBQUcsTUFBTTtZQUNyREMsTUFBTTtZQUNoQixDQUFBQyxVQUFXLEdBQVksSUFBSTtZQUMzQixJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUlBQyxRQUFRO1lBQ1JDLE9BQU8sR0FBWSxLQUFLO1lBQ3hCQyxVQUFVLEdBQVksS0FBSztZQUMzQkMsS0FBSyxHQUFZLEtBQUs7WUFDdEJDLFNBQVMsR0FBWSxLQUFLO1lBQ2hCQyxPQUFPLEdBQUcsS0FBSztZQUNmQyxVQUFVO1lBQ3BCQyxNQUFNLEdBQVksS0FBSztZQUV2QkMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0MsYUFBYSxDQUFTLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsRztZQUVVQSxhQUFhQSxDQUFJQyxLQUFxQjtjQUMvQyxLQUFLLE1BQU1DLE9BQU8sSUFBSUQsS0FBSyxFQUFFO2dCQUM1QixNQUFNRSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0Msd0JBQXdCLENBQUMsSUFBSSxFQUFFSCxPQUFPLENBQUM7Z0JBQ2pFLE1BQU1JLFlBQVksR0FBR0gsVUFBVSxHQUFHQSxVQUFVLENBQUNJLEtBQUssR0FBR0MsU0FBUztnQkFFOUQsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ1AsT0FBTyxFQUFFSSxZQUFZLENBQUM7O1lBRWhEO1lBRVVHLGtCQUFrQkEsQ0FBSVAsT0FBZ0IsRUFBRUksWUFBd0I7Y0FDekUsTUFBTUksY0FBYyxHQUFHLEtBQUtDLE1BQU0sQ0FBQ1QsT0FBTyxDQUFDLEVBQUU7Y0FFN0NFLE1BQU0sQ0FBQ1EsY0FBYyxDQUFDLElBQUksRUFBRVYsT0FBTyxFQUFFO2dCQUNwQ1csR0FBR0EsQ0FBQTtrQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDQyxjQUFjLENBQUNKLGNBQWMsQ0FBQyxFQUFFO29CQUN6QyxJQUFJLENBQUNBLGNBQWMsQ0FBQyxHQUFHSixZQUFZOztrQkFFcEMsT0FBTyxJQUFJLENBQUNJLGNBQWMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDREssR0FBR0EsQ0FBQ0MsTUFBa0I7a0JBQ3JCLElBQUlBLE1BQU0sS0FBSyxJQUFJLENBQUNOLGNBQWMsQ0FBQyxFQUFFO2tCQUVyQyxJQUFJLENBQUNBLGNBQWMsQ0FBQyxHQUFHTSxNQUFNO2tCQUM3QixJQUFJLENBQUNDLFlBQVksRUFBRTtnQkFDcEIsQ0FBQztnQkFDREMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCQyxZQUFZLEVBQUU7ZUFDZCxDQUFDO1lBQ0g7WUFFQTs7Ozs7OztZQU9BRixZQUFZLEdBQUdBLENBQUNHLEtBQUEsR0FBZ0IsUUFBUSxLQUFXLElBQUksQ0FBQ0MsT0FBTyxDQUFDRCxLQUFLLENBQUM7WUFDdEU7Ozs7Ozs7WUFPQUwsR0FBR0EsQ0FBQ2xCLFVBQTJDO2NBQzlDLElBQUlJLEtBQUssR0FBb0NHLE1BQU0sQ0FBQ2tCLElBQUksQ0FBQ3pCLFVBQVUsQ0FBQztjQUNwRSxJQUFJMEIsT0FBTyxHQUFHLEtBQUs7Y0FDbkJuQixNQUFNLENBQUNrQixJQUFJLENBQUN6QixVQUFVLENBQUMsQ0FBQzJCLE9BQU8sQ0FBQ0MsSUFBSSxJQUFHO2dCQUN0QyxNQUFNQyxVQUFVLEdBQ2YsT0FBTzdCLFVBQVUsQ0FBQzRCLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSUUsSUFBSSxDQUFDQyxTQUFTLENBQUMvQixVQUFVLENBQUM0QixJQUFJLENBQUMsQ0FBQyxLQUFLRSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNILElBQUksQ0FBQyxDQUFDO2dCQUN4RyxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDLEtBQUs1QixVQUFVLENBQUM0QixJQUFJLENBQUMsSUFBSUMsVUFBVSxFQUFFO2dCQUVuRCxJQUFJLENBQUNELElBQUksQ0FBQyxHQUFHNUIsVUFBVSxDQUFDNEIsSUFBSSxDQUFDO2dCQUM3QkYsT0FBTyxHQUFHLElBQUk7Y0FDZixDQUFDLENBQUM7Y0FFRixJQUFJQSxPQUFPLEVBQUUsSUFBSSxDQUFDTixZQUFZLEVBQUU7WUFDakM7WUFFQVksYUFBYUEsQ0FBQTtjQUNaLE1BQU01QixLQUFLLEdBQXdCLEVBQUU7Y0FDckMsTUFBTUosVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxJQUFJLElBQUksQ0FBQ2lDLFFBQVE7Y0FFbkRqQyxVQUFVLENBQUMyQixPQUFPLENBQUNPLFFBQVEsSUFBRztnQkFDN0I5QixLQUFLLENBQUM4QixRQUFRLENBQUMsR0FBRyxJQUFJLENBQUNBLFFBQVEsQ0FBQztjQUNqQyxDQUFDLENBQUM7Y0FDRixPQUFPOUIsS0FBSztZQUNiOztVQUNBK0IsT0FBQSxDQUFBN0MsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6SEQsU0FBUzhDLG1CQUFtQkEsQ0FBSUMsTUFBd0IsRUFBRWhDLE9BQWdCLEVBQUVJLFlBQXdCO1lBQ25HLE1BQU1JLGNBQWMsR0FBRyxLQUFLQyxNQUFNLENBQUNULE9BQU8sQ0FBQyxFQUFFO1lBRTdDRSxNQUFNLENBQUNRLGNBQWMsQ0FBQ3NCLE1BQU0sRUFBRWhDLE9BQU8sRUFBRTtjQUN0Q1csR0FBR0EsQ0FBQTtnQkFDRixJQUFJLENBQUNxQixNQUFNLENBQUNwQixjQUFjLENBQUNKLGNBQWMsQ0FBQyxFQUFFO2tCQUMzQ3dCLE1BQU0sQ0FBQ3hCLGNBQWMsQ0FBQyxHQUFHSixZQUFZOztnQkFFdEMsT0FBTzRCLE1BQU0sQ0FBQ3hCLGNBQWMsQ0FBQztjQUM5QixDQUFDO2NBQ0RLLEdBQUdBLENBQUNDLE1BQWtCO2dCQUNyQixJQUFJQSxNQUFNLEtBQUtrQixNQUFNLENBQUN4QixjQUFjLENBQUMsRUFBRTtnQkFDdkN3QixNQUFNLENBQUN4QixjQUFjLENBQUMsR0FBR00sTUFBTTtnQkFDL0JrQixNQUFNLENBQUNqQixZQUFZLEVBQUU7Y0FDdEIsQ0FBQztjQUNEQyxVQUFVLEVBQUUsSUFBSTtjQUNoQkMsWUFBWSxFQUFFO2FBQ2QsQ0FBQztVQUNIO1VBQ087VUFBVyxTQUFVbkIsYUFBYUEsQ0FDeENDLEtBQXFCO1lBRXJCLE9BQU8sVUFBVWlDLE1BQW9GO2NBQ3BHLE1BQU1DLFdBQVcsR0FBRyxXQUFXLElBQUlELE1BQU0sR0FBR0EsTUFBTSxDQUFDRSxTQUFTLEdBQUdGLE1BQU07Y0FFckUsS0FBSyxNQUFNaEMsT0FBTyxJQUFJRCxLQUFLLEVBQUU7Z0JBQzVCLE1BQU1FLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyx3QkFBd0IsQ0FBQzhCLFdBQVcsRUFBRWpDLE9BQU8sQ0FBQztnQkFDeEUsTUFBTUksWUFBWSxHQUFHSCxVQUFVLEdBQUdBLFVBQVUsQ0FBQ0ksS0FBSyxHQUFHQyxTQUFTO2dCQUU5REMsa0JBQWtCLENBQUMwQixXQUFXLEVBQUVqQyxPQUFPLEVBQUVJLFlBQVksQ0FBQzs7WUFFeEQsQ0FBQztVQUNGO1VBRU0sU0FBVUcsa0JBQWtCQSxDQUFJeUIsTUFBd0IsRUFBRWhDLE9BQWdCLEVBQUVJLFlBQXdCO1lBQ3pHLE1BQU1JLGNBQWMsR0FBRyxLQUFLQyxNQUFNLENBQUNULE9BQU8sQ0FBQyxFQUFFO1lBRTdDRSxNQUFNLENBQUNRLGNBQWMsQ0FBQ3NCLE1BQU0sRUFBRWhDLE9BQU8sRUFBRTtjQUN0Q1csR0FBR0EsQ0FBQTtnQkFDRixJQUFJLENBQUNxQixNQUFNLENBQUNwQixjQUFjLENBQUNKLGNBQWMsQ0FBQyxFQUFFO2tCQUMzQ3dCLE1BQU0sQ0FBQ3hCLGNBQWMsQ0FBQyxHQUFHSixZQUFZOztnQkFFdEMsT0FBTzRCLE1BQU0sQ0FBQ3hCLGNBQWMsQ0FBQztjQUM5QixDQUFDO2NBQ0RLLEdBQUdBLENBQUNDLE1BQWtCO2dCQUNyQmtCLE1BQU0sQ0FBQ0csZUFBZSxDQUFDbkMsT0FBTyxFQUFFYyxNQUFNLENBQUM7Y0FDeEMsQ0FBQztjQUNERSxVQUFVLEVBQUUsSUFBSTtjQUNoQkMsWUFBWSxFQUFFO2FBQ2QsQ0FBQztVQUNIIn0=
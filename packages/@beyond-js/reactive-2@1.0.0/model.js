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
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["dexie", "3.2.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/backend", "0.1.5"], ["socket.io-client", "4.6.1"], ["@beyond-js/reactive-2", "1.0.0"], ["@aimpact/ailearn", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsQ0FDeENDLEtBQXFCO1lBRXJCLE9BQU8sVUFBVWlDLE1BQW9GO2NBQ3BHLE1BQU1DLFdBQVcsR0FBRyxXQUFXLElBQUlELE1BQU0sR0FBR0EsTUFBTSxDQUFDRSxTQUFTLEdBQUdGLE1BQU07Y0FFckUsS0FBSyxNQUFNaEMsT0FBTyxJQUFJRCxLQUFLLEVBQUU7Z0JBQzVCLE1BQU1FLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyx3QkFBd0IsQ0FBQzhCLFdBQVcsRUFBRWpDLE9BQU8sQ0FBQztnQkFDeEUsTUFBTUksWUFBWSxHQUFHSCxVQUFVLEdBQUdBLFVBQVUsQ0FBQ0ksS0FBSyxHQUFHQyxTQUFTO2dCQUU5REMsa0JBQWtCLENBQUMwQixXQUFXLEVBQUVqQyxPQUFPLEVBQUVJLFlBQVksQ0FBQzs7WUFFeEQsQ0FBQztVQUNGO1VBRU0sU0FBVUcsa0JBQWtCLENBQUl5QixNQUF3QixFQUFFaEMsT0FBZ0IsRUFBRUksWUFBd0I7WUFDekcsTUFBTUksY0FBYyxHQUFHLEtBQUtDLE1BQU0sQ0FBQ1QsT0FBTyxDQUFDLEVBQUU7WUFFN0NFLE1BQU0sQ0FBQ1EsY0FBYyxDQUFDc0IsTUFBTSxFQUFFaEMsT0FBTyxFQUFFO2NBQ3RDVyxHQUFHO2dCQUNGLElBQUksQ0FBQ3FCLE1BQU0sQ0FBQ3BCLGNBQWMsQ0FBQ0osY0FBYyxDQUFDLEVBQUU7a0JBQzNDd0IsTUFBTSxDQUFDeEIsY0FBYyxDQUFDLEdBQUdKLFlBQVk7O2dCQUV0QyxPQUFPNEIsTUFBTSxDQUFDeEIsY0FBYyxDQUFDO2NBQzlCLENBQUM7Y0FDREssR0FBRyxDQUFDQyxNQUFrQjtnQkFDckJrQixNQUFNLENBQUNHLGVBQWUsQ0FBQ25DLE9BQU8sRUFBRWMsTUFBTSxDQUFDO2NBQ3hDLENBQUM7Y0FDREUsVUFBVSxFQUFFLElBQUk7Y0FDaEJDLFlBQVksRUFBRTthQUNkLENBQUM7VUFDSCIsIm5hbWVzIjpbIlJlYWN0aXZlTW9kZWwiLCJFdmVudHMiLCJzY2hlbWEiLCJpc1JlYWN0aXZlIiwiZmV0Y2hpbmciLCJmZXRjaGVkIiwicHJvY2Vzc2luZyIsInJlYWR5IiwicHJvY2Vzc2VkIiwibG9jYWxkYiIsInByb3BlcnRpZXMiLCJsb2FkZWQiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJwcm9wcyIsInByb3BLZXkiLCJkZXNjcmlwdG9yIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJkZWZpbmVSZWFjdGl2ZVByb3AiLCJwcml2YXRlUHJvcEtleSIsIlN0cmluZyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJzZXQiLCJuZXdWYWwiLCJ0cmlnZ2VyRXZlbnQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiZXZlbnQiLCJ0cmlnZ2VyIiwia2V5cyIsInVwZGF0ZWQiLCJmb3JFYWNoIiwicHJvcCIsInNhbWVPYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UHJvcGVydGllcyIsInNrZWxldG9uIiwicHJvcGVydHkiLCJleHBvcnRzIiwiX2RlZmluZVJlYWN0aXZlUHJvcCIsInRhcmdldCIsInRhcmdldFByb3RvIiwicHJvdG90eXBlIiwic2V0UmVhY3RpdmVQcm9wIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJpbmRleC50cyIsInByb3BlcnR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=
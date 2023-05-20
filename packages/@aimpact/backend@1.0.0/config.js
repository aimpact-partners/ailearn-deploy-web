System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/backend",
        "version": "1.0.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "params": {},
        "ssr": {},
        "backend": {
          "host": "wss://aimpact-partners-dev.ue.r.appspot.com"
        }
      });
    }
  };
});
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
        "params": {
          "openia": {
            "key": "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"
          },
          "elevenlabs": {
            "key": "ebe05ca0a4d9aafb4024d0666471a0c7",
            "id": "pNInz6obpgDQGcFmaJgB"
          }
        },
        "ssr": {},
        "backend": {
          "host": "wss://ws.dev.voicegenius.backend.balearesgroup.com"
        }
      });
    }
  };
});
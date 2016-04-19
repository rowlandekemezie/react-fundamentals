(function() {
  'use strict';

  module.exports = {
    "env": {
      "browser": true,
      "node": true

    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true,
        "es6": true,
        "modules": true

      }
    },
    "extends": "google",
    "plugins": [
      "react"
    ],
   
    "rules": {
      "curly": [2, "multi-line"]
    }
  };
})();
(function() {
  'use strict';

  module.exports = {
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
        "es6": true,
        "modules": true,
        "experimentalObjectRestSpread": true
      }
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "plugins": [
      "react"
    ],
    "rules": {
      "curly": [2, "multi-line"],
      "indent": [2, 2],
     "quotes": [2, "single"],
     "linebreak-style": [2, "unix"],
     "semi": [2, "always"],
     "prop-types": [0]
    },
    "globals":{
   "__dirname" : true,
   "process": true,
   "module": true,
   "require": true,
   "console": true
   }
  };
})();

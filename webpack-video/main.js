'use strict';

require(['./src/bear/bear'], function (bear) {
  document.body.appendChild(bear[0]);
});

// require('./src/es6/let')();
require('./src/es6/constant')();

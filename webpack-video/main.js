'use strict';

require(['./src/bear/bear'], function (bear) {
  document.body.appendChild(bear[0]);
});

// require('./src/es6/chapter1-syntax/let')();
// require('./src/es6/chapter1-syntax/constant')();
// require('./src/es6/chapter1-syntax/spread-rest')();
// require('./src/es6/chapter1-syntax/default-param')();
// require('./src/es6/chapter1-syntax/destructuring')();
// require('./src/es6/chapter1-syntax/object-literal')();
// require('./src/es6/chapter1-syntax/template-literal')();
// require('./src/es6/chapter1-syntax/arrow-function')();
// require('./src/es6/chapter1-syntax/for-of')();

// require('./src/es6/chapter2-iterator/test1')();
// require('./src/es6/chapter2-iterator/test2')();
// require('./src/es6/chapter2-iterator/test3')();
// require('./src/es6/chapter2-iterator/test4')();

require('./src/es6/chapter2-generator/test1')();

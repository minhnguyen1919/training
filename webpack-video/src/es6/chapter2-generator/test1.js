'use strict';

module.exports = function test () {

  function* generatorFunc1 () {
    console.log('Hi');
  }

  var gen = generatorFunc1();

  console.log(gen.next());


};

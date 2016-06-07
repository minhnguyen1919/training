'use strict';

module.exports = function test () {

  // -----------------------yield other gen­er­a­tors------------------------------

  function* generatorFoo () {
    yield 1;
    yield 2;
    yield 3;
  }

  function* generatorBar () {
    yield* generatorFoo();

    console.log('Finish');
  }

  for (let val of generatorBar()) {
    console.log(val);
  }


  // -----------------------return value inside generator-----------------------

  function* greet() {
    yield 'hello';
    yield 'world';
    return 1;
  }

  // The for-of construct doesnt print the value thats returned
  for (let message of greet()) {
    console.log(message);
  }

  // hello
  // world



  // ***** The value of a return state­ment is usu­ally unus­able inside of a gen­er­a­tor con­structs except when used with yield*

  function* greet1() {
    yield 'hello';
    yield 'world';
    return 1;
  }

  function* greet2() {
    // The result of invoking yield* is the return value.
    var returnValue = yield* greet1();
    console.log(returnValue);
  }

  for (let message of greet2()) {
    console.log(message);
  }

  // hello
  // world
  // 1

};

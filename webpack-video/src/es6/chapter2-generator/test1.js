'use strict';

module.exports = function test () {

  // -------------------------Generator base------------------------------------

  function* generatorFunc1 () {
    console.log('1');
    yield;                // line (A)
    console.log('two');
  }

  var gen = generatorFunc1();

  console.log(gen.next());    // Prints 1 then pauses at line (A)
  console.log(gen.next());    // resumes execution at line (A), then prints 2


  // -----------------------yield-----------------------------------------------

  function* doSomething() {
    var v = yield; // Pause execution, wait for the next() invocation.
    console.log(v);

    v = yield;

    console.log(v);
  }

  var gen1 = doSomething();

  // This makes the generator pause at the yield
  console.log(gen1.next());

  // This resumes execution and replaces the 'yield' placeholder
  // with the argument being passed - 'Hola'
  console.log(gen1.next('Hola'));

  console.log(gen1.next('Halo'));

  // ---------------------------------------------------------------------------

  function *foo() {
    try {
      yield 1;
      yield 2;
      yield 3;
    }
    finally {
      console.log( "cleanup!" );
    }
  }
  for (var v of foo()) {
    console.log( v );
  }
  // 1 2 3
  // cleanup!

};
